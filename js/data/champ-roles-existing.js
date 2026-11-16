window.RA = window.RA || {};
RA.champRoles = RA.champRoles || {};
RA.champPicks = RA.champPicks || {};

/* ---------- Yasuo top ---------- */
RA.champRoles["Yasuo:top"] = {
  difficulty: "Hard",
  damage: "Physical",
  style: "Crit skirmisher on an island",
  summary: "Top Yasuo is a lonely duelist: no support to cover you, a long lane, and a lot of melee bruisers who want to stand on you. You win by farming safely, using Wind Wall and your passive shield to dodge the worst trades, and turning a lead into a split-push that the enemy can't stop alone.",
  strengths: [
    "Your passive shield and Wind Wall let you take short trades that ranged top laners can't punish",
    "Sweeping Blade through minions gives you more mobility than most top laners",
    "Strong split-pusher once you have {{item:Blade of The Ruined King}} and {{item:Immortal Shieldbow}}",
    "The top quest gives you a free Unleashed Teleport to join fights even without taking {{spell:Teleport}}"
  ],
  weaknesses: [
    "Melee bruisers with sustain and crowd control (like {{champ:Darius}}) beat you in long fights",
    "No partner to help when the enemy jungler ganks",
    "Your damage was nerfed in 26.22 (Steel Tempest now 100% AD), so early trades are a bit weaker",
    "Falls off hard if you die early, because your items do the heavy lifting"
  ],
  abilities: {
    P: "Way of the Wanderer: your shield builds while you move. In top lane, walk around between trades so it's full before the enemy laner hits you. It's the main reason you can trade with bruisers at all.",
    Q: "Steel Tempest is your main damage and your last-hitting tool. Stack it on minions so you walk into a trade with the tornado ready, then knock the enemy up when they step forward to hit you.",
    W: "Wind Wall blocks projectiles, which matters less against melee top laners. Save it for the enemy jungler's skill shots, ranged top laners like {{champ:Quinn}} or {{champ:Teemo}}, and teamfight ultimates.",
    E: "Sweeping Blade is how you escape ganks: dash through minions toward your tower. You can't dash through the same unit twice in a row for a few seconds, so plan your escape path before you need it.",
    R: "Last Breath needs a knock-up. In top, you usually set it up yourself with the tornado, or join a teamfight after an ally's knock-up. With Unleashed Teleport, look for flanks where your team's engage gives you a free Last Breath."
  },
  combos: [
    { name: "Short trade", keys: "Q (stacked) → AA → E out", note: "Hit with the tornado when the enemy walks up to last-hit, auto once, then dash away through a minion before they can answer." },
    { name: "All-in", keys: "E → Q (circle) → R → AA → Q", note: "Dash in and cast Q during the dash for a circular knock-up, then ult and finish with autos. Use {{spell:Exhaust}} on bruisers before they use their big damage." },
    { name: "Gank escape", keys: "W → E → E → E", note: "Wall the jungler's projectile, then chain dashes through minions toward your tower." }
  ],
  spikes: [
    "Level 2: Sweeping Blade + Steel Tempest lets you take your first real trade",
    "First item ({{item:Blade of The Ruined King}}): your dueling item, built first in top because fights are long and against high-health enemies",
    "Second item ({{item:Immortal Shieldbow}}): survives burst and turns close fights",
    "Third item ({{item:Infinity Edge}}): your crits finally hurt, and you become a real split-push threat",
    "Top quest done: free Unleashed Teleport and a level cap of 20 for the late game"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and a {{item:Health Potion}}, and level Q, E, W. Your goal in lane is not to win every trade: it's to farm, keep your shield up and avoid the bruiser's long all-ins. Play near your minions so you always have Sweeping Blade targets, both to trade and to escape.</p><p>Against melee champions, trade only when their key ability is on cooldown (for example after {{champ:Darius}} misses his Q edge). Against ranged top laners, use Wind Wall to block their best poke and then dash in. {{spell:Exhaust}} is your all-in tool: it cuts the enemy's damage when they try to turn the fight.</p>{{warn:Don't take long fights against bruisers with healing. Short trades and farming are how you get to your items.}}",
    mid: "<p>After {{item:Blade of The Ruined King}} and {{item:Immortal Shieldbow}} you are a strong duelist. Push the side lane, take turret plates, and use the threat of your split push to pull enemies away from objectives. Read {{guide:side-lanes}} for how to time it.</p><p>When your team fights for a drake or Baron, use Unleashed Teleport (the free spell from the top quest) to arrive on a flank. Your best fights start with an ally's knock-up, like {{champ:Malphite}}'s or {{champ:Gragas}}'s, so you can Last Breath several enemies.</p>",
    late: "<p>Late game, you are either a split-pusher or a backline flanker. If you're ahead, keep pushing the side lane with {{item:Infinity Edge}} and {{item:Guardian Angel}} and only join fights with Teleport. If you're behind, stay with your team and wait for knock-ups instead of starting fights yourself.</p><p>Wind Wall can decide a late fight: block an {{champ:Ashe}} arrow, a {{champ:Jinx}} rocket or a {{champ:Caitlyn}} ultimate. Always know where the enemy's big projectile ultimates are.</p>"
  },
  tips: [
    "Keep your passive shield full before every trade: walk around instead of standing still",
    "Exhaust the bruiser the moment they commit, not before",
    "Ward your river bush early; you have no partner to warn you about ganks",
    "Build {{item:Mortal Reminder}} into healing top laners like {{champ:Aatrox}} or {{champ:Sett}}",
    "Use the top quest's Unleashed Teleport to flank, not to arrive in front of the enemy team",
    "Freeze near your tower if you fall behind; Yasuo is weak when he has to walk far forward",
    "Remember the 26.22 nerf: your early trades are a little weaker, so respect even matchups"
  ],
  matchups: {
    hard: [
      { id: "Darius", tip: "Never fight him in a long trade or at five Hemorrhage stacks. Dodge the edge of his Q, take short trades and play for farm." },
      { id: "Singed", tip: "Don't chase him; his poison trail and fling punish you. Farm safely and outscale him with items." },
      { id: "Camille", tip: "She wins short trades with her shield and true damage. Wind Wall doesn't stop her hook, so dodge it with Sweeping Blade instead." }
    ],
    easy: [
      { id: "KSante", tip: "He's tanky but slow to kill you early. Stack crits and take long trades when his main abilities are on cooldown." },
      { id: "Heimerdinger", tip: "Wind Wall blocks his rockets and grenade. Kill his turrets with Q and dash onto him once his stun is used." },
      { id: "Yorick", tip: "Kill his ghouls with Steel Tempest and fight him when his Maiden is down. Punish him hard before his split push gets strong." }
    ]
  }
};

