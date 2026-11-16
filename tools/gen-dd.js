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
// [name, title, classes, attack 0-10, magic 0-10, defense 0-10] (Riot's rough ratings, used to guess AD vs AP and tankiness)
for (const c of Object.values(champs.data)) all[c.id] = [c.name, c.title, c.tags.join("/"), c.info.attack, c.info.magic, c.info.defense];

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
// Full details for finished items (item pages): legendary items, boots and starting items.
const itemData = read("item.json").data;
const nameOf = (id) => (itemData[id] ? itemData[id].name : null);
const STARTERS = /^(Doran's |Cull$|Dark Seal$|World Atlas$|Tear of the Goddess$|Scorchclaw Pup$|Gustwalker Hatchling$|Mosstomper Seedling$)/;
// Riot's item text: "<stats>…</stats><br><br><passive>Name</passive><br>text<br><br><active>…" -> stats + effects
function parseItem(desc) {
  const html = String(desc || "").replace(/<\/?mainText>/g, "");
  const statsM = html.match(/<stats>([\s\S]*?)<\/stats>/);
  const stats = statsM ? statsM[1].split(/<br\s*\/?>/).map(strip).filter(Boolean) : [];
  const rest = html.replace(/<stats>[\s\S]*?<\/stats>/, "");
  const effects = [];
  for (const block of rest.split(/(?:<br\s*\/?>\s*){2,}/)) {
    const m = block.match(/^\s*<(passive|active)>([\s\S]*?)<\/\1>(?:<br\s*\/?>)?([\s\S]*)$/);
    if (m) effects.push({ name: strip(m[2]), active: m[1] === "active", text: strip(m[3]) });
    else if (strip(block) && !/^<rules>/.test(block.trim())) effects.push({ name: "", active: false, text: strip(block) });
  }
  return { stats, effects };
}
const itemInfo = {};
for (const [id, i] of Object.entries(itemData)) {
  if (!i.maps["11"] || Number(id) >= 10000 || !i.gold.purchasable || i.inStore === false) continue;
  if (/^Guardian's /.test(i.name) || /Kalista/.test(i.name)) continue; // ARAM / champion-only items
  const tags = i.tags || [];
  const finished = !i.into || !i.into.length;
  let kind = null;
  const fromBoots = (i.from || []).some((f) => itemData[f] && (itemData[f].tags || []).includes("Boots"));
  if ((tags.includes("Boots") || fromBoots) && (i.depth || 1) >= 2) kind = "boots";
  else if (STARTERS.test(i.name)) kind = "starter";
  else if (finished && (i.depth || 1) >= 2) kind = "legendary";
  if (!kind || itemInfo[i.name]) continue;
  const p = parseItem(i.description);
  itemInfo[i.name] = {
    kind, tags, gold: i.gold.total, plain: strip(i.plaintext), stats: p.stats, effects: p.effects,
    from: [...new Set((i.from || []).map(nameOf).filter(Boolean))],
    into: [...new Set((i.into || []).map(nameOf).filter(Boolean))]
  };
}
const runes = {}, trees = {}, runeInfo = {};
for (const t of read("runesReforged.json")) {
  trees[t.name] = t.icon;
  t.slots.forEach((s, si) => {
    for (const r of s.runes) {
      runes[r.name] = [r.icon, t.name, strip(r.shortDesc)];
      // Riot sometimes leaves template placeholders like @HealAmount@ in rune text: drop them, keep the sentence.
      let desc = strip(String(r.longDesc).replace(/<br\s*\/?>/g, " "));
      desc = desc.replace(/\s*\(initial swap cooldown is @[^@]+@ seconds\)/, "").replace(/ for @[^@]+@/g, "").replace(/ restores @[^@]+@ Health/g, " restores Health")
        .replace(/@[^@]+@/g, "some").replace(/\s+([.,:;])/g, "$1");
      runeInfo[r.name] = { slot: si, desc };
    }
  });
}
const sums = {};
for (const s of Object.values(read("summoner.json").data)) if (s.modes.includes("CLASSIC")) sums[s.name] = [s.image.full, strip(s.description)];

const out = path.join(__dirname, "..", "js/data/dd.js");
const js = "// Generated from Riot Data Dragon " + V + " by tools/gen-dd.js. Do not edit by hand.\nwindow.RA=window.RA||{};\nRA.dd=" +
  JSON.stringify({ version: V, champions: all, kits, items, itemInfo, runes, runeInfo, trees, summoners: sums }) + ";\n";
fs.writeFileSync(out, js);
console.log("wrote", out, (js.length / 1024).toFixed(0) + "KB,", Object.keys(kits).length, "kits, version", V);
