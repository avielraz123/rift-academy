window.RA = window.RA || {};
RA.champs = RA.champs || [];
RA.champRoles = RA.champRoles || {};
RA.champPicks = RA.champPicks || {};

RA.champs.push(

/* ------------------------------------------------------------------ ZOE */
{
  id: "Zoe",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Long-range burst mage",
  summary: "Zoe is a playful, chaotic mage who deletes people from across the screen. Her Paddle Star hits harder the farther it travels, and her bubble puts enemies to sleep so the next hit deals double damage. She's tricky to aim, but landing a full-range Q on a sleeping enemy is one of the best feelings in League.",
  strengths: [
    "Huge burst from very long range: a max-distance Paddle Star after a bubble can one-shot squishy targets",
    "Sleepy Trouble Bubble travels farther over walls, so you can catch enemies from places they can't see",
    "Portal Jump lets you dodge, reposition and extend your Q, and you always come back to safety",
    "Spell Thief gives you extra summoner spells and items to use for free"
  ],
  weaknesses: [
    "Skill shots are hard to land: a missed bubble usually means a wasted fight",
    "Very squishy with no real escape: Portal Jump always brings you back where you started",
    "Weak against divers and assassins who reach you before you can land your combo",
    "Falls off if she can't find picks: in a straight 5v5 front-to-back fight she's less reliable"
  ],
  abilities: {
    P: "More Sparkles! makes your next attack after a spell deal bonus damage. Weave an auto-attack between spells when you trade, and use it to last-hit minions after casting.",
    Q: "Paddle Star! can be redirected once in flight, and it deals more damage the longer it travels. The classic trick is to throw it backward (behind you), then recast it toward the enemy so it builds up distance. Short Qs tickle; long Qs kill.",
    W: "Spell Thief lets you pick up the leftovers of enemy (and ally) summoner spells and active items, then cast them once yourself. Grab Flash or Ignite remnants after fights. Every time you cast a summoner spell, you also fire 3 extra missiles at the nearest target.",
    E: "Sleepy Trouble Bubble makes the target drowsy, then falls them asleep, lowering their magic resist. The first hit that wakes them deals double damage (up to a cap), so always wake them with your longest Paddle Star. The bubble flies farther if it passes over a wall: use this to catch people from the fog.",
    R: "Portal Jump blinks you a short distance for one second, then pulls you back. Use it to extend your Q's travel distance, to dodge a skill shot, or to peek over a wall and land a bubble. It has a very short cooldown, so use it often."
  },
  combos: [
    { name: "Sleep and snipe", keys: "E → Q (backward) → recast Q", note: "Land the bubble, throw Q away from the target, then redirect it at them so it wakes them with maximum distance and double damage." },
    { name: "Portal extension", keys: "E → Q → R → recast Q", note: "Use Portal Jump forward while Q is in flight, then redirect from the new spot. The longer path means more damage." },
    { name: "Over-the-wall pick", keys: "R over wall → E → R returns → Q", note: "Jump forward to see past a wall, throw the bubble across it, then snipe the sleeping target as you blink back." },
    { name: "Quick trade", keys: "Q → auto (passive) → back off", note: "In lane, a short redirected Q plus a passive-empowered auto is a cheap trade when your bubble is on cooldown." }
  ],
  spikes: [
    "Level 2-3: Q and E together already threaten a big trade",
    "Level 6: Portal Jump makes your Q longer and lets you dodge ganks",
    "First item ({{item:Luden's Echo}}): extra burst and wave clear, your first big spike",
    "Two items ({{item:Lich Bane}}): passive autos hit much harder after each spell",
    "Three items ({{item:Shadowflame}}): your Q-on-sleep combo can one-shot carries"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions and level Q, E, then W. Your goal in lane is to farm safely with Q and look for bubbles when the enemy walks up to last-hit. Most mids can't fight back against a well-placed bubble plus a long Q.</p><p>{{rune:Electrocute}} rewards a quick Q-auto-E trade. Into ranged lanes where you can't reach, {{rune:Summon Aery}} is a safer poke page. Remember to pick up enemy Flash remnants with W: a free Flash is a huge advantage in a kill attempt.</p>{{tip:Throw your bubble from the brush or over a wall. If the enemy can't see it coming, they can't dodge it.}}<p>Keep track of the enemy jungler: you have no real escape. Read {{guide:jungle-tracking}} and play safe when they could be nearby.</p>",
    mid: "<p>After {{item:Luden's Echo}}, start looking for picks around the river and near objectives. Zoe is at her best when the enemy is walking into vision you control: stand behind a wall, wait for someone to face-check, then bubble them.</p><p>Shove your wave before you roam so you don't lose farm (see {{guide:roaming}}). Before dragons and Void Grubs, poke the enemy down with long Qs so your team can start the fight with an advantage.</p>{{warn:Don't walk forward to fish for bubbles alone. Without vision you will get caught, and Zoe dies very fast.}}",
    late: "<p>In late game, your job is to catch someone before the fight, or to delete the enemy carry the moment they step too far forward. Stay behind your frontline and aim your bubble at the backline, not at the tank.</p><p>Build {{item:Zhonya's Hourglass}} against divers, and {{item:Void Staff}} if they stack magic resist. A single pick on the enemy ADC before Baron or Elder Dragon can win the game outright. If you miss your bubble, back off and wait for the cooldown instead of forcing it.</p>"
  },
  tips: [
    "Always wake a sleeping target with your longest possible Paddle Star: the double damage applies to the first hit only",
    "The bubble travels farther over walls, so walls are your best friends",
    "Grab summoner spell remnants with W after every skirmish",
    "Use Portal Jump to dodge key skill shots: you come back to the same spot, so plan your position",
    "Weave autos between spells to use your passive",
    "Track your E cooldown. Without the bubble, you have no threat, so don't trade",
    "Ward the river brushes: Zoe's picks depend on seeing enemies first"
  ],
  matchups: {
    hard: [
      { id: "Malzahar", tip: "His spell shield blocks your bubble or first Q. Break it with a cheap Q before you throw E, and respect his ultimate when he has it." },
      { id: "Fizz", tip: "He can dodge your bubble with his E and dive you easily. Keep E for when he uses Playful/Trickster, then sleep him as he lands." },
      { id: "Akshan", tip: "He's mobile and can roam fast. Play for long-range poke, keep your bubble to stop his engage, and ping when he's missing." }
    ],
    easy: [
      { id: "Azir", tip: "He's immobile in lane and has to stand near his soldiers. Bubble him over his soldiers and punish every last-hit." },
      { id: "Qiyana", tip: "Her combo needs her to come close. Keep distance and sleep her the moment she dashes in." },
      { id: "Ryze", tip: "He's short-ranged and weak early. Poke him with long Qs and bubble him when he walks up to farm." }
    ]
  }
},

/* ------------------------------------------------------------------ IRELIA */
{
  id: "Irelia",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Physical",
  style: "Dashing melee skirmisher",
  summary: "Irelia is a blade dancer who dashes from minion to minion and through enemies with her Bladesurge, resetting it every time she hits a marked target or kills something. She's actually played more in top lane (about 63% of her games) than mid, so check out her top lane guide too. In mid she's a high-risk, high-reward pick that destroys immobile mages but struggles against strong ranged control.",
  strengths: [
    "Amazing mobility: Bladesurge resets on marked targets and kills, so she can dash through a whole wave",
    "Great all-in and outplay potential once her passive is stacked",
    "Defiant Dance reduces physical damage, letting her win short fights against AD champions",
    "Strong skirmishing in the river with a stun and a long-range ultimate"
  ],
  weaknesses: [
    "Melee in mid against ranged mages means she takes a lot of poke",
    "Missing your E stun usually means losing the fight",
    "Hard to play: wave positioning and Q resets take a lot of practice",
    "Struggles against champions with point-and-click crowd control and strong burst"
  ],
  abilities: {
    P: "Ionian Fervor stacks attack speed when you hit enemies with spells, and at max stacks your attacks deal bonus on-hit damage. Stack it by Qing minions before you go in on a champion.",
    Q: "Bladesurge dashes to a target and heals you. If the target is marked (by E or R) or dies to the Q, the cooldown refreshes. Use it on low-health minions to move around the lane, and only Q onto champions when they're marked.",
    W: "Defiant Dance charges a strike that deals more damage the longer you hold it, and reduces physical damage you take while charging. Use it to block an enemy's burst, then release it for damage.",
    E: "Flawless Duet places two blades that fly toward each other. Enemies caught between them are stunned and marked. Place the first blade behind the enemy and the second in front so they can't walk out.",
    R: "Vanguard's Edge fires blades that explode on the first champion hit, marking enemies and leaving a wall that slows and damages anyone who walks through. It's both your all-in starter and a great way to block an escape."
  },
  combos: [
    { name: "Basic trade", keys: "Q (minion) → E → E → Q (marked) → autos → W", note: "Stack passive on a minion, stun with E, dash onto the marked enemy, auto, then W to block their answer." },
    { name: "Full all-in", keys: "R → Q → E → E → Q → autos → W → Q", note: "Ultimate marks the target, Q onto them, stun with E for a second mark, Q again, and finish with W and a reset Q." },
    { name: "Wave dash escape", keys: "Q → Q → Q (low minions)", note: "Chain Qs through low-health minions to run away or chase. Each kill refreshes the cooldown." }
  ],
  spikes: [
    "Level 2: Q + E lets you all-in an enemy who walks up",
    "Level 6: Vanguard's Edge gives you a long-range engage and a second mark",
    "First item ({{item:Blade of The Ruined King}}): huge dueling power and sustain",
    "Two items ({{item:Kraken Slayer}}): fights against squishies end very fast",
    "Three items ({{item:Death's Dance}}): much harder to burst down in teamfights"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Blade}} and a potion, take Q, E, then W. In mid you'll often face ranged champions who poke you, so last-hit with Q when you can do it safely and stack your passive before every trade.</p><p>The key to Irelia's lane is minion count: when the enemy wave is big and has low-health minions, you can dash through them to reach the enemy. When there are few enemy minions, you're stuck and easy to poke. Read {{guide:wave-management}} to learn how to set up your waves.</p>{{tip:Stack your passive by Qing low minions before you trade. A fully stacked Irelia hits much harder.}}<p>Mid lane has a quest bonus: completing it gives +8% AD and free Tier 3 boots. {{item:Mercury's Treads}} are the usual pick here because most mids deal magic damage and have crowd control.</p>",
    mid: "<p>Once you have {{item:Blade of The Ruined King}}, you can duel most mages. Push your wave and look to skirmish in the river with your jungler. Irelia is great at diving onto someone and getting out by Qing minions or marked targets.</p><p>Many Irelia players move to a side lane in mid game, where they can fight one-on-one and pressure towers. See {{guide:side-lanes}}.</p>{{warn:Don't Q onto a champion that isn't marked. You'll be stuck next to them with your Q on a long cooldown.}}",
    late: "<p>In teamfights, wait for the enemy to use their crowd control, then go in with your ultimate. Mark as many enemies as you can with R, then dash between them with Q. {{item:Death's Dance}} and {{item:Guardian Angel}} help you survive diving into the backline.</p><p>Side-lane pressure is still strong: if the enemy has no one who can 1v1 you, split push and let your team play around the attention you draw.</p>"
  },
  tips: [
    "Only Q onto champions when they're marked or about to die",
    "Stack your passive on minions before trading",
    "Place the first E blade behind the enemy so the second can catch them walking away",
    "Use W to block burst from AD champions, then release it",
    "Fight when the enemy wave is big: more minions means more Q resets",
    "Your R wall slows everyone who walks through it, so use it to block escapes",
    "If mid feels too hard, try {{champ:Irelia}} top, where most players pick her"
  ],
  matchups: {
    hard: [
      { id: "Vex", tip: "Her passive fear punishes your dashes. Wait until her fear is used before you Q in, and stay out of her shield's range." },
      { id: "Vladimir", tip: "He heals through your trades and can pool out of your stun. Trade short and only all-in when his pool is down." },
      { id: "Leblanc", tip: "She bursts you and escapes before you can reach her. Keep W for her burst and save E until her return pad is used." }
    ],
    easy: [
      { id: "Ryze", tip: "He's short-ranged and weak early. Dash through his wave and all-in him at level 2." },
      { id: "Orianna", tip: "She has no escape. Wait for her shield to go out, then dash in, stun her and fight." },
      { id: "Syndra", tip: "Dodge her stun angle, then all-in her when E is down. She can't escape once you're on her." }
    ]
  }
},

