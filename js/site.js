/* SITE.layout sizes become CSS variables (see docs/GUIDE.md) */
const L=SITE.layout||{};[['--card-min',L.cardMin],['--gal-min',L.galleryMin],['--step-img',L.stepImage],['--page-w',L.pageWidth],['--step-min',L.stepMin],['--fab-cols',L.fabCols]].forEach(x=>x[1]&&document.documentElement.style.setProperty(x[0],x[1]));
const q=new URLSearchParams(location.search), page=document.body.dataset.page;
/* default aspect ratios (width/height); override per image, see docs/GUIDE.md */
const D=Object.assign({home:'4/3',card:'4/3',hero:'16/9',step:'4/3',gallery:'4/3'},SITE.imageDefaults);
const sz=o=>o&&o.w?`width:100%;max-width:${o.w};${o.align==='left'?'margin-right':o.align==='right'?'margin-left':'margin-inline'}:auto;`:'';
/* Fixed page text. Override any of these in SITE.labels (see docs/GUIDE.md). */
const T=Object.assign({navWork:"Work",navFab:"Fabrication",navAbout:"About",navResume:"Resume",featured:"Featured projects",seeAll:"See all projects",skills:"What I do",work:"Work",chipAll:"All",chipTeam:"Team",chipPersonal:"Personal",back:"All work",prev:"Previous",next:"Next",role:"Role",timeline:"Timeline",tools:"Tools",team:"Team",gallery:"Gallery",drops:"Details and files",fab:"Fabrication",fabIntro:"Hands-on process experience from three design, model making, and rapid prototyping classes, plus personal work.",about:"About",education:"Education",activities:"Teams and activities",awards:"Awards",contact:"Contact",resume:"Resume",download:"Download PDF"},SITE.labels);
const fig=(s,alt,r,st)=>{
 if(Array.isArray(s))return `<div class="multi${(st??L.stack)?' stack':''}">${s.map(x=>fig(x,alt,r)).join('')}</div>`;
 if(s&&s.model)return `<figure class="ph" style="aspect-ratio:${s.ratio||r};${sz(s)}"><model-viewer src="${s.model}" ${s.poster?`poster="${s.poster}" `:''}alt="${s.alt||alt}" camera-controls auto-rotate shadow-intensity="1" ${s.attrs||''}></model-viewer></figure>`;
 const o=typeof s==='string'?{src:s}:(s||{}),x=o.x??50,y=o.y??50;
 return `<figure class="ph" style="aspect-ratio:${o.ratio||r};${sz(o)}${o.src?`background:${o.bg||'transparent'};`:''}">${o.src?`<img src="${o.src}" alt="${o.alt||alt}" loading="lazy" data-x="${x}" data-y="${y}" data-z="${o.zoom||1}" data-dx="${o.dx||0}" data-dy="${o.dy||0}" data-fit="${o.fit||'cover'}" onload="fitImg(this)" onerror="this.remove()">`:''}</figure>`};
/* thumb / hero inherit from image: give only the keys that differ, e.g. thumb:{ratio:"1/1",dx:5} */
const pick=(p,k)=>{const b=typeof p.image==='string'?{src:p.image}:p.image,v=p[k];return v===undefined?p.image:typeof v==='object'&&!Array.isArray(v)&&!v.src&&!v.model?Object.assign({},b,v):v};
const card=p=>`<a class="card" href="project.html?p=${p.slug}">${fig(pick(p,'thumb'),p.title,D.card)}<h3>${p.title}</h3>${p.outcome?`<p>${p.outcome}</p>`:''}${p.tools?`<span>${p.tools}</span>`:''}${p.year?`<span>${p.year}</span>`:''}</a>`;
const ul=a=>`<ul>${a.map(i=>`<li>${i}</li>`).join('')}</ul>`;
const NAV=[[T.navWork,"work.html","work"],[T.navFab,"fabrication.html","fab"],[T.navAbout,"about.html","about"],[T.navResume,"resume.html","resume"]];
const cur=n=>(page===n||(page==='project'&&n==='work'))?' aria-current="page"':'';
document.getElementById('hd').innerHTML=`<div class="wrap"><a class="brand" href="index.html">${SITE.name}<small>${SITE.role}</small></a><nav aria-label="Main">${NAV.map(n=>`<a href="${n[1]}"${cur(n[2])}>${n[0]}</a>`).join('')}</nav></div>`;
document.getElementById('ft').innerHTML=`<div class="wrap"><a href="mailto:${SITE.email}">${SITE.email}</a><a href="${SITE.linkedin}">LinkedIn</a><a href="resume.html">${T.resume}</a></div>`;

