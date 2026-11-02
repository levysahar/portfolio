# Build log (blog), lightbox, image compression

## More detail button
A project page shows a **More detail** button automatically when `blog/posts.json` has a published post for that project. Change the label with `labels:{more:"..."}` in `SITE`.

## Posts: `blog/posts.json`
A list of posts. `project` is the project's `slug`. Newest date shows first. `"draft":true` hides a post.
```json
[{"project":"enigma-replica","date":"2026-11-02","title":"Pawl finally clears the wheel","draft":false,
  "blocks":[
   {"t":"p","x":"Short update. <b>HTML</b> and <img class=\"b-inline\" src=\"images/icon.png\"> inline images work in text."},
   {"t":"h","x":"What changed"},
   {"t":"list","items":["Moved the pivot 2 mm","Reprinted the pawl"]},
   {"t":"img","src":"images/enigma-1.jpg","layout":"left","w":"40%","caption":"New pawl","alt":"Pawl"},
   {"t":"p","x":"Text flows around a left or right image and wraps back under it."},
   {"t":"img","src":"images/enigma-2.jpg","layout":"break","w":"70%","align":"center"},
   {"t":"video","url":"https://www.youtube.com/embed/VIDEO_ID"},
   {"t":"model","src":"models/rotor.glb","w":"80%"}]}]
```
- **Block types:** `p`, `h`, `list`, `img`, `video`, `model`.
- **Image layouts:** `break` (own line; `w` and `align` left/center/right), `left` or `right` (text wraps around; `w` default 40%). On phones wrapped images drop to their own line. A heading ends a wrap.
- Edit or delete a post by editing or removing its entry; a deleted post can be restored from GitHub history.

## Lightbox
Click a project or blog image to enlarge it. Esc or a click closes it.

## Compressing the originals (one time, on your computer)
```
pip install pillow
python tools/compress-images.py images                       # dry run, changes nothing
python tools/compress-images.py images --apply --backup ../portfolio-originals
```
Keeps names and formats, shrinks to 3000 px on the long side (`--max`), quality 82 (`--quality`), fixes rotation, strips location data. Run on a branch. Git history still holds the old versions, so the repository itself does not get smaller.
