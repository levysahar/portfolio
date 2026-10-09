const q=new URLSearchParams(location.search), page=document.body.dataset.page;
/* default aspect ratios (width/height); override per image, see docs/GUIDE.md */
const D=Object.assign({home:'4/3',card:'4/3',hero:'16/9',step:'4/3',gallery:'4/3'},SITE.imageDefaults);
const fig=(s,alt,r)=>{
 if(s&&s.model)return `<figure class="ph" style="aspect-ratio:${s.ratio||r}"><model-viewer src="${s.model}" ${s.poster?`poster="${s.poster}" `:''}alt="${s.alt||alt}" camera-controls auto-rotate shadow-intensity="1" ${s.attrs||''}></model-viewer></figure>`;
 const o=typeof s==='string'?{src:s}:(s||{}),x=o.x??50,y=o.y??50;
 return `<figure class="ph" style="aspect-ratio:${o.ratio||r}">${o.src?`<img src="${o.src}" alt="${o.alt||alt}" loading="lazy" style="object-position:${x}% ${y}%;transform-origin:${x}% ${y}%;transform:scale(${o.zoom||1})" onerror="this.remove()">`:''}</figure>`};
const card=p=>`<a class="card" href="project.html?p=${p.slug}">${fig(p.thumb||p.image,p.title,D.card)}<h3>${p.title}</h3>${p.outcome?`<p>${p.outcome}</p>`:''}${p.tools?`<span>${p.tools}</span>`:''}${p.year?`<span>${p.year}</span>`:''}</a>`;
const ul=a=>`<ul>${a.map(i=>`<li>${i}</li>`).join('')}</ul>`;
const NAV=[["Work","work.html","work"],["Fabrication","fabrication.html","fab"],["About","about.html","about"],["Resume","resume.html","resume"]];
const cur=n=>(page===n||(page==='project'&&n==='work'))?' aria-current="page"':'';
document.getElementById('hd').innerHTML=`<div class="wrap"><a class="brand" href="index.html">${SITE.name}<small>${SITE.role}</small></a><nav aria-label="Main">${NAV.map(n=>`<a href="${n[1]}"${cur(n[2])}>${n[0]}</a>`).join('')}</nav></div>`;
document.getElementById('ft').innerHTML=`<div class="wrap"><a href="mailto:${SITE.email}">${SITE.email}</a><a href="${SITE.linkedin}">LinkedIn</a><a href="resume.html">Resume</a></div>`;

/* Project templates: which fields show, in order, and their headings. Edit or add your own. */
const TPL={
 flagship:[["problem","The motivation"],["contribution","What it does:"],["process","Design process"],["analysis","Analysis and testing"],["result","Result"],["change","What I would change"]],
 team:[["problem","The problem"],["contribution","My contribution"],["process","How we built it"],["result","Result"],["change","What I would change"]],
 personal:[["what","What it does"],["specs","Key specs"],["how","How it works"],["challenge","Challenge and fix"],["result","Result"],["change","What I would change"]]};
const step=(s,i)=>`<div class="step${i%2?' r':''}"><div><h3>${s.h}</h3><p>${s.p||''}</p></div>${fig(s.image,s.h,D.step)}</div>`;
const body=v=>typeof v==='string'?`<p>${v}</p>`:typeof v[0]==='string'?ul(v):v.map(step).join('');
const sec=(h,v)=>`<section class="blk${typeof v==='object'&&typeof v[0]==='object'?' full':''}"><h2>${h}</h2>${body(v)}</section>`;
const drop=d=>`<details${d.open?' open':''}><summary>${d.h}</summary><div>${d.p?`<p>${d.p}</p>`:''}${d.list?ul(d.list):''}${d.table?`<table>${d.table.map((r,i)=>`<tr>${r.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')}</tr>`).join('')}</table>`:''}${d.links?ul(d.links.map(l=>`<a href="${l[1]}" download>${l[0]}</a>`)):''}</div></details>`;

