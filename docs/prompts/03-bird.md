# Ролик 03 — «Птица-собака» (visual: bird)

Назначение: демонстрация упражнения на экране миссии. Ребёнок повторяет вслед, темп медленный.
Технология: reference-to-video по персонажу (Grok Imagine Video 1.5, MCP `grok-imagine`), стартовый кадр не нужен.
Общая схема, настройки и сжатие: `docs/prompts/README.md`.

## Входные файлы (reference_images)

1. `assets/art/sheet-character.png` — это <IMAGE_1>, лист персонажа.
2. `assets/scenes/birddog.webp` — это <IMAGE_2>, нужный ракурс.

## Настройки

| Параметр | Значение |
|----------|----------|
| Длительность | 10 с |
| Соотношение сторон | 4:3 |
| Разрешение | 720p (максимум в режиме референсов) |
| Звук | нет (`generate_audio=false`) |
| Камера | статичная |

## Промпт

```
The same 3D-stylized cartoon boy as in <IMAGE_1> and <IMAGE_2>, identical character design: wavy brown hair, big brown eyes, teal athletic t-shirt with white seams, navy shorts over navy calf-length leggings, white-and-grey sneakers with teal accents.

Side view. The boy is on all fours on a blue exercise mat, hands under shoulders, knees under hips, back flat and neutral, head in line with the spine. Slowly he stretches his right arm forward and his left leg back until they form one line with his back, holds for a moment, and returns to all fours. Then he does the same with the left arm and the right leg. His torso stays still and level, no swaying, no arched lower back. Slow and controlled, about 5 seconds per side. The clip starts and ends on all fours, so it loops seamlessly.

Whole body always in frame including head and feet, character centered. Plain light sky-blue studio background, soft even lighting. Static camera, no zoom, no pan, no cuts. Pixar-like clean render, no text, no logos, no extra characters.

Avoid: camera movement, zoom, pan, cuts, motion blur, extra limbs, deformed hands, changing clothes, changing hair, different character, text, watermark, logo, fast motion, jumping.
```

Негативный промпт дописан в конец, отдельного поля в API нет.

## Критерии приёмки

1. Персонаж узнаваем: лицо, волосы, одежда совпадают с референсом на всём протяжении.
2. Корпус неподвижен, поясница не прогибается, голова на линии позвоночника.
3. Рука и противоположная нога вытягиваются до линии со спиной, не выше.
4. Обе стороны выполнены по очереди; коврик виден целиком.
5. Камера статична, тело целиком в кадре; нет лишних предметов, текста, второго персонажа, искажённых рук.
6. Начало и конец ролика в одной позе: петля не дёргается.
