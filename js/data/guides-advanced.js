window.RA = window.RA || {};
RA.guides = RA.guides || [];

/* ---------------------------------------------------------------- 1 */
RA.guides.push({
  id: "side-lanes",
  title: "Side Lanes & Split Pushing",
  level: "advanced",
  category: "macro",
  minutes: 8,
  summary: "After laning ends, games are won by who controls the side lanes. Learn who should be where, how to split push without throwing, and how to run a 1-3-1.",
  sections: [
    {
      h: "Why side lanes decide mid games",
      html: `<p>Once the outer turrets start falling, most players do the same thing: everybody walks to mid and stands around as a group of five. It feels safe, but it wastes gold. Minion waves keep spawning in top and bot lane, and from 14:00 they come every 25 seconds (every 20 seconds after 30:00). Every wave you ignore is gold and experience that slowly pushes into your own turret.</p>
<p>Side lane control means always having the right person catching those waves, so your team keeps earning while still being able to group for an objective. The team that handles side lanes well usually has an item lead by 25 minutes without winning a single big fight.</p>
<p>It also creates pressure. A wave crashing into an enemy turret has to be answered. If the enemy sends someone to clear it, they are now four players against your five near Dragon or Baron.</p>`
    },
    {
      h: "Who should be where",
      html: `<p>A simple default for the mid game:</p>
<ul>
<li><strong>Top side lane:</strong> your best duelist or the champion with Teleport. That's usually your {{role:top}} laner.</li>
<li><strong>Bot side lane:</strong> the lane closest to the next objective gets the group. If Dragon is up soon, your team groups bot side and the solo player goes top.</li>
<li><strong>Mid lane:</strong> your mid laner or ADC, someone who can clear a wave fast from a safe distance.</li>
<li><strong>Jungle and support:</strong> they move between lanes with vision, and are the first to arrive at an objective.</li>
</ul>
<p>The ADC should <em>not</em> farm a side lane alone without vision in the mid game. Marksmen die instantly to a single gank, and a dead ADC near Baron time often loses the game. Let your ADC farm the side lane closest to your team, or the mid lane.</p>
{{warn:Sending your squishy ADC into the far side lane while the enemy jungler is missing. If you can't see at least three enemies on the map, the side lane is the most dangerous place to stand.}}`
    },
    {
      h: "How to split push safely",
      html: `<p>Split pushing means one player pushes a side lane deep while the team stays elsewhere. Done well, it forces two enemies to come answer, which gives your team a 4v3 somewhere else. Done badly, it's just a free kill.</p>
<p>Before you split, check three things:</p>
<ol>
<li><strong>Can you win a 1v1</strong> against whoever will come? Champions like {{champ:Fiora}}, {{champ:Jax}}, {{champ:Tryndamere}} and {{champ:Yorick}} are built for this. Items like {{item:Hullbreaker}} make you even better at it.</li>
<li><strong>Where are the enemies?</strong> If you see four on the other side of the map, push freely. If you see two or fewer, back off toward your own side of the river.</li>
<li><strong>Is there vision?</strong> Ward the enemy jungle entrances near your lane. A ward on the Faelight near the side lane gives you a much wider view for 45 seconds.</li>
</ol>
<p>Turrets are easier to hit now than in past years. Crystalline Overgrowth grows on lane turrets after 1:30, and your next champion attack on that turret pops the crystal for bonus true damage. Melee champions also deal 20% more damage to turrets. Runes like {{rune:Demolish}} and the three Void Grubs (their buff spawns Voidmites while you hit structures) make a split pusher very scary.</p>
{{tip:Push the wave in <em>before</em> you start hitting the turret. Turrets target minions first, so a full wave under the turret is free damage for you.}}`
    },
    {
      h: "The 1-3-1 formation",
      html: `<p>A 1-3-1 means one player in top lane, three in mid, and one in bot lane. It's the strongest setup in the mid game when you have two good side laners, because the enemy can't group five without giving up two lanes.</p>
<p>It works because of a simple rule: <strong>you never fight five against five</strong>. If the enemy groups on your top laner, your mid three push a turret. If they group mid, both side laners hit turrets. If they split up, your three in mid fight their smaller group.</p>
<p>For a 1-3-1 you need:</p>
<ul>
<li>Two players who can survive alone or escape (Teleport, dashes, or just strong 1v1s).</li>
<li>A mid group that can clear waves and isn't easily dived. Long-range mages like {{champ:Xerath}} or {{champ:Ziggs}} are great here.</li>
<li>Deep vision in both enemy jungle halves so the side laners see collapses coming.</li>
</ul>`
    },
    {
      h: "Crossmapping and Teleport plays",
      html: `<p>Crossmapping means trading objectives on opposite sides of the map. If the enemy starts Dragon and you can't contest it, don't walk into a losing fight. Instead, take something of similar value on the other side: a turret with plates, the Rift Herald, or Baron if they're far away.</p>
<p>Plates matter more in 2026 because they no longer fall off at 14:00. Outer, inner and inhibitor turrets all have five plates for the whole game, so a crossmap turret is often worth almost as much as a drake.</p>
<p>Teleport makes all of this possible. Your top laner gets <strong>Unleashed Teleport</strong> for free from their role quest. It has a long cooldown (390 seconds), so it's a big decision each time. Good uses:</p>
<ul>
<li>Teleporting to a ward behind the enemy team as a fight starts at Dragon.</li>
<li>Teleporting to a side lane to stop a split pusher, then back to the group later.</li>
<li>Pushing your side wave first, <em>then</em> teleporting, so you don't lose the wave for nothing.</li>
</ul>
{{tip:Tell your team your Teleport timer. A top laner with Teleport up is a fifth player at every fight; without it, your team should play more carefully around objectives.}}`
    },
    {
      h: "When to stop splitting and group",
      html: `<p>Split pushing is a tool, not a lifestyle. Group up when:</p>
<ul>
<li>Baron, Elder Dragon or the fourth drake is about to spawn. Your team needs you.</li>
<li>The enemy has a strong group fighter and your team can't hold 4v5.</li>
<li>You just died, or the enemy team has three or more members missing near your lane.</li>
<li>Your team has a big item lead and can simply force a 5v5.</li>
</ul>
<p>The worst thing is to be halfway: not pushing deep enough to pull enemies, and too far to help the fight. Make a decision. Either commit to the side lane and keep pushing, or walk to your team early.</p>`
    }
  ],
  takeaways: [
    "Never leave side waves uncaught. Minion waves come every 25s after 14:00 and are free gold.",
    "Send your best duelist (often the top laner with Unleashed Teleport) to the far side lane; keep the ADC near the team.",
    "Only split when you can see where the enemies are and you can beat whoever comes.",
    "A 1-3-1 forces the enemy to choose what to give up, and avoids 5v5 fights.",
    "If you can't contest an objective, crossmap: plates never fall off now, so turrets stay valuable."
  ],
  related: ["wave-management", "win-conditions", "objectives-and-dragons"],
  quiz: [
    {
      q: "The enemy team is starting Dragon and you can't win the fight. What's usually the best move for your top-side players?",
      options: ["Run to Dragon anyway and try to steal it", "Take a turret or objective on the opposite side of the map", "Recall and buy items", "Wait in the river doing nothing"],
      answer: 1,
      explain: "Crossmapping: trade objectives. Taking a turret (with plates) or Herald on the other side gets you value instead of losing a 4v5."
    },
    {
      q: "Which player should usually NOT farm the far side lane alone in the mid game?",
      options: ["A tanky top laner with Teleport", "A split-pushing duelist", "The ADC", "A champion with strong escapes"],
      answer: 2,
      explain: "Marksmen are fragile and the team depends on them in fights. A single gank on a lone ADC can lose an objective or the game."
    },
    {
      q: "What is the main idea of a 1-3-1?",
      options: ["Five players always stay together", "One player top, three mid, one bot, so the enemy can never get a 5v5 without giving up lanes", "Only the support roams", "Everyone farms jungle camps"],
      answer: 1,
      explain: "In a 1-3-1, whatever the enemy groups on, your team takes something elsewhere. It avoids even 5v5 fights."
    }
  ]
});

