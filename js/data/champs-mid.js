window.RA = window.RA || {};
RA.champs = RA.champs || [];
RA.champs.push(

/* ------------------------------------------------------------------ AHRI */
{
  id: "Ahri",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Mobile mage / assassin",
  summary: "Ahri is a slippery mage with a reliable charm and three dashes on her ultimate. She can poke in lane, pick off a careless enemy, and dodge back out before anyone can punish her. A great choice if you want an assassin feel without the all-or-nothing risk.",
  strengths: [
    "Spirit Rush gives three dashes, so she is very hard to catch and great at chasing",
    "Charm cancels dashes and sets up kills for her whole team",
    "Orb of Deception deals true damage on the way back, so it's strong even against tanky targets",
    "Fast wave clear lets her push and roam"
  ],
  weaknesses: [
    "If Charm misses, her all-in is much weaker",
    "Short range compared to long-range mages, so she can be poked out of lane",
    "Without her ultimate up she is far more vulnerable to ganks",
    "Falls off against tanky teams if she doesn't find picks"
  ],
  abilities: {
    P: "Essence Theft heals you after killing 9 minions or monsters, and more after a champion takedown. Use it to stay in lane longer: a big wave clear with Q can top you up.",
    Q: "Orb of Deception hits twice: magic damage going out and true damage coming back. Stand so the orb passes through the enemy on both legs. It's also your main wave-clear tool: line up the caster minions.",
    W: "Fox-Fire gives a short speed burst and three flames that lock onto nearby enemies. Cast it right before you walk up to trade, or use the speed to dodge a skill shot. The flames prefer champions you've charmed.",
    E: "Charm is your most important ability. It stops the enemy in place, cancels their dashes and makes every follow-up land. Throw it when the enemy walks forward to last-hit, or after they use a dash. Never throw it through a minion wave: it stops on the first enemy hit.",
    R: "Spirit Rush gives three dashes over a few seconds, and each takedown gives you more casts. Use one dash to get in range, keep one to escape. In lane, hitting six with it up means you can fight almost anyone."
  },
  combos: [
    { name: "Charm burst", keys: "E → Q → W", note: "Land Charm first so they walk into your orb, then Fox-Fire finishes them. This is your bread-and-butter trade." },
    { name: "All-in", keys: "E → Q → R → W → R", note: "Charm, orb, dash in and out with Fox-Fire so the flames hit as you move. Save the last dash to escape or to chase." },
    { name: "Catch from out of range", keys: "R → E → Q → W", note: "Dash forward to surprise them with Charm when they think they're safe. Great for picking off an enemy in the river." },
    { name: "Flash charm", keys: "Flash + E", note: "Flash during the Charm cast for an unexpected long-range charm when you need to land it." }
  ],
  spikes: [
    "Level 3: Q, W and E unlocked. Your first real trade window with the full combo.",
    "Level 6: Spirit Rush makes you a kill threat and much safer from ganks.",
    "First item ({{item:Malignance}}): more damage and a shorter ultimate cooldown. Start roaming.",
    "Two items ({{item:Shadowflame}}): you can one-combo squishy carries in mid game fights."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} with two potions and level Q first, then max Q, then W, then E. Your runes this patch are {{rune:Electrocute}}, which rewards quick three-hit trades like E → Q → W.</p><p>In the first levels, focus on farming with Q and poking with the true-damage return of your orb. Look for Charm when your opponent steps up to take a minion. If you land it, follow with Q and W and step back out: that's a winning short trade. Don't waste Charm on minions or a full-health enemy who isn't in range of the follow-up.</p>{{tip:Charm also stops dashes. Hold it against champions like {{champ:Katarina}} or {{champ:Yasuo}} and throw it the moment they dash at you.}}<p>At level 6, Spirit Rush turns you into a real threat. If the enemy has used Flash or is below half health, an all-in is usually a kill. Watch your mana: Ahri can run out if you spam Q on every wave.</p>",
    mid: "<p>With {{item:Malignance}} done, push your wave quickly with Q and look for {{guide:roaming}} plays. Ahri's Charm plus three dashes is one of the best tools in the game for catching someone walking alone through the river or jungle.</p><p>Group with your team for dragons and Void Grubs. Walk with your jungler into fog, hide in a bush, and wait for an enemy to face-check: Charm from fog is very hard to dodge.</p>{{warn:Don't spend all three Spirit Rush dashes going in. Ahri dies quickly once she's out of dashes, so always keep one to get out.}}",
    late: "<p>Late game, your job is picking off a carry before or during a fight. Stay at the edge of the fight, wait for the enemy's key crowd control to be used, then dash in, Charm the carry and burst them. {{item:Zhonya's Hourglass}} lets you survive the counterattack after you go in.</p><p>Against a tanky team, don't throw yourself at the frontline. Use your range and the true damage of Q to whittle them down, and look for flanks where you can catch a squishy alone. Before Baron or Elder, sweeping wards with your team and finding a pick is often worth more than a fair 5v5.</p>"
  },
  tips: [
    "Land the return half of Orb of Deception: it deals true damage, which ignores magic resist.",
    "Throw Charm after the enemy uses a dash or Flash. They have no way to dodge it then.",
    "Use Fox-Fire's speed boost to dodge skill shots in lane, not just for damage.",
    "Count your Spirit Rush casts. A takedown gives extra casts, so a kill can let you chain into a second target.",
    "Ahri's short range means you should stand behind your minions until Charm is ready.",
    "After a big Q on the wave, Essence Theft can heal you. Keep it in mind before you recall."
  ],
  matchups: {
    hard: [
      { id: "Katarina", tip: "Hold Charm until she Shunpos to you or a dagger; a charm mid-dash stops her completely. Push early so she can't roam freely." },
      { id: "Aurora", tip: "She has hops and an invisibility leap. Don't throw Charm into an obvious hop; wait for her W or E to be on cooldown first." },
      { id: "Diana", tip: "Respect her level 3 and level 6 all-ins. Keep Charm for when she dashes at you and back off when your ultimate is down." }
    ],
    easy: [
      { id: "Galio", tip: "He's slow and tanky early. Poke him with the true damage of Q and keep your distance from his taunt." },
      { id: "Orianna", tip: "She relies on her ball. Step around it to trade and Charm her when she walks forward without the ball near her." },
      { id: "Ryze", tip: "Out-trade him early before he gets items. Charm him when he walks up to farm and look for a level 6 all-in." }
    ]
  }
},

