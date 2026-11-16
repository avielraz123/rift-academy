window.RA = window.RA || {};
RA.guides = RA.guides || [];

/* ---------- 1. Wave management ---------- */
RA.guides.push({
  id: "wave-management",
  title: "Wave Management: Push, Freeze and Crash",
  level: "intermediate",
  category: "laning",
  minutes: 8,
  summary: "Control where the minion wave sits in your lane, and you control when fights happen, how safe you are, and how much gold your opponent gets.",
  sections: [
    {
      h: "Why waves matter",
      html: "<p>Minion waves are the heartbeat of every lane. Where the wave sits decides who is safe, who can be ganked, who can roam, and who loses gold. Two players with the same mechanics can have very different games just because one of them moves the wave on purpose and the other just hits whatever is in front of them.</p>" +
        "<p>The basic rule: <strong>the side with more minions pushes</strong>. If your wave has more minions (or stronger ones, like a cannon), it kills the enemy wave and walks toward their tower. Every time you kill an enemy minion, you change that balance. Wave management is simply choosing <em>how fast</em> you kill minions to put the wave where you want it.</p>" +
        "<p>Waves arrive every 30 seconds early on, then every 25 seconds from 14:00 and every 20 seconds from 30:00. The first cannon comes on wave 3 (1:30), then every third wave until 14:00, every second wave until 25:00, and every wave after that. Cannon waves push harder, so plan around them.</p>"
    },
    {
      h: "The five wave states",
      html: "<table><tr><th>Technique</th><th>How</th><th>Use it when</th></tr>" +
        "<tr><td><strong>Fast push</strong></td><td>Kill the wave as quickly as you can with abilities and attacks.</td><td>You want to recall, roam, help at an objective, or you need to get to the tower before your opponent.</td></tr>" +
        "<tr><td><strong>Slow push</strong></td><td>Only last-hit, or kill just the enemy casters first, and let your wave build up over 2-3 waves.</td><td>You want a huge wave to crash into the tower, often before a recall or a dive.</td></tr>" +
        "<tr><td><strong>Crash</strong></td><td>Push a big wave all the way into the enemy tower.</td><td>Right before you recall or roam, so your opponent has to farm under tower and loses minions.</td></tr>" +
        "<tr><td><strong>Freeze</strong></td><td>Keep the wave just outside your own tower range by only last-hitting, with a few more enemy minions than yours.</td><td>You're ahead or your opponent is weak, and you want them to walk forward to farm.</td></tr>" +
        "<tr><td><strong>Bounce</strong></td><td>After you crash a wave, the tower kills your minions and the next wave pushes back to you.</td><td>Naturally happens after a crash. Time your recall so you come back as the wave arrives.</td></tr></table>" +
        "{{tip:Kill the enemy caster minions first when you want to slow push. They have low health and deal the most damage to your minions, so removing them lets your wave win the fight slowly and pile up.}}"
    },
    {
      h: "How to freeze",
      html: "<p>A freeze is the most powerful wave state for a player who is ahead. You hold the wave close to your tower, so your opponent has to walk deep into your side of the map to get gold and experience. That means they're far from safety and easy to gank.</p>" +
        "<ol><li>The wave needs to be meeting near your tower, but <strong>outside</strong> of its range. If the tower hits the enemy minions, the freeze breaks.</li>" +
        "<li>Keep a few more enemy minions than allied ones (about 3-4 extra caster minions is a good amount). If the numbers are even, the wave drifts toward you.</li>" +
        "<li>Only last-hit. Don't use abilities on minions, and don't auto-attack minions that aren't about to die.</li>" +
        "<li>If the enemy wave gets too big, kill a few extra enemy minions to keep it from pushing into tower range.</li></ol>" +
        "<p>Freezes are easier to hold when you're the bigger threat. If your opponent can walk up and fight you for free, they'll just push the wave out of the freeze.</p>"
    },
    {
      h: "Crashing before you recall",
      html: "<p>The cleanest way to recall is: push the wave, crash it into the enemy tower, then recall. While you're shopping, the enemy has to clear your minions under their tower (where they can't trade or roam freely), and you'll come back as the wave bounces back toward you. You lose almost nothing.</p>" +
        "<p>Recalling with the wave pushing <em>toward</em> you is the opposite: your minions die to the enemy wave, the enemy wave crashes into your tower, and you lose gold and experience. Turret plates don't fall off any more in 2026, so a big wave hitting your tower while you're gone can also cost your team plates for the rest of the game.</p>" +
        "{{warn:Recalling with a big enemy wave about to hit your tower. Even if your health is low, it's often worth spending 10 more seconds to push the wave first, unless you're in danger of dying.}}"
    },
    {
      h: "Cannon waves and timing",
      html: "<p>Cannon minions have lots of health and deal strong damage, so a cannon wave pushes harder than a normal one. That makes cannon waves great waves to crash. If you're slow pushing, try to let the cannon wave be the one that hits the tower.</p>" +
        "<p>Cannon minions are also worth the most gold of any minion (50 gold, growing slowly over the game). Never miss them for a trade. A common trick is to time big trades or all-ins for the moment your opponent goes to last-hit the cannon, because they have to walk forward and use an attack on it.</p>" +
        "<p>Later in the game, cannons come every second wave (from 14:00) and then every wave (from 25:00), so waves get much stronger. A late-game wave can take a tower on its own, which is why side lanes matter so much. See {{guide:side-lanes}}.</p>"
    },
    {
      h: "Choosing the right technique",
      html: "<ul><li><strong>You won a trade and your opponent is low:</strong> fast push and crash, then recall or pressure their tower.</li>" +
        "<li><strong>You're losing the lane:</strong> let the wave come to you. Farm under your tower and avoid fights.</li>" +
        "<li><strong>You're ahead:</strong> freeze to deny gold, or crash and roam to spread your lead.</li>" +
        "<li><strong>An objective is spawning soon:</strong> push your wave first so you can move without losing minions. Read {{guide:objectives-and-dragons}}.</li>" +
        "<li><strong>Your jungler is coming to gank:</strong> having the wave on your side of the lane makes ganks much easier, because the enemy has further to run.</li></ul>"
    }
  ],
  takeaways: [
    "The side with more minions pushes. Every minion you kill changes where the wave goes.",
    "Crash the wave into the enemy tower before you recall or roam.",
    "Freeze outside your tower range when you're ahead to make your opponent walk into danger.",
    "Slow push by killing caster minions first to build a big wave.",
    "Cannon waves push harder and are worth the most gold. Plan around them."
  ],
  related: ["trading", "recall-timing", "side-lanes", "last-hitting"],
  quiz: [
    { q: "You want to recall. Where should the wave be?", options: ["Pushing toward your tower", "Crashed into the enemy tower", "Frozen in the middle of the lane", "It doesn't matter"], answer: 1, explain: "Crashing the wave first means the enemy has to deal with it under their tower while you shop, and you lose very little gold or experience." },
    { q: "How do you hold a freeze?", options: ["Use all your abilities on the wave", "Keep the wave outside your tower range with a few extra enemy minions, and only last-hit", "Stand under the enemy tower", "Kill your own minions"], answer: 1, explain: "A freeze holds the wave just outside your tower, with slightly more enemy minions, and you only last-hit so the wave doesn't move." },
    { q: "Which minions should you kill first when slow pushing?", options: ["Melee minions", "Cannon minions", "Caster minions", "Whichever is closest"], answer: 2, explain: "Caster minions have low health and deal high damage to your wave. Killing them first lets your wave win slowly and build up." }
  ]
});

