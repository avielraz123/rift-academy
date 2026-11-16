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