/* ---------------------------------------------------------------- 2 */
RA.guides.push({
  id: "power-spikes",
  title: "Power Spikes: Know When You're Strong",
  level: "advanced",
  category: "laning",
  minutes: 8,
  summary: "Every champion has moments where they suddenly get much stronger. Learn the level, item and objective spikes, and how to fight on yours and avoid the enemy's.",
  sections: [
    {
      h: "What a power spike is",
      html: `<p>A power spike is a moment where your champion gets noticeably stronger in a short time. It can be a new level, a finished item, an ultimate coming off cooldown, or a buff from an objective. The whole game is a series of spikes for both teams.</p>
<p>Good players aren't always mechanically better. They just fight when they're on a spike and the enemy isn't, and back off when it's the other way around. If you only learn one advanced habit, learn this one: <strong>before every fight, ask "who just got stronger?"</strong></p>`
    },
    {
      h: "Level spikes",
      html: `<p>Levels matter most in the first part of the game, because each new level unlocks or upgrades an ability.</p>
<table>
<tr><th>Level</th><th>Why it matters</th></tr>
<tr><td>2</td><td>Your second ability. In bot lane, the team that reaches level 2 first can often force a big trade or kill. It takes the first wave plus three minions of the second.</td></tr>
<tr><td>3</td><td>Your full basic kit. Most junglers gank around level 3, and many champions can all-in now.</td></tr>
<tr><td>6</td><td>Your ultimate. This is the biggest early spike. Champions like {{champ:Malphite}}, {{champ:Veigar}} and {{champ:Annie}} become a kill threat the moment they hit 6.</td></tr>
<tr><td>11 and 16</td><td>Ultimate rank 2 and 3: more damage and a shorter cooldown.</td></tr>
</table>
<p>Watch the enemy's level, not just yours. If your lane opponent gets the last minion of a wave and hits 6 a few seconds before you, they have a window where they can fight with their ultimate and you can't. Step back until you level up too.</p>
<p>Top laners now get a level cap of 20 from their role quest, so a top laner who finishes their quest keeps gaining stats after everyone else maxes out.</p>
{{warn:Fighting just before your opponent levels up, without noticing. Look at their experience bar (click on them) when a wave is about to die.}}`
    },
    {
      h: "Item and component spikes",
      html: `<p>Your first finished item is usually the biggest item spike of the game. For many mages that's something like {{item:Luden's Echo}} or {{item:Malignance}}; for marksmen it's often {{item:Kraken Slayer}} or {{item:Infinity Edge}}.</p>
<p>But you don't need full items to spike. Smaller parts (components) make a real difference in lane:</p>
<ul>
<li>{{item:Needlessly Large Rod}} or {{item:B. F. Sword}} is a big damage jump for one recall.</li>
<li>{{item:Sheen}} gives an instant burst of damage to champions who use it, like {{champ:Ezreal}} or {{champ:Jayce}}.</li>
<li>{{item:Tiamat}} lets many fighters clear waves much faster.</li>
</ul>
<p>Two-item and three-item spikes are when champions really come online. A marksman with {{item:Infinity Edge}} and a second crit item does far more damage than one with one item. Count enemy items before fights: click on them, or press <kbd>Tab</kbd> to see the scoreboard.</p>
{{tip:If you recall with enough gold for a big component, buy it even if it's not your next item in order. Being stronger right now usually beats following a build guide perfectly.}}`
    },
    {
      h: "Early, mid and late game champions",
      html: `<p>Every champion is strongest at a certain point:</p>
<ul>
<li><strong>Early game champions</strong> ({{champ:Renekton}}, {{champ:Draven}}, {{champ:LeeSin}}, {{champ:Pantheon}}) hit hard right away but fall off. They need to snowball: take kills, plates and objectives early.</li>
<li><strong>Mid game champions</strong> ({{champ:Ahri}}, {{champ:Viego}}, {{champ:Jayce}}) peak around two or three items. They want to force fights from about 15 to 30 minutes.</li>
<li><strong>Late game champions</strong> ({{champ:Kayle}}, {{champ:Kassadin}}, {{champ:Smolder}}, {{champ:Veigar}}) are weak early and become monsters later. They just need to survive and farm.</li>
</ul>
<p>This tells you how to play the whole game. If your team is late-game and theirs is early-game, your job in the first 15 minutes is simple: don't die, don't fight unless you must, and trade objectives instead of contesting them badly. If it's the other way around, be aggressive while your window is open, because it closes.</p>`
    },
    {
      h: "Objective buffs are spikes too",
      html: `<p>Neutral objectives give temporary or permanent power that changes who should fight:</p>
<ul>
<li><strong>Dragons</strong> give stacking permanent buffs, and four of them give the Dragon Soul. A team one drake from Soul is about to spike.</li>
<li><strong>Void Grubs</strong> (three at 8:00) help take turrets, which leads to more gold.</li>
<li><strong>Baron Nashor</strong> (from 20:00) gives Hand of Baron for 180 seconds: bonus AD and AP that grow with game time, faster recalls, and much stronger minions. Use those three minutes to push, not to farm the jungle.</li>
<li><strong>Elder Dragon</strong> gives a burn and executes enemies below 20% health for 150 seconds. Fights with Elder are almost unwinnable for the other team.</li>
</ul>
<p>When the enemy has Baron or Elder, the right move is often to back off, defend under your turrets, and wait for the buff to run out.</p>`
    },
    {
      h: "Spotting the enemy's spike",
      html: `<p>Some quick habits:</p>
<ul>
<li>After an enemy recalls, assume they bought something. Click them when they come back to see their items.</li>
<li>Watch for ultimates coming back. If the enemy {{champ:Malphite}} used his ultimate 90 seconds ago, it might be ready again.</li>
<li>Count enemy levels before Dragon fights. A two-level difference is huge.</li>
<li>If a fed enemy just completed a big item, don't take an even fight for the next minute. Let them waste their timing.</li>
</ul>`
    }
  ],
  takeaways: [
    "Before every fight, ask who just got stronger.",
    "Level 2, 3 and 6 are the biggest early spikes; watch the enemy's experience bar.",
    "First finished items and big components are strong spikes; count enemy items with Tab.",
    "Early champions must snowball; late champions must survive. Play to your team's timing.",
    "Baron and Elder are huge temporary spikes: push with them, and wait them out when the enemy has them."
  ],
  related: ["trading", "matchups-and-cooldowns", "win-conditions"],
  quiz: [
    {
      q: "Your lane opponent just hit level 6 and you are still level 5. What should you do?",
      options: ["Fight right away", "Back off until you reach level 6 too", "Flash forward", "Ignore it, levels don't matter"],
      answer: 1,
      explain: "They have their ultimate and you don't. That's a short window where they win fights, so step back until you level up."
    },
    {
      q: "Your team has late-game champions and the enemy team is built for the early game. What's your plan in the first 15 minutes?",
      options: ["Force every fight", "Play safe, farm, avoid bad fights and trade objectives", "Invade the enemy jungle at level 1", "Give up early objectives AND farm"],
      answer: 1,
      explain: "Late-game teams win by surviving their weak period. Avoid fights you'd lose and let your champions scale."
    },
    {
      q: "The enemy team just took Baron. What's usually right for your team?",
      options: ["Fight them immediately in the open", "Defend near your turrets and wait for the 180-second buff to run out", "Split up and farm the jungle", "Go take Dragon with all five"],
      answer: 1,
      explain: "Hand of Baron is a big temporary spike. Defend safely, clear waves, and fight after it expires."
    }
  ]
});

