#!/bin/sh
# Shrinks a 3D model. Usage: tools/compress-model.sh in.glb out.glb   (needs Node: npm install --global @gltf-transform/cli)
# Options vary by version; run "gltf-transform optimize --help" if one is rejected. Lower --simplify-ratio for a smaller file.
gltf-transform optimize "$1" "$2" --compress draco --texture-compress webp --texture-size 1024 --simplify-ratio 0.25 --simplify-error 0.01
