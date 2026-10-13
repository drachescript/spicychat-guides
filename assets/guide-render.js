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
 const archive=meta.originalArchive||(!official?"/assets/originals/"+encodeURIComponent(id)+".json":null);
 if(!archive){
  target.innerHTML='<div class="original-note">The documentation link above is the original source. There isn’t a separate Discord transcript for this guide.</div>';
  return;
 }
 target.innerHTML='<div class="original-note">loading original posts…</div>';
 try{
  const response=await fetch(archive,{credentials:"same-origin"});
  if(!response.ok){
   target.innerHTML='<div class="original-note">The original Discord messages aren’t imported on this page yet. You can still open the source threads above.</div>';
   return;
  }
  const payload=await response.json();
  if(!Array.isArray(payload.threads)||!payload.threads.length)throw new Error("No original posts supplied");
  target.replaceChildren();
  for(const thread of payload.threads){
   const section=document.createElement("section");section.className="original-thread";
   const title=document.createElement("h3");title.textContent=thread.title||"Discord discussion";section.appendChild(title);
   const note=document.createElement("p");note.className="original-note";
   note.textContent=(thread.complete?"Messages in the available source":"Available source messages; the exported thread may be incomplete")+
    " · "+(thread.messages||[]).length+" message(s) in this archive";
   section.appendChild(note);
   const list=document.createElement("div");section.appendChild(list);
   const messages=thread.messages||[];
   let rendered=0;
   const more=document.createElement("button");more.type="button";more.className="original-more";
   function renderNext(){
    const end=Math.min(messages.length,rendered+20);
    const chunk=document.createDocumentFragment();
    for(;rendered<end;rendered++){
     const msg=messages[rendered];
     const item=document.createElement("div");item.className="original-message";
     const header=document.createElement("div");header.className="original-message-head";
     const who=document.createElement("strong");who.textContent=msg.author||"unknown";header.appendChild(who);
     const when=document.createElement("time");
     if(msg.timestamp){
      when.dateTime=msg.timestamp;
      const date=new Date(msg.timestamp);
      when.textContent=Number.isNaN(date.valueOf())?msg.timestamp:date.toLocaleString(undefined,{dateStyle:"medium",timeStyle:"short"});
     }else when.textContent="date unavailable";
     header.appendChild(when);
     const link=document.createElement("a");link.href=msg.url||thread.url||"#";
     link.target="_blank";link.rel="noopener";link.textContent="message ↗";
     header.appendChild(link);item.appendChild(header);
     const textNode=document.createElement("div");textNode.className="original-message-text";
     textNode.textContent=msg.content||"";item.appendChild(textNode);
     if((msg.attachments||[]).length){
      const attachments=document.createElement("div");attachments.className="original-attachments";
      for(const att of msg.attachments){
       const a=document.createElement("a");a.href=att.url||msg.url||thread.url||"#";a.target="_blank";a.rel="noopener";
       a.textContent=(att.name||"attachment")+" ↗";attachments.appendChild(a);
      }
      item.appendChild(attachments);
     }
     chunk.appendChild(item);
    }
    list.appendChild(chunk);
    if(rendered>=messages.length)more.remove();
    else more.textContent="Show "+Math.min(20,messages.length-rendered)+" more original messages";
   }
   more.addEventListener("click",renderNext);
   renderNext();
   if(rendered<messages.length)section.appendChild(more);
   target.appendChild(section);
  }
 }catch(err){
  target.innerHTML='<div class="original-note">Couldn’t load the archived messages right now. The source links above are still available.</div>';
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