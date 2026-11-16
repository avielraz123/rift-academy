// Validates all content data files. Usage: node tools/check-content.js
// Checks required fields, unique ids, {{token}} references, champion ids, item/rune names in builds.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);
// Load data files in the same order as index.html.
const files = [...fs.readFileSync(path.join(root, "index.html"), "utf8").matchAll(/src="js\/data\/([\w-]+)\.js"/g)].map(m => m[1]);
for (const f of files) {
  const p = path.join(root, "js/data", f + ".js");
  if (!fs.existsSync(p)) { console.log("missing file", f); continue; }
  try { vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f + ".js" }); }
  catch (e) { console.log("ERROR loading", f, e.message); process.exitCode = 1; }
}
const RA = ctx.RA;
const dd = RA.dd;
let errors = 0, warnings = 0;
const err = (m) => { errors++; console.log("  ✗", m); };
const warn = (m) => { warnings++; console.log("  !", m); };

const guideIds = new Set((RA.guides || []).map(g => g.id));
const roleIds = new Set((RA.roles || []).map(r => r.id));
const ALLOWED_TAGS = /^(p|ul|ol|li|strong|em|kbd|h3|table|tr|th|td|thead|tbody|br|a)$/;

function checkText(where, s) {
  if (s == null) return;
  s = String(s);
  for (const m of s.matchAll(/\{\{(\w+):([^}]+)\}\}/g)) {
    const [, kind, raw] = m; const v = raw.trim();
    if (kind === "champ" && !dd.champions[v]) err(`${where}: unknown champion id "${v}"`);
    else if (kind === "item" && !dd.items[v]) err(`${where}: unknown item "${v}"`);
    else if (kind === "rune" && !dd.runes[v]) err(`${where}: unknown rune "${v}"`);
    else if (kind === "spell" && !dd.summoners[v]) err(`${where}: unknown summoner spell "${v}"`);
    else if (kind === "guide" && !guideIds.has(v)) err(`${where}: unknown guide id "${v}"`);
    else if (kind === "role" && !roleIds.has(v)) err(`${where}: unknown role id "${v}"`);
    else if (!["champ", "item", "rune", "spell", "guide", "role", "tip", "warn"].includes(kind)) err(`${where}: unknown token kind "${kind}"`);
  }
  for (const m of s.matchAll(/<\/?([a-zA-Z0-9]+)[^>]*>/g)) if (!ALLOWED_TAGS.test(m[1].toLowerCase())) warn(`${where}: tag <${m[1]}> not in allowed list`);
  if (/\{\{(tip|warn):[^}]*\}\}/.test(s) && /<p>[^<]*\{\{(tip|warn):/.test(s)) warn(`${where}: tip/warn box inside <p>`);
  if (/\$\\|\\\(|\\frac/.test(s)) err(`${where}: looks like LaTeX`);
}
function deepText(where, o) {
  if (typeof o === "string") return checkText(where, o);
  if (Array.isArray(o)) return o.forEach((x, i) => deepText(where + "[" + i + "]", x));
  if (o && typeof o === "object") for (const k of Object.keys(o)) deepText(where + "." + k, o[k]);
}
function checkQuiz(where, quiz) {
  if (!Array.isArray(quiz) || quiz.length < 3) warn(`${where}: fewer than 3 quiz questions`);
  (quiz || []).forEach((q, i) => {
    if (!q.q || !Array.isArray(q.options) || q.options.length < 2) err(`${where}.quiz[${i}]: bad question`);
    if (!(q.answer >= 0 && q.answer < (q.options || []).length)) err(`${where}.quiz[${i}]: answer index out of range`);
    if (!q.explain) warn(`${where}.quiz[${i}]: no explanation`);
  });
}

console.log("Guides:", (RA.guides || []).length);
const seen = new Set();
for (const g of RA.guides || []) {
  const w = "guide " + g.id;
  if (seen.has(g.id)) err(w + ": duplicate id"); seen.add(g.id);
  for (const k of ["id", "title", "level", "category", "minutes", "summary", "sections", "takeaways", "quiz"]) if (g[k] == null) err(`${w}: missing ${k}`);
  if (!["beginner", "intermediate", "advanced"].includes(g.level)) err(w + ": bad level");
  if (!["basics", "laning", "macro", "vision", "teamfighting", "draft", "mental"].includes(g.category)) err(w + ": bad category");
  (g.related || []).forEach(r => { if (!guideIds.has(r)) err(`${w}: related guide "${r}" not found`); });
  checkQuiz(w, g.quiz);
  deepText(w, g);
}
console.log("Roles:", (RA.roles || []).length);
for (const r of RA.roles || []) {
  const w = "role " + r.id;
  for (const k of ["id", "name", "tagline", "difficulty", "summary", "responsibilities", "sections", "starterChamps", "mistakes", "quiz"]) if (r[k] == null) err(`${w}: missing ${k}`);
  (r.starterChamps || []).forEach(c => { if (!dd.champions[c.id]) err(`${w}: unknown starter champ ${c.id}`); });
  checkQuiz(w, r.quiz);
  deepText(w, r);
}
console.log("Champions:", (RA.champs || []).length);
for (const c of RA.champs || []) {
  const w = "champ " + c.id;
  if (!dd.kits[c.id]) err(`${w}: no kit data in dd.js`);
  for (const k of ["id", "roles", "difficulty", "damage", "style", "summary", "strengths", "weaknesses", "abilities", "combos", "spikes", "phases", "tips", "matchups"]) if (c[k] == null) err(`${w}: missing ${k}`);
  for (const k of ["P", "Q", "W", "E", "R"]) if (!c.abilities || !c.abilities[k]) err(`${w}: missing ability tip ${k}`);
  for (const k of ["early", "mid", "late"]) if (!c.phases || !c.phases[k]) err(`${w}: missing phase ${k}`);
  const mus = [...((c.matchups || {}).hard || []), ...((c.matchups || {}).easy || []), ...(c.supports || [])];
  mus.forEach(m => { if (!dd.champions[m.id]) err(`${w}: unknown matchup champ ${m.id}`); });
  (c.roles || []).forEach(role => { if (!RA.builds[c.id + ":" + role]) warn(`${w}: no build for ${role}`); });
  deepText(w, c);
}
console.log("Role guides:", Object.keys(RA.champRoles || {}).length);
for (const [key, v] of Object.entries(RA.champRoles || {})) {
  const w = "role guide " + key;
  const [id, role] = key.split(":");
  const base = (RA.champs || []).find(c => c.id === id);
  if (!base) err(`${w}: no main guide for ${id}`);
  if (!["top", "jungle", "mid", "bot", "support"].includes(role)) err(`${w}: bad role`);
  if (base && base.roles.includes(role)) warn(`${w}: main guide already lists role ${role}`);
  for (const k of ["style", "summary", "strengths", "weaknesses", "combos", "spikes", "phases", "tips", "matchups"]) if (v[k] == null) err(`${w}: missing ${k}`);
  for (const k of ["early", "mid", "late"]) if (!v.phases || !v.phases[k]) err(`${w}: missing phase ${k}`);
  const mus = [...((v.matchups || {}).hard || []), ...((v.matchups || {}).easy || []), ...(v.supports || [])];
  mus.forEach(m => { if (!dd.champions[m.id]) err(`${w}: unknown champ ${m.id}`); });
  if (!RA.builds[key]) warn(`${w}: no build`);
  if (!(RA.champPicks || {})[key]) warn(`${w}: no "when to pick" entry`);
  deepText(w, v);
}
console.log("Builds:", Object.keys(RA.builds || {}).length);
for (const [key, b] of Object.entries(RA.builds || {})) {
  const w = "build " + key;
  const items = [...(b.starter || []), ...(b.core || []), b.boots, ...(b.situational || []).map(s => s.item)].filter(Boolean);
  items.forEach(i => { if (!dd.items[i]) err(`${w}: unknown item "${i}"`); });
  const r = b.runes || {};
  [r.keystone, ...(r.primary || []), ...(r.secondary || []), b.altKeystone && b.altKeystone.keystone].filter(Boolean).forEach(n => { if (!dd.runes[n]) err(`${w}: unknown rune "${n}"`); });
  [r.primaryTree, r.secondaryTree].forEach(t => { if (!dd.trees[t]) err(`${w}: unknown tree "${t}"`); });
  (b.summoners || []).forEach(s => { if (!dd.summoners[s]) err(`${w}: unknown summoner "${s}"`); });
}
for (const role of ["mid", "bot"]) ((RA.patch.tierList || {})[role] || []).forEach(t => { if (!dd.champions[t.id]) err(`tierList ${role}: unknown champ ${t.id}`); });
function checkDraftIds(where, q) {
  [...(q.ally || []), ...(q.enemy || [])].forEach(id => { if (!dd.champions[id]) err(`${where}: unknown draft champ ${id}`); });
  if (q.optionChamps) (q.options || []).forEach(o => { if (!dd.champions[o]) err(`${where}: option "${o}" is not a champion id`); });
  if (q.role && !["top", "jungle", "mid", "bot", "support"].includes(q.role)) err(`${where}: bad role ${q.role}`);
}
console.log("Draft scenarios:", (RA.draftScenarios || []).length);
const scen = new Set();
(RA.draftScenarios || []).forEach((s, i) => {
  const w = "scenario " + (s.id || i);
  if (scen.has(s.id)) err(w + ": duplicate id"); scen.add(s.id);
  if (!["beginner", "intermediate", "advanced"].includes(s.level)) err(w + ": bad level");
  if (!s.enemy || !s.enemy.length) err(w + ": no enemy champions");
  checkQuiz(w, [s, s, s]);
  checkDraftIds(w, s);
  deepText(w, s);
});
console.log("Champion picks:", Object.keys(RA.champPicks || {}).length);
for (const c of RA.champs || []) if (!(RA.champPicks || {})[c.id]) warn(`champ ${c.id}: no "when to pick" entry`);
for (const [key, p] of Object.entries(RA.champPicks || {})) {
  const w = "picks " + key;
  const id = key.split(":")[0];
  if (!dd.champions[id]) err(w + ": unknown champion");
  if (key.includes(":") && !(RA.champRoles || {})[key] && !((RA.champs || []).find(c => c.id === id) || { roles: [] }).roles.includes(key.split(":")[1])) warn(w + ": no guide for this role");
  if (!p.blind || typeof p.blind.safe !== "boolean") err(w + ": blind.safe missing");
  for (const k of ["into", "avoid", "teammates", "teamNeeds"]) if (!p[k]) err(`${w}: missing ${k}`);
  (p.teammates || []).forEach(t => { if (!dd.champions[t.id]) err(`${w}: unknown teammate ${t.id}`); });
  checkQuiz(w, p.quiz);
  (p.quiz || []).forEach((q, i) => checkDraftIds(`${w}.quiz[${i}]`, q));
  deepText(w, p);
}
console.log("Glossary:", (RA.glossary || []).length);
(RA.glossary || []).forEach(g => checkText("glossary " + g.term, g.def));

console.log(`\n${errors} error(s), ${warnings} warning(s)`);
if (errors) process.exitCode = 1;
