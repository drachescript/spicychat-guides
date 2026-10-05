(function(){
const g=window.GUIDES||[];
const e=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const card=x=>{
  const published=x.status==="published";
  const text=x.desc||(x.kind==="llm"?"LLM guide":"still being imported from the Discord thread.");
  const meta=x.kind==="llm"?(x.category+" · "+x.author):(x.category+" · SpicyChat Discord");
  const href=x.pageUrl||("/guide/?id="+encodeURIComponent(x.id));
  const source=x.sourceUrl?'<a class="source-link" href="'+e(x.sourceUrl)+'" target="_blank" rel="noopener">source ↗</a>':"";
  const read=published?'<span class="read-label">read guide →</span>':"";
  return '<article class="card guide-card" id="'+e(x.id)+'"><a class="card-click" href="'+e(href)+'" aria-label="Open '+e(x.title)+'"></a><span class="badge '+(x.kind==="llm"?"llm":"community")+'">'+e(x.label)+'</span><h3>'+e(x.title)+'</h3><p>'+e(text)+'</p><div class="meta">'+e(meta)+'</div>'+read+source+'</article>';
};
const refCard=x=>{
  const href=x.sourceUrl||(x.pageUrl||("/guide/?id="+encodeURIComponent(x.id)));
  const external=!!x.sourceUrl;
  return '<a class="reference-card" href="'+e(href)+'" '+(external?'target="_blank" rel="noopener"':'')+'><span class="badge '+(x.kind==="llm"?"llm":"community")+'">'+e(x.kind==="llm"?"LLM file":"Discord thread")+'</span><strong>'+e(x.title)+'</strong><small>'+e(x.category)+(external?' · original source ↗':' · site entry')+'</small></a>';
};
const mount=(s,a,fn=card)=>{const n=document.querySelector(s);if(n)n.innerHTML=a.map(fn).join("")};
mount("[data-all]",g); mount("[data-llm]",g.filter(x=>x.kind==="llm")); mount("[data-community]",g.filter(x=>x.kind==="community")); mount("[data-reference]",g,refCard);
document.querySelectorAll("[data-total]").forEach(n=>n.textContent=g.length);
document.querySelectorAll("[data-llm-count]").forEach(n=>n.textContent=g.filter(x=>x.kind==="llm").length);
document.querySelectorAll("[data-community-count]").forEach(n=>n.textContent=g.filter(x=>x.kind==="community").length);
const q=document.querySelector("[data-search]"),f=document.querySelector("[data-filter]"),a=document.querySelector("[data-all]"),note=document.querySelector("[data-note]");
function refresh(){if(!a)return;const s=(q?.value||"").toLowerCase(),v=f?.value||"all";const z=g.filter(x=>(v==="all"||x.kind===v||x.category===v)&&(!s||Object.values(x).join(" ").toLowerCase().includes(s)));a.innerHTML=z.map(card).join("")||'<div class="notice">nothing matched that search.</div>';if(note)note.textContent="showing "+z.length+" of "+g.length+" guides/threads."}
q?.addEventListener("input",refresh); f?.addEventListener("change",refresh); refresh();
const detail=document.querySelector("[data-guide-detail]");
if(detail){
 const id=new URLSearchParams(location.search).get("id"),x=g.find(v=>v.id===id);
 if(!x){detail.innerHTML='<div class="notice"><strong>couldn\'t find that guide.</strong><br><a href="/guides/">back to the guide list</a></div>';return;}
 document.title=x.title+" · SpicyChat Guides";
 const source=x.sourceUrl?'<a class="button primary" href="'+e(x.sourceUrl)+'" target="_blank" rel="noopener">Open original Discord thread ↗</a>':"";
 const wip=x.kind==="llm"?"the LLM guide file is on the import list, but the full text is not on the site yet.":"this one is still being condensed from the Discord thread. the finished page will keep the useful info and examples without making you read through the whole discussion again.";
 detail.innerHTML='<section class="page"><div class="wrap"><span class="eyebrow">'+e(x.label)+'</span><h1>'+e(x.title)+'</h1><p>'+e(x.category)+'</p></div></section><section class="section"><div class="wrap"><div class="notice"><strong>still a WIP</strong><br>'+e(wip)+'</div><div class="actions">'+source+'<a class="button" href="/guides/">Back to guides</a></div></div></section>';
}
})();