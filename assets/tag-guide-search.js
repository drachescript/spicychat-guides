(()=>{
"use strict";
const input=document.getElementById("tag-glossary-search");
if(!input)return;
const groups=[...document.querySelectorAll("[data-tag-guide-group]")];
const count=document.getElementById("tag-glossary-count");
const empty=document.getElementById("tag-glossary-empty");
input.addEventListener("input",()=>{
 let showing=0;
 const q=input.value.trim().toLocaleLowerCase();
 for(const group of groups){
  let found=0;
  for(const row of group.querySelectorAll("[data-tag-guide-entry]")){
   const show=!q||row.textContent.toLocaleLowerCase().includes(q);
   row.hidden=!show;
   if(show)found++;
  }
  group.hidden=!!q&&!found;
  if(q&&found)group.open=true;
  else if(!q)group.open=false;
  showing+=found;
 }
 if(count)count.textContent=q?showing+" matching tags":"91 reference tags across "+groups.length+" groups";
 if(empty)empty.hidden=showing!==0;
});
})();
