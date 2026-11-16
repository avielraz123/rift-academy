window.RA = window.RA || {};
RA.champs = RA.champs || [];
RA.champRoles = RA.champRoles || {};
RA.champPicks = RA.champPicks || {};

RA.champs.push(

/* ------------------------------------------------------------------ HWEI */
{
  id: "Hwei",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Long-range artillery mage",
  summary: "Hwei is a painter-mage with ten spells. His Q, W and E each open a menu of three sub-spells: damage, utility or crowd control. In lane he pokes from very far away, and in fights he can set up a whole team with one well-placed control spell. He's hard to master, but no other mage gives you this many answers.",
  strengths: [
    "Huge range: Severing Bolt and Devastating Fire poke enemies from safety",
    "Nine basic spells mean you always have the right tool: damage, a shield, speed, a fear or a root",
    "Excellent wave clear with Molten Fissure, so you can push and move first to objectives",
    "Spiraling Despair is a huge teamfight ultimate that slows and damages a whole group"
  ],
  weaknesses: [
    "Very hard to learn: you have to pick the right sub-spell under pressure",
    "No dash, so assassins and divers who reach you can kill you fast",
    "Long cooldowns on each Subject: if you waste your crowd control, you're open",
    "Mana hungry early if you spam poke without thinking"
  ],
  abilities: {
    P: "Signature of the Visionary: hit a champion with two damaging spells and a mark appears under them that explodes shortly after. Your combos should always land two spells on the same target to get this free damage.",
    Q: "Subject: Disaster opens your damage spells. QQ Devastating Fire is a fireball that's great for poking and finishing. QW Severing Bolt is a very long-range strike that hits hardest on isolated or low-health targets, perfect for chip damage and executes. QE Molten Fissure sends a line of eruptions that slows; it's your main wave-clear and teamfight zone tool.",
    W: "Subject: Serenity opens your utility spells. WQ Fleeting Current gives you and allies speed along a path, for chasing or escaping. WW Pool of Reflection creates a zone that shields allies. WE Stirring Lights empowers your next attacks to restore mana and deal extra damage, so use it when last-hitting to stay full.",
    E: "Subject: Torment opens your crowd control. EQ Grim Visage throws a face that fears the first enemy hit. EW Gaze of the Abyss places an eye that roots enemies who are in it when it activates, great for zoning chokepoints. EE Crushing Maw pulls enemies toward the center of an area, perfect for grouping enemies before Molten Fissure or your ultimate.",
    R: "Spiraling Despair hits the first enemy champion, then grows into a painting that slows and damages everyone near them before exploding. Throw it at a frontliner standing next to the carries so the painting catches the whole group."
  },
  combos: [
    { name: "Safe poke", keys: "QW → QQ", note: "Severing Bolt from max range, then Devastating Fire to complete your Signature mark." },
    { name: "Pick combo", keys: "EQ → QQ → QW", note: "Fear one target with Grim Visage, then land both damage spells while they can't move." },
    { name: "Teamfight", keys: "EE → R → QE", note: "Crushing Maw groups enemies, Spiraling Despair slows them all, Molten Fissure finishes the zone." },
    { name: "Escape", keys: "WQ → EW", note: "Fleeting Current to run, then drop Gaze of the Abyss behind you to root chasers." }
  ],
  spikes: [
    "Level 3: all three Subjects unlocked, so you can poke, shield and control",
    "Level 6: Spiraling Despair makes you a huge teamfight threat",
    "First item ({{item:Blackfire Torch}}): big poke damage and mana for constant pressure",
    "Two items ({{item:Shadowflame}}): your bolts start finishing squishy targets",
    "Three items ({{item:Rabadon's Deathcap}}): every spell hits extremely hard"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions and level Q, E, W. Your job in lane is simple: farm safely and poke when the enemy walks up to last-hit. Severing Bolt is your best poke, and Devastating Fire right after completes your Signature mark. Use WE Stirring Lights on minions to refill mana.</p><p>Max Q first. Keep one crowd control spell ready at all times in case the jungler shows up: EW Gaze of the Abyss in the river brush is great for stopping ganks. You take {{spell:Flash}} and {{spell:Teleport}}, so you can play for farm and use Teleport to join fights in other lanes. {{guide:wave-management}} matters a lot here: shove with Molten Fissure, then move.</p>{{tip:Don't open with Grim Visage in lane unless your jungler is nearby. Saving your crowd control keeps assassins honest.}}",
    mid: "<p>After {{item:Blackfire Torch}}, you can shove mid fast with Molten Fissure and move first to dragons and Void Grubs. Your poke is strongest before objectives: chip enemies with Severing Bolt so they're too low to contest. Stay behind your frontline and use Gaze of the Abyss or Crushing Maw on chokepoints.</p><p>Teleport is a big tool: if the other side of the map fights, you can join with a full set of spells. Ward the routes assassins use to reach you, because you have no dash.</p>",
    late: "<p>Late game you're one of the best siege champions. Keep poking from range before fights start. When the fight begins, look for the moment enemies clump: Crushing Maw into Spiraling Despair can win the game. If divers jump on you, use Pool of Reflection and Grim Visage to survive. {{item:Zhonya's Hourglass}} is a great buy against assassins. Never face-check: one catch on you and your team loses their artillery.</p>"
  },
  tips: [
    "Say your combos out loud while practicing: Q = damage, W = utility, E = control",
    "Always try to land two damaging spells on the same champion to trigger your Signature",
    "Use Severing Bolt to finish low-health enemies who are running away",
    "Gaze of the Abyss in a brush or chokepoint is the best anti-gank tool you have",
    "Stirring Lights while last-hitting keeps your mana topped up in lane",
    "Throw your ultimate at a frontliner next to the carries, not at a lone target"
  ],
  matchups: {
    hard: [
      { id: "Katarina", tip: "Keep Grim Visage for when she jumps in; a fear stops her from resetting through your team." },
      { id: "Fizz", tip: "He dodges your poke with his pole. Bait it out first, then land Gaze of the Abyss where he lands." },
      { id: "Ekko", tip: "Don't waste control while his Parallel Convergence is ready. Poke him from max range and keep Zhonya's in mind." }
    ],
    easy: [
      { id: "Ryze", tip: "Out-range him with Severing Bolt; he has to walk up to hit you." },
      { id: "Galio", tip: "Poke him when he walks up to farm and push to stop him from roaming." },
      { id: "Mel", tip: "Play the range game and keep your crowd control for when she commits." }
    ]
  }
},

/* ------------------------------------------------------------------ DIANA */
{
  id: "Diana",
  roles: ["mid"],
  difficulty: "Easy",
  damage: "Magic",
  style: "Burst diver / assassin",
  summary: "Diana is a moon-powered diver who jumps on enemies, bursts them, and pulls the whole enemy team together with her ultimate. Her combo is simple and her damage is huge, so she's one of the best mid champions for learning how to all-in and win fights.",
  strengths: [
    "Simple, reliable combo: hit Q, then dash for free with E",
    "Moonfall pulls several enemies together for huge teamfight plays",
    "Pale Cascade gives a shield, so she trades well in melee range",
    "Strong at roaming and diving once she has level 6"
  ],
  weaknesses: [
    "Melee: long-range mages can poke her in lane",
    "If Crescent Strike misses, her E has a long cooldown and her combo falls apart",
    "Once she dives in, she can't get out, so a bad engage means death",
    "Crowd control and Zhonya's Hourglass shut her combo down"
  ],
  abilities: {
    P: "Moonsilver Blade: every third attack cleaves nearby enemies, and after casting a spell you get attack speed. Weave basic attacks between spells to get the cleave in trades and on waves.",
    Q: "Crescent Strike travels in an arc and marks enemies with Moonlight. It's the key to your whole kit, because Lunar Rush is free on Moonlit targets. Aim so the arc's end lands on the enemy.",
    W: "Pale Cascade gives you three orbiting spheres and a shield. Turn it on when you dash in so the spheres hit and your shield grows when the third sphere pops.",
    E: "Lunar Rush dashes to an enemy. If they have Moonlight from your Q, it has no cooldown. Hit Q, dash, and you can dash again to another Moonlit target, even a minion, to escape.",
    R: "Moonfall pulls all nearby enemies in and slows them, then deals big damage if you pulled a champion, more for every extra champion. Use it in the middle of the enemy team for the biggest effect."
  },
  combos: [
    { name: "Standard all-in", keys: "Q → E → W → AA → R", note: "Moonlight them, dash for free, shield up, auto, then Moonfall to finish." },
    { name: "Teamfight engage", keys: "Q → E → R → W", note: "Dash to a Moonlit target in the middle of the enemy team, then pull everyone with Moonfall." },
    { name: "Escape", keys: "Q (on minions) → E", note: "Moonlight a minion behind you and dash to it to get away." }
  ],
  spikes: [
    "Level 3: full Q-E-W combo for strong trades",
    "Level 6: Moonfall makes her all-in lethal and gives her great roams",
    "First item ({{item:Stormsurge}}): huge burst for picking off squishy targets",
    "Two items ({{item:Shadowflame}}): she can one-combo carries",
    "Three items ({{item:Zhonya's Hourglass}}): dive in, combo, then go golden to survive"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions, Q first. Use Crescent Strike to farm minions that are about to die and to poke the enemy when they walk up. Once you have Q-E-W, look for trades: hit Q, dash in with E, turn on W, auto, then walk away. You take {{spell:Flash}} and {{spell:Ignite}}, so with Ignite your all-ins at low health are deadly.</p><p>Against ranged mages, play near your minions and dodge poke until level 3. Don't dash in with E without Moonlight unless you're sure it kills: the cooldown is long.</p>{{warn:Don't use Lunar Rush as your opener on a champion without Moonlight. Missing your Q first is the most common way Diana loses trades.}}",
    mid: "<p>At level 6 you become a roaming threat. Shove the wave with Q and W, then walk to a side lane where an enemy is pushed up. Moonfall on two enemies is often a double kill. Fight around your power spikes: with {{item:Stormsurge}} you can assassinate squishy carries who are out of position.</p><p>Group with your team for dragons and Void Grubs. Your best play is flanking from fog of war, not walking into the front of the fight.</p>",
    late: "<p>Late game, your job is the engage: wait for the enemy to group up, then dive in with Q-E and pull as many as possible with Moonfall. With {{item:Zhonya's Hourglass}}, you can go golden after the combo and survive while your team follows up. Don't go in first if your team isn't close. Pick your moment: Diana is all about one big play.</p>"
  },
  tips: [
    "Always hit Q first so your E is free",
    "Use Moonfall in the middle of groups, not on a lone target, unless it's a sure kill",
    "Moonlight minions to make an escape path with E",
    "Roam after shoving at level 6, when your all-in is strongest",
    "Turn on Pale Cascade as you dash so the spheres hit and the shield grows",
    "Buy Zhonya's Hourglass when you need to survive after diving in"
  ],
  matchups: {
    hard: [
      { id: "Ekko", tip: "He's just as strong in short trades. Keep your shield for his Phase Dive and don't chase into Chronobreak." },
      { id: "Vladimir", tip: "His pool dodges your combo. Wait until he uses Sanguine Pool before you commit Moonfall." },
      { id: "Kassadin", tip: "Hit him hard before level 6, then respect his Riftwalk scaling and play with your jungler." }
    ],
    easy: [
      { id: "Malzahar", tip: "Break his passive shield with Q, then all-in. Watch for Nether Grasp." },
      { id: "Mel", tip: "Dodge her poke, wait for her key spells to be used, then dash in." },
      { id: "Qiyana", tip: "Trade back hard with your shield when she dashes in; you win extended fights." }
    ]
  }
},

/* ------------------------------------------------------------------ KASSADIN */
{
  id: "Kassadin",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Late-game blink assassin",
  summary: "Kassadin is a void walker who's weak early and becomes one of the scariest champions in the game late. His ultimate, Riftwalk, is a short teleport with a tiny cooldown at high levels. Survive the early game, and you'll blink onto enemy carries again and again.",
  strengths: [
    "Insane late-game scaling: at level 16, Riftwalk can be cast every few seconds",
    "Takes less magic damage, so he's great against mage-heavy teams",
    "Null Sphere interrupts channels and shields against magic damage",
    "Very hard to catch once he has his ultimate"
  ],
  weaknesses: [
    "One of the weakest early games: melee, short range, easy to bully",
    "Physical damage champions, especially AD assassins, beat him in lane",
    "Needs farm and time; if the game ends fast he can't do much",
    "Low impact before level 6 and his first items"
  ],
  abilities: {
    P: "Void Stone: you take less magic damage and can walk through units. This is why you do well against mages; against AD champions, play extra safe.",
    Q: "Null Sphere is a targeted orb that damages, interrupts channels and gives you a shield against magic damage. Use it to cancel enemy ultimates like {{champ:MissFortune}}'s Bullet Time, or to block a mage's combo.",
    W: "Nether Blade: your attacks deal bonus magic damage, and the active empowers your next attack and restores mana. Use it on minions that are about to die to farm safely and stay healthy on mana.",
    E: "Force Pulse charges up when spells are cast near you, then lets you blast and slow a cone. Use it on waves when it's charged, and to slow enemies you're chasing.",
    R: "Riftwalk teleports you a short distance and damages enemies where you land. Casting it again quickly costs more mana but deals more damage. At level 16 the cooldown is tiny, so you can blink in, kill, and blink out."
  },
  combos: [
    { name: "Basic burst", keys: "R → E → W → Q", note: "Blink onto the target, slow with Force Pulse, empowered attack, then Null Sphere." },
    { name: "Stacked Riftwalk", keys: "R → R → R", note: "Late game, chain Riftwalks for stacking damage, then blink out to safety." },
    { name: "Interrupt", keys: "Q", note: "Cancel channels like Katarina's or Miss Fortune's ultimate instantly." }
  ],
  spikes: [
    "Level 6: Riftwalk gives you mobility and roam potential",
    "First item ({{item:Rod of Ages}}): health, mana and sustain to survive the hard early game",
    "Two items ({{item:Archangel's Staff}}): huge mana scaling; it upgrades into Seraph's Embrace once fully stacked",
    "Level 11: Riftwalk cooldown drops a lot",
    "Three items ({{item:Malignance}}) and level 16: Riftwalk every couple of seconds, you're the strongest champion on the map"
  ],
  phases: {
    early: "<p>Start {{item:Dark Seal}} and a {{item:Refillable Potion}}. Your only goal before level 6 is to farm safely. Use the empowered Nether Blade to last-hit, and Null Sphere to secure minions you'd otherwise miss. Take {{spell:Flash}} and {{spell:Teleport}}: Teleport lets you go back to base and return without losing farm.</p><p>Don't trade with AD champions. Against mages, your passive and Null Sphere's shield let you farm more boldly. Ask your jungler for help if the lane is hard; you just need to survive.</p>{{tip:Max E first. Force Pulse is your wave clear and your slow, and it helps you farm under tower against lanes that push you in.}}",
    mid: "<p>After level 6 and {{item:Rod of Ages}}, you can start moving around with Riftwalk. Don't force fights yet: farm side lanes and jungle camps to reach your item spikes faster. Join fights from the side, blink onto a squishy target, combo, and blink out.</p><p>Watch the enemy assassins: they still beat you in this phase. Fight next to your team.</p>",
    late: "<p>Late game, at level 16 with three items, you're a monster. Wait for the enemy to use their crowd control, then Riftwalk onto their carry, kill them, and blink away. Don't stand still: Riftwalk is both your offense and defense. Against heavy crowd control, {{item:Zhonya's Hourglass}} keeps you alive after diving in.</p>"
  },
  tips: [
    "Survive the early game; Kassadin's power comes later",
    "Use empowered Nether Blade to last-hit and restore mana",
    "Null Sphere cancels channels: watch for enemy ultimates",
    "Riftwalk stacks cost more mana, so plan your chains",
    "Farm side lanes in the mid game to reach level 16 faster",
    "Ward to spot AD assassins coming for you"
  ],
  matchups: {
    hard: [
      { id: "Zed", tip: "He deals physical damage, so your passive doesn't help. Farm under tower and wait for your jungler." },
      { id: "Pantheon", tip: "He bullies you hard early. Give up some farm and survive to level 6." },
      { id: "Talon", tip: "Stay close to your minions and track his roams; ping your team every time he's missing." }
    ],
    easy: [
      { id: "Orianna", tip: "Your passive and Null Sphere's shield block her poke. Walk around her ball and farm safely." },
      { id: "Akali", tip: "She deals mostly magic damage. Trade back after she uses her shroud." },
      { id: "Locke", tip: "Play safe early, scale up, and outclass him late with Riftwalk." }
    ]
  }
},

/* ------------------------------------------------------------------ VEX */
{
  id: "Vex",
  roles: ["mid"],
  difficulty: "Easy",
  damage: "Magic",
  style: "Anti-dash burst mage",
  summary: "Vex is a gloomy yordle who punishes mobile champions. Every time an enemy dashes near her, she marks them, and her empowered spells fear and interrupt dashes. Her ultimate lets her dash onto someone and reset if they die. Easy to learn, and a nightmare for assassins and divers.",
  strengths: [
    "Hard counter to dashing champions: her passive fear interrupts them",
    "Simple, strong combo with a lot of burst",
    "Shadow Surge resets on a kill, so she can chain through teamfights",
    "Personal Space shields her when enemies jump in"
  ],
  weaknesses: [
    "Short range compared to artillery mages",
    "Struggles against long-range poke and immobile mages",
    "Her ultimate dash puts her in danger if the target doesn't die",
    "Needs her fear ready; without it she's much weaker against divers"
  ],
  abilities: {
    P: "Doom 'n Gloom: every so often your next basic ability fears enemies and interrupts dashes. When enemies dash near you, they get marked; consuming the mark deals extra damage and lowers the fear cooldown. Save the fear for when a diver jumps at you.",
    Q: "Mistral Bolt is a missile that speeds up mid-flight. It's your main poke and wave clear. Aim slightly ahead because it accelerates.",
    W: "Personal Space gives you a shield and damages enemies around you. Use it when someone dives on you, and with your passive fear ready, it's an instant answer to assassins.",
    E: "Looming Darkness creates a zone that damages, slows and applies Gloom. Hit enemies with it first so your next spell consumes Gloom for bonus damage.",
    R: "Shadow Surge fires a missile that marks an enemy champion; recast to dash to them. If they die soon after you hit them, the ultimate is reset. Use it to finish low targets and chain kills in fights."
  },
  combos: [
    { name: "Standard burst", keys: "E → Q → W", note: "Gloom with Looming Darkness, then hit with Mistral Bolt and Personal Space to consume it." },
    { name: "Ultimate all-in", keys: "R → R → W → E → Q", note: "Mark, dash in, Personal Space as you land, then finish with E and Q." },
    { name: "Anti-dive", keys: "W (with fear ready)", note: "When an assassin dashes on you, Personal Space with passive up fears them in place." }
  ],
  spikes: [
    "Level 3: full combo and strong trades",
    "Level 6: Shadow Surge lets you dash in for kills and reset",
    "First item ({{item:Luden's Echo}}): more burst and wave clear",
    "Two items ({{item:Shadowflame}}): you can one-shot squishy carries",
    "Three items ({{item:Zhonya's Hourglass}}): survive after diving in with your ultimate"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions. Level E first, then Q and W. Use Mistral Bolt to poke and clear the wave. Your passive fear is your biggest weapon: when it's ready, the enemy can't safely dash at you. Take {{spell:Flash}} and {{spell:Ignite}} for kill pressure.</p><p>Against dashing champions like {{champ:Yone}} and {{champ:Akali}}, keep the fear ready and punish every dash. Against long-range mages, stay near your minions and wait for them to waste spells before you go in.</p>{{tip:Watch your passive. When it's ready, play forward and threaten; when it's down, play safer until it's back.}}",
    mid: "<p>At level 6, look for picks on low-health targets with Shadow Surge. If the target dies, you get the ultimate back and can chase the next enemy. Shove mid and roam to side lanes with your jungler, especially against divers who can't get near you.</p><p>Around objectives, stand close to your team: your fear stops enemies who try to dive your carries.</p>",
    late: "<p>Late game, your job is to stop dives and burst the enemy carries. Stay near your backline until divers commit, then fear them with Personal Space. Once the enemy has used their engage, Shadow Surge onto a low target and chain resets. {{item:Zhonya's Hourglass}} lets you survive after dashing in.</p>"
  },
  tips: [
    "Always know whether your passive fear is ready",
    "Gloom with E first so Q and W deal bonus damage",
    "Use Personal Space defensively when assassins jump on you",
    "Shadow Surge resets on kills: look for low targets to chain",
    "Lead Mistral Bolt slightly because it speeds up",
    "Pick Vex when the enemy team has lots of dashes"
  ],
  matchups: {
    hard: [
      { id: "Vladimir", tip: "He sustains through your poke and dodges with his pool. Bully him early before he scales." },
      { id: "Annie", tip: "Her stun beats your all-in. Watch her passive counter and stay out of range when it's ready." },
      { id: "Mel", tip: "Respect her range, wait for her spells, and only commit when your full combo is up." }
    ],
    easy: [
      { id: "Yone", tip: "Fear him when he dashes with E or Q3. He can't all-in you while your passive is ready." },
      { id: "Akali", tip: "Her dashes give you marks. Fear her when she comes out of the shroud to hit you." },
      { id: "Irelia", tip: "She dashes a lot. Punish every Bladesurge with your fear and burst." }
    ]
  }
}
);

/* ======================================================================
   OTHER ROLES
   ====================================================================== */

RA.champRoles["Hwei:bot"] = {
  difficulty: "Hard",
  damage: "Magic",
  style: "Artillery mage carry",
  summary: "Hwei bot is a lane bully who replaces the marksman with long-range spell poke. With a strong engage support, his crowd control makes the 2v2 deadly; later, his range and wave clear let him siege towers from far away. Pick him when you want a bot carry who controls fights instead of auto-attacking.",
  strengths: [
    "Out-ranges almost every marksman with Severing Bolt and Devastating Fire",
    "Grim Visage and Gaze of the Abyss set up easy kills for your support",
    "Fast wave clear lets your duo take turret plates and move first to dragon",
    "Teleport lets you return to lane or join fights anywhere"
  ],
  weaknesses: [
    "No dash: engage supports and divers can lock you down",
    "Weaker than marksmen at killing towers late without poke first",
    "Hard to play: wrong sub-spell choice in a 2v2 loses the lane",
    "Burst-heavy teams can kill you before you cast"
  ],
  abilities: {
    P: "Signature of the Visionary rewards landing two damaging spells. In bot lane, try to have your support's crowd control set up both hits so the mark explodes.",
    Q: "QW Severing Bolt is your main poke against marksmen walking up to last-hit. QQ Devastating Fire finishes the combo. QE Molten Fissure clears waves fast so you can crash and recall or move to dragon.",
    W: "WW Pool of Reflection shields both you and your support during the 2v2. WQ Fleeting Current helps your duo chase or escape. WE Stirring Lights keeps your mana high while farming.",
    E: "EQ Grim Visage fears the first enemy hit; use it right after your support engages. EW Gaze of the Abyss in the bot brush or under your tower stops dives. EE Crushing Maw pulls enemies together for your ultimate.",
    R: "Spiraling Despair is huge in bot lane because enemies stand close together. Hit the support standing next to the marksman and the painting catches both."
  },
  combos: [
    { name: "Support engage follow-up", keys: "EQ → QQ → QW", note: "When your support lands a stun, fear the target and finish with both damage spells." },
    { name: "2v2 lock", keys: "EE → R → QE", note: "Pull both enemies together, slow with your ultimate, and burn them with Molten Fissure." },
    { name: "Stop the dive", keys: "EW → WW", note: "Root the diver with Gaze of the Abyss and shield your duo with Pool of Reflection." }
  ],
  spikes: [
    "Level 2-3: with your support's engage, your crowd control makes all-ins deadly",
    "Level 6: Spiraling Despair can kill both enemies in a 2v2",
    "First item ({{item:Blackfire Torch}}): constant poke damage",
    "Two items ({{item:Liandry's Torment}}): long fights and tanky supports melt",
    "Three items ({{item:Shadowflame}}): your bolts finish marksmen"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and potions, level Q, E, W. You take {{spell:Flash}} and {{spell:Teleport}}, not Heal or Barrier: you trade a little safety for the ability to come back to lane fast and join fights. In lane, poke the marksman with Severing Bolt every time they walk up to last-hit. When your support engages, follow with Grim Visage.</p><p>The bot role quest gives you bonus gold and moves your boots to the quest slot, so you'll have an extra item slot later. Push with Molten Fissure to take plates, which are permanent now.</p>{{warn:Don't stand in front of your minions against engage supports like {{champ:Leona}} or {{champ:Nautilus}}. You have no dash; one hook or stun and you're dead.}}",
    mid: "<p>After {{item:Blackfire Torch}}, your duo can shove and move first to dragon. Poke the enemy team before the fight so they can't contest. Use Teleport to join top side fights or Rift Herald when bot lane is pushed.</p><p>Stay behind your frontline; your job is poke and control, not to take hits.</p>",
    late: "<p>Late game, siege with poke: hit enemies with Severing Bolt before towers. In teamfights, wait for the enemy engage, then root or fear the diver and land your ultimate on the clump. {{item:Zhonya's Hourglass}} helps against assassins. Never walk alone in side lanes without vision.</p>"
  },
  tips: [
    "Pair Hwei with engage supports like Leona and Alistar for easy kills",
    "Poke marksmen when they walk up to last-hit",
    "Use Teleport to join fights after you recall",
    "Keep Gaze of the Abyss ready against dives",
    "Push waves with Molten Fissure to take plates",
    "Spiraling Despair is extra strong in bot because enemies stand together"
  ],
  matchups: {
    hard: [
      { id: "Sivir", tip: "Her Spell Shield blocks your key spell. Bait it with poke before you throw crowd control." },
      { id: "Kaisa", tip: "She can dive you with her ultimate. Keep Gaze of the Abyss for when she dashes in." },
      { id: "Velkoz", tip: "He out-pokes you too. Play around your support's engage instead of trading poke." }
    ],
    easy: [
      { id: "Aphelios", tip: "He has no dash. Poke him hard and kill him with your support's engage." },
      { id: "Caitlyn", tip: "Out-range her with Severing Bolt; avoid walking over her traps." },
      { id: "Draven", tip: "Poke him off his axes and fear him when he steps up to catch one." }
    ]
  },
  supports: [
    { id: "Leona", why: "Her stuns let you land every follow-up spell." },
    { id: "Alistar", why: "His knock-up and stun set up your Grim Visage and ultimate." },
    { id: "Nami", why: "Her bubble and slows give you easy poke targets." }
  ]
};

RA.champRoles["Diana:jungle"] = {
  difficulty: "Medium",
  damage: "Magic",
  style: "Bruiser diver jungler",
  summary: "Diana jungle is a fast-clearing diver with Conqueror who ganks with a simple, deadly combo and wins teamfights with Moonfall. She builds tankier than mid Diana, so she can dive in and keep fighting. Pick her when your team needs a jungler who can engage on several enemies at once.",
  strengths: [
    "Fast, healthy clears thanks to her cleave passive",
    "Moonfall on several enemies wins teamfights and objective fights",
    "Strong ganks after level 3 with Q-E",
    "Bruiser build makes her harder to kill than mid Diana"
  ],
  weaknesses: [
    "Weak to invades early by strong duelists",
    "Ganks fail if Crescent Strike misses",
    "Needs items to fight well; falling behind hurts",
    "Crowd control stops her in the middle of the dive"
  ],
  abilities: {
    P: "Moonsilver Blade's cleave hits whole jungle camps. Weave attacks between spells to clear fast and stay healthy.",
    Q: "Crescent Strike marks every monster in a camp so you can E around. In ganks, throw it from fog of war so the enemy can't dodge it.",
    W: "Pale Cascade shields you while you clear and fight. Start it in the camp to lose less health.",
    E: "Lunar Rush is free on Moonlit targets. In ganks, hit Q then dash; to escape, Moonlight a monster or minion and dash to it.",
    R: "Moonfall pulls enemies in. In dragon or Baron fights, flank and pull the whole team together for your team's area damage."
  },
  combos: [
    { name: "Gank", keys: "Q → E → W → R", note: "From fog of war, Moonlight the laner, dash in, shield, and finish with Moonfall." },
    { name: "Clear", keys: "W → Q → E → AA", note: "Shield first, Moonlight the camp, dash in, then attack for cleaves." },
    { name: "Objective fight", keys: "Q → E → R → Flash", note: "Flank from the side, dash in, then pull as many enemies as possible." }
  ],
  spikes: [
    "Level 3: full combo for ganks",
    "Level 6: Moonfall makes every gank and skirmish deadly",
    "First item ({{item:Dusk and Dawn}}): sustained damage and attack speed for fights",
    "Two items ({{item:Riftmaker}}): healing and damage for long fights",
    "Three items ({{item:Zhonya's Hourglass}}): dive in, pull, then survive"
  ],
  phases: {
    early: "<p>Start {{item:Scorchclaw Pup}} and a potion, with {{spell:Flash}} and {{spell:Smite}}. Camps spawn at 0:55 (Gromp and Krugs at 1:07). A standard path is a full clear starting at the buff on the side you'll gank afterwards, then look for a gank or the Scuttle Crab at 2:55. Level Q, W, E.</p><p>The jungle role quest gives you Primal Smite, extra gold and XP from large camps, and bonus move speed in the jungle and river, so keep clearing efficiently. Gank lanes where the enemy is pushed up and has no {{spell:Flash}}: Q from the fog, E, W, auto. Read our {{guide:jungle-tracking}} guide to know where the enemy jungler is.</p>{{warn:Don't gank from the front of the lane where the enemy sees you coming. Diana's Q is easy to dodge when they're watching for it.}}",
    mid: "<p>After {{item:Dusk and Dawn}}, play around objectives: Dragon at 5:00, Void Grubs at 8:00, Rift Herald at 15:00. Show up 30-60 seconds before each spawn with vision. Use Smite to secure the objective at the end. In skirmishes, wait for the enemy to clump, then dash in with Moonfall.</p><p>Keep clearing between fights so you don't fall behind in gold.</p>",
    late: "<p>Late game you're the engage: flank from the side or from fog of war, then pull as many enemies as you can with Moonfall around Baron (20:00) and Elder Dragon. Don't go in before your team is close. Buy {{item:Zhonya's Hourglass}} to survive after the dive. Keep Smite for Baron and Elder.</p>"
  },
  tips: [
    "Start camps with W to save health",
    "Gank lanes where the enemy is pushed and has no Flash",
    "Throw Q from fog of war so it can't be dodged",
    "Moonfall is best in tight spaces like the dragon and Baron pits",
    "Use Smite only at the end of objectives",
    "Track the enemy jungler and be on the other side of the map"
  ],
  matchups: {
    hard: [
      { id: "Kindred", tip: "She out-duels you early. Avoid her side of the map and fight with your laners around." },
      { id: "Shyvana", tip: "She clears faster and fights well. Gank early instead of farming against her." },
      { id: "Volibear", tip: "He's tanky and strong early. Don't 1v1 him; fight in groups." }
    ],
    easy: [
      { id: "Zed", tip: "He's squishy. Dive him with your shield up and finish with Moonfall." },
      { id: "Rengar", tip: "Your shield blocks his burst. Fight him near your lanes." },
      { id: "Naafiri", tip: "Group fights favor you: pull her pack and her together with Moonfall." }
    ]
  }
};

/* ======================================================================
   WHEN TO PICK
   ====================================================================== */

RA.champPicks["Hwei"] = {
  blind: { safe: true, why: "Mostly safe: his range lets him farm against most mids, but assassins are dangerous." },
  into: [
    "Immobile mages he can out-range, like {{champ:Ryze}} or {{champ:Lux}}",
    "Melee mids who have to walk through his poke, like {{champ:Galio}}",
    "Teams that group up, where Crushing Maw and Spiraling Despair hit everyone",
    "Slow sieging games where his poke chips towers and enemies"
  ],
  avoid: [
    "Dash-heavy assassins like {{champ:Katarina}} and {{champ:Fizz}}",
    "Teams with lots of hard engage that reach him before he casts",
    "If you're still learning: he's one of the hardest mages to master"
  ],
  teammates: [
    { id: "Leona", why: "Her engage gives Hwei easy follow-up on every spell." },
    { id: "Amumu", why: "His ultimate groups enemies for Spiraling Despair." },
    { id: "Ornn", why: "A strong frontline protects Hwei while he pokes." }
  ],
  teamNeeds: "A frontline and engage to keep divers off Hwei while he pokes and controls.",
  quiz: [
    { q: "Enemy mid is Katarina. Is Hwei a good blind pick into her?", options: ["Yes, she can't dodge anything", "No, she can dash onto him and he has no escape", "Only if he takes Smite"], answer: 1, explain: "Hwei has no dash, so Katarina can reset through him. Keep Grim Visage ready if you do play it.", enemy: ["Katarina"] },
    { q: "Which Hwei spell is best for poking from max range?", options: ["Severing Bolt (QW)", "Pool of Reflection (WW)", "Crushing Maw (EE)"], answer: 0, explain: "Severing Bolt is his longest-range damage spell and hits hardest on isolated targets." },
    { q: "The enemy team groups tightly around objectives. Why does Hwei shine here?", options: ["His ultimate and Crushing Maw hit many enemies at once", "He's a tank", "He takes Smite"], answer: 0, explain: "Crushing Maw pulls enemies together and Spiraling Despair spreads to everyone near the first target." }
  ]
};

RA.champPicks["Hwei:bot"] = {
  blind: { safe: false, why: "Better as a counter-pick against immobile marksmen, and only with an engage support." },
  into: [
    "Immobile marksmen like {{champ:Aphelios}}, {{champ:Caitlyn}} and {{champ:Draven}}",
    "Lanes where your support has strong engage",
    "Enemy bot duos that stand close together"
  ],
  avoid: [
    "Spell-blocking marksmen like {{champ:Sivir}}",
    "Divers who reach you, like {{champ:Kaisa}}",
    "Teams that need a marksman to take towers late"
  ],
  teammates: [
    { id: "Leona", why: "Hard engage that sets up every spell." },
    { id: "Alistar", why: "Combo engage that makes your ultimate easy to land." },
    { id: "Nami", why: "Poke and slows that help you land spells." }
  ],
  teamNeeds: "An engage support and a team that doesn't rely only on your damage to take towers.",
  quiz: [
    { q: "Your support is Leona and the enemy bot is Aphelios. Is Hwei a good pick?", options: ["Yes, Leona's engage plus your crowd control kills the immobile Aphelios", "No, Aphelios out-ranges him", "Only with Smite"], answer: 0, explain: "Aphelios has no dash, and Leona plus Hwei can lock him down.", ally: ["Leona"], enemy: ["Aphelios"] },
    { q: "Which summoner spells does Hwei bot usually take this patch?", options: ["Flash and Teleport", "Flash and Heal", "Smite and Ghost"], answer: 0, explain: "Most Hwei bot players take Teleport to return to lane fast and join fights." },
    { q: "Why is Sivir a hard matchup for Hwei bot?", options: ["Spell Shield can block his key crowd control spell", "She's a tank", "She has more range than him"], answer: 0, explain: "Her Spell Shield blocks one spell, so bait it with poke first." }
  ]
};

RA.champPicks["Diana"] = {
  blind: { safe: true, why: "Fairly safe: she has a strong all-in against most mids, but long-range poke can bother her." },
  into: [
    "Immobile mages like {{champ:Malzahar}} and {{champ:Xerath}}",
    "Teams that clump up in fights, where Moonfall hits several enemies",
    "Squishy backlines she can dive",
    "Teams without much crowd control"
  ],
  avoid: [
    "Mobile duelists like {{champ:Ekko}}",
    "Champions who dodge her combo, like {{champ:Vladimir}}",
    "Heavy crowd control teams that stop her mid-dive"
  ],
  teammates: [
    { id: "Orianna", why: "Shockwave plus Moonfall is a huge teamfight combo." },
    { id: "Amumu", why: "Two area ultimates lock enemies down together." },
    { id: "MissFortune", why: "Bullet Time destroys everyone Moonfall pulls in." }
  ],
  teamNeeds: "Teammates with area damage to follow up when Diana pulls enemies together.",
  quiz: [
    { q: "Enemy team: Malzahar, Xerath, Jinx. Why is Diana a good mid pick?", options: ["They're immobile and she can dive them", "She out-ranges them", "They have no crowd control"], answer: 0, explain: "Immobile backlines are easy targets for Diana's Q-E all-in.", enemy: ["Malzahar", "Xerath", "Jinx"] },
    { q: "What makes Diana's Lunar Rush free?", options: ["Hitting the target with Crescent Strike first", "Using it at night", "Reaching level 6"], answer: 0, explain: "Lunar Rush has no cooldown on enemies marked with Moonlight from her Q." },
    { q: "Which ally works best with Diana's Moonfall?", options: ["Miss Fortune, for Bullet Time on grouped enemies", "A split pusher", "A champion with no area damage"], answer: 0, explain: "Moonfall pulls enemies together, so area damage like Bullet Time follows up perfectly." }
  ]
};

RA.champPicks["Diana:jungle"] = {
  blind: { safe: true, why: "Reasonably safe, but strong early duelists can invade her." },
  into: [
    "Squishy junglers like {{champ:Zed}} and {{champ:Rengar}}",
    "Teams that group in tight spaces around objectives",
    "Lanes with immobile enemies she can gank"
  ],
  avoid: [
    "Strong early duelists like {{champ:Kindred}} and {{champ:Volibear}}",
    "Fast farming junglers who out-scale her, like {{champ:Shyvana}}",
    "Heavy crowd control enemy teams"
  ],
  teammates: [
    { id: "Katarina", why: "Katarina resets through enemies Diana pulls together." },
    { id: "Malphite", why: "Two big area engages win teamfights." },
    { id: "Xayah", why: "Feathers hit everyone Moonfall groups up." }
  ],
  teamNeeds: "Lanes with area damage and some follow-up crowd control.",
  quiz: [
    { q: "Enemy jungler is Kindred. Should you play aggressively in the early game with Diana?", options: ["No, Kindred out-duels her early", "Yes, Diana always wins 1v1", "Only with Teleport"], answer: 0, explain: "Kindred is a hard early matchup. Play near your laners and avoid her side.", enemy: ["Kindred"] },
    { q: "When should Diana use Smite on an objective?", options: ["At the end, to secure the last hit", "At the start", "Never"], answer: 0, explain: "Save Smite for the final hit so the enemy can't steal it." },
    { q: "What's the best way to land Diana's Q in a gank?", options: ["Throw it from fog of war", "Walk in front of the enemy first", "Throw it at max range from your tower"], answer: 0, explain: "Coming from the fog means the enemy can't react to dodge Crescent Strike." }
  ]
};

RA.champPicks["Kassadin"] = {
  blind: { safe: false, why: "Better as a counter-pick: AD assassins crush his early game." },
  into: [
    "Mage-heavy teams, since his passive reduces magic damage",
    "Mages like {{champ:Orianna}} and {{champ:Akali}}",
    "Slow, long games where he reaches level 16",
    "Channeling ultimates he can interrupt with Null Sphere"
  ],
  avoid: [
    "AD assassins like {{champ:Zed}} and {{champ:Talon}}",
    "Early lane bullies like {{champ:Pantheon}}",
    "Teams that want to end the game fast"
  ],
  teammates: [
    { id: "Ornn", why: "A tank frontline keeps the game long and safe for Kassadin." },
    { id: "Lulu", why: "Lulu keeps Kassadin alive while he dives." },
    { id: "Malphite", why: "Malphite's engage gives Kassadin time to blink in." }
  ],
  teamNeeds: "A team that can survive the early game and play for the late game.",
  quiz: [
    { q: "Enemy mid is Zed. Should you pick Kassadin?", options: ["No, Zed's physical damage bullies him early", "Yes, his passive blocks Zed's damage", "Only with Smite"], answer: 0, explain: "Kassadin's passive only reduces magic damage, and Zed deals physical damage.", enemy: ["Zed"] },
    { q: "When is Kassadin strongest?", options: ["Late game, around level 16", "Level 1", "Level 3"], answer: 0, explain: "At level 16, Riftwalk has a tiny cooldown and he can blink constantly." },
    { q: "Enemy team: Orianna, Lux, Annie. Why is Kassadin good here?", options: ["His passive reduces their magic damage", "He's a tank", "He out-ranges them"], answer: 0, explain: "Void Stone makes him take less magic damage, so mage teams struggle to kill him.", enemy: ["Orianna", "Lux", "Annie"] }
  ]
};

RA.champPicks["Vex"] = {
  blind: { safe: false, why: "Better as a counter-pick against dashing champions; she struggles against long-range mages." },
  into: [
    "Dash-heavy mids like {{champ:Yone}}, {{champ:Akali}} and {{champ:Irelia}}",
    "Teams full of divers and assassins",
    "Mobile junglers who rely on dashes to gank"
  ],
  avoid: [
    "Immobile, long-range mages who poke her",
    "Champions who beat her trades like {{champ:Vladimir}} and {{champ:Annie}}",
    "Teams with few dashes, where her passive does little"
  ],
  teammates: [
    { id: "Amumu", why: "His crowd control sets up Vex's burst." },
    { id: "Leona", why: "Her engage gives Vex easy targets for Shadow Surge." },
    { id: "Jinx", why: "Vex protects Jinx from divers." }
  ],
  teamNeeds: "Some engage, and a backline Vex can protect from divers.",
  quiz: [
    { q: "Enemy team: Yone, Akali, Irelia. Why is Vex a great pick?", options: ["Her passive fear punishes their dashes", "She out-ranges them", "She's a tank"], answer: 0, explain: "Dashes near Vex give marks, and her empowered spells fear and interrupt dashes.", enemy: ["Yone", "Akali", "Irelia"] },
    { q: "What happens if the target of Shadow Surge dies soon after you hit them?", options: ["Your ultimate resets", "You lose your shield", "Nothing"], answer: 0, explain: "Shadow Surge resets on a kill, so you can chain it through a fight." },
    { q: "Which mid is a hard matchup for Vex?", options: ["Vladimir", "Yone", "Irelia"], answer: 0, explain: "Vladimir sustains through her poke and dodges with his pool." }
  ]
};
