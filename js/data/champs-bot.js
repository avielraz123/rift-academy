window.RA = window.RA || {};
RA.champs = RA.champs || [];
RA.champs.push(

/* ------------------------------------------------------------------ ASHE */
{
  id: "Ashe",
  roles: ["bot"],
  difficulty: "Easy",
  damage: "Physical",
  style: "Utility marksman",
  summary: "Ashe is a simple, reliable marksman whose every attack slows. She's one of the best champions for learning the bot lane: no dashes to master, long range, and a global stun arrow that starts fights for your whole team.",
  strengths: [
    "Every basic attack slows, so enemies struggle to escape or chase her",
    "Enchanted Crystal Arrow is a long-range stun that can start a fight or save a teammate anywhere on the map",
    "Hawkshot gives free vision of brushes, objectives and the enemy jungle",
    "Easy to learn: most of her damage comes from attacking, not from hard combos"
  ],
  weaknesses: [
    "No dash or blink, so she relies on {{spell:Flash}} and positioning to survive",
    "Easy target for divers and assassins once her arrow is used",
    "Lower burst than other marksmen; she wins by steady damage, not big spikes",
    "Struggles against hyper-scaling marksmen if the game goes very long"
  ],
  abilities: {
    P: "Frost Shot slows every target you attack, and you deal extra damage to slowed targets. Even one auto-attack on a fleeing enemy makes them much easier to catch, so always tag the closest target when chasing.",
    Q: "Ranger's Focus builds stacks as you attack. At 4 stacks, press Q for a burst of attack speed and multi-arrow attacks. Save it for trades and fights instead of using it on minions when the enemy isn't nearby.",
    W: "Volley fires a cone of arrows that slows. It's your main poke in lane: use it when the enemy walks up to last-hit. It also checks brushes for hidden enemies and finishes off fleeing targets.",
    E: "Hawkshot sends a hawk that reveals an area. Scout the enemy jungle, Dragon, or a brush before walking into it. It recharges over time, so use it often instead of sitting on charges.",
    R: "Enchanted Crystal Arrow flies across the whole map and stuns the first champion it hits, longer the farther it travels. Fire it at the enemy carry to start a fight, at a diver to peel for yourself, or across the map to help a lane that's being ganked."
  },
  combos: [
    { name: "Lane poke", keys: "AA → W", note: "Auto-attack an enemy who walks into range, then Volley to stack slows and damage before stepping back." },
    { name: "Full trade", keys: "W → Q → AA AA AA", note: "Open with Volley to slow, then activate Ranger's Focus and keep attacking while they try to escape." },
    { name: "Arrow engage", keys: "R → W → Q → AA", note: "Stun with the arrow, slow everyone around the target with Volley, then unload Ranger's Focus. Tell your support first so they follow up." },
    { name: "Self-peel", keys: "R (point blank) → walk back → AA", note: "If an assassin jumps on you, fire the arrow at them at close range, then kite backward while your slows keep them away." }
  ],
  spikes: [
    "Level 2: Volley plus Ranger's Focus wins short trades against most marksmen",
    "Level 6: Enchanted Crystal Arrow turns any skill shot from your support into a kill",
    "First item ({{item:Hexoptics C44}}): extra range damage and crits make your trades far stronger",
    "Two items ({{item:Phantom Dancer}}): your attack speed and slows make you very hard to escape",
    "Three items ({{item:Infinity Edge}}): you become a real teamfight carry"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and a {{item:Health Potion}}, and take {{spell:Flash}} and {{spell:Barrier}}. Ashe has long range and a cheap slowing poke, so your lane plan is simple: farm safely, and whenever the enemy walks forward to last-hit, punish them with an auto-attack or Volley.</p><p>Level 2 comes after the first wave plus three minions of the second wave. Max W first: Volley's cooldown drops fast and it becomes your poke, your wave-clear and your brush-checker. Keep Ranger's Focus stacked for when your support engages.</p>{{tip:Use Hawkshot on the river brush before your jungler arrives for a gank. If it's empty, you can play forward with confidence.}}<p>Ashe doesn't have an escape, so ward the tri-brush and track the enemy jungler. Read {{guide:jungle-tracking}} if you're getting ganked a lot.</p>",
    mid: "<p>After your first back, aim to finish {{item:Hexoptics C44}}. When your outer tower falls, group with your team for Dragons and Void Grubs. Your ultimate is a game-changer here: a long-range arrow on the enemy jungler as they walk to an objective can win the fight before it starts.</p><p>Your bot role quest moves your boots into the quest slot, freeing a full item slot. Use the extra gold to buy items faster, not more consumables you don't need.</p>{{warn:Don't throw your arrow blindly into the fog. If it misses, the enemy knows your team has no engage for 60+ seconds and will start the fight on their terms.}}",
    late: "<p>In late fights, stand behind your frontline and attack the closest safe target. Your slows peel for you: an enemy bruiser who walks toward you gets slowed every second. Keep your arrow for either the enemy carry (to start) or a flanking assassin (to survive). Before Baron or Elder Dragon, use Hawkshot to check if the enemy is hiding near the pit.</p><p>Buy defensive items like {{item:Guardian Angel}} or {{item:Immortal Shieldbow}} if you're getting focused. See {{guide:teamfighting}} for positioning tips.</p>"
  },
  tips: [
    "Hold four Focus stacks before trades so Ranger's Focus is ready the moment your support engages",
    "Fire your arrow from far away: it stuns longer the farther it travels",
    "Use Hawkshot on the enemy jungle at the start of the game to see where their jungler began",
    "Volley can hit enemies hiding in brush and shows you if someone's there",
    "Communicate before arrowing: ping the target so your team is ready to follow",
    "Slows stack well with your support's crowd control: auto the target your support catches"
  ],
  matchups: {
    hard: [
      { id: "Twitch", tip: "Twitch ambushes from stealth. Keep wards in the bot brushes, save your arrow or Flash for when he appears, and don't walk forward alone." },
      { id: "KogMaw", tip: "He outranges and outscales you once his W is up. Poke him with Volley early and look for arrow kills with your support before he gets items." },
      { id: "Zeri", tip: "Zeri is very mobile and hard to arrow. Wait until she has used her dash before firing your ultimate, and use your slows to stop her chasing." }
    ],
    easy: [
      { id: "Ezreal", tip: "His poke is weaker than your steady autos at this patch. Step forward and auto him whenever he tries to last-hit; your slows stop him kiting." },
      { id: "Lucian", tip: "Lucian wants short range fights. Keep him at max range with slows and Volley, and save your arrow for when he dashes in." },
      { id: "Yunara", tip: "A newer marksman: keep the fight at your range, poke with Volley, and look for an arrow when she commits forward." }
    ]
  },
  supports: [
    { id: "Seraphine", why: "Her slows and long-range poke stack with yours, and her ultimate chains with your arrow." },
    { id: "Milio", why: "Range boost and shields let you poke safely and stay out of reach." },
    { id: "Senna", why: "A double ranged lane that pokes hard; you slow, she finishes." }
  ]
},

/* -------------------------------------------------------------- CAITLYN */
{
  id: "Caitlyn",
  roles: ["bot"],
  difficulty: "Medium",
  damage: "Physical",
  style: "Long-range lane bully",
  summary: "Caitlyn has the longest basic attack range of any marksman. She bullies the lane with free auto-attacks and traps, takes turrets early, and turns any enemy mistake into a big Headshot. A great pick if you like aggressive, safe-range laning.",
  strengths: [
    "Huge attack range: she can hit most marksmen without being hit back",
    "Traps and net combos give strong Headshots and lock down targets",
    "Excellent at taking turret plates and towers early",
    "Net (E) gives her a short escape"
  ],
  weaknesses: [
    "Her damage falls off a little in the late game compared to hyper-carries",
    "If she falls behind early, her lane bully plan doesn't work",
    "Weak against champions who can reach her with dashes or engage",
    "Ace in the Hole can be blocked by an enemy stepping in front"
  ],
  abilities: {
    P: "Headshot charges up as you attack (faster from brush). Every few attacks, your next one deals big bonus damage. Attacking a trapped or netted enemy gives an instant Headshot with doubled range. Save a charged Headshot for an enemy champion, not a minion.",
    Q: "Piltover Peacemaker is a long, slow line shot. Use it to push waves, finish fleeing enemies, or hit someone who is trapped or netted (they can't dodge it). Avoid spamming it in lane for no reason; it costs a lot of mana early.",
    W: "Yordle Snap Trap roots and reveals enemies who step on it. Place traps on top of an enemy hit by your support's crowd control so the trap triggers immediately. Put traps in brushes and chokepoints to protect yourself, and around objectives before fights.",
    E: "90 Caliber Net slows the target and knocks you backward. It's both your escape and a combo starter: net an enemy and you get an instant Headshot on them. Use it over thin walls to escape ganks.",
    R: "Ace in the Hole locks onto a target far away and fires a huge single shot. Use it to finish low-health enemies who escaped, or to deal big damage before a fight. Enemies can block it by stepping in the way, so fire when the target is alone."
  },
  combos: [
    { name: "Net Headshot", keys: "E → AA (Headshot) → Q", note: "Net hits, auto for an instant long-range Headshot, then finish with Peacemaker." },
    { name: "Trap combo", keys: "W (on CC'd target) → AA → E → AA → Q", note: "When your support stuns someone, place a trap under them, Headshot, net, Headshot again, and Q. Very strong burst." },
    { name: "Escape", keys: "E (backward over a wall)", note: "Aim the net toward the enemy so you hop away, ideally over terrain." },
    { name: "Execute", keys: "R", note: "Finish an escaping low-health enemy from far away after a fight." }
  ],
  spikes: [
    "Level 1-3: Your range lets you poke the enemy for free; win the lane early",
    "Level 6: Ace in the Hole finishes anyone who escapes with low health",
    "First item ({{item:Hexoptics C44}}): longer range damage and bonus range after takedowns",
    "Two items ({{item:Infinity Edge}}): Headshots start dealing huge damage",
    "Three items ({{item:Lord Dominik's Regards}}): you can shred tanky frontliners"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and two {{item:Health Potion}}s, with {{spell:Flash}} and {{spell:Barrier}}. Your goal is to make the enemy's life miserable: auto-attack them every time they walk up to last-hit, and keep Headshot charged by standing in brush.</p><p>Place traps in the lane brushes for safety, and under the enemy when your support lands crowd control. Push the wave and hit turret plates whenever the enemy has to back. Plates no longer fall off, but every early plate is still gold for you and pressure for your team.</p>{{tip:Charge Headshot faster by attacking from inside a brush. Walk out with a ready Headshot and hit the enemy marksman for a free chunk.}}<p>Caitlyn has a lot of range, but she's not invincible. If the enemy jungler is missing, back off. Read {{guide:trading}} to learn how to trade around enemy cooldowns.</p>",
    mid: "<p>With {{item:Hexoptics C44}}, take turrets with your team and help grab Dragons and Void Grubs. Before objectives, place traps around the pit: enemies often step on them while walking in.</p><p>Your bot quest moves your boots to the quest slot, so you'll have room for an extra damage item sooner. In mid-game fights, poke from max range and use traps and net to stop divers from reaching you.</p>{{warn:Don't net forward into the enemy team to chase a kill. Net is your only escape; if you use it to go in, you're easy to collapse on.}}",
    late: "<p>Late game, you're a long-range damage dealer. Stand behind your frontline, attack whatever is in range, and save net for self-defense. Lay traps in front of you before big fights, especially around Baron and Elder Dragon, so divers walk into them.</p><p>Buy {{item:Guardian Angel}} or {{item:Mercurial Scimitar}} if you're being targeted. Use your range to siege towers: you can often hit a tower without the enemy being able to reach you.</p>"
  },
  tips: [
    "Stand in brush to charge Headshot faster",
    "Place a trap on an enemy who is stunned or rooted: it triggers instantly",
    "Net plus auto-attack gives an instant Headshot from long range",
    "Use your range to hit the enemy every time they walk up to last-hit",
    "Keep a trap or two near you during sieges so divers get caught",
    "Fire Ace in the Hole only when no enemy can step in front of the target"
  ],
  matchups: {
    hard: [
      { id: "Ziggs", tip: "Ziggs outranges you with abilities and pushes fast. Dodge his bouncing bomb, catch waves under tower, and fight him only when your support can engage." },
      { id: "KogMaw", tip: "You win the very early lane, but he outscales you. Push your lead hard before his items come online and take plates whenever he backs." },
      { id: "Jhin", tip: "Jhin's W roots from far away. Stay out of his long range after he hits you, and avoid fighting when he has his 4th shot loaded." }
    ],
    easy: [
      { id: "Yunara", tip: "Use your range advantage: poke whenever she walks up, and trap her when your support lands crowd control." },
      { id: "Ezreal", tip: "Stay behind minions so his Q is blocked, and punish every time he steps up to poke. You win extended trades." },
      { id: "Vayne", tip: "Vayne has short range and hates being poked. Hit her every time she goes for a last-hit and deny her farm until she falls behind." }
    ]
  },
  supports: [
    { id: "Nami", why: "Her bubble and empowered attacks set up trap combos and make your early lane even stronger." },
    { id: "Blitzcrank", why: "A hook into a trap and net is often a guaranteed kill." },
    { id: "Thresh", why: "His hook and flay lock enemies in place for your traps." }
  ]
},

/* --------------------------------------------------------------- DRAVEN */
{
  id: "Draven",
  roles: ["bot"],
  difficulty: "Hard",
  damage: "Physical",
  style: "Snowball lane bully",
  summary: "Draven deals the most early damage of any marksman by catching his Spinning Axes. Win your lane, cash in your Adoration for huge bonus gold, and take over the game. He's high-risk, high-reward: hard to learn, but terrifying when you get ahead.",
  strengths: [
    "Extremely high early damage: he wins most trades and all-ins in lane",
    "Adoration cash-outs give him huge amounts of gold when he gets kills",
    "Whirling Death is a global-range ultimate for finishing fleeing enemies",
    "Stand Aside knocks enemies aside, helping him peel and chase"
  ],
  weaknesses: [
    "Catching axes takes a lot of practice and can drag you into bad positions",
    "If he dies, he loses half his Adoration stacks",
    "Weaker if he falls behind; he needs a lead to carry",
    "No real escape besides Blood Rush speed and {{spell:Flash}}"
  ],
  abilities: {
    P: "League of Draven: you gain Adoration when you catch a Spinning Axe or kill minions, monsters or towers. When you kill an enemy champion, you cash out all your Adoration for bonus gold. Dying loses half your stacks, so play carefully when you're holding a lot.",
    Q: "Spinning Axe empowers your next attacks. The axe bounces up and lands near you; catch it by walking into the landing circle to keep spinning. You can juggle two axes at once. Start with one axe in lane, and only spin two when you're comfortable.",
    W: "Blood Rush gives a burst of movement speed and attack speed. Catching an axe resets its cooldown. Use it to reach axes that land far away, to chase, or to escape.",
    E: "Stand Aside throws an axe that knocks enemies to the side and slows them. Use it to stop an enemy diving onto you, to interrupt dashes, or to slow a fleeing target.",
    R: "Whirling Death throws two huge axes across the map that deal damage to everyone they hit. You can recast to make them come back early, hitting enemies twice. Use it to finish low-health enemies anywhere, or in fights to hit multiple targets."
  },
  combos: [
    { name: "Lane all-in", keys: "Q → AA → W → AA (catch axe) → E → R", note: "Spin an axe, attack, Blood Rush to reach the axe and chase, knock them with E as they flee, finish with R." },
    { name: "Double ultimate hit", keys: "R → R (recast)", note: "Throw Whirling Death, then recast so the axes return and hit the same targets twice." },
    { name: "Peel", keys: "E → W (away)", note: "Knock a diver aside and Blood Rush away, catching an axe if you can." }
  ],
  spikes: [
    "Level 1: Spinning Axe already wins most level 1 trades",
    "Level 2-3: With Blood Rush and Stand Aside you have a full all-in",
    "Level 6: Whirling Death finishes anyone who escapes",
    "First item ({{item:Bloodthirster}}): massive damage plus healing in trades",
    "Two items ({{item:Hexoptics C44}}): crits and range damage make you deadly in fights"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and a {{item:Health Potion}}, with {{spell:Flash}} and {{spell:Barrier}}. Draven's whole plan is to win lane fast. Spin your axe and auto-attack the enemy marksman whenever they walk up. Every kill cashes out your Adoration, giving you a gold lead.</p><p>Practice catching axes in the practice tool first. Move slightly to the side of your target when attacking so axes land somewhere safe. Don't chase an axe into the enemy's tower or under their minions.</p>{{tip:Use your Spinning Axe on the last-hit of a minion to farm faster, but keep at least one axe ready when the enemy is close.}}{{warn:Don't spin two axes when you're new to Draven. Dropping them often costs you more damage than you gain.}}<p>Max Q first, then W. A strong first back for {{item:Bloodthirster}} components makes you hard to fight.</p>",
    mid: "<p>Once you've won lane, use your lead. Push your wave, take turrets, and look to fight around Dragons. Your bot quest moves your boots to the quest slot, so your gold goes straight into damage items.</p><p>Draven is strong in skirmishes: two or three auto-attacks with axes can kill a squishy target. Use Whirling Death across the map to finish enemies your team chases.</p>{{tip:When you have a big Adoration stack, play a bit safer. Dying loses half of it, and the enemy gets a nice bounty.}}",
    late: "<p>Late game, Draven is still a huge damage dealer, but you need to position carefully. Stay behind your frontline and only catch axes that land in safe spots. Let one drop if catching it means walking into the enemy team.</p><p>Buy {{item:Guardian Angel}} or {{item:Immortal Shieldbow}} if you're being focused. Use Stand Aside to peel divers. Read {{guide:teamfighting}} for target selection.</p>"
  },
  tips: [
    "Practice axe catching in the practice tool before ranked",
    "Move in small steps while attacking so your axes land close and safe",
    "Catching an axe resets Blood Rush: keep spinning to stay fast",
    "Cash out Adoration by getting kills, and play safe when your stack is big",
    "Recast Whirling Death to hit enemies twice",
    "Let an axe drop if catching it puts you in danger"
  ],
  matchups: {
    hard: [
      { id: "KogMaw", tip: "Win the lane early and hard; he scales past you. All-in at level 2-3 with your support before he gets his items." },
      { id: "Smolder", tip: "Smolder's damage scales with stacks. Pressure him early, deny his Q stacks by trading whenever he farms, and look to kill him before he gets strong." },
      { id: "Xayah", tip: "Xayah's root and untargetable ultimate make her hard to all-in. Avoid fighting near her feathers, and wait for her ultimate before committing." }
    ],
    easy: [
      { id: "Ezreal", tip: "He can't trade with your axes. Walk up and auto him whenever he pokes, and all-in when his E is on cooldown." },
      { id: "Kalista", tip: "You out-damage her in extended trades. Stay near your minions and punish her hops forward." },
      { id: "Yunara", tip: "Your early damage is much higher. Trade aggressively with spinning axes before she reaches her item spikes." }
    ]
  },
  supports: [
    { id: "Janna", why: "Shields and peel keep you alive while you catch axes." },
    { id: "Thresh", why: "His hook sets up your all-in, and his lantern saves you when you go too deep." },
    { id: "Blitzcrank", why: "Each hook is a guaranteed axe-filled all-in." }
  ]
},

/* --------------------------------------------------------------- EZREAL */
{
  id: "Ezreal",
  roles: ["bot"],
  difficulty: "Hard",
  damage: "Physical",
  style: "Mobile skill-shot marksman",
  summary: "Ezreal is a skill-shot marksman who deals most of his damage with abilities instead of basic attacks. His blink makes him safe, and he pokes from long range. He's hard to master because you have to land Mystic Shot over and over, but he's one of the safest marksmen when played well.",
  strengths: [
    "Arcane Shift is a short blink on a low cooldown, making him very safe",
    "Long-range poke with Mystic Shot",
    "Can play safely from a distance even when behind",
    "Trueshot Barrage is a global ultimate for finishing enemies and clearing waves"
  ],
  weaknesses: [
    "Lower damage than most marksmen, especially early (one of the lowest win rates this patch)",
    "Needs to land skill shots; missing Q means doing almost no damage",
    "Mana hungry early before {{item:Manamune}}",
    "Struggles against all-in lanes with hard crowd control"
  ],
  abilities: {
    P: "Rising Spell Force gives attack speed every time you hit an ability, stacking up to 5 times. Keep hitting Mystic Shot to stay at full stacks during fights.",
    Q: "Mystic Shot is your main tool. It deals damage, applies on-hit effects, and reduces all your cooldowns when it hits. Use it to last-hit minions you can't reach, poke enemies, and spam in fights.",
    W: "Essence Flux sticks a mark on an enemy champion or objective. Hit the mark with another ability or attack to detonate it for bonus damage and mana back. Combo W then Q for burst.",
    E: "Arcane Shift blinks you a short distance and fires a homing bolt. Use it to dodge skill shots, escape ganks, or reposition. Save it for defense in risky lanes.",
    R: "Trueshot Barrage is a huge global beam. Use it to finish low enemies, hit several enemies in a teamfight, or clear a wave from far away."
  },
  combos: [
    { name: "Poke", keys: "W → Q", note: "Land Essence Flux, then Mystic Shot to detonate it." },
    { name: "Burst", keys: "W → E → Q → AA", note: "Mark the target, blink toward them (the E bolt detonates W), then Q and auto. Only do this when it's safe." },
    { name: "Long-range finish", keys: "Q → R", note: "Hit a fleeing enemy with Q, then fire Trueshot Barrage to finish them." }
  ],
  spikes: [
    "Level 1-3: Poke with Q, but avoid fights against strong all-in lanes",
    "First item ({{item:Trinity Force}}): your Q procs Spellblade, a big damage jump",
    "Two items ({{item:Manamune}}): mana problems are gone and damage grows",
    "Three items ({{item:Spear of Shojin}}): low cooldowns let you spam Q in fights"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and two {{item:Health Potion}}s, with {{spell:Flash}} and {{spell:Barrier}}. Ezreal is weak early, so focus on farming and landing Mystic Shot on the enemy when they walk up to last-hit.</p><p>Use Mystic Shot to last-hit minions from far away when the enemy is pressuring you. Save Arcane Shift to escape ganks and all-ins. Buy {{item:Tear of the Goddess}} early to start stacking mana for {{item:Manamune}}.</p>{{tip:Q hits reduce all your cooldowns, including Arcane Shift. Landing Qs in a fight makes you safer.}}{{warn:Don't use E aggressively in lane. Without it, you're an easy target for ganks and all-ins.}}",
    mid: "<p>With {{item:Trinity Force}}, you start dealing real damage. Your bot quest moves your boots ({{item:Ionian Boots of Lucidity}}) to the quest slot, giving you room for more items.</p><p>Look to poke enemies before objectives, then join fights from max range. Use your ultimate to hit several enemies as they group at Dragon or Baron.</p>",
    late: "<p>Late game, play at max range and spam Mystic Shot. Your blink keeps you safe from divers. Don't step forward unless your team engages. Buy {{item:Maw of Malmortius}} or {{item:Guardian Angel}} if needed.</p><p>Use {{item:Serylda's Grudge}} against tanky teams. Read {{guide:teamfighting}} for positioning.</p>"
  },
  tips: [
    "Land Q to reduce all your cooldowns",
    "Use W then Q for a strong poke combo",
    "Save E for escaping, not chasing",
    "Fire your ultimate at groups for big damage",
    "Stand behind your minions so enemy skill shots hit them instead of you",
    "Be patient: Ezreal is strongest with two or three items"
  ],
  matchups: {
    hard: [
      { id: "Yasuo", tip: "Yasuo's Wind Wall blocks your Q, W and R. Wait for him to use it before poking, and keep distance." },
      { id: "Zeri", tip: "She's very mobile and hard to hit. Play safe early and focus on farming with Q." },
      { id: "Sivir", tip: "Her spell shield can block your W or Q. Bait it out first, and avoid long trades against her wave-clear." }
    ],
    easy: [
      { id: "Caitlyn", tip: "Even Ezreal's best matchups are close this patch. Dodge her Peacemaker and net, keep your E for her trap combos, and poke her with Q when she walks up to farm." },
      { id: "Yunara", tip: "Poke from range and dodge with E when she commits forward." },
      { id: "Corki", tip: "Both are poke champions. Land your Qs and dodge his packages and missiles." }
    ]
  },
  supports: [
    { id: "Leona", why: "Her engage sets up kills, so you can follow with W-Q and your ultimate." },
    { id: "Senna", why: "Both poke from range and make the lane safe." },
    { id: "Nami", why: "Her empowered attacks and heals make your trades much stronger." }
  ]
},

/* ----------------------------------------------------------------- JHIN */
{
  id: "Jhin",
  roles: ["bot"],
  difficulty: "Medium",
  damage: "Physical",
  style: "Utility burst marksman",
  summary: "Jhin is a marksman with a four-shot gun. Every fourth shot is a guaranteed crit that executes. He has long range, a root, and a huge ultimate that fires four shots across the screen. Great for players who like timing and precision.",
  strengths: [
    "Huge burst on the fourth shot, especially early",
    "Long-range root (W) for picks and setups",
    "Curtain Call shoots from very far for finishing enemies",
    "Strong in lane against weak early marksmen"
  ],
  weaknesses: [
    "Slow, fixed attack speed makes him weak against divers",
    "Reload windows leave him vulnerable",
    "No dash or escape",
    "Hard to play in long, drawn-out fights"
  ],
  abilities: {
    P: "Whisper fires four shots. The fourth always crits and deals bonus damage based on missing health. After a crit you get bonus move speed. Your attack speed doesn't increase, but you gain AD from attack speed and crit items instead.",
    Q: "Dancing Grenade bounces between up to four targets and deals more damage after each kill. Use it to last-hit and poke: bounce it off a low-health minion so it hits the enemy champion harder.",
    W: "Deadly Flourish fires a very long shot that roots if the target was recently hit by you, an ally, or a lotus trap. Use it to catch enemies after your support's crowd control, or after a fourth shot.",
    E: "Captive Audience places an invisible lotus trap that slows and damages. Put traps in brushes, behind fleeing enemies, or at objectives. They also give vision.",
    R: "Curtain Call turns your gun into a cannon that fires four huge shots across a long range. The last shot always crits. Use it to finish fleeing enemies or poke from far away before a fight."
  },
  combos: [
    { name: "Fourth shot burst", keys: "AA (4th) → Q → W", note: "Crit with your fourth shot, bounce Q, then W to root and follow up." },
    { name: "Pick", keys: "E → W → R", note: "Place a trap, root the target when they step on it, then fire Curtain Call." },
    { name: "Long-range finish", keys: "R (4 shots)", note: "Fire Curtain Call at fleeing enemies, aiming slightly ahead of them." }
  ],
  spikes: [
    "Level 2: The fourth shot and Q make short trades strong",
    "Level 6: Curtain Call lets you finish anyone in long range",
    "First item ({{item:Hubris}}): huge AD spike and more AD after takedowns",
    "Two items ({{item:Phantom Dancer}}): extra crit makes your attacks deadly",
    "Three items ({{item:Infinity Edge}}): your fourth shot and ultimate become massive"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Helm}} and a {{item:Health Potion}}, with {{spell:Flash}} and {{spell:Barrier}}. Jhin plays around his fourth shot. Use your first three shots on minions, then hit the enemy champion with the fourth for big damage.</p><p>Use Q off minions to poke. Root enemies with W when your support hits them. Place lotus traps in brushes to protect yourself from ganks.</p>{{tip:Count your shots. The fourth shot is shown on your HUD; trade when it's ready.}}{{warn:Don't fight while reloading. Jhin is very weak until his gun is loaded again.}}",
    mid: "<p>With {{item:Hubris}}, every takedown makes you stronger. Your bot quest moves your boots ({{item:Boots of Swiftness}}) to the quest slot, freeing an item slot.</p><p>Look for picks with W and traps around objectives. Use Curtain Call from far away to start fights or finish them.</p>",
    late: "<p>Late game, stay far back and use your long range. Your fourth shot and ultimate can delete squishy targets. Buy {{item:Guardian Angel}} if you're being focused.</p><p>Place traps around Baron and Dragon before fights. Read {{guide:vision-control}} to set up objectives.</p>"
  },
  tips: [
    "Save your fourth shot for enemy champions",
    "W roots only if the target was recently damaged by you, an ally, or a trap",
    "Place lotus traps in brushes for vision and safety",
    "Fire Curtain Call slightly ahead of moving targets",
    "Your move speed boost after a crit helps you reposition",
    "Use Q off low-health minions for bigger bounce damage"
  ],
  matchups: {
    hard: [
      { id: "KogMaw", tip: "He outscales you. Win early with fourth-shot trades and roots before his items come online." },
      { id: "Yasuo", tip: "His Wind Wall blocks W and R. Wait for him to use it, then shoot." },
      { id: "Twitch", tip: "He ambushes from stealth. Place traps in brushes and stay close to your support." }
    ],
    easy: [
      { id: "Ezreal", tip: "Your burst is much higher early. Punish him with fourth shots when he walks up to farm." },
      { id: "Caitlyn", tip: "Use your root and burst to punish her when she oversteps. Avoid trading at max range." },
      { id: "Varus", tip: "Dodge his Q and punish with your fourth shot when he steps forward." }
    ]
  },
  supports: [
    { id: "Senna", why: "Her poke and root set up your W, and both of you have long range." },
    { id: "Leona", why: "Her stuns let your W root follow up easily." },
    { id: "Alistar", why: "His knock-up combo gives you time to land your fourth shot and W." }
  ]
},


/* ----------------------------------------------------------------- JINX */
{
  id: "Jinx",
  roles: ["bot"],
  difficulty: "Medium",
  damage: "Physical",
  style: "Hyper-carry marksman",
  summary: "Jinx swaps between a minigun and a rocket launcher, and every takedown sends her into a frenzy of speed and attack speed. She's a classic hyper-carry: steady in lane, dangerous after two items, and capable of wiping whole teams late. A great pick if you love teamfights.",
  strengths: [
    "Some of the highest late-game damage in the game, single target (minigun) and area (rockets)",
    "Get Excited! lets her chain kill after kill in teamfights",
    "Zap! and Flame Chompers! give her a slow, a reveal and a root for peel",
    "Super Mega Death Rocket! is a global execute for finishing low enemies anywhere"
  ],
  weaknesses: [
    "No dash or blink: if a diver reaches her, she relies on {{spell:Flash}} and her team",
    "Weaker early than lane bullies like {{champ:Caitlyn}} or {{champ:Draven}}",
    "Rockets drain mana, so careless rocket use leaves her empty",
    "Slightly weaker this patch after base stat nerfs in 26.21, so she needs a clean lane"
  ],
  abilities: {
    P: "Get Excited! triggers when you help kill an enemy champion, epic monster or structure: you get a huge burst of move speed and attack speed. In a fight, the first takedown is the hardest; after that, stay in range of the next target and let the passive snowball.",
    Q: "Switcheroo! toggles between Pow-Pow (the minigun, which builds attack speed as you keep attacking) and Fishbones (rockets: more range and splash damage, but each shot costs mana). Farm and duel with the minigun; switch to rockets to poke, hit grouped enemies, or reach a target just outside your range.",
    W: "Zap! is a long-range shot that damages, slows and reveals the first enemy hit. Use it to poke when the enemy walks up, to slow someone you're chasing, or to set up your Chompers. It stops on the first unit, so aim around minions.",
    E: "Flame Chompers! throws three traps that arm after a moment and root champions who step on them. The easiest way to land them is on top of a target who is already stunned or slowed. Throwing them between you and a diver is your best self-peel.",
    R: "Super Mega Death Rocket! flies across the map, dealing more damage the farther it travels, plus bonus damage based on the target's missing health. Use it to finish low-health enemies after fights or on the other side of the map. In teamfights it also splashes nearby enemies."
  },
  combos: [
    { name: "Lane poke", keys: "Q (rockets) → AA → Q (minigun)", note: "Swap to rockets for one long-range auto on the enemy, then swap back so you don't burn mana." },
    { name: "Catch", keys: "W → E → AA AA", note: "Slow the target with Zap so they can't walk around the Chompers, throw them on top, then attack the rooted target." },
    { name: "Support follow-up", keys: "E (on CC'd target) → W → AA", note: "When your support stuns or hooks someone, drop Chompers right under them for a chain root." },
    { name: "Finisher", keys: "R", note: "Fire at a fleeing low-health enemy, ideally far from you: the rocket hits harder over distance." }
  ],
  spikes: [
    "Level 2: Zap plus a rocket auto gives safe poke",
    "Level 6: Super Mega Death Rocket threatens kills on any low enemy",
    "First item ({{item:Hexoptics C44}}): long-range damage and bonus range after takedowns, perfect with rockets",
    "Two items ({{item:Runaan's Hurricane}}): minigun attacks hit extra targets and shred groups",
    "Three items ({{item:Infinity Edge}}): you're a true hyper-carry who can win fights alone"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and a {{item:Health Potion}}, with {{spell:Flash}} and {{spell:Barrier}}. Jinx's early job is to farm well and not fall behind. Last-hit with the minigun, and when the enemy walks up to farm, swap to rockets for a free auto or fire Zap.</p><p>Max Q first for more minigun attack speed and rocket damage, then W. Your Chompers are best used defensively early: if the enemy support engages, throw them between you and them.</p>{{tip:Rockets splash. When enemies stand next to the minion you're last-hitting, use a rocket to hit both.}}{{warn:Don't leave rockets on while farming. Each rocket costs mana, and an empty Jinx can't trade or escape.}}<p>A clean lane with good CS is a win for Jinx. Read {{guide:last-hitting}} and {{guide:wave-management}} to keep your farm high.</p>",
    mid: "<p>After {{item:Hexoptics C44}}, start grouping for Dragons and turrets. Every structure you help destroy also triggers Get Excited!, so you move fast between objectives. Your bot role quest moves your boots to the quest slot, which gives you an extra item slot sooner.</p><p>In skirmishes, attack the closest safe target. The first takedown starts your passive; then move to the next enemy. Use your ultimate across the map to finish enemies your teammates are chasing.</p>{{tip:Before a fight at an objective, throw Chompers in the entrance the enemy will walk through.}}",
    late: "<p>Late game, Jinx is one of the strongest teamfight carries. Stand behind your frontline with rockets out, hitting whoever is in front. When someone dies, your passive kicks in: move forward carefully and keep shooting. Throw Chompers at your feet when an assassin comes for you.</p><p>Buy {{item:Guardian Angel}} or {{item:Mercurial Scimitar}} if you're being targeted, and {{item:Lord Dominik's Regards}} against tanky teams. Read {{guide:teamfighting}} for positioning and target selection.</p>"
  },
  tips: [
    "Farm with the minigun, poke with rockets, and don't forget to swap back",
    "Chompers land best on a target who is already stunned or slowed",
    "Get Excited! also triggers on towers and epic monsters: chain objectives together",
    "Rocket range lets you hit things from a safer distance in teamfights",
    "Fire your ultimate from far away for more damage",
    "Throw Chompers between you and divers instead of using them aggressively"
  ],
  matchups: {
    hard: [
      { id: "Twitch", tip: "He ambushes from stealth. Keep a ward in the lane brushes and hold Chompers for the moment he appears." },
      { id: "KogMaw", tip: "His range and scaling match yours and he wins early fights. Farm safely, and fight only when his W is down." },
      { id: "Sivir", tip: "Her spell shield blocks Zap or Chompers. Bait it out with one ability before throwing the important one." }
    ],
    easy: [
      { id: "Ezreal", tip: "Your auto-attack damage beats his poke. Swap to rockets and punish him every time he walks up." },
      { id: "Kaisa", tip: "Keep Chompers ready for when she dashes in with her ultimate; once she's rooted, she's easy to kill." },
      { id: "Caitlyn", tip: "Survive her early pressure with safe farming, then outscale her after two items." }
    ]
  },
  supports: [
    { id: "Braum", why: "His shield blocks projectiles and his stuns keep divers off you." },
    { id: "Blitzcrank", why: "A hook straight into Chompers is a guaranteed kill." },
    { id: "Thresh", why: "His hook sets up Chompers, and his lantern saves you when you're caught." }
  ]
},