/* ---------- 2. Trading ---------- */
RA.guides.push({
  id: "trading",
  title: "Trading in Lane",
  level: "intermediate",
  category: "laning",
  minutes: 8,
  summary: "Learn when to hit your opponent, when to back off, and how to come out ahead in every exchange of damage.",
  sections: [
    {
      h: "What a trade is",
      html: "<p>A trade is any exchange of damage between you and your lane opponent. If you deal more damage than you take, you won the trade. Win enough trades and your opponent has to recall, lose farm, or die. Lose them and the same happens to you.</p>" +
        "<p>Trades come in two sizes:</p>" +
        "<ul><li><strong>Short trades:</strong> hit your opponent with an ability or a few attacks, then walk away before they can answer. Most laning is short trades.</li>" +
        "<li><strong>All-ins:</strong> use everything (abilities, ultimate, summoner spells like {{spell:Ignite}}) to try to kill. Only do this when your damage plus theirs says you'll win.</li></ul>"
    },
    {
      h: "Minion aggro: the hidden damage",
      html: "<p>When you attack an enemy champion while you're near their minions, those minions switch to attacking <em>you</em>. Early in the game, a full wave of minions deals a surprising amount of damage. Many trades are lost not because of the opponent, but because five minions joined in.</p>" +
        "<ul><li>Trade when the enemy wave is small or when you're standing away from their minions.</li>" +
        "<li>After you hit your opponent, step back out of minion range. Minion aggro only lasts a couple of seconds.</li>" +
        "<li>Your own minions help too: trade when your wave is bigger, and the enemy will get hit by your minions instead.</li></ul>" +
        "{{warn:Walking into a big enemy wave to chase a trade. You'll take damage from every minion, and the enemy just has to stand there and fight back.}}"
    },
    {
      h: "When to trade",
      html: "<p>The best time to trade is when your opponent <strong>can't hit back</strong>. Look for these moments:</p>" +
        "<ul><li><strong>They just used an important ability.</strong> If {{champ:Ahri}} misses her Charm, she has no way to stop you for about 12 seconds. Walk forward and punish.</li>" +
        "<li><strong>They go for a last hit.</strong> When your opponent attacks a minion, they can't attack you for a moment, and they're often standing forward. This is the most common trade timing.</li>" +
        "<li><strong>You hit a level spike first.</strong> Reaching level 2 or 3 before your opponent gives you one more ability. That's a big advantage for a few seconds.</li>" +
        "<li><strong>Your ability is up and theirs isn't.</strong> Track cooldowns. See {{guide:matchups-and-cooldowns}}.</li></ul>" +
        "{{tip:Watch your opponent's attack animation on minions. The moment they commit to a last hit, throw your ability. They either take the damage or miss the minion, and both are good for you.}}"
    },
    {
      h: "Level 2 and level 3 spikes",
      html: "<p>Level 2 is the first big spike of the game. In a solo lane, you hit level 2 after the first full wave plus one melee minion of the second wave. In bot lane, where experience is split, it takes the first wave plus three minions of the second.</p>" +
        "<p>Whoever gets level 2 first can often win a trade for free. Push the first wave a little faster (hit minions with attacks, not just last hits), and when the level-up sound plays, walk forward and use your new ability before your opponent catches up.</p>" +
        "<p>Level 3 brings a third ability, which unlocks full combos for most champions. Level 6 is the biggest early spike because of your ultimate. If your opponent is level 6 and you're not, play safe until you catch up.</p>"
    },
    {
      h: "Using brush",
      html: "<p>Each lane has bushes (brush) on the sides. When you stand in a brush, enemies can't see you unless they have vision there. That gives you two advantages:</p>" +
        "<ul><li><strong>Minions don't aggro on you</strong> as easily if the enemy can't see you hit them first.</li>" +
        "<li><strong>Your opponent can't see your position</strong>, so they can't aim skill shots well, and they don't know when you'll attack.</li></ul>" +
        "<p>In bot lane especially, controlling the brush is huge. If the enemy support is standing in your brush, it's dangerous to walk up. Use a ward or your trinket to check brush before walking in, and use the brush yourself to hide before a trade.</p>"
    },
    {
      h: "Judging the trade",
      html: "<p>After every trade, ask yourself three questions:</p>" +
        "<ol><li><strong>Who lost more health?</strong> Count percentages, not raw numbers.</li>" +
        "<li><strong>Who lost more farm?</strong> A trade where you deal 20% more damage but miss two cannon minions might not be worth it.</li>" +
        "<li><strong>What's on cooldown now?</strong> If you used everything and they still have their combo, step back and wait.</li></ol>" +
        "<p>Over time you'll learn each matchup's rhythm. Some champions want to trade constantly (like {{champ:Draven}} or {{champ:Caitlyn}} with their long range or strong early damage), while others want to farm safely and scale (like {{champ:Veigar}}).</p>"
    }
  ],
  takeaways: [
    "Trade when your opponent can't hit back: after they use a key ability or while they last-hit.",
    "Minion aggro is real damage. Don't trade inside a big enemy wave.",
    "Getting level 2 or 3 first gives you a free window to trade.",
    "Use brush to hide your position and avoid minion aggro.",
    "Judge a trade by health, farm and cooldowns, not just damage dealt."
  ],
  related: ["wave-management", "matchups-and-cooldowns", "power-spikes", "last-hitting"],
  quiz: [
    { q: "When is the best moment to trade with your opponent?", options: ["When they have all their abilities ready", "When they go to last-hit a minion or just used a key ability", "When your health is low", "When their wave is much bigger than yours"], answer: 1, explain: "When your opponent is busy last-hitting or just used an important ability, they can't answer your damage well." },
    { q: "Why are trades near a big enemy minion wave risky?", options: ["Minions give the enemy gold", "Minions start attacking you when you hit an enemy champion", "Minions heal the enemy", "You can't use abilities near minions"], answer: 1, explain: "Hitting an enemy champion near their minions draws minion aggro, and a full wave deals a lot of damage early on." },
    { q: "In a solo lane, when do you hit level 2?", options: ["After 3 minions", "After the first wave plus one melee minion of the second wave", "After two full waves", "At 2:00 exactly"], answer: 1, explain: "In a solo lane you reach level 2 after the first full wave and one melee minion from the second wave." }
  ]
});

