# Rift Academy content format

Plain JS data files, loaded with `<script>` tags in `index.html` (no build step, no modules).
Every file starts with `window.RA = window.RA || {};` and pushes into an array.

Text fields marked **html** may use only: `<p> <ul> <ol> <li> <strong> <em> <kbd> <h3> <table> <tr> <th> <td>`
and these helpers, which the app expands when rendering:

| Token | Renders as |
|---|---|
| `{{champ:Ahri}}` | small champion icon + name (Data Dragon id, e.g. `MissFortune`, `Kaisa`) |
| `{{item:Infinity Edge}}` | item icon + name (exact name from `js/data/dd.js` → `RA.dd.items`) |
| `{{rune:Electrocute}}` | rune icon + name (exact name from `RA.dd.runes`) |
| `{{spell:Flash}}` | summoner spell icon + name |
| `{{guide:wave-management}}` | link to another guide (by id) |
| `{{tip:Text}}` | highlighted "Pro tip" box (block level, put it on its own, not inside `<p>`) |
| `{{warn:Text}}` | highlighted "Common mistake" box (block level) |

Writing style: friendly, direct, second person ("you"). Short paragraphs. Concrete numbers where they are
true for the current patch (see `js/data/patch.js`). No LaTeX. American English. Don't invent items, runes
or game systems: check `RA.dd` and `js/data/patch.js`.

## Guides — `js/data/guides-*.js`

```js
RA.guides = RA.guides || [];
RA.guides.push({
  id: "last-hitting",            // kebab-case, unique
  title: "Last-Hitting 101",
  level: "beginner",             // beginner | intermediate | advanced
  category: "laning",            // basics | laning | macro | vision | teamfighting | mental
  minutes: 6,                    // reading time
  summary: "One or two sentences shown on the card.",
  sections: [ { h: "Why CS matters", html: "<p>…</p>" } ],   // 4-7 sections
  takeaways: ["3-5 short bullet points"],
  related: ["wave-management"],  // guide ids
  quiz: [                        // 3 questions; used by the Quiz tool
    { q: "Question?", options: ["A", "B", "C", "D"], answer: 1, explain: "Why B is right." }
  ]
});
```

## Roles — `js/data/roles.js`

```js
RA.roles = RA.roles || [];
RA.roles.push({
  id: "top",                     // top | jungle | mid | bot | support
  name: "Top Lane",
  tagline: "Short hook",
  difficulty: "Medium",          // Easy | Medium | Hard (for a new player)
  summary: "2-3 sentences.",
  youLikeThisIf: ["3-4 bullets"],
  responsibilities: ["4-6 bullets"],
  sections: [ { h: "Early game (levels 1-6)", html: "…" } ],  // 5-7 sections, beginner → advanced
  starterChamps: [ { id: "Garen", why: "short reason" } ],  // 4-5 beginner-friendly picks
  mistakes: ["4-6 common mistakes"],
  quiz: [ /* 3 questions, same shape as guides */ ]
});
```

## Champions — `js/data/champs-mid.js`, `js/data/champs-bot.js`

```js
RA.champs = RA.champs || [];
RA.champs.push({
  id: "Ahri",                    // Data Dragon id
  roles: ["mid"],                // which champion lists it appears in (Ziggs: ["mid", "bot"])
  difficulty: "Medium",          // Easy | Medium | Hard
  damage: "Magic",               // Magic | Physical | Mixed
  style: "Mobile mage / assassin",
  summary: "2-3 sentences: what the champion does and who should play them.",
  strengths: ["3-4"], weaknesses: ["3-4"],
  abilities: { P: "how to use", Q: "…", W: "…", E: "…", R: "…" },  // practical tips, 1-3 sentences each
  combos: [ { name: "Standard burst", keys: "E → Q → W → R", note: "when / how" } ],  // 2-4
  spikes: ["Level 2: …", "Level 6: …", "First item: …"],
  phases: { early: "html", mid: "html", late: "html" },
  tips: ["5-7 short, specific tips"],
  matchups: {                    // from the patch research, with a one-line tip each
    hard: [ { id: "Fizz", tip: "…" } ],
    easy: [ { id: "Veigar", tip: "…" } ]
  },
  supports: [ { id: "Lulu", why: "…" } ]   // bot only
});
```

