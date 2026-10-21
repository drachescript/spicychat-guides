(function(){
"use strict";
const root=document.querySelector("[data-bot-test-checklist]");
if(!root)return;
const KEY="spicychat-guides:bot-checklist:v1";
const tests=[
["opening","Greeting","Playable opening and a clear chance to respond"],
["identity","Character identity","Consistent motives, personality, voice and initiative"],
["agency","User agency","No invented user actions, feelings, dialogue or agreement"],
["choices","Unexpected choices","Adapts to rejection or a changed plan without railroading"],
["relationships","Relationship boundaries","Starting history, boundaries and progression stay coherent"],
["continuity","Long-chat continuity","Events, locations, knowledge and timeline remain consistent"],
["writing","Writing quality","Readable output without ongoing repetition or style drift"],
["persona","Persona compatibility","Correct user-role requirements and no unadvertised assumptions"],
["systems","Optional systems","Only applicable Lorebook, Rulebook or cast mechanics need testing"],
["publication","Publication details","Tags, visibility, title and definition settings are correct"]
];
const statuses=["Not tested","Pass","Needs work","N/A"];
function load(){
 try{const data=JSON.parse(localStorage.getItem(KEY)||"{}");return data&&typeof data==="object"?data:{}}catch{return{}}
}
let values=load();
const escapeText=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
root.innerHTML='<h2 id="interactive-checklist">Your testing checklist</h2><p>Track which areas you have actually tested. Progress is saved in this browser only; no conversations or results are uploaded.</p>'+
'<div class="test-checklist-status"><strong data-checked-count></strong><span data-attention-count></span></div>'+
'<progress class="test-checklist-progress" max="'+tests.length+'" value="0" aria-label="Areas assessed"></progress>'+
'<div class="test-checklist-grid">'+tests.map(([id,title,description])=>'<label class="test-checklist-row"><span><strong>'+escapeText(title)+'</strong><span>'+escapeText(description)+'</span></span><select data-test-id="'+id+'" aria-label="'+escapeText(title)+' status">'+statuses.map(s=>'<option value="'+escapeText(s)+'">'+escapeText(s)+'</option>').join("")+'</select></label>').join("")+'</div>'+
'<div class="test-checklist-actions"><button type="button" data-export-tests>Download results (.txt)</button><button type="button" data-reset-tests>Reset checklist</button></div>'+
'<p class="test-checklist-note" role="status" data-checklist-message>Only the selected statuses are saved on this device. A new browser or cleared site data will not have these results.</p>';
const selects=[...root.querySelectorAll("[data-test-id]")];
for(const select of selects){
 const id=select.dataset.testId;
 select.value=statuses.includes(values[id])?values[id]:"Not tested";
 select.addEventListener("change",()=>{
  values[id]=select.value;
  try{localStorage.setItem(KEY,JSON.stringify(values));message("Progress saved on this device.")}catch{message("Local saving is unavailable. You can still download your results.")}
  update();
 });
}
function message(t){root.querySelector("[data-checklist-message]").textContent=t}
function update(){
 const assessed=selects.filter(x=>x.value!=="Not tested").length;
 const needs=selects.filter(x=>x.value==="Needs work").length;
 root.querySelector("[data-checked-count]").textContent=assessed+" / "+tests.length+" areas assessed";
 root.querySelector("[data-attention-count]").textContent=needs?needs+" need"+(needs===1?"s":"")+" work":"No areas currently marked Needs work";
 root.querySelector("progress").value=assessed;
}
function exportResults(){
 const now=new Date().toISOString().slice(0,10);
 const lines=["SpicyChat Guides — Test Your Bot","Results exported: "+now,"Test conditions and bot versions should be recorded separately.","",...tests.map(([id,title])=>title+": "+(selects.find(s=>s.dataset.testId===id)?.value||"Not tested")),"","These are self-reported checks, not automatic test results."];
 const blob=new Blob([lines.join("\n")],{type:"text/plain;charset=utf-8"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");a.href=url;a.download="spicychat-bot-test-checklist-"+now+".txt";document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1000);
 message("Results downloaded; statuses are still saved on this device.");
}
root.querySelector("[data-export-tests]").addEventListener("click",exportResults);
root.querySelector("[data-reset-tests]").addEventListener("click",()=>{
 if(!window.confirm("Clear all statuses from this device?"))return;
 values={};
 selects.forEach(s=>s.value="Not tested");
 try{localStorage.removeItem(KEY)}catch{}
 update();message("Checklist reset.");
});
update();
})();
