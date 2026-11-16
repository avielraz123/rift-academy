window.RA = window.RA || {};
RA.champs = RA.champs || [];
RA.champRoles = RA.champRoles || {};
RA.champPicks = RA.champPicks || {};

/* ---------------- Lissandra ---------------- */
RA.champs.push({
  id: "Lissandra",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Control mage / pick-off",
  summary: "Lissandra is an ice witch who locks enemies in place and then disappears into her own ice when they hit back. She is safe in lane against melee champions, has some of the best crowd control of any mage, and her ultimate is both a stun and a get-out-of-jail card. Pick her if you like catching people out of position and starting fights on your terms.",
  strengths: [
    "Huge crowd control: a slow, a root around her and a single-target stun",
    "Her ultimate can make her untargetable, so divers and assassins struggle to kill her",
    "Very strong into melee mids like {{champ:Yasuo}}, {{champ:Akali}} and {{champ:Yone}}",
    "Glacial Path lets her start fights from long range or escape over walls"
  ],
  weaknesses: [
    "Short range compared to artillery mages: long-range poke bullies her in lane",
    "Her damage falls off if she falls behind; she's a playmaker, not a hyper-carry",
    "Glacial Path is a slow, visible claw that smart enemies can see coming",
    "Mana-hungry early if you spam Ice Shard on the wave"
  ],
  abilities: {
    P: "Iceborn Subjugation turns enemies who die near you into Frozen Thralls that slow and then explode. In teamfights this adds surprise damage after the first kill, so keep fighting near the corpse.",
    Q: "Ice Shard is your main trading and wave-clear tool. It passes through the first enemy, so throw it through a minion to hit the champion behind. The slow helps you chase or land Ring of Frost.",
    W: "Ring of Frost roots everyone around you. Its range is short, so you usually get into range with Glacial Path or Flash first. Root, then Ice Shard: they can't dodge it.",
    E: "Glacial Path sends out an ice claw. Recast it to teleport to the claw. Use it to engage from fog of war, to cross walls when escaping, or as a fake: send it out without following to bait a reaction.",
    R: "Frozen Tomb on an enemy stuns them and slows everyone nearby. Cast on yourself, you become untargetable and heal, which buys time against dives and lets teammates arrive. Choosing between the two is the biggest skill on Lissandra."
  },
  combos: [
    { name: "Standard engage", keys: "E → E (recast) → W → R → Q", note: "Glide in with Glacial Path, root with Ring of Frost, stun the main target with Frozen Tomb, then finish with Ice Shard. Hold Flash for the follow-up." },
    { name: "Flash surprise", keys: "Flash → W → R → Q", note: "When the enemy is just out of Ring of Frost range, Flash in. Hard to react to because there's no claw to warn them." },
    { name: "Self-ult escape", keys: "R (self) → E → E (recast)", note: "Against a dive, freeze yourself while the claw travels, then teleport away when the ice ends." },
    { name: "Lane trade", keys: "Q → auto", note: "Ice Shard through a minion, then walk up for an auto-attack while they're slowed. Back off before they can answer." }
  ],
  spikes: [
    "Level 2: Ice Shard plus Ring of Frost lets you win short trades against melee champions",
    "Level 6: Frozen Tomb turns every gank into a likely kill and makes you hard to dive",
    "First item ({{item:Malignance}}): ultimate comes back faster and burns enemies standing in your ice",
    "Two items ({{item:Shadowflame}}): enough burst to delete squishy carries you lock down",
    "Three items ({{item:Zhonya's Hourglass}}): a second stasis on top of your self-ult makes you nearly impossible to burst"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions, with {{spell:Flash}} and {{spell:Teleport}} (the most common pick at higher ranks). Your runes are usually {{rune:Electrocute}} with {{rune:Cheap Shot}}; against long-range mages many players take {{rune:Arcane Comet}} instead.</p><p>Take Ice Shard first, then Ring of Frost at level 2. Into melee champions you're the bully: whenever they walk up for a last hit, throw Ice Shard through a minion and root them if they get close. Against ranged mages like {{champ:Xerath}} or {{champ:Lux}}, play patiently and farm with Ice Shard; you can't reach them, so focus on {{guide:last-hitting}} and wait for level 6 and your jungler.</p>{{tip:Ring of Frost roots instantly around you. If a melee champion dashes onto you, press W the moment they land. They'll be stuck in your face while you hit them with everything.}}",
    mid: "<p>After level 6, Lissandra becomes a ganking threat. Push your wave, then roam to side lanes with your jungler: Glacial Path from fog of war, Frozen Tomb on the target, and your teammates do the rest. See {{guide:roaming}} for when it's safe to leave.</p><p>Around dragon and Rift Herald, stand in fog near the pit entrance. Enemies have to walk through chokepoints, which is exactly where your root and stun shine. Your job is to catch one person before the fight starts.</p>{{warn:Don't throw Glacial Path into five enemies with no follow-up. You'll land, root two people, and die. Check that your team is close enough to commit with you.}}",
    late: "<p>In late teamfights you have two jobs, and you pick one based on the situation. If your team wants to engage, stun the enemy's most dangerous carry or frontline engager with Frozen Tomb and root everyone around you. If the enemy dives your carry, use your crowd control on the divers instead, and self-ult if they turn on you.</p><p>Don't be the first person into the fight unless the enemy carry is truly isolated. A late Ring of Frost on three enemies after they've used their dashes is often worth more than an early engage. Read {{guide:teamfighting}} for positioning.</p>"
  },
  tips: [
    "Ice Shard extends after hitting the first target. Use minions as a launcher to hit champions behind them.",
    "Glacial Path can be recast at any point along its path, not just at the end. Stop it early to land at the right distance.",
    "Self-ult is not only defensive: you can ult yourself in the middle of enemies to slow everyone around you.",
    "Frozen Tomb on an enemy also slows enemies around them. Use it on the frontline to slow their whole team.",
    "Against assassins, hold your ultimate until they commit. A self-ult after their burst wastes their combo.",
    "Use {{item:Zhonya's Hourglass}} and self-ult one after the other to survive long dives."
  ],
  matchups: {
    hard: [
      { id: "Hwei", tip: "He out-ranges you with many skill shots. Farm safely, stand behind minions, and wait for your jungler before going in." },
      { id: "Xerath", tip: "He pokes from far away and you can't reach him. Take {{rune:Arcane Comet}}, farm with Ice Shard and roam after level 6." },
      { id: "Lux", tip: "Dodge Light Binding by moving sideways, never in a straight line. Engage only when her Q is on cooldown." }
    ],
    easy: [
      { id: "Yasuo", tip: "He has to walk into Ring of Frost range to trade. Root him the moment he dashes in, and Frozen Tomb ignores his Wind Wall." },
      { id: "Akali", tip: "When she goes into her shroud, Ring of Frost around yourself still hits her if she's close. Save it for when she commits." },
      { id: "Yone", tip: "Root him after his E dash so he snaps back with no way to dodge your follow-up. Self-ult if he lands his ultimate on you." }
    ]
  }
});

RA.champPicks.Lissandra = {
  blind: { safe: true, why: "Safe to pick early: she's strong against melee mids, and even against mages she can farm and still be useful for ganks after level 6." },
  into: [
    "Melee mids who must walk up to you, like {{champ:Yasuo}}, {{champ:Yone}} and {{champ:Akali}}",
    "Dive-heavy enemy teams: self-ult and Ring of Frost stop divers like {{champ:Diana}} or {{champ:Zed}}",
    "Teams with one key carry you can lock down with Frozen Tomb",
    "Games where your team has follow-up damage after you start the fight"
  ],
  avoid: [
    "Long-range artillery mages like {{champ:Xerath}} and {{champ:Hwei}} who poke you without coming close",
    "Teams with no follow-up: your engage does little if nobody can kill the target",
    "Very spread-out poke comps that never group for your Ring of Frost"
  ],
  teammates: [
    { id: "Ekko", why: "Fast jungle follow-up: Ekko arrives right as your Frozen Tomb lands." },
    { id: "Malphite", why: "Two big area engages. Malphite's ultimate and your Ring of Frost lock down a whole team." },
    { id: "Jinx", why: "A carry who cleans up fights after you catch someone." }
  ],
  teamNeeds: "Pick Lissandra when your team has damage dealers ready to follow your engage, because her own damage fades later in the game.",
  quiz: [
    { q: "The enemy mid is Yasuo. Why is Lissandra a good answer?", options: ["Ring of Frost and Frozen Tomb punish his dashes, and Wind Wall can't block them", "She out-farms him with longer range", "She builds armor to block his crits", "She can't be hit by Steel Tempest"], answer: 0, explain: "Yasuo has to dash into melee range. Ring of Frost roots him on landing, and her abilities aren't projectiles that Wind Wall can stop.", enemy: ["Yasuo", "LeeSin", "Malphite", "Jinx", "Thresh"] },
    { q: "When should Lissandra use Frozen Tomb on herself instead of an enemy?", options: ["When she's being dived and needs to survive until help arrives", "Only to heal after laning", "Always at the start of a fight", "Never, it's a waste"], answer: 0, explain: "Self-ult makes her untargetable and heals her, which wastes the enemy's burst and buys time for her team." },
    { q: "Your team is Garen, Shaco, Yasuo (bot) and Yuumi. Which mid is the best pick for your team?", options: ["Lissandra, for reliable engage and crowd control", "Another assassin with no crowd control", "A champion with only poke", "Whatever has the highest win rate"], answer: 0, explain: "Your team lacks reliable crowd control to start fights. Lissandra brings roots and a stun that set up Yasuo's knock-up combos.", ally: ["Garen", "Shaco", "Yasuo", "Yuumi"], enemy: ["Darius", "Vi", "Jinx", "Leona"] }
  ]
};

/* ---------------- Locke ---------------- */
RA.champs.push({
  id: "Locke",
  roles: ["mid"],
  difficulty: "Hard",
  damage: "Magic",
  style: "Hunter / burst skirmisher",
  summary: "Locke is a new 2026 champion: a hunter who marks targets with nails, dashes onto them and finishes them with an ultimate that can execute. He deals magic damage through his abilities and his basic attacks, and gets stronger against wounded enemies. He's popular and banned often, but he's also new and still being balanced, so expect his numbers to change from patch to patch.",
  strengths: [
    "Strong finishing power: his passive and ultimate get better as the enemy loses health",
    "Ashen Pursuit gives him a teleport and a dash to reach targets",
    "Soul Ignition makes him fast and attack quickly for short all-ins",
    "Snowballs well: his ultimate gains power when he seals away champions"
  ],
  weaknesses: [
    "Soul Ignition costs him his own health, so a bad all-in can leave him very low",
    "New champion: Riot is still tuning him (nerfed in 26.22, retuned in 26.21)",
    "Struggles against fast, slippery assassins like {{champ:Katarina}} and {{champ:Akali}}",
    "Has to get close to use his attacks, which is risky against crowd control"
  ],
  abilities: {
    P: "Silver Stake adds magic damage to your attacks, and it grows the lower the enemy's health is. Look for wounded targets: you get stronger the closer they are to dying.",
    Q: "Ritual Nails throws a set of nails that damage and mark enemies. Your attacks then consume the marks for bonus damage, so hit Q first and follow up with auto-attacks. Missing it means a much weaker trade. After the 26.22 nerf, the mark damage is lower than before.",
    W: "Soul Ignition gives attack speed and move speed but damages you over its duration, and heals back part of that damage when it ends. Use it when you're about to win a fight, not when you're already low. In 26.22 its duration dropped to 5 seconds.",
    E: "Ashen Pursuit teleports you to a spot, then dashes you into your next target and damages enemies you pass through. It's your engage and your gap-closer, so don't waste it on farming when a fight could happen.",
    R: "Purgatory throws a binding artifact that damages enemies and can execute them. Use it to finish a fight, not to start one: the lower the target, the better your chances. Sealing champions away makes you stronger for the rest of the game."
  },
  combos: [
    { name: "Mark and dash", keys: "Q → E → auto → auto", note: "Mark the target with Ritual Nails, close the gap with Ashen Pursuit, then auto-attack to consume the marks." },
    { name: "All-in finish", keys: "Q → E → W → autos → R", note: "Turn on Soul Ignition once you're in range, auto until they're low, then throw Purgatory to finish." },
    { name: "Poke and leave", keys: "Q → auto → walk back", note: "In lane, land Ritual Nails, step up for one or two autos to cash in the marks, then back off before they trade back." }
  ],
  spikes: [
    "Level 3: all three basic abilities give you a real all-in with {{rune:Electrocute}}",
    "Level 6: Purgatory can finish low-health enemies, so every good trade becomes a kill threat",
    "First item ({{item:Lich Bane}}): your attacks after spells hit much harder",
    "Two items ({{item:Shadowflame}}): enough burst to kill squishy carries in one rotation",
    "Three items ({{item:Zhonya's Hourglass}}): lets you dive in, use everything, and survive the response"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions with {{spell:Flash}} and {{spell:Ignite}}. The common runes are {{rune:Electrocute}}, {{rune:Sudden Impact}}, {{rune:Sixth Sense}} and {{rune:Ultimate Hunter}}, with {{rune:Bone Plating}} and {{rune:Revitalize}} from Resolve to survive trades. Level Q first, then E, then W.</p><p>Your lane pattern is simple: land Ritual Nails, then walk up and auto-attack to consume the marks. Don't start a long fight unless you're sure you win it, because Soul Ignition drains your health. Against mages without dashes, like {{champ:Orianna}} or {{champ:Xerath}}, Ashen Pursuit lets you reach them once they waste their main spell.</p>{{tip:Fight wounded enemies. Silver Stake and Purgatory both get stronger against low-health targets, so trade early, wait for your cooldowns, then go for the kill.}}",
    mid: "<p>Once you have {{item:Lich Bane}} and level 6, look for skirmishes in the river and side lanes. You're best at catching one player and finishing them before help arrives. Push your wave first, then move with your jungler. See {{guide:roaming}}.</p><p>Keep track of the enemy's crowd control. Locke has to get close, and a single stun can stop your whole combo. Wait for the main crowd control spell to be used before you commit.</p>{{warn:Don't activate Soul Ignition when you're already low. It damages you first and only heals part back at the end, so it can kill you if the fight goes wrong.}}",
    late: "<p>In late teamfights, don't go first. Let your frontline and the enemy's engage happen, then use Ashen Pursuit to reach a backline carry who's already damaged. Your execute power is best on targets your team has softened up.</p><p>Hold Purgatory as a finisher. With {{item:Zhonya's Hourglass}} you can dive in, use your combo, and wait out the enemy's response. Stay with your team; Locke is not a strong split pusher. Read {{guide:teamfighting}} for target selection.</p>"
  },
  tips: [
    "Locke is new and still being balanced. Check the patch notes each patch: his Q and W were nerfed in 26.22.",
    "Always land Ritual Nails before your autos. The marks are a big part of your damage.",
    "Ashen Pursuit can travel over walls with its teleport. Use it to surprise enemies from fog of war.",
    "Purgatory is a finisher. Throw it when the target is low, not at full health.",
    "Watch your health bar when you use Soul Ignition. Only use it when you're winning the fight.",
    "He's banned in about 30% of games at high ranks, so have a second champion ready."
  ],
  matchups: {
    hard: [
      { id: "Katarina", tip: "She resets and dodges around you. Save Ashen Pursuit until she's used her daggers and Shunpo, and buy {{item:Zhonya's Hourglass}} early." },
      { id: "Akali", tip: "Her shroud hides her from your Ritual Nails. Don't waste Q while she's invisible; wait for her to come out." },
      { id: "Yasuo", tip: "Wind Wall blocks projectiles. Throw Ritual Nails when his wall is on cooldown, and don't all-in when he has full Flow shield." }
    ],
    easy: [
      { id: "Orianna", tip: "She has no dash. Once her ball is used elsewhere, Ashen Pursuit onto her for a strong trade." },
      { id: "Xerath", tip: "He's immobile. Dodge his long-range spells and dash onto him after he uses his stun." },
      { id: "Taliyah", tip: "She's strong at range but weak up close. Close the gap with Ashen Pursuit when her wall and E are down." }
    ]
  }
});

RA.champPicks.Locke = {
  blind: { safe: false, why: "Better as a later pick. He's strong against immobile mages but struggles against slippery assassins, so you want to see the enemy mid first." },
  into: [
    "Immobile mages like {{champ:Xerath}}, {{champ:Orianna}} and {{champ:Taliyah}} that he can dash onto",
    "Squishy backlines that his execute damage can finish",
    "Teams with little crowd control to stop his all-in"
  ],
  avoid: [
    "Slippery assassins like {{champ:Katarina}} and {{champ:Akali}}",
    "Projectile blockers like {{champ:Yasuo}}'s Wind Wall",
    "Teams with lots of point-and-click crowd control that stop his dash"
  ],
  teammates: [
    { id: "Vi", why: "Her ultimate locks a target down so you can mark and finish it." },
    { id: "Leona", why: "Reliable stuns give you time to land your full combo." },
    { id: "Malphite", why: "A frontline engager who opens fights for you to clean up." }
  ],
  teamNeeds: "Pick Locke when your team has crowd control and a frontline, so you can finish targets they lock down.",
  quiz: [
    { q: "Which enemy mid is a tough matchup for Locke?", options: ["Katarina", "Xerath", "Orianna", "Taliyah"], answer: 0, explain: "Katarina's resets and dashes make it hard to land Ritual Nails and finish her. The others are immobile mages Locke can dash onto.", enemy: ["Katarina", "Vi", "Ornn", "Jhin", "Nautilus"] },
    { q: "When should Locke throw Purgatory, his ultimate?", options: ["When the target is already low, to finish them", "At the start of every fight on a full-health target", "Only to clear minion waves", "Never, it's too risky"], answer: 0, explain: "Purgatory can execute, and his damage grows against wounded enemies. Use it as a finisher." },
    { q: "Locke was nerfed in 26.22 and retuned in 26.21. What does that tell you?", options: ["He's new and still being balanced, so check patch notes before playing him", "He's permanently the best champion", "He's being removed from the game", "Nothing; patches don't affect champions"], answer: 0, explain: "New champions often get several balance changes in their first months. Always check what changed this patch." }
  ]
};

/* ---------------- Ekko ---------------- */
RA.champs.push({
  id: "Ekko",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Mobile assassin",
  summary: "Ekko is a time-bending assassin who dives in, bursts a target, and rewinds himself out of danger with his ultimate. He's one of the strongest mids this patch: very safe for an assassin, great at roaming, and strong in both mid and jungle. Pick him if you like high-mobility plays with a built-in escape button.",
  strengths: [
    "Chronobreak rewinds him to safety and heals him, so he can take risky fights",
    "Strong burst with his passive three-hit proc and {{rune:Hail of Blades}}",
    "Parallel Convergence's stun lets him set up long-range plays",
    "Strong roamer and skirmisher; also a great jungler"
  ],
  weaknesses: [
    "Chronobreak shows its return point as a ghost image, so smart enemies wait for him there",
    "Weak if he falls behind; an assassin with no items does little damage",
    "Struggles against durable mages like {{champ:Vladimir}} who can outlast his burst",
    "Parallel Convergence takes a few seconds to land, so it needs good prediction"
  ],
  abilities: {
    P: "Z-Drive Resonance: every third hit with attacks or damaging spells on the same target deals bonus damage and gives you a speed boost if it's a champion. Your combos are built around reaching three hits quickly.",
    Q: "Timewinder throws a grenade that slows enemies in a field and returns to you, hitting again on the way back. Use it to farm waves and to land two hits toward your passive in one cast.",
    W: "Parallel Convergence passively adds damage to your attacks against low-health enemies. When cast, it creates a sphere after a few seconds; walk into it while enemies are inside to stun them and gain a shield. Cast it where enemies will be, not where they are.",
    E: "Phase Dive rolls you a short distance, and your next attack teleports you onto the target. It's your gap-closer: roll, then auto to blink onto a target out of range.",
    R: "Chronobreak makes you untargetable and rewinds you to where you were a few seconds ago, healing you and damaging enemies around that spot. Use it to escape after a dive, or to bring burst back to a group standing where your ghost is."
  },
  combos: [
    { name: "Standard burst", keys: "Q → E → auto", note: "Grenade, roll, then blink onto the target with your auto. That's three hits for your passive proc." },
    { name: "Stun combo", keys: "W → Q → E → auto", note: "Cast Parallel Convergence first, then dive in so the sphere lands while you're fighting. Walk into it to stun." },
    { name: "Dive and rewind", keys: "E → auto → Q → R", note: "Blink into the backline, burst your target, then Chronobreak back to safety and deal damage where you came from." },
    { name: "Wave clear", keys: "Q (through the wave)", note: "Throw Timewinder through the caster minions. It hits them twice." }
  ],
  spikes: [
    "Level 3: full combo; {{rune:Hail of Blades}} makes your first three attacks very fast",
    "Level 6: Chronobreak lets you take risky trades and roams",
    "First item ({{item:Stormsurge}}): huge burst on squishy targets and extra move speed",
    "Two items ({{item:Dusk and Dawn}}): stronger extended fights with spell-empowered attacks",
    "Three items ({{item:Rabadon's Deathcap}}): one-shot range on most carries"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions (or {{item:Dark Seal}} in safer lanes) with {{spell:Flash}} and {{spell:Ignite}}. Runes: {{rune:Hail of Blades}}, {{rune:Sudden Impact}}, {{rune:Grisly Mementos}}, {{rune:Relentless Hunter}}, plus {{rune:Legend: Haste}} and {{rune:Cut Down}}. Max Q, then E, then W.</p><p>Farm with Timewinder through the wave. Your trade pattern is Q into E and an auto to proc your passive, then walk away. At level 3 you can threaten kills on squishy mages. Track the enemy's main defensive spell and all-in when it's down.</p>{{tip:Timewinder hits on the way out and on the way back. Aim it so both hits land on the enemy champion for two of your three passive hits.}}",
    mid: "<p>After level 6 and {{item:Stormsurge}}, Ekko is a roaming monster. Shove your wave, then move to side lanes or the jungle with Phase Dive and your passive speed boost. Chronobreak means you can dive onto targets under tower and still escape. See {{guide:roaming}}.</p><p>Before every objective, cast Parallel Convergence in the chokepoint where enemies will walk. A stun on two players before the fight starts is a huge advantage.</p>{{warn:Enemies can see your Chronobreak ghost. Good players wait at that spot to burst you when you rewind. Move your ghost to a safe place before diving, by walking there for a few seconds first.}}",
    late: "<p>Late game, look for the enemy carry. Flank from the side or behind with Phase Dive, burst them, and rewind out with Chronobreak. If the enemy team groups tightly, Parallel Convergence's stun can catch several of them.</p><p>If you can't reach the carry, you can also split push: Ekko wins most side lane duels and escapes with his ultimate. Read {{guide:side-lanes}} and only split when your team can avoid fighting without you.</p>"
  },
  tips: [
    "Your passive procs after three hits on the same target. Count your hits in every trade.",
    "Phase Dive's auto can blink you onto a target over a wall.",
    "Walk around for a few seconds before diving so your Chronobreak ghost is in a safe spot.",
    "Parallel Convergence lands after a delay. Cast it in a chokepoint before a fight starts.",
    "Chronobreak can also be an offensive spell: rewind into a group to deal damage.",
    "If you're ahead, {{item:Zhonya's Hourglass}} is the most common fourth item against assassins and divers."
  ],
  matchups: {
    hard: [
      { id: "Vladimir", tip: "His pool and sustain let him outlast your burst. Avoid long trades and roam instead of fighting him 1v1." },
      { id: "Fizz", tip: "His E dodges your combo. Bait it out first, then use Phase Dive." },
      { id: "Leblanc", tip: "She bursts first and escapes. Stay near your minions and hold Chronobreak for her all-in." }
    ],
    easy: [
      { id: "Orianna", tip: "She has no dash. Dive her when her ball is on another target or after she uses Shockwave." },
      { id: "Syndra", tip: "Dodge her stun by moving sideways, then dive with Phase Dive when E is on cooldown." },
      { id: "Viktor", tip: "He's immobile and needs space. Walk past his gravity field and burst him." }
    ]
  }
});

RA.champPicks.Ekko = {
  blind: { safe: true, why: "Safe to pick early: Chronobreak gives him an escape in bad matchups, and he can also go jungle if your team needs it." },
  into: [
    "Immobile mages like {{champ:Orianna}}, {{champ:Syndra}} and {{champ:Viktor}}",
    "Squishy backlines he can dive and escape from",
    "Teams that group tightly, for Parallel Convergence stuns"
  ],
  avoid: [
    "Durable mages like {{champ:Vladimir}} who outlast his burst",
    "Champions who dodge his combo, like {{champ:Fizz}}",
    "Teams with lots of crowd control that stop him before he can rewind"
  ],
  teammates: [
    { id: "Lissandra", why: "Her stun locks targets down for your burst." },
    { id: "Malphite", why: "His engage groups enemies for your Parallel Convergence." },
    { id: "Ahri", why: "Her charm sets up easy dives for both of you." }
  ],
  teamNeeds: "Pick Ekko when your team has some engage or a frontline, so you can dive the backline after the fight starts.",
  quiz: [
    { q: "The enemy mid is Orianna. Why is Ekko a good pick?", options: ["She's immobile and he can dive her and rewind out", "He out-ranges her", "She can't hit him with spells", "He heals from her ball"], answer: 0, explain: "Orianna has no dash, so Ekko can dive her when her ball is elsewhere and escape with Chronobreak.", enemy: ["Orianna", "Sejuani", "Ornn", "Kaisa", "Nautilus"] },
    { q: "Why should Ekko walk around a few seconds before diving?", options: ["To set his Chronobreak ghost in a safe spot", "To charge his passive", "To reduce his cooldowns", "To gain gold"], answer: 0, explain: "Chronobreak rewinds you to where you were a few seconds ago. Walking to a safe spot first means you rewind to safety." },
    { q: "Which enemy is hard for Ekko in mid lane?", options: ["Vladimir", "Syndra", "Viktor", "Orianna"], answer: 0, explain: "Vladimir's sustain and his pool let him survive Ekko's burst and win long fights." }
  ]
};

/* Ekko jungle */
RA.champRoles["Ekko:jungle"] = {
  difficulty: "Medium",
  damage: "Magic",
  style: "Ganking assassin jungler",
  summary: "Ekko is just as popular in the jungle as in mid. He clears camps quickly, ganks from strange angles with Phase Dive and Parallel Convergence, and Chronobreak lets him escape invades and dives. Pick him in the jungle if you want an aggressive, high-mobility jungler who can also carry late.",
  strengths: [
    "Fast, healthy clears with Timewinder and {{rune:Dark Harvest}} damage",
    "Strong ganks: slow, stun and a blink onto targets",
    "Chronobreak lets him escape bad invades and dives",
    "Can carry fights late with burst on squishy targets"
  ],
  weaknesses: [
    "Weak to early invaders like {{champ:Nidalee}} and {{champ:Shaco}} before he has items",
    "Ganks fail if Parallel Convergence misses",
    "Needs gold to stay relevant; a failed early game hurts",
    "Less tanky than bruiser junglers in long fights"
  ],
  abilities: {
    P: "Z-Drive Resonance gives you a speed boost after the third hit on a champion. In ganks, it lets you chase down fleeing enemies.",
    Q: "Timewinder is your main clearing spell. Throw it through the camp so both hits land on every monster.",
    W: "Cast Parallel Convergence before you arrive in lane so it lands right when you jump in. A stun plus your laner's follow-up usually means a kill.",
    E: "Phase Dive lets you blink onto a target from over a wall or out of a bush. It's your gank opener.",
    R: "Chronobreak is your escape after a tower dive, or a way to survive an invade. Make sure your ghost is in a safe spot first."
  },
  combos: [
    { name: "Gank from brush", keys: "W → E → auto → Q", note: "Cast W toward the enemy's escape path, blink in with Phase Dive, then slow with Timewinder. Walk into the sphere to stun." },
    { name: "Fast camp clear", keys: "Q → autos → E → auto", note: "Throw Timewinder through the camp, then use Phase Dive's empowered auto for extra damage." },
    { name: "Dive and rewind", keys: "E → auto → Q → R", note: "Dive under tower with your laner, get the kill, then Chronobreak out of tower range." }
  ],
  spikes: [
    "Level 3: full clear done and three abilities for ganks",
    "Level 6: Chronobreak makes tower dives much safer",
    "First item ({{item:Dusk and Dawn}}): stronger clears and fights",
    "Two items ({{item:Shadowflame}}): burst on squishies",
    "Three items ({{item:Rabadon's Deathcap}}): can one-shot carries"
  ],
  phases: {
    early: "<p>Start {{item:Scorchclaw Pup}} and a potion with {{spell:Flash}} and {{spell:Smite}}. Runes: {{rune:Dark Harvest}}, {{rune:Sudden Impact}}, {{rune:Grisly Mementos}}, {{rune:Treasure Hunter}}, plus {{rune:Magical Footwear}} and {{rune:Cosmic Insight}}. Level Q, then W, then E, and max Q first.</p><p>Camps spawn at 0:55. A typical start is a full clear, finishing near the lane you want to gank around 3:00-3:30. Your jungle role quest gives you Primal Smite, extra gold and experience from large camps, and bonus move speed in the jungle and river, so keep your clears healthy. Look for lanes where the enemy has pushed up without vision; Phase Dive from fog of war is hard to react to. See {{guide:jungle-tracking}} for tracking the enemy jungler.</p>{{tip:Cast Parallel Convergence before you're seen. Throw it where the enemy will run, then walk in and blink. The stun lands as they try to escape.}}",
    mid: "<p>After level 6, start tower diving with your laners. Chronobreak lets you take tower shots and still escape. Use Smite on Void Grubs (8:00), Rift Herald (15:00) and dragons; save it for the final hit so the enemy jungler can't steal. Read {{guide:objectives-and-dragons}}.</p><p>Ekko is also strong at counter-ganking: if you track the enemy jungler toward a lane, show up behind them and turn the fight.</p>{{warn:Don't contest invades from strong early junglers like {{champ:Nidalee}} or {{champ:Shaco}} at level 2-3. Give up a camp, and look for revenge after level 6.}}",
    late: "<p>In late fights, play like a mid Ekko: flank, burst the carry, and rewind out. Set up Baron (20:00) and Elder Dragon fights with Parallel Convergence in chokepoints. Your Smite is key to securing big objectives, so stay near them when they spawn.</p><p>Keep vision around objectives with your trinket and Control Wards; see {{guide:vision-control}}.</p>"
  },
  tips: [
    "Camps spawn at 0:55. Plan your first clear to end near the lane you want to gank.",
    "Your jungle quest gives bonus move speed in the jungle and river. Use it to rotate faster.",
    "Save Smite for objectives to prevent steals, not just for clearing.",
    "Gank lanes with crowd control, like {{champ:Lissandra}} or {{champ:Ahri}}, for easy kills.",
    "After level 6, dive under towers and Chronobreak out.",
    "Track the enemy jungler: if they show up top, invade their bottom side."
  ],
  matchups: {
    hard: [
      { id: "Nidalee", tip: "She invades early and clears fast. Ward your entrances and don't fight her before level 6." },
      { id: "Shaco", tip: "He's hard to track and strong early. Keep Control Wards in your jungle and stay near your laners." },
      { id: "Elise", tip: "Her early ganks are strong. Counter-gank her lanes rather than racing her clear." }
    ],
    easy: [
      { id: "Jayce", tip: "He's weak in jungle fights. Invade his camps after level 3." },
      { id: "Zac", tip: "His ganks are slow to set up. Track his jumps and counter-gank." },
      { id: "Qiyana", tip: "Out-clear her and contest objectives; she struggles in the jungle." }
    ]
  }
};

RA.champPicks["Ekko:jungle"] = {
  blind: { safe: true, why: "Safe for a jungler: decent clears, an escape with Chronobreak, and he works with most team comps." },
  into: [
    "Lanes with immobile enemies he can gank easily",
    "Slow, scaling junglers he can invade after level 6",
    "Squishy enemy backlines"
  ],
  avoid: [
    "Strong early invaders like {{champ:Nidalee}} and {{champ:Shaco}}",
    "Teams with many tanks that soak his burst",
    "Teams with heavy crowd control that stop his dives"
  ],
  teammates: [
    { id: "Lissandra", why: "Her crowd control locks targets for your ganks." },
    { id: "Ahri", why: "Charm into your Phase Dive is an easy kill." },
    { id: "Malphite", why: "A top laner with huge engage for dives." }
  ],
  teamNeeds: "Pick Ekko jungle when your lanes have some crowd control, so your ganks get kills.",
  quiz: [
    { q: "The enemy jungler is Nidalee. What should Ekko do early?", options: ["Ward entrances and avoid fighting her before level 6", "Invade her at level 2", "Ignore her and only farm her camps", "Fight her in her jungle"], answer: 0, explain: "Nidalee is very strong early. Ekko should play safe and look for fights after level 6.", enemy: ["Nidalee", "Gnar", "Viktor", "Jinx", "Thresh"] },
    { q: "When should Ekko jungle use Smite?", options: ["To secure objectives with the final hit", "Only on the first camp", "On enemy champions", "Never"], answer: 0, explain: "Saving Smite for objectives like dragon prevents steals." },
    { q: "What does the jungle role quest give Ekko?", options: ["Primal Smite, extra gold and XP from big camps, and bonus move speed in the jungle", "Free Teleport", "Free boots upgrades", "+8% AP"], answer: 0, explain: "The jungle quest rewards help junglers clear faster and rotate quicker." }
  ]
};

/* ---------------- Twisted Fate ---------------- */
RA.champs.push({
  id: "TwistedFate",
  roles: ["mid"],
  difficulty: "Medium",
  damage: "Magic",
  style: "Global roamer / pick mage",
  summary: "Twisted Fate is a card-throwing gambler whose ultimate reveals every enemy and lets him teleport anywhere on the map. He's the classic roaming mid: push your wave, then appear in a side lane with a Gold Card stun. Pick him if you like map pressure, smart roams and helping the whole team win.",
  strengths: [
    "Destiny gives map-wide pressure: you can join any fight after level 6",
    "Gold Card is a reliable, targeted stun",
    "Strong wave clear with Wild Cards and Red Card",
    "Destiny reveals all enemies, and since 26.21 it also reveals untargetable champions"
  ],
  weaknesses: [
    "Weak in 1v1 fights against assassins and strong lane bullies",
    "Low mobility; caught without Flash, he dies easily",
    "Needs his team to follow up on his stun for kills",
    "Gate has a channel that enemies can see coming"
  ],
  abilities: {
    P: "Loaded Dice gives you a little extra gold every time you kill a unit. Over a game, it adds up, so farm well.",
    Q: "Wild Cards throws three cards in a cone. Use it to clear waves and to poke, or to finish a stunned target.",
    W: "Pick a Card cycles Blue (restores mana), Red (area damage and slow) and Gold (stun). Lock Gold for fights and ganks, Red for waves, Blue for mana. Practice locking the right card quickly.",
    E: "Stacked Deck: every fourth attack deals bonus damage, and it passively gives attack speed. Weave autos in your trades.",
    R: "Destiny reveals every enemy champion and lets you cast Gate to teleport anywhere nearby after a short channel. Use it to roam, to join fights, or to flank. Since 26.21, it also reveals untargetable champions."
  },
  combos: [
    { name: "Gold Card pick", keys: "W (Gold) → auto → Q", note: "Stun with Gold Card, then throw Wild Cards at the stunned target so they can't dodge." },
    { name: "Gate gank", keys: "R → Gate → W (Gold) → auto → Q", note: "Lock Gold Card before you land, then stun the target as soon as you arrive." },
    { name: "Wave clear", keys: "W (Red) → Q", note: "Red Card into the caster minions, then Wild Cards to finish the wave fast before a roam." }
  ],
  spikes: [
    "Level 2: Gold Card stun lets you threaten short trades",
    "Level 6: Destiny turns every side lane fight into a possible 2v1 or 3v2",
    "First item ({{item:Rod of Ages}}): grows your health and mana over time",
    "Two items ({{item:Lich Bane}}): Gold Card plus empowered auto deals big burst",
    "Three items ({{item:Rapid Firecannon}}): longer-range Gold Card stuns from safety"
  ],
  phases: {
    early: "<p>Start {{item:Doran's Ring}} and two potions with {{spell:Flash}} and {{spell:Teleport}}. Runes: {{rune:Arcane Comet}}, {{rune:Manaflow Band}}, {{rune:Celerity}}, {{rune:Scorch}}, plus {{rune:Bone Plating}} and {{rune:Unflinching}}. Take W first, then Q.</p><p>In lane, use Blue Card to keep your mana up and Red Card to clear waves. Your goal is to push quickly so you can roam at level 6. Against strong lane bullies like {{champ:Vladimir}} or {{champ:Xerath}}, play safe and farm with Wild Cards. Push before every roam; see {{guide:wave-management}}.</p>{{tip:Lock Gold Card before you walk into a gank. It takes time to cycle, and you want the stun ready when you arrive.}}",
    mid: "<p>After level 6, every side lane is in danger. Push your wave, check the map, and Destiny to a lane where your teammate is fighting. Gold Card the enemy and help secure the kill. Your role quest as a mid laner gives +8% AD and AP and a free boots upgrade, which helps your roams.</p><p>Use Destiny to scout too. It reveals every enemy, so you can see where the enemy jungler is and tell your team. See {{guide:roaming}} for timing.</p>{{warn:Don't Gate into a lane without checking for hidden enemies. Destiny reveals champions, so look before you leap.}}",
    late: "<p>Late game, TF is a pick champion. Use Gold Card on whoever is out of position, and use Destiny to flank teamfights or catch a split pusher. Rapid Firecannon lets you stun from further away.</p><p>Stay with your team in fights; your stun is valuable but you're fragile. Read {{guide:teamfighting}} for positioning.</p>"
  },
  tips: [
    "Practice locking the right card quickly. It's the most important skill on TF.",
    "Push your wave before every roam so you don't lose minions.",
    "Destiny reveals every enemy champion, and since 26.21 also untargetable ones. Use it to scout.",
    "Lock Gold Card before you Gate in.",
    "Red Card's slow is great for waves and for chasing several enemies.",
    "Track the enemy Flash; your Gold Card stun is best when they have no escape."
  ],
  matchups: {
    hard: [
      { id: "AurelionSol", tip: "He scales and controls the lane with poke. Farm safely and roam to impact other lanes." },
      { id: "Xerath", tip: "He out-ranges you. Clear with Wild Cards from max range and roam after level 6." },
      { id: "Vladimir", tip: "His sustain lets him win long trades. Avoid fighting him; push and roam instead." }
    ],
    easy: [
      { id: "Akali", tip: "Gold Card her when she comes out of her shroud. Push and roam when she can't follow." },
      { id: "Azir", tip: "Clear his soldiers with Wild Cards and roam; he struggles to follow you." },
      { id: "Galio", tip: "Push him in and Gate to side lanes before he can match you with his ultimate." }
    ]
  }
});

RA.champPicks.TwistedFate = {
  blind: { safe: true, why: "Reasonably safe to pick early: he can farm and roam in most matchups, though strong lane bullies make his life harder." },
  into: [
    "Champions who can't follow his roams, like {{champ:Azir}} and {{champ:Akali}}",
    "Teams with strong side lanes that can use his help",
    "Comps that need pick potential"
  ],
  avoid: [
    "Strong lane bullies like {{champ:Vladimir}} and {{champ:Xerath}}",
    "Teams with lots of hard engage that he can't escape",
    "Comps that already lack damage"
  ],
  teammates: [
    { id: "Vi", why: "Her ultimate and his Gold Card make a locked-down combo." },
    { id: "Nautilus", why: "Hard crowd control that chains with your stun." },
    { id: "Darius", why: "A strong side lane who wins fights when you join." }
  ],
  teamNeeds: "Pick TF when your side lanes can use extra help and your team can follow up on his picks.",
  quiz: [
    { q: "What's the best time for TF to use Destiny?", options: ["After pushing his wave, to join a side lane fight", "At the start of the game", "Only to escape", "Never"], answer: 0, explain: "Pushing first means you don't lose minions while you roam to help another lane." },
    { q: "The enemy mid is Xerath. How should TF play?", options: ["Farm safely and roam after level 6", "All-in him at level 2", "Ignore his poke and walk up", "Fight him under his tower"], answer: 0, explain: "Xerath out-ranges TF, so TF should farm safely and use his ultimate to help other lanes.", enemy: ["Xerath", "LeeSin", "Darius", "Jinx", "Nautilus"] },
    { q: "Which card should TF usually lock for a gank?", options: ["Gold Card (stun)", "Blue Card (mana)", "Red Card (slow)", "Any card"], answer: 0, explain: "Gold Card stuns the target so your teammate can follow up." }
  ]
};
