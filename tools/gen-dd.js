// Generates js/data/dd.js from Riot Data Dragon files.
// Usage: node tools/gen-dd.js <folder>
// <folder> must contain item.json, runesReforged.json, champion.json, summoner.json (from
// https://ddragon.leagueoflegends.com/cdn/<version>/data/en_US/) and champion/<Id>.json saved as champ_<Id>.json
// for every champion that has a guide on the site (their ability kits are included).
// download-dd.sh in this folder does the downloads.
const fs = require("fs");
const path = require("path");

const dir = path.resolve(process.argv[2] || ".");
const read = (f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
const champs = read("champion.json");
const V = champs.version;
const strip = (s) => String(s || "").replace(/<br\s*\/?>/g, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const all = {};
for (const c of Object.values(champs.data)) all[c.id] = [c.name, c.title, c.tags.join("/")];

const kits = {};
for (const f of fs.readdirSync(dir).filter(f => /^champ_\w+\.json$/.test(f)).sort()) {
  const d = Object.values(read(f).data)[0];
  kits[d.id] = {
    passive: { name: d.passive.name, img: d.passive.image.full, desc: strip(d.passive.description) },
    spells: d.spells.map(s => ({ name: s.name, img: s.image.full, cd: s.cooldownBurn, desc: strip(s.description) }))
  };
}
const items = {};
for (const [id, i] of Object.entries(read("item.json").data)) {
  if (!i.maps["11"] || Number(id) >= 10000) continue;
  if (!(i.name in items) || (i.gold.purchasable && i.inStore !== false)) items[i.name] = [Number(id), i.gold.total, strip(i.plaintext)];
}
const runes = {}, trees = {};
for (const t of read("runesReforged.json")) {
  trees[t.name] = t.icon;
  for (const s of t.slots) for (const r of s.runes) runes[r.name] = [r.icon, t.name, strip(r.shortDesc)];
}
const sums = {};
for (const s of Object.values(read("summoner.json").data)) if (s.modes.includes("CLASSIC")) sums[s.name] = [s.image.full, strip(s.description)];

const out = path.join(__dirname, "..", "js/data/dd.js");
const js = "// Generated from Riot Data Dragon " + V + " by tools/gen-dd.js. Do not edit by hand.\nwindow.RA=window.RA||{};\nRA.dd=" +
  JSON.stringify({ version: V, champions: all, kits, items, runes, trees, summoners: sums }) + ";\n";
fs.writeFileSync(out, js);
console.log("wrote", out, (js.length / 1024).toFixed(0) + "KB,", Object.keys(kits).length, "kits, version", V);