/* ---------- 3. Recall timing ---------- */
RA.guides.push({
  id: "recall-timing",
  title: "Recall Timing and Tempo",
  level: "intermediate",
  category: "laning",
  minutes: 7,
  summary: "When you go back to base matters as much as what you buy. Good recalls keep you strong, safe and on time for objectives.",
  sections: [
    {
      h: "Why recall timing matters",
      html: "<p>Every time you recall, you leave the map for 30-40 seconds: 8 seconds of channel, time in base, and the walk back. If you pick the wrong moment, you lose minions, experience, turret plates or an objective. If you pick the right moment, you come back with an item spike while your opponent is still in lane with old items.</p>" +
        "<p>This idea of using your time well is called <strong>tempo</strong>. A player with good tempo is always in the right place at the right time: shopping when nothing is happening, and back on the map when it matters.</p>"
    },
    {
      h: "The three questions before you recall",
      html: "<ol><li><strong>Where is the wave?</strong> The ideal recall is right after you crash a wave into the enemy tower. See {{guide:wave-management}}.</li>" +
        "<li><strong>How much gold do you have?</strong> Back when you can buy something meaningful, like a component that completes part of your item.</li>" +
        "<li><strong>What's coming up?</strong> If a dragon spawns in 60 seconds, recall now so you're back in time, not right as the fight starts.</li></ol>" +
        "{{tip:Check the dragon and Void Grub timers before your first recall. Coming back with a fresh item just as an objective spawns is how lanes win fights for their jungler.}}"
    },
    {
      h: "Good gold amounts to recall with",
      html: "<p>You don't need to memorize every item cost, but a few numbers help. These are good first-recall targets:</p>" +
        "<table><tr><th>Champion type</th><th>Good buy</th></tr>" +
        "<tr><td>Mage (mid)</td><td>{{item:Lost Chapter}} (mana and haste) or {{item:Blasting Wand}} for damage</td></tr>" +
        "<tr><td>Marksman (bot)</td><td>{{item:B. F. Sword}} or a damage component like {{item:Pickaxe}}</td></tr>" +
        "<tr><td>Anyone</td><td>{{item:Boots}} plus a {{item:Control Ward}} if you're short on gold</td></tr></table>" +
        "<p>The exact item depends on your build (check your champion's guide). The idea is to avoid recalling with tiny amounts of gold unless you have to, and to avoid staying in lane with 2000+ unspent gold while your opponent is already stronger.</p>" +
        "<p>Always grab a {{item:Control Ward}} when you have 75 spare gold. It's the cheapest way to make your lane safer.</p>"
    },
    {
      h: "When you have to recall early",
      html: "<p>Sometimes you're low on health or mana and the wave is in a bad spot. Here's how to decide:</p>" +
        "<ul><li><strong>If you'll die by staying</strong>, recall. A death costs far more than a lost wave: your opponent gets 300+ gold and you lose even more time.</li>" +
        "<li><strong>If you're just a bit low</strong>, try to push one more wave first, then recall.</li>" +
        "<li><strong>If the wave is about to crash into your tower</strong>, the tower will kill a lot of it. You lose some gold, but turret plates can take damage. Since plates are permanent now, losing a plate means the enemy keeps that gold advantage for the rest of the game.</li></ul>" +
        "{{warn:Recalling in the middle of the lane where the enemy can see you. Recall in a safe spot (behind your tower or in a brush) so nobody interrupts your 8-second channel.}}"
    },
    {
      h: "Syncing recalls with your team",
      html: "<p>Recalls work best when they line up with your team:</p>" +
        "<ul><li><strong>With your jungler:</strong> if your jungler is about to fight for an objective, recall a bit earlier so you can arrive with full health and an item.</li>" +
        "<li><strong>In bot lane:</strong> the ADC and support should usually recall together. If one stays alone, they're easy to dive.</li>" +
        "<li><strong>After a kill:</strong> if you just killed your opponent, use their death time to push the wave and recall. You'll come back stronger with no farm lost.</li>" +
        "<li><strong>When the enemy recalls:</strong> if your opponent recalls and you have the wave, you can push it to their tower and take a plate, or recall at the same time to stay even.</li></ul>"
    },
    {
      h: "Walking back",
      html: "<p>The walk back to lane is part of your recall. Use it well:</p>" +
        "<ul><li>Place a ward on the way, especially near river brush or the jungle entrance closest to your lane.</li>" +
        "<li>Look at the minimap. If your jungler is nearby and the enemy laner is pushed up, you might arrive for a gank.</li>" +
        "<li>Take the safe path. Walking through an unwarded enemy jungle alone is a common way to die.</li></ul>"
    }
  ],
  takeaways: [
    "The best time to recall is right after crashing a wave into the enemy tower.",
    "Back with enough gold to buy something meaningful, and grab a Control Ward.",
    "If staying means dying, recall. A death costs more than a wave.",
    "Time recalls so you're back for objectives, not arriving late.",
    "Plates are permanent now, so letting waves hit your tower while you're away costs more."
  ],
  related: ["wave-management", "objectives-and-dragons", "items-and-gold", "power-spikes"],
  quiz: [
    { q: "What's the best wave state for a recall?", options: ["The wave is pushing into your tower", "You just crashed the wave into the enemy tower", "The wave is in the middle of the lane", "There's no wave"], answer: 1, explain: "Crashing first forces the enemy to handle the wave under their tower while you're away, so you lose very little." },
    { q: "You're low on health and will die if you stay. What do you do?", options: ["Stay for the cannon minion", "Recall, even if you lose the wave", "Walk into the enemy jungle", "Fight to the end"], answer: 1, explain: "Dying gives the enemy 300+ gold and costs you more time than a recall. Losing one wave is much cheaper." },
    { q: "Why recall a little early before a dragon fight?", options: ["To be back with full health and a new item when the fight starts", "Because dragons give recall speed", "To skip the fight", "It doesn't matter"], answer: 0, explain: "Recalling early means you arrive at the objective with full health and a fresh item, instead of being in base when the fight starts." }
  ]
});

