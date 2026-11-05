# Промпты принятых роликов (веб-Grok, image-to-video)

Вызов: `grok_generate_video` (MCP `grok-imagine-xai`), `duration_s` 6 (или 10 где указано), `resolution` 720p, `generate_audio=false`,
`image_path` — кадр из `assets/art/` (абсолютный путь). Во всех промптах начало: *«Same 3D-stylized cartoon boy as in the first frame, unchanged character design.»*
Ролики 01 «walk» и 04 «bridge» сделаны через API, их промпты в `01-walk.md` и `04-bridge.md`.

## shoulders — `boy-front-32.png`, 6 с
Front view, standing still in one place. His arms hang straight down beside his body the whole time and never move. Only his shoulders move in small slow shoulder rolls: both shoulders rise a little, roll back, and drop down, one smooth roll in about 3 seconds, repeated twice, symmetrical. Head level and still, feet planted, soft smile. The video ends in exactly the same pose as the first frame. Whole body in frame, centered, plain light sky-blue background, soft light, static camera, no zoom, no cuts, no text. Avoid: raised arms, arms spread out, camera movement, fast motion, changing clothes or hair.
*(первая версия без фразы про неподвижные руки: мальчик разводил руки в стороны, отклонено)*

## stand — `boy-front-32.png`, 6 с
Front view. He stands tall and balanced, feet hip-width apart, knees soft, arms hanging relaxed at his sides and not moving. With a calm slow breath the crown of his head gently grows upward and his shoulders relax down, then he settles back. Head over shoulders, shoulders over pelvis, symmetrical, soft friendly smile. The movement is small and calm, one breath takes about 6 seconds. The video ends in exactly the same pose as the first frame. (общий хвост: whole body in frame, plain light sky-blue background, static camera…)

## wall — `boy-front-32h.png`, 6 с
Front view. He stands with his back against a plain pale wall (the plain light background is the wall), arms relaxed at his sides, feet flat on the floor. Slowly he grows a little taller through the crown of his head, a gentle stretch upward of only a couple of centimetres, shoulders relaxed and down, chin level, then relaxes back. His heels stay flat on the floor the whole time, he never rises onto his toes, and his head always stays well inside the frame. Calm breathing, symmetrical. One slow repetition takes about 6 seconds. The video ends in exactly the same pose as the first frame. Whole body in frame with empty space above the head…
*(кадр без запаса над головой: голова уходила за край, отклонено)*

## wallslide — `boy-front-32.png`, 6 с
Front view. He stands with his back against a plain pale wall (the plain light background is the wall). His arms are bent with elbows at his sides and the backs of the hands lightly touching the wall, like the letter W. Slowly he slides both arms up along the wall to a comfortable height, like the letter Y, then slowly slides them back down to the starting W position. Both arms move together symmetrically, shoulders stay relaxed and low, not lifted towards the ears, calm breathing, feet planted. One slow repetition takes about 6 seconds. The video ends in exactly the same pose as the first frame.

## armsup — `boy-front-32.png`, 6 с
Front view. He stands with his back close to a plain pale wall (the plain light background is the wall), arms relaxed at his sides. Slowly he raises both arms out to the sides and up overhead to a comfortable height, shoulders staying low, then slowly lowers them back down. Both arms move symmetrically, ribs not flared, breathing calm, head still, feet planted. One slow repetition takes about 6 seconds. The video ends with arms down in exactly the same pose as the first frame.

## armraise — `boy-side-right-32.png`, 6 с
Side view, he faces right. He stands tall, arms relaxed at his sides. Slowly, as he breathes in, he raises both straight arms forward in front of him up to about shoulder height, then slowly lowers them back down as he breathes out. Both arms move together, shoulders stay low and relaxed, ribs not flared, back straight, head still, feet planted. One slow repetition takes about 6 seconds. The video ends with arms down in exactly the same pose as the first frame. Avoid: arms above shoulder height, turning around…
*(кадр спереди: руки уходили в стороны, отклонено)*

## breathstand — `boy-front-32.png`, 10 с
Front view. He stands tall and relaxed, feet hip-width apart, arms hanging loosely and not moving, eyes gently half-closed. He breathes slowly and deeply: on the inhale his chest and ribs softly expand, on the exhale they slowly relax. Shoulders stay low and relaxed and do not lift, the rest of the body is still. One full breath takes about 5 seconds, repeated twice. The video ends in exactly the same pose as the first frame. Avoid: raised arms, shrugging…