/* ------------------------------------------------------------------ ANNIE */
{
  id: "Annie",
  roles: ["mid"],
  difficulty: "Easy",
  damage: "Magic",
  style: "Burst mage",
  summary: "Annie is one of the simplest champions in the game, and still one of the scariest. Every fourth spell stuns, and her bear Tibbers drops on the enemy team with a huge burst. Perfect for new players who want to learn mid lane and still make big plays.",
  strengths: [
    "Very easy to learn: no skill shots, and a point-and-click Q",
    "Guaranteed stun every fourth spell gives her reliable kill pressure",
    "Tibbers with a stun can win teamfights by itself",
    "Q refunds its mana when it kills a minion, so she can farm almost for free"
  ],
  weaknesses: [
    "Short range, so long-range mages can poke her out of lane",
    "Very little mobility: easy to gank if she's pushed up",
    "Enemies can see when her stun is ready, so they play around it",
    "Falls behind if her burst can't kill her target"
  ],
  abilities: {
    P: "Pyromania: after four spells your next damaging spell stuns. You start the game and respawn with the stun ready. Enemies can see the white glow around you, so build the stun up quietly by casting E or Q on minions, then threaten them.",
    Q: "Disintegrate is a targeted fireball. If it kills the target, you get the mana back. Use it to last-hit every minion you can: it's free farm. With stun ready, it's also your safest way to land the stun.",
    W: "Incinerate is a cone of fire. Use it to clear waves and as part of your burst combo. It's the best way to stun several enemies at once.",
    E: "Molten Shield gives you (or an ally) a shield, a burst of speed and damages enemies who hit the shielded target. Cast it to stack Pyromania without wasting mana on damage, or to escape. You can shield your jungler or ADC too.",
    R: "Summon: Tibbers drops the bear on a target area for big damage, and with stun ready it stuns everyone hit. Tibbers then keeps attacking and burning nearby enemies. Flash plus a stun Tibbers on several enemies is how Annie wins fights."
  },
  combos: [
    { name: "Stun trade", keys: "Q (stun) → W", note: "With Pyromania ready, Q stuns from range, then W adds damage while they can't move." },
    { name: "Full burst", keys: "R (stun) → Q → W", note: "Drop a stunning Tibbers on them, then follow with Q and W. Ignite finishes the job." },
    { name: "Flash Tibbers", keys: "Flash → R (stun) → W → Q", note: "The classic Annie play. Flash into the enemy team and stun them all with Tibbers. Make sure your stun is ready first." },
    { name: "Stack the stun", keys: "E → E (wait) → Q minion → W wave", note: "Use cheap spells and Q last hits to reach four stacks before you walk up to fight." }
  ],
  spikes: [
    "Level 2-3: with stun up, Q + W + Ignite hurts badly. Threaten an all-in.",
    "Level 6: Tibbers with stun is one of the strongest level 6 burst combos in the game.",
    "First item ({{item:Malignance}}): lower ultimate cooldown means more Tibbers and more kills.",
    "Two items ({{item:Stormsurge}}): you can delete squishy champions in one combo."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions, level Q first and max Q, then W, then E. Your keystone is {{rune:Electrocute}}, and Q + W triggers it quickly.</p><p>Last-hit with Q whenever you can, because the mana comes back. Watch your Pyromania counter. When the stun is ready, walk forward: the enemy has to respect it. If they step close, stun them with Q and follow with W and Ignite.</p>{{tip:You start each life with the stun ready. Fighting near the start of the game or right after you respawn gives you a free stun.}}<p>Annie is weak to long-range poke. If you're up against a mage who out-ranges you, just farm safely with Q and wait for level 6.</p>",
    mid: "<p>At six, every time your stun is ready and Tibbers is up you are a kill threat. Look for roams to side lanes and to dragon. A stunned enemy with Tibbers on top of them rarely survives.</p><p>Shield your teammates with E when they're being focused, and use your W to clear waves fast so you can move before the enemy mid. Use {{guide:vision-control}} to find flanks: Annie gets the best Tibbers from fog of war.</p>{{warn:Don't walk into a fight without your stun ready. A Tibbers without a stun is just damage, and you'll often die right after.}}",
    late: "<p>Late game, Annie's job is the big opening stun. Hide in fog or a bush near the fight, build the stun up with E, and wait for the enemy to group. Then Flash in and drop Tibbers on as many enemies as you can. {{item:Zhonya's Hourglass}} lets you survive the counterattack.</p><p>If they're spread out, target the carry instead: a stun Tibbers on the enemy ADC usually wins the fight on the spot.</p>"
  },
  tips: [
    "Last-hit with Q every time it's up: it refunds its mana on a kill.",
    "Use E on yourself to stack the stun without spending mana on damage.",
    "The enemy can see when your stun is ready. Fake it by walking forward, then back, to waste their time.",
    "Flash + stunning Tibbers on three or more enemies is game-winning. Always look for it.",
    "Shield your ally ADC or jungler with E during fights.",
    "Tibbers keeps attacking and burning enemies after he lands, so drop him where the fight will stay, not at its edge."
  ],
  matchups: {
    hard: [
      { id: "Diana", tip: "She can dash onto you and burst you. Keep your stun ready for when she jumps in, and play near your tower before six." },
      { id: "Zoe", tip: "She out-ranges you. Farm with Q, dodge her sleep bubble by staying behind minions, and wait for six." },
      { id: "Velkoz", tip: "His poke is very long range. Don't stand still: farm safely and look for a stun when he walks forward." }
    ],
    easy: [
      { id: "Ryze", tip: "Punish him before he gets his items. Stun him when he steps up and follow with W and Ignite." },
      { id: "Azir", tip: "He's weak early and has to stand close to his soldiers. Stun him when his dash is on cooldown." },
      { id: "Cassiopeia", tip: "She has to be close to fight. Keep your stun ready and stun her when she walks forward to cast." }
    ]
  }
},