RA.champPicks["Yasuo:top"] = {
  blind: { safe: false, why: "Many popular bruisers beat him in a long lane, so pick him top only after you've seen the enemy top laner." },
  into: [
    "Ranged top laners whose damage comes from projectiles, like {{champ:Heimerdinger}} or {{champ:Quinn}}",
    "Slow tanks who can't punish short trades, like {{champ:KSante}}",
    "Teams with knock-ups you can follow up on, like {{champ:Malphite}} or {{champ:Gragas}} on your side",
    "Enemy teams with lots of projectile ultimates Wind Wall can block"
  ],
  avoid: [
    "Bruisers with healing and long fights, like {{champ:Darius}} or {{champ:Aatrox}}",
    "Champions with unblockable gap-closers and burst, like {{champ:Camille}}",
    "Hard point-and-click crowd control that locks you down",
    "Teams that already have a lot of fragile, scaling picks with no frontline"
  ],
  teammates: [
    { id: "Malphite", why: "His ultimate knocks up several enemies, giving you a huge Last Breath." },
    { id: "Gragas", why: "His body slam and ultimate both knock enemies into the air." },
    { id: "Diana", why: "Her ultimate pulls enemies together, perfect for a follow-up Steel Tempest tornado." }
  ],
  teamNeeds: "A frontline and at least one ally knock-up, so you aren't the only one starting fights.",
  quiz: [
    { q: "The enemy top laner is Darius. Is Yasuo top a good counter-pick?", enemy: ["Darius"], options: ["No: Darius wins long fights with healing and stacking damage", "Yes: Wind Wall blocks all of his abilities", "Yes: Yasuo always wins melee matchups", "Only with Teleport"], answer: 0, explain: "Darius is one of Yasuo's hardest top matchups because his damage isn't blockable and he wins extended trades." },
    { q: "Why does Yasuo top build Blade of The Ruined King first, unlike Yasuo bot?", options: ["Top fights are long duels against high-health bruisers", "It gives mana", "It's required for Last Breath", "It makes Wind Wall bigger"], answer: 0, explain: "Long duels against tanky top laners make Blade of The Ruined King's damage and sustain worth more than in bot lane." },
    { q: "Your team has Malphite and Gragas. The enemy team has Heimerdinger top. Which top pick fits best?", ally: ["Malphite", "Gragas"], enemy: ["Heimerdinger"], role: "top", options: ["Yasuo", "Veigar", "Lux", "Ziggs"], optionChamps: true, answer: 0, explain: "Wind Wall blocks Heimerdinger's projectiles, and your allies' knock-ups set up Last Breath." }
  ]
};

