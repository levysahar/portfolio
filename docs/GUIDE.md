# Guide: templates, image crops, dropdowns, 3D models

## 1. Project templates
Set `type` on a project. The page shows these fields in this order and skips any you leave out.

| type | fields (in order) |
|---|---|
| `flagship` | problem, contribution, process, analysis, result, change |
| `team` | problem, contribution, process, result, change |
| `personal` | what, specs, how, challenge, result, change |

Field values:
- **string**: a paragraph. **array of strings**: a bullet list.
- **array of `{h, p, image}`** (for `process`, `how`): full-width steps, text beside a large image, alternating sides.
- Always available: `gallery` (array of images), `drops` (dropdowns), `stats` (extra cells in the summary strip, e.g. `stats:{Mass:"1.2 kg"}`), `status` (tag like "In progress"), `extra:[{h:"Heading",v:value}]` for any custom section.
- Change headings or add a template: edit `TPL` at the top of `js/site.js`.
- Page order: the order of entries in `PROJECTS`. The Previous / Next buttons at the bottom follow it.
- See everything working at `project.html?p=example` (the `example` entry; delete it when done).

## 2. Image crop and aspect ratio
Any image can be a plain path or an object:
```js
image:"images/a.jpg"
image:{src:"images/a.jpg", ratio:"21/9", x:30, y:60, zoom:1.4}
```
| key | meaning |
|---|---|
| `ratio` | width/height of the frame: `"16/9"`, `"4/3"`, `"1/1"`, `"4/5"`, `"21/9"` |
| `x` | horizontal offset, 0 = show the left edge, 50 = center, 100 = right edge |
| `y` | vertical offset, 0 = top, 50 = center, 100 = bottom |
| `zoom` | 1 = fit, 1.5 = zoom in 50% around the x/y point |

The image always fills the frame and the rest is cropped. Site-wide defaults are `imageDefaults` in the `SITE` block (`home`, `card`, `hero`, `step`, `gallery`). A card can use a different picture from the page hero with `thumb:`.

## 3. Dropdowns (`drops`)
Each item is `{h, open?, p?, list?, table?, links?}`; use any combination.
```js
drops:[
 {h:"Parts list", table:[["Part","Qty","Source"],["Bearing 608","4","[vendor]"]]},
 {h:"Files", links:[["CAD (STEP)","files/part.step"],["STL","files/part.stl"]]},
 {h:"Notes", list:["Printed at 0.2 mm","PETG"]},
 {h:"Wiring", p:"Text or HTML here", open:true}
]
```
Put linked files in `files/`. The first table row is the header.

## 4. 3D model viewer
Uses Google's `<model-viewer>`: drag to rotate, scroll or pinch to zoom. Use it anywhere an image goes (hero, step, gallery):
```js
image:{model:"models/rotor.glb", ratio:"4/3", poster:"images/rotor.jpg"}
```
- `model`: path to a `.glb` file (or a full URL). `poster` (optional): image shown while it loads. `ratio` sets the frame.
- `attrs` (optional): extra viewer options, e.g. `attrs:'camera-orbit="45deg 60deg 3m" exposure="1.2"'`. Remove auto-rotate by editing `fig()` in `js/site.js`.
- For a project **card** use `thumb:"images/x.jpg"` so every card does not load a viewer.
- Test it now with the sample in the `example` entry (loads a public sample model).

**Getting a model out of CAD**
1. Export from SolidWorks or Fusion 360 as STEP, STL, or OBJ. Some SolidWorks versions can save glTF/GLB directly; check File > Save As. STL has no color.
2. Convert to GLB in Blender (free): File > Import, then File > Export > glTF 2.0 (.glb). Assign simple materials in Blender for color.
3. Reduce size: aim for under 10 MB (Blender "Decimate" modifier, or export only the parts you want to show). GitHub's web upload limit is 25 MB per file.
4. Put the file in `models/` and reference it as above.
If the model appears black or very dark, add `attrs:'exposure="1.5"'`. If it is huge or tiny, check the export units.
