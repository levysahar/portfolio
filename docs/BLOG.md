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

## Editor: `admin.html`
Open `https://levysahar.github.io/portfolio/admin.html` on any device.
1. **Token (once per device):** GitHub, Settings, Developer settings, Fine-grained tokens, Generate. Limit it to this repository, permission **Contents: Read and write**. Paste it into the editor. It is stored only in that browser; never put it in the repo. Anyone can open the page, but nobody can save without a token.
2. **Posts:** the list shows every post (newest first). **New post**, **Edit**, and **Delete** (asks first; recoverable from GitHub history). New posts start as drafts: untick Draft to publish.
3. **Blocks:** add paragraphs (bold, italic, link buttons), headings, lists, images, video links, and 3D models; reorder or remove with the arrows and ×.
4. **Images:** upload from your camera roll or computer. They are shrunk to 2400 px (JPEG) in the browser before upload, so phone uploads stay small. Pick the layout (break, left, right), width, alignment, caption, and alt text.
5. **Models:** upload a `.glb` (keep under about 10 MB; 25 MB is the web limit). **Video:** paste a YouTube or Vimeo link (large video files do not belong in the repo).
6. **Saving** commits to GitHub. The change goes live in 1-2 minutes. If the file changed elsewhere, the editor tells you to reload.

## Cropping, positioning and zooming a blog image
In the editor, tick **Crop, position and zoom** on an image block. A preview frame appears: **drag** to move the picture, **scroll** (or use the slider) to zoom, and pick the frame shape and fit. Zoom, x and y can also be typed. In `posts.json` the fields are `ratio` (turns framing on, e.g. `"4/3"`), `zoom` (1 fills the frame, below 1 shows more), `x` and `y` (0-100, which part stays in view), `fit` (`cover` or `contain`). Framing only applies when `ratio` is set. Clicking the image on the site still shows the whole photo.
```json
{"t":"img","src":"images/blog/a.jpg","layout":"break","w":"70%","ratio":"16/9","zoom":1.4,"x":30,"y":60}
```

## Troubleshooting the editor
- **403 (or 404) when saving or uploading:** the token can read the repo but not write to it. Make a new fine-grained token: Repository access **Only select repositories** (this one), Repository permissions **Contents: Read and write**. Or make a classic token with the `public_repo` scope. Sign out of the editor and paste the new token. The editor now shows GitHub's own message under the error.
- **The image preview is blank right after uploading:** it uses your local copy; reload the editor once the site has finished deploying.