/* ---------- Yasuo bot ---------- */
RA.champRoles["Yasuo:bot"] = {
  difficulty: "Hard",
  damage: "Physical",
  style: "Melee carry in a 2v2 lane",
  summary: "Bot lane Yasuo replaces the marksman with a melee crit carry. With a support who has knock-ups or protection, he can win lane with all-ins at levels 2 and 3, and he scales into a teamfight monster. He's currently one of the stronger picks in bot, but he needs a support that plays around him.",
  strengths: [
    "Strong level 2-3 all-ins with a support who has crowd control",
    "Wind Wall blocks marksman auto-attacks and support skill shots in lane",
    "Scales into a great teamfighter with {{item:Immortal Shieldbow}} and {{item:Infinity Edge}}",
    "Supports with knock-ups give you constant Last Breath opportunities"
  ],
  weaknesses: [
    "Melee in a lane against two ranged champions, so you take poke while farming",
    "Very dependent on your support; with a poke support you struggle",
    "Champions with dashes and long range, like {{champ:Kalista}} and {{champ:Xayah}}, beat your all-ins",
    "Your damage was nerfed in 26.22 (Steel Tempest now 100% AD)"
  ],
  abilities: {
    P: "Way of the Wanderer: keep your shield full before your support engages, so the enemy's first trade back is absorbed.",
    Q: "Steel Tempest last-hits safely from a distance. Keep a tornado stacked so you can follow your support's engage instantly with a second knock-up.",
    W: "Wind Wall is huge in bot lane: it blocks marksman autos, {{champ:Blitzcrank}} hooks and many support spells. Use it when the enemy marksman commits to a trade or when your support is about to be hooked.",
    E: "Sweeping Blade through the enemy wave closes the gap onto the marksman. Make sure there are minions nearby before you go in, or you can't get back out.",
    R: "Last Breath works on any knock-up: your tornado, {{champ:Rell}}'s or {{champ:Alistar}}'s engage, or {{champ:Janna}}'s tornado. Wait for your support's knock-up and ult right away."
  },
  combos: [
    { name: "Level 2 all-in", keys: "Support engage → E → Q → AA", note: "Hit level 2 first (after the first wave plus three minions of the second), let your support engage, then dash in and hit." },
    { name: "Knock-up ultimate", keys: "Support knock-up → R → Q → AA", note: "Ult as soon as your support's knock-up lands; the longer you wait, the more likely the enemy escapes." },
    { name: "Wall the trade", keys: "W → E → Q (circle)", note: "Block the marksman's autos with Wind Wall, then dash in and knock up while they can't hit you." }
  ],
  spikes: [
    "Level 2-3: strong all-ins with a crowd control support",
    "First item ({{item:Immortal Shieldbow}}): keeps you alive when you dive the marksman",
    "Second item ({{item:Infinity Edge}}): huge crit damage, you start winning fights",
    "Third item ({{item:Death's Dance}}): lets you survive in the middle of teamfights",
    "Bot quest done: extra gold, and your boots move to the quest slot so you get a free item slot"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}}, level Q, E, W, and take {{spell:Flash}} with {{spell:Exhaust}}. Your lane is about one thing: winning the level 2 and level 3 all-ins with your support. Push the first wave fast so you hit level 2 first, then go in together.</p><p>Between all-ins, farm with Steel Tempest from as far away as you can and keep your shield up. Use Wind Wall on the enemy marksman's trades and the enemy support's engage. Exhaust their marksman when you all-in so they can't kill you back.</p>{{tip:Play with supports that knock enemies up or protect you, like {{champ:Rell}}, {{champ:Nami}} or {{champ:Janna}}. They make Yasuo bot much stronger.}}",
    mid: "<p>After {{item:Immortal Shieldbow}} and {{item:Infinity Edge}}, group with your team for dragons. Your support's engage plus your Last Breath can win fights by themselves. Use your bot quest gold to finish items faster.</p><p>Look for flanks through the river and jungle so you can Sweeping Blade into the enemy backline when a fight starts. Read {{guide:teamfighting}} for positioning as a melee carry.</p>",
    late: "<p>Late game, wait for your team's engage or a tornado hit before you go in. With {{item:Death's Dance}} and {{item:Guardian Angel}}, you can stay in fights for a long time. Wind Wall the enemy marksman's damage and key projectile ultimates, then dive the carries.</p>"
  },
  tips: [
    "Hit level 2 first and all-in with your support",
    "Use Wind Wall to block the enemy marksman's autos during trades",
    "Exhaust the enemy marksman when you dive them",
    "Always keep a minion nearby so you can Sweeping Blade out",
    "Ult right away when your support knocks enemies up",
    "Your bot quest moves boots to the quest slot; use the extra item slot for {{item:Guardian Angel}} late",
    "Avoid long poke lanes; you can't farm well against two ranged champions without a support who protects you"
  ],
  matchups: {
    hard: [
      { id: "Kalista", tip: "She hops around and kites you with her passive. Wait for her to use her dash-attacks on minions before you engage, and wall her spears." },
      { id: "Xayah", tip: "Her feathers root you and her ultimate dodges your all-in. Bait her ultimate before you commit Last Breath." },
      { id: "Swain", tip: "His crowd control and healing win long fights. Avoid his root, and fight when it's on cooldown." }
    ],
    easy: [
      { id: "Ezreal", tip: "Wind Wall blocks his Mystic Shot poke. Dash in after he uses his Arcane Shift." },
      { id: "Lucian", tip: "He wants short trades; your shield and Wind Wall absorb them, and your all-in beats his." },
      { id: "Ashe", tip: "Wall her Volley and ultimate, and all-in her; she has no dash to escape." }
    ]
  },
  supports: [
    { id: "Nami", why: "Her bubble and Tidal Wave knock enemies up, and her E boosts your attacks." },
    { id: "Janna", why: "Her tornado knocks up for Last Breath and her shields keep you alive in all-ins." },
    { id: "Rell", why: "Her engages knock up several enemies at once, setting up huge ultimates." }
  ]
};

