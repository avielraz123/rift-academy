window.RA = window.RA || {};
RA.guides = RA.guides || [];

/* ---------- 1. Climbing out of Iron and Silver (beginner) ---------- */
RA.guides.push({
  id: "climbing-low-elo",
  title: "Climbing Out of Iron and Silver",
  level: "beginner",
  category: "mental",
  minutes: 8,
  summary: "Low-elo games are won by the team that makes fewer mistakes, not by flashy plays. Learn what actually wins games in Iron and Silver, the habits that hold most players back, and a simple routine to practice.",
  sections: [
    {
      h: "How low-elo games are really decided",
      html: `<p>In Iron, Bronze and Silver, most games aren't won by one amazing play. They're lost by the team that makes more mistakes: more deaths, more missed minions, more fights started for no reason.</p>
<p>That's good news. You don't need perfect mechanics to climb. You need to make fewer mistakes than the average player at your rank, game after game. A player who farms steadily, rarely dies and takes free objectives will win more often than a player with great reflexes who throws once per game.</p>
<p>Remember too that you're the only player who is in every one of your games. Your four teammates change each time, and over many games the bad teammates are spread evenly between both teams. The one thing that's always on your side is you.</p>`
    },
    {
      h: "The four things that win games",
      html: `<ol>
<li><strong>Farming.</strong> Minions are the most reliable gold in the game. Most low-elo players miss half their CS, so simply last-hitting well puts you an item ahead without a single kill. Start with {{guide:last-hitting}}.</li>
<li><strong>Not dying.</strong> Every death gives the enemy gold, costs you farm and experience, and leaves your team a player short. A 2/1 player often helps the team more than a 6/8 player. See {{guide:staying-alive}}.</li>
<li><strong>Taking towers and dragons.</strong> Kills don't win games; destroying the Nexus does. After you win a fight or kill your lane opponent, hit the tower or start the dragon instead of wandering off. Turret plates stay on the tower all game now, so a tower is always worth gold, and the first turret of the game gives a bonus to everyone nearby. Read {{guide:objectives-and-dragons}} for the timers.</li>
<li><strong>Playing few champions.</strong> If you know one champion's combos, matchups and build by heart, your hands are free to watch the map. If you play a new champion every game, all your attention goes to your own buttons.</li>
</ol>
{{tip:After every kill, ask "what can we take now?" The answer is usually a tower, a dragon or the enemy jungle camps. A kill that doesn't turn into something is only half used.}}`
    },
    {
      h: "Habits that hold most players back",
      html: `<p>These five habits lose more low-elo games than anything else. You probably have at least one of them. Everyone does.</p>
<ul>
<li><strong>Chasing.</strong> You follow a low-health enemy into the fog and run into their jungler, or you chase them past their tower. Three people chasing one enemy across the map while the rest of the enemy team takes Baron is a classic low-elo loss.</li>
<li><strong>Fighting without vision.</strong> Walking into a dark jungle or river to start a fight means you don't know how many enemies are waiting. If you can't see them, assume they're there. See {{guide:vision-basics}}.</li>
<li><strong>Ignoring the wave.</strong> Leaving lane to help in a fight that's already over, while a big wave crashes into your tower, costs gold and sometimes the tower itself. Learn the basics in {{guide:wave-management}}.</li>
<li><strong>Tilt.</strong> After one bad death, you take a risky fight to "make up for it," die again, and the game snowballs from there.</li>
<li><strong>Blaming.</strong> Typing at a teammate never makes them play better, and while you type, you're not watching the map.</li>
</ul>
{{warn:Chasing a kill because the enemy is "only at 50 health." That last bit of health has started more lost fights than any other number. If you can't kill them in a few seconds and they're running toward their side of the map, let them go and take their wave or tower instead.}}`
    },
    {
      h: "Tilt and blame: protect your own game",
      html: `<p>You can't control what your teammates do. You can control whether their mistakes become your mistakes too.</p>
<ul>
<li><strong>Mute early.</strong> If chat bothers you, mute it at the start of the game. You keep pings and lose nothing important.</li>
<li><strong>Use the death timer to look, not to type.</strong> Watch where the enemies are and plan where you'll go when you respawn.</li>
<li><strong>Games at this rank are long and messy.</strong> Teams throw leads all the time. A game that looks lost at 15 minutes often turns around at 30 because someone gets caught. Keep farming and wait for the enemy's mistake.</li>
<li><strong>Set a stop rule.</strong> For example, stop after two losses in a row. Tilted games are where most LP disappears.</li>
</ul>
<p>The {{guide:mental-game}} guide goes deeper into tilt, goals and reviewing your games.</p>`
    },
    {
      h: "A simple practice routine",
      html: `<p>You don't need hours of practice. A small routine, repeated every session, beats random games.</p>
<ol>
<li><strong>Warm up for five minutes.</strong> Use our <a href="#/tools/cs-trainer">Last-Hit Trainer</a> or a Practice Tool game to get your timing back before you queue.</li>
<li><strong>Pick one CS goal.</strong> For example, 50 CS at 10 minutes. Once you hit it most games, raise it to 60, then 70. Check your number with <kbd>Tab</kbd> at 10:00.</li>
<li><strong>Review your deaths.</strong> After the game, think through each death (or watch it in the replay) and ask one question: "What could I have seen or done earlier?" Write down one lesson and focus on it next game.</li>
<li><strong>Keep a small champion pool.</strong> One main role, two or three champions. Our <a href="#/champions">champion guides</a> mark difficulty, so start with the easier ones.</li>
</ol>
<p>If you're not sure what to learn next, follow the <a href="#/path">learning path</a>: it lists every guide and practice tool in order.</p>`
    },
    {
      h: "Measure progress the right way",
      html: `<p>Your rank goes up and down from day to day, and one session tells you very little. Instead, track things you control:</p>
<ul>
<li>Your CS at 10 minutes.</li>
<li>How many times you died before 15 minutes.</li>
<li>Whether you met your one goal for the game.</li>
</ul>
<p>If those numbers improve over a few weeks, your rank follows. Players who climb out of low elo usually aren't the most talented ones. They're the ones who fixed one habit at a time and kept going.</p>`
    }
  ],
  takeaways: [
    "Low-elo games are lost by the team with more mistakes, so make fewer of them.",
    "Farm well, die less, and turn every won fight into a tower or dragon.",
    "Stop chasing, don't fight in unwarded areas, and don't leave a big wave crashing into your tower.",
    "Mute chat if it tilts you, and stop after two losses in a row.",
    "Warm up, set one CS goal, review your deaths, and play two or three champions."
  ],
  related: ["last-hitting", "staying-alive", "mental-game", "objectives-and-dragons"],
  quiz: [
    { q: "What decides most games in Iron and Silver?", options: ["Which team has the best mechanics", "Which team makes fewer mistakes", "Which team gets First Blood", "Which team picks the newest champions"], answer: 1, explain: "At low ranks, games are usually lost through deaths, missed farm and pointless fights. Making fewer mistakes than the other team wins." },
    { q: "You just killed your lane opponent and the enemy jungler is far away. What's usually the best next step?", options: ["Recall right away to admire your gold", "Hit their tower or take the next objective", "Walk into their jungle to look for another kill", "Go to another lane and leave your wave"], answer: 1, explain: "A kill is most valuable when it turns into something lasting, like tower plates, a tower or a dragon." },
    { q: "An enemy runs into the fog at low health, toward their side of the map. What should you usually do?", options: ["Chase them, they're almost dead", "Let them go and take their wave or tower", "Ping your whole team to chase", "Flash after them"], answer: 1, explain: "Chasing into unseen territory is one of the most common ways to die. Take something safe instead." },
    { q: "Which practice routine helps most players climb?", options: ["Play a different champion every game to learn them all", "Play as many games as possible in a row", "Warm up, set one CS goal, review deaths and play a small champion pool", "Only play when your favorite teammate is online"], answer: 2, explain: "A small, repeatable routine that targets your own habits builds skill much faster than random games." }
  ]
});