/* ------------------------------------------------------------------ TALIYAH */
{
  id: "Taliyah",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Roaming control mage",
  summary: "Taliyah is a stone weaver who shreds waves with her rock volleys and roams the map on her huge ultimate wall. She's played more in the jungle (about 53% of her games) than mid, so check out her jungle guide too. In mid she's a great pick if you like fast wave clear and helping your other lanes.",
  strengths: [
    "Very fast wave clear with Threaded Volley",
    "Weaver's Wall lets you roam across the map and cut off enemies' escape routes",
    "W + E combo is a reliable stun that combos with any ally crowd control",
    "Rock Surfing gives bonus move speed near walls, perfect for roaming"
  ],
  weaknesses: [
    "Worked Ground weakens your Q if you stay in one place: you have to keep moving",
    "Weak against assassins and divers who close the gap before your combo",
    "No dash or blink: if your W+E misses, you're vulnerable",
    "Her ultimate wall can block your own team if you place it badly"
  ],
  abilities: {
    P: "Rock Surfing gives you bonus move speed near walls. Walk along terrain when you roam to get places faster.",
    Q: "Threaded Volley throws a volley of rocks and leaves Worked Ground under you. If you cast it while standing on Worked Ground, you throw one big slowing boulder instead. Keep moving between casts for full damage, and use the boulder when you need a slow.",
    W: "Seismic Shove makes the ground erupt after a short delay, then throws enemies in the direction you choose. Throw them into your team, into a wall, or into your E mines.",
    E: "Unraveled Earth creates a slowing minefield. Enemies who dash or get knocked through it are stunned by the exploding mines. Combo it with your W or with your allies' knock-ups.",
    R: "Weaver's Wall creates a huge wall and lets you surf it. Use it to roam to another lane, to cut off an escape, or to split the enemy team in a fight. You can stop surfing early by recasting."
  },
  combos: [
    { name: "Stun combo", keys: "W → E (toward you) → Q", note: "Cast W, then E right away so the shove throws the enemy through the mines. The explosions stun them, then follow with Q." },
    { name: "Wall gank", keys: "R → W → E → Q", note: "Surf in on your ultimate, then throw the enemy toward your laner through your E mines." },
    { name: "Wave clear", keys: "Q → move → Q", note: "Keep moving between Qs so you don't hit your own Worked Ground. Full volleys clear waves in seconds." }
  ],
  spikes: [
    "Level 3: W + E + Q gives you a real stun combo for trades and ganks",
    "Level 6: Weaver's Wall opens up roams to every lane",
    "First item ({{item:Blackfire Torch}}): strong wave clear and damage over time",
    "Two items ({{item:Rylai's Crystal Scepter}}): your Qs slow, making the combo much easier to land",
    "Three items ({{item:Zhonya's Hourglass}}): you can survive dives in teamfights"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions and level Q, E, then W. Use your Q to farm and poke, but keep moving: casting Q twice in the same spot only throws a single boulder. {{rune:Stormraider's Surge}} gives you burst speed after combos; {{rune:Summon Aery}} is a safer choice in poke lanes.</p><p>Taliyah's lane is about wave control. Push the wave with Q, then look to roam bot or top using your passive move speed near walls. Read {{guide:roaming}} to learn when roaming is worth it.</p>{{tip:Cast W first, then E. The shove has a short delay, so the enemy is thrown through your mines as they explode.}}",
    mid: "<p>After level 6 and your first item, Taliyah becomes a map-wide threat. Shove mid, then use Weaver's Wall to cross the map and gank bot or top, or to cut off an enemy jungler fleeing from a fight.</p><p>Take {{spell:Teleport}} as your second summoner (most Taliyah mids do) so you can join fights even when your ultimate is down. Help your jungler take dragons and Void Grubs; your W + E combo is great for stopping steals.</p>{{warn:Don't place your ultimate wall in the middle of your own team. It blocks your allies too and can ruin your fight.}}",
    late: "<p>In teamfights, stand behind your frontline and use Q to deal damage. Save your W + E combo for divers who come at you, or throw the enemy carry into your team. Use your ultimate to split the enemy team: wall off their backline from their frontline, then win the fight against the half you trapped.</p><p>{{item:Zhonya's Hourglass}} keeps you alive against divers. Before Baron or Elder Dragon, use your wall to block the enemy's path to the pit.</p>"
  },
  tips: [
    "Keep moving between Qs to avoid Worked Ground",
    "Always cast W before E for the stun combo",
    "Your E also stuns enemies who dash through it: place it on a dasher's path",
    "Use your ultimate to roam, to block escapes, or to split fights, not to run around randomly",
    "Walk along walls for bonus move speed",
    "Push the wave before every roam so you don't lose farm",
    "Combo your E with your allies' knock-ups and dashes"
  ],
  matchups: {
    hard: [
      { id: "Katarina", tip: "She jumps on you with daggers and resets. Keep W + E for when she dashes in, and don't overpush without vision." },
      { id: "Ekko", tip: "He dives you and rewinds out. Throw your W toward your tower when he comes in, and save E to stun his dash." },
      { id: "Veigar", tip: "His cage can trap you and he outscales you. Roam often to get your team ahead before his stacks get big." }
    ],
    easy: [
      { id: "Azir", tip: "He's immobile and relies on his soldiers. Poke him with Q and throw him into your mines when he walks up." },
      { id: "Ryze", tip: "He's short-ranged and weak early. Out-push him and roam before he scales." },
      { id: "Yasuo", tip: "His dashes trigger your mines. Place E on his path and stun him when he dashes in." }
    ]
  }
}
);

/* ================================================================== OTHER ROLES */

RA.champRoles["Zoe:support"] = {
  difficulty: "Hard",
  damage: "Magic",
  style: "Long-range poke and pick support",
  summary: "Zoe support turns bot lane into a shooting range. From behind your ADC, you poke with long Paddle Stars and catch enemies with Sleepy Trouble Bubble, setting up kills your ADC can follow. It's a niche, high-risk pick: unlike tank supports she can't protect her carry well, but a good Zoe support decides fights before they begin.",
  strengths: [
    "Huge poke and burst from very long range, even with support items",
    "Sleep bubble sets up kills for your ADC, especially from the brush",
    "Long-range pick potential when roaming with your jungler",
    "Spell Thief: extra summoners and items to pick up in fights"
  ],
  weaknesses: [
    "Very squishy: hard-engage supports can kill you before you act",
    "Can't peel well: if a diver reaches your ADC, you can only bubble or poke",
    "Relies on landing skill shots: misses leave your ADC on their own",
    "Less vision-focused tools than enchanter supports"
  ],
  abilities: {
    P: "More Sparkles! adds damage to your next auto after a spell. In support it's mostly for trading: Q, auto, then back off.",
    Q: "Paddle Star! is your main poke. Redirect it so it travels a long way before it hits. In bot lane, aim at the enemy who just walked up to last-hit.",
    W: "Spell Thief lets you pick up dropped summoner spells and item actives. Bot lane is full of summoner casts (Flash, Heal, Barrier, Exhaust), so you'll get lots of extra tools.",
    E: "Sleepy Trouble Bubble is your kill setup. Throw it from the brush or over a wall, and tell your ADC so they can follow. The first hit that wakes the target deals double damage.",
    R: "Portal Jump lets you dodge engages, peek over walls to land a bubble, and extend your Paddle Star."
  },
  combos: [
    { name: "Lane kill setup", keys: "E → Q (long) → ADC follows", note: "Sleep the enemy ADC from the brush, wake them with a long Q, and let your carry finish." },
    { name: "Peel bubble", keys: "R → E on diver", note: "If a diver jumps on your ADC, jump to get an angle and put them to sleep so your ADC can walk away." },
    { name: "Poke trade", keys: "Q → auto → step back", note: "A safe trade when the enemy support's engage is on cooldown." }
  ],
  spikes: [
    "Level 2: E + Q gives you a strong kill threat with your ADC",
    "Support item upgrades: {{item:World Atlas}} finishes into {{item:Zaz'Zak's Realmspike}} for extra poke damage",
    "First item ({{item:Imperial Mandate}}): your bubble and slows mark enemies for bonus damage from your team",
    "Two items ({{item:Horizon Focus}}): long-range Qs deal even more damage",
    "Level 6: Portal Jump makes it much harder for engage supports to catch you"
  ],
  phases: {
    early: "<p>Start {{item:World Atlas}} with two potions and level E, Q, then W. Your support quest upgrades your support item for free as you complete it, and gives you cheaper control wards. Hide in the bot lane brush and look for bubbles on whoever walks up to farm.</p><p>{{rune:Electrocute}} is the most common keystone, but {{rune:Summon Aery}} wins more often for poke-focused Zoe supports. Stay behind your ADC: you're squishier than the enemy support in most matchups.</p>{{tip:Ping your ADC before you throw the bubble. A sleeping enemy is worth nothing if your carry isn't ready to hit them.}}",
    mid: "<p>After your first item, roam with your jungler to place vision and catch enemies around dragon and river. A bubble from the fog is the best pick tool in the game. Before objectives, poke the enemy down with long Qs so they can't contest.</p><p>Use your support quest's cheap {{item:Control Ward}}s around dragon pit and river. Read {{guide:vision-control}} for good spots.</p>{{warn:Don't walk into unwarded brushes first. Zoe dies in a second to any catch.}}",
    late: "<p>In late game you're a backline pick threat. Stand next to your ADC and bubble anyone who dives them. Before fights, try to land a long bubble on the enemy carry: if they wake up to a big hit, your team can engage 5v4.</p><p>{{item:Shurelya's Battlesong}} gives your team speed to engage or disengage. Against heavy dive, consider {{item:Celestial Opposition}} as your support item upgrade instead.</p>"
  },
  tips: [
    "Use the brush: bubbles from unseen angles are much harder to dodge",
    "Pick up every dropped Flash or Heal with W",
    "Ping your ADC before you go for a bubble",
    "Stay behind your ADC; you can't survive engages",
    "Use cheap control wards from your support quest",
    "Poke before objectives so the enemy can't contest",
    "Pair with ADCs who have high burst follow-up"
  ],
  matchups: {
    hard: [
      { id: "Alistar", tip: "His headbutt-pulverize combo reaches you before your bubble. Stand behind minions and bubble him as he walks in." },
      { id: "Leona", tip: "Her E pulls her onto you. Keep your bubble for when she dashes and stay out of her range." },
      { id: "Maokai", tip: "His saplings in the brush block your vision. Clear them and poke from range." }
    ],
    easy: [
      { id: "Lux", tip: "You out-range her poke with long Qs. Dodge her binding and bubble her when she walks up." },
      { id: "Seraphine", tip: "She's immobile. Sleep her and burst her from range before she can heal." },
      { id: "Bard", tip: "He roams a lot. Punish his ADC when he leaves, and bubble him when he comes back." }
    ]
  },
  supports: [
    { id: "MissFortune", why: "Her Double Up and ultimate deal huge damage on sleeping or slowed targets you catch." },
    { id: "Xayah", why: "Her root combos with your bubble, and she can burst whoever you put to sleep." },
    { id: "Lux", why: "A Lux in bot lane adds even more long-range poke and catch, making lane miserable for the enemy." }
  ]
};

RA.champRoles["Irelia:top"] = {
  difficulty: "Hard",
  damage: "Physical",
  style: "Dashing duelist",
  summary: "Top lane is Irelia's main role: about 63% of her games are here. On the top island she's a lane bully who dashes through minion waves, wins long trades with a stacked passive, and takes over side lanes with split pushing. She's hard to master but can take over games on her own.",
  strengths: [
    "Excellent dueling power once her passive is stacked",
    "Bladesurge resets make her one of the most mobile top laners",
    "Strong split pusher who can beat most opponents one-on-one",
    "Defiant Dance blocks a lot of physical damage from AD top laners"
  ],
  weaknesses: [
    "Weak when the enemy wave is small: no minions means no Q resets",
    "Struggles against tanks and champions with point-and-click crowd control",
    "Missing your E stun loses most trades",
    "Gets countered hard by champions who punish dashes"
  ],
  abilities: {
    P: "Ionian Fervor gives stacking attack speed when you hit enemies with spells, and bonus on-hit damage at full stacks. In top lane, stack it on minions before every trade.",
    Q: "Bladesurge resets on marked targets and kills. Use it on low-health minions to move around and to stack your passive, and only dash onto your opponent when they're marked.",
    W: "Defiant Dance reduces physical damage you take while you charge it. Most top laners deal physical damage, so time it on their big hit (like a fighter's empowered attack).",
    E: "Flawless Duet stuns and marks. Place the first blade behind your opponent and the second in front of you. Landing it is how you win trades.",
    R: "Vanguard's Edge marks every champion it hits and leaves a slowing wall. In top lane, use it to start an all-in or to stop your opponent from escaping to their tower."
  },
  combos: [
    { name: "Level 2 all-in", keys: "Q (minion) → E → E → Q → autos", note: "Stack on a minion, stun your opponent, then dash onto the marked target." },
    { name: "Full all-in", keys: "R → Q → E → E → Q → W → Q", note: "The ultimate marks them, then two marked Qs and a W absorb their damage while you fight." },
    { name: "Wave reset escape", keys: "Q → Q → Q", note: "Dash through low-health minions to get away or chase." }
  ],
  spikes: [
    "Level 2: Q + E is a deadly all-in on the top island",
    "Level 6: R gives you a ranged engage and extra marks",
    "First item ({{item:Blade of The Ruined King}}): you win most duels",
    "Two items ({{item:Hullbreaker}}): a huge split-pushing spike",
    "Three items ({{item:Wit's End}}): magic resist and attack speed to beat AP and tanky threats"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Blade}} and a potion, take Q, E, W. Top lane is a 1v1 island: there's no support to save you, so trades decide the lane. Stack your passive by Qing minions, then trade with E + Q when the enemy steps up.</p><p>Most Irelia players take {{spell:Ignite}} instead of Teleport, because the top quest gives you a free Unleashed Teleport once you complete it. That means more kill pressure early without losing Teleport later.</p>{{tip:Fight when your opponent's minion wave is bigger than yours. Low-health enemy minions are your dash path.}}<p>Learn to freeze and slow-push your waves ({{guide:wave-management}}): a freeze near your tower keeps your opponent away from farm and safe from your jungler's ganks.</p>",
    mid: "<p>After {{item:Blade of The Ruined King}}, look to split push. Irelia can beat most top laners one-on-one, so pushing the side lane draws enemies to you while your team takes objectives. When your team fights, use your Unleashed Teleport to join them.</p><p>Use {{item:Plated Steelcaps}} against AD lanes. Read {{guide:side-lanes}} to learn when to split and when to group.</p>{{warn:Don't dash onto your opponent unless they're marked. You'll be stuck in melee range with your Q on cooldown.}}",
    late: "<p>In late game, choose between split pushing and grouping. If the enemy has no one who can beat you, keep the side lane pushed and force them to send two players. If you group, wait for the enemy's crowd control to be used, then R into their backline and dash between marked targets.</p><p>{{item:Death's Dance}} and {{item:Guardian Angel}} help you survive diving. {{item:Sterak's Gage}} is great against burst.</p>"
  },
  tips: [
    "Stack passive on minions before every trade",
    "Use W to block physical burst from top lane fighters",
    "Take Ignite: your top quest gives you Unleashed Teleport anyway",
    "Fight when the enemy wave is bigger than yours",
    "Freeze near your tower when you're ahead",
    "Split push after your first two items",
    "Avoid long trades with tanks: you'll lose them"
  ],
  matchups: {
    hard: [
      { id: "Malphite", tip: "His armor shuts down your damage and his ultimate stops your dashes. Farm safely, build {{item:Wit's End}}, and play for side lanes later." },
      { id: "Warwick", tip: "He heals through your trades and his ultimate suppresses you. Trade short and don't fight when he's low near his wave." },
      { id: "Jax", tip: "His Counter Strike blocks your autos and stuns you. Wait until he uses E, then all-in." }
    ],
    easy: [
      { id: "Gnar", tip: "He's weak in the early levels. Dash through his wave and all-in him before he gets Mega form." },
      { id: "Jayce", tip: "He pokes from range but has no sustain. Dash in when his gate and hammer combo is down." },
      { id: "Rumble", tip: "He's strong in short trades with his flamethrower. Block it with W, then stun and all-in him." }
    ]
  }
};