RA.champPicks["Yasuo:bot"] = {
  blind: { safe: false, why: "He depends on your support and loses to some marksmen, so pick him after you know who your support is." },
  into: [
    "Immobile marksmen with projectile damage, like {{champ:Ashe}} or {{champ:Ezreal}}",
    "Lanes where your support has knock-ups, like {{champ:Rell}} or {{champ:Nami}}",
    "Enemy teams with lots of projectile ultimates",
    "Short-trade marksmen like {{champ:Lucian}}"
  ],
  avoid: [
    "Mobile kiters like {{champ:Kalista}} or {{champ:Xayah}}",
    "Lanes with lots of crowd control, like {{champ:Swain}}",
    "Poke supports that won't let you farm",
    "Teams that already have a melee carry in another lane and no ranged damage"
  ],
  teammates: [
    { id: "Nami", why: "Knock-ups from her bubble and ultimate plus E empowerment." },
    { id: "Janna", why: "Tornado knock-up and shields make your all-ins safe." },
    { id: "Rell", why: "Hard engage that knocks up multiple enemies." }
  ],
  teamNeeds: "A support with knock-ups or shields, and some ranged damage elsewhere in the team.",
  quiz: [
    { q: "Your support is Rell. The enemy bot lane is Ashe and Senna. Which bot pick fits best?", ally: ["Rell"], enemy: ["Ashe", "Senna"], role: "bot", options: ["Yasuo", "Veigar", "Ziggs", "Lux"], optionChamps: true, answer: 0, explain: "Rell's knock-ups set up Last Breath, and immobile Ashe can't escape Yasuo's all-in." },
    { q: "Which support makes Yasuo bot the strongest?", options: ["A support with knock-ups or shields, like Nami or Janna", "A poke support who never engages", "Any support, it doesn't matter", "A support with no crowd control"], answer: 0, explain: "Yasuo needs knock-ups for Last Breath and protection while he all-ins." },
    { q: "Against which bot laner is Yasuo bot a bad pick?", enemy: ["Kalista"], options: ["Kalista", "Ashe", "Ezreal", "Lucian"], optionChamps: true, answer: 0, explain: "Kalista kites with her hops and punishes melee champions; she's one of Yasuo bot's hardest matchups." }
  ]
};

