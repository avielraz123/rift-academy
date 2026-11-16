/* Champion traits the Game Plan Builder can't read from Riot's data: strong healing/shielding and heavy crowd control.
   Damage type and tankiness come from Riot's ratings in dd.js (RA.dd.champions[id][3..5]) and our guides. */
window.RA = window.RA || {};
RA.compTags = {
  // Heal or shield a lot, so Grievous Wounds or burst matters.
  healing: ["Soraka", "Yuumi", "Sona", "Nami", "Milio", "Seraphine", "Janna", "Lulu", "Karma", "Taric", "Ivern", "Senna",
    "Aatrox", "Vladimir", "Sylas", "Warwick", "DrMundo", "Swain", "Fiddlesticks", "Briar", "Illaoi", "Olaf", "Mordekaiser",
    "Gwen", "Volibear", "Maokai", "Trundle", "Nasus", "Sett", "Zac", "Samira"],
  // Several reliable stuns, roots, knock-ups, charms or suppressions.
  cc: ["Leona", "Nautilus", "Amumu", "Malphite", "Sejuani", "Lissandra", "Morgana", "Thresh", "Blitzcrank", "Rell", "Alistar",
    "Braum", "Rammus", "Zac", "Maokai", "Ornn", "Sion", "Vi", "Skarner", "JarvanIV", "Nunu", "Lux", "Neeko", "Veigar", "Annie",
    "Galio", "Bard", "Zyra", "Syndra", "Rakan", "Poppy", "Cassiopeia", "Lillia", "Gragas", "Malzahar", "Warwick", "Ashe",
    "Varus", "Jhin", "Taric", "Ahri", "Leblanc", "Xerath", "Sona", "Nami", "Janna", "Pantheon", "Renekton", "MonkeyKing", "Hwei"]
};