/* Project templates: which fields show, in order, and their headings. Edit or add your own. */
const TPL={
 flagship:[["problem","The problem"],["contribution","My contribution"],["process","Design process"],["analysis","Analysis and testing"],["result","Result"],["change","What I would change"]],
 team:[["problem","The problem"],["contribution","My contribution"],["process","How we built it"],["result","Result"],["change","What I would change"]],
 personal:[["what","What it does"],["specs","Key specs"],["process","Process"],["how","How it works"],["challenge","Challenge and fix"],["result","Result"],["change","What I would change"]]};
const step=(s,i)=>`<div class="step${i%2?' r':''}${(s.fill??L.stepFill)?' fill':''}"><div><h3>${s.h}</h3>${s.p?`<p>${s.p}</p>`:''}${s.list?ul(s.list):''}</div>${fig(s.image,s.h,D.step,s.stack)}</div>`;
const body=(v,b)=>!v?'':typeof v==='string'?(b?ul([v]):`<p>${v}</p>`):typeof v[0]==='string'?(b===false?v.map(t=>`<p>${t}</p>`).join(''):ul(v)):v.map(step).join('');
const sec=(h,v)=>{const o=v&&!Array.isArray(v)&&typeof v==='object'?v:{text:v},t=o.text;return `<section class="blk${(t&&typeof t[0]==='object')||o.image?' full':''}"><h2>${o.h||h}</h2>${body(t,o.bullets)}${o.image?fig(o.image,o.h||h,D.step,o.stack):''}</section>`};
const drop=d=>`<details${d.open?' open':''}><summary>${d.h}</summary><div>${d.image?fig(d.image,d.h,D.step,d.stack):''}${d.p?`<p>${d.p}</p>`:''}${d.list?ul(d.list):''}${d.table?`<table>${d.table.map((r,i)=>`<tr>${r.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')}</tr>`).join('')}</table>`:''}${d.links?ul(d.links.map(l=>`<a href="${l[1]}" download>${l[0]}</a>`)):''}</div></details>`;

