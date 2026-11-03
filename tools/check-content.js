// Checks data/content.js for mistakes before you commit.  Run: node tools/check-content.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
let D; try { D = vm.runInNewContext(fs.readFileSync(path.join(root, 'data/content.js'), 'utf8') + ';({SITE,PROJECTS,FAB})'); }
catch (e) { console.log('ERROR content.js does not parse:', e.message); process.exit(1); }
const KEYS = 'slug type kind featured draft year status title outcome summary image thumb hero role tools team stats problem contribution process analysis result change what specs how challenge gallery drops extra titles'.split(' ');
const seen = new Set(); let bad = 0, todo = 0, pending = 0;
const warn = m => { console.log('WARN ', m); bad++; };
const imgs = v => v == null ? [] : Array.isArray(v) ? v.flatMap(imgs) : typeof v === 'string' ? [v] : v.src ? [v.src] : [];
const check = (s, w) => { if (/^images\//.test(s) && !fs.existsSync(path.join(root, s))) pending++; };
for (const p of D.PROJECTS) {
  const w = p.slug || '(no slug)';
  if (!p.slug || !p.title) warn(`${w}: needs slug and title`);
  if (seen.has(p.slug)) warn(`${w}: duplicate slug`); seen.add(p.slug);
  if (!['team', 'personal'].includes(p.kind || p.type)) warn(`${w}: type should be "team" or "personal" so the Work filter lists it`);
  if (p.process && p.how && !(Array.isArray(p.process) && Array.isArray(p.how))) warn(`${w}: both process and how are set; how is ignored (use process only)`);
  Object.keys(p).filter(k => !KEYS.includes(k)).forEach(k => warn(`${w}: unknown field "${k}" (typo?)`));
  [p.image, p.thumb, p.hero, p.gallery, ...(p.process || []).map?.(x => x.image) || [], ...(p.how || []).map?.(x => x.image) || []].flatMap(imgs).forEach(s => check(s, w));
  todo += (JSON.stringify(p).match(/\[[A-Za-z]/g) || []).length;
}
const LAY = 'cardMin galleryMin pageWidth stepImage stepText stepSize stepFill stepGrow stepHeight stepMin stepMax stack fabCols'.split(' ');
Object.keys(D.SITE.layout || {}).filter(k => !LAY.includes(k)).forEach(k => warn(`SITE.layout: unknown key "${k}"`));
const arr = v => Array.isArray(v) ? v : (v && Array.isArray(v.text) ? v.text : []);
for (const p of D.PROJECTS) for (const st of [...arr(p.process), ...arr(p.how)].filter(x => x && typeof x === 'object')) {
  const w = `${p.slug}, step "${st.h}"`, fit = st.size || st.fill || st.grow || st.height, list = Array.isArray(st.image);
  if (st.size !== undefined && (st.fill || st.grow || st.height)) warn(`${w}: use size only`);
  if (st.height && (st.fill || st.grow)) warn(`${w}: height overrides fill/grow, use one`);
  if (st.height && !/^\d+(\.\d+)?(px)?$/.test(String(st.height))) warn(`${w}: height must be pixels, e.g. "600px"`);
  if (fit && st.image && st.image.w) warn(`${w}: w on a fitted image fights the sizing`);
}
console.log(`${D.PROJECTS.length} projects checked, ${bad} warning(s), ${pending} image file(s) not added yet (ignored), ${todo} "[placeholder]" spot(s) left.`);