/* ------------------------------------------------------------------ AURORA */
{
  id: "Aurora",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Hit-and-run mage",
  summary: "Aurora is a slippery spirit mage who hops in and out of fights. She curses enemies with her Q, leaps into invisibility with W, and blasts and hops back with E. Her ultimate traps enemies in a zone she can teleport across. Pick her if you like outplaying people with movement.",
  strengths: [
    "Lots of movement: W leap with invisibility, E hop back, R leap",
    "Strong short trades with Q recast plus E",
    "Her ultimate zone is great at trapping groups and escaping",
    "Heals from spirits she collects, so she can stay in lane"
  ],
  weaknesses: [
    "Her abilities have a clear rhythm; if you misuse the hops you're exposed",
    "Short range compared to long-range mages",
    "Needs to hit Q to get full value from her combos",
    "Vulnerable to hard crowd control when her W is down"
  ],
  abilities: {
    P: "Spirit Abjuration: your spells and attacks pull spirits out of enemies. Spirits follow you and heal you. Trade often with short combos to keep your health topped up.",
    Q: "Twofold Hex sends out a missile that curses enemies. Recast to pull the curses back to you, damaging enemies along the way. Hit the first cast, then recast when you've lined up a second hit or need the finishing damage.",
    W: "Across the Veil leaps in a direction and makes you invisible with bonus speed for a short time. Use it to dodge a key skill shot, reposition for your E, or escape a gank. Using it aggressively is fine, but always know where you'll go after.",
    E: "The Weirding blasts enemies in front of you with damage and a slow, then hops you backward. It's both damage and an escape, so cast it last in a trade so you end up safely away.",
    R: "Between Worlds leaps you in a direction and releases a shockwave that damages and slows. It leaves a zone that slows enemies, and you can teleport from one side of the zone to the other. Trap enemies inside it, or use it to escape over the edge."
  },
  combos: [
    { name: "Short trade", keys: "Q → Q (recast) → E", note: "Curse them, pull the curse back, then blast and hop away. You deal damage and end up out of range." },
    { name: "All-in", keys: "Q → R → Q (recast) → E → W", note: "Curse, leap in with R to trap them, recast Q, then E. Use W to reposition or chase inside the zone." },
    { name: "Dodge and punish", keys: "W → Q → E", note: "Leap over their skill shot into invisibility, then come out swinging." }
  ],
  spikes: [
    "Level 3: full combo with W lets you take aggressive trades.",
    "Level 6: Between Worlds makes all-ins and escapes much stronger.",
    "First item ({{item:Stormsurge}}): a big burst spike that helps finish kills.",
    "{{item:Rabadon's Deathcap}} (third item): your damage jumps; one full combo can kill squishies."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}}, level Q first and max Q, then E, then W. Your keystone is {{rune:Electrocute}}, which triggers off Q + recast + E.</p><p>Play the trade rhythm: hit Q, recast it, then E and hop back. Your passive heals you from the spirits you collect, so frequent small trades are good for you. Use W to dodge important skill shots, not just to go in.</p>{{tip:End every trade with E. The hop back keeps you safe from the enemy's counter-attack.}}",
    mid: "<p>With {{item:Stormsurge}}, Aurora becomes a strong roamer. Push the wave, then use W's invisibility to move through the river unseen and surprise side lanes.</p><p>In skirmishes, open with R on a group. Enemies inside the zone are slowed, and you can teleport from edge to edge to stay out of reach while you cast. Read {{guide:teamfighting}} for positioning ideas.</p>{{warn:Don't use W to go in when you'll need it to escape. Aurora without W is easy to catch.}}",
    late: "<p>Late game, look for flanks. A well-placed R on the enemy backline traps them while your team follows up. Keep W ready as your escape, and build {{item:Zhonya's Hourglass}} or {{item:Banshee's Veil}} if they focus you.</p><p>If the enemy has strong burst, poke with Q and E from a safe angle first, then commit when their key cooldowns are down.</p>"
  },
  tips: [
    "Hit Q, then recast it when the missile path lines up a second hit.",
    "End trades with E so you hop away from danger.",
    "W's invisibility lets you move through the river unseen. Use it to roam.",
    "Your R zone lets you teleport across its edges. Use it to escape over a wall or out of a gank.",
    "Your passive heals you, so short trades are good for you in lane.",
    "Save W for dodging a hook, a stun or a big skill shot."
  ],
  matchups: {
    hard: [
      { id: "Zoe", tip: "She out-ranges you. Stay behind minions to block her bubble and look to dive her after she misses it." },
      { id: "Leblanc", tip: "Her burst is fast. Keep W to dodge her chain and don't trade when she has full cooldowns." },
      { id: "Katarina", tip: "Push the wave so she can't pick up daggers safely, and trap her with R when she jumps in." }
    ],
    easy: [
      { id: "Mel", tip: "She was reworked in 26.22. Play your usual trade pattern and learn her new spells as you face her." },
      { id: "Orianna", tip: "Trade when her ball is far from her. Your hops let you dodge her ultimate." },
      { id: "Ryze", tip: "Beat him early with frequent short trades before his items come online." }
    ]
  }
},

