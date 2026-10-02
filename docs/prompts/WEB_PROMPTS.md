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
