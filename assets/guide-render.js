(function(){
"use strict";
const id=window.GUIDE_ID;
const meta=(window.GUIDES||[]).find(x=>x.id===id);
const content=(window.GUIDE_CONTENT||{})[id];
const root=document.querySelector("[data-guide-page]");
const e=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const discordSource=s=>/^https:\/\/(www\.)?discord\.com\/channels\//.test(s.url||"");
const isHunterSource=s=>String(s.url||"").startsWith("/llm/originals/");
if(!root||!meta||!content){
  if(root)root.innerHTML='<section class="section"><div class="article-wrap"><div class="notice">guide draft not found.</div></div></section>';
  return;
}
document.title=meta.title+" · SpicyChat Guides";
const official=meta.sourceType==="official";
const srcs=meta.sources||[];
const sourceLinks=srcs.map(s=>'<a href="'+e(s.url)+'" target="_blank" rel="noopener">'+e(s.title)+' ↗</a>').join("");
const sourceCards=srcs.map(s=>{
 const label=discordSource(s)?"Discord thread":isHunterSource(s)?"Original Hunter file":"Documentation";
 return '<a class="original-source" href="'+e(s.url)+'" target="_blank" rel="noopener"><span class="original-source-kind">'+label+'</span><strong>'+e(s.title)+'</strong><span>Open source ↗</span></a>';
}).join("");
root.innerHTML=
'<section class="article-head"><div class="article-wrap"><span class="eyebrow">'+e(meta.subsection||meta.section)+'</span><h1>'+e(meta.title)+'</h1><p class="summary">'+e(meta.desc)+'</p>'+
'<div class="article-meta"><span>WIP · not complete</span><span>'+e(meta.section)+'</span><span>community draft</span></div></div></section>'+
'<div class="article-wrap"><div class="guide-tabbar" role="tablist" aria-label="Guide views">'+
'<button class="guide-tab" role="tab" id="guide-tab-clean" aria-controls="guide-panel-clean" aria-selected="true" type="button" data-view="guide">Guide</button>'+
'<button class="guide-tab" role="tab" id="guide-tab-original" aria-controls="guide-panel-original" aria-selected="false" type="button" data-view="original">Original</button>'+
'</div></div>'+
'<section id="guide-panel-clean" role="tabpanel" aria-labelledby="guide-tab-clean">'+
'<div class="article-wrap article-layout"><aside class="article-toc"><strong>on this page</strong><div data-toc></div></aside><article class="article-body">'+
'<div class="wip-banner"><strong>WIP — not complete.</strong> '+(official?
'this is based on the current SpicyChat Rulebook docs plus reported editor feedback. Rulebooks are in beta and details may change.':
'this guide is still being reviewed. it condenses community threads and other credited source material; the original sources are under the Original tab.')+'</div>'+
content.body+
'<div class="source-box"><strong>Sources used for this draft</strong><p>you can check the original posts or files under the Original tab.</p><div class="source-list">'+sourceLinks+'</div></div>'+
'</article></div></section>'+
'<section id="guide-panel-original" role="tabpanel" aria-labelledby="guide-tab-original" hidden>'+
'<div class="article-wrap original-view"><h2>original sources</h2><p>this view is for the source material behind the cleaned-up guide. Discord posts are shown with their original wording, author and date when that data has been imported. Hunter’s files are linked in their original form, not rewritten.</p>'+
'<div class="original-sources">'+sourceCards+'</div>'+
'<div data-original-transcript></div></div></section>';

const toc=root.querySelector("[data-toc]");
root.querySelectorAll("#guide-panel-clean .article-body h2[id]").forEach(h=>{
 const a=document.createElement("a");a.href="#"+h.id;a.textContent=h.textContent;toc.appendChild(a);
});
const tabs=[...root.querySelectorAll(".guide-tab")];
const panels={guide:root.querySelector("#guide-panel-clean"),original:root.querySelector("#guide-panel-original")};
let loaded=false;
async function loadOriginal(){
 if(loaded)return;
 loaded=true;
 const target=root.querySelector("[data-original-transcript]");
 if(!meta.originalArchive){
  target.innerHTML='<div class="original-note">There isn’t an imported Discord transcript for this guide yet. The original thread and file links above still work. We’ll add the source messages here as they’re reviewed.</div>';
  return;
 }
 target.innerHTML='<div class="original-note">loading original posts…</div>';
 try{
  const response=await fetch(meta.originalArchive,{credentials:"same-origin"});
  if(!response.ok)throw new Error("Source not found");
  const payload=await response.json();
  if(!Array.isArray(payload.threads)||!payload.threads.length)throw new Error("No posts provided");
  const threads=payload.threads.map(thread=>{
   const notes=thread.complete?
    "all messages present in this export for this thread":
    "selected messages from the available export — this is not a complete transcript";
   const posts=(thread.messages||[]).map(post=>{
    const link=post.url||thread.url;
    return '<div class="original-message">'+
      '<div class="original-message-head"><strong>'+e(post.author||"unknown")+'</strong>'+
      '<time datetime="'+e(post.timestamp||"")+'">'+e(post.timestamp?new Date(post.timestamp).toLocaleString(undefined,{dateStyle:"medium",timeStyle:"short"}):"date unavailable")+'</time>'+
      '<a href="'+e(link)+'" target="_blank" rel="noopener" aria-label="Open original Discord message">message ↗</a></div>'+
      '<div class="original-message-text"></div>'+
      ((post.attachments||[]).length?'<div class="original-attachments">'+post.attachments.map(a=>
       '<a href="'+e(a.url)+'" target="_blank" rel="noopener">'+e(a.name||"attachment")+' ↗</a>').join("")+'</div>':"")+
      '</div>';
   }).join("");
   return '<section class="original-thread"><h3>'+e(thread.title||"Discord discussion")+'</h3>'+
   '<p class="original-note">'+e(notes)+' · '+(thread.messages||[]).length+' shown'+(thread.totalExportMessages?' / '+e(thread.totalExportMessages)+' in the available export':"")+'</p>'+posts+'</section>';
  }).join("");
  target.innerHTML=threads;
  let idx=0;
  for(const thread of payload.threads){
    for(const post of thread.messages||[]){
      const node=target.querySelectorAll(".original-message-text")[idx++];
      if(node)node.textContent=post.content||""; // Original wording, never parse as HTML.
    }
  }
 }catch(err){
  target.innerHTML='<div class="original-note">The archived messages could not be loaded. You can still open the original sources above.</div>';
 }
}
function setView(view,updateUrl){
 const choice=view==="original"?"original":"guide";
 for(const name of Object.keys(panels)){
  panels[name].hidden=(name!==choice);
 }
 for(const tab of tabs)tab.setAttribute("aria-selected",String(tab.dataset.view===choice));
 if(choice==="original")loadOriginal();
 if(updateUrl){
  const u=new URL(window.location.href);
  if(choice==="original")u.searchParams.set("view","original");
  else u.searchParams.delete("view");
  history.replaceState(null,"",u.pathname+u.search+u.hash);
 }
}
tabs.forEach(tab=>tab.addEventListener("click",()=>setView(tab.dataset.view,true)));
setView(new URLSearchParams(location.search).get("view"),false);
})();