const R={
home:()=>{document.title=SITE.name+' - Portfolio';
 return `<section class="wrap sec hero"><div><h1>${SITE.name}</h1><p class="lede">${SITE.tagline}</p><p>${SITE.buttons.map((b,i)=>`<a class="btn${i?'':' pri'}" href="${b[1]}">${b[0]}</a>`).join('')}</p></div>${fig(SITE.heroImage,SITE.name,D.home)}</section>
<section class="wrap sec"><h2>Featured projects</h2><div class="grid">${PROJECTS.filter(p=>p.featured&&!p.draft).map(card).join('')}</div><p><a href="work.html">See all projects</a></p></section>
<section class="wrap sec"><h2>What I do</h2><div class="cols">${SITE.skills.map(s=>`<div><h3>${s.h}</h3><p>${s.t}</p></div>`).join('')}</div></section>`},

work:()=>{const k=q.get('k'),f=[['All',''],['Team','team'],['Personal','personal']];
 document.title='Work - '+SITE.name;
 return `<section class="wrap sec"><h1>Work</h1><nav class="chips" aria-label="Filter">${f.map(x=>`<a href="work.html${x[1]?'?k='+x[1]:''}"${(k||'')===x[1]?' aria-current="true"':''}>${x[0]}</a>`).join('')}</nav><div class="grid">${PROJECTS.filter(p=>!p.draft&&(!k||p.kind===k)).map(card).join('')}</div></section>`},

project:()=>{const L=PROJECTS.filter(x=>!x.draft),p=PROJECTS.find(x=>x.slug===q.get('p'))||L[0],i=L.indexOf(p),pv=L[i-1],nx=L[i+1];
 document.title=p.title+' - '+SITE.name;
 const cells=[['Role',p.role],['Timeline',p.year],['Tools',p.tools],['Team',p.team]].concat(Object.entries(p.stats||{})).filter(x=>x[1]);
 return `<article class="wrap wx sec"><a class="back" href="work.html">All work</a><h1>${p.title}</h1><p class="lede">${p.summary}</p>${p.status?`<p><span class="status">${p.status}</span></p>`:''}${fig(p.hero||p.image,p.title,D.hero)}
 <dl class="tb">${cells.map(x=>`<div><dt>${x[0]}</dt><dd>${x[1]}</dd></div>`).join('')}</dl>
 ${(TPL[p.type]||[]).filter(t=>p[t[0]]).map(t=>sec(t[1],p[t[0]])).join('')}${(p.extra||[]).map(e=>sec(e.h,e.v)).join('')}
 ${p.gallery?`<section class="blk full"><h2>Gallery</h2><div class="gal">${p.gallery.map(g=>fig(g,p.title,D.gallery)).join('')}</div></section>`:''}
 ${p.drops?`<section class="blk full"><h2>Details and files</h2>${p.drops.map(drop).join('')}</section>`:''}
 <div class="pn">${pv?`<a class="btn" href="project.html?p=${pv.slug}">Previous: ${pv.title}</a>`:'<span></span>'}${nx?`<a class="btn pri" href="project.html?p=${nx.slug}">Next: ${nx.title}</a>`:'<span></span>'}</div></article>`},

fab:()=>{document.title='Fabrication - '+SITE.name;
 return `<section class="wrap sec"><h1>Fabrication</h1><p class="lede">Hands-on process experience from three design, model making, and rapid prototyping classes, plus personal work.</p>${FAB.map(f=>`<section class="blk"><h2>${f.h}</h2><p>${f.t}</p>${(f.images||[]).map(m=>fig(m,f.h,D.gallery)).join('')}</section>`).join('')}</section>`},

about:()=>{const a=SITE.about;document.title='About - '+SITE.name;
 return `<section class="wrap sec"><h1>About</h1><div class="blk">${a.bio.map(t=>`<p>${t}</p>`).join('')}<h2>Education</h2>${ul(a.education)}<h2>Teams and activities</h2>${ul(a.activities)}<h2>Awards</h2>${ul(a.awards)}<h2>Contact</h2><p><a href="mailto:${SITE.email}">${SITE.email}</a><br><a href="${SITE.linkedin}">LinkedIn</a></p></div></section>`},

resume:()=>{document.title='Resume - '+SITE.name;
 return `<section class="wrap sec"><h1>Resume</h1><p><a class="btn pri" href="${SITE.resume}" download>Download PDF</a></p><iframe class="pdf" src="${SITE.resume}" title="Resume PDF"></iframe></section>`}
};
document.getElementById('app').innerHTML=R[page]();
if(document.querySelector('model-viewer')){const s=document.createElement('script');s.type='module';s.src='https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';document.head.append(s)};