/* ------------------------------------------------------------------ LUX */
{
  id: "Lux",
  roles: ["mid"],
  difficulty: "Easy",
  damage: "Magic",
  style: "Artillery mage",
  summary: "Lux is a long-range mage with a double root, a slowing zone and one of the longest ultimate beams in the game. She is easy to pick up and rewards good aim. A great first mid laner for players who want to learn skill shots and poke from a safe distance.",
  strengths: [
    "Huge range: she can poke and finish kills from far away",
    "Light Binding roots up to two targets and sets up kills for her team",
    "Final Spark has a short cooldown, so she can use it almost every fight",
    "Prismatic Barrier shields her and every ally the wand touches"
  ],
  weaknesses: [
    "No dash at all: assassins and divers can reach her easily",
    "If Light Binding misses, she has almost no way to stop an attacker",
    "Spamming spells drains her mana quickly",
    "Has to stay at the back of fights; stepping forward usually means dying"
  ],
  abilities: {
    P: "Illumination: every damaging spell marks the target, and your next basic attack pops the mark for bonus magic damage. After landing a spell on a champion in range, always follow with an auto-attack: it's free damage.",
    Q: "Light Binding roots the first enemy hit and one more behind it. If it passes through a minion first, it still roots the champion behind it, but for less time. Throw it when the enemy is walking in a predictable line, like stepping up to last-hit, not at random.",
    W: "Prismatic Barrier throws your wand out and back, shielding you and every ally it touches on both trips. Use it right before the damage lands: when the enemy jungler appears, or when your ally is being dived.",
    E: "Lucent Singularity throws a zone that slows enemies inside, then you recast to detonate it for damage. It's your main wave clear and your best poke. If you don't recast, it explodes on its own after a few seconds, so you can also use it to block a path while you walk away.",
    R: "Final Spark fires a huge beam after a short wind-up. It refreshes Illumination on everyone hit, so if you can, auto-attack right after for extra damage. With its low cooldown, use it to finish kills, clear waves, and help other lanes from far away."
  },
  combos: [
    { name: "Standard burst", keys: "Q → E → R → auto", note: "Root them, drop E on top while they can't move, fire Final Spark, then auto-attack to pop the passive." },
    { name: "Poke and pop", keys: "E → E (detonate) → auto", note: "Hit E on an enemy farming, then walk up for a quick auto-attack if it's safe. Comet often procs too." },
    { name: "Long-range finish", keys: "E → R", note: "A slowed enemy can't dodge Final Spark. Use this to finish someone running away." },
    { name: "Gank follow-up", keys: "Q → auto → E → auto", note: "When your jungler arrives, root the enemy and keep popping your passive between spells." }
  ],
  spikes: [
    "Level 3: Q + E + auto-attack hurts a lot. Start trading when the enemy walks forward.",
    "Level 6: Final Spark lets you finish kills from huge range and help other lanes.",
    "First item ({{item:Luden's Echo}}): stronger poke, faster wave clear and more mana.",
    "Two items ({{item:Stormsurge}}): your burst combo can kill squishy champions from out of their range."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions. Level E first and max it, then Q, then W. Your keystone this patch is {{rune:Arcane Comet}}, which rewards long-range poke, with {{spell:Flash}} and {{spell:Teleport}}.</p><p>Use E to clear the caster minions and to poke the enemy at the same time. After a hit, auto-attack them for the passive only if you won't take a bad trade back. Hold Q until you have a clear angle: through the minion wave it's easy to block.</p>{{tip:Most mid laners have to walk up to last-hit. That's your moment: throw Q at the spot they're walking to, not where they are now.}}<p>Lux spends a lot of mana. Don't use E on every wave if you don't need to: last-hit with auto-attacks when the wave is small, and save mana for trades and for escaping.</p>",
    mid: "<p>With {{item:Luden's Echo}}, push your wave with E and look to help the map. Final Spark has a short cooldown, so fire it into side-lane fights or at a fleeing enemy across the river. Use {{spell:Teleport}} to join fights in top or bot lane when you see one starting.</p><p>Stay behind your team around dragons and Void Grubs. Your job is to poke enemies before the fight and root anyone who steps forward. Shield your teammates with W when they're being burst.</p>{{warn:Lux has no dash. Walking into an unwarded part of the jungle alone is the fastest way to die. Read {{guide:vision-control}} and move with your team.}}",
    late: "<p>Late game, your poke is strongest before a fight starts. Hit E and Final Spark from max range to weaken the enemy team, then hold Q for anyone who dives you or your carry. A good Light Binding on the enemy engager can stop a fight before it starts.</p><p>Build {{item:Zhonya's Hourglass}} against divers and assassins, {{item:Banshee's Veil}} against long-range catch, and {{item:Void Staff}} when they buy magic resist. Use Final Spark to clear waves from far away so you don't have to walk into dangerous side lanes.</p>"
  },
  tips: [
    "Auto-attack after every spell hit to pop Illumination for free damage.",
    "Final Spark has a short cooldown. Use it often, even just to clear a wave or finish a cannon.",
    "Shield your jungler with W when they fight the enemy jungler near you.",
    "Light Binding still roots a champion behind one minion, so you can throw it through a single minion.",
    "Use E as a slowing zone to block the path of someone chasing you.",
    "Stand at max range in fights. Lux can do all her damage from far away.",
    "Ping the enemy mid when they're missing. Lux can't fight a gank if she doesn't see it coming."
  ],
  matchups: {
    hard: [
      { id: "Vladimir", tip: "He heals through your poke and can dodge your burst with his pool. Farm safely, and throw Q right after he uses it." },
      { id: "TwistedFate", tip: "He wins by roaming. Ping when he's missing, push your wave and take turret plates while he's gone." },
      { id: "Diana", tip: "She dashes onto you once she hits you with her Q. Stand back, keep Light Binding for when she jumps, and stay near your tower before six." }
    ],
    easy: [
      { id: "Irelia", tip: "She has to get close. Poke her with E and root her the moment she dashes in." },
      { id: "Azir", tip: "He's weak early and stands close to his soldiers. Poke him with E from long range." },
      { id: "Cassiopeia", tip: "She has to walk up to fight you. Poke her from max range and root her when she tries to engage." }
    ]
  }
},

/* ------------------------------------------------------------------ MALZAHAR */
{
  id: "Malzahar",
  roles: ["mid"],
  difficulty: "Easy",
  damage: "Magic",
  style: "Control mage",
  summary: "Malzahar is a safe, simple mage with a passive shield that blocks poke and a point-and-click suppression ultimate. He pushes waves with almost no effort and locks down one enemy for his team. Great for new players who want a calm lane and a guaranteed pick tool.",
  strengths: [
    "Nether Grasp suppresses a target and can't be dodged",
    "Void Shift blocks a big chunk of damage and crowd control in lane",
    "Easy wave clear with E spreading through minions and W's Voidlings",
    "Simple combos and a very safe lane"
  ],
  weaknesses: [
    "No dash: if his passive is broken, he is easy to gank",
    "His ultimate can be interrupted by crowd control or cleansed with Quicksilver effects",
    "Needs a couple of items to deal real damage",
    "Falls behind if he can't land his ultimate on a key target"
  ],
  abilities: {
    P: "Void Shift: when you haven't taken damage or crowd control for a while, you take much less damage and are immune to crowd control. Enemies have to break it before they can trade properly. Trade when it's up; play safer while it's recharging.",
    Q: "Call of the Void opens two portals that fire inward, damaging and silencing enemy champions. A silence stops dashes and spells, so use it to cancel an engage or to stop an enemy escaping.",
    W: "Void Swarm summons Voidlings that attack nearby enemies. They're strong on waves and add a lot of damage to your combo, especially after a couple of items.",
    E: "Malefic Visions damages over time. If the target dies while it's on them, it jumps to a nearby enemy and refunds some mana. Put it on a low minion to clear whole waves. Your other spells refresh it on the target.",
    R: "Nether Grasp suppresses an enemy champion for a few seconds and leaves a damaging zone. Use it on the enemy carry, or to stop an assassin that's diving your team. It can be interrupted by crowd control on you, so check what the enemy can do before you commit."
  },
  combos: [
    { name: "Standard combo", keys: "E → Q → W → R", note: "Put E on them, Q to silence, Voidlings on top, then R to lock them down. Ignite or your jungler finishes the job." },
    { name: "Wave clear", keys: "E (low minion) → W → Q", note: "E jumps through the wave as minions die. W and Q finish the rest." },
    { name: "Flash pick", keys: "Flash → R", note: "Flash forward and suppress the carry before they react. Best when your team is right behind you." }
  ],
  spikes: [
    "Level 2: E + Q pokes well, and your passive makes trading back hard for the enemy.",
    "Level 6: Nether Grasp turns every gank into a likely kill.",
    "First item ({{item:Blackfire Torch}}): your damage over time ramps up and your mana problems go away.",
    "Two items ({{item:Liandry's Torment}}): E and Voidlings melt both squishies and tanks."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions. Level E first and max it, then Q, then W. Your keystone is {{rune:Deathfire Touch}}, which adds damage over time to your ability hits, with {{spell:Flash}} and {{spell:Teleport}}.</p><p>Put E on low minions so it spreads through the wave and push with very little effort. Stay behind your minions and keep your passive up by not taking random poke. When the enemy dashes at you, silence them with Q.</p>{{tip:Ping your jungler when your ultimate is ready. A Malzahar ultimate plus a gank is almost always a kill.}}<p>Malzahar loves a pushed lane. Shove the wave into the enemy tower so they have to farm under it while you look at the map.</p>",
    mid: "<p>With {{item:Blackfire Torch}}, push your wave quickly and help your jungler. Malzahar is great at securing kills for teammates: suppress the target and let them deal the damage.</p><p>Use {{spell:Teleport}} to join fights in other lanes with your ultimate ready. Around objectives, stand where you can reach the enemy jungler with R if they try to contest.</p>{{warn:Don't ultimate the first enemy you see. Waiting a second for the enemy carry to step in usually wins the fight.}}",
    late: "<p>Late game, your ultimate is your most important play. Save it for the enemy carry, or for the assassin diving your team. Don't waste it on a tank unless it stops their engage.</p><p>Build {{item:Zhonya's Hourglass}} if you're being targeted, {{item:Void Staff}} against magic resist, and {{item:Morellonomicon}} against healing. Keep pushing waves with E: your wave clear lets you stay safe while still getting gold.</p>"
  },
  tips: [
    "Keep your passive up in lane by not taking random poke.",
    "E jumps when its target dies: put it on a low minion to clear the wave.",
    "Ping your jungler when your ultimate is up.",
    "Use Q's silence to stop dashes and spells.",
    "Check that your ultimate target can't be saved by an ally's crowd control.",
    "Your ultimate can't be dodged, so use it on slippery champions who dodge skill shots."
  ],
  matchups: {
    hard: [
      { id: "Sion", tip: "He's tanky and can engage on you. Silence his charge with Q and don't walk into his wind-up." },
      { id: "Diana", tip: "She dashes onto you. Keep your passive up and silence her with Q when she jumps in." },
      { id: "Fizz", tip: "His E lets him dodge your ultimate if he sees it coming. Wait for it to be on cooldown first." }
    ],
    easy: [
      { id: "Zoe", tip: "Your passive soaks her poke. Push the wave and suppress her if she steps up." },
      { id: "Qiyana", tip: "Your passive and Q's silence shut down her all-in. Keep them ready." },
      { id: "Yasuo", tip: "Your ultimate isn't a projectile, so his Wind Wall can't block it. Lock him down when he dashes in." }
    ]
  }
},

