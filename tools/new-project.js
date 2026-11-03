// Prints a ready-to-paste project entry.  Run: node tools/new-project.js my-slug "My Title"
const fs = require('fs'), path = require('path');
const [slug, ...t] = process.argv.slice(2);
if (!slug) { console.log('Usage: node tools/new-project.js my-slug "My Title"'); process.exit(1); }
console.log(fs.readFileSync(path.join(__dirname, '../docs/project-template.js'), 'utf8').replace(/SLUG/g, slug).replace('TITLE', t.join(' ') || slug));