RA.champRoles["Taliyah:jungle"] = {
  difficulty: "Medium",
  damage: "Magic",
  style: "Ganking mage jungler",
  summary: "Taliyah is played more in the jungle (about 53% of her games) than mid. With her fast clear, her huge ultimate wall for ganks from anywhere, and her reliable W + E stun, she's a mage jungler who can pressure every lane. Riot buffed her E in 26.21 with mage junglers in mind.",
  strengths: [
    "Fast, safe clear with Threaded Volley",
    "Weaver's Wall lets you gank from unexpected angles across the map",
    "Reliable W + E stun to set up kills for laners",
    "Strong at helping with objectives and stopping steals"
  ],
  weaknesses: [
    "Squishy: invading assassin junglers can kill her",
    "Worked Ground slows her clear if she stays in one camp too long",
    "No dash: hard to escape when caught",
    "Weak in 1v1 duels against fighters"
  ],
  abilities: {
    P: "Rock Surfing gives bonus move speed near walls. Walk along jungle walls to get to camps and lanes faster.",
    Q: "Threaded Volley clears camps fast. Move between casts so you don't stand on Worked Ground, which turns your Q into a single boulder.",
    W: "Seismic Shove lets you throw enemies toward your laner's tower or into your E mines when you gank.",
    E: "Unraveled Earth slows enemies and stuns anyone who dashes through it. Use it in ganks and to stop enemies from escaping with dashes.",
    R: "Weaver's Wall is your gank tool: surf across the map and arrive in lane from an angle the enemy doesn't expect. You can also wall off an enemy's escape route."
  },
  combos: [
    { name: "Gank combo", keys: "R → W → E → Q", note: "Surf in, throw the enemy toward your laner through your mines, then Q." },
    { name: "Escape cutoff", keys: "R (wall behind enemy) → W → E", note: "Place your wall to block their escape path, then stun them." },
    { name: "Fast clear", keys: "Q → move → Q → Smite", note: "Keep moving to avoid Worked Ground, and smite to secure the camp." }
  ],
  spikes: [
    "Level 3: W + E + Q makes your ganks dangerous",
    "Level 6: Weaver's Wall lets you gank any lane from far away",
    "Jungle quest complete: Primal Smite plus bonus gold and XP from camps",
    "First item ({{item:Blackfire Torch}}): faster clear and more damage",
    "Two items ({{item:Shadowflame}}): your combo bursts squishy targets"
  ],
  phases: {
    early: "<p>Start {{item:Scorchclaw Pup}} with a potion, and take Q, E, W. Camps spawn at 0:55 (Gromp and Krugs at 1:07), and Scuttle Crabs at 2:55. Plan a full clear or a three-camp start toward the lane you want to gank. Keep moving between Qs while you clear so you don't waste them on Worked Ground.</p><p>Your jungle quest gives you Primal Smite, +10 gold and +10 XP per large camp, and extra move speed in the jungle and river. Use {{spell:Smite}} to secure camps and objectives.</p>{{tip:Gank lanes where your laner has crowd control. Your W + E combo plus their stun almost always gets a kill.}}<p>Track the enemy jungler ({{guide:jungle-tracking}}): if they're an assassin like {{champ:Zed}}, ward your jungle entrances.</p>",
    mid: "<p>After level 6, Weaver's Wall makes you a threat everywhere. Look for ganks from strange angles: surf down from the top side river into bot lane, or across mid from your raptors. Push for dragons (5:00) and Void Grubs (8:00) after successful ganks.</p><p>Your W + E combo is great at stopping enemy junglers from stealing objectives. Read {{guide:objectives-and-dragons}} for setup tips.</p>{{warn:Don't place your wall in a way that blocks your own laner from reaching the enemy.}}",
    late: "<p>In late game, use your wall to split fights and to cut the enemy off from Baron or Elder Dragon. Stay with your team: a mage jungler caught alone dies fast.</p><p>Build {{item:Zhonya's Hourglass}} against divers and {{item:Void Staff}} against magic resist. Use your W to throw enemies into your team, and keep Smite ready for epic monsters.</p>"
  },
  tips: [
    "Keep moving between Qs while clearing camps",
    "Use your wall to gank from unexpected angles",
    "Gank lanes with crowd control",
    "Use Smite on every large camp for your jungle quest",
    "Track the enemy jungler and ward your entrances",
    "Help your team with objectives after ganks",
    "Combo W + E to stop steals at objectives"
  ],
  matchups: {
    hard: [
      { id: "Zyra", tip: "Her plants clear camps and zone you. Avoid fighting in her plants and gank lanes she isn't near." },
      { id: "Zed", tip: "He can invade and kill you in your jungle. Ward your entrances and stay close to your laners." },
      { id: "Skarner", tip: "He's tanky and his crowd control can pin you down. Avoid one-on-one fights and keep your W + E for when he engages." }
    ],
    easy: [
      { id: "Vi", tip: "Her dash is stopped by your E mines. Place E on her path and throw her away with W." },
      { id: "Qiyana", tip: "Her combo needs dashes, which trigger your mines. Stun her as she dashes in." },
      { id: "Amumu", tip: "He's slow early. Invade his jungle and fight with your lane's help." }
    ]
  }
};