/* ------------------------------------------------------------------ ORIANNA */
{
  id: "Orianna",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Control mage",
  summary: "Orianna fights by commanding a mechanical ball. She pokes with it, shields allies with it, and her ultimate pulls the whole enemy team into it. She's hard to master because you have to track two positions at once, but a great Orianna wins teamfights by herself.",
  strengths: [
    "One of the best teamfight ultimates in the game",
    "Safe, steady laning with long-range poke",
    "Shields, armor and speed for her allies",
    "Flexible: her ball can be wherever she needs it"
  ],
  weaknesses: [
    "You have to track the ball's position all the time",
    "Weak against assassins who dive her with the ball away",
    "Low mobility: only W's speed and E's shield",
    "Below average this patch (C tier) even after a small buff"
  ],
  abilities: {
    P: "Clockwork Windup: your auto-attacks deal extra magic damage, more each time you hit the same target. In lane, weave auto-attacks between spells for extra poke.",
    Q: "Command: Attack sends the ball to a location, damaging enemies on the way, and the ball stays there. Use it for poke, last hits and to move the ball before you cast W or R.",
    W: "Command: Dissonance pulses around the ball, damaging enemies and leaving a field that slows enemies and speeds up allies. Cast it right after Q lands on someone to finish the trade.",
    E: "Command: Protect sends the ball to an ally (or yourself), shielding them and damaging enemies it passes through. The ball also gives that ally extra armor and magic resist. Put it on your engage tank or diving ally so your ultimate goes wherever they jump.",
    R: "Command: Shockwave pulls enemies near the ball toward its center after a short delay, dealing big damage. It's your fight-winning button: deliver the ball to a group, then cast it."
  },
  combos: [
    { name: "Poke", keys: "Q → W", note: "Send the ball onto the enemy, then pulse for damage and a slow." },
    { name: "Ball delivery", keys: "E (on ally) → R", note: "Put the ball on your engaging tank or diver, then ultimate as they land in the enemy team." },
    { name: "Full burst", keys: "Q → R → W", note: "Send the ball into a group, pull them in, then pulse while they're stuck together." },
    { name: "Self-peel", keys: "E (self) → W", note: "When an assassin dives you, shield yourself and pulse to slow them while you walk away." }
  ],
  spikes: [
    "Level 3: Q + W poke is strong, and E gives you a shield.",
    "Level 6: Shockwave makes every skirmish dangerous for the enemy.",
    "First item ({{item:Luden's Echo}}): stronger poke and wave clear.",
    "Three items ({{item:Zhonya's Hourglass}}): you can stand in fights long enough to land a big ultimate."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}}, level Q first and max Q, then W, then E. Your keystone is {{rune:Summon Aery}} for frequent poke, with {{spell:Flash}} and {{spell:Teleport}}.</p><p>Use Q to farm and poke at the same time, and weave in auto-attacks for your passive. Keep the ball between you and the enemy: if they jump on you, E yourself for a shield and W to slow them.</p>{{tip:Orianna got a small buff in 26.21 (Q and W deal a bit more). She's still not a top pick, so play her for safe lanes and teamfights rather than for solo kills.}}",
    mid: "<p>With {{item:Luden's Echo}}, group with your team for objectives. Put the ball on your engager with E before a fight starts so your ultimate lands where they go in.</p><p>Look for flanks around dragon or Void Grubs. A ball delivered from fog of war is hard for the enemy to see coming. Use {{spell:Teleport}} to join side-lane fights.</p>{{warn:Don't throw your ultimate on one enemy just for damage. Waiting for two or three enemies to group up is usually worth it.}}",
    late: "<p>Late game, Orianna's ultimate decides fights. Wait for the enemy to group, then deliver the ball to the middle of them, ideally on your diving ally. Build {{item:Zhonya's Hourglass}} if divers focus you, and {{item:Void Staff}} against magic resist.</p><p>When you have no engage, poke with Q and W from safe range, and keep E ready to shield whoever the enemy dives.</p>"
  },
  tips: [
    "Always know where your ball is. If you lose it, your next combo starts slowly.",
    "Put the ball on your engage tank so your ultimate lands where they jump.",
    "W speeds up allies: use it to help them chase or escape.",
    "Shield yourself with E when an assassin dives you.",
    "Weave auto-attacks between spells in lane. Your passive adds damage.",
    "Don't use your ultimate on one target if you can wait for a group."
  ],
  matchups: {
    hard: [
      { id: "Ekko", tip: "He can dive you and rewind back out. Keep the ball near you and shield yourself when he jumps in." },
      { id: "AurelionSol", tip: "He scales very hard. Poke him early with Q and W, and look for picks with your jungler before he gets strong." },
      { id: "Leblanc", tip: "She bursts you quickly. Keep E ready to shield yourself and play close to your tower." }
    ],
    easy: [
      { id: "Mel", tip: "She was reworked in 26.22. Play your usual safe trades and learn her new kit as you face her." },
      { id: "Cassiopeia", tip: "She has to walk up to you. Poke her with Q from range and slow her with W when she comes in." },
      { id: "Ryze", tip: "Out-poke him early with Q and W, and keep the ball between you." }
    ]
  }
},

