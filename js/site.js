const q=new URLSearchParams(location.search), page=document.body.dataset.page;
const img=(s,a,c='')=>`<figure class="ph ${c}">${s?`<img src="${s}" alt="${a}" loading="lazy" onerror="this.remove()">`:''}</figure>`;
const card=p=>`<a class="card" href="project.html?p=${p.slug}">${img(p.image,p.title)}<h3>${p.title}</h3><p>${p.outcome}</p><span>${p.tools}</span><span>${p.year}</span></a>`;
const ul=a=>`<ul>${a.map(i=>`<li>${i}</li>`).join('')}</ul>`;
const NAV=[["Work","work.html","work"],["Fabrication","fabrication.html","fab"],["About","about.html","about"],["Resume","resume.html","resume"]];
const cur=n=>(page===n||(page==='project'&&n==='work'))?' aria-current="page"':'';
document.getElementById('hd').innerHTML=`<div class="wrap"><a class="brand" href="index.html">${SITE.name}<small>${SITE.role}</small></a><nav aria-label="Main">${NAV.map(n=>`<a href="${n[1]}"${cur(n[2])}>${n[0]}</a>`).join('')}</nav></div>`;
document.getElementById('ft').innerHTML=`<div class="wrap"><a href="mailto:${SITE.email}">${SITE.email}</a><a href="${SITE.linkedin}">LinkedIn</a><a href="resume.html">Resume</a></div>`;

const R={
home:()=>{document.title=SITE.name+' - Portfolio';
 return `<section class="wrap sec hero"><div><h1>${SITE.name}</h1><p class="lede">${SITE.tagline}</p><p>${SITE.buttons.map((b,i)=>`<a class="btn${i?'':' pri'}" href="${b[1]}">${b[0]}</a>`).join('')}</p></div>${img(SITE.heroImage,SITE.name)}</section>
<section class="wrap sec"><h2>Featured projects</h2><div class="grid">${PROJECTS.filter(p=>p.featured).map(card).join('')}</div><p><a href="work.html">See all projects</a></p></section>
<section class="wrap sec"><h2>What I do</h2><div class="cols">${SITE.skills.map(s=>`<div><h3>${s.h}</h3><p>${s.t}</p></div>`).join('')}</div></section>`},

work:()=>{const k=q.get('k'),f=[['All',''],['Team','team'],['Personal','personal']];
 document.title='Work - '+SITE.name;
 return `<section class="wrap sec"><h1>Work</h1><nav class="chips" aria-label="Filter">${f.map(x=>`<a href="work.html${x[1]?'?k='+x[1]:''}"${(k||'')===x[1]?' aria-current="true"':''}>${x[0]}</a>`).join('')}</nav><div class="grid">${PROJECTS.filter(p=>!k||p.kind===k).map(card).join('')}</div></section>`},

project:()=>{const i=Math.max(0,PROJECTS.findIndex(x=>x.slug===q.get('p'))),p=PROJECTS[i],pv=PROJECTS[i-1],nx=PROJECTS[i+1];
 document.title=p.title+' - '+SITE.name;
 return `<article class="wrap sec"><a class="back" href="work.html">All work</a><h1>${p.title}</h1><p class="lede">${p.summary}</p>${p.status?`<p><span class="status">${p.status}</span></p>`:''}${img(p.image,p.title,'wide')}
 <dl class="tb">${[['Role',p.role],['Timeline',p.year],['Tools',p.tools],['Team',p.team]].map(x=>`<div><dt>${x[0]}</dt><dd>${x[1]}</dd></div>`).join('')}</dl>
 ${(p.sections||[]).map(s=>`<section class="blk"><h2>${s.h}</h2>${s.p?`<p>${s.p}</p>`:''}${s.list?ul(s.list):''}${(s.images||[]).map(m=>img(m,s.h)).join('')}</section>`).join('')}
 <div class="pn"><span>${pv?`<a href="project.html?p=${pv.slug}">Previous: ${pv.title}</a>`:''}</span><span>${nx?`<a href="project.html?p=${nx.slug}">Next: ${nx.title}</a>`:''}</span></div></article>`},

fab:()=>{document.title='Fabrication - '+SITE.name;
 return `<section class="wrap sec"><h1>Fabrication</h1><p class="lede">Hands-on process experience from three design, model making, and rapid prototyping classes, plus personal work.</p>${FAB.map(f=>`<section class="blk"><h2>${f.h}</h2><p>${f.t}</p>${(f.images||[]).map(m=>img(m,f.h)).join('')}</section>`).join('')}</section>`},

about:()=>{const a=SITE.about;document.title='About - '+SITE.name;
 return `<section class="wrap sec"><h1>About</h1><div class="blk">${a.bio.map(t=>`<p>${t}</p>`).join('')}<h2>Education</h2>${ul(a.education)}<h2>Teams and activities</h2>${ul(a.activities)}<h2>Awards</h2>${ul(a.awards)}<h2>Contact</h2><p><a href="mailto:${SITE.email}">${SITE.email}</a><br><a href="${SITE.linkedin}">LinkedIn</a></p></div></section>`},

resume:()=>{document.title='Resume - '+SITE.name;
 return `<section class="wrap sec"><h1>Resume</h1><p><a class="btn pri" href="${SITE.resume}" download>Download PDF</a></p><iframe class="pdf" src="${SITE.resume}" title="Resume PDF"></iframe></section>`}
};
document.getElementById('app').innerHTML=R[page]();