/* ================================================================== WHEN TO PICK */

RA.champPicks.Zoe = {
  blind: { safe: false, why: "Better as a counter-pick: divers and mages with spell shields can shut her down, so it's safer to pick her after the enemy mid." },
  into: [
    "Immobile mages who can't dodge a bubble, like {{champ:Azir}} and {{champ:Ryze}}",
    "Enemy teams with squishy carries you can one-shot from range",
    "Short-ranged champions who have to walk up to farm, like {{champ:Qiyana}}",
    "Teams that rely on a single carry: catching them before fights decides the game"
  ],
  avoid: [
    "Assassins and divers who reach you quickly, like {{champ:Fizz}}",
    "{{champ:Malzahar}}, whose spell shield blocks your bubble or first Q",
    "Mobile champions with dashes that dodge your skill shots",
    "Teams with lots of tanks: you'll struggle to find squishy targets"
  ],
  teammates: [
    { id: "Nidalee", why: "Long-range poke from two sources makes enemies unable to walk forward." },
    { id: "Leona", why: "Her engage locks targets down so you can land a full-distance bubble." },
    { id: "JarvanIV", why: "His knock-up and ultimate trap enemies, giving you free sleep and snipe." }
  ],
  teamNeeds: "Pick Zoe when your team has a frontline or engage to protect you, because she has no real escape.",
  quiz: [
    {
      q: "The enemy mid is Fizz. Is Zoe a good pick?",
      enemy: ["Fizz"],
      options: ["Yes, Fizz can't dodge anything", "No, Fizz dodges your bubble with his E and dives you easily", "Yes, Zoe out-trades every melee champion", "No, Fizz has a spell shield"],
      answer: 1,
      explain: "Fizz's Playful/Trickster dodges your bubble, and he can dive you in a second. He's one of Zoe's hardest matchups."
    },
    {
      q: "Why is Zoe a better counter-pick than blind pick?",
      options: ["She has a weak early game", "Divers and spell shields counter her hard, so you want to see the enemy mid first", "She needs a specific support", "She can't farm"],
      answer: 1,
      explain: "Zoe's burst can be blocked or avoided by certain champions, so it's safer to pick her after you know your opponent."
    },
    {
      q: "The enemy team has three tanks and a hyper-carry ADC. What's your job as Zoe?",
      enemy: ["Malphite", "Sejuani", "Ornn", "Jinx", "Leona"],
      options: ["Bubble the tanks first", "Look for a long bubble on the ADC before fights", "Split push", "Stand in front of your team"],
      answer: 1,
      explain: "Tanks soak your damage, but a sleeping ADC hit by a long Paddle Star can be deleted, giving your team a 5v4."
    }
  ]
};