const R={
home:()=>{document.title=SITE.name+' - Portfolio';
 return `<section class="wrap sec hero"><div><h1>${SITE.name}</h1><p class="lede">${SITE.tagline}</p><p>${SITE.buttons.map((b,i)=>`<a class="btn${i?'':' pri'}" href="${b[1]}">${b[0]}</a>`).join('')}</p></div>${fig(SITE.heroImage,SITE.name,D.home)}</section>
<section class="wrap sec"><h2>${T.featured}</h2><div class="grid">${PROJECTS.filter(p=>p.featured&&!p.draft).map(card).join('')}</div><p><a href="work.html">${T.seeAll}</a></p></section>
<section class="wrap sec"><h2>${T.skills}</h2><div class="cols">${SITE.skills.map(s=>`<div><h3>${s.h}</h3><p>${s.t}</p></div>`).join('')}</div></section>`},

work:()=>{const k=q.get('k'),f=[[T.chipAll,''],[T.chipTeam,'team'],[T.chipPersonal,'personal']];
 document.title='Work - '+SITE.name;
 return `<section class="wrap sec"><h1>${T.work}</h1><nav class="chips" aria-label="Filter">${f.map(x=>`<a href="work.html${x[1]?'?k='+x[1]:''}"${(k||'')===x[1]?' aria-current="true"':''}>${x[0]}</a>`).join('')}</nav><div class="grid">${PROJECTS.filter(p=>!p.draft&&(!k||p.kind===k)).map(card).join('')}</div></section>`},

project:()=>{const L=PROJECTS.filter(x=>!x.draft),p=PROJECTS.find(x=>x.slug===q.get('p'))||L[0],i=L.indexOf(p),pv=L[i-1],nx=L[i+1];
 document.title=p.title+' - '+SITE.name;
 const cells=[[T.role,p.role],[T.timeline,p.year],[T.tools,p.tools],[T.team,p.team]].concat(Object.entries(p.stats||{})).filter(x=>x[1]);
 return `<article class="wrap wx sec"><a class="back" href="work.html">${T.back}</a><h1>${p.title}</h1><p class="lede">${p.summary}</p>${fig(pick(p,'hero'),p.title,D.hero)}
 <dl class="tb">${cells.map(x=>`<div><dt>${x[0]}</dt><dd>${x[1]}</dd></div>`).join('')}</dl>
 ${p.status?`<p><span class="status">${p.status}</span></p>`:''}
 ${(TPL[p.type]||[]).filter(t=>p[t[0]]).map(t=>sec((p.titles||{})[t[0]]||t[1],p[t[0]])).join('')}${(p.extra||[]).map(e=>sec(e.h,e.v)).join('')}
 ${p.gallery?`<section class="blk full"><h2>${(p.titles||{}).gallery||T.gallery}</h2><div class="gal">${p.gallery.map(g=>fig(g,p.title,D.gallery)).join('')}</div></section>`:''}
 ${p.drops?`<section class="blk full"><h2>${(p.titles||{}).drops||T.drops}</h2>${p.drops.map(drop).join('')}</section>`:''}
 <div class="pn">${pv?`<a class="btn" href="project.html?p=${pv.slug}">${T.prev}: ${pv.title}</a>`:'<span></span>'}${nx?`<a class="btn pri" href="project.html?p=${nx.slug}">${T.next}: ${nx.title}</a>`:'<span></span>'}</div></article>`},

fab:()=>{document.title='Fabrication - '+SITE.name;
 return `<section class="wrap sec"><h1>${T.fab}</h1><p class="lede">${T.fabIntro}</p><div class="fabgrid">${FAB.map(f=>`<section class="blk"><h2>${f.h}</h2><p>${f.t}</p>${(f.images||[]).map(m=>fig(m,f.h,D.gallery)).join('')}</section>`).join('')}</div></section>`},

about:()=>{const a=SITE.about;document.title='About - '+SITE.name;
 return `<section class="wrap sec"><h1>${T.about}</h1><div class="blk">${a.bio.map(t=>`<p>${t}</p>`).join('')}<h2>${T.education}</h2>${ul(a.education)}<h2>${T.activities}</h2>${ul(a.activities)}<h2>${T.awards}</h2>${ul(a.awards)}<h2>${T.contact}</h2><p><a href="mailto:${SITE.email}">${SITE.email}</a><br><a href="${SITE.linkedin}">LinkedIn</a></p></div></section>`},

resume:()=>{document.title='Resume - '+SITE.name;
 return `<section class="wrap sec"><h1>${T.resume}</h1><p><a class="btn pri" href="${SITE.resume}" download>${T.download}</a></p><iframe class="pdf" src="${SITE.resume}" title="Resume PDF"></iframe></section>`}
};
document.getElementById('app').innerHTML=R[page]();
if(document.querySelector('model-viewer')){const s=document.createElement('script');s.type='module';s.src='https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';document.head.append(s)}
/* fill: make a step image as tall as its text while keeping its ratio (width = height x ratio, capped by layout.stepMax) */
function fitSteps(){const mx=parseFloat(L.stepMax||65)/100,mn=parseFloat(L.stepMin||260);
 document.querySelectorAll('.step.fill').forEach(st=>{const t=st.children[0],f=st.children[1],rp=f&&f.style&&f.style.aspectRatio;
  if(innerWidth<=760||!rp||f.classList.contains('multi')){st.style.gridTemplateColumns='';return}
  const p=rp.split('/').map(Number),r=p[0]/(p[1]||1),W=st.clientWidth,rev=st.classList.contains('r'),cols=w=>rev?`${w}px minmax(0,1fr)`:`minmax(0,1fr) ${w}px`;let w=W*.5;
  for(let k=0;k<4;k++){st.style.gridTemplateColumns=cols(w);w=Math.min(Math.max(t.getBoundingClientRect().height,mn)*r,W*mx)}
  st.style.gridTemplateColumns=cols(w)})}
fitSteps();addEventListener('resize',fitSteps);addEventListener('load',fitSteps);if(document.fonts)document.fonts.ready.then(fitSteps);
/* Sizes each image from its real proportions so zoom < 1 reveals the parts a crop would hide.
   zoom 1 = fills the frame (fit cover) or fits inside it (fit contain); x/y = focal point; dx/dy = shift in % of frame. */
function fitImg(i){const f=i.parentNode,p=(f.style.aspectRatio||'').split('/').map(Number),fr=p[1]?p[0]/p[1]:f.clientWidth/f.clientHeight,ir=i.naturalWidth/i.naturalHeight,d=i.dataset,z=+d.z||1,k=d.fit==='contain'?Math.min:Math.max,W=z*k(1,ir/fr)*100,H=z*k(1,fr/ir)*100;
 Object.assign(i.style,{inset:'auto',objectFit:'fill',width:W+'%',height:H+'%',left:(100-W)*d.x/100+'%',top:(100-H)*d.y/100+'%',transform:`translate(${(+d.dx||0)/W*100}%,${(+d.dy||0)/H*100}%)`})}
document.querySelectorAll('.ph img').forEach(i=>i.complete&&i.naturalWidth&&fitImg(i));