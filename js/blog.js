/* Build-log page: blog.html?p=<project slug>. Posts live in blog/posts.json (see docs/BLOG.md). */
(async()=>{
 const el=document.getElementById('blog'),k=new URLSearchParams(location.search).get('p'),pr=PROJECTS.find(x=>x.slug===k);
 let L=[];try{L=await (await fetch('blog/posts.json')).json()}catch(e){}
 const P=L.filter(x=>x.project===k&&!x.draft).sort((a,b)=>b.date.localeCompare(a.date));
 const image=x=>{const fr=!!x.ratio,t=`<img src="${O(x.src,1600)}" srcset="${SS(x.src)}" sizes="(max-width:760px) 100vw, 900px" data-o="1" data-orig="${x.src}" data-full="${O(x.src,2400)}" alt="${x.alt||''}" loading="lazy"${fr?` data-x="${x.x??50}" data-y="${x.y??50}" data-z="${x.zoom||1}" data-dx="${x.dx||0}" data-dy="${x.dy||0}" data-fit="${x.fit||'cover'}" onload="fitImg(this)"`:''} onerror="imgErr(this)">`;
  return `<figure class="b-img ${x.layout||'break'} a-${x.align||'left'}" style="--w:${x.w||(x.layout==='left'||x.layout==='right'?'40%':'100%')}">${fr?`<div class="b-fr" style="aspect-ratio:${x.ratio}">${t}</div>`:t}${x.caption?`<figcaption>${x.caption}</figcaption>`:''}</figure>`};
 const B={p:x=>`<p>${x.x??''}</p>`,h:x=>`<h3 class="b-h">${x.x||'&nbsp;'}</h3>`,list:x=>`<ul>${x.items.map(i=>`<li>${i}</li>`).join('')}</ul>`,img:image,
  video:x=>`<div class="b-vid" style="--w:${x.w||'100%'}"><iframe src="${x.url}" allowfullscreen></iframe></div>`,
  model:x=>`<div class="b-mod" style="--w:${x.w||'100%'}"><model-viewer src="${x.src}" camera-controls auto-rotate shadow-intensity="1"></model-viewer></div>`};
 document.title=(pr?pr.title+' - ':'')+'Build log - '+SITE.name;
 el.innerHTML=`<a class="back" href="project.html?p=${k}">Back to project</a><h1>${pr?pr.title:'Build'} log</h1>`+(P.length?P.map(x=>`<article class="entry"><time>${x.date}</time><h2>${x.title||'&nbsp;'}</h2>${(x.blocks||[]).map(b=>(B[b.t]||(()=>''))(b)).join('')}</article>`).join(''):'<p>No entries yet.</p>');
 if(el.querySelector('model-viewer')){const s=document.createElement('script');s.type='module';s.src='https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';document.head.append(s)}
})();
