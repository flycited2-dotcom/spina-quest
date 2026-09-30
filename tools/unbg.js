// Удаление светлого фона у картинок персонажей (заливка от краёв + мягкий край).
// Использование: node tools/unbg.js in.png out.webp [tolerance=14]
const { chromium } = require(process.env.PW_MODULE || 'playwright');
const fs = require('fs');
const [,, inp, out, tolArg] = process.argv; const tol = Number(tolArg || 14);
(async () => {
  const browser = await chromium.launch(process.env.PW_EXEC ? { executablePath: process.env.PW_EXEC } : {});
  const page = await browser.newPage();
  const b64 = fs.readFileSync(inp).toString('base64');
  const res = await page.evaluate(async ({ b64, tol, type }) => {
    const img = new Image(); img.src = `data:image/${type};base64,` + b64; await img.decode();
    const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0);
    const im = ctx.getImageData(0, 0, c.width, c.height); const d = im.data; const W = c.width, H = c.height;
    const isBg = (i) => { const r = d[i], g = d[i + 1], b = d[i + 2]; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); return mn > 255 - 3 * tol - 10 && (mx - mn) < tol + 8; };
    const seen = new Uint8Array(W * H); const q = [];
    for (let x = 0; x < W; x++) { q.push(x, (H - 1) * W + x); }
    for (let y = 0; y < H; y++) { q.push(y * W, y * W + W - 1); }
    while (q.length) {
      const p = q.pop(); if (seen[p]) continue; seen[p] = 1;
      if (!isBg(p * 4)) continue;
      d[p * 4 + 3] = 0;
      const x = p % W, y = (p / W) | 0;
      if (x > 0) q.push(p - 1); if (x < W - 1) q.push(p + 1); if (y > 0) q.push(p - W); if (y < H - 1) q.push(p + W);
    }
    // мягкий край: полупрозрачность для пикселей рядом с фоном
    const a = new Uint8ClampedArray(W * H); for (let p = 0; p < W * H; p++) a[p] = d[p * 4 + 3];
    for (let p = 0; p < W * H; p++) {
      if (a[p] === 0) continue; const x = p % W, y = (p / W) | 0; let n = 0, t = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue; n++; if (a[yy * W + xx] === 0) t++; }
      if (t) d[p * 4 + 3] = Math.round(255 * (1 - t / n * 0.7));
    }
    ctx.putImageData(im, 0, 0);
    // обрезка по содержимому
    let minX = W, minY = H, maxX = 0, maxY = 0;
    for (let p = 0; p < W * H; p++) if (d[p * 4 + 3] > 8) { const x = p % W, y = (p / W) | 0; if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; }
    const c2 = document.createElement('canvas'); c2.width = maxX - minX + 1; c2.height = maxY - minY + 1;
    c2.getContext('2d').drawImage(c, minX, minY, c2.width, c2.height, 0, 0, c2.width, c2.height);
    return c2.toDataURL('image/webp', 0.9).split(',')[1];
  }, { b64, tol, type: inp.endsWith('.png') ? 'png' : 'webp' });
  fs.writeFileSync(out, Buffer.from(res, 'base64'));
  console.log('ok', out, fs.statSync(out).size);
  await browser.close();
})();
