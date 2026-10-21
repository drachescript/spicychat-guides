(function(){
"use strict";
const input=document.querySelector("[data-help-search]");
if(!input)return;
const cards=[...document.querySelectorAll("[data-help-card]")];
const groups=[...document.querySelectorAll("[data-help-group]")];
const results=document.querySelector("[data-help-results]");
function update(){
 const terms=input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
 let count=0;
 for(const card of cards){
  const search=card.dataset.search||"";
  const visible=terms.every(term=>search.includes(term));
  card.hidden=!visible;
  if(visible)count++;
 }
 for(const group of groups)group.hidden=![...group.querySelectorAll("[data-help-card]")].some(card=>!card.hidden);
 if(results)results.textContent=count===0?"No matching topics. Try a shorter search.":count+" topic"+(count===1?"":"s")+(terms.length?" matched":"");
}
input.addEventListener("input",update);
update();
})();
