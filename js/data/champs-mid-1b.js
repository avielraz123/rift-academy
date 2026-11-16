window.RA = window.RA || {};
RA.champs = RA.champs || [];
RA.champRoles = RA.champRoles || {};
RA.champPicks = RA.champPicks || {};

/* Mid champions batch 1b: Sylas, Katarina, LeBlanc (+ Sylas jungle, top and support). Builds: research/research-batch1.json. */
RA.champs.push(

/* ------------------------------------------------------------------ SYLAS */
{
  id: "Sylas",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Ultimate-stealing battle mage",
  summary: "Sylas is a chain-swinging battle mage who dives into fights, heals off his enemies and steals their ultimates. He wins long, messy skirmishes rather than clean one-shots, and the better the enemy team's ultimates are, the stronger he gets. Pick him if you like brawling up close and outplaying people with their own tools.",
  strengths: [
    "Hijack lets you use the enemy's best ultimate against them, so he's strong into teams with big teamfight ultimates",
    "Kingslayer heals you more the lower your health is, so he wins drawn-out fights",
    "Two-part Abscond / Abduct gives you an engage and an escape in one ability",
    "Petricite Burst after every spell gives strong area damage for wave clear and fights"
  ],
  weaknesses: [
    "Short range: long-range mages can poke him out of lane before he gets in",
    "His power is in his combo; if Abduct (E2) misses, his engage is much weaker",
    "Point-and-click crowd control stops his dives cold",
    "Anti-heal (Grievous Wounds) cuts down the healing he relies on"
  ],
  abilities: {
    P: "Petricite Burst: every spell you cast stores a charge, and your next basic attack spins your chains around you for bonus magic damage to everyone nearby. Weave an auto between every spell. That rhythm (spell, auto, spell, auto) is where most of your damage and wave clear comes from.",
    Q: "Chain Lash throws two chains that cross at the target spot, slowing enemies, then explode at the crossing point after a short delay. Aim the crossing point where the enemy will be, not where they are. It's your best wave-clear tool and a safe poke when the enemy walks up to farm.",
    W: "Kingslayer lunges at an enemy, dealing damage and healing you when you hit a champion. It heals more the lower your health is, so save it for when you've taken damage: casting it at full health wastes most of the heal. It's also a short-range gap closer to finish a fleeing target.",
    E: "Abscond (first cast) is a quick dash; Abduct (recast) throws a chain that pulls you to the first enemy hit and knocks them up. Dash first to get a better angle, then throw the chain. Or keep the dash as your escape and lead with nothing but Q and autos. Abduct stops on minions, so throw it from the side, not through the wave.",
    R: "Hijack steals the target's ultimate so you can cast it yourself, using your own ability power. Steal big teamfight ultimates (like {{champ:Malphite}}'s, {{champ:Amumu}}'s or {{champ:Orianna}}'s) and save them for the real fight. In lane, you can steal your laner's ultimate and use it right away to win an all-in. The cooldown gets very short at higher ranks, so look for a new steal every fight."
  },
  combos: [
    { name: "Standard all-in", keys: "E → E2 → Q → AA → W → AA", note: "Dash in, chain onto the target, Chain Lash and auto between each spell for Petricite Burst. Kingslayer last, when you're lower and it heals more." },
    { name: "Safe poke", keys: "Q → AA → back off", note: "When the enemy walks up to last-hit, land Chain Lash and step forward for one empowered auto. Don't spend E unless you're going all in." },
    { name: "Hijack teamfight", keys: "R (steal) → E → E2 → R (stolen) → Q → W", note: "Steal a teamfight ultimate early in the fight, engage with Abduct, then cast the stolen ultimate on the group and finish with Q and W." },
    { name: "Flash Abduct", keys: "E → E2 → Flash", note: "If the chain lands from max range, Flash after it to close the last gap and land the knock-up plus combo before they react." }
  ],
  spikes: [
    "Level 3: all three basic spells; your E-Q-W combo with autos wins many short trades",
    "Level 6: Hijack. Steal your laner's ultimate for a kill threat, or keep looking for roams",
    "First item ({{item:Hextech Rocketbelt}}): an extra dash and burst; 26.20 made its active hit harder but gave less ability haste",
    "Two items ({{item:Riftmaker}}): you become a real frontline brawler who heals through fights",
    "Three items ({{item:Zhonya's Hourglass}}): dive the backline, then stasis while your team follows up"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions, take E first, then W, then Q, and max W first (W &gt; E &gt; Q). Your early game is about farming and taking short trades: Chain Lash and an empowered auto when the enemy steps up, then back off. You can't win a poke war against long-range mages like {{champ:Hwei}} or {{champ:Taliyah}}, so farm with Q and wait for them to misstep or for your jungler.</p><p>Against melee and short-range champions, play forward. Your W heal lets you trade back harder than most mids, especially once you're below half health. Track the enemy jungler: Sylas has a dash, but if you've used E to trade, you're very gankable.</p>{{tip:At level 6, look at what the enemy laner's ultimate does. If it wins fights (a big stun, an execute, a burst), steal it and use it on them right away.}}",
    mid: "<p>After {{item:Hextech Rocketbelt}}, Sylas gets much more dangerous. Push your wave, then roam to side lanes or the jungle: Rocketbelt's dash plus Abduct gives you a lot of reach for ganks. Group with your jungler for objectives, because Sylas shines in messy 2v2 and 3v3 skirmishes around Void Grubs, Herald and dragons.</p><p>Before each objective fight, look for a big ultimate to steal. A stolen {{champ:Malphite}} or {{champ:Amumu}} ultimate can start the whole fight for your team. Don't waste Hijack on a small ultimate if a better one is about to come into range.</p>{{warn:Don't dive in first against a team full of crowd control. Wait for the enemy to use their stuns on your frontline, then go in. Sylas is a follow-up diver, not a tank.}}",
    late: "<p>Late game you're a backline diver. With {{item:Riftmaker}} and {{item:Zhonya's Hourglass}} you can jump onto the enemy carries, chain them, and survive long enough to deal your damage. Your job in fights: steal the best enemy ultimate, flank, and hit the squishies when their peel is used up.</p><p>If the enemy builds magic resist, add {{item:Void Staff}}; if they're squishy, {{item:Rabadon's Deathcap}} or {{item:Shadowflame}} make your combo deadly. Keep Zhonya's ready for the moment their whole team turns on you, so your team can clean up while you're untargetable. See {{guide:teamfighting}} for flanking angles.</p>"
  },
  tips: [
    "Always auto-attack between spells: Petricite Burst is a big part of your damage",
    "Save Kingslayer (W) for when you're low: it heals more at low health",
    "Look at the enemy ultimates in the loading screen and plan which one you want to steal",
    "Dash with E first to find an angle around the minion wave, then throw Abduct",
    "You can't steal the same champion's ultimate again for a while, so pick your target wisely",
    "Buy {{item:Zhonya's Hourglass}} third (or earlier) against assassins who burst you after you dive",
    "Hijacked ultimates use your ability power, so stolen damage ultimates get scary as you build"
  ],
  matchups: {
    hard: [
      { id: "Taliyah", tip: "She out-ranges you and her E slows your approach. Farm safely, wait for her to use her E, and look for jungle ganks rather than walking into her." },
      { id: "Hwei", tip: "Long-range poke with lots of crowd control. Stay behind your minions, dodge his CC spells and only commit when he has used his control." },
      { id: "Swain", tip: "He drains through fights and his ultimate out-sustains you. Keep trades short and consider an early anti-heal component if he snowballs." }
    ],
    easy: [
      { id: "Fizz", tip: "He has to come close to trade. Trade back with Q, autos and a low-health W, and steal his shark ultimate at 6 to win the all-in." },
      { id: "Irelia", tip: "She's melee and loves long fights, but your heal and area damage match her well. Keep Abduct to interrupt her engage and punish when her Q resets run out." },
      { id: "Malphite", tip: "His ultimate is one of the best to steal. He can't trade with you early; poke with Q and autos, then use his own Unstoppable Force on him or his team." }
    ]
  }
},

/* ------------------------------------------------------------------ KATARINA */
{
  id: "Katarina",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Reset assassin",
  summary: "Katarina is a hyper-mobile assassin who blinks around the fight, picks up her daggers and resets her cooldowns with every takedown. One kill can turn into a pentakill if the enemy team is low and grouped. She's one of the strongest mids this patch, but she rewards precise dagger play and good timing far more than raw aggression.",
  strengths: [
    "Takedowns massively reduce her cooldowns, so she can chain kills in teamfights",
    "Shunpo can blink to any unit, ally or enemy, or to her own daggers, so she's very slippery",
    "Huge area damage when she picks up daggers in a group",
    "Excellent at roaming and cleaning up fights after her team engages"
  ],
  weaknesses: [
    "Death Lotus is a channel; any stun, knock-up or silence cancels it",
    "Weak in lane against ranged mages who can poke her before she gets in",
    "Very squishy: if she goes in before the enemy uses crowd control, she dies",
    "Needs kills and resets; a tanky team with lots of crowd control shuts her down"
  ],
  abilities: {
    P: "Voracity: when an enemy champion you've damaged recently dies, your remaining basic ability cooldowns drop dramatically. Picking up a dagger slashes everything around you for big magic damage. Your whole game is landing dagger pickups and turning one takedown into the next.",
    Q: "Bouncing Blade throws a dagger that bounces to nearby enemies, then lands on the ground behind the first target. Watch where it lands: Shunpo to that spot (or walk over it) to pick it up and slash everyone around it. Great for last-hitting from range and for poking when the enemy stands near the landing spot.",
    W: "Preparation gives a burst of move speed and tosses a dagger straight up above you; it lands a moment later. Use it at the start of a trade, then walk or blink back to the dagger as it lands for a pickup. The speed also helps you dodge skill shots or chase.",
    E: "Shunpo blinks you to a target (an enemy, an ally, a minion or a dagger) and strikes the nearest enemy. Blinking onto a dagger next to an enemy is how you deal damage. Picking up a dagger also lowers Shunpo's cooldown, so dagger pickups give you more blinks. Keep one Shunpo to escape when you can.",
    R: "Death Lotus channels a flurry of blades at the three closest enemy champions for massive damage. Since it's a channel, only use it when the enemy's crowd control is already used or you're about to finish someone. You can cancel it early with Shunpo to chase or escape once your passive resets the cooldown."
  },
  combos: [
    { name: "Lane trade", keys: "Q → E (to dagger) → AA → back", note: "Throw Bouncing Blade at the enemy, then Shunpo onto the dagger when it lands near them for the pickup slash. Walk back before they trade." },
    { name: "Full burst", keys: "W → E → Q → pick up daggers → R", note: "Preparation for speed and a dagger, Shunpo in, Bouncing Blade, then pick up both daggers before channeling Death Lotus to finish." },
    { name: "Reset chain", keys: "kill → E → Q → E (reset) → R", note: "After a takedown, your E and Q are almost back. Blink to the next target, throw a dagger, Shunpo again and keep spinning." },
    { name: "Escape", keys: "E (to ally / minion / ward)", note: "Shunpo to any unit away from danger. Keep a blink ready in teamfights for this." }
  ],
  spikes: [
    "Level 3: Q-W-E lets you trade with dagger pickups and threaten kills on low-health laners",
    "Level 6: Death Lotus turns any low-health enemy into a kill; roam to side lanes",
    "First item ({{item:Lich Bane}}): much stronger trades and burst",
    "Two items ({{item:Shadowflame}}): you one-shot squishies and start chaining resets",
    "Dark Seal stacks: your {{item:Dark Seal}} start (and {{item:Mejai's Soulstealer}} later) rewards takedowns"
  ],
  phases: {
    early: "<p>Start {{item:Dark Seal}} with a {{item:Refillable Potion}}, take Q first, then E and W, and max Q, then E (Q &gt; E &gt; W). Levels 1-2 are about last-hitting with Bouncing Blade and staying healthy. Ranged mages will poke you, so use your Q to farm from distance and don't walk up for nothing.</p><p>Trade when the enemy uses a key spell: Shunpo onto a dagger next to them, slash, auto and walk back. At level 3 you can start threatening all-ins on squishy laners. Keep track of the enemy jungler; if you blink in and they show up, you need Shunpo to get out.</p>{{tip:Use Shunpo on your own minions or wards to dodge and reposition, not only to engage. Kat players who always blink in first die a lot.}}",
    mid: "<p>After {{item:Lich Bane}}, Katarina is a roaming threat. Push your wave with Q and dagger pickups, then look at side lanes: a low-health bot or top laner is a free kill with your blink and Death Lotus. Every takedown also stacks your {{item:Dark Seal}}.</p><p>In skirmishes around dragon or Void Grubs, don't go in first. Wait for your team (or the enemy) to start the fight, let their crowd control get used, then Shunpo in and chain resets. See {{guide:roaming}} for when to leave lane.</p>{{warn:Don't channel Death Lotus into a full enemy team with their crowd control still up. One stun cancels your whole ultimate and you die for nothing.}}",
    late: "<p>Late game, Katarina is a clean-up assassin. Your team starts the fight, the enemy uses their crowd control, and then you blink onto their low-health carries and spin. One takedown resets your blinks, and you jump to the next target. {{item:Zhonya's Hourglass}} lets you survive the burst you take after going in.</p><p>Against tanky teams, the on-hit path with {{rune:Conqueror}} and {{item:Kraken Slayer}} can work better; against magic resist, buy {{item:Void Staff}}. If the enemy has point-and-click crowd control like {{champ:Malzahar}} or {{champ:Lissandra}}, {{item:Banshee's Veil}} stops the first one. Spend time in side lanes between fights and look for picks.</p>"
  },
  tips: [
    "Watch where your daggers land and plan your Shunpo to that spot",
    "Picking up a dagger lowers Shunpo's cooldown, so more pickups mean more blinks",
    "Never channel Death Lotus into unused crowd control",
    "Wait for the fight to start before going in: Katarina is a clean-up assassin",
    "Use Shunpo on allies, minions and wards to escape, not only to engage",
    "Roam after pushing your wave: side lanes are where Kat gets her first kills",
    "Buy {{item:Zhonya's Hourglass}} early against teams with lots of burst"
  ],
  matchups: {
    hard: [
      { id: "Vladimir", tip: "He sustains through your poke and his Sanguine Pool dodges your Death Lotus. Farm, roam to other lanes, and don't fight him alone after level 6 if he's healthy." },
      { id: "Kassadin", tip: "His magic shield and Null Sphere blunt your burst, and he scales hard. Pressure him before level 6 with Q pokes and keep roaming so he doesn't get free farm." },
      { id: "Galio", tip: "His taunt cancels Death Lotus and his magic shield soaks your damage. Farm safely and use your mobility to roam when he shoves." }
    ],
    easy: [
      { id: "Taliyah", tip: "She's immobile and can't run from your blinks. Dodge her E rocks (or blink over them) and all-in when she uses her W." },
      { id: "Locke", tip: "A newer champion who wants to fight with attacks up close. Trade with dagger pickups, keep your Shunpo to dodge his engage, and punish him when his dash is down." },
      { id: "Syndra", tip: "She has huge burst but is immobile. Bait her E stun with your W speed, then Shunpo in and spin when it's on cooldown." }
    ]
  }
},

/* ------------------------------------------------------------------ LEBLANC */
{
  id: "Leblanc",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Burst assassin / mage",
  summary: "LeBlanc is a slippery burst mage who dashes in, deletes a target and dashes back to where she started. Her Mimic ultimate repeats her basic spells, which gives her one of the fastest combos in the game. She bullies short-range mids, roams constantly and punishes anyone who's out of position.",
  strengths: [
    "Distortion dashes in and returns you to safety, so your trades are very hard to punish",
    "Mimic lets you cast a basic spell twice, giving huge burst",
    "One of the best roamers: strong level 2-3 pressure and fast kills on side lanes",
    "Mirror Image confuses enemies when you're low and helps you escape"
  ],
  weaknesses: [
    "Weak in long fights: once her combo is used she has little damage",
    "Falls off against tanky teams and in late-game grouped fights",
    "Ethereal Chains is a slow skill shot that's easy to dodge or break",
    "Point-and-click crowd control and magic shields shut down her burst"
  ],
  abilities: {
    P: "Mirror Image: when you drop below 40% health, you become invisible for a moment and create a clone that doesn't deal damage. Use the confusion: send the clone one way and walk the other, or make the clone keep chasing to bait enemy spells.",
    Q: "Sigil of Malice damages and marks the target; hitting them with another ability detonates the mark for extra damage. Always follow Q with another spell within a few seconds. If either part kills, you get mana and part of the cooldown back, so it's a great last-hitting tool too.",
    W: "Distortion dashes you to a spot and damages enemies around where you land; for a few seconds you can recast to return to where you started. This is the heart of LeBlanc: dash in, combo, dash back. Don't return too early, but always know whether your pad is still safe.",
    E: "Ethereal Chains shackles the first enemy hit; if they stay within the chain for 1.5 seconds, they're rooted and take extra damage. Throw it at the end of your combo or after they use a dash, when they can't walk out of the tether in time.",
    R: "Mimic casts a copy of one of your basic spells. Mimicked Q (R-Q) doubles your single-target burst, mimicked W (R-W) gives a second dash for extra range or escape, and mimicked E (R-E) gives a second chain. Pick the version you need: burst a squishy, catch a fleeing target, or escape."
  },
  combos: [
    { name: "Level 2-3 trade", keys: "W → Q → W (return)", note: "Distortion onto the enemy (the W damage detonates nothing yet), then Sigil of Malice, and dash back. Or Q first, then W into them to detonate the mark." },
    { name: "Max burst", keys: "Q → R (Q) → W → E", note: "Sigil, Mimicked Sigil (detonates the first and marks again), Distortion detonates the second mark, then chain them. Deletes squishies from level 6." },
    { name: "Long-range engage", keys: "W → R (W) → Q → E", note: "Double dash to reach a target far away, then Sigil and Chains. Use it to catch a carry who thinks they're safe." },
    { name: "Escape", keys: "W → R (W)", note: "Two dashes away, or dash out and use Mimic's return. Combine with Mirror Image to confuse chasers." }
  ],
  spikes: [
    "Level 2: W and Q give a strong trade; push the first wave to reach level 2 first",
    "Level 3: full combo with Chains; roam to side lanes",
    "Level 6: Mimic doubles your burst and gives you kill pressure on every squishy",
    "First item ({{item:Luden's Echo}}): faster wave clear and more burst",
    "Two items ({{item:Shadowflame}}): you one-shot squishy carries"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions, take W first, then Q, then E, and max W, then Q (W &gt; Q &gt; E). Push the first wave to hit level 2 before the enemy laner, then go for a W-Q trade and return. Short-range mids hate this: you trade and leave before they can answer.</p><p>Distortion is your escape as well as your engage. If you dash in and the enemy jungler appears, return immediately. Ward the river so you know when you can trade freely.</p>{{tip:After you push the wave at level 3, look at side lanes and river fights. LeBlanc's early roams are one of her biggest strengths.}}",
    mid: "<p>With {{item:Luden's Echo}} and level 6, LeBlanc is a pick-off machine. Clear your wave fast, then roam: double-dash with Mimicked W to catch a side laner, burst them with Q and R-Q, and chain the escape route. Every kill on a side lane spreads your lead around the map.</p><p>Around objectives, play from fog of war and flank. Look for an enemy carry or support who walks into a ward line alone, delete them, and dash back. Your team then fights 5v4. See {{guide:roaming}} and {{guide:vision-control}}.</p>{{warn:Don't go in on a tank or a frontline champion. LeBlanc's burst is made for squishies; wasting it on a tank leaves you with no damage and no escape.}}",
    late: "<p>Late game LeBlanc is weaker in big 5v5 fights, so play for picks. Push side waves, hide in brush near the enemy jungle, and catch anyone who walks into you. Before a big fight, try to delete one carry, then step back and let your team fight with the numbers advantage.</p><p>Build {{item:Zhonya's Hourglass}} to survive after you go in, {{item:Rabadon's Deathcap}} for more burst, {{item:Void Staff}} when they buy magic resist, and {{item:Banshee's Veil}} against point-and-click crowd control. Your Mirror Image and double dash make you very hard to catch, so keep moving between fights.</p>"
  },
  tips: [
    "Always follow Sigil of Malice with another spell to detonate it",
    "Push the first wave to get level 2 before your laner, then trade",
    "Don't use Distortion's return too early: wait until the enemy has used their answer",
    "Pick your Mimic: R-Q for burst, R-W for range or escape, R-E for a second chain",
    "Roam after every shove; LeBlanc's map pressure wins games",
    "Avoid long fights and tanks: kill one squishy, then leave",
    "Use Mirror Image to bait spells: make the clone walk somewhere convincing"
  ],
  matchups: {
    hard: [
      { id: "Vex", tip: "Her passive punishes your dashes with a fear. Bait her empowered spell before you Distortion in, or trade with Q only while her passive is up." },
      { id: "Malzahar", tip: "His passive shield blocks your opening damage and his ultimate locks you down. Hit him with a poke first to break the shield, and build {{item:Banshee's Veil}} if needed." },
      { id: "Kassadin", tip: "His magic shield blunts your burst and he scales much harder. Pressure him before 6 and roam to snowball elsewhere." }
    ],
    easy: [
      { id: "Orianna", tip: "She's immobile and relies on her ball. Dash past the ball, burst her and return before she can shield herself." },
      { id: "Syndra", tip: "Also immobile with no escape. Dodge or bait her E stun, then use your full burst while it's on cooldown." },
      { id: "Azir", tip: "His soldiers zone you, but he's squishy and slow to get going. Trade when his soldiers are on cooldown and roam often." }
    ]
  }
}

);

/* ================================================================== SYLAS: OTHER ROLES */

RA.champRoles["Sylas:jungle"] = {
  difficulty: "Hard",
  damage: "Magic",
  style: "Diving AP jungler",
  summary: "Jungle Sylas is one of the strongest junglers this patch. Petricite Burst clears camps quickly, Kingslayer keeps you healthy, and Abscond / Abduct gives you a long-range gank. Your stolen ultimates make your ganks and objective fights even scarier, especially with lanes that already have strong crowd control.",
  strengths: [
    "Fast, healthy clears thanks to Petricite Burst area damage and Kingslayer healing",
    "Abduct (E2) is a long-range gank tool that knocks up the target",
    "You see every enemy ultimate across the map and can steal the best one for teamfights",
    "Strong skirmisher around Void Grubs, Herald and dragons"
  ],
  weaknesses: [
    "Weak to early invades by strong duelists before you have your first item",
    "If Abduct misses, ganks often fail",
    "Point-and-click crowd control stops your dives",
    "Relies on {{item:Hextech Rocketbelt}} to really take over"
  ],
  abilities: {
    P: "Petricite Burst clears jungle camps quickly: cast a spell, auto, cast, auto. In ganks, the area damage also helps your laner kill the target.",
    Q: "Chain Lash hits the whole camp and slows; on ganks it slows the target so your laner can follow up. Aim the crossing point where the target is walking.",
    W: "Kingslayer heals more the lower your health is, so it keeps you healthy through camps. Save it for the big camps or the end of a gank.",
    E: "Abscond / Abduct is your gank tool: walk out of fog of war, dash in with Abscond, and throw Abduct at the target. The knock-up lets your laner land their spells. Keep one part to escape if the gank fails.",
    R: "Hijack is huge from the jungle: steal the enemy laner's ultimate during a gank, or save a teamfight ultimate like {{champ:Malphite}}'s or {{champ:Amumu}}'s for dragon fights."
  },
  combos: [
    { name: "Gank", keys: "E → E2 → Q → AA → W", note: "Come from fog, dash in, chain the target, Chain Lash to slow, auto for Petricite Burst, Kingslayer to finish." },
    { name: "Stolen-ultimate gank", keys: "R (steal) → E → E2 → R (stolen) → Q", note: "Steal the laner's ultimate, engage with Abduct and use their own ultimate on them." },
    { name: "Clear rhythm", keys: "Q → AA → E → AA → W → AA", note: "Weave autos between every spell for faster, healthier clears." }
  ],
  spikes: [
    "Level 3: full clear done; first gank or scuttle fight at 2:55",
    "Level 6: Hijack lets you gank with your target's ultimate",
    "First item ({{item:Hextech Rocketbelt}}): an extra dash for ganks and burst",
    "Two items ({{item:Riftmaker}}): you become a frontline brawler in objective fights",
    "Three items ({{item:Zhonya's Hourglass}}): dive the backline in teamfights"
  ],
  phases: {
    early: "<p>Start {{item:Scorchclaw Pup}} and a potion with {{spell:Smite}} and {{spell:Flash}}. Take E first, then Q, then W, and max W first (W &gt; E &gt; Q). Camps spawn at 0:55. A common path is a full clear starting at the buff closest to the lane you want to gank, then look at the Rift Scuttlers at 2:55.</p><p>Look for ganks on lanes with crowd control (a laner who can stun lets your Abduct and combo finish them). Avoid fighting strong early duelists in your jungle before your first item; you're healthier, not stronger, at that point. See {{guide:jungle-tracking}}.</p>{{tip:Use your jungle role quest: completing it upgrades Smite to Primal Smite and gives bonus gold, XP and movement speed in the jungle and river. Clear efficiently so you finish it early.}}",
    mid: "<p>After {{item:Hextech Rocketbelt}}, play around objectives. Void Grubs spawn at 8:00 and Rift Herald at 15:00, dragons at 5:00 and every 5 minutes after each kill. Sylas wins messy skirmishes, so bring your mid laner and fight around the pit.</p><p>Before each fight, decide which ultimate to steal. Stealing a teamfight ultimate (like {{champ:Sejuani}}'s or {{champ:Orianna}}'s) before the dragon fight gives your team a huge edge. Keep Smite for the objective itself.</p>{{warn:Don't start dragon fights by diving their backline alone. Wait for the enemy to use crowd control on your tank, then go in with Abduct.}}",
    late: "<p>Late game you're a backline diver with Zhonya's. Your team engages, the enemy uses their crowd control, and you chain onto their carries. Stolen ultimates give you a second engage for Baron (20:00) and Elder Dragon fights.</p><p>Against tanky teams, {{item:Bloodletter's Curse}} shreds magic resist for your whole team; against squishy teams, {{item:Rabadon's Deathcap}} or {{item:Shadowflame}} make you lethal. Always be near the next objective about a minute before it spawns.</p>"
  },
  tips: [
    "Weave an auto between every spell to clear faster",
    "Gank lanes that have crowd control: your combo follows up perfectly",
    "Save Kingslayer for when you're low; it heals more",
    "Steal a teamfight ultimate before every big objective fight",
    "Keep Smite for the objective, not for clearing",
    "Track the enemy jungler and avoid early duels before Rocketbelt",
    "Complete your jungle quest early for Primal Smite and extra movement speed"
  ],
  matchups: {
    hard: [
      { id: "Lillia", tip: "She kites and outpaces you in skirmishes. Don't chase her through the jungle; fight her near your laners where she can't run in circles." },
      { id: "Zac", tip: "His long-range engages and tankiness make him hard to burst. Steal his ultimate and avoid long 1v1s; burst his carries instead." },
      { id: "Briar", tip: "She's very strong in early duels. Avoid fighting her alone before your first item; ward her entrances and play near your lanes." }
    ],
    easy: [
      { id: "Shyvana", tip: "She farms and scales slowly. Invade her early with your lanes and contest her camps." },
      { id: "Hecarim", tip: "His ultimate is great to steal. Abduct interrupts his approach; keep it for when he charges in." },
      { id: "Qiyana", tip: "Her burst falls off against your heal. Chain her as she dives in and steal her ultimate for teamfights." }
    ]
  }
};

RA.champRoles["Sylas:top"] = {
  difficulty: "Hard",
  damage: "Magic",
  style: "Brawler battle mage on the island",
  summary: "Top Sylas is a sustain brawler who uses Kingslayer heals and Petricite Burst to out-trade other melee champions, then joins fights with Teleport and a stolen ultimate. He beats tanks who rely on their ultimates and struggles against hard-hitting bruisers who can out-damage his healing.",
  strengths: [
    "Kingslayer heals let you trade back hard in long melee fights",
    "Tanks with big ultimates (like {{champ:Malphite}}) give you a great steal",
    "Teleport plus Hijack gives a strong late entry into fights",
    "Petricite Burst clears waves quickly for split-pushing"
  ],
  weaknesses: [
    "Strong early bruisers like {{champ:Darius}} out-trade you before you have items",
    "Short range on a long lane makes you easy to gank",
    "Anti-heal cuts down your main way to win trades",
    "Needs {{item:Hextech Rocketbelt}} and {{item:Riftmaker}} to fight properly"
  ],
  abilities: {
    P: "Petricite Burst gives you strong area trades and fast wave clear. In the 1v1, always weave an auto after every spell.",
    Q: "Chain Lash slows and pokes; on the long top lane it's your safest way to trade and to farm under tower.",
    W: "Kingslayer is your trade winner: in long fights, cast it when you're low for a big heal. Against bruisers, save it until you've taken some damage.",
    E: "Abscond / Abduct lets you engage on your terms or escape a gank. Top lanes are long, so keep one part as an escape if you're pushed up.",
    R: "Steal your laner's ultimate in the 1v1 (some tank ultimates are great for engaging), or save a teamfight ultimate to use after you Teleport in."
  },
  combos: [
    { name: "Short trade", keys: "Q → AA → back", note: "Chain Lash and one empowered auto, then walk back before the enemy answers." },
    { name: "All-in", keys: "E → E2 → Q → AA → W → AA", note: "Commit when the enemy uses a key spell. Kingslayer at the end for the big heal." },
    { name: "Teleport entry", keys: "Teleport → R (stolen) → E → E2 → Q → W", note: "Teleport to a flank, cast the stolen teamfight ultimate on the group and dive in." }
  ],
  spikes: [
    "Level 3: full combo; you can win short trades against most tanks",
    "Level 6: Hijack; tank ultimates give you a strong engage",
    "First item ({{item:Hextech Rocketbelt}}): extra dash and burst",
    "Two items ({{item:Riftmaker}}): you start winning long fights against bruisers",
    "Levels 18-20: the top role quest raises your level cap to 20"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions with {{spell:Flash}} and {{spell:Ignite}}. Take E, W, Q and max W first. Top lane is a long, lonely lane, so manage your wave: against strong early bruisers like {{champ:Darius}} or {{champ:Renekton}}, let the wave come to you and farm under tower with Q. See {{guide:wave-management}}.</p><p>Against tanks like {{champ:Malphite}} or {{champ:Chogath}}, play forward. They can't trade with your healing and area damage early, and their ultimates are excellent to steal at level 6.</p>{{tip:The top role quest gives you a free Unleashed Teleport (or a big shield if you took Teleport already) and raises your level cap to 20. Farm well to complete it, then use Teleport to join fights on the other side of the map.}}",
    mid: "<p>With {{item:Hextech Rocketbelt}}, you can split-push or join fights. Push your wave, check where the next objective is, and Teleport in with a stolen ultimate when your team fights. If nobody comes to stop you, keep pressuring the side lane; plates no longer fall off, so every tower hit counts.</p><p>Don't Teleport into a fight that's already lost. Teleport early, before the fight starts, so your stolen ultimate can decide it. See {{guide:side-lanes}}.</p>{{warn:Don't take extended fights against bruisers who build anti-heal. Your healing is your win condition; if it's cut, look for short trades or play for teamfights instead.}}",
    late: "<p>Late game, play as a flanking diver. Wait for the enemy to use their crowd control on your frontline, then Abduct onto their carries and use your stolen ultimate. {{item:Zhonya's Hourglass}} gives you time for your team to follow.</p><p>Against tanks, {{item:Bloodletter's Curse}} shreds magic resist for the whole team; against heavy crowd control or AD bruisers, swap to {{item:Mercury's Treads}}. Between fights, keep the side lane pushed and use Teleport to join objective fights at 20:00 Baron and Elder Dragon.</p>"
  },
  tips: [
    "Play safe against strong early bruisers and win the game later",
    "Tanks with big ultimates are your favorite targets to steal from",
    "Save Kingslayer for when you're low in long trades",
    "Teleport into fights before they start, not after they're lost",
    "Use Chain Lash to farm safely under tower",
    "Ward the river; top lane is long and you have short range",
    "Buy {{item:Mercury's Treads}} against heavy crowd control or AD bruisers"
  ],
  matchups: {
    hard: [
      { id: "Darius", tip: "He out-trades you early and his bleed beats your heal. Farm under tower, avoid long fights and look for jungle help." },
      { id: "Riven", tip: "Her quick combos outpace your trades. Save Abduct to interrupt her engage and only trade when her dashes are down." },
      { id: "Renekton", tip: "He's very strong early. Give up some farm before level 6 and scale; his ultimate is decent to steal for fights later." }
    ],
    easy: [
      { id: "Malphite", tip: "His ultimate is one of the best to steal. Trade freely early and steal Unstoppable Force at 6." },
      { id: "Gnar", tip: "He's ranged early but weak to your all-in. Dodge his boomerang and engage when he's mini Gnar with no rage." },
      { id: "Chogath", tip: "He can't trade with your healing. Dodge his Q knock-up and steal his ultimate to execute him." }
    ]
  }
};

RA.champRoles["Sylas:support"] = {
  difficulty: "Hard",
  damage: "Magic",
  style: "Aggressive mage support",
  summary: "Support Sylas is a niche, weaker pick right now: it wins only about 46.7% of games on op.gg. He's still worth it when your team needs a second engage and the enemy has big ultimates to steal, or when you're very comfortable on him. He plays like a burst mage who dives the enemy bot lane with Abduct and Electrocute.",
  strengths: [
    "Abduct (E2) engages on the enemy bot lane and knocks up the target",
    "Strong level 2-3 all-ins with Electrocute",
    "Steals the enemy support's or ADC's ultimate in the 2v2",
    "Area damage helps your ADC win skirmishes"
  ],
  weaknesses: [
    "Weak win rate this patch: most matchups are below 50%",
    "Short range: engage supports like {{champ:Braum}} and {{champ:Leona}} beat him",
    "No heals or shields for your ADC",
    "Needs items to stay relevant while having support gold"
  ],
  abilities: {
    P: "Petricite Burst adds area damage to your trades; weave an auto after spells to help your ADC win the 2v2.",
    Q: "Chain Lash slows both enemy bot laners when they stand together; use it to poke and set up your ADC.",
    W: "Kingslayer heals you and is a short gap closer; use it to finish a low target or survive a dive.",
    E: "Abduct is your engage: from brush or a flank, dash and chain the enemy ADC, then knock them up for your ADC to follow.",
    R: "Steal the enemy support's ultimate (engage supports have great ones) or the ADC's damage ultimate, and use it in the 2v2 or save it for dragon fights."
  },
  combos: [
    { name: "Level 2 engage", keys: "E → E2 → AA → Q", note: "When you hit level 2 first, chain onto the enemy ADC and Chain Lash for an Electrocute proc while your ADC follows." },
    { name: "Peel", keys: "Q → E (away) → W", note: "Slow a diver with Q, reposition with Abscond and heal with Kingslayer." },
    { name: "Stolen-ultimate fight", keys: "R (steal) → E → E2 → R (stolen) → Q", note: "Steal the enemy support's engage ultimate and use it on their bot lane." }
  ],
  spikes: [
    "Level 2: E-Q engage with Electrocute; push for level 2 first with your ADC",
    "Level 6: Hijack; engage-support ultimates are great steals",
    "Support item upgrade: {{item:Celestial Opposition}} wins more than {{item:Zaz'Zak's Realmspike}} this patch",
    "First item ({{item:Hextech Rocketbelt}}): extra dash for picks and roams"
  ],
  phases: {
    early: "<p>Start {{item:World Atlas}} and two potions with {{spell:Flash}} and {{spell:Ignite}}. Your support quest upgrades your support item automatically as you complete it; this patch {{item:Celestial Opposition}} is the stronger upgrade, with {{item:Zaz'Zak's Realmspike}} for a more aggressive lane. The quest also gives 40g Control Wards and stores up to 2 in the quest slot.</p><p>Play for level 2 and 3 all-ins: chain onto the enemy ADC from brush and Chain Lash for an Electrocute burst. Against engage supports like {{champ:Leona}} or {{champ:Rell}}, back off and wait: they win the early all-in.</p>{{tip:Support Sylas works best with ADCs who follow up hard on your engage, like {{champ:Jhin}}, {{champ:MissFortune}} or {{champ:Jinx}}.}}",
    mid: "<p>After your support item upgrade and {{item:Hextech Rocketbelt}}, roam to mid with your jungler, and set up vision around dragon and Void Grubs. Your stolen ultimates give your team an extra engage in objective fights. Keep Control Wards in your quest slot and place them before each objective. See {{guide:vision-control}}.</p>{{warn:Don't pick Sylas support into hard engage supports like {{champ:Braum}}, {{champ:Rell}} or {{champ:Leona}}. They beat you in lane and in fights; pick a safer support instead.}}",
    late: "<p>Late game, you're a second engage and a ward-placer. Stay near your ADC until the enemy uses their crowd control, then dive their backline with a stolen ultimate. {{item:Zhonya's Hourglass}} and {{item:Shadowflame}} make your dives deadly but you'll have less gold than solo laners, so pick your fights.</p>"
  },
  tips: [
    "Only pick Sylas support when you're comfortable and the enemy has strong ultimates to steal",
    "Push for level 2 first and engage with Abduct",
    "Avoid hard-engage supports like Braum, Rell and Leona",
    "Take {{item:Celestial Opposition}} as your support item upgrade this patch",
    "Keep Control Wards stored in your quest slot and place them before objectives",
    "Steal the enemy support's engage ultimate and use it in teamfights"
  ],
  matchups: {
    hard: [
      { id: "Braum", tip: "His shield blocks your engage and his passive stuns you. Don't engage into him; poke with Q and wait for jungle help." },
      { id: "Rell", tip: "She out-engages you and is very tanky. Stay behind your ADC and keep Abscond to escape her engage." },
      { id: "Leona", tip: "She wins every early all-in. Play back and steal her ultimate at 6 for teamfights." }
    ],
    easy: [
      { id: "Neeko", tip: "She's squishy and needs to land spells. Dash in when she wastes her root and burst her." },
      { id: "Zyra", tip: "Her plants are weak to your area damage. Engage on her when her root is on cooldown." },
      { id: "Velkoz", tip: "He's immobile and squishy. Dodge his skill shots, chain him and burst him with Electrocute." }
    ]
  },
  supports: [
    { id: "Jhin", why: "His long-range root follows your Abduct engage perfectly." },
    { id: "MissFortune", why: "Her Bullet Time is devastating after you pull enemies together with your engage." },
    { id: "Jinx", why: "She follows up on kills and her traps catch enemies after your engage." }
  ]
};

/* ================================================================== WHEN TO PICK */

RA.champPicks.Sylas = {
  blind: { safe: false, why: "Better as a counter-pick. Long-range mages poke him out, but into melee champions and big ultimates he's great." },
  into: [
    "Teams with powerful teamfight ultimates you can steal, like {{champ:Malphite}}, {{champ:Amumu}} or {{champ:Orianna}}",
    "Short-range or melee mids he can out-sustain, like {{champ:Fizz}} or {{champ:Irelia}}",
    "Teams without much anti-heal or point-and-click crowd control",
    "Compositions that want messy, close-range skirmishes"
  ],
  avoid: [
    "Long-range poke mages who kite him, like {{champ:Taliyah}} and {{champ:Hwei}}",
    "Drain-tanks with anti-heal or more sustain, like {{champ:Swain}}",
    "Teams with lots of point-and-click crowd control that stops his dives"
  ],
  teammates: [
    { id: "JarvanIV", why: "Jarvan IV's engage traps enemies so Sylas can dive in and finish them." },
    { id: "Leona", why: "Leona's crowd control sets up Sylas's chains and keeps targets still for his combo." },
    { id: "Ornn", why: "A tanky frontline that starts fights, letting Sylas follow up instead of diving first." }
  ],
  teamNeeds: "Pick Sylas when your team has a frontline to start fights and the enemy has big ultimates worth stealing.",
  quiz: [
    { q: "The enemy team has Malphite, Amumu and Orianna. Why is Sylas a strong pick?", enemy: ["Malphite", "Amumu", "Orianna"], options: ["He can steal their big teamfight ultimates", "He has the longest range in mid", "He counters tanks with true damage", "He shields his allies"], answer: 0, explain: "Hijack lets Sylas use the enemy's best ultimates against them, and all three have game-changing teamfight ultimates." },
    { q: "When should you cast Kingslayer (W) in a long trade?", options: ["When you're low, because it heals more", "At the start, at full health", "Only on minions", "Only to escape"], answer: 0, explain: "Kingslayer heals more the lower your health is, so casting it late in a fight gets the most value." },
    { q: "The enemy mid is Taliyah. What's the problem for Sylas?", enemy: ["Taliyah"], options: ["She out-ranges and kites him", "She steals his ultimate", "She has more healing", "She's a tank"], answer: 0, explain: "Long-range mages like Taliyah poke Sylas and keep him away, so he struggles to get the close-range fight he wants." }
  ]
};

RA.champPicks.Katarina = {
  blind: { safe: false, why: "Risky. Ranged mages and tanky champions with crowd control can shut her down, so she's better picked after you see the enemy mid." },
  into: [
    "Immobile mages who can't run from her blinks, like {{champ:Syndra}} and {{champ:Taliyah}}",
    "Squishy teams with little crowd control, where her resets chain into multi-kills",
    "Compositions that group up in messy fights she can clean up",
    "Teams where your side has strong engage to start fights for her"
  ],
  avoid: [
    "Teams with lots of crowd control that cancels Death Lotus, like {{champ:Galio}} and {{champ:Malzahar}}",
    "Sustain mages who outlast her poke, like {{champ:Vladimir}}",
    "Magic-shield champions who blunt her burst, like {{champ:Kassadin}}"
  ],
  teammates: [
    { id: "Amumu", why: "His ultimate holds the whole enemy team still while Katarina spins in the middle." },
    { id: "Malphite", why: "His Unstoppable Force knocks up the enemy team, the perfect setup for Death Lotus." },
    { id: "JarvanIV", why: "Cataclysm traps enemies inside so they can't walk out of Katarina's ultimate." }
  ],
  teamNeeds: "Pick Katarina when your team has hard engage to start fights and soak up crowd control before she goes in.",
  quiz: [
    { q: "The enemy has Galio, Malzahar and Leona. Why is Katarina risky?", enemy: ["Galio", "Malzahar", "Leona"], options: ["Their crowd control cancels Death Lotus", "They're all marksmen", "They have no burst", "They're too slow"], answer: 0, explain: "Death Lotus is a channel, so a team full of stuns and suppression can cancel it and kill Katarina before she resets." },
    { q: "What happens when an enemy champion you recently damaged dies?", options: ["Your basic ability cooldowns are dramatically reduced", "You gain a shield", "Your ultimate resets instantly", "You turn invisible"], answer: 0, explain: "Voracity reduces Katarina's remaining basic ability cooldowns, letting her chain into the next target." },
    { q: "Your team picked Malphite and Amumu. Which mid pick fits best?", ally: ["Malphite", "Amumu"], options: ["Katarina", "Lux", "Ziggs", "Orianna"], optionChamps: true, answer: 0, explain: "Malphite and Amumu lock the enemy team down, letting Katarina spin her ultimate on the whole team. The others work too, but Kat gets the most out of it." }
  ]
};

RA.champPicks.Leblanc = {
  blind: { safe: true, why: "Mostly safe. Her Distortion return makes her hard to punish in lane, though dash-punishing mids like Vex are tough." },
  into: [
    "Immobile, squishy mages she can burst and escape from, like {{champ:Orianna}}, {{champ:Syndra}} and {{champ:Azir}}",
    "Teams with squishy carries she can pick off from fog of war",
    "Games where early roaming can snowball side lanes",
    "Compositions without much point-and-click crowd control"
  ],
  avoid: [
    "Mids who punish dashes or have shields, like {{champ:Vex}} and {{champ:Malzahar}}",
    "Scaling champions with magic shields, like {{champ:Kassadin}}",
    "Very tanky teams where her burst doesn't kill anyone"
  ],
  teammates: [
    { id: "Nautilus", why: "His hooks and roots keep targets still for LeBlanc's chains and burst on roams." },
    { id: "Elise", why: "An early-game jungler who joins LeBlanc's level 3 roams and dives." },
    { id: "Pyke", why: "A roaming support who catches targets LeBlanc can finish." }
  ],
  teamNeeds: "Pick LeBlanc when your team can play for picks and early skirmishes, and has a frontline for late-game fights.",
  quiz: [
    { q: "The enemy mid is Vex. Why is that hard for LeBlanc?", enemy: ["Vex"], options: ["Her passive fears enemies who dash", "She's a tank", "She heals her team", "She has true damage"], answer: 0, explain: "Vex punishes dashes with her passive, and LeBlanc's whole game is dashing with Distortion." },
    { q: "Which Mimic should you pick to reach a target far away?", options: ["R-W (second Distortion)", "R-Q", "R-E", "None, walk"], answer: 0, explain: "Mimicked Distortion gives a second dash, letting LeBlanc reach a target out of normal range." },
    { q: "The enemy team has Orianna, Jinx and Soraka. Which mid pick is best for picks?", enemy: ["Orianna", "Jinx", "Soraka"], options: ["Leblanc", "Malzahar", "Galio", "Lissandra"], optionChamps: true, answer: 0, explain: "Squishy, immobile targets are perfect for LeBlanc's burst and escape." }
  ]
};

RA.champPicks["Sylas:jungle"] = {
  blind: { safe: true, why: "Fairly safe. He's one of the strongest junglers this patch, but early duelists like Briar can punish him." },
  into: [
    "Enemy teams with big ultimates to steal for objective fights",
    "Farming junglers who can't punish his early clears, like {{champ:Shyvana}}",
    "Diving junglers whose engage you can interrupt with Abduct, like {{champ:Hecarim}}",
    "Lanes on your team with crowd control to follow up on ganks"
  ],
  avoid: [
    "Kiting junglers like {{champ:Lillia}} who out-run him",
    "Strong early duelists like {{champ:Briar}} who invade before his first item",
    "Very tanky engage junglers like {{champ:Zac}}"
  ],
  teammates: [
    { id: "Gangplank", why: "Gangplank's barrels and global ultimate combo with Sylas's skirmishing." },
    { id: "Sett", why: "A strong top laner who follows Sylas's ganks and frontlines fights." },
    { id: "Katarina", why: "Her resets clean up after Sylas starts fights with a stolen ultimate." }
  ],
  teamNeeds: "Pick jungle Sylas when your lanes have crowd control for ganks and a frontline for objective fights.",
  quiz: [
    { q: "Your mid is Katarina and top is Sett. Which jungler fits best?", ally: ["Katarina", "Sett"], options: ["Sylas", "Shyvana", "Karthus", "Lillia"], optionChamps: true, answer: 0, explain: "Sylas skirmishes with strong lanes and pairs well with Katarina's resets and Sett's frontline." },
    { q: "Which item do you buy against tanky teams as jungle Sylas?", options: ["Bloodletter's Curse", "Infinity Edge", "Thornmail", "Kraken Slayer"], answer: 0, explain: "Bloodletter's Curse shreds magic resist for the whole team, helping everyone kill tanks." },
    { q: "The enemy jungler is Briar. What should you do early?", enemy: ["Briar"], options: ["Avoid duels before your first item", "Invade her level 1", "Fight her alone at every camp", "Skip ganks"], answer: 0, explain: "Briar is very strong in early duels, so Sylas should play near his lanes until Rocketbelt." }
  ]
};

RA.champPicks["Sylas:top"] = {
  blind: { safe: false, why: "Not ideal. Strong early bruisers like Darius and Riven beat him, so pick him after seeing the enemy top." },
  into: [
    "Tanks with big ultimates to steal, like {{champ:Malphite}} and {{champ:Chogath}}",
    "Ranged top laners who can't handle his all-in, like {{champ:Gnar}}",
    "Teams where Teleport plus a stolen ultimate can decide fights"
  ],
  avoid: [
    "Strong early bruisers like {{champ:Darius}}, {{champ:Riven}} and {{champ:Renekton}}",
    "Teams with lots of anti-heal",
    "Lanes where you'll be ganked a lot without vision"
  ],
  teammates: [
    { id: "JarvanIV", why: "Jarvan IV ganks top well and his engage sets up Sylas's combo." },
    { id: "Orianna", why: "Her ball on Sylas makes his dives even stronger." },
    { id: "Leona", why: "A crowd-control support who sets up fights when Sylas teleports in." }
  ],
  teamNeeds: "Pick top Sylas when your team has another frontline and you can use Teleport to join fights.",
  quiz: [
    { q: "The enemy top is Malphite. Why is Sylas a good pick?", enemy: ["Malphite"], options: ["He can steal Malphite's ultimate", "Malphite has true damage", "Sylas is a tank", "Malphite is ranged"], answer: 0, explain: "Malphite's Unstoppable Force is one of the best ultimates to steal, and he can't trade with Sylas early." },
    { q: "The enemy top is Darius. What should top Sylas do early?", enemy: ["Darius"], options: ["Farm under tower and avoid long fights", "All-in at level 1", "Freeze in front of his tower", "Skip farming"], answer: 0, explain: "Darius wins early long trades, so Sylas plays safe and scales." },
    { q: "What does the top role quest give you?", options: ["Unleashed Teleport and a higher level cap", "Free boots", "A support item", "Primal Smite"], answer: 0, explain: "The top quest gives a free Unleashed Teleport (or a big shield if you took Teleport) and raises your level cap to 20." }
  ]
};

RA.champPicks["Sylas:support"] = {
  blind: { safe: false, why: "No. It's a niche pick with a low win rate this patch, so only pick it into the right matchup." },
  into: [
    "Squishy mage supports he can dive, like {{champ:Velkoz}}, {{champ:Zyra}} and {{champ:Neeko}}",
    "Enemy teams with strong ultimates to steal",
    "When your team needs a second engage and you're very comfortable on Sylas"
  ],
  avoid: [
    "Hard-engage supports like {{champ:Braum}}, {{champ:Rell}} and {{champ:Leona}}",
    "When your team needs heals, shields or lots of vision",
    "When you're not already a confident Sylas player"
  ],
  teammates: [
    { id: "Jhin", why: "His long-range root follows your engage." },
    { id: "MissFortune", why: "Her ultimate wrecks enemies after your engage." },
    { id: "Jinx", why: "She follows up and cleans up after your dives." }
  ],
  teamNeeds: "Pick support Sylas only when your team needs a second engage and you're facing a squishy enemy support.",
  quiz: [
    { q: "The enemy support is Braum. Should you pick Sylas support?", enemy: ["Braum"], options: ["No: Braum blocks and punishes his engage", "Yes: Braum is squishy", "Yes: Braum has no ultimate", "Only with Smite"], answer: 0, explain: "Braum's shield and passive stun beat Sylas's engage, and he's one of Sylas support's worst matchups." },
    { q: "Which support item upgrade wins more for Sylas this patch?", options: ["Celestial Opposition", "Zaz'Zak's Realmspike", "Bloodsong", "Dream Maker"], answer: 0, explain: "Celestial Opposition wins more than Zaz'Zak's Realmspike for Sylas support in the current data." },
    { q: "The enemy support is Vel'Koz. What's your plan?", enemy: ["Velkoz"], options: ["Dodge his skill shots and dive him with Abduct", "Stay back and poke", "Never engage", "Buy tank items"], answer: 0, explain: "Vel'Koz is immobile and squishy, so dodging his spells and diving him is Sylas support's best plan." }
  ]
};