/* ---------- 4. Objectives & dragons ---------- */
RA.guides.push({
  id: "objectives-and-dragons",
  title: "Objectives: Dragons, Grubs, Herald and Baron",
  level: "intermediate",
  category: "macro",
  minutes: 9,
  summary: "Neutral objectives win games. Learn what each one gives you, when it spawns, and how to set up so your team gets it.",
  sections: [
    {
      h: "The objectives at a glance",
      html: "<p>Epic monsters give your whole team a reward. Here's what's on Summoner's Rift in patch 26.22:</p>" +
        "<table><tr><th>Objective</th><th>Spawns</th><th>What it gives</th></tr>" +
        "<tr><td><strong>Dragons</strong></td><td>5:00, then 5:00 after each kill</td><td>A permanent stacking buff; 4 drakes = Dragon Soul</td></tr>" +
        "<tr><td><strong>Void Grubs</strong></td><td>8:00 (3 grubs, one time only, gone at 14:45)</td><td>Extra damage to towers</td></tr>" +
        "<tr><td><strong>Rift Herald</strong></td><td>15:00 (leaves at 19:45)</td><td>The Eye of the Herald: a charge that wrecks a tower</td></tr>" +
        "<tr><td><strong>Baron Nashor</strong></td><td>20:00, then 6:00 after each kill</td><td>Hand of Baron: stronger champions and minions for 3 minutes</td></tr>" +
        "<tr><td><strong>Elder Dragon</strong></td><td>6:00 after a team gets Soul</td><td>Burn and execute low-health enemies</td></tr></table>" +
        "<p>If you played in 2025, note that <strong>Atakhan was removed</strong> at the start of 2026, and Baron is back at 20:00. Use our <a href=\"#/tools/timers\">objective timer tool</a> to track everything during a game.</p>"
    },
    {
      h: "Dragons and Dragon Soul",
      html: "<p>Dragons spawn in the bottom river. There are six types: <strong>Infernal</strong> (damage), <strong>Mountain</strong> (defense), <strong>Ocean</strong> (healing), <strong>Cloud</strong> (move speed), <strong>Hextech</strong> (haste and attack speed) and <strong>Chemtech</strong> (tenacity and healing when low). Each drake your team kills gives a small permanent buff of that type.</p>" +
        "<p>After the second drake, the map transforms into an <strong>elemental map</strong> that matches the third drake's type, and every drake after that is that same type. The first team to kill <strong>4 drakes</strong> gets the <strong>Dragon Soul</strong>, a strong permanent bonus. After that, the Elder Dragon takes the dragon pit.</p>" +
        "<p>Drakes also give gold to the killer, and they get tougher for a team that already has many: drakes take less damage from the team holding stacks. That makes it easier for the team that's behind on dragons to catch up.</p>" +
        "{{tip:A team with 3 drakes is one fight away from Soul. If the enemy has 3, treat the next dragon like a must-win fight, and set up vision 60 seconds before it spawns.}}"
    },
    {
      h: "Void Grubs and Rift Herald",
      html: "<p>The top side river pit holds two objectives before Baron arrives:</p>" +
        "<ul><li><strong>Void Grubs</strong> (8:00): three small monsters that only spawn once and leave at 14:45. Each grub gives your team a stack of Touch of the Void, which makes attacks on towers burn. With all 3, your team summons small Voidmites that help push towers. Grubs are great for teams with strong side laners who want to take towers early.</li>" +
        "<li><strong>Rift Herald</strong> (15:00): when killed, it drops the Eye of the Herald. The holder summons the Herald, and a player can ride her and charge into a tower for huge damage. She leaves at 19:45, just before Baron takes the pit at 20:00.</li></ul>" +
        "<p>Since turret plates are permanent now, using grubs or the Herald to break a tower's plates gives gold that never goes away.</p>"
    },
    {
      h: "Baron Nashor",
      html: "<p>Baron spawns at 20:00 in the top pit. Killing him gives your whole team <strong>Hand of Baron</strong> for 3 minutes (lost if you die): bonus attack damage and ability power, faster recalls, and an aura that makes nearby minions much stronger. Baron waves can take towers and even inhibitors on their own.</p>" +
        "<p>Baron is very strong but risky. He takes time to kill, and the enemy can attack you from behind or steal him with {{spell:Smite}}. The safest time to take Baron is right after your team wins a fight and some enemies are dead.</p>" +
        "{{warn:Starting Baron when the enemy team is all alive and nearby. If they collapse on you while Baron is hitting your tank, you'll lose the fight and maybe the game.}}"
    },
    {
      h: "How to set up an objective",
      html: "<p>Objectives are won before they spawn. Use this checklist about 60-90 seconds before an objective appears:</p>" +
        "<ol><li><strong>Push the lanes nearest to it.</strong> Mid and bot should push for dragon, mid and top for grubs, Herald and Baron. A pushed lane means the enemy laners have to stay and clear, or lose minions.</li>" +
        "<li><strong>Recall and buy.</strong> Come back with full health and your new items. See {{guide:recall-timing}}.</li>" +
        "<li><strong>Take vision.</strong> Place wards around the pit, sweep enemy wards with Oracle Lens, and put a {{item:Control Ward}} in the river brush. Wards placed on Faelights get extra vision range.</li>" +
        "<li><strong>Group up before it spawns.</strong> Arrive together. A team that shows up one at a time loses the fight.</li>" +
        "<li><strong>Decide: fight or trade.</strong> If the enemy team is stronger, you can trade: take a tower or grubs on the other side of the map instead.</li></ol>"
    },
    {
      h: "Priority: who controls the objective",
      html: "<p><strong>Lane priority</strong> means your laners have pushed their waves and can move first. If your mid and bot have priority, your team gets to dragon first and can fight on your terms. If the enemy has priority, contesting is risky.</p>" +
        "<p>Good teams talk about this: \"Our bot is pushed, let's go dragon\" or \"We can't contest, take grubs instead.\" Use pings to tell your team (see {{guide:teamwork-and-pings}}). Not every objective is worth fighting for. Giving one up to take something else is often the smart play.</p>"
    }
  ],
  takeaways: [
    "Dragons spawn at 5:00. Four drakes give Soul, and then the Elder Dragon appears.",
    "Void Grubs (8:00) and Rift Herald (15:00) help take towers, which give permanent plate gold.",
    "Baron spawns at 20:00 and makes your minions and team much stronger. Atakhan was removed.",
    "Set up 60-90 seconds early: push lanes, recall, take vision, group.",
    "If you can't contest, trade for something on the other side of the map."
  ],
  related: ["recall-timing", "vision-control", "teamfighting", "win-conditions"],
  quiz: [
    { q: "How many drakes does a team need for Dragon Soul?", options: ["2", "3", "4", "5"], answer: 2, explain: "The first team to kill 4 drakes gets the Dragon Soul, and then the Elder Dragon takes the pit." },
    { q: "When does Baron Nashor spawn in patch 26.22?", options: ["15:00", "20:00", "25:00", "30:00"], answer: 1, explain: "Baron moved back to 20:00 at the start of 2026." },
    { q: "What's the first step to set up a dragon?", options: ["Start hitting it as soon as it spawns", "Push the nearby lanes so your team can move first", "Wait in base", "Go to top lane"], answer: 1, explain: "Pushing the lanes near the objective gives your team priority, so you can arrive first and set up vision." }
  ]
});

