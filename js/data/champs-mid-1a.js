window.RA = window.RA || {};
RA.champs = RA.champs || [];
RA.champRoles = RA.champRoles || {};
RA.champPicks = RA.champPicks || {};

RA.champs.push(

/* ------------------------------------------------------------------ AKALI */
{
  id: "Akali",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Stealth assassin",
  summary: "Akali is a slippery assassin who hides in her smoke, flips in and out of fights and finishes enemies with a two-part ultimate. She rewards fast hands and good timing, and she's one of the most satisfying champions in the game once you learn her energy and her smoke. She's played in mid and top lane.",
  strengths: [
    "Twilight Shroud makes her invisible and untargetable, which wrecks champions who rely on clicking her",
    "Two dashes on her ultimate plus Shuriken Flip give her huge mobility in fights",
    "Perfect Execution's second dash executes low-health targets",
    "Uses energy instead of mana, so she never runs out over a long lane"
  ],
  weaknesses: [
    "Point-and-click crowd control (stuns, roots, charms) ruins her all-in",
    "Weak before level 6 against ranged mages who out-trade her",
    "Energy runs out fast if you spam Q",
    "Falls off if she can't find kills, especially against tanky teams"
  ],
  abilities: {
    P: "Assassin's Mark: after your spell damage hits a champion, a ring appears around them. Step out of the ring and your next attack gets extra range and damage. In trades, hit Q, walk out of the ring, then turn back for the empowered auto.",
    Q: "Five Point Strike is a cone of kunai with a slow at the tip. It's your main damage and wave clear, but it costs a lot of energy. In lane, use it to last-hit the minion you'd miss and to poke when the enemy walks up, but don't spam it on the wave or you'll have no energy to trade.",
    W: "Twilight Shroud drops a smoke cloud: inside it you're invisible and can't be targeted, and you get a burst of speed. Attacking or casting reveals you for a moment. It also gives you energy back, so it's both a defensive tool and an energy refill in long fights. Drop it to dodge targeted spells and tower shots, and to reset a fight.",
    E: "Shuriken Flip: you flip backward and throw a shuriken forward; the first enemy (or your own smoke cloud) is marked. Recast to dash to the mark. Throw it from max range, hit the enemy, then decide if it's safe to dash in. Tagging your own smoke lets you reposition without going in.",
    R: "Perfect Execution: the first cast leaps you forward, damaging enemies you pass. The second cast (available a moment later) is another dash that executes enemies based on missing health. Use the first cast to get in or to dodge, and save the second to finish a kill or escape."
  },
  combos: [
    { name: "Short trade", keys: "Q → step out of ring → AA", note: "Q, walk out of the passive ring and hit the empowered auto. Your basic poke in lane." },
    { name: "Level 6 all-in", keys: "E → E (recast) → Q → R → AA → Q → R", note: "Land Flip, dash in, Q, first R through them, auto, Q again, then second R to execute once they're low." },
    { name: "Smoke dance", keys: "W → Q → AA → Q", note: "Drop smoke in a long fight to refill energy and dodge, then keep hitting Q from inside it." },
    { name: "Flip into smoke", keys: "W → E (tag smoke) → E", note: "Escape or reposition: drop smoke, throw Flip into your own cloud, then dash back to it." }
  ],
  spikes: [
    "Level 2-3: Q + Flip lets you trade into most melee lanes.",
    "Level 6: Perfect Execution turns you into a real kill threat. Most of your kills start here.",
    "First item ({{item:Hextech Gunblade}}): more damage and healing, plus a slowing active that helps you stick to targets.",
    "Two items ({{item:Shadowflame}}): you can one-combo squishy mages and marksmen.",
    "Third item ({{item:Zhonya's Hourglass}}): survive the counterattack after you dive."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions and take {{spell:Flash}} + {{spell:Ignite}} with {{rune:Electrocute}}. Level Q first, take W at level 2 and E at level 3, then max Q, then E, then W.</p><p>Before 6 you're in a farming phase against most mages. Use Q to secure minions and to poke when the enemy walks into range, but keep enough energy to Flip away. Against melee mids you can trade more: Q, walk out of the passive ring, empowered auto, then back off.</p>{{tip:Twilight Shroud also refills energy. In a long trade, dropping smoke and continuing to Q lets you keep fighting when the enemy thinks you're empty.}}<p>Watch the enemy jungler. Akali is slippery, but before 6 she's still easy to gank if you've used Flip and smoke on poke. After 6, check if the enemy has {{spell:Flash}} and their key crowd control: if both are down and they're below about 60% health, go in.</p>",
    mid: "<p>Once {{item:Hextech Gunblade}} is done, push the wave and {{guide:roaming}}. Side lanes are your playground: Akali loves catching someone farming alone, and her smoke makes it hard for them to fight back.</p><p>Join fights around dragon and Void Grubs from the flank. Don't walk in first. Wait for the enemy's crowd control to come out, then Flip or R into the backline.</p>{{warn:Don't use both Perfect Execution casts to get in. The second dash is your execute and your escape. Spending it early is how Akali dies.}}",
    late: "<p>Late game you're a backline assassin. Your job is to kill the enemy carry, then get out. Play in fog near your team, wait for the fight to start, then go in on whoever is exposed. {{item:Zhonya's Hourglass}} lets you survive the burst after your combo.</p><p>Against a team full of tanks and point-and-click crowd control, don't force dives. Split push a side lane with {{guide:side-lanes}} in mind, and use your mobility to escape when they send people. Four enemies chasing one Akali is a win for your team elsewhere on the map.</p>"
  },
  tips: [
    "Throw Shuriken Flip from max range so you can choose whether to follow up.",
    "Smoke dodges targeted spells, but not area spells: don't sit in it against {{champ:Lissandra}}'s ultimate or a big AoE.",
    "Count your energy before you go in. A Q at half energy can leave you stranded.",
    "Save the second R for the execute: it deals more damage the lower your target is.",
    "Use your smoke to break tower aggro when you dive.",
    "Track the enemy's point-and-click stuns. When they're down, Akali wins almost every fight."
  ],
  matchups: {
    hard: [
      { id: "TwistedFate", tip: "His gold card stuns you through your mobility. Farm safely, dodge Wild Cards, and look to trade only after he's used the gold card." },
      { id: "Vex", tip: "Her fear punishes every dash. Wait for her passive to be used before you Flip or R in, and expect her to outtrade you before 6." },
      { id: "Lissandra", tip: "Her ultimate and root stop your all-in cold. Poke with Q, don't commit while Frozen Tomb is up, and look for side-lane kills instead." }
    ],
    easy: [
      { id: "Locke", tip: "A newer, melee-range champion: you have more range with Q. Poke him when he walks up and use smoke to dodge his engage." },
      { id: "Irelia", tip: "Out-trade her with Q at range and drop smoke when she dashes in. Don't fight her in the middle of a big wave where she resets." },
      { id: "Viktor", tip: "He's immobile and relies on his stun field. Walk out of Gravity Field, then all-in after 6 when he's used it." }
    ]
  }
},

