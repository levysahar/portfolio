# Deploying, image variants, and checks

## How the live site is built
Every push to `main` runs `.github/workflows/pages.yml`, which runs `tools/make-variants.py`. It copies the site (not `tools/`, `docs/`) and turns every photo in `images/` into WebP copies at 480, 960, 1600, and 2400 px wide in `images/_opt/`. Visitors download the size that fits their screen; click-to-expand loads the 2400 px copy. **Originals stay in the repo and are not published.** Models (`.glb`) and PDFs are copied unchanged.

## One-time switch
1. Add all files from the update (including the hidden `.github` folder) and push.
2. Repo **Settings > Pages > Build and deployment > Source: GitHub Actions**.
3. Open the **Actions** tab and watch the first run (about 1 minute). A green check means it is live.
If a run fails, set Source back to "Deploy from a branch" (main, /root) and the site works as before, just without the optimized copies.

## If a photo looks wrong
The page falls back to the original file if a WebP copy is missing, so nothing breaks locally or before the first run. File names may use letters, digits, dashes, and dots; the variant name is the original name without its extension plus the width.

## Errors and checks
- A red banner at the top of any page shows the file and line of a script error (for example a typo in `content.js`), instead of a blank page.
- Before committing: `node tools/check-content.js` finds duplicate slugs, unknown fields (typos), missing image files, and leftover `[placeholders]`.
- `tools/compress-images.py` (optional, one time) shrinks the originals themselves.
