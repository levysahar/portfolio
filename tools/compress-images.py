#!/usr/bin/env python3
"""One-time image shrinker for the originals in images/.  Needs: pip install pillow
Dry run (changes nothing):  python tools/compress-images.py images
Apply (backs up first):     python tools/compress-images.py images --apply --backup ../portfolio-originals
Keeps file names and formats, fixes rotation, strips location data. Run it on a git branch."""
import argparse, io, shutil, sys
from pathlib import Path
from PIL import Image, ImageOps
ap = argparse.ArgumentParser()
ap.add_argument('folder'); ap.add_argument('--max', type=int, default=3000, help='longest side in px')
ap.add_argument('--quality', type=int, default=82); ap.add_argument('--apply', action='store_true'); ap.add_argument('--backup')
a = ap.parse_args()
if a.apply and not a.backup: sys.exit('--apply needs --backup <folder outside the repo>')
root = Path(a.folder); old_total = new_total = 0
for p in sorted(root.rglob('*')):
    if p.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp'}: continue
    old = p.stat().st_size
    im = ImageOps.exif_transpose(Image.open(p)); resized = max(im.size) > a.max
    if resized: im.thumbnail((a.max, a.max), Image.LANCZOS)
    buf = io.BytesIO(); f = p.suffix.lower()
    if f in ('.jpg', '.jpeg'): im.convert('RGB').save(buf, 'JPEG', quality=a.quality, optimize=True, progressive=True)
    elif f == '.png': im.save(buf, 'PNG', optimize=True)
    else: im.save(buf, 'WEBP', quality=a.quality)
    new = buf.tell()
    if new >= old * 0.9 and not resized: print(f'skip   {p} ({old//1024} KB)'); continue
    print(f'{"shrink" if a.apply else "would "} {p}: {old//1024} KB -> {new//1024} KB'); old_total += old; new_total += min(new, old)
    if a.apply:
        b = Path(a.backup) / p.relative_to(root); b.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(p, b); p.write_bytes(buf.getvalue())
print(f'\nTotal: {old_total//1024} KB -> {new_total//1024} KB' + ('' if a.apply else '  (dry run: nothing changed)'))