/* ------------------------------------------------------------------ ZED */
{
  id: "Zed",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Physical",
  style: "Shadow assassin",
  summary: "Zed is the classic assassin: he uses shadows to throw shurikens from two or three places at once, then marks a target with his ultimate and deletes them. He's a skill-shot and timing champion who punishes squishy carries. Zed is played mostly in mid, and sometimes in the jungle.",
  strengths: [
    "Living Shadow lets him poke from safe angles and swap to escape",
    "Death Mark makes him untargetable and lets him burst one target from range",
    "Huge damage against squishy mages and marksmen",
    "Uses energy, so he can poke all lane without running out of mana"
  ],
  weaknesses: [
    "Weak against tanks and champions who build armor early",
    "Point-and-click crowd control and {{item:Zhonya's Hourglass}} ruin his ultimate",
    "Hard to master: missing shadow Qs means losing lane",
    "Falls off if he can't snowball"
  ],
  abilities: {
    P: "Contempt for the Weak: your basic attacks deal bonus magic damage to low-health targets, once every few seconds per champion. Weave an auto into your combo when the enemy drops low.",
    Q: "Razor Shuriken: you and every shadow throw a shuriken. Each one damages every enemy it passes through. Place your shadow so both shurikens overlap on the enemy for double damage. It's also your last-hitting tool for minions you'd miss.",
    W: "Living Shadow: passive gives energy when you and a shadow hit an enemy with the same ability. Active sends a shadow forward; recast to swap places with it. It's your poke angle, your gap closer and your escape, so it's your most important cooldown. Don't use it for poke if the enemy jungler might be near.",
    E: "Shadow Slash: you and your shadows slash around yourselves. Hits from a shadow slow the enemy. Use it after W to slow them, and to clear minions quickly.",
    R: "Death Mark: you become untargetable, dash to an enemy champion and mark them. After 3 seconds the mark deals a portion of all the damage you did meanwhile. A shadow is left where you started, so you can swap back to escape. Dump your whole combo during the mark."
  },
  combos: [
    { name: "Shadow poke", keys: "W → E → Q", note: "Send the shadow toward the enemy, slow with E, then line up Q from both bodies. Your main poke in lane." },
    { name: "Full burst", keys: "R → W → E → Q → AA → Ignite", note: "Mark the target, drop a shadow behind them, slash and throw. Everything you deal is copied by the mark." },
    { name: "Mark and swap out", keys: "R → E → Q → AA → R (recast)", note: "Do your damage, then swap back to the shadow you left behind before they can hit you." },
    { name: "Long-range engage", keys: "W → W (swap) → R", note: "Swap to your shadow to reach a target that's out of R range." }
  ],
  spikes: [
    "Level 3: W + E + Q poke wins trades against squishy mids.",
    "Level 6: Death Mark makes almost any squishy enemy a kill target.",
    "First item ({{item:Voltaic Cyclosword}}): fast energy-cheap burst; you can start roaming.",
    "Two items ({{item:Bastionbreaker}}): more lethality and damage to structures (nerfed in 26.21, but still core).",
    "Three items ({{item:Lord Dominik's Regards}}): cut through armor late game."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Blade}} and a potion with {{spell:Flash}} + {{spell:Ignite}}. This patch Zed runs {{rune:First Strike}}: open trades with the first hit to get the bonus damage and extra gold. Level Q first, W at level 2, E at 3, then max Q, then E, then W.</p><p>Poke with W → E → Q when the enemy steps up to last-hit, then walk back. Your shadow's cooldown is your safety: if W is down, you're easy to gank. Last-hit minions you would miss with Q.</p>{{tip:You get energy back when you and your shadow hit the same enemy with the same ability. Landing double Qs keeps you topped up.}}<p>At level 6, look for an all-in when the enemy is below about 70% and doesn't have {{spell:Flash}}. Ignite during the mark makes it much harder for them to survive.</p>",
    mid: "<p>After {{item:Voltaic Cyclosword}}, Zed wants to {{guide:roaming}}: push the wave with E and Q, then walk to a side lane where a squishy enemy is pushed up. Your R and shadow make it easy to get in and out.</p><p>Push side lanes too. Zed takes towers well, and {{item:Bastionbreaker}} adds damage to structures. Keep track of the enemy jungler before you walk into fog.</p>{{warn:Don't Death Mark a tank or a full-health bruiser. Zed's whole game is killing the squishy carry; diving the wrong target just loses you the fight.}}",
    late: "<p>Late game, your job is killing one important target and surviving. Stay in fog near the fight. When the enemy ADC or mage is exposed, Death Mark them and dump everything. Swap back to your R shadow to escape.</p><p>If the enemy builds {{item:Zhonya's Hourglass}} or armor, look for picks before fights instead of diving into five people. Split pushing is a strong option: Zed's shadows make him hard to catch in a side lane.</p>"
  },
  tips: [
    "Watch for the enemy's {{item:Zhonya's Hourglass}}: if they stasis during your mark, swap back out and wait.",
    "Place your W behind the enemy so swapping cuts off their escape.",
    "Death Mark dodges almost any ability; use it to dodge a big ultimate if you have to.",
    "Don't poke with W if the enemy jungler is missing; it's your only escape.",
    "Overlap shurikens from you and your shadow for double damage.",
    "Against tanky teams, build {{item:Serylda's Grudge}} or {{item:Lord Dominik's Regards}} sooner."
  ],
  matchups: {
    hard: [
      { id: "Malphite", tip: "His armor and point-and-click slow make your poke useless. Farm with Q, avoid trades, and look to roam to squishy lanes." },
      { id: "Katarina", tip: "She outplays your shadows with her resets. Trade before her daggers land and hold your shadow until she Shunpos." },
      { id: "Diana", tip: "Her shield blocks your poke and she wins all-ins. Poke her when her shield is down and don't fight inside her moonlight." }
    ],
    easy: [
      { id: "Galio", tip: "He's slow before 6. Poke him with shadow Qs and roam when he tries to use his ultimate elsewhere." },
      { id: "Orianna", tip: "She's immobile and squishy. Dodge her ball and all-in at 6 when her shield is on someone else." },
      { id: "Cassiopeia", tip: "Avoid her stun by facing away or swapping. Once it's down, she can't escape your mark." }
    ]
  }
},

