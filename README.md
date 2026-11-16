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

1. `bash tools/download-dd.sh /tmp/dd` downloads the latest Data Dragon data (and the ability kits of every guided
   champion), then `node tools/gen-dd.js /tmp/dd` rebuilds `js/data/dd.js`.
2. Research the new builds for every champion+role that has a guide (keys of `RA.builds`) and the mid/bot tier
   lists, and update the JSON files in `research/` (shape documented at the top of `tools/gen-builds.js`).
   Then run `node tools/gen-builds.js research/research-*.json`.
3. Update `js/data/patch.js` (patch number, `updated`, timers, facts) if anything changed.
4. Run `node tools/check-content.js` and fix any errors (for example removed items). Optionally open
   `tests/smoke.html` in a browser (or headless Chrome/Edge with `--dump-dom`) to check every page.

## Legal

Rift Academy isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially
involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or
registered trademarks of Riot Games, Inc.
