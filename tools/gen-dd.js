const fs=require("fs");const out=process.argv[2];
const V="16.22.1";
const champs=require("./champion.json").data;
const all={};for(const c of Object.values(champs))all[c.id]=[c.name,c.title,c.tags.join("/")];
const ours="Ahri Annie Aurora Lux Malzahar Orianna Syndra Veigar Yasuo Ziggs Ashe Caitlyn Draven Ezreal Jhin Jinx Kaisa MissFortune Smolder Vayne".split(" ");
const strip=s=>s.replace(/<br\s*\/?>/g," ").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();
const kits={};
for(const id of ours){const d=Object.values(require("./champ_"+id+".json").data)[0];
 kits[id]={passive:{name:d.passive.name,img:d.passive.image.full,desc:strip(d.passive.description)},
  spells:d.spells.map(s=>({name:s.name,img:s.image.full,cd:s.cooldownBurn,desc:strip(s.description)}))};}
const items={};const it=require("./item.json").data;
for(const [id,i] of Object.entries(it)){if(!i.maps["11"]||Number(id)>=10000)continue;if(!(i.name in items)||(i.gold.purchasable&&i.inStore!==false))items[i.name]=[Number(id),i.gold.total,strip(i.plaintext||"")];}
const runes={};const trees={};
for(const t of require("./runesReforged.json")){trees[t.name]=t.icon;for(const s of t.slots)for(const r of s.runes)runes[r.name]=[r.icon,t.name,strip(r.shortDesc)];}
const sums={};for(const s of Object.values(require("./summoner.json").data))if(s.modes.includes("CLASSIC"))sums[s.name]=[s.image.full,strip(s.description)];
const js="// Generated from Riot Data Dragon "+V+" by tools/gen-dd.js. Do not edit by hand.\nwindow.RA=window.RA||{};\nRA.dd="+JSON.stringify({version:V,champions:all,kits,items,runes,trees,summoners:sums})+";\n";
fs.writeFileSync(out,js);console.log("wrote",out,(js.length/1024).toFixed(0)+"KB");