/* ------------------------------------------------------------------ VIKTOR */
{
  id: "Viktor",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Control mage / artillery",
  summary: "Viktor is a long-range control mage who upgrades his own abilities as he gets kills. He zones with Gravity Field, burns waves and enemies with Hextech Ray, and controls fights with Arcane Storm. He's a scaling, teamfight champion played in mid and sometimes in bot lane.",
  strengths: [
    "Hextech Ray hits a long line, great for wave clear and poke",
    "Glorious Evolution upgrades his abilities as he gets kills, so he grows stronger through the game",
    "Gravity Field and Arcane Storm control huge areas in teamfights",
    "Siphon Power gives a shield, which helps him trade"
  ],
  weaknesses: [
    "Immobile: no dash or blink, so he's easy to dive",
    "Assassins who reach him before his stun field ruin him",
    "Weak early compared to strong lane bullies",
    "Needs good positioning to survive teamfights"
  ],
  abilities: {
    P: "Glorious Evolution: you collect Hex Fragments from kills. Every 100 lets you augment one of your basic abilities, and after all three you can augment your ultimate. Augment E first for the explosion on your Ray, then Q for the bigger shield and move speed, then W.",
    Q: "Siphon Power blasts one target, gives you a shield and empowers your next basic attack. Q + auto is your short trade: hit them, take the shield, auto and step back. Its augment gives a bigger shield and move speed after casting.",
    W: "Gravity Field creates a zone that slows enemies, and stuns them if they stay too long. Use it to stop a diver: drop it at your own feet when an assassin jumps on you. In fights, put it on chokepoints.",
    E: "Hextech Ray draws a line of damage. It's your wave clear and your poke. Aim it so it hits the enemy laner and the caster minions together. With the augment, an explosion follows the ray for extra damage. This is the skill you max first.",
    R: "Arcane Storm deals damage when cast, interrupts channels, then keeps damaging enemies near it. You can redirect it. Use it on top of a grouped enemy team or to stop a channel like Teleport. The augment makes the storm faster and lets it grow when champions die in it."
  },
  combos: [
    { name: "Lane trade", keys: "Q → AA → E", note: "Siphon them, auto with the empowered attack, then Hextech Ray as they back off." },
    { name: "Stun into burst", keys: "W → E → Q → AA → R", note: "Drop Gravity Field on their path, Ray them while slowed, then follow with Q, auto and Storm once they're stunned." },
    { name: "Anti-dive", keys: "W (on yourself) → Q → E", note: "When an assassin jumps on you, drop the field at your feet so they get stunned, then shield up and burst them." },
    { name: "Teamfight opener", keys: "R → W → E", note: "Storm the grouped enemy team, field the chokepoint, then Ray down the line." }
  ],
  spikes: [
    "First augment (E): your Ray explodes, doubling up your wave clear and poke.",
    "Level 6: Arcane Storm adds huge damage to every all-in.",
    "First item ({{item:Blackfire Torch}}): burn damage and haste; your poke becomes dangerous.",
    "Two items ({{item:Lich Bane}}): Q + auto hits hard; you can kill squishies in one rotation.",
    "Fully augmented: Viktor at three augments plus ultimate is a late-game monster."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions with {{spell:Flash}} + {{spell:Teleport}}. This patch Viktor runs {{rune:Deathfire Touch}}. Level Q, then E twice, and max E, then Q, then W.</p><p>Use Hextech Ray to last-hit and to push the wave so it also hits the enemy laner. Use Q + auto for short trades when the enemy walks up; the shield makes these trades favorable. Your first 100 Hex Fragments come from kills (minions count), so farm well: your first augment is a big jump.</p>{{tip:Keep Gravity Field for defense in lane. If the enemy jungler or an assassin jumps on you, drop it at your feet and they'll be stunned.}}<p>Don't overextend. Viktor has no dash, so a gank with crowd control is almost always a kill.</p>",
    mid: "<p>With {{item:Blackfire Torch}}, shove waves fast with E and help with objectives. Teleport lets you join a side-lane fight or defend a tower.</p><p>Position behind your frontline. Use E to poke enemies before a fight starts, and hold W to stop divers. Viktor is strongest in fights where the enemy has to walk through his zones, like around dragon or in the river.</p>{{warn:Don't face-check bushes. With no escape, Viktor dies to one well-timed engage. Let your support or jungler check fog first.}}",
    late: "<p>Late game, Viktor is a teamfight controller. Keep track of the enemy's assassins and divers, and stay behind your tanks. Open fights with Arcane Storm on grouped enemies, then use Gravity Field on whoever dives your carries.</p><p>{{item:Zhonya's Hourglass}} is key: use it when you're dived, so your team has time to collapse. Keep pushing side waves with E between fights so your team keeps map pressure.</p>"
  },
  tips: [
    "Augment E first: the explosion makes your wave clear and poke much stronger.",
    "Q's empowered auto counts for {{item:Lich Bane}}, so weave autos after Q.",
    "Use Arcane Storm to interrupt channels like Teleport or a recall.",
    "Drop Gravity Field where the enemy will walk, not where they are.",
    "Hextech Ray can hit enemies from the side: angle it to hit both the laner and the wave.",
    "Play near your team. Viktor is strong in groups, weak alone."
  ],
  matchups: {
    hard: [
      { id: "Xerath", tip: "He out-ranges you. Farm with E from safe angles and dodge his stun; look for an all-in when he's used it." },
      { id: "Ekko", tip: "He dives you through your field. Hold W for when he jumps in, and ping when he roams." },
      { id: "Talon", tip: "He roams and jumps over walls to reach you. Push the wave and stay near your tower when he's missing." }
    ],
    easy: [
      { id: "Yasuo", tip: "Hextech Ray goes over his Wind Wall if you angle it. Gravity Field punishes his dashes into you." },
      { id: "Lissandra", tip: "You out-scale and out-poke her. Shove waves and avoid her root and ultimate engage." },
      { id: "Mel", tip: "Mel was reworked in 26.22; play the matchup carefully, farm with E and respect her poke until you know her new kit." }
    ]
  }
},

/* ------------------------------------------------------------------ YONE */
{
  id: "Yone",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Mixed",
  style: "Skirmisher / assassin",
  summary: "Yone is a blade-dancing skirmisher who leaves his body to fight as a spirit, then snaps back and repeats the damage. He stacks knock-ups with Mortal Steel and dives teams with Fate Sealed. He's played in mid and top lane, and he scales into a hyper-carry with critical strike items.",
  strengths: [
    "Soul Unbound lets him go in and snap back to safety",
    "Fate Sealed pulls multiple enemies together for huge teamfights",
    "Mixed damage (physical and magic) makes him hard to itemize against",
    "No mana: he can trade and farm as long as he wants"
  ],
  weaknesses: [
    "Weak early against ranged bullies",
    "Point-and-click crowd control and fear stop his engage",
    "Needs critical strike items to scale",
    "Easy to punish if he wastes Soul Unbound"
  ],
  abilities: {
    P: "Way of the Hunter: every second attack deals magic damage, and your crit chance is increased. That mixed damage makes it hard for enemies to build armor or magic resist alone.",
    Q: "Mortal Steel thrusts forward. Hitting gives a stack; at 2 stacks the next Q dashes you forward and knocks up enemies. Use the stacked Q to start trades or to escape over walls. It's also how you last-hit at range.",
    W: "Spirit Cleave swings a cone and gives you a shield, bigger if you hit champions. Its cooldown gets shorter with attack speed. Use it to shield damage in trades.",
    E: "Soul Unbound: your spirit leaves your body and moves faster. When it ends, you snap back to your body and repeat part of the damage you dealt as a spirit. Use it to all-in safely and return to where you started.",
    R: "Fate Sealed: blink behind the last champion hit in a line, pulling all enemies hit toward you. In teamfights, aim it through as many enemies as possible to set up your team."
  },
  combos: [
    { name: "Trade", keys: "Q → AA → W", note: "Stack Q, auto, then shield with W as they hit back." },
    { name: "Q3 engage", keys: "Q3 (knock-up) → AA → W → AA", note: "Knock them up with the stacked Q and follow with autos." },
    { name: "Soul all-in", keys: "E → Q3 → R → W → Q → AA → E (snap back)", note: "Go in as a spirit, knock up, R, deal damage, then snap back to safety." },
    { name: "Flash R", keys: "R + Flash", note: "Flash during the R to reach more enemies in teamfights." }
  ],
  spikes: [
    "Level 2-3: Q stacks + W shield let you trade with melee mids.",
    "Level 6: Fate Sealed makes your all-in deadly.",
    "First item ({{item:Immortal Shieldbow}}): crit and a lifeline shield; you can trade aggressively.",
    "Two items ({{item:Infinity Edge}}): your crits hit hard; you start carrying.",
    "Three items ({{item:Death's Dance}}): you survive dives and long fights."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and two potions with {{spell:Flash}} + {{spell:Exhaust}}, and {{rune:Lethal Tempo}}. Level Q, W, E, then max Q, then E, then W.</p><p>Farm with Q and trade when the enemy walks up: Q → auto → W. Save the stacked Q for a trade or an escape, not for minions. Against ranged mages, just farm safely before 6: they out-trade you early.</p>{{tip:Soul Unbound returns you to your body. Leave your body somewhere safe before an all-in, so snapping back takes you out of danger.}}<p>At 6 you can all-in. Wait for the enemy's key escape or crowd control, then go in with E, stacked Q and R.</p>",
    mid: "<p>After {{item:Immortal Shieldbow}}, look to skirmish around objectives. Yone is great at fighting in the river and jungle, where his R can hit several enemies.</p><p>Push side lanes and split push when you're ahead. Fights where the enemy is grouped tightly are where Fate Sealed shines.</p>{{warn:Don't R into five enemies alone. Wait until your team is close enough to follow up on your pull.}}",
    late: "<p>Late game, Yone is a carry. Look for flank angles, wait for the enemy to use their crowd control on your frontline, then go in with E, R and autos. Snap back with E when your health is low.</p><p>Against heavy crowd control or fear (for example {{champ:Vex}}), hold back and engage after their key spells are down. {{item:Death's Dance}} and {{item:Guardian Angel}} help you survive.</p>"
  },
  tips: [
    "Stacked Q goes over walls: use it to escape ganks.",
    "W's cooldown gets shorter with attack speed, so you shield more often late game.",
    "Snap back with E before you die: it's a free escape if your body is safe.",
    "Fate Sealed pulls enemies together; aim it through the middle of a group.",
    "Use {{spell:Exhaust}} on assassins who dive you, or on the carry you're killing.",
    "Don't use Q3 on minions if a trade is coming."
  ],
  matchups: {
    hard: [
      { id: "Vex", tip: "Her fear stops your engage. Wait for her passive to be used, and don't dash into her when she's empowered." },
      { id: "Katarina", tip: "She out-skirmishes you. Trade early with Q and W, and be ready to snap back when she resets." },
      { id: "Vladimir", tip: "He heals through trades. Push him in early and use Exhaust in all-ins." }
    ],
    easy: [
      { id: "AurelionSol", tip: "He's slow early and scales. Trade with stacked Q and pressure his farm." },
      { id: "Yasuo", tip: "Out-range him with Q and trade with W shield. Win the early mirror-style fights." },
      { id: "Ryze", tip: "He's immobile. Dodge his root and all-in at 6." }
    ]
  }
}

);

/* ================================================================== OTHER ROLES */

RA.champRoles["Akali:top"] = {
  difficulty: "Hard",
  damage: "Magic",
  style: "Stealth assassin (top lane)",
  summary: "In top lane, Akali uses her mobility and smoke to out-trade bruisers who can't catch her, then roams or split pushes. She's a counter-pick top laner who punishes immobile champions without strong crowd control. Unlike most top laners, she takes Ignite instead of Teleport.",
  strengths: [
    "Mobility and smoke let her out-trade bruisers who rely on getting in melee range",
    "Strong at split pushing and escaping when the enemy sends people",
    "Ignite plus Electrocute gives big kill pressure in lane",
    "Energy means no mana problems in long lanes"
  ],
  weaknesses: [
    "Tanky top laners shrug off her burst",
    "Champions with strong point-and-click crowd control beat her",
    "No Teleport early, so she can't join bot-side fights as easily",
    "Falls behind if she loses the early trades"
  ],
  abilities: {
    P: "Assassin's Mark: after your spells hit, step out of the ring to empower your next attack. In top lane, use it in short trades against melee champions.",
    Q: "Five Point Strike: your main trade and wave-clear tool. Use it to poke melee champions who can't reach you, but save enough energy to escape.",
    W: "Twilight Shroud: drop it when the enemy commits to an all-in to dodge their attacks, and to refill energy.",
    E: "Shuriken Flip: tag the enemy from range, then decide whether to dash in. Use it to escape ganks too.",
    R: "Perfect Execution: same as mid. Use the first cast to get in and the second to finish or escape."
  },
  combos: [
    { name: "Short trade", keys: "Q → step out of ring → AA", note: "Poke melee top laners when they walk up to last-hit." },
    { name: "Level 6 all-in", keys: "E → E (recast) → Q → R → AA → Q → R", note: "Flip in, Q, first R, auto, Q, then second R to execute." },
    { name: "Smoke dodge", keys: "W → Q → AA", note: "Drop smoke as the enemy commits, then keep hitting Q." }
  ],
  spikes: [
    "Level 2-3: Q + Flip trades well with melee bruisers.",
    "Level 6: Perfect Execution gives kill pressure.",
    "First item ({{item:Hextech Gunblade}}): healing and burst; you can 1v1 most bruisers.",
    "Role quest: once you complete it, you get Unleashed Teleport even though you took Ignite."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions with {{spell:Flash}} + {{spell:Ignite}} and {{rune:Electrocute}}. Level Q, W, E, then max Q, then E.</p><p>Top lane is a 1v1 island. Use Q to poke melee champions when they walk up, and walk out of the passive ring for the empowered auto. Keep energy for Flip so you can escape. With Ignite, look for kills at level 3 and 6.</p>{{tip:The top role quest gives you Unleashed Teleport later in the game, even though you took Ignite. That's why Akali top can skip Teleport.}}<p>Manage your wave with {{guide:wave-management}} in mind: freeze near your tower when you're ahead, so the enemy has to walk up into your Q range.</p>",
    mid: "<p>After {{item:Hextech Gunblade}}, you have two good options. Split push top when the enemy top laner is weaker than you in a 1v1, or crash the wave and roam to mid when their mid laner is pushed up. Akali's smoke and dashes make her hard to catch when the enemy jungler comes.</p><p>Join fights for Rift Herald and Void Grubs on your side of the map: Akali is strong in the cramped pit where enemies can't spread out. For dragon fights on the far side, it's often better to push your lane hard and force the enemy to send someone to you.</p>{{warn:Don't fight tanky top laners after they've built armor and health. Your burst falls off against them; use it on squishy carries instead.}}",
    late: "<p>Late game, split push and look for picks. Once the top role quest is done, you have Unleashed Teleport to join fights from a side lane. In teamfights, flank from fog and dive the backline once the enemy's crowd control has been used on someone else.</p><p>Against tanky teams, side lanes are your best place to be. Draw two or three enemies to you, then escape with smoke and R while your team takes an objective. Read {{guide:side-lanes}} for how to time it.</p>"
  },
  tips: [
    "Akali top takes Ignite, not Teleport; the role quest gives you Unleashed Teleport later.",
    "Poke melee top laners with Q before they can reach you.",
    "Freeze the wave near your tower when you're ahead.",
    "Use smoke to break tower aggro when you dive.",
    "Don't trade with tanky top laners for long: burst and leave."
  ],
  matchups: {
    hard: [
      { id: "Sion", tip: "He's tanky and his crowd control stops your dives. Farm safely and look for roams." },
      { id: "Gangplank", tip: "He out-pokes you with his barrels. Dodge barrels and all-in when he's out of position." },
      { id: "Urgot", tip: "His ultimate and fear punish your all-in. Short-trade with Q and back off." }
    ],
    easy: [
      { id: "Rumble", tip: "Use smoke to dodge his flamethrower and out-trade him with Q." },
      { id: "Gwen", tip: "Trade before she gets her mist. Don't fight inside her mist." },
      { id: "Gnar", tip: "Trade when he's small and avoid Mega Gnar." }
    ]
  }
};

RA.champRoles["Zed:jungle"] = {
  difficulty: "Hard",
  damage: "Physical",
  style: "Ganking assassin (jungle)",
  summary: "Jungle Zed trades lane farm for camps and uses his shadows to gank from angles laners don't expect. He's a high-risk, high-reward pick that lives on early ganks and snowballing a squishy lane. It's a lot weaker than mid Zed this patch (a C-tier pick), so only play it if you already know Zed well.",
  strengths: [
    "Strong level 3 ganks: shadow, slow and double shuriken from fog",
    "Death Mark lets him dive squishy laners under tower after 6",
    "Shadows let him hit camps twice, so his clear is decent",
    "Hard to catch when invading, thanks to Living Shadow swaps"
  ],
  weaknesses: [
    "Loses early duels against strong jungle fighters",
    "Falls off fast if his first ganks fail",
    "Weaker at taking and contesting objectives than tank or fighter junglers",
    "One of the lower win rates for Zed this patch; mid is the safer role"
  ],
  abilities: {
    P: "Contempt for the Weak: your attacks deal bonus magic damage to low-health targets. It helps finish monsters and gives your ganks extra kill pressure on a fleeing laner.",
    Q: "Razor Shuriken: your main clear and gank damage. Place your shadow so its shuriken also passes through the camp or the laner for double damage.",
    W: "Living Shadow: in camps it doubles your Q and E hits; in ganks, send it from the side or behind the laner so swapping cuts off their escape. Its passive gives energy when you and the shadow hit the same target, which keeps your clear going.",
    E: "Shadow Slash: hits everything around you and your shadows. Shadow hits slow, which is how you stick to a laner during a gank.",
    R: "Death Mark: after 6, dive a squishy laner who's low, or mark the carry in a skirmish. Swap back to your starting shadow to escape tower aggro."
  },
  combos: [
    { name: "Fast camp clear", keys: "W → E → Q → AA", note: "Shadow on the camp so both Qs and Es hit everything." },
    { name: "Level 3 gank", keys: "W (behind) → E → Q → AA → W (swap)", note: "Come from fog, send the shadow behind the laner, slow and throw. Swap to block their path." },
    { name: "Tower dive", keys: "R → E → Q → AA → R (recast)", note: "Mark a low laner under tower, deal your damage, then swap back out before the tower kills you." }
  ],
  spikes: [
    "Level 3: your first gank with W, E and Q is strong against squishy lanes.",
    "Level 6: Death Mark turns half-health laners into kills, even under tower.",
    "First item ({{item:Voltaic Cyclosword}}): faster clears and much more burst.",
    "Two items ({{item:Bastionbreaker}}): more lethality and damage to objectives (nerfed in 26.21 but still core)."
  ],
  phases: {
    early: "<p>Start {{item:Scorchclaw Pup}} and a potion with {{spell:Flash}} + {{spell:Smite}}. This patch Zed jungle runs {{rune:First Strike}}. Level Q, E, W, then max Q, then E, then W. Camps spawn at 0:55, so you have time to walk to your start.</p><p>Use your shadow on every camp: you and the shadow both hit with Q and E, which speeds up your clear and refunds energy. A common plan is to clear three camps toward the lane you want to gank, then gank at level 3. Pick lanes whose laners have crowd control to chain with your slow, such as {{champ:Lissandra}} mid, {{champ:Renekton}} top or a {{champ:Leona}} bot lane.</p>{{tip:The jungle role quest gives you Primal Smite, extra gold and XP per large camp, and bonus move speed in the jungle and river. Clearing efficiently between ganks gets you there sooner.}}<p>Track the enemy jungler with {{guide:jungle-tracking}}. Zed loses most early 1v1s against fighters, so don't contest their side of the map unless your laners can follow you.</p>",
    mid: "<p>With {{item:Voltaic Cyclosword}}, look for dives on squishy laners who are pushed up. Death Mark plus your shadow swap lets you get in and out of tower range.</p><p>Objectives still matter: set up vision before dragon, Void Grubs and Rift Herald and stay close enough to Smite. Zed doesn't take objectives fast, so do it when the enemy jungler is shown on the other side of the map.</p>{{warn:Don't fight tanky junglers like {{champ:Shyvana}} head-on over an objective. Kill their squishy carries in the fight instead.}}",
    late: "<p>Late game, play like mid Zed: hunt picks in fog, mark the enemy carry and swap out. Keep Smite for Baron and dragons and be near them when they spawn.</p><p>If you're behind, play with your team and look for flanks. A Zed who's lost his early ganks can't 1v5, but he can still catch a carry who walks alone.</p>"
  },
  tips: [
    "Gank lanes with crowd control: your slow plus their stun is a kill.",
    "Shadow every camp for double hits and energy refunds.",
    "Track the enemy jungler and avoid early duels against fighters.",
    "Save Smite for objectives and contested buffs.",
    "After 6, dive low laners with Death Mark and swap back out.",
    "If your ganks don't land early, switch to playing for picks with your team."
  ],
  matchups: {
    hard: [
      { id: "Shyvana", tip: "She clears faster and out-duels you later. Gank early and avoid 1v1s on her side." },
      { id: "MasterYi", tip: "He out-duels you after a few items. Snowball lanes early so your team can punish him." },
      { id: "Elise", tip: "Her early ganks are stronger. Track her and counter-gank the lane she goes to." }
    ],
    easy: [
      { id: "Taliyah", tip: "She's squishy and immobile up close. Invade her jungle once your laners can help." },
      { id: "Qiyana", tip: "Win skirmishes by poking with shadow Qs before she engages." },
      { id: "Pantheon", tip: "He's strong early but falls off. Survive his early ganks and out-scale him." }
    ]
  },
  supports: null
};

RA.champRoles["Viktor:bot"] = {
  difficulty: "Medium",
  damage: "Magic",
  style: "Control mage (bot lane)",
  summary: "Bot lane Viktor is a mage in the marksman's spot. He pokes both enemies with Hextech Ray, zones the wave, and turns the support's engage into stuns with Gravity Field. It's one of his best roles this patch (S- on lolalytics). He takes Teleport instead of Heal or Barrier and scales into a teamfight monster.",
  strengths: [
    "Hextech Ray hits both enemy laners and the wave in one line",
    "Gravity Field stops all-ins from engage supports and divers",
    "Huge teamfight damage with Arcane Storm around dragon",
    "Teleport lets him go back to shop and return without losing a wave"
  ],
  weaknesses: [
    "Immobile, so hard-engage supports can lock him down",
    "No Heal or Barrier: a well-timed all-in can kill him",
    "Long-range lanes like {{champ:KogMaw}} or {{champ:Hwei}} out-range him later",
    "Can't take towers as quickly as a marksman early"
  ],
  abilities: {
    P: "Glorious Evolution: you get Hex Fragments from kills, so last-hitting matters as much as for a marksman. Augment E first for the explosion on your Ray, then Q, then W.",
    Q: "Siphon Power: point-and-click damage plus a shield and an empowered auto. Use Q → auto to trade with the enemy marksman when they step up to last-hit; the shield soaks their return damage.",
    W: "Gravity Field: your anti-engage tool. Hold it when the enemy support is a hard engager like {{champ:Leona}} or {{champ:Nautilus}}, and drop it on yourself or your support when they dive. Offensively, drop it on a target your support has locked down.",
    E: "Hextech Ray: draw it through the enemy marksman, the support and the wave at the same time. It's your main poke and your wave clear, and you max it first.",
    R: "Arcane Storm: deals damage when it lands, interrupts channels, and keeps damaging. In a 2v2 all-in, cast it on the target your support catches. In fights, drop it on the grouped team around dragon."
  },
  combos: [
    { name: "Double poke", keys: "E", note: "Angle Hextech Ray through both enemies and the caster minions." },
    { name: "Short trade", keys: "Q → AA → E", note: "Siphon the marksman, auto, then Ray as they walk away." },
    { name: "Punish an engage", keys: "W → Q → AA → E → R", note: "When the enemy support jumps in, drop the field, shield with Q and burst with Ray and Storm." },
    { name: "Follow your support", keys: "E → W → R", note: "When your support hooks or stuns, Ray, field and Storm on the same target." }
  ],
  spikes: [
    "Level 2: Q + E lets you trade with most marksmen when your support plays forward.",
    "First augment (E): your Ray explodes, and your wave clear becomes much faster.",
    "Level 6: Arcane Storm makes your 2v2 all-ins deadly.",
    "First item ({{item:Blackfire Torch}}): poke and burn damage; you can push and pressure towers.",
    "Two items ({{item:Lich Bane}}): Q + auto bursts squishy marksmen."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions with {{spell:Flash}} + {{spell:Teleport}} and {{rune:Deathfire Touch}}. Level Q, then E twice, and max E, then Q, then W. Bot lane is a 2v2, so talk with your support: poke when they're in a good spot, and play safe when they're roaming or warding.</p><p>Hit both enemies with E whenever you last-hit. Use Q → auto for short trades. Don't stand in brush range of a hard-engage support without W ready. Last-hit everything you can: Viktor needs kills on minions for Hex Fragments, and the bot role quest rewards farm with extra gold.</p>{{tip:The bot role quest gives you +300 gold, +2 gold per minion and moves your boots to the quest slot, so you get a free item slot later. Farming well gets you there faster.}}<p>Use Teleport after your first recall to get back to lane quickly, or to join a fight at top or a Rift Herald.</p>",
    mid: "<p>After {{item:Blackfire Torch}}, shove waves with E and group with your team for dragons. Viktor is great in river fights, where the enemy has to walk through your field.</p><p>Poke the enemy team before an objective with E, and hold W for the divers. Let your support and jungler lead the vision.</p>{{warn:Don't face-check bushes. With no Heal, Barrier or dash, one hook or engage on you can end the fight before it starts.}}",
    late: "<p>Late game you play like a teamfight mage. Stay behind your frontline, Storm the grouped enemy team, and field the chokepoints. Use {{item:Zhonya's Hourglass}} when you're dived to buy time for your team.</p><p>Between fights, push side waves with E. Your wave clear lets your team keep map pressure without anyone walking into fog.</p>"
  },
  tips: [
    "Take Teleport: most bot Viktors do, and it lets you skip slow walks back to lane.",
    "Draw Hextech Ray through both enemies and the wave whenever you can.",
    "Hold Gravity Field for the enemy support's engage.",
    "Last-hit for Hex Fragments; augment E first.",
    "Pick lanes with engage or poke supports like {{champ:Leona}}, {{champ:Nami}} or {{champ:Blitzcrank}}.",
    "Interrupt channels (recalls, Teleports) with Arcane Storm."
  ],
  matchups: {
    hard: [
      { id: "Swain", tip: "He drains through your poke and wins long fights. Poke from max range and don't stand in his ultimate." },
      { id: "Hwei", tip: "He out-ranges you with his spells. Dodge his skill shots and look for all-ins when his crowd control is down." },
      { id: "KogMaw", tip: "He out-ranges you later. Push and trade early before his items come online." }
    ],
    easy: [
      { id: "Ezreal", tip: "He can't out-trade your Ray and shield early. Poke him and push him under tower." },
      { id: "Samira", tip: "Gravity Field stops her dashes. Hold it for when she goes in." },
      { id: "Yunara", tip: "A newer champion: farm safely, poke with Ray and learn her timings before you all-in." }
    ]
  },
  supports: [
    { id: "Leona", why: "Her engage locks enemies in place so your Gravity Field stuns them." },
    { id: "Nami", why: "Her bubble and heals let you poke and trade more." },
    { id: "Blitzcrank", why: "His hooks pull enemies into your field and Ray." }
  ]
};

RA.champRoles["Yone:top"] = {
  difficulty: "Hard",
  damage: "Mixed",
  style: "Skirmisher (top lane)",
  summary: "Top lane is where Yone is played most: about half of his games. He farms and trades on the 1v1 island, builds {{item:Blade of The Ruined King}} first to win duels against tanky top laners, then becomes a split-pushing, teamfighting carry. He's an A-tier top pick this patch.",
  strengths: [
    "{{item:Blade of The Ruined King}} first makes him strong in long 1v1 trades",
    "Stacked Q and Soul Unbound give him escape tools against ganks",
    "Great split pusher who can also join fights with Unleashed Teleport from the role quest",
    "Fate Sealed starts teamfights by pulling several enemies together"
  ],
  weaknesses: [
    "Early-game bullies like {{champ:Riven}} and {{champ:Darius}} out-trade him",
    "Needs items before he can fight evenly",
    "Point-and-click crowd control stops his engage",
    "Easy to punish when he uses Soul Unbound badly"
  ],
  abilities: {
    P: "Way of the Hunter: every second attack deals magic damage, so tanks who stack armor still take damage. Your crit chance is increased, so crit items scale you quickly.",
    Q: "Mortal Steel: your main trade, farm and escape tool. Stack it on minions before a trade, then use the stacked Q to knock up the enemy laner. Stacked Q also dashes over thin walls if you need to escape a gank.",
    W: "Spirit Cleave: shields you, more if you hit champions. Use it as the enemy hits back in a trade. Attack speed lowers its cooldown, so you'll shield more often after {{item:Blade of The Ruined King}}.",
    E: "Soul Unbound: go in as a spirit, deal damage, then snap back to your body and repeat part of the damage. In top lane, leave your body near your tower before an all-in so snapping back is safe.",
    R: "Fate Sealed: blink behind the last champion hit, pulling everyone in the line. In lane it's a kill tool after the enemy uses Flash; in fights, aim it through several enemies."
  },
  combos: [
    { name: "Short trade", keys: "Q → AA → W", note: "Q them, auto, then shield as they hit back. Walk away before a long trade." },
    { name: "Stacked trade", keys: "Q3 (knock-up) → AA → W → AA → Q", note: "Use your stacked Q to start a trade they can't respond to." },
    { name: "All-in", keys: "E → Q3 → R → AA → W → Exhaust → E (snap back)", note: "Go in as a spirit, knock up, R, Exhaust their damage, then snap back once they're dead or you need to leave." }
  ],
  spikes: [
    "Level 2-3: you can trade with ranged top laners using Q stacks and W shield.",
    "Level 6: Fate Sealed makes your all-ins much stronger.",
    "First item ({{item:Blade of The Ruined King}}): you win long duels against tanks and bruisers.",
    "Two items ({{item:Immortal Shieldbow}}): extra survivability when you get focused.",
    "Three items ({{item:Infinity Edge}}): your crits make you a late-game carry."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and two potions with {{spell:Flash}} + {{spell:Exhaust}} and {{rune:Lethal Tempo}}. Level Q, W, E, then max Q, then E, then W.</p><p>Top lane is a long 1v1. Farm with Q, and trade only when your Q is stacked or the enemy wastes a key ability. Against lane bullies like {{champ:Riven}} or {{champ:Darius}}, give up some farm rather than fight a long trade early. Use {{guide:wave-management}}: let the wave come to you near your tower, so you're safe from ganks while you're weak.</p>{{tip:The top role quest gives you Unleashed Teleport, bonus experience and a level cap of 20. You don't take Teleport, but you'll get it from the quest, so you can still join fights later.}}<p>At 6, look for all-ins when the enemy has used Flash or their main crowd control. Exhaust cuts their damage, which often decides the fight.</p>",
    mid: "<p>After {{item:Blade of The Ruined King}}, split push in a side lane. Yone is strong in 1v1s against most top laners at this point, and his mobility helps him escape when two people come.</p><p>When your team fights for an objective, join with Unleashed Teleport from the role quest. A good R in the river can win the fight. Read {{guide:side-lanes}} for when to push and when to group.</p>{{warn:Don't take a long trade with {{champ:Darius}} or a fed bruiser. They win extended fights; trade short and wait for your items.}}",
    late: "<p>Late game, you're a carry. Either split push to pull enemies toward you, or group and look for a big Fate Sealed through the enemy team. Wait for their crowd control to go on your frontline, then go in with E and R.</p><p>{{item:Death's Dance}} or {{item:Guardian Angel}} help you survive dives, and {{item:Lord Dominik's Regards}} cuts through tanks.</p>"
  },
  tips: [
    "Stack Q on minions before you trade so your next Q knocks up.",
    "Leave your body somewhere safe before using Soul Unbound.",
    "Use Exhaust on the enemy's biggest damage dealer during all-ins.",
    "Give up farm against lane bullies rather than fighting long trades early.",
    "Split push once {{item:Blade of The Ruined King}} is done.",
    "Use Unleashed Teleport from the role quest to join objective fights."
  ],
  matchups: {
    hard: [
      { id: "Riven", tip: "She out-trades you early with her combos. Farm safely, shield her burst with W, and wait for items." },
      { id: "Darius", tip: "Never fight him in a long trade near a big wave. Short trades with Q and walk away before his stacks build up." },
      { id: "Tryndamere", tip: "He out-duels you with his ultimate. Use Exhaust and don't fight him when his ultimate is up." }
    ],
    easy: [
      { id: "Yorick", tip: "Kill his ghouls with Q and W, and trade when his maiden is down." },
      { id: "Rumble", tip: "Out-trade him with Q and don't stand in his flamethrower." },
      { id: "KSante", tip: "Your mixed damage hurts him. Play for split push and out-scale him." }
    ]
  }
};

/* ================================================================== WHEN TO PICK */

RA.champPicks.Akali = {
  blind: { safe: false, why: "Risky blind: common mids with point-and-click crowd control, like {{champ:TwistedFate}} or {{champ:Lissandra}}, shut her down. She's best picked after you see the enemy mid." },
  into: [
    "Immobile mages without hard crowd control, like {{champ:Viktor}} or {{champ:Xerath}}",
    "Melee mids she can poke with Q, like {{champ:Irelia}}",
    "Squishy enemy teams with several carries to dive",
    "Teams that rely on clicking targets: her smoke makes her untargetable"
  ],
  avoid: [
    "Point-and-click stuns and roots, like {{champ:TwistedFate}}'s gold card or {{champ:Lissandra}}",
    "Fear and dash punishers like {{champ:Vex}}",
    "Tank-heavy teams she can't burst",
    "Teams with lots of area damage that hits her inside smoke"
  ],
  teammates: [
    { id: "JarvanIV", why: "His engage locks enemies so Akali can dive safely." },
    { id: "Nautilus", why: "Point-and-click crowd control sets up her all-in." },
    { id: "Malphite", why: "His ultimate groups enemies for her follow-up." }
  ],
  teamNeeds: "A frontline and some crowd control, since Akali deals magic burst but doesn't start fights.",
  quiz: [
    { q: "The enemy mid is Twisted Fate. Is Akali a good pick?", options: ["Yes, she counters him", "No, his gold card stuns her through her mobility", "Only if you take Teleport"], answer: 1, explain: "Point-and-click crowd control like his gold card is Akali's biggest weakness.", enemy: ["TwistedFate"], role: "mid" },
    { q: "What does Twilight Shroud do besides making Akali invisible?", options: ["Heals her", "Refills energy and gives move speed", "Stuns enemies"], answer: 1, explain: "Smoke refills energy and gives a burst of speed, so it's an energy tool too." },
    { q: "Which enemy team is best for Akali?", options: ["Three tanks and a Lissandra", "Squishy mages and a marksman with little crowd control", "A team full of point-and-click stuns"], answer: 1, explain: "Akali shines against squishy teams she can dive without getting locked down." }
  ]
};

RA.champPicks.Zed = {
  blind: { safe: true, why: "Fairly safe blind: he can poke and farm with shadows against most mids, though {{champ:Malphite}} and armor-stacking picks are tough." },
  into: [
    "Squishy, immobile mages like {{champ:Orianna}} or {{champ:Cassiopeia}}",
    "Enemy teams with squishy carries and few {{item:Zhonya's Hourglass}} users",
    "Slow, late-game mids he can punish early, like {{champ:Galio}}",
    "Teams without much point-and-click crowd control"
  ],
  avoid: [
    "Tanky mids like {{champ:Malphite}} who ignore his damage",
    "Champions with resets and outplays, like {{champ:Katarina}}",
    "Teams with several tanks and armor",
    "Mids who build {{item:Zhonya's Hourglass}} early"
  ],
  teammates: [
    { id: "LeeSin", why: "Early ganks and kicks set up Zed's burst." },
    { id: "Leona", why: "Her engage locks targets for his mark." },
    { id: "Ornn", why: "A strong frontline lets Zed find the backline." }
  ],
  teamNeeds: "Some magic damage and a frontline, since Zed is physical burst only.",
  quiz: [
    { q: "The enemy mid is Malphite. Should you pick Zed?", options: ["Yes, Zed counters tanks", "No, Malphite's armor and slow make Zed's poke useless", "Only with Electrocute"], answer: 1, explain: "Malphite is one of Zed's hardest matchups because of his armor and early trades.", enemy: ["Malphite"], role: "mid" },
    { q: "Which keystone does Zed run most this patch?", options: ["First Strike", "Conqueror", "Arcane Comet"], answer: 0, explain: "First Strike is the most common and best-performing keystone for Zed this patch." },
    { q: "Who is the best Death Mark target?", options: ["The enemy tank", "The enemy's squishy carry", "The enemy support with full health"], answer: 1, explain: "Zed's job is to kill the squishy carry, not the frontline." }
  ]
};

RA.champPicks.Viktor = {
  blind: { safe: true, why: "Safe blind: long range, fast wave clear and a defensive stun field make him playable into most mids." },
  into: [
    "Mobile divers he can stun with Gravity Field, like {{champ:Yasuo}}",
    "Short-range mids he can out-poke",
    "Teams that group up for fights, where Arcane Storm hits everyone",
    "Slow games where his augments make him a late-game threat"
  ],
  avoid: [
    "Long-range artillery mages like {{champ:Xerath}}",
    "Assassins who reach him before his field, like {{champ:Talon}}",
    "Divers with strong early ganks and roams, like {{champ:Ekko}}",
    "Teams with lots of hard engage aimed at him"
  ],
  teammates: [
    { id: "Amumu", why: "His ultimate holds enemies inside Viktor's storm and field." },
    { id: "Leona", why: "Lockdown into Gravity Field and Hextech Ray." },
    { id: "Ornn", why: "A frontline that keeps divers away from Viktor." }
  ],
  teamNeeds: "Frontline and engage, because Viktor needs others to start fights and protect him.",
  quiz: [
    { q: "The enemy mid is Yasuo. Is Viktor a good pick?", options: ["Yes, his field punishes dashes and Ray can go around Wind Wall", "No, Yasuo counters him", "Only with Ignite"], answer: 0, explain: "Yasuo is one of Viktor's easiest matchups this patch.", enemy: ["Yasuo"], role: "mid" },
    { q: "Which ability should Viktor augment first?", options: ["Q", "W", "E"], answer: 2, explain: "The E augment adds an explosion that boosts wave clear and poke." },
    { q: "When is Viktor a bad pick?", options: ["Against long-range mages like Xerath", "Against immobile melee mids", "When the enemy groups"], answer: 0, explain: "Xerath out-ranges Viktor and is one of his hardest matchups." }
  ]
};

RA.champPicks.Yone = {
  blind: { safe: true, why: "Fairly safe blind: he's mobile and has a shield, so he can play most matchups, though {{champ:Vex}} and {{champ:Katarina}} are tough." },
  into: [
    "Immobile mages he can reach, like {{champ:Ryze}} or {{champ:AurelionSol}}",
    "Teams that group tightly, where Fate Sealed hits several enemies",
    "Teams with little crowd control",
    "Melee lanes he out-ranges with Q, like {{champ:Yasuo}}"
  ],
  avoid: [
    "Fear and dash punishers like {{champ:Vex}}",
    "Skirmishers with resets like {{champ:Katarina}}",
    "Sustain mids like {{champ:Vladimir}}",
    "Teams with lots of point-and-click crowd control"
  ],
  teammates: [
    { id: "Malphite", why: "His ultimate groups enemies for Yone's R." },
    { id: "Diana", why: "Her pull sets up big teamfights." },
    { id: "Rell", why: "Her engage keeps enemies close for Yone." }
  ],
  teamNeeds: "Some magic damage and engage, since Yone's damage is mostly physical and he wants others to start fights.",
  quiz: [
    { q: "The enemy mid is Vex. Should you pick Yone?", options: ["Yes, he out-trades her", "No, her fear punishes his dashes", "Only with Teleport"], answer: 1, explain: "Vex is one of Yone's hardest matchups because of her fear.", enemy: ["Vex"], role: "mid" },
    { q: "What does Soul Unbound do when it ends?", options: ["Stuns enemies", "Snaps Yone back to his body and repeats part of the damage", "Heals him"], answer: 1, explain: "Yone returns to his body and repeats some of the damage he dealt as a spirit." },
    { q: "Which summoner spells does Yone take most this patch?", options: ["Flash + Exhaust", "Flash + Teleport", "Flash + Heal"], answer: 0, explain: "Flash + Exhaust is the most common pick for Yone this patch." }
  ]
};

RA.champPicks["Akali:top"] = {
  blind: { safe: false, why: "Counter-pick only: many top laners are tanky or have crowd control that beats her. Pick her into immobile bruisers." },
  into: [
    "Immobile top laners she can poke, like {{champ:Rumble}} or {{champ:Gwen}}",
    "Melee top laners without hard crowd control",
    "Games where you can split push and draw pressure",
    "Squishy enemy backlines she can flank later"
  ],
  avoid: [
    "Tanky top laners with crowd control, like {{champ:Sion}}",
    "Poke top laners like {{champ:Gangplank}}",
    "Champions like {{champ:Urgot}} who punish her all-in",
    "Teams with lots of tanks"
  ],
  teammates: [
    { id: "JarvanIV", why: "Early ganks into her lane help her snowball." },
    { id: "Leona", why: "Lockdown for her dives in teamfights." },
    { id: "Ornn", why: "A frontline while she flanks." }
  ],
  teamNeeds: "A frontline from the jungle or support, since Akali top won't tank.",
  quiz: [
    { q: "Why does Akali top take Ignite instead of Teleport?", options: ["She can't use Teleport", "The top role quest gives Unleashed Teleport later", "Ignite heals her"], answer: 1, explain: "The top quest gives Unleashed Teleport, so Akali takes Ignite for kill pressure." },
    { q: "The enemy top is Sion. Is Akali a good pick?", options: ["Yes", "No, he's tanky and his crowd control stops her", "Only with Teleport"], answer: 1, explain: "Sion is one of Akali top's hardest matchups.", enemy: ["Sion"], role: "top" },
    { q: "Which matchup is easiest for Akali top?", options: ["Rumble", "Gangplank", "Urgot"], answer: 0, explain: "She dodges Rumble's flamethrower with smoke and out-trades him with Q." }
  ]
};

RA.champPicks["Zed:jungle"] = {
  blind: { safe: false, why: "Not a blind pick: jungle Zed is a low win-rate pick this patch that only works with crowd control lanes and squishy enemies." },
  into: [
    "Squishy enemy laners he can dive after 6",
    "Weak early junglers like {{champ:Taliyah}}",
    "Enemy teams without much crowd control",
    "Teams where your laners have crowd control to chain"
  ],
  avoid: [
    "Strong duelists like {{champ:MasterYi}} or {{champ:Shyvana}}",
    "Strong early ganking junglers like {{champ:Elise}}",
    "Tank-heavy enemy teams",
    "Teams where your laners have no crowd control"
  ],
  teammates: [
    { id: "Lissandra", why: "Her root and ultimate set up his ganks." },
    { id: "Renekton", why: "His stun chains into Zed's burst." },
    { id: "Leona", why: "Her engage makes bot ganks easy." }
  ],
  teamNeeds: "Laners with crowd control and a frontline, since jungle Zed provides neither.",
  quiz: [
    { q: "Which lanes should jungle Zed gank first?", options: ["Lanes with crowd control", "Lanes losing hard with no crowd control", "Lanes against tanks"], answer: 0, explain: "His slow plus their crowd control makes kills easy." },
    { q: "The enemy jungler is Master Yi. Should you pick Zed jungle?", options: ["Yes", "No, Yi out-duels him", "Only with Electrocute"], answer: 1, explain: "Master Yi is one of jungle Zed's hard matchups.", enemy: ["MasterYi"], role: "jungle" },
    { q: "Which pet does jungle Zed start this patch?", options: ["Scorchclaw Pup", "Gustwalker Hatchling", "No pet"], answer: 0, explain: "Most jungle Zeds start Scorchclaw Pup." }
  ]
};

RA.champPicks["Viktor:bot"] = {
  blind: { safe: false, why: "Better as a counter-pick: he beats short-range marksmen, but long-range bot lanes out-range him." },
  into: [
    "Short-range marksmen like {{champ:Ezreal}} or {{champ:Samira}}",
    "Dive bot lanes he can stun with Gravity Field",
    "Teams that group for dragons",
    "Lanes where your support has engage"
  ],
  avoid: [
    "Long-range bot lanes like {{champ:KogMaw}}",
    "Sustain mages like {{champ:Swain}}",
    "Long-range mages like {{champ:Hwei}}",
    "Hard-engage supports when your support can't peel"
  ],
  teammates: [
    { id: "Leona", why: "Her engage into Gravity Field." },
    { id: "Nami", why: "Her poke and heals support his lane." },
    { id: "Blitzcrank", why: "Hooks into Ray and field." }
  ],
  teamNeeds: "Physical damage elsewhere on the team, since Viktor bot replaces your marksman's physical damage with magic.",
  quiz: [
    { q: "The enemy marksman is Samira. Is Viktor bot a good pick?", options: ["Yes, Gravity Field stops her dashes", "No, she counters him", "Only with Barrier"], answer: 0, explain: "Viktor's field punishes Samira's dash-in playstyle.", enemy: ["Samira"], role: "bot" },
    { q: "Which summoner spells does Viktor bot usually take?", options: ["Flash + Heal", "Flash + Teleport", "Flash + Barrier"], answer: 1, explain: "Most bot Viktors take Flash + Teleport." },
    { q: "What does your team need if you pick Viktor bot?", options: ["More magic damage", "Physical damage elsewhere", "No frontline"], answer: 1, explain: "Viktor deals magic damage, so your team needs physical damage elsewhere." }
  ]
};

RA.champPicks["Yone:top"] = {
  blind: { safe: false, why: "Not a safe blind: lane bullies like {{champ:Riven}} and {{champ:Darius}} beat him early. Pick him when you know the enemy top." },
  into: [
    "Scaling top laners he can out-trade, like {{champ:Yorick}}",
    "Tanks he shreds with mixed damage, like {{champ:KSante}}",
    "Teams that group tightly for fights",
    "Games where you can split push"
  ],
  avoid: [
    "Early bullies like {{champ:Riven}} and {{champ:Darius}}",
    "Duelists like {{champ:Tryndamere}}",
    "Teams with lots of crowd control",
    "Teams with strong engage that locks him down"
  ],
  teammates: [
    { id: "Malphite", why: "His ultimate groups enemies for Yone's R." },
    { id: "Diana", why: "Her pull sets up teamfights." },
    { id: "Rell", why: "Her engage keeps enemies grouped." }
  ],
  teamNeeds: "Magic damage and engage from other roles.",
  quiz: [
    { q: "The enemy top is Darius. Is Yone a good pick?", options: ["Yes", "No, Darius wins long trades early", "Only with Teleport"], answer: 1, explain: "Darius is one of Yone top's hardest matchups.", enemy: ["Darius"], role: "top" },
    { q: "Which item does Yone top usually build first?", options: ["Blade of The Ruined King", "Infinity Edge", "Death's Dance"], answer: 0, explain: "Yone top builds Blade of The Ruined King first to win long duels." },
    { q: "How does Yone top get Teleport?", options: ["He takes it as a summoner", "From the top role quest (Unleashed Teleport)", "He can't"], answer: 1, explain: "The top quest gives Unleashed Teleport, so Yone takes Exhaust instead." }
  ]
};