/* ---------- 5. Teamfighting ---------- */
RA.guides.push({
  id: "teamfighting",
  title: "Teamfighting Basics",
  level: "intermediate",
  category: "teamfighting",
  minutes: 8,
  summary: "Five against five is chaos, but it doesn't have to be. Learn your job in a fight, where to stand, and who to hit.",
  sections: [
    {
      h: "Everyone has a job",
      html: "<p>Teamfights look messy, but each champion has a job. Knowing yours is the first step:</p>" +
        "<table><tr><th>Type</th><th>Job</th><th>Examples</th></tr>" +
        "<tr><td><strong>Tank / engage</strong></td><td>Start the fight, absorb damage, lock down enemies</td><td>{{champ:Malphite}}, {{champ:Leona}}</td></tr>" +
        "<tr><td><strong>Fighter / bruiser</strong></td><td>Dive into the enemy and threaten their carries</td><td>{{champ:Darius}}, {{champ:Vi}}</td></tr>" +
        "<tr><td><strong>Mage</strong></td><td>Area damage and crowd control from a safe range</td><td>{{champ:Orianna}}, {{champ:Ziggs}}</td></tr>" +
        "<tr><td><strong>Assassin</strong></td><td>Wait, then kill one squishy target</td><td>{{champ:Zed}}, {{champ:Ahri}}</td></tr>" +
        "<tr><td><strong>Marksman</strong></td><td>Deal steady damage to whoever is in range</td><td>{{champ:Caitlyn}}, {{champ:Jinx}}</td></tr>" +
        "<tr><td><strong>Enchanter</strong></td><td>Shield, heal and speed up the carries</td><td>{{champ:Lulu}}, {{champ:Janna}}</td></tr></table>"
    },
    {
      h: "Positioning: front line and back line",
      html: "<p>The simplest way to think about positioning: tanks and fighters stand in front, damage dealers stand behind them.</p>" +
        "<ul><li><strong>If you're a carry</strong> (marksman or mage), your goal is to deal damage while staying alive. Stand behind your front line and hit whatever is in range. Don't walk forward just to reach a better target.</li>" +
        "<li><strong>If you're a tank</strong>, stand in front and make the enemy deal with you. Use your crowd control on whoever is most dangerous.</li>" +
        "<li><strong>If you're an assassin</strong>, wait at the side of the fight, out of vision, until the enemy uses their important crowd control. Then go in.</li></ul>" +
        "{{tip:Before a fight, find the enemy champions that can reach you (assassins, divers, long-range hooks). Stay just out of their range, and watch for them to use their engage before you step forward.}}"
    },
    {
      h: "Who to hit",
      html: "<p>A common mistake is attacking the closest enemy, which is usually the tank. Hitting a tank with 4000 health while their marksman kills your team is a losing trade. Instead:</p>" +
        "<ul><li><strong>As a marksman or mage,</strong> hit the <em>closest safe target</em>. If the enemy carry is in range without you walking forward, hit them. If not, hit the front line, but don't step into danger to reach the back.</li>" +
        "<li><strong>As an assassin or diver,</strong> go for the enemy carry or the fed champion.</li>" +
        "<li><strong>As a tank or support,</strong> protect your carry. Stopping the enemy diver is often more valuable than starting the fight. This is called <strong>peeling</strong>.</li></ul>"
    },
    {
      h: "Waiting for the engage",
      html: "<p>Fights are often won or lost in the first two seconds. A team that starts a fight with a big crowd control ability (like {{champ:Malphite}}'s Unstoppable Force or {{champ:Orianna}}'s Shockwave hitting three enemies) usually wins.</p>" +
        "<p>This means patience matters. If your team has a strong engage, wait for it and follow up. If the enemy has one, stay spread out so they can't catch several of you at once, and wait for them to use it before committing.</p>" +
        "{{warn:Walking forward alone before your team is ready. If you get caught, it's 4 against 5 and the fight is lost before it starts.}}"
    },
    {
      h: "Flanks and chokepoints",
      html: "<p>Where you fight matters as much as how:</p>" +
        "<ul><li><strong>Chokepoints</strong> are narrow spaces in the jungle and river. Champions with area damage ({{champ:Ziggs}}, {{champ:MissFortune}}, {{champ:Orianna}}) love fighting there because the enemy has to bunch up. If your team relies on area damage, try to fight in tight spaces.</li>" +
        "<li><strong>Open areas</strong> like mid lane favor teams with long-range poke and marksmen who need space to kite.</li>" +
        "<li><strong>Flanking</strong> means attacking from the side or behind instead of head-on. It's powerful for assassins and engage champions, because the enemy carries are suddenly in front.</li></ul>" +
        "<p>Before an objective fight, look at the map and ask: where do we want this fight to happen? See {{guide:objectives-and-dragons}}.</p>"
    },
    {
      h: "After the fight",
      html: "<p>Winning a fight is only half the work. Use it:</p>" +
        "<ul><li>Take an objective: a dragon, Baron, a tower, or an inhibitor.</li>" +
        "<li>Push waves out before recalling.</li>" +
        "<li>Don't chase too far into enemy territory without vision. Many games are thrown by chasing one enemy into four others.</li></ul>" +
        "<p>If you lost the fight, back off, clear waves under your towers, and wait for your team to respawn. Don't fight 3 against 5.</p>"
    }
  ],
  takeaways: [
    "Know your job: tank, fighter, mage, assassin, marksman or enchanter.",
    "Carries hit the closest safe target and never step into danger to reach the back line.",
    "The first big crowd control often decides the fight. Be patient.",
    "Area-damage teams want chokepoints; poke and marksman teams want open space.",
    "Turn every won fight into an objective."
  ],
  related: ["objectives-and-dragons", "power-spikes", "win-conditions", "vision-control"],
  quiz: [
    { q: "As a marksman in a teamfight, who should you usually attack?", options: ["The enemy carry, even if you have to walk forward", "The closest target you can hit safely", "Only the tank", "Nobody, just stay back"], answer: 1, explain: "Marksmen should hit the closest safe target. Walking forward to reach the back line usually gets you killed." },
    { q: "What does \"peeling\" mean?", options: ["Attacking the enemy carry", "Protecting your carry from enemies who dive them", "Taking a tower", "Leaving the fight"], answer: 1, explain: "Peeling means using your crowd control, shields and body to keep enemies off your carry." },
    { q: "Where does an area-damage team like Orianna, Ziggs and Miss Fortune want to fight?", options: ["In wide open spaces", "In narrow chokepoints where enemies bunch up", "Under the enemy tower", "Only in lane"], answer: 1, explain: "Area damage hits more enemies when they're bunched up, so chokepoints in the jungle and river are ideal." }
  ]
});