RA.champPicks["Zoe:support"] = {
  blind: { safe: false, why: "Not safe to blind pick: hard-engage supports can kill her before she acts." },
  into: [
    "Immobile enchanter or mage supports like {{champ:Seraphine}} and {{champ:Lux}}",
    "Roaming supports who leave their ADC alone, like {{champ:Bard}}",
    "Squishy enemy ADCs you can burst from range",
    "Enemy bot lanes without hard engage"
  ],
  avoid: [
    "Hard-engage supports like {{champ:Leona}} and {{champ:Alistar}}",
    "Tanky supports with brush control like {{champ:Maokai}}",
    "Teams with lots of divers who'll reach your ADC",
    "Situations where your ADC needs a protector, not a poker"
  ],
  teammates: [
    { id: "MissFortune", why: "Her damage follows up perfectly on sleeping targets." },
    { id: "Xayah", why: "Her root combos with your bubble for easy kills." },
    { id: "Lux", why: "Two long-range poke threats make bot lane unplayable for the enemy." }
  ],
  teamNeeds: "Pick Zoe support when your team has enough frontline and your ADC can play safely without heavy peel.",
  quiz: [
    {
      q: "The enemy bot lane is Jinx with Leona. Is Zoe support a good pick?",
      enemy: ["Jinx", "Leona"],
      options: ["Yes, Leona can't reach you", "No, Leona's engage catches you before you can act", "Yes, Zoe out-trades every support", "It doesn't matter"],
      answer: 1,
      explain: "Leona is one of Zoe support's hardest matchups. Her E pulls her onto you, and Zoe is very squishy."
    },
    {
      q: "Which ADC pairs best with Zoe support's bubble?",
      options: ["Miss Fortune", "Kog'Maw", "Twitch", "Vayne"],
      answer: 0,
      explain: "Miss Fortune's burst and ultimate deal huge damage on sleeping targets."
    },
    {
      q: "The enemy support is Seraphine. Why is Zoe a good pick here?",
      enemy: ["Seraphine"],
      options: ["Seraphine is immobile and squishy, so you can bubble and burst her", "Seraphine has a spell shield", "Seraphine always roams", "Zoe heals more"],
      answer: 0,
      explain: "Seraphine can't dodge well and dies to a long Paddle Star on a sleeping target."
    }
  ]
};

