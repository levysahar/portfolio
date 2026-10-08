# Sahar Levy portfolio

A plain static site: no build step, no frameworks. **Almost everything you edit is in `data/content.js`.**

## Edit
| To change | Do this |
|---|---|
| Name, tagline, email, skills, bio, awards | `SITE` block in `data/content.js` |
| Add a project | Copy one entry in `PROJECTS`, change the `slug` (lowercase, no spaces) and text |
| Show a project on the home page | `featured:true` (order follows the list) |
| Reorder projects | Reorder the entries |
| Photos | Drop files in `images/` and match the name in `content.js`. Missing photos show an "add photo" box |
| Resume | Replace `files/resume.pdf` (keep the name) |
| Colors and fonts | `:root` at the top of `css/style.css` |
| Find unfinished text | Search for `[` in `content.js` |

Text fields accept HTML, so you can add links, bold, or a video:
`<iframe src="https://www.youtube.com/embed/ID" width="100%" height="400" allowfullscreen></iframe>`

Image tips: resize photos to about 1600 px wide and under 400 KB each (JPG). Use 4:3 for cards.

## Preview on your computer
`python -m http.server 8000` in this folder, then open http://localhost:8000
(Opening the files by double-click mostly works, but the PDF viewer may not.)

## Publish: GitHub Pages
1. Create a repo named `YOURUSERNAME.github.io` and upload these files to its root.
2. Settings > Pages > Deploy from branch > `main` / root.
3. Live at `https://YOURUSERNAME.github.io` within a few minutes. Every commit updates it.

## Publish: Cloudflare Pages
1. Put the files in any GitHub repo (or use Direct Upload and drag the folder in).
2. Workers & Pages > Create > Pages > connect the repo.
3. Build command: leave empty. Output directory: `/`.
4. Live at `https://PROJECTNAME.pages.dev`.

## Notes
- Pages are built in the browser from `content.js`, so search engines and link-preview cards see less than on a hand-written HTML site. Fine for sharing a link with recruiters.
- Fonts load from Google Fonts; the site falls back to system fonts if blocked.
- A custom domain (about $10-15 a year) can be attached later in either host's settings.

See docs/GUIDE.md for templates, image cropping, dropdowns, and the 3D viewer.
