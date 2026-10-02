#!/usr/bin/env bash
# Сжатие сгенерированного ролика для приложения: H.264 (mp4) + VP9 (webm), без звука, 24 к/с.
# Использование: tools/encode-video.sh <исходный.mp4> <visual>
# Результат: assets/video/<visual>.mp4 и assets/video/<visual>.webm (нужен ffmpeg).
set -euo pipefail
src="$1"; key="$2"
out="$(dirname "$0")/../assets/video"
mkdir -p "$out"
vf="scale=${WIDTH:-960}:-2:flags=lanczos"   # веб-Grok отдаёт 1168×768 → 960×630
ffmpeg -v error -y -i "$src" -map 0:v:0 -an -vf "$vf" -c:v libx264 -profile:v main -pix_fmt yuv420p \
  -crf "${CRF_MP4:-28}" -preset slow -r 24 -movflags +faststart "$out/$key.mp4"
ffmpeg -v error -y -i "$src" -map 0:v:0 -an -vf "$vf" -c:v libvpx-vp9 -b:v 0 -crf "${CRF_WEBM:-36}" \
  -row-mt 1 -pix_fmt yuv420p -r 24 "$out/$key.webm"
ls -l "$out/$key.mp4" "$out/$key.webm"