/* ----------------------------------------------------------------- KAISA */
{
  id: "Kaisa",
  roles: ["bot"],
  difficulty: "Medium",
  damage: "Mixed",
  style: "Hybrid diving marksman",
  summary: "Kai'Sa is a mobile marksman who mixes physical and magic damage. Her abilities evolve as she buys items, and her ultimate lets her dive onto any enemy marked by her Plasma. She's the most picked bot laner this patch: flexible, strong in skirmishes, and great at finishing fights.",
  strengths: [
    "Very mobile: Killer Instinct dashes to marked enemies, and an evolved Supercharge makes her invisible",
    "Mixed physical and magic damage makes her hard to build defenses against",
    "Evolving abilities give her a power boost at each item step",
    "Excellent at picking off isolated targets and cleaning up fights"
  ],
  weaknesses: [
    "Short attack range for a marksman, so long-range lanes can bully her",
    "Weak early until her first item and her first evolution",
    "Diving too early with her ultimate often means dying",
    "Needs her team's crowd control to stack Plasma quickly"
  ],
  abilities: {
    P: "Second Skin: your attacks stack Plasma on enemies, and allies' immobilizing effects (stuns, roots, knock-ups) add stacks too. At full stacks, you deal a burst of magic damage based on the target's missing health. Buying items also evolves your basic abilities; the item shop shows how close you are to each evolution.",
    Q: "Icathian Rain fires a swarm of missiles at nearby enemies. If the target is alone (no minions or other enemies nearby), every missile hits them. Use it when the enemy laner steps away from their minions, or on a jungler alone in the river. Evolved Q fires more missiles.",
    W: "Void Seeker is a long-range missile that damages, reveals and marks enemies with Plasma. Use it to poke, check brushes, or mark a target you want to reach with your ultimate. Evolved W applies more marks and refunds cooldown on champion hits.",
    E: "Supercharge first gives you move speed while charging, then attack speed. Use it to catch up to a target, kite back, or reposition. When evolved, it also makes you briefly invisible, which can make enemies lose track of you.",
    R: "Killer Instinct dashes you to a spot near an enemy champion marked with Plasma and gives you a shield. Use it to dive onto a carry who is out of position, or as an escape by dashing toward a marked enemy far from danger."
  },
  combos: [
    { name: "Isolated trade", keys: "AA → Q → AA → E", note: "When the enemy laner steps away from minions, auto, Q for the full missile volley, then E for attack speed as you keep hitting." },
    { name: "Long-range dive", keys: "W → R → Q → AA AA", note: "Mark a target with Void Seeker, dash to them with Killer Instinct, then unload Q and autos while the shield protects you." },
    { name: "Escape", keys: "E (evolved) → move", note: "Go invisible and walk away, or into a brush, to break the chase." },
    { name: "Support follow-up", keys: "AA AA → Q", note: "When your support stuns someone, the stun adds Plasma. Two autos and a Q often trigger your passive burst." }
  ],
  spikes: [
    "Level 2-3: Isolated Q trades hit hard",
    "Level 6: Killer Instinct lets you reach marked targets from far away",
    "First item ({{item:Kraken Slayer}}): a big damage boost, especially in longer fights",
    "Two items ({{item:Guinsoo's Rageblade}}): attack speed and on-hit make your passive stack very fast",
    "Three items ({{item:Terminus}}): you cut through both armor and magic resist"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and a {{item:Health Potion}}, with {{spell:Flash}} and {{spell:Barrier}}. Kai'Sa's early game is about farming and taking good isolated trades. When the enemy marksman walks away from their minions to last-hit, Q them for the full missile volley.</p><p>Max Q first, then E. Use W to poke from long range and to check brushes. Work with your support: their crowd control stacks Plasma, so fight when they land an engage.</p>{{tip:Q hits much harder when the target is isolated. Wait for the enemy minions around them to die before casting it.}}{{warn:Don't use Killer Instinct to dive under the enemy tower early unless your jungler and support are ready to follow.}}",
    mid: "<p>Once you have {{item:Kraken Slayer}}, you become a strong skirmisher. Your bot quest moves your boots to the quest slot, which leaves more room for items and speeds up your evolutions.</p><p>Look for isolated enemies in the jungle and river. Hit them with W, then dash in with R when your team is close. Help your team take Dragons and Void Grubs, and use your mobility to reach fights quickly.</p>{{tip:Mark an enemy with W before a fight starts. It gives you a target for Killer Instinct the moment they step forward.}}",
    late: "<p>Late game, Kai'Sa is a cleanup carry. Let your frontline engage first, attack whatever is closest, and when the enemy uses their key crowd control, dash onto their marked carry. Your shield and evolved E help you survive the dive.</p><p>Buy {{item:Guardian Angel}} or {{item:Zhonya's Hourglass}} if you're being focused, or {{item:Nashor's Tooth}} for a more ability-focused build. Read {{guide:teamfighting}} for positioning.</p>"
  },
  tips: [
    "Use Q when the target is isolated for full damage",
    "Mark enemies with W from long range to set up Killer Instinct",
    "Check the shop to see how close you are to each evolution",
    "Your support's crowd control stacks Plasma: fight together",
    "Killer Instinct gives a shield: dive with it, or dash to a marked enemy to escape",
    "Wait for the enemy's key crowd control before diving"
  ],
  matchups: {
    hard: [
      { id: "Xayah", tip: "Her ultimate makes her untargetable and dodges your burst. Wait for it before you commit." },
      { id: "KogMaw", tip: "He outranges you and melts you once his W is up. Fight only when it's on cooldown, and look for dives with your jungler." },
      { id: "Zeri", tip: "She's mobile and hard to stick to. Farm safely and look for isolated Q trades after she uses her dash." }
    ],
    easy: [
      { id: "Ezreal", tip: "Punish him with isolated Q whenever he walks up alone to poke." },
      { id: "Jhin", tip: "Trade and all-in when he's reloading; his fixed attack speed can't match yours." },
      { id: "Caitlyn", tip: "Survive her early range, then dive her with R once you have your first item." }
    ]
  },
  supports: [
    { id: "Rell", why: "Her engage and crowd control stack Plasma fast and start your dives." },
    { id: "Blitzcrank", why: "A hook gives you an isolated target and a full Plasma burst." },
    { id: "Alistar", why: "His knock-up and stun lock enemies down for your combo." }
  ]
},

/* ---------------------------------------------------------- MISS FORTUNE */
{
  id: "MissFortune",
  roles: ["bot"],
  difficulty: "Easy",
  damage: "Physical",
  style: "Lane bully / teamfight carry",
  summary: "Miss Fortune is an easy marksman with strong lane trades and one of the most devastating teamfight ultimates in the game. Her Bullet Time can wipe a whole team if they're grouped. She got buffs in patch 26.21, and she's a great champion for learning the bot lane.",
  strengths: [
    "Strong early trades with Double Up bounces and Love Tap",
    "Bullet Time deals huge area damage to grouped enemies",
    "Simple kit that's easy to learn",
    "Strut gives her lots of move speed to reposition"
  ],
  weaknesses: [
    "No dash or escape",
    "Bullet Time is a channel: any stun or knock-up cancels it",
    "Vulnerable to divers and assassins",
    "Less late-game single-target damage than hyper-carries like {{champ:Jinx}}"
  ],
  abilities: {
    P: "Love Tap deals bonus physical damage the first time you attack a new target. Alternate between the enemy champion and minions in lane to trigger it as often as possible.",
    Q: "Double Up fires a shot that bounces to an enemy behind the first target. If the first target dies, the bounce is guaranteed to crit. The classic trick: Q a low-health minion standing in front of the enemy marksman so the bounce crits them.",
    W: "Strut gives you move speed when you haven't been hit recently. Activate it for a burst of attack speed. Every Love Tap shortens its cooldown, so switching targets keeps it up more often.",
    E: "Make It Rain reveals an area and showers it with bullets that damage and slow (its damage went up in 26.21). Use it to slow enemies before your ultimate, check brushes, or zone the enemy off a minion wave.",
    R: "Bullet Time channels waves of bullets in a cone in front of you, and each wave can crit (its crit damage went up in 26.21). Use it when enemies are grouped and the ones who could cancel it have used their crowd control."
  },
  combos: [
    { name: "Bounce poke", keys: "Q (on low minion)", note: "Kill a minion with Q so the bounce crits the champion behind it." },
    { name: "Lane trade", keys: "AA → Q → AA (new target)", note: "Auto the enemy for Love Tap, Q, then switch targets to Love Tap again." },
    { name: "Teamfight", keys: "E → R", note: "Slow the group with Make It Rain, then channel Bullet Time on them." },
    { name: "Surprise ult", keys: "Flash → R", note: "Flash to get the perfect angle on a grouped team, then channel. Only when their crowd control is down." }
  ],
  spikes: [
    "Level 2: Q bounce plus Love Tap trades are among the strongest in bot",
    "Level 6: Bullet Time can win any fight where the enemies group",
    "First item ({{item:Bloodthirster}}): big damage and healing for trades",
    "Two items ({{item:The Collector}}): executes low enemies and gives bonus gold per kill",
    "Three items ({{item:Infinity Edge}}): Bullet Time crits for massive damage"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Blade}} and a {{item:Health Potion}}, with {{spell:Flash}} and {{spell:Barrier}}. Miss Fortune bullies the lane with Q bounces. Whenever the enemy marksman stands behind a low-health minion, kill it with Q to crit them.</p><p>Max Q first, then W. Trade often with Love Tap: auto the enemy, then a minion, then the enemy again. Use E to slow an enemy your support catches, and to check brushes before walking into them.</p>{{tip:Watch minion health bars, not just the enemy. A low minion in front of the enemy is your best poke opportunity.}}{{warn:Don't channel Bullet Time when the enemy support still has their stun or knock-up. It will be cancelled, and you'll have wasted your ultimate.}}",
    mid: "<p>After {{item:Bloodthirster}}, group with your team for Dragons and Void Grubs. Your bot quest moves your boots ({{item:Boots of Swiftness}}) to the quest slot, giving you an extra item slot.</p><p>Look for chances to use Bullet Time when enemies group up in narrow places: jungle corridors, Dragon pit entrances, or under towers. Even a partial ultimate can win a fight.</p>{{tip:Bullet Time goes through walls. Channel it from fog or behind terrain for a surprise.}}",
    late: "<p>Late game, wait for enemies to group and for their crowd control to be used before channeling Bullet Time. Stand behind your frontline and keep attacking safely until then.</p><p>Buy {{item:Guardian Angel}} or {{item:Edge of Night}} if you're being focused, and {{item:Lord Dominik's Regards}} against tanks. Read {{guide:teamfighting}} for positioning tips.</p>"
  },
  tips: [
    "Switch targets to trigger Love Tap more often",
    "Kill a minion with Q to crit the bounce on the champion behind it",
    "Use E to slow enemies before your ultimate",
    "Channel Bullet Time from fog or behind walls for surprise",
    "Wait for enemy crowd control before ulting",
    "Strut gives you speed when you're not being attacked; use it to reposition"
  ],
  matchups: {
    hard: [
      { id: "KogMaw", tip: "He outscales you. Win early with Q bounces and push your lead before his items come online." },
      { id: "Jhin", tip: "He outranges you with W and roots after damage. Dodge it, and punish with Q bounces when he reloads." },
      { id: "Jinx", tip: "She outscales you. Win early, take turrets, and end before she gets three items." }
    ],
    easy: [
      { id: "Vayne", tip: "She has short range. Poke her with Q bounces every time she walks up to last-hit." },
      { id: "Ezreal", tip: "Out-trade him with Love Tap and Q; he can't match your early damage." },
      { id: "Varus", tip: "Dodge his Q and punish him with bounces when he steps forward." }
    ]
  },
  supports: [
    { id: "Rell", why: "Her engage groups enemies together for your Bullet Time." },
    { id: "Blitzcrank", why: "Hooks set up easy kills in lane." },
    { id: "Leona", why: "Her stuns keep enemies still during your ultimate." }
  ]
},