/* ---------- 2. Melee vs. ranged lanes (intermediate) ---------- */
RA.guides.push({
  id: "melee-vs-ranged",
  title: "Melee vs. Ranged Lanes",
  level: "intermediate",
  category: "laning",
  minutes: 9,
  summary: "Laning as a melee champion against a ranged one feels unfair, but it's very playable. Learn how to survive and win as the melee side, and how to punish melee champions when you're the ranged one.",
  sections: [
    {
      h: "Why this matchup feels unfair",
      html: `<p>A ranged champion can hit you from outside your reach. Every time you walk up to last-hit, they get a free basic attack on you. Over a few waves, that adds up to a lot of lost health. This is called <strong>poke</strong>.</p>
<p>But melee champions have their own advantages. Most are tankier, many have dashes or crowd control to close the gap, and once they reach you, they usually win the fight up close. So the matchup becomes a simple question: can the ranged champion keep you away long enough, or can you survive until you're strong enough to get in?</p>
<p>You'll see this most in top lane, where champions like {{champ:Garen}} or {{champ:Darius}} face {{champ:Teemo}}, {{champ:Quinn}} or {{champ:Vayne}}, and in mid lane, where melee assassins like {{champ:Yasuo}} or {{champ:Talon}} face long-range mages like {{champ:Xerath}}.</p>`
    },
    {
      h: "As melee: survive the early levels",
      html: `<p>Your first goal isn't to win the lane. It's to reach your strong points without falling far behind.</p>
<ul>
<li><strong>Give up some CS.</strong> You don't need every minion. Prioritize cannon and melee minions, which are worth more. If a caster minion means taking a free attack and a spell, skip it. Stay close enough to get the experience, though: you get XP from minions dying nearby even if you don't last-hit them.</li>
<li><strong>Start with sustain.</strong> {{item:Doran's Shield}} and a {{item:Health Potion}} is the classic melee start in a hard matchup. It restores some health after you take damage from an enemy champion, which is exactly what poke does. The rune {{rune:Second Wind}} does a similar job.</li>
<li><strong>Use the brush.</strong> Standing in a lane bush hides you. The ranged champion can't see you to attack you, can't aim their spells well, and has to guess when you'll walk out. Just remember they may ward it.</li>
<li><strong>Let the wave come to you.</strong> Melee champions usually want the wave near their own tower. Then the ranged champion has to walk far forward to farm, which makes them easier to reach and easier for your jungler to gank.</li>
</ul>
{{warn:Walking up to every last hit at full speed and taking a free attack each time. By level 3 you're at half health without having hit your opponent once. Time your steps forward so you arrive just as the minion is ready to die, then step back.}}`
    },
    {
      h: "As melee: when and how to trade",
      html: `<p>You can't trade at range, so you have to pick your moments.</p>
<ul>
<li><strong>Trade when they last-hit.</strong> When the ranged champion attacks a minion, they can't attack you for a moment. Walk in, hit them, and walk out. Short trades are your friend; long fights near their wave aren't.</li>
<li><strong>Trade when their key spell is down.</strong> Once {{champ:Teemo}} has used his blind and it has worn off, your basic attacks work again until it comes back. If {{champ:Vayne}} uses her knockback, she can't push you away again for some time.</li>
<li><strong>Use your tools to block or dodge.</strong> {{champ:Yasuo}}'s wind wall stops most projectiles, so a mage like {{champ:Xerath}} has a much harder time hitting him while it's up.</li>
<li><strong>Wait for your spikes.</strong> Many melee champions get much stronger at level 2 or 3 when their combo is complete, at level 6 with their ultimate, and again with their first completed item. Until then, farm and stay healthy.</li>
</ul>
{{tip:Some melee champions, like {{champ:Nasus}}, barely need to trade at all early. Against a ranged opponent, they farm safely under their tower, stay even on experience and win the game later. Losing the lane a little is fine if you still get your scaling.}}`
    },
    {
      h: "As melee: buy the right defenses and ask for help",
      html: `<p>Items can turn a bad lane around. If the ranged champion deals most of their damage with basic attacks, like {{champ:Vayne}}, {{champ:Quinn}} or {{champ:Caitlyn}}, {{item:Plated Steelcaps}} cut the damage from every attack. If they deal magic damage, like {{champ:Teemo}} or {{champ:Kennen}}, {{item:Mercury's Treads}} help a lot.</p>
<p>Ranged champions in these matchups often have weak escapes and push up the lane to poke. That makes them great gank targets. Let your jungler know:</p>
<ul>
<li>Ping your lane when the enemy is pushed forward with no vision.</li>
<li>Keep the wave near your tower so the gank doesn't need to go deep.</li>
<li>Have your crowd control ready when your jungler arrives.</li>
</ul>
<p>One successful gank can flip the whole lane, because the ranged champion now has to respect you too.</p>`
    },
    {
      h: "As ranged: punish the melee champion",
      html: `<p>If you're the ranged side, your job is to make every minion expensive for your opponent.</p>
<ul>
<li><strong>Auto them when they walk up for CS.</strong> Each time a melee champion steps forward to last-hit, they're in your range and you're not in theirs. Hit them, then go back to farming. Do this every wave and they'll either lose a lot of farm or have to recall early.</li>
<li><strong>Watch minion aggro.</strong> Hitting a champion near their minions makes those minions attack you. Step back after each attack so you don't take free minion damage.</li>
<li><strong>Keep the wave on your side.</strong> When the wave sits near your tower, the melee champion has to walk a long way to reach you, taking attacks the whole time, and they're far from their own safety. You can push into their tower when you want to recall or take plates, but that leaves you further from home, so do it when you know where their jungler is.</li>
<li><strong>Spend your mana on poke, not on pushing.</strong> Clearing the wave with spells pushes it toward them, which is often exactly what the melee champion wants.</li>
</ul>`
    },
    {
      h: "As ranged: respect the all-in",
      html: `<p>Poking a melee champion down is only half the job. If they get on top of you at the wrong time, they can still win.</p>
<ul>
<li><strong>Know their all-in level.</strong> If their combo comes online at level 3 or their ultimate at level 6, play further back when they reach it, especially if they hit it first.</li>
<li><strong>Track their gap-closer.</strong> Most melee champions have one dash, jump or speed boost to reach you. When it's on cooldown, you can play forward. When it's up, keep a safe distance.</li>
<li><strong>Don't let them stack items for free.</strong> If they buy armor or magic resist, your poke does less. Use your item lead to take plates or help your jungler instead of trading forever.</li>
<li><strong>Remember summoner spells.</strong> A melee champion with {{spell:Flash}} or {{spell:Ghost}} up can close more distance than you expect. If you've seen them use Flash, you have about five minutes of extra safety.</li>
</ul>
{{warn:Poking a melee champion to half health, then walking forward to finish them off. That's often exactly the fight they wanted. Keep poking from range or back off, and let them come to you.}}`
    }
  ],
  takeaways: [
    "As melee, give up some CS, prioritize cannons and melee minions, and stay in XP range.",
    "Start with Doran's Shield and potions, use the brush, and let the wave come to your side.",
    "Trade when the ranged champion last-hits or uses a key spell, and wait for your level and item spikes.",
    "Ask your jungler for help: ranged laners who push forward are easy gank targets.",
    "As ranged, hit them every time they walk up for CS, keep the wave on your side, and respect their all-in level."
  ],
  related: ["trading", "wave-management", "matchups-and-cooldowns", "power-spikes"],
  quiz: [
    { q: "You're a melee champion against a ranged one. Which minions should you prioritize when you can't get them all?", options: ["Caster minions", "Cannon and melee minions", "Whichever is closest to the enemy", "None, just stay under tower and wait"], answer: 1, explain: "Cannon and melee minions are worth more gold, so skip a caster minion before you take free damage for it." },
    { q: "What's the best moment for a melee champion to trade with a ranged opponent?", options: ["When the ranged champion has all their spells up", "When the ranged champion attacks a minion to last-hit", "When you're inside their minion wave", "When you're low on health"], answer: 1, explain: "While they're busy last-hitting, they can't attack you, so you can walk in for a short trade." },
    { q: "As a melee champion, where do you usually want the wave?", options: ["Near your own tower", "Near the enemy tower", "In the enemy jungle", "It doesn't matter"], answer: 0, explain: "With the wave near your tower, the ranged champion has to walk forward to farm, which makes them easier to reach and to gank." },
    { q: "You're playing ranged and just poked the melee enemy to half health. Their gap-closer is up. What should you do?", options: ["Walk forward and finish them", "Keep poking from a safe distance or back off", "Flash toward them", "Push the wave into their tower right away"], answer: 1, explain: "Walking in is exactly the fight a melee champion wants. Keep your distance while their gap-closer is ready." }
  ]
});