/* ---------------------------------------------------------------- 3 */
RA.guides.push({
  id: "vision-control",
  title: "Advanced Vision Control",
  level: "advanced",
  category: "vision",
  minutes: 8,
  summary: "Vision wins objectives. Learn when to set up before Dragon and Baron, how to sweep, where to deep ward, how to use Faelights, and how to deny the enemy's sight.",
  sections: [
    {
      h: "Vision is about information and denial",
      html: `<p>In {{guide:vision-basics}} you learned to place wards so you don't get ganked. At a higher level, vision is a fight for <strong>information</strong>. The team that sees more makes better decisions: they know when to start Baron, when to fight, and when to run.</p>
<p>That means two jobs: <em>getting</em> vision for your team, and <em>denying</em> vision from the enemy. Removing enemy wards is often worth more than placing yours.</p>
<p>Your tools right now:</p>
<ul>
<li>Up to <strong>3 Stealth Wards</strong> and <strong>1 Control Ward</strong> on the map per player. You can carry two {{item:Control Ward}}s at 75 gold each (supports pay 40 after their quest).</li>
<li>{{item:Oracle Lens}}: the red trinket that reveals and disables wards around you for 8 seconds.</li>
<li>{{item:Farsight Alteration}}: the blue trinket that places a visible, permanent ward from very far away.</li>
<li><strong>Faelights</strong>: glowing mushroom rings on the map. A ward placed on one becomes a superward with 25% more sight and extra vision of the nearby area for 45 seconds.</li>
</ul>`
    },
    {
      h: "Set up 60-90 seconds before an objective",
      html: `<p>The most common reason teams lose Dragon or Baron is that they show up at the last second. The enemy already has wards around the pit and sees everything you do.</p>
<p>Use this timeline, using the timers on our <a href="#/tools/timers">Objective Timers</a> page:</p>
<ol>
<li><strong>90 seconds before:</strong> push your mid wave and the side wave closest to the objective. You need minion pressure so the enemy has to deal with waves while you set up.</li>
<li><strong>60 seconds before:</strong> your jungler and support walk in with Oracle Lens and Control Wards. Sweep the entrances to the pit and place your own wards in the bushes the enemy will walk through.</li>
<li><strong>30 seconds before:</strong> the rest of the team arrives. Place a Control Ward in or next to the pit so the enemy can't ward it at the last second.</li>
</ol>
<p>Around Dragon and Baron, the river bushes across from the pits have Faelights. Warding one gives you a huge view of how the enemy will approach.</p>
{{tip:The side that has priority (pushed waves) gets to set vision first. That's why winning lanes before an objective spawns matters so much.}}`
    },
    {
      h: "Sweeping well",
      html: `<p>{{item:Oracle Lens}} only lasts 8 seconds, so don't waste it. Use it where wards are most likely to be: bush entrances to your jungle, the river bushes near objectives, and the spot where you just saw an enemy support walk.</p>
<p>Habits that help:</p>
<ul>
<li>Swap to Oracle Lens once your support or jungler role starts setting up objectives, and many mid laners do the same after the first few recalls.</li>
<li>Buy a {{item:Control Ward}} every time you recall if you have a free slot. It's the best 75 gold in the game.</li>
<li>Place your Control Ward where it's hard to find and useful for a long time, like the inside corner of a bush, so the enemy can't easily clear it.</li>
</ul>
<p>The rune {{rune:Sixth Sense}} (Domination) automatically finds a nearby enemy ward every so often, and at level 11 reveals it. Some supports and junglers use it to win the vision war.</p>
{{warn:Placing a Control Ward in the open river where the enemy will see and destroy it for free. A ward that lives 10 seconds gives the enemy gold and you nothing.}}`
    },
    {
      h: "Deep wards and tracking",
      html: `<p>A deep ward is a ward placed in the enemy's jungle, near their buffs or the paths they use. It tells you where the enemy jungler is starting, when they go for a buff, and when their team rotates.</p>
<p>Good deep ward spots when you're ahead:</p>
<ul>
<li>The enemy's blue or red buff, about 30 seconds before it respawns.</li>
<li>The bush that connects the enemy jungle to their side lane, so your split pusher sees enemies coming.</li>
<li>The enemy raptor area, which many junglers path through.</li>
</ul>
<p>The {{rune:Deep Ward}} rune makes your wards in the enemy jungle tougher and longer-lasting. When you're behind, don't deep ward: it's too dangerous. Ward your own jungle instead, so you see invades coming.</p>`
    },
    {
      h: "Vision lines for sieging and defending",
      html: `<p>When you push a turret as a team, think of a <strong>vision line</strong>: a row of wards across the enemy jungle entrances near that lane. It tells you if someone tries to flank or walk around behind you.</p>
<p>When defending, do the opposite. Clear the enemy's wards near your turret with Oracle Lens, then stand in the fog. If the enemy can't see you, they don't know if it's safe to dive, and they'll often wait too long.</p>
<p>A clear pattern: take a turret, then immediately ward deeper in that part of the enemy jungle. Each turret you take opens more of the map to safe vision.</p>`
    },
    {
      h: "Denying vision wins fights before they start",
      html: `<p>If the enemy can't see your team, they have to guess. Teams that guess make mistakes: they face-check bushes, start Baron when you're right there, or fight with only four players.</p>
<p>Before a big objective, try to have the enemy see <em>nothing</em> on your half of the river. Then you can stand in an unexpected spot, wait for them to walk in, and start the fight on your terms.</p>
<p>Track how many wards the enemy places. If their support recalls and comes back with Control Wards, expect new vision near the next objective, and sweep again.</p>`
    }
  ],
  takeaways: [
    "Arrive at objectives 60-90 seconds early, after pushing nearby waves.",
    "Each player can have 3 Stealth Wards and 1 Control Ward placed; buy Control Wards every recall.",
    "Use Faelights near Dragon and Baron for a 45-second superward.",
    "Deep ward when ahead, ward your own jungle when behind.",
    "Denying enemy vision is often worth more than placing your own."
  ],
  related: ["vision-basics", "objectives-and-dragons", "jungle-tracking"],
  quiz: [
    {
      q: "When should your team start setting up vision for Dragon?",
      options: ["When it's already at half health", "About 60-90 seconds before it spawns", "Only after the enemy starts it", "Vision doesn't matter for Dragon"],
      answer: 1,
      explain: "Arriving early lets you clear enemy wards and place your own before the enemy team shows up."
    },
    {
      q: "What happens when you place a ward on a Faelight?",
      options: ["It reveals the whole map", "It becomes a superward with more sight for 45 seconds", "It gives you gold", "Nothing special"],
      answer: 1,
      explain: "Faelights give your ward 25% more sight radius plus vision of a nearby area for 45 seconds."
    },
    {
      q: "Your team is behind. Where should you focus your wards?",
      options: ["Deep in the enemy jungle", "In your own jungle, to see invades and ganks coming", "Only in lane bushes", "Nowhere, save gold"],
      answer: 1,
      explain: "Deep warding is dangerous when behind. Warding your own jungle keeps you safe and lets you catch enemies who invade."
    }
  ]
});

