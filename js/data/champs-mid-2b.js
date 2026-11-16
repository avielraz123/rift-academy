window.RA = window.RA || {};
RA.champs = RA.champs || [];
RA.champRoles = RA.champRoles || {};
RA.champPicks = RA.champPicks || {};

RA.champs.push(

/* ------------------------------------------------------------------ FIZZ */
{
  id: "Fizz",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Slippery melee assassin",
  summary: "Fizz is a tiny melee assassin who dashes through enemies, dodges almost anything with his untargetable hop, and throws a fish that summons a shark. He's weak before level 3 and strong from level 6 on, when one good combo can delete a squishy carry. Pick him if you like outplays and big burst.",
  strengths: [
    "Playful / Trickster makes you untargetable, so you can dodge key spells and ultimates",
    "Huge burst from level 6: Chum the Waters plus a full combo kills most squishy champions",
    "Urchin Strike and Playful give him two dashes, so he can get in and out of fights",
    "Nimble Fighter lets him walk through units and take less damage from minions and basic attacks"
  ],
  weaknesses: [
    "Melee range: long-range mages can poke him before level 3",
    "If he wastes his E, he has no way to escape crowd control",
    "Point-and-click crowd control (like {{champ:Lissandra}}'s ultimate) stops him cold",
    "Falls off if he's behind: his job is killing carries, and tanks shrug him off"
  ],
  abilities: {
    P: "Nimble Fighter lets you move through units and reduces damage you take by a flat amount. That flat reduction is big early: minions and basic attacks barely hurt you, so you can trade inside the enemy wave.",
    Q: "Urchin Strike dashes through your target and applies on-hit effects, so it triggers your W. It's your gap closer: dash to the enemy, or dash through a minion to reposition. Don't use it to farm when you might need it to engage.",
    W: "Seastone Trident makes your attacks bleed passively. Activate it to empower your next attack for bonus damage and boost your next few attacks. Activate W right before Q so the dash carries the empowered hit, or reset your auto-attack with it. You max this second.",
    E: "Playful / Trickster is the best spell in Fizz's kit. You hop up and become untargetable, then either slam down where you are (bigger area, slows) or recast to jump again. Use it to dodge a skill shot, a stun or a big ultimate, not just as damage. When it's on cooldown, you're vulnerable.",
    R: "Chum the Waters throws a fish that sticks to the first champion it touches. After a short delay, a shark bursts out, knocks them up and hits nearby enemies. The farther the fish flies before landing, the bigger the shark. Throw it from long range for maximum damage, or at point-blank when you need it to land."
  },
  combos: [
    { name: "Level 3 trade", keys: "W → Q → AA → E", note: "Empower your attack, dash through them with Urchin Strike, auto, then hop out with E. If they fight back, hop over their response." },
    { name: "Full all-in", keys: "R → Q → W → AA → E", note: "Throw the fish from range so the shark is big, dash in with Q as it erupts, empowered attack, then E to finish or escape." },
    { name: "Flank burst", keys: "E (jump) → R → Q → W", note: "Hop onto them from fog with the double jump, throw the fish point-blank, then Q and W. Great for picking off a carry from behind." },
    { name: "Dodge and punish", keys: "E (dodge) → Q → W", note: "Wait for the enemy's key skill shot, dodge it with E, and punish them while it's on cooldown." }
  ],
  spikes: [
    "Level 3: W, Q and E unlocked. Your first real kill window, especially with {{spell:Ignite}}.",
    "Level 6: Chum the Waters turns trades into kills. Most squishy mids can't survive your full combo.",
    "First item ({{item:Lich Bane}}): massive burst on your empowered attacks and better roams.",
    "Two items ({{item:Shadowflame}}): you one-combo squishy carries in mid game skirmishes.",
    "Three items ({{item:Zhonya's Hourglass}}): survive diving into the backline."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions. Take E first, then W, then Q, and max E, then W, then Q. Your keystone this patch is {{rune:Electrocute}}, and you take {{spell:Flash}} with {{spell:Ignite}} for kill pressure.</p><p>Levels 1 and 2 are your weakest. Farm safely and don't let a ranged mage poke you out of lane. At level 3 you have your full combo: look for a trade when the enemy uses their main poke spell on a minion. Dash in with Q, empowered auto, and hop out with E before they can trade back.</p><p>When you hit level 6, check if the enemy laner is in kill range with {{spell:Ignite}}. Throw the fish from long range so the shark is as big as possible. If you can't kill them, push the wave and roam: Fizz is a great roamer, and a surprise shark on the bot lane can win the game.</p>",
    mid: "<p>With {{item:Lich Bane}} done, your goal is catching people out of position. Push your wave first, then walk into the river or the enemy jungle with your jungler. Fizz is excellent at turning a 2v2 skirmish because E can dodge the enemy's crowd control.</p><p>Join fights for dragons and Void Grubs, but don't start them. Wait in fog on a flank until the enemy uses their important crowd control, then hop in and burst their carry. If you run out of targets, side lanes with {{guide:side-lanes}} principles help you stay useful: Fizz can duel most mages in a side lane.</p>",
    late: "<p>Late game, your job is simple: kill the enemy's main carry. Don't walk in front of your team. Wait until fights start, then come from the side or behind, throw the fish on the ADC or mid laner and finish them with Q and W.</p><p>Keep E to dodge the most important spell, like an enemy engage or a stun. After diving, {{item:Zhonya's Hourglass}} buys time for your team to follow up. If the enemy is very tanky, don't throw yourself at the frontline: wait for the carry to be exposed.</p>"
  },
  tips: [
    "E makes you untargetable. Save it to dodge the enemy's best spell instead of using it for damage.",
    "Throw Chum the Waters from far away for a bigger shark, but only if it will actually hit.",
    "Activate W just before Q so your dash applies the empowered attack.",
    "Nimble Fighter's damage reduction makes you hard to trade with early. Fight inside minion waves.",
    "Fizz is a great roamer at level 6. Push, then look for a shark on another lane.",
    "Point-and-click crowd control can't be dodged with E. Respect champions like {{champ:Lissandra}}."
  ],
  matchups: {
    hard: [
      { id: "Diana", tip: "She has strong burst and a pull with her ultimate. Don't fight her when her shield is up, and keep E to dodge her all-in." },
      { id: "Lissandra", tip: "Her ultimate is point-and-click and can't be dodged. Play safe, farm, and only all-in when her ultimate is on cooldown." },
      { id: "Vex", tip: "Her fear punishes dashes. Don't Q in when her passive fear is ready; bait it out first, then engage." }
    ],
    easy: [
      { id: "AurelionSol", tip: "He's slow and weak early. Look for level 3 trades and punish him whenever he walks forward to farm." },
      { id: "Syndra", tip: "Hop over her stun with E. Once Scatter the Weak is on cooldown, she can't stop your all-in." },
      { id: "Xerath", tip: "He's immobile. Dodge his stun with E, then dash in. A single shark at level 6 usually kills him." }
    ]
  }
},

/* ------------------------------------------------------------------ GALIO */
{
  id: "Galio",
  roles: ["mid"],
  difficulty: "Easy",
  damage: "Magic",
  style: "Tanky mage / engage",
  summary: "Galio is a giant stone colossus who protects his team and crushes mages. He's sturdy against magic damage, has a taunt and a knock-up, and his ultimate lets him fly across the map to join a fight. He's simple to play and great for players who like making plays for their team.",
  strengths: [
    "Hero's Entrance lets him join fights anywhere on the map and shields his allies",
    "Very strong against magic damage dealers and assassins",
    "Two crowd control spells (taunt and knock-up) make him a great engage champion",
    "Tanky build means he's hard to kill and can lead fights"
  ],
  weaknesses: [
    "Low damage compared to other mages, especially late",
    "Long-range mages can poke him before he can engage",
    "Weaker against physical damage champions",
    "Needs his team to follow up on his engage"
  ],
  abilities: {
    P: "Colossal Smash makes your next basic attack every few seconds deal bonus magic damage in an area. Use it to help clear waves and add damage in trades.",
    Q: "Winds of War sends two windblasts that combine into a tornado. It's your main wave clear and poke. Aim so the tornado lands on top of enemies or the caster minions.",
    W: "Shield of Durand: hold to charge a defensive stance that reduces damage, then release to taunt and damage nearby enemies. A longer charge gives a bigger taunt area. It also gives you a passive shield against magic damage when you haven't been hit for a while. Max this second.",
    E: "Justice Punch makes you step back and charge forward, knocking up the first enemy champion hit. It's your gap closer: E into W is your main engage. It stops on the first champion, so don't try to reach a carry behind a tank.",
    R: "Hero's Entrance lets you choose an ally's location, shields all allies there, and then you land and knock up enemies. The range grows with each rank. Use it to save an ally being dived, to join a fight, or to land on top of a gank with your jungler."
  },
  combos: [
    { name: "Engage", keys: "E → W → Q", note: "Punch into them, taunt with W as you land, then Q while they're stuck." },
    { name: "Flash taunt", keys: "Flash + W", note: "Charge W, then Flash into the group and release. One of the most surprising engages in the game." },
    { name: "Hero's landing", keys: "R → W → E → Q", note: "Land with your ultimate, taunt the enemies who were knocked up, then punch and tornado." },
    { name: "Rocketbelt engage", keys: "Rocketbelt → W → E → Q", note: "With {{item:Hextech Rocketbelt}}, dash in with its active and taunt immediately." }
  ],
  spikes: [
    "Level 3: E, W and Q unlocked. You can engage on the enemy laner when your jungler arrives.",
    "Level 6: Hero's Entrance lets you help every lane. Look at the map often.",
    "First item ({{item:Hextech Rocketbelt}}): an extra dash for engages. It was nerfed in 26.20 (less ability haste), but it's still his most common first item.",
    "Two items ({{item:Imperial Mandate}}): your crowd control marks enemies for extra damage from your team.",
    "Three items ({{item:Zhonya's Hourglass}}): survive after landing in the middle of the enemy team."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions. Take Q first, then W, then E, and max Q, then W, then E. This patch Galio usually runs {{rune:Stormraider's Surge}} with {{spell:Flash}} and {{spell:Teleport}}.</p><p>Farm with Q and use your passive on the wave. Against magic damage champions, you can trade freely thanks to your W shield. Against long-range mages, stay back and farm; you don't need to win lane to be useful.</p><p>Watch for your jungler's ganks: E plus W is a strong chain of crowd control that sets up kills. When you hit level 6, look at the minimap constantly. If your bot lane or jungler is fighting, Hero's Entrance turns the fight around.</p>",
    mid: "<p>Galio's mid game is about being everywhere. Push your wave with Q, then use Hero's Entrance or {{spell:Teleport}} to join fights. Even with a long cooldown, one good ultimate can win a dragon fight.</p><p>Group with your team for objectives. Your job is to engage or protect: if the enemy has a dangerous assassin, stay near your carries and taunt the assassin when they jump in. {{guide:objectives-and-dragons}} explains how to set up for fights around Void Grubs and dragons.</p>",
    late: "<p>Late game, you're a frontline engage champion. Look for good angles to land E and W on multiple enemies, or Flash-taunt into the backline. If your team has more damage, your engage is what wins the fight.</p><p>When your team is protecting a carry, play defensively instead: stand near your ADC, and taunt or punch the enemies who dive. Hero's Entrance can also save a teammate who's caught in a side lane. Build tankier items like {{item:Kaenic Rookern}} or {{item:Thornmail}} if the enemy focuses you.</p>"
  },
  tips: [
    "Watch the minimap at level 6. Hero's Entrance is your best tool to help other lanes.",
    "Charge W, then Flash and release for a surprise multi-person taunt.",
    "Justice Punch stops on the first champion hit. Aim it at the closest target.",
    "Against magic damage, you're very tanky. Trade with assassins and mages freely.",
    "Your ultimate shields allies in the landing area, so it's also a defensive tool.",
    "Use {{spell:Teleport}} plus Hero's Entrance for two map plays when your wave is pushed."
  ],
  matchups: {
    hard: [
      { id: "Hwei", tip: "He pokes from very far away. Farm safely, don't chase into his crowd control, and look for roams after level 6 instead of fighting in lane." },
      { id: "Ahri", tip: "Her Charm cancels your engage. Use W only after she uses Charm, and roam when she pushes to look for picks." },
      { id: "Veigar", tip: "His cage can stun you when you engage. Wait for Event Horizon to be on cooldown, then E and W on him." }
    ],
    easy: [
      { id: "Sylas", tip: "His damage is magic, so your W shield helps a lot. Taunt him when he dashes in with E." },
      { id: "Akali", tip: "Her damage is mostly magic. Taunt her when she comes out of her shroud and punch her as she dashes." },
      { id: "Katarina", tip: "W taunt cancels her ultimate. Keep it ready when she jumps in." }
    ]
  }
},

/* ------------------------------------------------------------------ VLADIMIR */
{
  id: "Vladimir",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Scaling battle mage",
  summary: "Vladimir is a blood mage who spends health instead of mana and heals himself constantly. He's weak early but becomes a monster late, when he can dive into the enemy team, heal through damage and pool away from danger. Pick him if you're patient and like playing a long game.",
  strengths: [
    "Extremely strong late game: he heals constantly and deals huge area damage",
    "Sanguine Pool makes him untargetable, so he can dodge skill shots and ultimates",
    "No mana, so he never runs out of resources",
    "Hemoplague damages and heals off every champion it hits"
  ],
  weaknesses: [
    "Very weak in the first levels: many champions can bully him",
    "Short range for a mage",
    "Grievous Wounds (anti-heal) reduces his healing a lot",
    "Hard crowd control like stuns and suppression stops him"
  ],
  abilities: {
    P: "Crimson Pact converts bonus health into ability power and ability power into bonus health. Every AP item makes you tankier, and every health item makes you stronger. This is why {{item:Riftmaker}} fits him so well.",
    Q: "Transfusion steals health from a target. When your blood bar is full, Transfusion becomes empowered for a moment, dealing much more damage and healing. Use it to last-hit minions and to trade. Max it first.",
    W: "Sanguine Pool sinks you into a pool of blood: untargetable for 2 seconds, slowing and damaging enemies around you. Use it to dodge important spells, ultimates or tower shots. It costs health, so don't waste it early.",
    E: "Tides of Blood: hold to charge, then release to damage enemies around you. It costs health and can be blocked by units, so use it when enemies are near you. It's your wave clear later in the game.",
    R: "Hemoplague infects an area. Enemies inside take more damage for a few seconds, then the plague deals damage and heals you for each champion hit. Throw it on as many enemies as possible during a fight."
  },
  combos: [
    { name: "Lane trade", keys: "Q (empowered) → AA", note: "Wait for your blood bar to fill, then walk up and Q the enemy. The empowered Q heals you for a lot." },
    { name: "Teamfight", keys: "Flash → R → E → Q → W", note: "Flash into the enemy team, throw Hemoplague, charge E, Q, then pool away when they focus you." },
    { name: "All-in", keys: "R → E → Q → W", note: "Ultimate first so all your damage is amplified, then E and Q, then pool to dodge their counterattack." }
  ],
  spikes: [
    "Level 6: Hemoplague gives you your first kill threat in lane.",
    "First item ({{item:Stormsurge}}): more burst and speed to chase.",
    "Two items ({{item:Rabadon's Deathcap}}): huge damage, and your passive turns it into health.",
    "Three items ({{item:Riftmaker}}): you become very hard to kill in long fights.",
    "Level 16: your ultimate and spells are maxed. You're one of the strongest late game champions."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions. Take Q first, then E, then W, and max Q, then E, then W. This patch, Vladimir runs {{rune:Stormraider's Surge}} with {{spell:Flash}} and {{spell:Ghost}}.</p><p>The early game is about survival. Last-hit with Q to heal, and only use the empowered Q when it's ready. Don't waste Sanguine Pool on trades: it costs health and you need it to escape ganks.</p><p>Against aggressive champions, play safe under your tower and accept losing some farm. After level 6, you're much more dangerous: if the enemy laner is low, Hemoplague plus Q can kill them.</p>",
    mid: "<p>Your mid game is about farming and scaling. Vladimir gets stronger with every item and level. Push waves with E, then join fights where you can hit multiple enemies with Hemoplague.</p><p>Don't take risky fights before you have two items. Stay with your team for objectives, and keep W ready to dodge engage. If the enemy has a lot of healing, they'll build anti-heal against you; make sure you're not the only target.</p>",
    late: "<p>Late game, you're a main damage dealer. Look for good flanks where you can hit three or more enemies with Hemoplague. Flash in, ultimate, charge E, Q, and pool when the enemy turns on you.</p><p>Your healing makes you hard to kill, but anti-heal and burst can still stop you. Use {{item:Zhonya's Hourglass}} if they focus you, and {{item:Void Staff}} if they build magic resist. Ghost helps you run through the enemy team.</p>"
  },
  tips: [
    "Last-hit with Q to heal for free in lane.",
    "Use Sanguine Pool to dodge big ultimates and tower shots.",
    "Hemoplague's amplification means you should throw it before the rest of your combo.",
    "Your passive turns AP into health: every damage item also makes you tankier.",
    "E can be blocked by minions. Stand where nothing is between you and the enemy.",
    "Be patient. You're the strongest champion on your team late, so don't throw the early game."
  ],
  matchups: {
    hard: [
      { id: "Malzahar", tip: "His suppression ultimate stops you, and his passive shield blocks your poke. Pool his Q, and only fight after his ultimate is used." },
      { id: "Aurora", tip: "She can poke and escape with her hops. Farm safely early, and only commit when she's used her W." },
      { id: "Hwei", tip: "He has long range and a lot of crowd control. Play safe and look to scale; don't walk into his spells." }
    ],
    easy: [
      { id: "Yasuo", tip: "Wind Wall does little against your targeted and area damage. Trade with empowered Q and pool his knock-up." },
      { id: "Irelia", tip: "Pool when she dives you, and heal back up with Q. She can't kill you through your healing." },
      { id: "Lux", tip: "Pool her Light Binding, then run her down. She's immobile, and once her Q is down she can't stop you." }
    ]
  }
},

/* ------------------------------------------------------------------ XERATH */
{
  id: "Xerath",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Long-range artillery mage",
  summary: "Xerath is a long-range artillery mage who bombards enemies from huge distances. He has a stun, a slow and an ultimate that fires several shots from across the map. He's immobile, so positioning is everything. Pick him if you love landing skill shots and poking enemies from far away.",
  strengths: [
    "Huge range: he can poke enemies before they can touch him",
    "Strong wave clear and siege with Arcanopulse",
    "Rite of the Arcane hits enemies from extreme distance, great for finishing low targets",
    "Shocking Orb stuns for longer the farther it travels"
  ],
  weaknesses: [
    "Immobile: no dash, so assassins and divers kill him easily",
    "All his damage comes from skill shots, so missing them wastes your damage",
    "Weak if the enemy can reach him or catch him with crowd control",
    "Needs his team to protect him"
  ],
  abilities: {
    P: "Mana Surge: your basic attacks periodically restore mana, and kills lower the cooldown. Auto-attack minions often to stay in lane longer.",
    Q: "Arcanopulse: hold to charge, then release to fire a long beam. The longer you charge, the longer the range, but you move slower while charging. It's your main poke and wave clear. Max it first.",
    W: "Eye of Destruction calls down energy in an area after a short delay. Enemies in the center take more damage and get slowed more. Aim it ahead of the enemy, then follow up with Q while they're slowed.",
    E: "Shocking Orb stuns the first enemy hit, longer the farther it travels. It's your only defense against divers: hold it for when they jump on you.",
    R: "Rite of the Arcane: you plant yourself and fire several long-range barrages, more with each rank. Use it to finish low enemies, poke before a fight, or hit enemies from across the map. You can't move while it's active, so check the area first."
  },
  combos: [
    { name: "Poke combo", keys: "W → Q", note: "Land W, then charge Q while they're slowed. Your bread-and-butter poke." },
    { name: "Stun combo", keys: "E → W → Q", note: "Stun with E, then W and Q on the stunned target. Your best damage combo." },
    { name: "Execute", keys: "R (×3+)", note: "Use your ultimate to finish an enemy who's running away at low health." },
    { name: "Self-peel", keys: "E → W → walk back", note: "When an assassin dives you, stun them with E, slow them with W, and walk away." }
  ],
  spikes: [
    "Level 3: Q, W and E unlocked. You can poke the enemy hard.",
    "Level 6: Rite of the Arcane lets you finish low enemies from far away.",
    "First item ({{item:Luden's Echo}}): more burst and mana. Your poke hurts a lot.",
    "Two items ({{item:Shadowflame}}): your combo kills squishy champions.",
    "Three items ({{item:Rabadon's Deathcap}}): huge damage from very far away."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions. Take Q, W, E in that order, and max Q, then W, then E. This patch Xerath runs {{rune:Arcane Comet}} with {{spell:Flash}} and {{spell:Teleport}}.</p><p>Poke the enemy laner with W into Q. Arcane Comet adds damage to your hits, so trade often. Watch your mana: auto-attack minions to trigger Mana Surge.</p><p>Against assassins, stay behind your minions and save E for when they dive. After level 6, look for low enemies anywhere on the map: your ultimate can finish them.</p>",
    mid: "<p>Your mid game is about sieging and poking before fights. Push your wave with Q, then stay with your team. Before an objective, poke the enemies with W and Q so they're weakened when the fight starts.</p><p>Always stand behind your frontline. You have no escape, so a good position is your best defense. Use your ultimate to finish off enemies after fights or to poke before them.</p>",
    late: "<p>Late game, you're an artillery cannon. Stay far behind your team and poke enemies before fights start. Charge Q from far away and look for picks with E.</p><p>If an assassin or diver comes for you, stun them with E and walk back to your team. {{item:Zhonya's Hourglass}} helps you survive divers, and {{item:Void Staff}} cuts through magic resist. Don't use your ultimate when enemies can reach you.</p>"
  },
  tips: [
    "Charge Q from out of range, then step forward to fire.",
    "Shocking Orb stuns longer when it travels farther. Use it from max range when possible.",
    "Always save E for when an assassin dives you.",
    "Auto-attack minions to trigger Mana Surge and save mana.",
    "Check that no enemies are close before using your ultimate: you can't move while it's active.",
    "Land W first, then Q on the slowed enemy for easy hits."
  ],
  matchups: {
    hard: [
      { id: "Fizz", tip: "He can dodge your spells with his E. Save your stun until after he uses it, and stay near your tower when his ultimate is up." },
      { id: "Locke", tip: "He can close the distance quickly and burst you. Play behind minions, keep E ready, and stay near your tower." },
      { id: "Ekko", tip: "His dashes and burst make him dangerous. Save E for when he dives, and stay back when his ultimate is up." }
    ],
    easy: [
      { id: "Azir", tip: "He's not very mobile early. Poke him with W and Q, and look for stuns when he walks forward." },
      { id: "Viktor", tip: "You out-range him. Poke him with Q, and stay back from his crowd control." },
      { id: "Syndra", tip: "You have more range. Poke her with Q, and stay out of her stun range." }
    ]
  }
}
);

/* ======================================================================== OTHER ROLES */

RA.champRoles["Galio:support"] = {
  difficulty: "Easy",
  damage: "Magic",
  style: "Tank engage / peel support",
  summary: "Galio is a strong engage support. With his taunt, knock-up and global ultimate, he can start fights, protect his ADC from divers, and join other lanes' fights from anywhere on the map. Easy to learn and great for players who like protecting their team.",
  strengths: [
    "Two crowd control spells (taunt and knock-up) make engages easy",
    "Hero's Entrance lets him help allies anywhere on the map",
    "Very tanky against magic damage dealers",
    "Strong peel for his ADC against divers and assassins"
  ],
  weaknesses: [
    "Long-range supports can poke him out of lane",
    "Not much healing or shielding for his ADC",
    "His engage can be stopped by enemy crowd control",
    "Weaker against physical damage champions"
  ],
  abilities: {
    P: "Colossal Smash: every few seconds your next basic attack deals area damage. Use it to poke the enemy support in lane, but avoid hitting minions too much: you don't want to take your ADC's gold.",
    Q: "Winds of War sends two windblasts that combine into a tornado. Use it to poke and to add damage after an engage, but don't push the wave by accident.",
    W: "Shield of Durand: hold to charge, then release to taunt nearby enemies. It's your main engage and peel tool. The passive magic shield makes you tanky against mages. Max this first as a support.",
    E: "Justice Punch knocks up the first enemy champion hit. Use it to engage on the enemy ADC, or to peel a diver off your ADC.",
    R: "Hero's Entrance: choose an ally's position, shield allies there, and land to knock up enemies. As support, use it to save your ADC, join your jungler's ganks, or help your mid laner."
  },
  combos: [
    { name: "Engage", keys: "E → W → Q", note: "Punch into the enemy ADC or support, taunt as you land, then Q." },
    { name: "Peel", keys: "W (taunt) → E", note: "When a diver jumps on your ADC, taunt them and punch them away." },
    { name: "Flash taunt", keys: "Flash + W", note: "Charge W, Flash into both enemies and release for a surprise 2v2 engage." },
    { name: "Gank landing", keys: "R → W → E", note: "Land on your jungler's gank, taunt and punch." }
  ],
  spikes: [
    "Level 2: E and W unlocked. Look for an engage before the enemy bot lane hits level 2.",
    "Level 6: Hero's Entrance lets you help any lane.",
    "Support item upgrade ({{item:Celestial Opposition}}): free through the support quest, more tankiness and engage power.",
    "First item ({{item:Locket of the Iron Solari}}): shields your team in fights.",
    "Second item ({{item:Imperial Mandate}}): your crowd control marks enemies for extra damage."
  ],
  phases: {
    early: "<p>Start {{item:World Atlas}} with two potions. Max W first, then E, then Q. This patch Galio support runs {{rune:Aftershock}} with {{spell:Flash}} and {{spell:Heal}}.</p><p>Play around level 2: E plus W can kill or force a summoner spell from the enemy bot lane. Use Colossal Smash and Q to poke the enemy support, but don't take your ADC's last hits.</p><p>Your support item upgrades for free through the support role quest, first into Bounty of Worlds and then into your final item, {{item:Celestial Opposition}}. The quest also gives you cheaper control wards: buy them and keep the river warded.</p>",
    mid: "<p>After level 6, Galio becomes one of the best roaming supports. When your ADC is safe (under tower or recalling), look for plays in the mid lane or with your jungler. Hero's Entrance can join fights from far away.</p><p>Ward the river and the dragon pit with your control wards. Group with your team for objectives, and play as the frontline. {{guide:vision-control}} has more on setting up vision before objectives.</p>",
    late: "<p>Late game, you're either the engage or the peel. If your team has more damage, look for good angles to land E and W on multiple enemies. If your ADC is the win condition, stay next to them and taunt any diver who comes close.</p><p>Build {{item:Thornmail}} against physical damage and healing, or {{item:Knight's Vow}} to protect your ADC. Hero's Entrance can save a teammate in trouble anywhere on the map.</p>"
  },
  tips: [
    "Level 2 E plus W is a strong all-in. Look for it before the enemy hits level 2.",
    "Don't take your ADC's last hits with Q or Colossal Smash.",
    "Hero's Entrance can join your jungler's ganks: check the minimap often.",
    "Taunt divers who jump on your ADC. Peel is as important as engage.",
    "Use your quest's cheap control wards: keep the river and dragon pit warded.",
    "Against poke supports, stay behind minions and wait for your engage window."
  ],
  matchups: {
    hard: [
      { id: "Braum", tip: "His shield blocks your engage. Wait until he uses Unbreakable, then E and W." },
      { id: "Senna", tip: "She pokes from long range. Stay behind minions, and engage when she walks forward." },
      { id: "Nami", tip: "Her bubble can stop your engage. Wait until she uses it, then all-in." }
    ],
    easy: [
      { id: "Yuumi", tip: "She can't protect her ADC from your engage. All-in when she's attached to the ADC." },
      { id: "Karma", tip: "She's squishy. Engage on her and taunt her when she pokes." },
      { id: "Blitzcrank", tip: "When he hooks you, taunt him and his ADC. Your W punishes his engage." }
    ]
  },
  supports: [
    { id: "Xayah", why: "Her root combos with your taunt, and she can follow up on your engage." },
    { id: "MissFortune", why: "Your knock-up sets up her Bullet Time for huge damage." },
    { id: "Tristana", why: "She can jump in after your engage and finish enemies." }
  ]
};

RA.champRoles["Vladimir:top"] = {
  difficulty: "Medium",
  damage: "Magic",
  style: "Scaling battle mage (top)",
  summary: "Vladimir in top lane is a patient scaling pick. He farms safely with Transfusion, heals off his opponent, and becomes a teamfight monster later. The top lane role quest gives him a free Unleashed Teleport and extra experience, which fits him perfectly.",
  strengths: [
    "Heals constantly with Transfusion, so he survives long lanes",
    "Ranged poke against melee top laners",
    "Becomes a teamfight monster late",
    "The top quest's free Teleport lets him take Ghost for teamfights"
  ],
  weaknesses: [
    "Weak early against strong duelists",
    "Grievous Wounds reduces his healing",
    "Needs to farm to scale; falling behind hurts a lot",
    "Hard crowd control stops him"
  ],
  abilities: {
    P: "Crimson Pact converts AP into health and health into AP. In top lane, it makes you tanky enough to trade with melee champions.",
    Q: "Transfusion is your main trade and sustain tool. In top lane, last-hit with it to heal and wait for the empowered Q to trade.",
    W: "Sanguine Pool lets you dodge ganks and burst. Save it for when the enemy jungler arrives or your opponent all-ins.",
    E: "Tides of Blood: release when melee champions are close. It's your wave clear and teamfight damage.",
    R: "Hemoplague damages and heals you. In lane, it helps you win all-ins after level 6; in teamfights, it hits multiple enemies."
  },
  combos: [
    { name: "Lane trade", keys: "Q (empowered) → AA", note: "Wait for empowered Q, then trade with your opponent." },
    { name: "All-in", keys: "R → E → Q → W", note: "Ultimate first, then E and Q, then pool to dodge the counter." },
    { name: "Teamfight", keys: "Ghost → R → E → Q → W", note: "Run into the enemy team with Ghost, throw Hemoplague, then pool." }
  ],
  spikes: [
    "Level 6: Hemoplague lets you win all-ins against many top laners.",
    "First item ({{item:Stormsurge}}): more burst and speed.",
    "Two items ({{item:Rabadon's Deathcap}}): huge damage and health.",
    "Three items ({{item:Shadowflame}}): you can kill squishy carries in teamfights.",
    "Level 18 and beyond: the top quest raises your level cap to 20, which makes Vladimir even stronger."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions. Max Q, then E, then W. This patch, Vladimir top runs {{rune:Stormraider's Surge}} with {{spell:Flash}} and {{spell:Ghost}}. You don't need Teleport because the top role quest gives you Unleashed Teleport for free.</p><p>Against melee champions, poke with Q and heal back. Against strong duelists, play safe and farm. Use {{guide:wave-management}}: freezing near your tower keeps you safe from ganks.</p><p>Save Sanguine Pool for ganks and all-ins. After level 6, you can win all-ins with Hemoplague and pool.</p>",
    mid: "<p>After a couple of items, Vladimir becomes much stronger. Push your wave, then use your free Unleashed Teleport to join fights on the other side of the map. A Teleport flank into a dragon fight, followed by a big Hemoplague, can win the game for your team.</p><p>Don't take risky fights before you have two items. In side lanes, Vladimir can duel many champions with his healing, and Tides of Blood clears waves quickly. Read {{guide:side-lanes}} for more on split pushing.</p><p>Watch the enemy's item builds. If two or more enemies buy anti-heal, you'll heal much less, so play more carefully and lean on Sanguine Pool and {{item:Zhonya's Hourglass}} to survive instead of trying to out-heal everything.</p>",
    late: "<p>Late game, you're a main damage dealer. Look for good flanks where you can hit multiple enemies with Hemoplague. Ghost into the enemy team, ultimate, E and Q, then pool.</p><p>The top quest raises your level cap to 20, so keep farming: every level makes you stronger. Build {{item:Zhonya's Hourglass}} if they focus you, and {{item:Void Staff}} against magic resist.</p>"
  },
  tips: [
    "The top quest gives you a free Unleashed Teleport. Take Ghost instead.",
    "Freeze the wave near your tower when you're weak.",
    "Save Sanguine Pool for ganks and all-ins.",
    "Last-hit with Q to heal for free.",
    "Use Unleashed Teleport to join teamfights and objectives.",
    "The top quest raises your level cap to 20: keep farming late."
  ],
  matchups: {
    hard: [
      { id: "Nasus", tip: "His Wither slows you a lot. Trade early before he gets stacks, and pool when he uses Wither on you." },
      { id: "Ambessa", tip: "She's a strong duelist. Play safe early, farm, and look to scale past her." },
      { id: "Irelia", tip: "She dives you with dashes. Pool her all-in and play safe until level 6." }
    ],
    easy: [
      { id: "Jax", tip: "Counter Strike blocks attacks, but your damage comes from spells. Pool his stun and trade with Q." },
      { id: "Jayce", tip: "His poke is strong early, but you heal through it. Scale past him." },
      { id: "Yasuo", tip: "Wind Wall does little against your targeted and area damage. Pool his knock-up and trade with Q." }
    ]
  }
};

RA.champRoles["Xerath:support"] = {
  difficulty: "Medium",
  damage: "Magic",
  style: "Long-range poke support",
  summary: "Xerath support pokes the enemy bot lane from very far away. His long range, stun and slow let him win trades and set up kills, and his ultimate can finish enemies across the map. Pick him if you love landing skill shots and want to play an aggressive support.",
  strengths: [
    "Huge range: pokes the enemy bot lane before they can touch him",
    "Stun and slow set up kills for his ADC",
    "Rite of the Arcane can finish enemies from across the map",
    "Strong damage for a support"
  ],
  weaknesses: [
    "Immobile: engage supports can catch him easily",
    "Doesn't protect his ADC much",
    "All his damage comes from skill shots",
    "Weak if the enemy can reach him"
  ],
  abilities: {
    P: "Mana Surge: your basic attacks restore mana. As support, auto the enemy champions instead of minions so you don't take your ADC's gold.",
    Q: "Arcanopulse: charge and release to poke the enemy bot lane. Aim at both enemies when they stand in a line.",
    W: "Eye of Destruction: slow and poke the enemy. Land it first, then follow with Q.",
    E: "Shocking Orb: stun an enemy to set up kills for your ADC, or stop engage supports when they dive you.",
    R: "Rite of the Arcane: finish enemies from far away, or poke before objectives. Check that no enemies are close first."
  },
  combos: [
    { name: "Poke", keys: "W → Q", note: "Slow with W, then poke with Q." },
    { name: "Stun combo", keys: "E → W → Q", note: "Stun, slow and poke the enemy so your ADC can follow up." },
    { name: "Peel", keys: "E → W", note: "Stun and slow an engage support who dives you or your ADC." }
  ],
  spikes: [
    "Level 2: W and Q unlocked. Poke the enemy bot lane hard.",
    "Level 3: E unlocked. You can set up kills with the stun.",
    "Level 6: Rite of the Arcane lets you finish enemies from far away.",
    "Support item upgrade ({{item:Zaz'Zak's Realmspike}}): free through the support quest, extra poke damage.",
    "First item ({{item:Luden's Echo}}): your poke hurts a lot."
  ],
  phases: {
    early: "<p>Start {{item:World Atlas}} with two potions. Take W first, then Q, then E, and max Q, then W, then E. This patch Xerath support runs {{rune:Arcane Comet}} with {{spell:Flash}} and {{spell:Heal}}.</p><p>Poke the enemy bot lane with W and Q. Don't take your ADC's last hits: your support item gives you gold as you poke. The support role quest upgrades your item for free, first into Bounty of Worlds and then into {{item:Zaz'Zak's Realmspike}}, and gives you cheaper control wards.</p><p>Against engage supports, stay behind minions and save E for when they dive.</p>",
    mid: "<p>After level 6, use your ultimate to finish low enemies anywhere. When your jungler or mid laner chases someone, Rite of the Arcane can land the last hit from far away. Ward the river and the dragon pit with your control wards.</p><p>Group with your team for objectives, and poke the enemies before the fight. A few good Q hits before a dragon fight mean the enemy starts the fight already hurt, and often has to back off. Stay behind your frontline: you have no escape. {{guide:vision-control}} explains how to set up vision before objectives.</p><p>When your ADC recalls, don't stay alone in bot lane. Walk with your jungler or to mid, where your long range can help clear waves and siege towers.</p>",
    late: "<p>Late game, you're a poke threat. Stay far behind your team and poke enemies before fights. Use E to stop divers and protect your ADC.</p><p>Build {{item:Zhonya's Hourglass}} if they focus you, and {{item:Morellonomicon}} against healing.</p>"
  },
  tips: [
    "Don't take your ADC's last hits. Poke the enemy champions instead.",
    "Use your quest's cheap control wards to keep the river warded.",
    "Save E for engage supports who dive you.",
    "Poke the enemy bot lane with W into Q.",
    "Use your ultimate to finish low enemies anywhere on the map.",
    "Stay behind your frontline in teamfights."
  ],
  matchups: {
    hard: [
      { id: "Nami", tip: "Her bubble and heals help her ADC trade back. Poke her when she uses her bubble." },
      { id: "Sona", tip: "She heals her ADC and pokes back. Use your range to poke her when she walks forward." },
      { id: "Rell", tip: "She can engage on you quickly. Stay behind minions and save E for when she dives." }
    ],
    easy: [
      { id: "Lux", tip: "You out-range her. Poke her with Q, and dodge her Light Binding." },
      { id: "Swain", tip: "He's slow. Poke him with W and Q, and stay out of his grab range." },
      { id: "Seraphine", tip: "You out-range her. Poke her when she walks forward." }
    ]
  },
  supports: [
    { id: "Xayah", why: "Her root combos with your stun for easy follow-up." },
    { id: "Jhin", why: "His long range and root pair well with your poke." },
    { id: "Ashe", why: "Her slows and arrow set up your skill shots." }
  ]
};

/* ======================================================================== WHEN TO PICK */

RA.champPicks.Fizz = {
  blind: { safe: false, why: "Not ideal. Long-range mages and point-and-click crowd control punish him, so it's better to pick him after seeing the enemy mid." },
  into: [
    "Immobile mages who rely on skill shots, like {{champ:Xerath}} and {{champ:Syndra}}",
    "Squishy carries he can one-combo, like {{champ:Jinx}} and {{champ:Caitlyn}}",
    "Teams with skill shot crowd control he can dodge with E",
    "Teams without much tankiness to slow him down"
  ],
  avoid: [
    "Point-and-click crowd control, like {{champ:Lissandra}} and {{champ:Malzahar}}",
    "Champions who punish dashes, like {{champ:Vex}}",
    "Tanky teams where he can't reach the carries",
    "Strong early bullies who can poke him before level 3"
  ],
  teammates: [
    { id: "JarvanIV", why: "His engage locks enemies in place for your shark." },
    { id: "Amumu", why: "His ultimate stuns the enemy team so you can burst the carry." },
    { id: "Leona", why: "Her stuns set up easy all-ins for you after level 6." }
  ],
  teamNeeds: "Pick Fizz when your team has a frontline and engage, so you can focus on diving the enemy carries.",
  quiz: [
    {
      q: "The enemy mid is Xerath. Is Fizz a good pick?",
      enemy: ["Xerath"],
      options: ["Yes, Fizz can dodge his skill shots with E and dash onto him", "No, Xerath out-ranges Fizz too much", "Only if Fizz builds tank items", "Only with Teleport"],
      answer: 0,
      explain: "Xerath is immobile and relies on skill shots, which Fizz can dodge with E before dashing in."
    },
    {
      q: "Which enemy mid is hardest for Fizz?",
      options: ["Lissandra", "Xerath", "Syndra", "Aurelion Sol"],
      answer: 0,
      explain: "Lissandra's point-and-click ultimate stops Fizz completely, and he can't dodge it with E."
    },
    {
      q: "What does Fizz's team need for him to succeed?",
      options: ["A frontline and engage", "Another assassin", "Lots of poke", "Only ADCs"],
      answer: 0,
      explain: "A frontline and engage let Fizz focus on diving the enemy carries."
    }
  ]
};

RA.champPicks.Galio = {
  blind: { safe: true, why: "Yes. He's tanky against magic damage and useful in almost every game thanks to his ultimate and crowd control." },
  into: [
    "Magic damage assassins, like {{champ:Akali}} and {{champ:Katarina}}",
    "Teams with lots of magic damage",
    "Teams with divers who jump on your carries",
    "Games where map plays matter, thanks to Hero's Entrance"
  ],
  avoid: [
    "Long-range poke mages, like {{champ:Hwei}} and {{champ:Xerath}}",
    "Teams with mostly physical damage",
    "Teams that cancel your engage with crowd control",
    "Teams without follow-up damage"
  ],
  teammates: [
    { id: "Nocturne", why: "His ultimate and your Hero's Entrance make deadly global combos." },
    { id: "TwistedFate", why: "His ultimate plus yours lets two champions join any fight." },
    { id: "MissFortune", why: "Your crowd control sets up her Bullet Time." }
  ],
  teamNeeds: "Pick Galio when your team needs a frontline and engage, and has enough damage to follow up.",
  quiz: [
    {
      q: "The enemy team has Akali, Katarina and Sylas. Which mid pick helps most?",
      enemy: ["Akali", "Katarina", "Sylas"],
      options: ["Galio", "Xerath", "Lux", "Veigar"],
      optionChamps: true,
      answer: 0,
      explain: "Galio is very tanky against magic damage and can taunt assassins when they dive."
    },
    {
      q: "Which enemy mid is hardest for Galio?",
      options: ["Hwei", "Katarina", "Akali", "Sylas"],
      answer: 0,
      explain: "Hwei pokes from very far away, so Galio can't reach him in lane."
    },
    {
      q: "Why is Galio a safe blind pick?",
      options: ["He's tanky against magic damage and useful in every game", "He has the most damage", "He has the longest range", "He doesn't need items"],
      answer: 0,
      explain: "His tankiness, crowd control and ultimate make him useful almost every game."
    }
  ]
};

RA.champPicks.Vladimir = {
  blind: { safe: false, why: "Not ideal. He's weak early, and champions with strong early pressure or crowd control can bully him." },
  into: [
    "Melee champions who can't poke him, like {{champ:Yasuo}} and {{champ:Irelia}}",
    "Immobile mages he can run down, like {{champ:Lux}}",
    "Teams that group up, where Hemoplague hits multiple targets",
    "Long games where he can scale"
  ],
  avoid: [
    "Suppression and hard crowd control, like {{champ:Malzahar}}",
    "Teams with lots of anti-heal",
    "Strong early lane bullies",
    "Fast games where he doesn't have time to scale"
  ],
  teammates: [
    { id: "Amumu", why: "His ultimate groups enemies for your Hemoplague." },
    { id: "JarvanIV", why: "His ultimate traps enemies so you can hit them all." },
    { id: "Orianna", why: "Her ultimate pulls enemies together for your ultimate." }
  ],
  teamNeeds: "Pick Vladimir when your team can survive the early game and protect him while he scales.",
  quiz: [
    {
      q: "The enemy mid is Malzahar. Is Vladimir a good pick?",
      enemy: ["Malzahar"],
      options: ["No, Malzahar's suppression stops Vladimir", "Yes, Vladimir heals through everything", "Only if Vladimir builds tank items", "Only with Teleport"],
      answer: 0,
      explain: "Malzahar's suppression ultimate stops Vladimir completely, and his passive blocks poke."
    },
    {
      q: "What item should the enemy team build against Vladimir?",
      options: ["Anti-heal (Grievous Wounds)", "Armor", "Attack speed", "Mana"],
      answer: 0,
      explain: "Anti-heal reduces Vladimir's healing a lot."
    },
    {
      q: "When is Vladimir strongest?",
      options: ["Late game", "Level 1", "Level 3", "Early game"],
      answer: 0,
      explain: "Vladimir scales with items and levels, and is one of the strongest late game champions."
    }
  ]
};

RA.champPicks.Xerath = {
  blind: { safe: false, why: "Not ideal. He's immobile, so assassins and divers can kill him easily. Better to pick him after seeing the enemy mid." },
  into: [
    "Immobile mages he can out-range, like {{champ:Viktor}} and {{champ:Syndra}}",
    "Teams without much engage or dive",
    "Teams with slow, tanky champions he can poke",
    "Siege games where poke matters"
  ],
  avoid: [
    "Assassins who can dodge or reach him, like {{champ:Fizz}} and {{champ:Ekko}}",
    "Teams with lots of engage",
    "Champions who can dive past his frontline",
    "Teams with lots of healing"
  ],
  teammates: [
    { id: "Malphite", why: "His ultimate locks enemies in place for your combo." },
    { id: "Sejuani", why: "Her crowd control makes your skill shots easy to land." },
    { id: "Ornn", why: "He protects you and sets up your combo with his ultimate." }
  ],
  teamNeeds: "Pick Xerath when your team has a strong frontline to protect him.",
  quiz: [
    {
      q: "The enemy team has Fizz, Ekko and Zed. Is Xerath a good pick?",
      enemy: ["Fizz", "Ekko", "Zed"],
      options: ["No, he's immobile and these assassins can reach him", "Yes, he out-ranges them", "Only with tank items", "Only with Ghost"],
      answer: 0,
      explain: "Xerath has no escape, so mobile assassins can reach and kill him easily."
    },
    {
      q: "Which enemy mid is easiest for Xerath?",
      options: ["Viktor", "Fizz", "Ekko", "Locke"],
      answer: 0,
      explain: "Xerath out-ranges Viktor and can poke him safely."
    },
    {
      q: "What does Xerath's team need?",
      options: ["A strong frontline to protect him", "Another long-range mage", "No tanks", "Only assassins"],
      answer: 0,
      explain: "A frontline protects Xerath from divers so he can poke safely."
    }
  ]
};

RA.champPicks["Galio:support"] = {
  blind: { safe: true, why: "Yes. His crowd control and tankiness make him useful in most bot lanes." },
  into: [
    "Squishy supports, like {{champ:Yuumi}} and {{champ:Karma}}",
    "Engage supports like {{champ:Blitzcrank}}, whom he can punish with his taunt",
    "Teams with magic damage",
    "Teams with divers who jump on your ADC"
  ],
  avoid: [
    "Poke supports with long range, like {{champ:Senna}}",
    "Supports who block his engage, like {{champ:Braum}}",
    "Supports with strong disengage, like {{champ:Nami}}",
    "Teams with mostly physical damage"
  ],
  teammates: [
    { id: "Xayah", why: "Her root combos with your taunt." },
    { id: "MissFortune", why: "Your crowd control sets up her Bullet Time." },
    { id: "Tristana", why: "She jumps in after your engage." }
  ],
  teamNeeds: "Pick Galio support when your ADC can follow up on engage and your team needs a frontline.",
  quiz: [
    {
      q: "The enemy support is Braum. Is Galio a good pick?",
      enemy: ["Braum"],
      options: ["No, Braum's shield blocks Galio's engage", "Yes, Galio beats Braum easily", "Only if Galio builds damage", "Only with Ignite"],
      answer: 0,
      explain: "Braum's Unbreakable blocks Galio's engage."
    },
    {
      q: "Which ADC pairs well with Galio support?",
      options: ["Miss Fortune", "Kog'Maw", "Vayne", "Twitch"],
      answer: 0,
      explain: "Galio's crowd control sets up Miss Fortune's Bullet Time for huge damage."
    },
    {
      q: "When should Galio support look for an engage?",
      options: ["At level 2, before the enemy hits level 2", "Only after level 6", "Only late game", "Never"],
      answer: 0,
      explain: "E plus W at level 2 is a strong all-in before the enemy can respond."
    }
  ]
};

RA.champPicks["Vladimir:top"] = {
  blind: { safe: false, why: "Not ideal. Strong duelists like {{champ:Nasus}} and {{champ:Irelia}} can make his lane hard." },
  into: [
    "Melee champions who can't poke him, like {{champ:Jax}} and {{champ:Yasuo}}",
    "Poke champions he can heal through, like {{champ:Jayce}}",
    "Teams that group up for his Hemoplague",
    "Long games where he can scale"
  ],
  avoid: [
    "Strong duelists, like {{champ:Nasus}} and {{champ:Irelia}}",
    "Teams with lots of anti-heal",
    "Hard crowd control",
    "Fast games"
  ],
  teammates: [
    { id: "Amumu", why: "His ultimate groups enemies for your Hemoplague." },
    { id: "JarvanIV", why: "His ultimate traps enemies so you can hit them all." },
    { id: "Orianna", why: "Her ultimate pulls enemies together for your ultimate." }
  ],
  teamNeeds: "Pick Vladimir top when your team can play for the late game.",
  quiz: [
    {
      q: "Why does Vladimir top take Ghost instead of Teleport?",
      options: ["The top quest gives a free Unleashed Teleport", "Teleport doesn't work on Vladimir", "Ghost heals him", "Ghost gives him AP"],
      answer: 0,
      explain: "The top role quest gives a free Unleashed Teleport, so Vladimir can take Ghost for teamfights."
    },
    {
      q: "The enemy top laner is Nasus. Is Vladimir a good pick?",
      enemy: ["Nasus"],
      options: ["No, Nasus is a hard matchup", "Yes, Vladimir beats Nasus easily", "Only with tank items", "Only with Ignite"],
      answer: 0,
      explain: "Nasus is a hard matchup: his Wither slows Vladimir, and he scales too."
    },
    {
      q: "What does the top quest's level cap of 20 mean for Vladimir?",
      options: ["He gets even stronger late", "Nothing", "He gets weaker", "He can't farm"],
      answer: 0,
      explain: "Extra levels make Vladimir even stronger in the late game."
    }
  ]
};

RA.champPicks["Xerath:support"] = {
  blind: { safe: false, why: "Not ideal. Engage supports like {{champ:Rell}} can catch him easily." },
  into: [
    "Immobile supports he can out-range, like {{champ:Lux}} and {{champ:Seraphine}}",
    "Slow supports, like {{champ:Swain}}",
    "Teams without much engage",
    "Siege games where poke matters"
  ],
  avoid: [
    "Engage supports, like {{champ:Rell}}",
    "Healing supports, like {{champ:Nami}} and {{champ:Sona}}",
    "Teams with lots of dive",
    "Teams with lots of healing"
  ],
  teammates: [
    { id: "Xayah", why: "Her root combos with your stun." },
    { id: "Jhin", why: "His long range pairs well with your poke." },
    { id: "Ashe", why: "Her slows set up your skill shots." }
  ],
  teamNeeds: "Pick Xerath support when your team has a frontline and your ADC can follow up on poke.",
  quiz: [
    {
      q: "The enemy support is Rell. Is Xerath a good pick?",
      enemy: ["Rell"],
      options: ["No, Rell can engage on him quickly", "Yes, Xerath out-ranges her", "Only with tank items", "Only with Ghost"],
      answer: 0,
      explain: "Rell can engage on Xerath quickly, and he has no escape."
    },
    {
      q: "Which ADC pairs well with Xerath support?",
      options: ["Jhin", "Vayne", "Kog'Maw", "Twitch"],
      answer: 0,
      explain: "Jhin's long range and root pair well with Xerath's poke."
    },
    {
      q: "What does the support quest give Xerath?",
      options: ["A free support item upgrade and cheaper control wards", "Extra AP", "A free Teleport", "Extra mana"],
      answer: 0,
      explain: "The support quest upgrades his support item for free and gives him cheaper control wards."
    }
  ]
};
