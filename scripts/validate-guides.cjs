#!/usr/bin/env node
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
function walk(dir){let a=[];for(const f of fs.readdirSync(path.join(root,dir),{withFileTypes:true})){const p=path.posix.join(dir,f.name);if(f.isDirectory())a.push(...walk(p));else a.push(p);}return a;}
const js=walk("assets").filter(p=>p.endsWith(".js"));
for(const p of js)new vm.Script(read(p),{filename:p});
const env={window:{}};vm.runInNewContext(read("assets/catalog.js"),env);
const catalog=env.window.GUIDES;if(!Array.isArray(catalog))throw Error("catalog missing");
const ids=new Set();
for(const g of catalog){if(ids.has(g.id))throw Error("duplicate id "+g.id);ids.add(g.id);const rel=g.pageUrl.split("/").filter(Boolean).join("/");if(!fs.existsSync(path.join(root,rel,"index.html")))throw Error("missing page "+g.id);}
const favicon="https://spicychatqol.drache.uk/assets/icons/full_icon.jpg";
const html=walk(".").filter(p=>p.endsWith(".html"));
for(const p of html)if(!read(p).includes('rel="icon" type="image/jpeg" href="'+favicon+'"'))throw Error("missing favicon "+p);
for(const [id,route] of [["dragonscript-qol","qol"],["archive-guide","archive"]]){const p=read(route+"/index.html");if(!p.includes('window.GUIDE_ID="'+id+'"'))throw Error("wrong guide ID "+id);if(!p.includes('class="article-body"'))throw Error("missing static fallback "+id);}
console.log("Guide site checks passed:",js.length,"scripts,",html.length,"pages,",catalog.length,"guides.");