/* --------------------------------------------------------------- SMOLDER */
{
  id: "Smolder",
  roles: ["bot"],
  difficulty: "Medium",
  damage: "Mixed",
  style: "Scaling ability marksman",
  summary: "Smolder is a young dragon who grows stronger with every stack of Dragon Practice. His Super Scorcher Breath gains explosions, burns and eventually an execute as he stacks. Safe early, very strong late if he farms well. He got buffs in 26.20 and 26.22.",
  strengths: [
    "Huge late-game scaling with Dragon Practice stacks",
    "Flap, Flap, Flap lets him fly over walls to escape",
    "MMOOOMMMM! deals big area damage and can heal him",
    "Long-range abilities make him safe in lane"
  ],
  weaknesses: [
    "Weak early before he gets stacks",
    "Needs to farm a lot to scale; a lost lane hurts him badly",
    "Vulnerable to all-in lanes with hard crowd control",
    "Can be burst down if caught while Flap, Flap, Flap is on cooldown"
  ],
  abilities: {
    P: "Dragon Practice gives stacks when you hit champions with abilities or kill enemies with Super Scorcher Breath. Stacks increase the damage of all your basic abilities. Your stack count is your power level: keep an eye on it.",
    Q: "Super Scorcher Breath breathes fire on a target. As you stack Dragon Practice, it gains new effects: at 25 stacks it also damages enemies around your target, at 125 it sends extra explosions out behind the target, and at 225 it burns the target for true damage and executes low-health champions. Last-hit minions with it to stack as fast as possible.",
    W: "Achooo! sneezes a fireball that slows and explodes when it hits an enemy champion (the explosion was buffed in 26.22). Use it to poke, slow enemies, and earn Dragon Practice stacks.",
    E: "Flap, Flap, Flap lets you fly over terrain while bombarding the lowest-health enemy nearby. Use it to escape ganks, cross walls, or reposition in fights. It's your only escape, so think twice before using it to chase.",
    R: "MMOOOMMMM! calls your mom to breathe fire from above in a long line, dealing big damage and slowing enemies in the center. If you're in the center of the blast yourself, it heals you (buffed in 26.20). Use it on grouped enemies, or on yourself to survive."
  },
  combos: [
    { name: "Poke", keys: "W → Q", note: "Sneeze to slow, then breathe fire for damage and a stack." },
    { name: "Escape", keys: "E (over wall)", note: "Fly over terrain to escape ganks." },
    { name: "Teamfight", keys: "R → W → Q", note: "Call your mom on the enemy team, then sneeze and breathe fire on whoever is slowed." },
    { name: "Self-heal", keys: "R (aimed through yourself)", note: "Aim the ultimate so its center passes over you when you're low." }
  ],
  spikes: [
    "25 stacks: Q also hits enemies around your target, making wave clear much faster",
    "First item ({{item:Essence Reaver}}): mana and damage for stacking",
    "Two items ({{item:Black Cleaver}}): shreds armor for your whole team",
    "125 stacks: Q sends explosions out behind the target, hitting whole groups in fights",
    "Three items ({{item:Spear of Shojin}}): lower cooldowns and more ability damage",
    "225 stacks: Q burns for true damage and executes low-health champions"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Blade}} and a {{item:Health Potion}}, with {{spell:Flash}} and {{spell:Barrier}}. Smolder's early game is all about stacking Dragon Practice. Last-hit minions with Q for stacks, and poke with W when the enemy walks up and it's safe.</p><p>Max Q first, then W. Smolder is weak in early all-ins, so let your support protect you and don't take fights you don't need. Your goal is to reach 25 stacks quickly, which makes clearing waves much easier.</p>{{tip:Last-hit minions with Q to gain stacks faster. Every stack makes you stronger for the rest of the game.}}{{warn:Don't fight early against all-in lanes. Focus on farming, stacking and staying alive.}}",
    mid: "<p>After {{item:Essence Reaver}}, keep stacking and group for objectives. Your bot quest moves your boots ({{item:Gluttonous Greaves}}) to the quest slot, freeing an item slot for {{item:Black Cleaver}} sooner.</p><p>Use your ultimate in teamfights to hit groups, and keep farming side waves between objectives so you don't fall behind on stacks. Hitting champions with W and Q in fights also stacks, so take safe poke opportunities before objectives.</p>{{tip:At 125 stacks your Q sends explosions out behind the target. Aim it at the front enemy in a fight so the explosions hit the carries standing behind.}}",
    late: "<p>Late game, Smolder is very strong if he has stacks. Stay behind your team and spam Q and W at whoever is in range. Keep E ready to escape divers, and aim your ultimate so its center lands on you if you need to heal.</p><p>Buy {{item:Guardian Angel}} if you're being focused, or {{item:Infinity Edge}} for more damage. Read {{guide:teamfighting}} for positioning.</p>"
  },
  tips: [
    "Farm with Q to stack Dragon Practice",
    "Poke champions with W: it gives stacks too",
    "Use E to escape over walls; it's your only escape",
    "Your ultimate heals you if its center passes over you",
    "Play safe early; you scale late",
    "Track your stacks: 25, 125 and 225 are your big milestones"
  ],
  matchups: {
    hard: [
      { id: "Twitch", tip: "He ambushes from stealth. Ward brushes and keep E ready to escape." },
      { id: "KogMaw", tip: "He outranges you and scales well too. Farm safely and stack rather than trading." },
      { id: "MissFortune", tip: "She trades hard early. Stay away from low minions so her Q bounces can't crit you." }
    ],
    easy: [
      { id: "Ezreal", tip: "Out-farm him and stack Dragon Practice; you scale harder than him." },
      { id: "Kalista", tip: "Avoid her early trades and farm safely with Q; she falls off as you stack." },
      { id: "Vayne", tip: "She has short range. Poke her with W and Q when she walks up to farm." }
    ]
  },
  supports: [
    { id: "Thresh", why: "His lantern saves you, and his hook sets up kills." },
    { id: "Leona", why: "Her stuns let you land Q and W." },
    { id: "Nami", why: "Her heals and bubble help you farm and stack safely." }
  ]
},

