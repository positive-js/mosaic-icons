#!/usr/bin/env bash

set -e

[[ -x sketchtool/bin/sketchtool ]] && exit 0

curl -L -o sketch.zip http://www.sketchapp.com/static/download/sketch.zip
unzip -qo sketch.zip
cp -rp Sketch.app/Contents/Resources/sketchtool .
