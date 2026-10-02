# Ролик 01 — «Шаг на месте» (visual: walk)

Назначение: демонстрация упражнения на экране миссии. Ребёнок повторяет вслед, темп медленный.
Технология: image-to-video по стартовому кадру (Grok Imagine). Этот ролик — тестовый: на нём
отлаживаем стиль, петлю и формат, потом тиражируем на остальные 23 упражнения.

## Входные файлы

- Стартовый кадр: `assets/art/boy-front34.png` (мальчик 3/4 спереди, полный рост, чистый фон).
  Запасной вариант: `assets/art/boy-front.png` (строго спереди).
- Референс персонажа (если сервис принимает доп. картинки): `assets/art/sheet-character.png`.

## Настройки

| Параметр | Значение |
|----------|----------|
| Длительность | 5–6 с |
| Соотношение сторон | 4:3 (в приложении контейнер ≈ 3:2, 4:3 вписывается без обрезки) |
| Разрешение | 720p достаточно, 1080p если дёшево |
| Звук | нет |
| Камера | статичная, без зума и панорам |

## Промпт (английский — основной, модели видео понимают его точнее)

```
Same 3D-stylized cartoon boy from the reference image, unchanged appearance: wavy brown hair,
big brown eyes, teal athletic t-shirt with white seams, navy shorts over navy calf-length
leggings, white-and-grey sneakers with teal accents.

He marches in place slowly and calmly: knees lift gently to about hip height, one leg at a
time, arms swing naturally and relaxed at his sides, head stays level, spine tall, shoulders
relaxed, soft friendly smile. Steady rhythm, about one step per second.

Full body always in frame, feet visible, character centered. Plain light sky-blue studio
background, soft even lighting, no shadows on the wall. Static camera, no zoom, no pan,
no cuts. Seamless loop: the motion ends in the same pose it starts. Pixar-like clean render,
no text, no logos, no extra characters.
```

## Промпт (русский, если сервис лучше понимает русский)

```
Тот же 3D-стилизованный мультяшный мальчик с референса, внешность без изменений: каштановые
волнистые волосы, большие карие глаза, бирюзовая спортивная футболка с белыми швами, тёмно-синие
шорты поверх тёмно-синих леггинсов до икры, бело-серые кроссовки с бирюзой.

Он медленно и спокойно шагает на месте: колени мягко поднимаются примерно до уровня бёдер, по
одной ноге, руки естественно и расслабленно качаются вдоль тела, голова ровно, спина прямая,
плечи расслаблены, лёгкая улыбка. Ровный ритм, примерно один шаг в секунду.

Всё тело в кадре, стопы видны, персонаж по центру. Чистый светло-голубой фон, мягкий ровный
свет, без теней на стене. Статичная камера, без зума, панорам и склеек. Бесшовная петля:
движение заканчивается той же позой, с которой началось. Чистый рендер в духе Pixar, без
текста, логотипов и других персонажей.
```

## Негативный промпт (если поле есть)

```
camera movement, zoom, pan, cuts, motion blur, extra limbs, deformed hands, changing clothes,
changing hair, different character, text, watermark, logo, background objects, fast motion,
jumping, running
```

## Критерии приёмки

1. Персонаж узнаваем: лицо, волосы, одежда совпадают с референсом на всём протяжении.
2. Движение медленное и анатомически верное: колени не выше бёдер, спина прямая, нет прыжков.
3. Стопы и голова не выходят за кадр; камера не двигается.
4. Первый и последний кадр близки — петля не «дёргается» при зацикливании.
5. Нет лишних предметов, текста, второго персонажа, искажённых рук.

Если 1–2 не выполняются: добавить в промпт «identical to the reference, do not change the
character design» и уменьшить длительность до 4 с. Если 4 не выполняется: просить «starts and
ends in neutral standing pose, feet together».

## После приёмки

Сохранить как `assets/video/walk.mp4` (H.264, ≤ 1 МБ) и `assets/video/walk.webm` (VP9), затем
прописать `walk` в `POSE_VIDEOS` (data.js) — см. `docs/VIDEO_PIPELINE.md`.