/* ---------- 6. Roaming ---------- */
RA.guides.push({
  id: "roaming",
  title: "Roaming and Map Pressure",
  level: "intermediate",
  category: "macro",
  minutes: 7,
  summary: "Leaving your lane to help elsewhere can win games, or throw away your lead. Learn when to roam, how to do it, and what to do when your opponent disappears.",
  sections: [
    {
      h: "What roaming is",
      html: "<p>Roaming means leaving your lane to help another part of the map: ganking a lane, helping your jungler fight, or taking an objective. A good roam turns your lane advantage into kills and objectives for your whole team.</p>" +
        "<p>But every roam has a cost. While you're away, you're not getting minions or experience, and your opponent might be taking your tower plates. The goal is to roam when the reward is bigger than what you lose.</p>"
    },
    {
      h: "Push first, then roam",
      html: "<p>The golden rule of roaming: <strong>crash your wave before you leave</strong>. When you push the wave into the enemy tower, your opponent has two bad choices:</p>" +
        "<ul><li>Stay and clear the wave under their tower, so they can't follow you.</li>" +
        "<li>Follow you and lose the whole wave (and maybe plates) to their tower.</li></ul>" +
        "<p>If you roam with the wave pushing toward you, your opponent can push it into your tower, take plates and follow you anyway. Since plates are permanent now, that gold lead stays with them all game.</p>" +
        "{{tip:Push, then roam through the river, not straight down the lane where the enemy can see you leave. The longer they don't notice you're gone, the better the gank works.}}"
    },
    {
      h: "When to roam",
      html: "<p>Look for these good roaming moments:</p>" +
        "<ul><li><strong>A side lane is pushed up</strong> with no escape, especially if the enemy is low on health or used {{spell:Flash}}.</li>" +
        "<li><strong>Your jungler is fighting</strong> near your lane, like a scuttle crab fight or an invade.</li>" +
        "<li><strong>An objective is about to spawn</strong> and your team needs numbers.</li>" +
        "<li><strong>Your opponent just recalled</strong> or died, so they can't follow you.</li></ul>" +
        "<p>Different roles roam differently. Mid laners are closest to both side lanes, so they roam the most. Supports often leave bot lane after the first recall to place vision and help mid. Top laners can roam with {{spell:Teleport}}, and the top role quest now gives every top laner a free Unleashed Teleport later in the lane.</p>"
    },
    {
      h: "The cost of roaming",
      html: "<p>A roam is only good if it's worth more than what you lose. Be honest about the cost:</p>" +
        "<ul><li><strong>Lost minions and experience.</strong> A full wave early is worth over 100 gold and a lot of experience.</li>" +
        "<li><strong>Turret plates.</strong> If your opponent shoves your tower while you're gone, they get plate gold.</li>" +
        "<li><strong>The off-lane penalty early on.</strong> Farming minions outside your assigned lane before level 3 gives 25% less gold and experience, so stealing farm in another lane early isn't worth much.</li></ul>" +
        "{{warn:Roaming without a plan and walking back with nothing. A failed roam that costs you two waves puts you behind your opponent in lane.}}"
    },
    {
      h: "When your opponent roams",
      html: "<p>If your lane opponent disappears, do two things right away:</p>" +
        "<ol><li><strong>Ping it.</strong> Use the \"Enemy Missing\" ping so your team knows. Do it quickly: a roam takes only 10-15 seconds to reach a side lane.</li>" +
        "<li><strong>Punish it.</strong> Push their wave into the tower, take plates, or follow them if you're stronger. You can also move to the same lane to help.</li></ol>" +
        "<p>Many players do neither: they keep farming and the roaming player gets a free kill. If you can't stop the roam, make it cost them as much as possible.</p>"
    },
    {
      h: "Roaming as a support",
      html: "<p>Supports have a unique roaming role. After the first recall, a support can leave the ADC for a short time to:</p>" +
        "<ul><li>Place deep wards in the enemy jungle.</li>" +
        "<li>Help mid gank or fight for the scuttle crab.</li>" +
        "<li>Group with the jungler before an objective.</li></ul>" +
        "<p>Only do this when your ADC is safe: when the wave is pushed or near your tower, and the enemy bot lane isn't strong enough to dive. See {{role:support}}.</p>"
    }
  ],
  takeaways: [
    "Crash your wave before you roam so your opponent can't follow for free.",
    "Roam when there's a clear target: a pushed lane, a jungle fight, or an objective.",
    "Every roam costs minions, experience and maybe plates. Make it worth it.",
    "When your opponent goes missing, ping it and punish it.",
    "Supports can roam after the first recall when the ADC is safe."
  ],
  related: ["wave-management", "jungle-tracking", "objectives-and-dragons", "teamwork-and-pings"],
  quiz: [
    { q: "What should you do before leaving your lane to roam?", options: ["Let the wave push into your tower", "Crash your wave into the enemy tower", "Recall", "Buy a Control Ward and wait"], answer: 1, explain: "Crashing the wave forces your opponent to stay and clear it under their tower, or lose minions if they follow you." },
    { q: "Your lane opponent disappears. What's the first thing to do?", options: ["Keep farming quietly", "Ping \"Enemy Missing\" so your team knows", "Recall", "Go into their jungle"], answer: 1, explain: "Ping right away. Roams take only seconds to reach another lane, and a warning can save a teammate." },
    { q: "Which role usually roams the most?", options: ["ADC", "Mid", "Top", "None of them"], answer: 1, explain: "Mid lane is in the center of the map, close to both side lanes and both rivers, so mid laners roam the most." }
  ]
});

