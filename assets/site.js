(function(){
const g=window.GUIDES||[];
const e=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const sectionName=s=>({bots:"Bots",persona:"Personas",lorebook:"Lorebooks",group:"Group / Multi-Character",rulebook:"Rulebooks",llm:"LLM Guides"}[s]||s);
const card=x=>{
 const href=x.pageUrl||"#";
 const wip=x.status==="wip"?'<span class="badge wip">WIP · not complete</span>':"";
 return '<article class="card guide-card"><a class="card-click" href="'+e(href)+'" aria-label="Open '+e(x.title)+'"></a><div class="badges"><span class="badge '+(x.kind==="llm"?"llm":"community")+'">'+e(x.label||"Guide")+'</span>'+wip+'</div><h3>'+e(x.title)+'</h3><p>'+e(x.desc||"")+'</p><div class="meta">'+e(sectionName(x.section))+(x.subsection?' · '+e(x.subsection):'')+'</div><span class="read-label">open guide →</span></article>';
};
const mount=(selector,items)=>{const n=document.querySelector(selector);if(n)n.innerHTML=items.map(card).join("")};
mount("[data-all]",g);
mount("[data-llm]",g.filter(x=>x.section==="llm"));
document.querySelectorAll("[data-guide-groups]").forEach(root=>{
 const section=root.dataset.guideGroups;
 const items=g.filter(x=>x.section===section);
 const order=[];items.forEach(x=>{if(!order.includes(x.subsection||"Guides"))order.push(x.subsection||"Guides")});
 root.innerHTML=order.map(name=>'<section class="guide-group"><div class="section-head compact"><div><span class="eyebrow">'+e(name)+'</span><h2>'+e(name)+'</h2></div></div><div class="grid">'+items.filter(x=>(x.subsection||"Guides")===name).map(card).join("")+'</div></section>').join("");
});
document.querySelectorAll("[data-total]").forEach(n=>n.textContent=g.filter(x=>x.kind!=="llm").length);
document.querySelectorAll("[data-section-count]").forEach(n=>n.textContent=g.filter(x=>x.section===n.dataset.sectionCount).length);
const q=document.querySelector("[data-search]"),f=document.querySelector("[data-filter]"),a=document.querySelector("[data-all]"),note=document.querySelector("[data-note]");
function refresh(){if(!a)return;const s=(q?.value||"").trim().toLowerCase(),v=f?.value||"all";const z=g.filter(x=>(v==="all"||x.section===v||x.subsection===v)&&(!s||[x.title,x.desc,x.section,x.subsection].join(" ").toLowerCase().includes(s)));a.innerHTML=z.map(card).join("")||'<div class="notice">nothing matched that search.</div>';if(note)note.textContent="showing "+z.length+" of "+g.length+" guides."}
q?.addEventListener("input",refresh);f?.addEventListener("change",refresh);refresh();
const ref=document.querySelector("[data-reference]");
if(ref){
 const all=[]; const seen=new Set();
 g.forEach(x=>(x.sources||[]).forEach(s=>{if(!seen.has(s.url)){seen.add(s.url);all.push({title:s.title,url:s.url,section:x.section,official:x.sourceType==="official"})}}));
 ref.innerHTML=all.map(s=>'<a class="reference-card" href="'+e(s.url)+'" target="_blank" rel="noopener"><span class="badge community">'+(s.official?"Official docs":"Discord source")+'</span><strong>'+e(s.title)+'</strong><small>'+e(sectionName(s.section))+' · '+(s.official?"documentation":"original thread")+' ↗</small></a>').join("");
}
})();