/* ---------------------------------------------------------------- 4 */
RA.guides.push({
  id: "matchups-and-cooldowns",
  title: "Matchups, Cooldowns & Lane Priority",
  level: "advanced",
  category: "laning",
  minutes: 8,
  summary: "Win lane before it starts: learn matchups efficiently, track enemy Flash and key abilities, punish cooldown windows, and use lane priority to win 2v2s with your jungler.",
  sections: [
    {
      h: "Learn matchups the smart way",
      html: `<p>There are more than 170 champions. You can't memorize every matchup, so focus on the questions that matter in each one:</p>
<ol>
<li><strong>Who is stronger at levels 1-3?</strong> That decides whether you fight for the first wave or play safe.</li>
<li><strong>Who is stronger at 6?</strong> Some champions win lane the moment they get their ultimate.</li>
<li><strong>What is their one ability that matters most?</strong> Usually it's their crowd control or their escape. When it's down, you can fight.</li>
<li><strong>Who scales better?</strong> If they win late, you need to get ahead early; if you win late, just survive.</li>
</ol>
<p>Our champion guides list the hardest and easiest matchups for each champion, with a tip for each. After a game you lost in lane, read about that one matchup. That's how you learn the ones you actually face.</p>
{{tip:Keep a small champion pool (2-3 champions per role). You'll learn each matchup from your champion's point of view much faster than if you play 15 different champions.}}`
    },
    {
      h: "Tracking Flash and summoner spells",
      html: `<p>{{spell:Flash}} has a 300-second (5-minute) cooldown. When an enemy uses it, they're much easier to kill until it comes back. Pros track this all game, and you can too:</p>
<ul>
<li>When an enemy Flashes, write the time in chat for your team. Press <kbd>Enter</kbd>, then type something like "mid flash 12:40" (that's when it's back: the current time + 5 minutes).</li>
<li>Also note {{spell:Teleport}}, {{spell:Ignite}} (180 seconds), {{spell:Heal}} and {{spell:Exhaust}} (240 seconds), and {{spell:Barrier}} (180 seconds).</li>
<li>In the scoreboard (<kbd>Tab</kbd>), you can click on enemy summoner spells to ping their cooldowns to your team automatically.</li>
</ul>
<p>Remember that the rune {{rune:Cosmic Insight}} gives summoner spell haste, so Flash can come back a little sooner on enemies who take it.</p>
<p>A laner without Flash is your jungler's favorite target. Ping it and ask for a gank.</p>
{{warn:Forgetting that YOU used Flash. If your Flash is down and the enemy jungler goes missing, play much safer. You have no escape.}}`
    },
    {
      h: "Fight in the cooldown windows",
      html: `<p>Most trades in lane happen because one player used an important ability and the other punishes it before it comes back. This is a cooldown window.</p>
<p>Examples:</p>
<ul>
<li>{{champ:Ahri}} throws Charm (12-second cooldown) and misses: walk up and trade for the next few seconds.</li>
<li>{{champ:Caitlyn}} uses her net to jump back: she can't escape again for a while, so your support can engage.</li>
<li>{{champ:Lux}} misses her Light Binding: she has no crowd control and is very weak until it returns.</li>
<li>An enemy uses their dash to farm a minion: now they can't dodge your skill shot.</li>
</ul>
<p>You can see cooldowns by clicking an enemy champion: their abilities appear at the top of your screen. Hover over the ability to see its exact cooldown at its current rank. Our champion pages also list each ability's cooldown.</p>`
    },
    {
      h: "Lane priority and why it matters",
      html: `<p><strong>Lane priority</strong> means your wave is pushing toward the enemy, so you can leave lane first and they can't follow without losing minions. Priority is what lets you help your jungler at Scuttle, roam, or arrive first at Dragon.</p>
<p>To get priority:</p>
<ul>
<li>Push the wave faster than your opponent, using abilities on minions when it's safe.</li>
<li>Win trades so they have to back off and lose minions.</li>
<li>Recall after crashing a wave into their turret, not while your wave is pushing toward yours. See {{guide:recall-timing}}.</li>
</ul>
<p>Mid lane priority is especially valuable, because the mid laner is closest to both sides of the river and can help at every objective.</p>`
    },
    {
      h: "Playing for 2v2s with your jungler",
      html: `<p>The early game is often decided by 2v2 fights: your laner and jungler against theirs. Whoever has priority wins these, because they get to the fight first.</p>
<p>Use jungle tracking (see {{guide:jungle-tracking}}) to guess where both junglers are:</p>
<ul>
<li>If your jungler is coming to your side of the map and you have priority, push your wave and walk toward the river with them.</li>
<li>If the enemy jungler is on your side and your jungler is far away, push the wave carefully or stay near your turret.</li>
<li>Around the first Scuttle (2:55) and Void Grubs (8:00), the laners nearby with priority decide who gets them.</li>
</ul>
<p>Communicate simply: ping your jungler's portrait or use "On my way" pings to show you're ready to help.</p>
{{tip:When your jungler is fighting the enemy jungler near your lane, getting there first is everything. Push your wave a little before your jungler arrives so you can move instantly.}}`
    }
  ],
  takeaways: [
    "For each matchup, know: who wins levels 1-3, who wins at 6, their key ability, and who scales better.",
    "Flash has a 5-minute cooldown. Write enemy Flash timers in chat.",
    "Trade when the enemy just used an important ability.",
    "Lane priority (your wave pushing) lets you move first to fights and objectives.",
    "Early 2v2s are won by the side whose laner gets there first."
  ],
  related: ["trading", "jungle-tracking", "power-spikes"],
  quiz: [
    {
      q: "The enemy mid laner used Flash at 10:30. When will it be back (ignoring summoner haste)?",
      options: ["11:30", "13:30", "15:30", "20:30"],
      answer: 2,
      explain: "Flash has a 300-second (5-minute) cooldown, so 10:30 + 5:00 = 15:30."
    },
    {
      q: "What does lane priority mean?",
      options: ["You have more kills", "Your wave is pushing toward the enemy, so you can leave lane first", "You picked your champion first", "Your jungler is in your lane"],
      answer: 1,
      explain: "With priority, the enemy has to stay and catch the wave while you can move to the river, roam or help at objectives."
    },
    {
      q: "Lux throws her Light Binding at you and misses. What's a good response?",
      options: ["Back off immediately", "Walk up and trade while it's on cooldown", "Recall", "Use your Flash"],
      answer: 1,
      explain: "Light Binding is her main crowd control. While it's on cooldown, she's much easier to fight."
    }
  ]
});