/* ---------- Lux support ---------- */
RA.champRoles["Lux:support"] = {
  difficulty: "Easy",
  damage: "Magic",
  style: "Long-range poke and pick support",
  summary: "Lux is actually played more as a support than in mid. She pokes from long range, catches enemies with Light Binding, shields her marksman and finishes kills with Final Spark from anywhere. She's a great support for new players who like dealing damage, but she's fragile and gets punished by hooks and engage.",
  strengths: [
    "Huge range: you can poke the enemy bot lane without getting close",
    "Light Binding can catch two enemies and set up kills for your marksman",
    "Prismatic Barrier shields your carry (and yourself) twice",
    "Final Spark has a short cooldown and long range to finish fleeing enemies"
  ],
  weaknesses: [
    "Very fragile: if a hook support catches you, you die",
    "No escape besides {{spell:Flash}}",
    "When you miss Light Binding, you have little to protect your marksman",
    "Lower win rate than in some other roles this patch; good engage supports punish you"
  ],
  abilities: {
    P: "Illumination: your spells mark enemies, and your next auto detonates the mark for extra damage. In lane, auto the enemy after landing E for free poke, but don't walk too far forward for it.",
    Q: "Light Binding roots up to two enemies. Use it after the enemy support uses their engage or when the marksman walks up to last-hit. Hitting a minion first still roots the champion behind it.",
    W: "Prismatic Barrier shields everyone it passes through, both on the way out and on the way back. Throw it through your marksman when the enemy goes in.",
    E: "Lucent Singularity is your main poke and wave tool; it's maxed first as support. Throw it on the enemy marksman when they walk up to last-hit, and use it to slow chasers.",
    R: "Final Spark is long range with a short cooldown. Use it to finish kills, poke before dragons, or hit a whole enemy team in a chokepoint. Land Light Binding first if you can."
  },
  combos: [
    { name: "Pick combo", keys: "Q → E → R → AA", note: "Root, slow zone, Final Spark, then auto for Illumination. Kills most marksmen with your ADC's help." },
    { name: "Lane poke", keys: "E → AA → walk back", note: "Throw E on the enemy marksman when they last-hit, detonate it, auto once and step back." },
    { name: "Save your carry", keys: "W → Q → Flash", note: "Shield your ADC through the engage, root the attacker, and Flash only if you're the target." }
  ],
  spikes: [
    "Level 2: Light Binding + Lucent Singularity for your first pick",
    "Level 6: Final Spark makes every root a likely kill",
    "Support quest: {{item:World Atlas}} upgrades for free, usually into {{item:Zaz'Zak's Realmspike}} (or {{item:Celestial Opposition}} against heavy dive)",
    "First item ({{item:Luden's Echo}}): poke damage and wave clear spike",
    "Second item ({{item:Stormsurge}}): your combo kills squishy targets outright"
  ],
  phases: {
    early: "<p>Start {{item:World Atlas}} and a {{item:Health Potion}}, and level E, Q, W. Your summoners are {{spell:Flash}} and {{spell:Heal}}, so you can heal your marksman in fights. Stand behind your ADC and out of the enemy support's engage range.</p><p>Poke with Lucent Singularity when the enemy marksman steps up to last-hit, and save Light Binding for a real chance: when the enemy support has used their engage, or when your ADC can follow up. Against hook supports like {{champ:Blitzcrank}}, always stand behind your minions.</p>{{warn:Don't throw Light Binding at a full-health enemy just to poke. Without it, you have nothing to stop an engage.}}",
    mid: "<p>Your support item upgrades through the support quest, and you get cheap 40-gold {{item:Control Ward}}s. Ward the river and dragon pit before objectives (see {{guide:vision-control}}), and poke the enemy before fights with E and Final Spark.</p><p>In fights, stay at max range. Your job is to root a target for your team and shield your carry, not to walk forward. Fighting in jungle chokepoints is perfect for Lux: Final Spark hits everyone in a line.</p>",
    late: "<p>Late game, every Light Binding can decide a fight. Stand behind your frontline, wait for an enemy to step forward, root them, and Final Spark. Keep Prismatic Barrier for when the enemy dives your carry.</p><p>Final Spark's range also lets you help from far away: hit low-health enemies running from a fight, or poke the enemy team before Baron.</p>"
  },
  tips: [
    "Max E first as support for poke and wave control",
    "Stand behind minions against hook supports",
    "Shield your ADC with W on the way out and the way back",
    "Use 40-gold Control Wards from the support quest to control the river",
    "Root first, then Final Spark: a rooted target can't dodge it",
    "Heal your marksman when they're about to die",
    "Take {{item:Celestial Opposition}} instead of {{item:Zaz'Zak's Realmspike}} if the enemy team has lots of dive"
  ],
  matchups: {
    hard: [
      { id: "Blitzcrank", tip: "Stand behind your minions at all times. If he misses his hook, punish him with Q and E." },
      { id: "Velkoz", tip: "He outranges and out-pokes you. Dodge his skill shots, and play for your ADC's trades instead of poke wars." },
      { id: "Rell", tip: "Her engage reaches you fast. Keep Light Binding ready for when she dashes in, and stay behind your ADC." }
    ],
    easy: [
      { id: "Swain", tip: "Stay out of his root range and poke him from far away with E; he wants to fight up close." },
      { id: "Ashe", tip: "She has no dash, so Light Binding hits her easily. Poke her before your ADC trades." },
      { id: "Senna", tip: "She's fragile and slow. Land Light Binding on her and your ADC can kill her." }
    ]
  },
  supports: [
    { id: "Xayah", why: "Her feathers root enemies you've already slowed, and she can kill anyone you bind." },
    { id: "Jhin", why: "His long-range root and ultimate follow up your Light Binding from far away." },
    { id: "Kaisa", why: "She dashes onto anyone you root and isolates them for a kill." }
  ]
};

RA.champPicks["Lux:support"] = {
  blind: { safe: true, why: "Her range keeps her safe in most lanes, but avoid her into hook supports if you can." },
  into: [
    "Immobile bot lanes, like {{champ:Ashe}} and {{champ:Senna}}",
    "Melee supports who need to walk up to you, like {{champ:Swain}}",
    "Teams that group in chokepoints, where Final Spark hits everyone",
    "Bot lanes without hard engage"
  ],
  avoid: [
    "Hook supports like {{champ:Blitzcrank}}",
    "Long-range poke supports that outrange you, like {{champ:Velkoz}}",
    "Hard engage supports like {{champ:Rell}}",
    "Dive-heavy enemy teams where you'll be caught"
  ],
  teammates: [
    { id: "Xayah", why: "She roots enemies you've slowed and kills anything you bind." },
    { id: "Jhin", why: "His long range follows up your binds from a distance." },
    { id: "Kaisa", why: "She dashes onto rooted targets for a quick kill." }
  ],
  teamNeeds: "A frontline that keeps enemies off you, and a marksman who can follow up on your roots.",
  quiz: [
    { q: "The enemy support is Blitzcrank. What should Lux support do?", enemy: ["Blitzcrank"], options: ["Stand behind your minions so his hook hits them", "Stand in front to bait his hook", "Use Light Binding on minions", "Ignore him"], answer: 0, explain: "Minions block Blitzcrank's hook. Stay behind them, and punish him when he misses." },
    { q: "Which item does Lux support usually upgrade World Atlas into?", options: ["Zaz'Zak's Realmspike", "Infinity Edge", "Sunfire Aegis", "Blade of The Ruined King"], answer: 0, explain: "Zaz'Zak's Realmspike is the usual damage upgrade; Celestial Opposition is the choice against heavy dive." },
    { q: "Your ADC is Jhin. The enemy bot lane is Ashe and Senna. Which support fits best?", ally: ["Jhin"], enemy: ["Ashe", "Senna"], role: "support", options: ["Lux", "Yasuo", "Draven", "Vayne"], optionChamps: true, answer: 0, explain: "Lux pokes immobile Ashe and Senna, and Jhin follows up her binds from long range." }
  ]
};