RA.champPicks.Irelia = {
  blind: { safe: false, why: "Risky to blind pick in mid: control mages and champions who punish dashes shut her down." },
  into: [
    "Immobile mages with no escape, like {{champ:Orianna}} and {{champ:Ryze}}",
    "Mages whose crowd control can be dodged, like {{champ:Syndra}}",
    "Squishy teams she can dive into after her first item",
    "Teams without much hard crowd control"
  ],
  avoid: [
    "{{champ:Vex}}, whose fear punishes your dashes",
    "Bursty mages who escape, like {{champ:Leblanc}}",
    "Sustain mages who out-heal your trades, like {{champ:Vladimir}}",
    "Teams with lots of point-and-click crowd control"
  ],
  teammates: [
    { id: "JarvanIV", why: "His engage lets you follow up with your ultimate and dashes." },
    { id: "Nautilus", why: "His point-and-click crowd control sets up easy all-ins." },
    { id: "Sejuani", why: "Her stuns let you mark and dash between targets freely." }
  ],
  teamNeeds: "Pick Irelia mid when your team has engage or crowd control to help her dive, and when you can handle a melee mid lane.",
  quiz: [
    {
      q: "The enemy mid is Vex. Is Irelia a good pick?",
      enemy: ["Vex"],
      options: ["Yes, Vex is immobile", "No, Vex's fear punishes Irelia's dashes", "Yes, Irelia out-ranges Vex", "It doesn't matter"],
      answer: 1,
      explain: "Vex's passive fear punishes dashes, and Irelia's whole kit is dashes. It's one of her hardest matchups."
    },
    {
      q: "Which mid is a great matchup for Irelia?",
      options: ["Orianna", "Vladimir", "Leblanc", "Vex"],
      answer: 0,
      explain: "Orianna has no escape. Once Irelia stuns and dashes onto her, she can't get away."
    },
    {
      q: "Where is Irelia played most often?",
      options: ["Mid", "Top", "Jungle", "Support"],
      answer: 1,
      explain: "About 63% of Irelia's games are in top lane, where she's a strong duelist and split pusher."
    }
  ]
};