/* ---------------------------------------------------------------- 5 */
RA.guides.push({
  id: "win-conditions",
  title: "Win Conditions & Team Comps",
  level: "advanced",
  category: "macro",
  minutes: 9,
  summary: "Every team has a plan that wins. Learn to spot your team's win condition, the five comp types, drafting basics, and how to play from ahead and from behind.",
  sections: [
    {
      h: "What a win condition is",
      html: `<p>A win condition is the simplest answer to the question: <strong>"How does our team win this game?"</strong> It might be "our {{champ:Jinx}} gets three items and we protect her", or "our {{champ:Fiora}} split pushes top while we hold mid", or "we poke them down before fights with {{champ:Ziggs}} and {{champ:Xerath}}".</p>
<p>When you know your win condition, decisions get easier. Every time you're unsure what to do, ask whether it helps the plan. Should the support ward bot side or follow the jungler? Should you fight now or wait? The win condition decides.</p>
<p>Look for it during loading screen. Check both teams and ask: who on our team scales best, who is ahead, and what does our comp do well?</p>`
    },
    {
      h: "The five team comp types",
      html: `<p>Most team compositions fall into one of these, or mix two:</p>
<table>
<tr><th>Comp</th><th>How it wins</th><th>Example champions</th></tr>
<tr><td>Engage (dive)</td><td>Jumps on the enemy team with big crowd control and wins the 5v5.</td><td>{{champ:Malphite}}, {{champ:Leona}}, {{champ:Orianna}}</td></tr>
<tr><td>Poke (siege)</td><td>Damages enemies from long range until they're too low to fight, then takes objectives.</td><td>{{champ:Ziggs}}, {{champ:Xerath}}, {{champ:Jayce}}, {{champ:Ezreal}}</td></tr>
<tr><td>Pick</td><td>Catches one enemy out of position, kills them, then forces an objective 5v4.</td><td>{{champ:Ahri}}, {{champ:Thresh}}, {{champ:Ashe}}</td></tr>
<tr><td>Protect (front-to-back)</td><td>Keeps one hyper-carry alive while they deal all the damage.</td><td>{{champ:Jinx}}, {{champ:Lulu}}, {{champ:Karma}}</td></tr>
<tr><td>Split push</td><td>One strong duelist pushes a side lane while the team stalls, forcing the enemy to split up.</td><td>{{champ:Fiora}}, {{champ:Jax}}, {{champ:TwistedFate}}</td></tr>
</table>
<p>Each comp beats some and loses to others. Engage beats poke (you jump on them before they can poke you down). Poke beats protect (the hyper-carry gets chipped before the fight). A good pick comp punishes split pushers. Know which one you are and which one they are.</p>
{{warn:Playing against your comp. A poke team that walks into a 5v5 face-to-face fight with an engage team will lose even if it's ahead in gold.}}`
    },
    {
      h: "Drafting basics",
      html: `<p>In ranked you pick your champion in champ select. A few simple rules:</p>
<ul>
<li><strong>Pick what you're good at.</strong> A champion you've played 100 times beats the "perfect" pick you've never played.</li>
<li><strong>Look at your team's damage.</strong> If your team has four physical damage champions, a mage helps a lot. Otherwise the enemy just builds armor.</li>
<li><strong>Make sure someone can start a fight</strong> (hard crowd control) and someone can stand in front (a tank or bruiser).</li>
<li><strong>Counter-pick if you're picking late</strong>, but only with a champion you know.</li>
<li><strong>Ban what you hate playing against</strong>, or what's strongest right now (check our <a href="#/tierlist">tier list</a>).</li>
</ul>
{{tip:Have a "safe" champion for each role that's hard to counter. When you're forced to pick first in your role, play that one.}}`
    },
    {
      h: "Playing from ahead",
      html: `<p>Being ahead feels good, but many games are thrown here. When you're ahead:</p>
<ul>
<li><strong>Turn kills into objectives.</strong> After winning a fight, take a turret, Dragon or Baron immediately. A kill with no objective is a wasted lead.</li>
<li><strong>Take vision of their jungle.</strong> Push their side of the map and ward deep, so they can't farm safely.</li>
<li><strong>Don't fight in their territory without vision.</strong> Being ahead doesn't protect you from walking into five people in a bush.</li>
<li><strong>Group and force objectives.</strong> Make them fight you at Dragon or Baron, where your lead matters most.</li>
</ul>`
    },
    {
      h: "Playing from behind",
      html: `<p>Games are rarely over at 20 minutes. When you're behind:</p>
<ul>
<li><strong>Farm safely.</strong> Catch waves under your own turrets and let your scaling champions catch up.</li>
<li><strong>Don't contest everything.</strong> If you can't win a fight at Dragon, give it and take something on the other side instead.</li>
<li><strong>Look for picks.</strong> Enemies who are ahead get overconfident and walk into your jungle alone. Wait in vision-free bushes.</li>
<li><strong>Remember comeback rewards.</strong> Bounties on fed enemies and extra experience from objectives for the losing team can swing a game fast.</li>
</ul>
<p>The team that's behind wins by waiting for one mistake. Be patient and ready.</p>`
    },
    {
      h: "Closing out the game",
      html: `<p>The best time to end is right after you win a big fight or take Baron. Steps:</p>
<ol>
<li>Win a fight or take Baron.</li>
<li>Push the closest lane with your whole team and the big minion wave.</li>
<li>Take inhibitors. With inhibitors down, super minions keep pushing for you.</li>
<li>Back, buy, and come again before they respawn. Don't stay too long with low health.</li>
</ol>
<p>Death timers get long late in the game (up to about 79 seconds). Count how many enemies are dead and how long until they respawn before you go for the Nexus.</p>`
    }
  ],
  takeaways: [
    "Your win condition is the simplest plan for how your team wins. Find it in loading screen.",
    "Know your comp type (engage, poke, pick, protect, split) and play to it.",
    "Pick champions you know well and make sure your team has mixed damage and crowd control.",
    "When ahead, turn every kill into an objective. When behind, farm safely and wait for a mistake.",
    "End right after a won fight or Baron. Don't stay too long."
  ],
  related: ["side-lanes", "teamfighting", "power-spikes"],
  quiz: [
    {
      q: "Your team has a poke comp (Ziggs, Xerath, Ezreal). What should you avoid?",
      options: ["Poking before objectives", "Taking turrets", "Walking into a face-to-face 5v5 with an engage team", "Buying Control Wards"],
      answer: 2,
      explain: "Poke wins by damaging enemies from range before a fight. An engage team wants a straight 5v5, so don't give it to them."
    },
    {
      q: "Your team just won a teamfight 4-for-1. What's the best next step?",
      options: ["Recall immediately and do nothing", "Take an objective, like a turret, Dragon or Baron", "Split up and farm the jungle", "Chase the last enemy into fog"],
      answer: 1,
      explain: "Turn the fight into an objective while the enemies are dead. Kills alone don't win games."
    },
    {
      q: "Which is the best drafting rule for most players?",
      options: ["Always pick the champion with the highest win rate", "Pick a champion you know well", "Always counter-pick, even with a new champion", "Pick five assassins"],
      answer: 1,
      explain: "Comfort matters more than small tier differences. A champion you know well will win you more games."
    }
  ]
});