## Builds — `js/data/builds.js` (patch-dependent, refreshed each patch)

```js
RA.builds = RA.builds || {};
RA.builds["Ahri:mid"] = {
  tier: "A", winRate: "51.2%",
  summoners: ["Flash", "Ignite"],
  runes: { primaryTree, keystone, primary: [3], secondaryTree, secondary: [2], shards: [3] },
  altKeystone: { keystone, when },
  skillMax: "Q > W > E", firstThree: "Q, E, W",
  starter: [], core: [], boots: "", situational: [ { item, when } ],
  note: "patch note or empty"
};
```

## Champion picks guides — `js/data/guides-draft.js`

Same shape as other guides, with `category: "draft"` (shown as "Champion picks").

## Draft scenarios — `js/data/draft-scenarios.js`

```js
RA.draftScenarios = RA.draftScenarios || [];
RA.draftScenarios.push({
  id: "assassin-heavy",            // unique
  level: "beginner",               // beginner | intermediate | advanced
  role: "mid",                     // the role YOU are picking for: top | jungle | mid | bot | support
  ally: ["Malphite", "LeeSin"],    // champions your team already picked (Data Dragon ids, 0-4)
  enemy: ["Zed", "Talon", "Kassadin"], // enemy picks shown so far (1-5)
  q: "The enemy team has three assassins. Which mid pick helps your team most?",
  options: ["Malzahar", "Kassadin", "Yasuo", "Veigar"],  // 3-4 options; may be champion ids or short text
  optionChamps: true,              // true if every option is a champion id (shows icons)
  answer: 0,
  explain: "Why, in 2-3 sentences. May use {{champ:}} tokens."
});
```

## Per-champion picks — `js/data/champ-picks.js`

```js
RA.champPicks = RA.champPicks || {};
RA.champPicks.Ahri = {
  blind: { safe: true, why: "One sentence: is she safe to pick first, before you see your opponent?" },
  into: ["3-4 bullets: enemy champions / team types she's great against, with {{champ:}} examples"],
  avoid: ["3-4 bullets: what makes her a bad pick"],
  teammates: [ { id: "Vi", why: "short reason" } ],   // 2-3 allies (any role) she pairs well with
  teamNeeds: "One sentence: what the rest of your team should have when you pick her.",
  quiz: [ /* 3 questions, guide quiz shape; may add enemy: [ids] / ally: [ids] to show a draft */ ]
};
```

## Champion guides for other roles — `js/data/champ-roles-*.js`

A champion's main guide (`champs-*.js`) covers its main role. Each additional role gets an entry here; the app adds
the role to the champion's page (role buttons) and to the champion list filters. Fields override the main guide when
viewing that role (`abilities` and `phases` merge key by key, so you may give only the keys that differ, but full
role-specific text is better).

```js
RA.champRoles = RA.champRoles || {};
RA.champRoles["Swain:support"] = {
  difficulty: "Medium", damage: "Magic", style: "Drain-tank mage support",
  summary: "…", strengths: [], weaknesses: [],
  abilities: { P: "…", Q: "…", W: "…", E: "…", R: "…" },
  combos: [], spikes: [], phases: { early: "html", mid: "html", late: "html" }, tips: [],
  matchups: { hard: [ { id, tip } ], easy: [ { id, tip } ] },
  supports: [ { id: "Draven", why: "…" } ]   // bot: support partners; support: ADC partners; omit for other roles
};
// and its "When to pick" box:
RA.champPicks["Swain:support"] = { blind, into, avoid, teammates, teamNeeds, quiz };
```

Builds for every champion+role live in `builds.js` under `"Id:role"`.

## Map quiz — `js/data/map-quiz.js`

`RA.mapQuiz` is a list of questions answered by clicking Riot's minimap (Data Dragon `img/map/map11.png`).
Coordinates are fractions of the image: `x` from the left, `y` from the top, both 0 to 1. The blue base is bottom-left.
Landmark coordinates (camps, pits, scuttles) are defined once at the top of the file; reuse them.