/* ------------------------------------------------------------------ SYNDRA */
{
  id: "Syndra",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Burst mage",
  summary: "Syndra conjures dark spheres and turns them into weapons. She pokes with them, stuns with them, and her ultimate throws all of them at one target for huge burst. She takes practice, but she can dominate lanes and delete carries late game.",
  strengths: [
    "Massive single-target burst with her ultimate",
    "Strong lane control and long-range poke",
    "Q + E stun sets up kills and stops divers",
    "Splinters upgrade her abilities over the game, so she scales very well"
  ],
  weaknesses: [
    "No dash: assassins and divers are a big problem",
    "Her stun takes practice to land consistently",
    "Has to manage spheres and their positions",
    "Can run low on mana if she pokes too much early"
  ],
  abilities: {
    P: "Transcendent: you collect Splinters of Wrath from leveling up and damaging enemy champions. They upgrade your abilities: Q can hold an extra charge, W deals bonus true damage, E gets wider and slows, and R executes low targets. Trade often to collect splinters faster.",
    Q: "Dark Sphere conjures a sphere that deals damage and stays on the ground for a while. It's your poke, your wave clear and the ammo for your stun and ultimate.",
    W: "Force of Will grabs a sphere or a minion and throws it, damaging and slowing enemies. Grab a minion when no sphere is around.",
    E: "Scatter the Weak knocks enemies and spheres back. Spheres pushed into enemies stun them. Use it as a stun combo, or to knock away an assassin that just dashed on you.",
    R: "Unleashed Power throws all your spheres at one champion. More spheres on the ground means more damage, so set up with Q before you cast it."
  },
  combos: [
    { name: "Stun combo (QE)", keys: "Q → E", note: "Cast E right after Q so the sphere flies into the enemy and stuns them. This is Syndra's key skill: practice it in a custom game." },
    { name: "Full burst", keys: "Q → E → W → R", note: "Stun them, throw a sphere with W while they can't move, then ultimate with all your spheres." },
    { name: "Poke", keys: "Q → W", note: "Place a sphere on them, then pick it up and throw it for a second hit." },
    { name: "Anti-dive", keys: "E (point-blank)", note: "When someone dashes on you, E pushes them away. With a sphere nearby, it stuns too." }
  ],
  spikes: [
    "Level 3: Q + E stun lets you punish anyone who walks up.",
    "Level 6: Unleashed Power makes you a kill threat whenever you have spheres down.",
    "First item ({{item:Luden's Echo}}): stronger poke and burst.",
    "Three items ({{item:Rabadon's Deathcap}}): one combo kills most squishy champions."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}}, level Q first and max Q, then W, then E. Your keystone is {{rune:Arcane Comet}} for long-range poke, with {{spell:Flash}} and {{spell:Teleport}}.</p><p>Poke with Q and W from range and use the mana carefully. Q is your most efficient spell; W costs more. When the enemy walks too close to a sphere, knock it into them with E for a stun.</p>{{tip:Trading on champions gives splinters. The upgrades make Syndra much stronger, so look for small hits every wave.}}",
    mid: "<p>With {{item:Luden's Echo}}, look for picks on enemies walking alone. Your ultimate kills most squishies with enough spheres on the ground. Walk with your jungler and keep E ready for anyone who dives you.</p><p>Push waves with Q before every objective so you can arrive first. Read {{guide:power-spikes}} to know when you can force fights.</p>{{warn:Syndra has no dash. Don't chase into fog. Let the enemy come to you and stun them when they arrive.}}",
    late: "<p>Late game, wait for the enemy carry to come into range, then stun and burst. If they're too far, poke the frontline with Q and W while you wait. Build {{item:Zhonya's Hourglass}} against divers and {{item:Banshee's Veil}} against long-range catch.</p><p>When you finish all your splinter upgrades, your ultimate executes low-health targets. Use it to finish people trying to escape.</p>"
  },
  tips: [
    "Put spheres down before your ultimate for more damage.",
    "Practice the Q → E stun until it's automatic.",
    "Stay far back: Syndra has no dash.",
    "Trade often to collect splinters.",
    "Use W to throw minions when no sphere is around.",
    "Save E to stop divers from reaching you."
  ],
  matchups: {
    hard: [
      { id: "Fizz", tip: "His E dodges your ultimate. Save it until his E is on cooldown, and stun him when he lands." },
      { id: "Katarina", tip: "Stun her when she jumps in. Push the wave so she has to stay in lane." },
      { id: "Ekko", tip: "He dives and escapes. Keep E ready to knock him back when he engages." }
    ],
    easy: [
      { id: "Cassiopeia", tip: "She has to walk up to fight. Poke her from range and stun her when she comes in." },
      { id: "Mel", tip: "She was reworked in 26.22. Play your usual poke pattern while you learn her new kit." },
      { id: "Orianna", tip: "Out-poke her with Q and W, and punish her when the ball is away." }
    ]
  }
},

