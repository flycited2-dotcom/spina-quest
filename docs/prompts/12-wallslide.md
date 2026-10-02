# Ролик 12 — «Скольжение руками по стене» (visual: wallslide)

Назначение: демонстрация упражнения на экране миссии. Ребёнок повторяет вслед, темп медленный.
Технология: reference-to-video по персонажу (Grok Imagine Video 1.5, MCP `grok-imagine`), стартовый кадр не нужен.
Общая схема, настройки и сжатие: `docs/prompts/README.md`.

## Входные файлы (reference_images)

1. `assets/art/sheet-character.png` — это <IMAGE_1>, лист персонажа.
2. `assets/art/boy-front.png` — это <IMAGE_2>, нужный ракурс.

## Настройки

| Параметр | Значение |
|----------|----------|
| Длительность | 6 с |
| Соотношение сторон | 4:3 |
| Разрешение | 720p (максимум в режиме референсов) |
| Звук | нет (`generate_audio=false`) |
| Камера | статичная |

## Промпт

```
The same 3D-stylized cartoon boy as in <IMAGE_1> and <IMAGE_2>, identical character design: wavy brown hair, big brown eyes, teal athletic t-shirt with white seams, navy shorts over navy calf-length leggings, white-and-grey sneakers with teal accents.

Front view. The boy stands with his back against a pale wall, arms bent with elbows and backs of the hands lightly touching the wall. Slowly he slides his arms up along the wall to a comfortable height, then slowly slides them back down. Shoulders stay relaxed and low, not lifted towards the ears, ribs not flared, breathing calm. One slow repetition takes about 6 seconds. The clip starts and ends with arms bent at the starting height, so it loops seamlessly.

Whole body always in frame including head and feet, character centered. A plain pale wall fills the background, soft even lighting. Static camera, no zoom, no pan, no cuts. Pixar-like clean render, no text, no logos, no extra characters.

Avoid: camera movement, zoom, pan, cuts, motion blur, extra limbs, deformed hands, changing clothes, changing hair, different character, text, watermark, logo, fast motion, jumping.
```

Негативный промпт дописан в конец, отдельного поля в API нет.

## Критерии приёмки

1. Персонаж узнаваем: лицо, волосы, одежда совпадают с референсом на всём протяжении.
2. Плечи не поднимаются к ушам, руки скользят симметрично.
3. Диапазон комфортный, без выгибания поясницы.
4. Камера статична, тело целиком в кадре; нет лишних предметов, текста, второго персонажа, искажённых рук.
5. Начало и конец ролика в одной позе: петля не дёргается.