```js
{ level: "intermediate",            // beginner | intermediate | advanced
  topic: "Vision",                  // short label shown above the question
  side: "blue",                     // optional: blue | red, shown as "You're on the … team"
  q: "Where should your first ward go?",
  zones: [{ x: 0.42, y: 0.42, r: 0.08 }],   // a click inside any circle is correct (r 0.02-0.15)
  marks: [{ x: 0.48, y: 0.27, label: "Seen at 0:55", color: "red" }],  // optional points drawn before answering
  explain: "Why. May use {{tokens}}." }
```

## Patch changes — `js/data/patch-changes.js`

`RA.patchChanges` feeds the "What changed this patch" page (`/patch/`) and the patch note box on champion pages.
Rewrite it every patch from the official notes. `patch` must equal `RA.patch.number`, or the box is hidden and
`check-content` warns.

```js
RA.patchChanges = {
  patch: "26.22", released: "2026-11-04", source: "https://www.leagueoflegends.com/…",
  highlights: ["3-6 plain-English bullets"],
  champions: [{ id: "Viktor", change: "buff", summary: "One plain sentence.", details: ["Health growth: 100 → 105"] }],
  items: [{ name: "Doran's Bow", change: "nerf", summary: "…", details: ["Attack damage: 8 → 7"] }],
  runes: [],                        // same shape as items
  systems: [{ title: "Jungle", summary: "…", details: ["…"] }]
};
```
`change` is `buff`, `nerf`, `adjust` (mixed) or `new` (rework). Champion ids, item and rune names use Data Dragon
spelling.

## Learning path and progress

The learning path (`/path/`) is defined in `LEARN_PATH` in `js/app.js`: three stages of step keys
(`guide:<id>`, `tool:<id>`, `role`, `patch`). Progress is stored only in the visitor's browser (`localStorage`
key `ra-progress`). When you add a guide, add its key to the right stage.

## Pages and links

Write internal links as `#/route` (or use `{{guide:id}}` / `{{champ:Id}}` tokens). On the web the app turns them into
real paths (`/rift-academy/guide/id/`); from disk they stay as `#/route`. A champion's main role is
`#/champion/Id`; other roles are `#/champion/Id/role`. After changing content, run `node tools/build-pages.js`.

## Item and rune advice — `js/data/item-guide.js`, `js/data/rune-guide.js`

Item and rune pages combine Riot's text (`RA.dd.itemInfo`, `RA.dd.runeInfo`, generated by `tools/gen-dd.js`) with our advice.
Keys are exact Data Dragon names. Every finished item, boot, starter and rune should have an entry; `check-content` warns otherwise.

```js
RA.itemGuide["Zhonya's Hourglass"] = { what: "One plain sentence.", buyWhen: "When to buy it.", goodOn: ["Ahri", "Akali"], avoid: "Optional." };
RA.runeTrees.Sorcery = "What the tree is about.";
RA.runeGuide["Arcane Comet"] = { what: "One plain sentence.", takeWhen: "Who and when.", goodOn: ["Ziggs", "Xerath"] };
```

## Adapt your build — `js/data/champ-adapt-*.js`

`RA.champAdapt["Id:role"]` (same keys as `RA.builds`) lists item swaps for six enemy-team situations: `tanky`, `squishy`,
`ad`, `ap`, `healing`, `cc`. Shown on the Build tab and used by the Game Plan Builder.

```js
RA.champAdapt["Ziggs:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "One sentence." }], tip: "Optional sentence." },
  squishy: { items: [...] }, ad: { items: [...] }, ap: { items: [...] }, healing: { items: [...] }, cc: { items: [...] }
};
```
`item` must be a finished item (a key of `RA.dd.itemInfo`); `replaces`, when given, must be in that key's build.

## Team traits — `js/data/comp-tags.js`

`RA.compTags.healing` and `RA.compTags.cc` list champion ids with strong healing/shielding and heavy crowd control. Damage
type and tankiness come from Riot's ratings (`RA.dd.champions[id][3..5]` = attack, magic, defense) and our guides' `damage`.
