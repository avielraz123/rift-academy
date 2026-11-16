#!/usr/bin/env bash
# Downloads the Data Dragon files tools/gen-dd.js needs, for the latest version (or the version given as $2).
# Usage: bash tools/download-dd.sh <folder> [version]
# Champion kits are downloaded for every champion that has a guide (ids found in js/data/champs-*.js).
set -euo pipefail
DIR="${1:?usage: download-dd.sh <folder> [version]}"
V="${2:-$(curl -fsS https://ddragon.leagueoflegends.com/api/versions.json | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s)[0]))')}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$DIR"
BASE="https://ddragon.leagueoflegends.com/cdn/$V/data/en_US"
for f in item runesReforged champion summoner; do curl -fsS -o "$DIR/$f.json" "$BASE/$f.json"; done
IDS=$(grep -ohE 'RA\.champs\.push\(\{\s*id: "[A-Za-z]+"|^\s*id: "[A-Za-z]+",' "$ROOT"/js/data/champs-*.js | grep -oE '"[A-Za-z]+"' | tr -d '"' | sort -u)
for id in $IDS; do curl -fsS -o "$DIR/champ_$id.json" "$BASE/champion/$id.json"; done
echo "Downloaded Data Dragon $V ($(echo "$IDS" | wc -w) champion kits) to $DIR"