/* ------------------------------------------------------------------ VEIGAR */
{
  id: "Veigar",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Scaling burst mage",
  summary: "Veigar is the tiny master of evil who grows stronger every minute. Every spell hit on a champion, every minion killed with Q and every takedown permanently increases his ability power, with no limit. His cage stuns, and his ultimate deletes anyone at low health. Perfect for patient players who love to scale.",
  strengths: [
    "Endless scaling: he gains ability power forever",
    "Event Horizon is a cage that stuns anyone who walks through its edge",
    "Primordial Burst deals more damage the lower the target's health",
    "One of the highest late-game burst threats in the game"
  ],
  weaknesses: [
    "Weak early: he needs time to stack",
    "No dash: easy target for divers",
    "Dark Matter is slow and easy to dodge without a stun",
    "Lots of champions out-range him in lane"
  ],
  abilities: {
    P: "Phenomenal Evil Power: every spell hit on an enemy champion, and every takedown, permanently gives you ability power. Hit champions with spells whenever it's safe, even small pokes.",
    Q: "Baleful Strike hits the first two enemies. Killing a unit with it permanently gives ability power (more for large minions and monsters). Last-hit with Q all game, ideally two minions at once.",
    W: "Dark Matter drops a damaging mass from the sky after a delay. Its cooldown gets shorter with your Phenomenal Evil stacks. It's easy to dodge, so drop it on stunned enemies or on minions you want to kill.",
    E: "Event Horizon creates a cage after a short delay. Enemies who walk through its edge are stunned. Place it so the enemy is inside the ring and has to walk through the edge, or in their path as they chase you.",
    R: "Primordial Burst blasts one enemy champion for huge damage, increased by their missing health. Use it to finish kills, not to start them."
  },
  combos: [
    { name: "Cage combo", keys: "E → W → Q → R", note: "Cage them, drop Dark Matter on the stunned enemy, Q, then ultimate to finish." },
    { name: "Double stack", keys: "Q (two minions)", note: "Line up two low minions so one Q kills both. Twice the stacks." },
    { name: "Execute", keys: "Q → R", note: "When an enemy is low and running, Q then R finishes them from range." },
    { name: "Self-peel", keys: "E (on yourself)", note: "When someone dives you, place the cage around you so they get stunned walking in." }
  ],
  spikes: [
    "Level 6: Primordial Burst gives you real kill threat.",
    "First item ({{item:Luden's Echo}}): stronger burst and wave clear.",
    "Two items ({{item:Stormsurge}}): your combo kills squishy champions.",
    "Three items ({{item:Rabadon's Deathcap}}): with your stacks, you can one-shot almost anyone."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}}, level Q first and max Q, then W, then E. Your keystone this patch is {{rune:First Strike}}, which gives bonus gold when you hit enemies first, with {{spell:Flash}} and {{spell:Teleport}}.</p><p>Your only job in lane is to stack. Last-hit with Q every time it's up, try to hit two minions at once, and don't take bad trades. Use E to stun enemies who walk at you, then drop W on them.</p>{{tip:Count your stacks, not your kills. A Veigar who stacked well is a threat even with zero kills.}}",
    mid: "<p>With {{item:Luden's Echo}}, group with your team. Your cage can trap several enemies at once in a narrow jungle path or around dragon. Throw it between your team and theirs.</p><p>Keep killing minions with Q in side lanes when you're safe, and look for your ultimate on anyone who drops low.</p>{{warn:Don't take risky fights early just because you have a big ultimate. Veigar wins by being patient.}}",
    late: "<p>Late game, Veigar's burst is huge. Wait for a good cage, then delete the enemy carry. Build {{item:Zhonya's Hourglass}} against divers and {{item:Banshee's Veil}} against picks. Some Veigar players buy a {{item:Rod of Ages}} or {{item:Archangel's Staff}} for extra stats.</p><p>Place your cage between your team and theirs to break their engage, then follow up with your burst on whoever gets stunned.</p>"
  },
  tips: [
    "Last-hit with Q to stack ability power. Two minions with one Q is the goal.",
    "Place E so the enemy has to walk through its edge.",
    "Drop W on stunned enemies to guarantee it lands.",
    "Use R on low-health enemies: it deals more damage the lower they are.",
    "Stay far back in fights: Veigar has no dash.",
    "Be patient early. Your scaling wins the late game."
  ],
  matchups: {
    hard: [
      { id: "Katarina", tip: "She jumps on you. Place your cage around yourself when she comes in." },
      { id: "Velkoz", tip: "He out-pokes you. Farm safely with Q and wait for items." },
      { id: "Leblanc", tip: "Her burst is fast. Play near your tower and cage her when she dashes in." }
    ],
    easy: [
      { id: "Mel", tip: "She was reworked in 26.22. Farm safely and look for cages while you learn her new kit." },
      { id: "Galio", tip: "He's slow. Cage him and stack ability power by poking him." },
      { id: "Azir", tip: "He's weak early. Poke him with Q and cage him when he walks forward." }
    ]
  }
},

/* ------------------------------------------------------------------ YASUO */
{
  id: "Yasuo",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Physical",
  style: "Skirmisher",
  summary: "Yasuo is a swordsman who dashes through minions and knocks enemies into the air. He has bonus critical strike chance, a shield that builds as he moves, and a wall that blocks projectiles. Very hard to master, but very rewarding once you click with him.",
  strengths: [
    "Very mobile: dashes through minions and enemies",
    "Wind Wall blocks all enemy projectiles",
    "Last Breath can lock several airborne enemies in the air at once",
    "Scales very well with critical strike items"
  ],
  weaknesses: [
    "Very hard to play well",
    "Vulnerable to crowd control",
    "Melee, so ranged champions poke him in lane",
    "Nerfed this patch (26.22)"
  ],
  abilities: {
    P: "Way of the Wanderer: your critical strike chance is increased, and you build a shield while you move. The shield triggers when a champion or monster damages you. Keep moving in lane to keep it charged.",
    Q: "Steel Tempest thrusts forward. Hitting it twice stacks Gathering Storm; the next cast fires a whirlwind that knocks enemies up. Casting Q during your E dash makes it hit in a circle around you. It counts as an auto-attack and gets faster with attack speed.",
    W: "Wind Wall creates a wall that blocks enemy projectiles for 4 seconds. Use it to block key skill shots and attacks from ranged champions, not just in panic.",
    E: "Sweeping Blade dashes through an enemy unit. Each cast deals more damage, and you can't dash through the same unit again for a few seconds. Dash through minions to move around, get close and dodge.",
    R: "Last Breath blinks to an airborne enemy champion and keeps every nearby airborne enemy in the air. It works with any knock-up, including your teammates'. After it, your critical strikes ignore part of the target's armor."
  },
  combos: [
    { name: "Tornado", keys: "Q → Q → Q (whirlwind)", note: "Stack two Qs, then fire the whirlwind to knock up enemies." },
    { name: "Circle Q", keys: "E → Q (during dash)", note: "Dash through a minion and Q during the dash for a circle hit." },
    { name: "Full combo", keys: "Q → Q → E → Q (whirlwind) → R", note: "Stack Q, dash in, knock up with the whirlwind, then ultimate." }
  ],
  spikes: [
    "Level 2: Q + E lets you trade well.",
    "Level 6: Last Breath gives you kill threat.",
    "First item ({{item:Immortal Shieldbow}}): much safer trades.",
    "Two items ({{item:Infinity Edge}}): your crits hit very hard."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Bow}} and a potion, level Q first and max Q, then E, then W. Your keystone is {{rune:Lethal Tempo}}, which increases your attack speed in longer fights, with {{spell:Flash}} and {{spell:Ignite}}.</p><p>Stack Q on minions and look for whirlwind hits on the enemy. Use E to dash through minions and dodge skill shots. Keep moving to keep your passive shield up.</p>{{tip:This patch, Yasuo's Q damage was nerfed slightly (105% to 100% AD), and Doran's Bow lost 1 AD. He's still fine, but your early trades are a little weaker.}}",
    mid: "<p>With {{item:Immortal Shieldbow}}, look for skirmishes where your team can knock enemies up. Your ultimate works with any knock-up, not just yours, so pair well with teammates who have one.</p><p>Push side lanes with E and Q, and join fights when your whirlwind is ready.</p>{{warn:Don't dash into the enemy wave without a plan. A Yasuo with no way out dies very quickly.}}",
    late: "<p>Late game, wait for your team to knock up enemies, then ultimate onto them. Build {{item:Guardian Angel}} if they focus you, or {{item:Mercurial Scimitar}} against heavy crowd control. Block the enemy carry's attacks with Wind Wall during fights.</p>"
  },
  tips: [
    "Your ultimate works on any airborne enemy, even from your team's knock-ups.",
    "Use Wind Wall to block the key skill shot, not just the first one you see.",
    "Dash through minions to move around and dodge.",
    "Stack Q on minions before trading.",
    "Keep moving: your passive shield builds as you walk.",
    "Don't dash into the enemy wave without a way out."
  ],
  matchups: {
    hard: [
      { id: "AurelionSol", tip: "He scales and pokes. Look for early trades before he gets strong." },
      { id: "Lissandra", tip: "Her crowd control stops your dashes. Wait for her ultimate before going in." },
      { id: "Vladimir", tip: "He heals through your trades. Play for late game and avoid long fights early." }
    ],
    easy: [
      { id: "Mel", tip: "She was reworked in 26.22. Play your usual trade pattern while you learn her new kit." },
      { id: "Locke", tip: "Locke is a recent champion. Play safely in your first games and learn the matchup." },
      { id: "Akshan", tip: "Your Wind Wall blocks his attacks. Put it up when he goes in." }
    ]
  }
},