## scapula — `boy-back-32.png`, 6 с
Back view, he faces away from the camera. He stands tall with arms relaxed at his sides. Slowly he gently draws his shoulder blades back and slightly down, holds for a moment, then relaxes. The movement is small and symmetrical, shoulders do not lift towards the ears, head still, feet planted. One slow repetition takes about 6 seconds. The video ends in exactly the same relaxed pose as the first frame. Avoid: turning around, raised arms…

## deadbug — `mat-lying-32.png`, 10 с
He lies on his back on a blue exercise mat, side view, knees bent, feet flat, arms resting along his body. Right away and without pausing, he slowly lifts his near leg until the knee is bent at 90 degrees, then lowers that heel back to the mat (about 3 seconds). Then immediately he slowly lifts the other leg the same way and lowers it back (about 3 seconds). Then he repeats both legs once more at the same slow pace until the end of the video, so the whole 10 seconds are filled with leg movement. Lower back and head stay on the mat, calm breathing. The video ends with both feet flat, the same pose as the first frame. Avoid: lying still…
*(первая версия: поднималась одна нога, остальное время лежал, повторена)*

## breath — `mat-lying-32.png`, 10 с (третья попытка)
The boy rests on his back on the blue mat, knees bent, feet flat, and his whole body stays frozen like a photograph: legs, hips, back, arms, neck and head do not move at all. The only motion in the entire video is very subtle natural breathing: his chest and belly softly swell with each slow inhale and softly settle with each slow exhale, a tiny movement under the t-shirt. Eyes gently closed, peaceful face. Two slow breaths, about 5 seconds each. The video ends in exactly the same pose as the first frame. Avoid: any movement of hips, knees or legs, bridge, sitting up…
*(попытки 1–2 со словами «belly rises», «lower ribs rise»: модель делала мост)*

## chin — отклонено дважды
Обе версии («glides his chin back», «head only slides horizontally, never tilts») давали запрокидывание головы назад. Показ ребёнку такого движения недопустим, поэтому ролика нет.

---

# Режим референсов (веб, с 05.11.2026)

Вызов: `grok_generate_video` (MCP `grok-imagine-xai`), `image_paths` = [`assets/art/sheet-character.png`, ракурс], `aspect_ratio` 3:2, `resolution` 720p, `generate_audio=false`.
Ракурс: `boy-side-right.png` для вида сбоку, `boy-front.png` для вида спереди. Драйвер ставит задаче `failed` на середине генерации (см. README), ролики забирать из Библиотеки.

Начало каждого промпта: *«The same 3D-stylized cartoon boy as in @Image 1 and @Image 2, identical character design: wavy brown hair, big brown eyes, teal athletic t-shirt with white seams, navy shorts over navy calf-length leggings, white-and-grey sneakers with teal accents.»*
Хвост каждого промпта: *«The video ends in exactly the same pose as the first frame. Whole body (and the chair) always in frame. Plain light sky-blue studio background, soft even lighting. Static camera, no zoom, no pan, no cuts, no text, no extra characters. Avoid: camera movement, fast motion, changing clothes or hair, different character.»* (плюс запреты под упражнение).

## squat — сбоку, 6 с
Side view, he faces right, exactly like @Image 2. A simple wooden chair stands right behind him, its seat edge just behind his hips. He starts standing tall, both arms held straight forward at shoulder height for balance; his arms stay in that position the whole time and never move. Slowly he moves his hips back and bends his knees a little until his bottom lightly touches the edge of the chair seat, then smoothly stands up again to the tall posture. Back stays straight, chest open, head level, feet planted and never move. He never sits down on the seat and never leans on the chair. One slow repetition takes about 6 seconds.

## bird — сбоку, 10 с, обрезан до 5,96 с
Side view, his head points to the right. He is on all fours on a blue exercise mat, hands under shoulders, knees under hips, back flat, head in line with the spine. Slowly he stretches one arm straight forward and the opposite leg straight back until they form one line with his back, holds for a moment, and returns to all fours. Then he does the same with the other arm and the other leg, and returns to all fours. His back stays flat and level the whole time, it never sags or arches, hips never tilt, head never lifts. Slow and controlled, about 5 seconds per side.
*(вторая сторона в обоих вариантах не возвращалась в исходную позу, поэтому оставлена первая: `ffmpeg -t 5.96`)*