/* ---------------------------------------------------------------- 6 */
RA.guides.push({
  id: "mental-game",
  title: "The Mental Game: Tilt, Focus & Improving",
  level: "advanced",
  category: "mental",
  minutes: 8,
  summary: "Your mindset decides how much you improve. Learn to control tilt, review your own games, set goals, choose a champion pool, and know when to stop for the day.",
  sections: [
    {
      h: "Why the mental game matters",
      html: `<p>Two players with the same mechanics can be ranks apart because of how they think. One gets angry after a death and plays worse for the rest of the game. The other asks "what could I have done better?" and adjusts. Over hundreds of games, that difference is huge.</p>
<p>You can't control your teammates, the enemy, or bad luck. You can control your own focus and decisions. That's where all of your improvement comes from.</p>`
    },
    {
      h: "Controlling tilt",
      html: `<p>Tilt is when frustration makes you play worse: you take risky fights to "make up" for a death, you argue in chat, you stop paying attention to the map. It happens to everyone. What matters is catching it early.</p>
<p>Signs you're tilted:</p>
<ul>
<li>You're typing more than you're watching the map.</li>
<li>You blame a teammate for every problem.</li>
<li>You queue up again immediately after a loss, angry.</li>
<li>You make the same mistake twice in a row.</li>
</ul>
<p>What helps:</p>
<ul>
<li><strong>Mute chat early.</strong> Type <kbd>/mute all</kbd> at the start of the game if you're easily annoyed. You keep pings and lose nothing important.</li>
<li><strong>Take a breath after a death.</strong> Use the death timer to look at the map and plan your next move, not to type.</li>
<li><strong>Focus on your next decision,</strong> not the last one. The game isn't over until the Nexus falls.</li>
</ul>
{{warn:Arguing with a teammate in chat. Nobody has ever played better after being flamed, and while you type, you're not watching the map.}}`
    },
    {
      h: "Reviewing your own games (VOD review)",
      html: `<p>Watching your own replays is the fastest way to improve. In the League client, open your match history and download the replay. Then:</p>
<ol>
<li><strong>Watch your deaths first.</strong> Pause a few seconds before each one and ask: what did I know at that moment? Was the enemy jungler visible? Did I check the minimap?</li>
<li><strong>Check your CS at 10 minutes.</strong> If it's low, watch your laning phase and count the minions you missed. Why did you miss them?</li>
<li><strong>Look at one decision per game.</strong> A fight you took, an objective you skipped. Would you do it again?</li>
<li><strong>Write down one lesson.</strong> Just one, like "ward the river bush before pushing" or "don't fight before the enemy's level 6".</li>
</ol>
<p>Don't try to fix everything at once. One lesson per game, practiced for a few games, sticks much better.</p>
{{tip:Watch your replays from your own camera first, then switch to the enemy jungler's camera. You'll see exactly how and when they decided to gank you.}}`
    },
    {
      h: "Setting goals that you control",
      html: `<p>"Win the game" isn't a good goal, because you don't fully control it. Pick goals about your own play, one per game or session:</p>
<ul>
<li>Get 70 CS by 10 minutes.</li>
<li>Look at the minimap every time a minion wave dies.</li>
<li>Buy a {{item:Control Ward}} every time you recall.</li>
<li>Don't die before 10 minutes.</li>
<li>Write every enemy Flash timer in chat.</li>
</ul>
<p>After each game, ask: did I meet my goal? This turns losses into progress. You can lose the game and still have a great session if you hit your goal every time.</p>`
    },
    {
      h: "Champion pool: small is strong",
      html: `<p>Every champion you play takes time to learn: the combos, the matchups, the power spikes, the build. If you rotate through 20 champions, you're always a beginner.</p>
<p>A good setup:</p>
<ul>
<li>Pick <strong>one main role</strong> and one backup role.</li>
<li>Play <strong>2-3 champions</strong> in your main role: one main, one backup for when your main is banned, and maybe one for specific matchups.</li>
<li>Play each one for many games before adding more.</li>
</ul>
<p>Our <a href="#/champions">champion guides</a> mark difficulty, so start with Easy or Medium champions while you learn the role.</p>`
    },
    {
      h: "When to stop, and playing with others",
      html: `<p>Know when to stop for the day. Good rules:</p>
<ul>
<li>Stop after two losses in a row, or after any game where you got angry.</li>
<li>Don't play ranked when you're tired, hungry or in a hurry.</li>
<li>Take short breaks between games: stand up, drink water.</li>
</ul>
<p>Playing with a friend (duo) can help a lot, especially bot lane with a support you trust. Agree on simple calls beforehand, keep communication positive, and use pings: they're quick and clear. See {{guide:teamwork-and-pings}} for how to communicate well with random teammates too.</p>
<p>Above all, play to have fun and to get a little better each day. Climbing is a long road, and players who enjoy the process usually go furthest.</p>`
    }
  ],
  takeaways: [
    "You can only control your own play. Focus there.",
    "Mute chat if it distracts you, and use death timers to plan instead of typing.",
    "Review your deaths in replays and take one lesson from each game.",
    "Set goals you control (CS, wards, minimap checks) instead of just winning.",
    "Keep a small champion pool and stop playing after two losses or when tilted."
  ],
  related: ["teamwork-and-pings", "staying-alive", "matchups-and-cooldowns"],
  quiz: [
    {
      q: "Which of these is a good goal for a single game?",
      options: ["Win the game no matter what", "Get 70 CS by 10 minutes", "Get more kills than everyone", "Make the enemy team surrender"],
      answer: 1,
      explain: "Good goals are about things you fully control. CS, wards and minimap checks are all in your hands."
    },
    {
      q: "What's the best first thing to look at when reviewing your replay?",
      options: ["Your pentakills", "Your deaths, a few seconds before each one", "The loading screen", "Your teammates' mistakes"],
      answer: 1,
      explain: "Deaths are the clearest mistakes. Pausing before each one shows what information you had and what you missed."
    },
    {
      q: "How many champions should most players focus on in their main role?",
      options: ["1 only, forever", "2-3", "10-15", "Every champion"],
      answer: 1,
      explain: "A small pool lets you learn each champion's matchups and spikes deeply, while still having a backup when one is banned."
    }
  ]
});
