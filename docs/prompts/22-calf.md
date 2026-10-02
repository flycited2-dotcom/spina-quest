# Ролик 22 — «Растяжка икры у стены» (visual: calf)

Назначение: демонстрация упражнения на экране миссии. Ребёнок повторяет вслед, темп медленный.
Технология: reference-to-video по персонажу (Grok Imagine Video 1.5, MCP `grok-imagine`), стартовый кадр не нужен.
Общая схема, настройки и сжатие: `docs/prompts/README.md`.

## Входные файлы (reference_images)

1. `assets/art/sheet-character.png` — это <IMAGE_1>, лист персонажа.
2. `assets/art/boy-side-right.png` — это <IMAGE_2>, нужный ракурс.

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

Side view, the pale wall is on the right side of the frame. The boy faces the wall with both hands on it at chest height. One leg is stepped back with the heel flat on the floor and the leg straight, the front knee is bent. Slowly he shifts his weight gently forward until a mild stretch in the back calf, holds for a moment, then shifts back. Back straight, back heel never lifts, movement small. One slow repetition takes about 6 seconds. The clip starts and ends in the same pose, so it loops seamlessly.

Whole body always in frame including head and feet, character centered. A plain pale wall fills the background, soft even lighting. Static camera, no zoom, no pan, no cuts. Pixar-like clean render, no text, no logos, no extra characters.

Avoid: camera movement, zoom, pan, cuts, motion blur, extra limbs, deformed hands, changing clothes, changing hair, different character, text, watermark, logo, fast motion, jumping.
```

Негативный промпт дописан в конец, отдельного поля в API нет.

## Критерии приёмки

1. Персонаж узнаваем: лицо, волосы, одежда совпадают с референсом на всём протяжении.
2. Задняя пятка всё время на полу, нога прямая, корпус прямой.
3. Перенос веса небольшой и плавный.
4. Камера статична, тело целиком в кадре; нет лишних предметов, текста, второго персонажа, искажённых рук.
5. Начало и конец ролика в одной позе: петля не дёргается.
