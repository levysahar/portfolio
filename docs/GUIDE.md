# Site guide

Everything you normally edit is in **`data/content.js`**. Text may contain HTML (`<br>`, `<b>`, links). Paths are relative to the site folder. A mistake in the file shows a red banner with the line number; run `node tools/check-content.js` before committing. Other docs: `BLOG.md` (blog, editor), `DEPLOY.md` (publishing, image variants).

## 1. Files
| Path | Purpose |
|---|---|
| `data/content.js` | all content and settings (this guide) |
| `images/`, `models/`, `files/` | photos, `.glb` models, PDFs (resume goes in `files/resume.pdf`) |
| `js/site.js`, `css/style.css` | rendering and look (colors and fonts: top of the CSS) |
| `blog/posts.json`, `blog.html`, `admin.html` | build log and its editor |
| `tools/` | `check-content.js`, `compress-images.py`, `make-variants.py`, `compress-model.sh` |

## 2. Site settings (`SITE`)
`name, role, tagline, heroImage, email, linkedin, resume, buttons:[[label,link]], skills:[{h,t}]`, `about:{bio:[...], education:[...], activities:[...], awards:[...]}`.

**`imageDefaults`** (default frame shapes, `"width/height"`): `home, card, hero, step, gallery`, e.g. `{card:"4/3", hero:"16/9"}`.

**`layout`** (all optional):
| Key | Effect | Default |
|---|---|---|
| `cardMin` / `galleryMin` | smallest card / gallery image width | 290px / 360px |
| `pageWidth` | widest project page | 1320px |
| `stepImage` | image share beside step text (text = 1fr) | 1.8fr |
| `stepText` | fixed text column width in steps | none |
| `stepSize` | default `size` for step images (see 6) | off |
| `stepMin` / `stepMax` | shortest fitted image / widest image column | 260px / 65% |
| `stack` | stack image lists vertically in every step | off |
| `fabCols` | columns on the Fabrication page | 2 |

**`labels`**: rename any fixed text: `navWork, navFab, navAbout, navResume, featured, seeAll, skills, work, chipAll, chipTeam, chipPersonal, back, prev, next, more, role, timeline, tools, team, gallery, drops, fab, fabIntro, about, education, activities, awards, contact, resume, download`.

## 3. Projects (`PROJECTS`, one entry each; order = page order)
**Every project uses the same template.** Copy `docs/project-template.js` (or run `node tools/new-project.js my-slug "My Title"`), paste it into `PROJECTS`, and delete the sections you don't need. Anything left out or empty is skipped.

Required: `slug` (unique, lowercase), `title`, `type` (`"team"` or `"personal"`, used by the Work page filter). Optional: `featured:true` (home page), `draft:true` (hidden), `year, role, tools, team, outcome` (card line), `summary`, `status` (tag under the stats), `stats:{"Label":"value"}`, `image` / `thumb` / `hero`, `gallery`, `drops`, `extra`, `titles`.

Sections, always in this order: `problem, what, specs, contribution, process, analysis, challenge, result, change`.

**Section values:** a string is a paragraph; a list of strings is bullets; a list of steps `[{h, p, list, image, size, stack}]` is a process (text beside images). Object form for one section: `{h:"Own heading", bullets:true|false, text:..., image:...}`. `titles:{contribution:"What I built", gallery:"Photos", drops:"Parts"}` renames headings for one project (all projects: edit `SEC` in `site.js`). `extra:[{h:"Heading", v:<any section value>}]` adds a section of your own, after the standard ones.

**`drops`** (dropdowns): `{h, open, p, list, table:[[header...],[row...]], links:[[label,file]], image}`.

**Old names still work:** `how` (merged into `process`; both lists are joined if both are set), `kind` (same as `type`), and `type:"flagship"` (ignored; the template is the same).

## 4. Images
Anywhere an image goes: `"images/a.jpg"`, an object, a list of them, or a model.
```js
image:{src:"images/a.jpg", ratio:"16/9", fit:"cover", zoom:1, x:50, y:50, dx:0, dy:0, w:"80%", align:"left", bg:"#E3E7E4", alt:"..."}
image:{model:"models/a.glb", ratio:"1/1", poster:"images/a.jpg", w:"80%", attrs:'exposure="1.5"'}
image:["images/a.jpg", {src:"images/b.jpg"}]          // list: side by side, or stacked with stack:true
```
| Key | Meaning |
|---|---|
| `ratio` | frame shape; height follows width |
| `fit` | `cover` (fills, crops) or `contain` (whole image) |
| `zoom` | 1 = fills (or fits); below 1 shows more of the photo, above 1 magnifies |
| `x`, `y` | focal point 0-100 (which part stays when cropping) |
| `dx`, `dy` | shift in % of the frame |
| `w`, `align` | maximum width (`"60%"`, `"500px"`; only shrinks) and position |
| `bg` | color behind the image when it does not fill the frame |

`thumb` (card) and `hero` (top of page) inherit from `image`; list only what differs: `thumb:{ratio:"1/1"}`. Click any image to enlarge it. Photos are served as compressed WebP copies automatically (`DEPLOY.md`).

## 5. Fabrication page
`FAB = [{h, t, images:[...]}]`, shown in `layout.fabCols` columns.

## 6. Sizing step images: one setting, `size`
| Goal | Step setting |
|---|---|
| Normal: image keeps its `ratio`, width from `stepImage` | nothing |
| As tall as the text | `size:"text"` |
| Taller than the text | `size:1.25` (a number under 20 is a multiplier of the text height) |
| Exact height | `size:"600px"` (pixels, or a number of 20 or more) |
| Several images stacked, sized together | add `stack:true` |
Site-wide: `layout:{stepSize:"text"}` (or a number or pixels); a step's own `size` overrides it, and `size:false` turns it off. Every image keeps its `ratio`; width = height x ratio, capped by `stepMax`. Side-by-side lists, and phones, use the normal layout. Do not combine with `w`. `stepText` fixes the text width so steps line up.
The older names `fill:true`, `grow:1.25`, `height:"600px"` and `layout.stepFill/stepGrow/stepHeight` still work (`height` beats `grow` beats `fill`) but `size` is the one to use.

## 7. Examples
```js
{ slug:"rover", type:"team", kind:"team", featured:true, title:"Rover", year:"2025", role:"Chassis", tools:"SolidWorks", team:"18",
  stats:{Result:"1st place"}, image:"images/rover.jpg", thumb:{ratio:"1/1"},
  problem:"Short paragraph.", contribution:["Point one","Point two"],
  process:[{h:"Chassis", p:"Why.", image:["images/a.jpg","images/b.jpg"], stack:true, grow:1.2}],
  result:{h:"Outcome", text:"1st of 20.", image:{model:"models/rover.glb", ratio:"4/3"}},
  drops:[{h:"Parts", table:[["Part","Qty"],["Bolt","12"]]}] },
```

## 8. Troubleshooting
Blank or banner: syntax error (missing comma, quote, or bracket at the reported line). Section missing: the field is not in that `type`'s list (section 3) or is misspelled (the checker names it). Image box says "add photo": the file name or case does not match.