/* ----------------------------------------------------------------- VAYNE */
{
  id: "Vayne",
  roles: ["bot"],
  difficulty: "Hard",
  damage: "Physical",
  style: "Hyper-carry duelist",
  summary: "Vayne is a short-range hyper-carry who deals true damage every third hit. She's weak early, but in the late game her mobility and tank-shredding damage can take over fights. Hard to play and punishing to mistakes, but very rewarding. She got small buffs in 26.20.",
  strengths: [
    "Silver Bolts' true damage every third hit shreds even the tankiest champions",
    "Tumble gives mobility, and during Final Hour it also turns her invisible",
    "Condemn stuns enemies against walls and pushes away divers",
    "Huge late-game carry and dueling potential"
  ],
  weaknesses: [
    "Very short attack range for a marksman",
    "Weak early game against long-range lanes like {{champ:Caitlyn}}",
    "Vulnerable to crowd control and burst",
    "Needs items to scale; a bad lane can leave her useless"
  ],
  abilities: {
    P: "Night Hunter gives move speed when moving toward nearby enemy champions. Use it to chase and to get into your short attack range. Final Hour makes it even stronger.",
    Q: "Tumble dashes a short distance and empowers your next attack. Use it to dodge skill shots, reposition, or stay in range while kiting. Its mana cost was lowered in 26.20, so you can Tumble more often in lane. During Final Hour, it also makes you invisible.",
    W: "Silver Bolts deals true damage based on the target's max health every third consecutive attack or ability on the same target. It's what lets Vayne beat tanks and bruisers. Always focus one target long enough to proc it.",
    E: "Condemn knocks an enemy back. If they hit a wall, they're stunned. Use it to peel divers off you, or to stun an enemy near a wall and start a kill. It also counts toward Silver Bolts.",
    R: "Final Hour gives bonus AD, invisibility during Tumble, a shorter Tumble cooldown, and more move speed from Night Hunter. Use it at the start of a fight or a duel to make yourself very hard to hit."
  },
  combos: [
    { name: "Wall stun", keys: "E (into wall) → AA → Q → AA", note: "Condemn into a wall, then auto and Tumble for a quick Silver Bolts proc while they're stunned." },
    { name: "Silver Bolts proc", keys: "AA → Q → AA → AA", note: "Tumble between autos to land three hits quickly for true damage." },
    { name: "Peel", keys: "E (on diver) → Q (away)", note: "Knock a diver back and Tumble away to stay at range." },
    { name: "Final Hour", keys: "R → Q → AA", note: "Ult, Tumble invisibly, and keep attacking while the enemy loses track of you." }
  ],
  spikes: [
    "Level 2: Silver Bolts and Tumble give short, sharp trades",
    "Level 6: Final Hour makes you much stronger in fights",
    "First item ({{item:Blade of The Ruined King}}): big damage, life steal and a slow",
    "Two items ({{item:Guinsoo's Rageblade}}): attack speed and on-hit stack Silver Bolts faster",
    "Three items ({{item:Terminus}}): you cut through armor and magic resist"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and a {{item:Health Potion}}, with {{spell:Flash}} and {{spell:Barrier}}. Vayne is weak early, so farm safely and avoid long trades against long-range marksmen. Use Condemn to peel the enemy support if they engage on you.</p><p>Max Q first, then W. Look for short trades when the enemy walks into your range: three hits with Silver Bolts deal real damage, especially at level 2 when your support can follow up.</p>{{tip:Condemn enemies into walls for a stun. The lane walls near the bot brushes are perfect for it.}}{{warn:Don't trade into long-range lanes for no reason. Your lane goal is good farm and staying even, not winning.}}",
    mid: "<p>After {{item:Blade of The Ruined King}}, you start winning duels. Your bot quest moves your boots to the quest slot, giving you room for more items faster.</p><p>Use your true damage to shred tanks in skirmishes. Vayne is also a good side-laner once she has items, because few champions can duel her. Read {{guide:side-lanes}} to learn when that's the right call.</p>{{tip:Silver Bolts doesn't care how tanky the target is. If the enemy frontline is the only thing you can reach safely, hit them.}}",
    late: "<p>Late game, Vayne is a monster. Start a fight with Final Hour, Tumble invisibly to dodge, and keep attacking. Save Condemn for divers or for stunning a target against a wall. Buy {{item:Guardian Angel}} or {{item:Mercurial Scimitar}} if you're being focused, and {{item:Wit's End}} against magic damage.</p><p>Read {{guide:teamfighting}} for target selection.</p>"
  },
  tips: [
    "Condemn into walls for stuns",
    "Tumble resets your attack: use it between autos",
    "Silver Bolts shreds tanks, so focus one target",
    "Final Hour makes Tumble invisible",
    "Farm safely early; you scale late",
    "Keep Condemn ready to peel divers"
  ],
  matchups: {
    hard: [
      { id: "Aphelios", tip: "He outranges you and has strong late-game damage too. Play safe early, farm, and look for wall Condemns when he steps up." },
      { id: "MissFortune", tip: "She pokes you hard with Q bounces. Stay away from low minions and wait for your item spikes." },
      { id: "Samira", tip: "She all-ins hard. Keep Condemn ready for when she dashes in, and back off if your support can't match her engage." }
    ],
    easy: [
      { id: "Ezreal", tip: "Duel him once you have items; he can't escape your true damage for long." },
      { id: "Sivir", tip: "Farm safely and outscale her; her wave clear can't stop you once you have items." },
      { id: "Kalista", tip: "Condemn her hops into walls for stuns." }
    ]
  },
  supports: [
    { id: "Soraka", why: "Her heals keep you alive while you scale." },
    { id: "Nami", why: "Her heals and bubble protect you." },
    { id: "Milio", why: "His shields and range boost help you farm safely." }
  ]
}

);
