# Rift Academy

League of Legends tips and guides for every level: fundamentals, role guides, mid and bot champion guides with
current-patch builds, a tier list, a glossary, and practice tools (last-hit trainer, objective timers, quiz, role picker).

Plain HTML, CSS and JavaScript. No build step: open `index.html` in a browser, or serve the folder with any static server.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Page shell, loads everything |
| `css/style.css` | All styles (dark theme by default, light theme toggle) |
| `js/app.js` | Hash router and pages |
| `js/tools/*.js` | The four tools |
| `js/data/guides-*.js`, `roles.js`, `champs-*.js`, `glossary.js` | Content (format: `docs/content-format.md`) |
| `js/data/patch.js` | Patch number, timers and game facts |
| `js/data/builds.js` | Builds and tier list (generated) |
| `js/data/dd.js` | Champion, item, rune and summoner data from Riot's Data Dragon (generated) |
| `tools/check-content.js` | Validates all content: `node tools/check-content.js` |

## Updating for a new patch

1. Get the new Data Dragon version from `https://ddragon.leagueoflegends.com/api/versions.json`, download
   `item.json`, `runesReforged.json`, `champion.json`, `summoner.json` and `champion/<Id>.json` for the guided
   champions into a folder next to a copy of `tools/gen-dd.js`, and run it to rebuild `js/data/dd.js`.
2. Research the new builds and tier list, save them as JSON (see `tools/gen-builds.js` for the shape), and run
   `node tools/gen-builds.js mid.json bot.json`.
3. Update `js/data/patch.js` (patch number, timers, facts) if anything changed.
4. Run `node tools/check-content.js` and fix any errors (for example items that were removed).

## Legal

Rift Academy isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially
involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or
registered trademarks of Riot Games, Inc.