/* ---------- Veigar bot ---------- */
RA.champRoles["Veigar:bot"] = {
  difficulty: "Medium",
  damage: "Magic",
  style: "Scaling mage carry in bot lane",
  summary: "Veigar bot replaces the marksman with a mage who scales forever. With Teleport and First Strike, he farms safely, stacks AP with Baleful Strike and comes online as a one-shot threat. His support handles lane fights while Veigar cages enemies for his support to follow up.",
  strengths: [
    "Event Horizon cages both enemies in a 2v2 lane",
    "Infinite scaling: your AP keeps growing every time you hit champions or kill minions with Q",
    "Teleport lets you join fights across the map",
    "High win rate in bot this patch"
  ],
  weaknesses: [
    "Weak early against marksmen who poke with autos",
    "No dash, so marksmen with range kite you",
    "Needs time to stack AP, so early fights are risky",
    "Hard to farm under tower against fast-pushing lanes"
  ],
  abilities: {
    P: "Phenomenal Evil Power: hitting enemy champions with spells and getting takedowns gives permanent AP. In bot lane, your support's crowd control helps you hit more spells, so you stack faster.",
    Q: "Baleful Strike gives permanent AP for each unit it kills. Last-hit with Q as much as possible; it hits two targets, so line up two minions.",
    W: "Dark Matter does big damage but is slow. Use it on enemies rooted or caged by you or your support.",
    E: "Event Horizon cages the area. In bot lane, it can trap both enemies at once. Use it when your support engages or to stop a dive.",
    R: "Primordial Burst does more damage the lower the enemy's health. Save it to finish an enemy, not to start a fight."
  },
  combos: [
    { name: "Cage burst", keys: "E → W → Q → R", note: "Cage the enemy, drop Dark Matter on them, hit Q, then ult to finish." },
    { name: "Support follow-up", keys: "Support CC → W → Q", note: "When your support roots an enemy, drop Dark Matter on them for a guaranteed hit." },
    { name: "Peel", keys: "E (between you and the enemy) → walk back", note: "Cage the path when enemies dive you." }
  ],
  spikes: [
    "Level 6: Primordial Burst finishes low-health enemies",
    "First item ({{item:Luden's Echo}}): extra burst and mana",
    "Second item ({{item:Stormsurge}}): your combo kills squishy targets",
    "Third item ({{item:Rabadon's Deathcap}}): huge AP boost, often with your stacks you one-shot carries",
    "Bot quest done: extra gold and your boots move to the quest slot"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and a {{item:Health Potion}}, level Q, W, E, and take {{spell:Flash}} with {{spell:Teleport}}. Your lane runes ({{rune:First Strike}} with {{rune:Biscuit Delivery}} and {{rune:Magical Footwear}}) help you survive and earn gold.</p><p>Last-hit with Q as much as you can to stack AP. Let your support start fights, and follow with Dark Matter and Event Horizon. Avoid trading with marksmen in auto-attack range; they deal more damage than you early.</p>{{warn:Don't push the wave too far. Veigar has no escape and gets ganked easily.}}",
    mid: "<p>After {{item:Luden's Echo}} and {{item:Stormsurge}}, you can kill squishy targets with one combo. Group for dragons and use Teleport to join fights or come back to lane fast.</p><p>Stand behind your team, cage the enemy as they engage, and finish with Primordial Burst. Keep stacking AP by hitting champions with spells.</p>",
    late: "<p>Late game, Veigar one-shots enemy carries with Event Horizon and his full combo. Stand with your team, wait for the enemy to engage, and cage them. Build {{item:Zhonya's Hourglass}} if divers target you.</p>"
  },
  tips: [
    "Last-hit with Q to stack AP: every minion counts",
    "Let your support start fights, then follow with your spells",
    "Use Teleport to join fights across the map",
    "Save Primordial Burst for a low-health target",
    "Cage enemies when they dive you or your support",
    "Build {{item:Zhonya's Hourglass}} against assassins and divers"
  ],
  matchups: {
    hard: [
      { id: "Sivir", tip: "Her spell shield blocks your Q and ult. Bait it out first, then go in." },
      { id: "Twitch", tip: "He stealths and kites you. Keep Event Horizon for when he appears, and stay near your support." },
      { id: "Smolder", tip: "He scales well and pokes from range. Farm safely and stack until you can one-shot him." }
    ],
    easy: [
      { id: "Lucian", tip: "He dashes in for short trades; cage his landing spot and punish him." },
      { id: "Caitlyn", tip: "She outranges you early, but has no way to dodge a well-timed cage. Wait for her net, then go in." },
      { id: "Ezreal", tip: "He pokes but can't kill you. Stack AP and outscale him." }
    ]
  },
  supports: [
    { id: "Senna", why: "Her root and range set up your combo while she heals you." },
    { id: "Leona", why: "Her engage locks enemies in place for your cage and Dark Matter." },
    { id: "Alistar", why: "His knock-up sets up your full combo." }
  ]
};

RA.champPicks["Veigar:bot"] = {
  blind: { safe: false, why: "He loses to marksmen with long range or spell shields, so pick him after you see the enemy bot lane." },
  into: [
    "Short-range marksmen who dash in, like {{champ:Lucian}}",
    "Immobile marksmen without escapes, like {{champ:Caitlyn}} or {{champ:Ezreal}}",
    "Lanes where your support has crowd control",
    "Long games where your AP keeps growing"
  ],
  avoid: [
    "Marksmen with spell shields, like {{champ:Sivir}}",
    "Stealthy kiters like {{champ:Twitch}}",
    "Long-range poke lanes that keep you from farming",
    "Teams that end fast before you scale"
  ],
  teammates: [
    { id: "Senna", why: "Root plus range sets up your combo." },
    { id: "Leona", why: "Engage locks enemies in place for your cage." },
    { id: "Alistar", why: "Knock-up sets up your full combo." }
  ],
  teamNeeds: "A support with crowd control, and some frontline to protect you while you scale.",
  quiz: [
    { q: "Why does Veigar bot take Teleport?", options: ["To join fights and return to lane fast", "To heal", "It gives AP", "It's required by First Strike"], answer: 0, explain: "Teleport lets Veigar join fights across the map and come back to lane after recalling." },
    { q: "The enemy marksman is Sivir. Is Veigar bot a good pick?", enemy: ["Sivir"], options: ["No: her spell shield blocks his key spells", "Yes: he always beats marksmen", "Yes: Sivir has no range", "Only with Barrier"], answer: 0, explain: "Sivir's spell shield blocks Veigar's Q and ult, making her one of his hardest matchups." },
    { q: "How should Veigar bot spend early levels?", options: ["Last-hit with Q to stack AP", "All-in at level 1", "Roam to mid lane", "Push and dive"], answer: 0, explain: "Each minion killed with Q gives permanent AP, so farming with Q is your top priority." }
  ]
};

/* ---------- Aurora top ---------- */
RA.champRoles["Aurora:top"] = {
  difficulty: "Medium",
  damage: "Magic",
  style: "Ranged mage top laner",
  summary: "Aurora top uses her range and mobility to bully melee top laners. Her Q pokes, W makes her invisible, and E slows and hops her back, so bruisers struggle to catch her. She needs to avoid champions who out-duel her, but against slow melee champions she's very strong.",
  strengths: [
    "Ranged against melee top laners: you can poke them freely",
    "W and E give you escapes from ganks and all-ins",
    "Strong burst after {{item:Stormsurge}} and {{item:Shadowflame}}",
    "Her ultimate zone traps bruisers and gives you a way to escape"
  ],
  weaknesses: [
    "Mobile assassins like {{champ:Akali}} and {{champ:Yasuo}} beat her",
    "Fragile: a single mistake against bruisers can kill her",
    "Tanks with sustain can outlast her poke",
    "Needs items before she can kill tanks"
  ],
  abilities: {
    P: "Spirit Abjuration: exorcised spirits heal you. In top lane, this sustain lets you poke and stay healthy.",
    Q: "Twofold Hex pokes and can be recast to pull the curses back for more damage. Poke the enemy top laner when they last-hit.",
    W: "Across the Veil leaps and makes you invisible. Use it to escape ganks or all-ins, or to dodge a big ability.",
    E: "The Weirding blasts enemies and hops you back. Use it when bruisers dash onto you.",
    R: "Between Worlds creates a zone that slows enemies and lets you teleport across it. Use it to trap bruisers or to escape."
  },
  combos: [
    { name: "Poke", keys: "Q → recast Q", note: "Hit the curse and pull it back for extra damage, then walk away." },
    { name: "All-in", keys: "Q → E → R → Q recast", note: "Full burst when the enemy is low or their escape is down." },
    { name: "Escape", keys: "E → W", note: "Hop back with E, then leap and go invisible with W." }
  ],
  spikes: [
    "Level 2: Q poke plus E lets you win early trades against melee champions",
    "Level 6: Between Worlds gives you kill pressure and a strong escape",
    "First item ({{item:Stormsurge}}): your burst starts killing squishy targets",
    "Second item ({{item:Shadowflame}}): more burst against bruisers",
    "Top quest: free Unleashed Teleport and extra XP"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}}, level Q, E, W, and take {{spell:Flash}} with {{spell:Ignite}}. Poke the enemy top laner with Q whenever they walk up to last-hit, and keep E ready for their engage.</p><p>Ward your river bush; top lane is long and ganks come from the side. Use W to escape if the enemy jungler arrives.</p>{{tip:Against melee champions, poke whenever they walk up to farm. Against mobile assassins like Akali or Yasuo, play safe and farm.}}",
    mid: "<p>After {{item:Stormsurge}}, you can kill squishy enemies with your combo. Use Unleashed Teleport (from the top quest) to join fights or flank. Push side lanes with Q, and rotate to objectives with your team.</p><p>Aurora isn't a great split-pusher against bruisers once they have items, so don't stay in the side lane too long alone. A good pattern: push the wave with Q, take a turret plate if it's safe, then walk or Teleport to the next objective. Your {{rune:Electrocute}} burst is best on enemy mages and marksmen who walk into your range during skirmishes in the river.</p><p>When a bruiser dives you, don't panic and use everything at once. Hop back with E first, then decide: if they're low, turn with your ultimate zone and Q recast; if not, leap away with W and go invisible.</p>",
    late: "<p>Late game, Aurora's burst can delete carries. Stay at max range, poke with Q, and use your ultimate to trap the enemy team or escape. Build {{item:Zhonya's Hourglass}} against divers.</p><p>Your ultimate is one of your best teamfight tools: place it where the enemy frontline wants to walk, so they're slowed while your team hits them, and you can teleport across the zone to dodge their engage. Against heavy magic resist, add {{item:Void Staff}}; when you're ahead and not dying, {{item:Mejai's Soulstealer}} makes your burst even scarier.</p><p>Remember that the top quest raises your level cap to 20, so in very long games you'll have a level advantage over most of the enemy team. Use it to force fights around Baron and Elder Dragon.</p>"
  },
  tips: [
    "Poke melee top laners when they walk up to farm",
    "Keep E ready for bruisers who dash onto you",
    "Ward river; ganks come from the side",
    "Use Unleashed Teleport to flank fights",
    "Play safe against Akali and Yasuo",
    "Build {{item:Zhonya's Hourglass}} against divers"
  ],
  matchups: {
    hard: [
      { id: "Yasuo", tip: "His Wind Wall blocks your Q. Play safe, farm, and avoid his all-ins." },
      { id: "Akali", tip: "She's mobile and bursts you. Keep E and W ready, and farm safely." },
      { id: "Sion", tip: "He's tanky and can outlast your poke. Farm and outscale him." }
    ],
    easy: [
      { id: "Darius", tip: "Poke him from range and hop back with E when he walks in." },
      { id: "Volibear", tip: "He has to reach you to fight. Poke him and escape his engage." },
      { id: "Trundle", tip: "He's melee and slow. Poke him and kite back." }
    ]
  }
};

