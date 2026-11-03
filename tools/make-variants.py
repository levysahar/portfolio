#!/usr/bin/env python3
"""Builds the deployable site. Usage: python tools/make-variants.py <source> <out>
Copies the site (skipping tools, docs, .git, .github) and writes WebP copies of every photo in images/ at
480/960/1600/2400 px wide into images/_opt/. Originals are not copied. Needs: pip install pillow"""
import shutil, sys
from pathlib import Path
from PIL import Image, ImageOps
src, out = Path(sys.argv[1]), Path(sys.argv[2]); W = [480, 960, 1600, 2400]
SKIP = {'.git', '.github', 'tools', 'docs', out.name, 'README.md'}
shutil.rmtree(out, ignore_errors=True)
for p in sorted(src.rglob('*')):
    rel = p.relative_to(src)
    if p.is_dir() or rel.parts[0] in SKIP: continue
    if rel.parts[0] == 'images' and p.suffix.lower() in {'.jpg', '.jpeg', '.png', '.webp'}:
        im = ImageOps.exif_transpose(Image.open(p)); im = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
        d = out / 'images' / '_opt' / rel.relative_to('images').with_suffix(''); d.parent.mkdir(parents=True, exist_ok=True)
        for w in W:
            v = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            v.save(f'{d}-{w}.webp', 'WEBP', quality=80)
        continue
    t = out / rel; t.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(p, t)