RA.champPicks["Irelia:top"] = {
  blind: { safe: false, why: "Better as a counter-pick: tanks and crowd-control champions like Malphite and Jax can shut her down." },
  into: [
    "Ranged top laners with no sustain, like {{champ:Jayce}}",
    "Weak early champions who scale, like {{champ:Gnar}}",
    "Squishy top laners she can all-in at level 2",
    "Teams that can't stop a split pusher"
  ],
  avoid: [
    "Tanky champions with armor and crowd control, like {{champ:Malphite}}",
    "Champions who block autos or out-sustain her, like {{champ:Jax}} and {{champ:Warwick}}",
    "Teams with lots of point-and-click crowd control",
    "Lanes where the enemy can keep the wave small"
  ],
  teammates: [
    { id: "LeeSin", why: "Strong early ganks help you snowball your lane." },
    { id: "Nautilus", why: "His crowd control lets you dive freely in teamfights." },
    { id: "Orianna", why: "Her shield and ultimate combo with your dashes into the enemy team." }
  ],
  teamNeeds: "Pick Irelia top when your team can play around a split pusher and has some crowd control for teamfights.",
  quiz: [
    {
      q: "The enemy top laner is Malphite. Is Irelia a good pick?",
      enemy: ["Malphite"],
      options: ["Yes, Malphite is slow", "No, his armor and ultimate shut down Irelia", "Yes, Irelia always wins top", "It doesn't matter"],
      answer: 1,
      explain: "Malphite's armor stacks reduce Irelia's damage, and his ultimate stops her dashes."
    },
    {
      q: "Why do most Irelia top players take Ignite instead of Teleport?",
      options: ["Teleport doesn't work in top lane", "The top quest gives you a free Unleashed Teleport anyway", "Ignite gives move speed", "Teleport has been removed"],
      answer: 1,
      explain: "Completing the top quest gives you Unleashed Teleport, so you can take Ignite for more kill pressure early."
    },
    {
      q: "The enemy top is Gnar. When should you all-in him?",
      enemy: ["Gnar"],
      options: ["Early, before he can transform into Mega Gnar", "Only late game", "Only when he's Mega Gnar", "Never"],
      answer: 0,
      explain: "Gnar is weak early in Mini form. Irelia should use her level 2 all-in to punish him."
    }
  ]
};