RA.champPicks["Aurora:top"] = {
  blind: { safe: false, why: "Mobile assassins beat her, so it's safer to pick her after you see the enemy top laner." },
  into: [
    "Slow melee bruisers like {{champ:Darius}} or {{champ:Volibear}}",
    "Champions without dashes, like {{champ:Trundle}}",
    "Teams without much hard crowd control"
  ],
  avoid: [
    "Mobile assassins like {{champ:Yasuo}} and {{champ:Akali}}",
    "Tanky top laners who outlast poke, like {{champ:Sion}}",
    "Teams with lots of hard crowd control"
  ],
  teammates: [
    { id: "JarvanIV", why: "His engage locks enemies in place for your burst." },
    { id: "Vi", why: "Her point-and-click ultimate sets up your combo." },
    { id: "Leona", why: "Her engage gives you easy targets." }
  ],
  teamNeeds: "A frontline and engage, so you can stay at range and burst.",
  quiz: [
    { q: "The enemy top laner is Darius. Is Aurora top a good counter-pick?", enemy: ["Darius"], options: ["Yes: she pokes from range and escapes his engage", "No: Darius always wins", "Only with Teleport", "No: she's melee"], answer: 0, explain: "Aurora's range and mobility let her poke Darius and escape when he tries to all-in." },
    { q: "What should Aurora top do against Yasuo?", enemy: ["Yasuo"], options: ["Play safe and farm", "All-in at level 1", "Ignore his Wind Wall", "Push and dive"], answer: 0, explain: "Yasuo's Wind Wall blocks Aurora's Q, making him one of her hardest matchups." },
    { q: "Which top laner is easiest for Aurora?", options: ["Trundle", "Akali", "Yasuo", "Sion"], optionChamps: true, answer: 0, explain: "Trundle is melee and slow, so Aurora can poke and kite him." }
  ]
};
