/* Build-log page: blog.html?p=<project slug>. Posts live in blog/posts.json (see docs/BLOG.md). */
(async()=>{
 const el=document.getElementById('blog'),k=new URLSearchParams(location.search).get('p'),pr=PROJECTS.find(x=>x.slug===k);
 let L=[];try{L=await (await fetch('blog/posts.json')).json()}catch(e){}
 const P=L.filter(x=>x.project===k&&!x.draft).sort((a,b)=>b.date.localeCompare(a.date));
 const B={p:x=>`<p>${x.x}</p>`,h:x=>`<h3 class="b-h">${x.x}</h3>`,list:x=>`<ul>${x.items.map(i=>`<li>${i}</li>`).join('')}</ul>`,
  img:x=>`<figure class="b-img ${x.layout||'break'} a-${x.align||'left'}" style="--w:${x.w||(x.layout==='left'||x.layout==='right'?'40%':'100%')}"><img src="${x.src}" alt="${x.alt||''}" loading="lazy">${x.caption?`<figcaption>${x.caption}</figcaption>`:''}</figure>`,
  video:x=>`<div class="b-vid" style="--w:${x.w||'100%'}"><iframe src="${x.url}" allowfullscreen></iframe></div>`,
  model:x=>`<div class="b-mod" style="--w:${x.w||'100%'}"><model-viewer src="${x.src}" camera-controls auto-rotate shadow-intensity="1"></model-viewer></div>`};
 document.title=(pr?pr.title+' - ':'')+'Build log - '+SITE.name;
 el.innerHTML=`<a class="back" href="project.html?p=${k}">Back to project</a><h1>${pr?pr.title:'Build'} log</h1>`+(P.length?P.map(x=>`<article class="entry"><time>${x.date}</time><h2>${x.title}</h2>${(x.blocks||[]).map(b=>(B[b.t]||(()=>''))(b)).join('')}</article>`).join(''):'<p>No entries yet.</p>');
 if(el.querySelector('model-viewer')){const s=document.createElement('script');s.type='module';s.src='https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';document.head.append(s)}
})();