/* ---------- 7. Jungle tracking ---------- */
RA.guides.push({
  id: "jungle-tracking",
  title: "Tracking the Enemy Jungler",
  level: "intermediate",
  category: "laning",
  minutes: 8,
  summary: "Most early deaths come from the enemy jungler. Learn to guess where they are, so you know when to play safe and when to go for it.",
  sections: [
    {
      h: "Why tracking matters",
      html: "<p>The enemy jungler is the biggest threat to your lane in the first 15 minutes. If you know they're on the other side of the map, you can trade, push and play aggressive without fear. If you think they might be close, you play safe and stay near your tower.</p>" +
        "<p>You can't see the jungler most of the time, but you can make good guesses from a few clues. Strong players do this constantly, and it's one of the biggest differences between climbing and staying stuck.</p>"
    },
    {
      h: "Camp spawns and the first clear",
      html: "<p>Jungle camps spawn early in 2026:</p>" +
        "<table><tr><th>Camp</th><th>First spawn</th><th>Respawn</th></tr>" +
        "<tr><td>Blue Sentinel, Red Brambleback</td><td>0:55</td><td>5:00</td></tr>" +
        "<tr><td>Murk Wolves, Raptors</td><td>0:55</td><td>2:15</td></tr>" +
        "<tr><td>Gromp, Krugs</td><td>1:07</td><td>2:15</td></tr>" +
        "<tr><td>Rift Scuttler</td><td>2:55</td><td>2:30</td></tr></table>" +
        "<p>Most junglers start at one buff (red or blue) and clear the camps on that side of the map, then either gank the closest lane or continue to the other side. A full clear of six camps usually finishes a little after 3:00. That means a jungler who started bottom side often shows up <strong>top side</strong> around 3:00, and the other way round.</p>" +
        "{{tip:Look at which of your laners doesn't get a leash, or watch where the enemy jungler appears on your wards at the start. If they started bot side, the top side of the map is where they'll likely be next.}}"
    },
    {
      h: "Clues to look for",
      html: "<ul><li><strong>Where they were last seen.</strong> If the enemy jungler shows up in bot lane at 3:30, they can't be top at 3:40. Use that window to trade hard.</li>" +
        "<li><strong>Missing camps.</strong> When you walk through the enemy jungle and a camp is gone, the jungler was there recently.</li>" +
        "<li><strong>Scuttle crab.</strong> Scuttle spawns at 2:55. If the enemy jungler is fighting for it, they're in the river.</li>" +
        "<li><strong>Lane behavior.</strong> If your opponent suddenly walks forward and plays aggressive, the jungler is probably close.</li>" +
        "<li><strong>Objectives.</strong> Around 5:00 (dragon) and 8:00 (grubs), junglers move toward those pits.</li></ul>"
    },
    {
      h: "Play safe or aggressive?",
      html: "<p>Every few seconds, ask: \"Where could the enemy jungler be?\" Then choose:</p>" +
        "<ul><li><strong>Jungler seen on the other side of the map:</strong> this is your chance. Trade, push, take plates or go for a kill.</li>" +
        "<li><strong>Jungler unknown:</strong> play carefully. Don't walk far up the lane without vision, and keep an escape ready.</li>" +
        "<li><strong>Jungler likely near your lane:</strong> stay near your tower, let the wave come to you, and don't use {{spell:Flash}} on a risky trade.</li></ul>" +
        "<p>Your own jungler matters too. If both junglers are on your side of the map, a fight might break out. Being ready to help (with your wave pushed) can win a 2v2.</p>" +
        "{{warn:Pushing all the way up the lane with no wards when the enemy jungler hasn't been seen for a while. This is the most common way to die to a gank.}}"
    },
    {
      h: "Warding for the jungler",
      html: "<p>Wards are your eyes on the jungler. Some good timings:</p>" +
        "<ul><li><strong>Around 2:45-3:00:</strong> ward the river or jungle entrance near your lane. This is when the first ganks usually happen after a full clear.</li>" +
        "<li><strong>After every recall:</strong> place a ward on the way back.</li>" +
        "<li><strong>Before objectives:</strong> ward near the pit about a minute before it spawns.</li></ul>" +
        "<p>Your Stealth Ward trinket has 2 charges. Use them, don't save them. Each player can have 3 Stealth Wards and 1 {{item:Control Ward}} on the map. For more, see {{guide:vision-basics}} and {{guide:vision-control}}.</p>"
    },
    {
      h: "Using the minimap",
      html: "<p>None of this works without looking at the minimap. Get into the habit of glancing at it every few seconds, especially after every last hit. Over time it becomes automatic.</p>" +
        "<p>When you spot the enemy jungler, ping their location so your team knows. A well-timed ping can save a teammate's life and lets the whole team play more aggressively on the safe side of the map. See {{guide:teamwork-and-pings}}.</p>"
    }
  ],
  takeaways: [
    "Camps spawn at 0:55 (Gromp and Krugs at 1:07). A full clear ends a little after 3:00.",
    "A jungler who started on one side often shows up on the other side around 3:00.",
    "When the enemy jungler is seen far away, play aggressive. When unknown, play careful.",
    "Ward the river around 3:00, after every recall, and before objectives.",
    "Look at the minimap after every last hit, and ping the jungler when you see them."
  ],
  related: ["vision-basics", "vision-control", "roaming", "staying-alive"],
  quiz: [
    { q: "When do Blue Sentinel and Red Brambleback first spawn in 2026?", options: ["0:55", "1:30", "2:00", "3:30"], answer: 0, explain: "In 2026 all first camp spawns moved 35 seconds earlier. The buffs spawn at 0:55." },
    { q: "The enemy jungler was just seen in bot lane. You're top. What should you do?", options: ["Play extra safe", "Use the window to trade or push, because they're far away", "Recall immediately", "Go to bot lane"], answer: 1, explain: "If the jungler is on the other side of the map, they can't gank you for a while. That's your chance to be aggressive." },
    { q: "Around what time should you ward the river after a typical full clear?", options: ["0:30", "Around 2:45-3:00", "10:00", "Only after 20:00"], answer: 1, explain: "A full clear finishes a little after 3:00, so warding around 2:45-3:00 catches the first gank." }
  ]
});
