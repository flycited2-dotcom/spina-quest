// Обрезка и масштабирование картинок через Chromium (canvas).
// Использование: node tools/crop.js jobs.json   — формат заданий см. в tools/crop-jobs.json
const { chromium } = require(process.env.PW_MODULE || 'playwright');
const fs = require('fs'); const path = require('path');
const jobs = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
(async () => {
  const browser = await chromium.launch(process.env.PW_EXEC ? { executablePath: process.env.PW_EXEC } : {});
  const page = await browser.newPage();
  for (const j of jobs) {
    const b64 = fs.readFileSync(j.src).toString('base64');
    const out = await page.evaluate(async ({ b64, j }) => {
      const img = new Image(); img.src = 'data:image/png;base64,' + b64; await img.decode();
      const sx = j.x || 0, sy = j.y || 0, sw = j.w || img.width - sx, sh = j.h || img.height - sy;
      const scale = j.maxH ? Math.min(1, j.maxH / sh) : (j.maxW ? Math.min(1, j.maxW / sw) : 1);
      const c = document.createElement('canvas'); c.width = Math.round(sw * scale); c.height = Math.round(sh * scale);
      const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, c.width, c.height);
      return c.toDataURL(j.webp ? 'image/webp' : (j.jpg ? 'image/jpeg' : 'image/png'), j.q || 0.88).split(',')[1];
    }, { b64, j });
    fs.mkdirSync(path.dirname(j.out), { recursive: true });
    fs.writeFileSync(j.out, Buffer.from(out, 'base64'));
    console.log('ok', j.out, fs.statSync(j.out).size);
  }
  await browser.close();
})();