/* ---------- 3. Reading the scoreboard (beginner) ---------- */
RA.guides.push({
  id: "reading-the-scoreboard",
  title: "Reading the Scoreboard",
  level: "beginner",
  category: "basics",
  minutes: 7,
  summary: "The scoreboard tells you who is strong, who is fed and whether your team should fight. Learn what to look for and when to check it.",
  sections: [
    {
      h: "Opening the scoreboard",
      html: `<p>Hold <kbd>Tab</kbd> (the default key) during a game to open the scoreboard. It lists all ten players, and for each one you can see their champion, level, kills, deaths and assists, CS, items and summoner spells. Release the key to close it.</p>
<p>The exact layout can change between patches, and you can change the key in your settings, but those basics are always there. Get used to opening it for a second or two at a time, a few times a minute when nothing is happening.</p>`
    },
    {
      h: "Who is strong? Compare items and levels",
      html: `<p>Kills don't tell you everything. The best way to judge strength is to compare <strong>items</strong> and <strong>levels</strong>.</p>
<ul>
<li><strong>Items:</strong> count completed items, not just item slots. A player with two finished items is much stronger than one with five small components. You can hover over an item to see what it is.</li>
<li><strong>Levels:</strong> even one or two levels make a big difference early in the game. A higher level means more health and damage, and often a stronger ability rank. At level 6, most champions get their ultimate, so a level 6 player against a level 5 player has a huge advantage.</li>
<li><strong>Kills and deaths:</strong> useful, but a player with few kills and lots of CS can be just as rich as one with many kills.</li>
</ul>
{{tip:Compare yourself with your lane opponent first. Same level and similar items? Trade carefully. You're ahead? Play forward. You're behind? Farm safely until you catch up.}}`
    },
    {
      h: "Spot the fed enemy",
      html: `<p>A <strong>fed</strong> enemy is one who got many kills early and now has more items than anyone else. They're the biggest danger in every fight.</p>
<ul>
<li><strong>Avoid fighting them alone.</strong> If the fed enemy is a fighter or assassin, don't walk around the map by yourself where they could find you.</li>
<li><strong>Build against them.</strong> If their damage is physical, armor helps; if it's magic, magic resist helps. See {{guide:items-and-gold}}.</li>
<li><strong>Decide who to focus.</strong> In a fight, it's often better to kill the squishiest enemy you can reach, and to keep the fed enemy busy with crowd control, than to dive into a fed tank.</li>
<li><strong>Remember the bounty.</strong> Players who get a lot of kills carry a bounty, so killing them gives extra gold. A careful team fight around the fed enemy can turn the game.</li>
</ul>
{{warn:Looking only at your own lane. The fed enemy might be in another lane and on their way to you. Check the whole scoreboard, not just your opponent.}}`
    },
    {
      h: "Summoner spells and cooldowns",
      html: `<p>The scoreboard shows which summoner spells each enemy took. Knowing that an enemy has {{spell:Flash}} and {{spell:Ghost}}, or {{spell:Teleport}}, tells you how they'll escape or join fights.</p>
<p>If you or your team have been noting enemy cooldowns (for example, typing "mid flash" with the time in chat), check those notes before you fight. Flash has a 5-minute cooldown, so an enemy without Flash is much easier to catch for a while. Many players also ping summoner cooldowns from the scoreboard so the whole team knows. See {{guide:summoners-and-runes}} for more on summoner spells.</p>`
    },
    {
      h: "Using CS and level gaps to decide whether to fight",
      html: `<p>Before a fight or objective, take a quick look at both teams:</p>
<ul>
<li><strong>Is your team behind on levels?</strong> If most of your team is one or two levels lower, avoid even fights. Farm, defend near your towers, and wait for the enemy to make a mistake.</li>
<li><strong>Is the CS gap big?</strong> About 15 to 20 CS is worth roughly as much gold as a kill. A laner who is 40 CS ahead is richer than their kill count shows.</li>
<li><strong>Is a key enemy about to finish an item?</strong> If they're close to completing a big item, it can be worth fighting before they recall and buy it. If they just bought it, wait for your own spike. See {{guide:power-spikes}}.</li>
</ul>
<p>None of this has to be exact. You're just asking: "Are we stronger, even, or weaker right now?" That answer should guide whether you take the fight or back off.</p>`
    },
    {
      h: "When to look, and when not to",
      html: `<p>The scoreboard covers a large part of your screen, so timing matters.</p>
<ul>
<li><strong>Good times:</strong> while you're dead, while walking back to lane, right after you recall, when the wave is far away, and before a dragon or Baron fight.</li>
<li><strong>Bad times:</strong> in the middle of a fight, while dodging spells, or when an enemy is near you. A second of not seeing the fight can cost you your life.</li>
</ul>
<p>If you check the scoreboard before the fight starts, you already know who to watch out for when it begins.</p>`
    }
  ],
  takeaways: [
    "Hold Tab (by default) to see every player's level, KDA, CS, items and summoner spells.",
    "Judge strength by completed items and levels, not just kills.",
    "Find the fed enemy, avoid fighting them alone, and build against their damage.",
    "If your team is behind on levels or items, avoid even fights and wait.",
    "Check the scoreboard during quiet moments, never in the middle of a fight."
  ],
  related: ["items-and-gold", "power-spikes", "summoners-and-runes", "staying-alive"],
  quiz: [
    { q: "What's the most reliable way to judge how strong an enemy is from the scoreboard?", options: ["Their kill count only", "Their completed items and level", "Their champion's skin", "How many assists they have"], answer: 1, explain: "Items and levels show their real power. Kills alone can be misleading, since farm gives a lot of gold too." },
    { q: "Most of your team is two levels behind the enemy team. What should you usually do?", options: ["Force a big fight right away", "Avoid even fights, farm and wait for a mistake", "Split up and fight one by one", "Surrender immediately"], answer: 1, explain: "Being a level or two behind across the team makes even fights hard to win. Catch up first." },
    { q: "Roughly how much CS is worth about the same gold as a kill?", options: ["2 to 3 CS", "15 to 20 CS", "60 to 70 CS", "100 CS"], answer: 1, explain: "Minions are worth about 14 to 20 gold each (more for cannons), so 15 to 20 CS is roughly a kill's worth of gold." },
    { q: "When is a bad time to open the scoreboard?", options: ["While you're dead", "Right after you recall", "In the middle of a teamfight", "While walking back to lane"], answer: 2, explain: "The scoreboard covers much of your screen. In a fight, you need to see what's happening." }
  ]
});