## cat — сбоку, 6 с
Side view, his head points to the right. He is on all fours on a blue exercise mat, hands under shoulders, knees under hips, back flat and neutral. Slowly, as if exhaling, he gently rounds his back upward like a cat and lets his head drop a little, then smoothly returns to the flat neutral back. His back never sags or arches downward, his head never lifts up, hands and knees never move. One slow repetition takes about 6 seconds.

## rotate — спереди, 10 с
Front view, facing the camera. He sits upright on a simple wooden chair, feet flat on the floor, knees together, arms crossed on his chest. Slowly he turns his chest a little to his right, returns to the centre, turns a little to his left, and returns to the centre. Only the chest turns, small comfortable range; his pelvis, knees and feet always face the camera and never move, his arms stay crossed on his chest, head turns together with the chest and never tilts. About 4 seconds per side.

## wallpush — сбоку, 6 с
Side view. A plain pale wall stands on the right side of the frame. He faces the wall, standing a bit more than an arm's length from it, palms flat on the wall at chest height, arms straight. Slowly he bends his elbows and leans his whole body towards the wall as one straight line from head to heels, then gently pushes back to straight arms. His heels stay flat on the floor and never lift, his feet never move, his hips never sag or stick out, head stays in line with his body. One slow repetition takes about 6 seconds.

## balance — спереди, 6 с (2-я попытка)
Front view, facing the camera. He stands upright next to a simple wooden chair placed at his left side, and lightly rests the fingertips of his left hand on the top of its backrest; his right arm hangs relaxed. Slowly he lifts his right foot just a few centimetres off the floor, holds it there for a moment, then slowly puts it back down. The lift is small, the knee bends only a little. He stays in exactly the same place in the frame the whole time and never steps, sways or slides sideways; the chair never moves; body upright, hips level, calm face. One slow repetition takes about 6 seconds.
*(1-я попытка без «stays in exactly the same place»: фигура съезжала по кадру, SSIM 0,88)*

## abduction — спереди, 6 с
Front view, facing the camera. He stands upright next to a simple wooden chair that is at his side, and lightly holds the top of its backrest with the fingertips of the nearer hand; the other arm hangs relaxed. Slowly he lifts the straight leg farther from the chair a little out to the side, only a small distance, holds for a moment, then slowly lowers it back beside the other foot. His torso stays upright and never leans, pelvis level and never turns, toes point forward, standing knee soft. He never lets go of the chair and the chair never moves. One slow repetition takes about 6 seconds.

## sit — сбоку, 6 с
Side view, he faces right. He sits upright on a simple wooden chair, feet flat on the floor, knees at right angles, hands resting on his thighs. Slowly, with a calm breath, he grows a little taller through the crown of his head, shoulders relaxed and down, then settles back into a comfortable upright seat. The movement is small. His hands stay on his thighs and never move, feet never move, chin stays level and his head never tilts back or forward, he never stands up. One slow repetition takes about 6 seconds.

## sitstand — сбоку, 10 с
Side view, he faces right. He sits upright on a simple wooden chair, feet flat on the floor, both arms held straight forward at shoulder height; his arms stay in that position the whole time. Slowly and smoothly he stands up to full height without pushing off with his hands and without any jerk, back straight, knees over his feet, then slowly and with control sits back down onto the chair. His feet never move, the chair never moves, he never drops onto the seat. About 4 seconds up and 4 seconds down.

## calf — сбоку, 6 с
Side view. A plain pale wall stands on the right side of the frame. He faces the wall with both palms on it at chest height. One leg is stepped back, straight, with its heel flat on the floor; the front knee is bent. Slowly he shifts his weight a little forward towards the wall, holds for a moment, then shifts back. The movement is small. The back heel stays flat on the floor and never lifts, his feet never move, his hands stay on the wall, back straight. One slow repetition takes about 6 seconds.

## stretch — отклонено трижды
1-я попытка: обе ноги прямые, в наклоне круглая спина и опущенная голова. 2-я и 3-я (добавлено «Only ONE leg is straight… back perfectly straight like a board… eyes looking forward»): спина прямая, но обе ноги всё равно прямые, петля 0,88–0,90. Ролика нет, показывается схема.