RA.champPicks.Taliyah = {
  blind: { safe: true, why: "Fairly safe to blind pick: her wave clear lets her farm safely, and she can roam in most matchups." },
  into: [
    "Champions with dashes who trigger her mines, like {{champ:Yasuo}}",
    "Immobile mages she can out-push and roam on, like {{champ:Azir}} and {{champ:Ryze}}",
    "Teams that need help in side lanes she can roam to",
    "Enemy teams that rely on dashes to engage"
  ],
  avoid: [
    "Assassins who dive her, like {{champ:Katarina}} and {{champ:Ekko}}",
    "Scaling mages who out-farm her, like {{champ:Veigar}}",
    "Teams with lots of long-range poke",
    "Teams where your wall could block your own engage"
  ],
  teammates: [
    { id: "Malphite", why: "His knock-up combos perfectly with your E mines and W." },
    { id: "Yasuo", why: "Your W knock-up enables his Last Breath." },
    { id: "Nidalee", why: "Your wall roams combine with her ganks to pressure every lane." }
  ],
  teamNeeds: "Pick Taliyah when your team has knock-ups or engage that combo with her E mines.",
  quiz: [
    {
      q: "The enemy mid is Yasuo. Why is Taliyah a good pick?",
      enemy: ["Yasuo"],
      options: ["Yasuo's dashes trigger Taliyah's E mines", "Yasuo can't dash", "Taliyah heals more", "Yasuo's Wind Wall can't block Q"],
      answer: 0,
      explain: "Yasuo dashes constantly, and every dash through Taliyah's E mines stuns him."
    },
    {
      q: "Which teammate combos best with Taliyah's E mines?",
      options: ["Malphite", "Soraka", "Twitch", "Teemo"],
      answer: 0,
      explain: "Malphite's knock-up throws enemies through the mines, stunning them."
    },
    {
      q: "The enemy mid is Katarina. What should Taliyah do?",
      enemy: ["Katarina"],
      options: ["Keep W + E ready for when she dashes in", "Push the wave without vision", "Walk forward to fight her", "Ignore her"],
      answer: 0,
      explain: "Katarina dives with daggers. Keeping your stun combo for her dash is your best defense."
    }
  ]
};

RA.champPicks["Taliyah:jungle"] = {
  blind: { safe: true, why: "Fairly safe in the jungle: her clear is fast and her wall lets her gank any lane." },
  into: [
    "Dashing junglers who trigger her mines, like {{champ:Vi}} and {{champ:Qiyana}}",
    "Slow early junglers she can invade, like {{champ:Amumu}}",
    "Lanes with crowd control she can combo with",
    "Teams that need an extra mage damage source"
  ],
  avoid: [
    "Assassin junglers who invade her, like {{champ:Zed}}",
    "Plant junglers who zone her camps, like {{champ:Zyra}}",
    "Tanky crowd-control junglers who win one-on-one",
    "Teams without frontline to protect her"
  ],
  teammates: [
    { id: "TwistedFate", why: "His global ultimate combines with your wall for map-wide ganks." },
    { id: "Gangplank", why: "His barrel and ultimate combos with your mines for strong teamfights." },
    { id: "Rakan", why: "His engage knocks enemies through your mines." }
  ],
  teamNeeds: "Pick Taliyah jungle when your laners have crowd control to follow your ganks and your team has a frontline.",
  quiz: [
    {
      q: "The enemy jungler is Vi. Why is Taliyah a good pick?",
      enemy: ["Vi"],
      options: ["Vi's dash triggers Taliyah's E mines", "Vi can't gank", "Taliyah heals more", "Vi has no crowd control"],
      answer: 0,
      explain: "Vi's dash is stopped by Taliyah's mines, making her ganks easy to counter."
    },
    {
      q: "What does the jungle quest give you?",
      options: ["Primal Smite, bonus gold and XP per large camp, and move speed in jungle/river", "A free Flash", "Extra mana", "A level cap of 20"],
      answer: 0,
      explain: "The jungle quest gives Primal Smite, +10 gold and +10 XP per large camp, and bonus move speed in the jungle and river."
    },
    {
      q: "The enemy jungler is Zed. What should Taliyah do?",
      enemy: ["Zed"],
      options: ["Ward your jungle entrances and stay near laners", "Invade his jungle alone", "Ignore him", "Never gank"],
      answer: 0,
      explain: "Zed can invade and kill Taliyah. Warding and staying near your laners keeps you safe."
    }
  ]
};