/* ------------------------------------------------------------------ ZIGGS */
{
  id: "Ziggs",
  roles: ["mid", "bot"],
  difficulty: "Easy",
  damage: "Magic",
  style: "Artillery mage / siege",
  summary: "Ziggs is a bomb-throwing yordle who loves blowing up turrets. He pokes from long range, knocks himself and enemies around with his satchel, and his ultimate can hit almost anywhere on your screen. He's played in mid lane and in bot lane as a mage carry, and few champions take towers faster.",
  strengths: [
    "Satchel Charge can instantly destroy low-health turrets",
    "Long-range poke and very fast wave clear",
    "Mega Inferno Bomb has enormous range",
    "Easy to learn"
  ],
  weaknesses: [
    "Satchel Charge is his only escape",
    "Weak against assassins and divers",
    "His damage is mostly poke, not instant burst",
    "Weaker in long, close-range fights"
  ],
  abilities: {
    P: "Short Fuse: every so often, your next basic attack deals bonus magic damage. Using abilities lowers the cooldown. Use the empowered attack on enemies when you're close enough, or on cannon minions and turrets.",
    Q: "Bouncing Bomb bounces a few times before exploding. Aim at the spot where the enemy is going to be, and use it to clear casters from long range.",
    W: "Satchel Charge throws a bomb that explodes after a delay or when you recast. It knocks enemies away, and it knocks you away too without hurting you. It can blow up a low-health enemy turret instantly. Throw it behind enemies to push them into your team, or at your feet to escape.",
    E: "Hexplosive Minefield scatters mines that slow and damage. Throw it between you and a diver, or over the wave to zone the enemy.",
    R: "Mega Inferno Bomb is a huge bomb with enormous range. Hit the center for more damage. Use it to finish low enemies, clear waves late game, and help other lanes."
  },
  combos: [
    { name: "Poke", keys: "Q → auto", note: "Hit Q, then auto-attack with Short Fuse if they're in range." },
    { name: "Full burst", keys: "E → Q → R", note: "Slow them with mines, then Q and ultimate while they're stuck." },
    { name: "Escape", keys: "W (at your feet) → recast", note: "Throw Satchel Charge at your feet, then recast to knock yourself away, even over walls." },
    { name: "Turret finisher", keys: "W (on turret)", note: "When the enemy turret is low, Satchel Charge blows it up instantly." }
  ],
  spikes: [
    "Level 2: Q + auto pokes well.",
    "Level 6: Mega Inferno Bomb lets you finish kills from anywhere on your screen.",
    "First item ({{item:Luden's Echo}}): stronger poke and wave clear.",
    "Three items ({{item:Rabadon's Deathcap}}): your Q and ultimate deal huge damage."
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}}, level Q first and max Q, then E, then W. Your keystone is {{rune:Arcane Comet}} for long-range poke, with {{spell:Flash}} and {{spell:Teleport}}.</p><p><strong>Mid lane:</strong> poke with Q from max range and farm the casters. Ziggs pushes fast, so shove the wave and look for turret plates.</p><p><strong>Bot lane:</strong> you're the carry. Pair with a support who protects you, like {{champ:Lulu}} or {{champ:Braum}}, or one with lots of poke. Push the wave with Q, poke the enemy duo, and take turret plates with Short Fuse attacks and W.</p>{{tip:In bot lane, Ziggs is one of the best champions at taking the first turret. Push hard and finish it with W when it's low.}}",
    mid: "<p>With {{item:Luden's Echo}}, push side lanes and take towers. Satchel Charge can destroy a low-health turret instantly, so look for turrets that are close to falling.</p><p>Group for dragons and Void Grubs. Poke the enemy team before the fight and keep your ultimate for finishing kills.</p>{{warn:Ziggs is weak to divers. Don't walk alone into side lanes without vision. Push from max range with Q.}}",
    late: "<p>Late game, poke from range before fights and use your ultimate to hit as many enemies as possible. Build {{item:Zhonya's Hourglass}} against divers, {{item:Void Staff}} against magic resist, and {{item:Morellonomicon}} against healing.</p><p>Use your wave clear to push side lanes from a safe distance, and look for turrets to finish with W.</p>"
  },
  tips: [
    "Use W to destroy low-health turrets instantly.",
    "Poke with Q from long range and aim where the enemy is walking.",
    "Throw E between you and a diver to slow them.",
    "Your ultimate has huge range: use it to help other lanes.",
    "In bot lane, focus on taking towers early with your support.",
    "Throw W at your feet and recast to escape, even over walls."
  ],
  matchups: {
    hard: [
      { id: "Irelia", tip: "She dashes onto you. Keep mines and Satchel Charge ready to knock her away." },
      { id: "Katarina", tip: "She jumps on you fast. Satchel Charge her away when she comes in." },
      { id: "Leblanc", tip: "Her burst is quick. Play near your tower and keep W ready to escape." }
    ],
    easy: [
      { id: "Talon", tip: "Poke him from range and keep W ready to escape when he jumps." },
      { id: "Akshan", tip: "Out-poke him with Q and push the wave so he can't roam." },
      { id: "Galio", tip: "He's slow. Poke him with Q and E, and shove the wave to take plates." }
    ]
  }
}

);
