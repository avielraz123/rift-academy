window.RA = window.RA || {};
RA.guides = RA.guides || [];

/* ---------- 1. How League works ---------- */
RA.guides.push({
  id: "how-league-works",
  title: "How a Game of League Works",
  level: "beginner",
  category: "basics",
  minutes: 6,
  summary: "The goal of the game, the five roles, and how a match flows from the first minion wave to the final push.",
  sections: [
    { h: "The goal: destroy the Nexus", html:
      "<p>League of Legends is a 5 versus 5 game. Each team has a base with a big crystal called the <strong>Nexus</strong>. Destroy the enemy Nexus and you win. That's it. Kills, gold and dragons only matter because they help you get to the enemy Nexus.</p>" +
      "<p>The Nexus is protected by <strong>towers</strong> (also called turrets) and <strong>inhibitors</strong>. You can't hit the Nexus until you've broken through at least one lane's towers and its inhibitor, plus the two towers right in front of the Nexus.</p>" +
      "{{warn:Chasing kills all game and forgetting towers. A team with fewer kills but more towers often wins. When the enemy is dead or far away, hit a tower.}}" },
    { h: "Three lanes and a jungle", html:
      "<p>The map, called <strong>Summoner's Rift</strong>, has three paths between the bases: <strong>top lane</strong>, <strong>middle lane</strong> and <strong>bottom lane</strong> (\"bot\"). Every 30 seconds, each Nexus sends out a <strong>wave</strong> of small computer-controlled soldiers called <strong>minions</strong> down every lane. The first wave arrives at 0:30.</p>" +
      "<p>Between the lanes is the <strong>jungle</strong>, full of neutral monsters that give gold and experience. A river cuts through the middle of the map. Learn the details in {{guide:the-map}}.</p>" },
    { h: "The five roles", html:
      "<p>Each player has a job, decided in champion select:</p>" +
      "<ul>" +
      "<li><strong>Top</strong>: plays alone in top lane, usually a tough fighter or tank. See {{role:top}}.</li>" +
      "<li><strong>Jungle</strong>: farms the monsters in the jungle and surprises enemy lanes (a \"gank\"). See {{role:jungle}}.</li>" +
      "<li><strong>Mid</strong>: plays alone in the middle lane, often a mage or assassin with big damage. See {{role:mid}}.</li>" +
      "<li><strong>Bot</strong> (also called ADC, attack damage carry): a ranged marksman who deals steady damage from a distance. See {{role:bot}}.</li>" +
      "<li><strong>Support</strong>: plays bot lane with the ADC, protects the team and places vision. See {{role:support}}.</li>" +
      "</ul>" +
      "<p>Each role also gets a <strong>role quest</strong> automatically: a goal that gives a reward when you complete it by playing your lane. More on that in {{guide:teamwork-and-pings}}.</p>" },
    { h: "Gold, experience and items", html:
      "<p>Everyone starts with 500 gold at level 1. You earn <strong>gold</strong> by landing the final hit on minions and monsters (called a <strong>last hit</strong>), by killing champions, and by breaking towers. You spend gold in your base's shop on <strong>items</strong> that make you stronger.</p>" +
      "<p>You earn <strong>experience</strong> (XP) just by being near enemy minions when they die. XP raises your level, up to 18. Each level gives you more stats and a point to put into one of your four abilities. Your ultimate ability (R) unlocks at level 6.</p>" +
      "{{tip:The champion with more gold and levels usually wins a fight. That's why farming minions is the first skill to learn.}}" +
      "<p>Start with {{guide:last-hitting}}.</p>" },
    { h: "How a game flows", html:
      "<p>Games usually last 25 to 35 minutes and go through three phases:</p>" +
      "<ul>" +
      "<li><strong>Early game (laning phase, about 0-14 min)</strong>: everyone stays in their lane, farms minions and tries to win small fights against their opponent. Junglers move around and help lanes.</li>" +
      "<li><strong>Mid game (about 14-25 min)</strong>: outer towers start falling. Teams move around the map to take objectives like dragons, the Rift Herald and towers.</li>" +
      "<li><strong>Late game (25+ min)</strong>: champions have most of their items. Big 5 versus 5 teamfights around Baron Nashor and the Elder Dragon decide the game. One lost fight can mean a lost Nexus.</li>" +
      "</ul>" },
    { h: "What to focus on in your first games", html:
      "<p>League has a lot to learn, so don't try to learn it all at once. For your first games, pick <strong>one or two easy champions</strong> and focus on just these things:</p>" +
      "<ol>" +
      "<li>Last-hit as many minions as you can.</li>" +
      "<li>Glance at the minimap (bottom-right corner) every few seconds.</li>" +
      "<li>Go back to base when you're low on health instead of staying and dying.</li>" +
      "<li>Join your team when they fight over dragons or towers.</li>" +
      "</ol>" +
      "<p>Play the tutorial and some games against bots first. They're a safe place to learn your champion's abilities.</p>" }
  ],
  takeaways: [
    "You win by destroying the enemy Nexus, not by getting the most kills.",
    "There are three lanes plus the jungle, and five roles: top, jungle, mid, bot and support.",
    "Gold comes mainly from last-hitting minions; XP comes from being near minions when they die.",
    "Games move from laning, to fighting over objectives, to big late-game teamfights.",
    "In your first games, focus on farming, the minimap, and not dying."
  ],
  related: ["the-map", "last-hitting", "items-and-gold"],
  quiz: [
    { q: "How do you win a game of League of Legends?", options: ["Get 20 kills first", "Destroy the enemy Nexus", "Kill Baron Nashor", "Have the most gold after 30 minutes"], answer: 1, explain: "Destroying the enemy Nexus is the only way to win. Everything else just helps you get there." },
    { q: "Which role plays bot lane together with the ADC?", options: ["Jungle", "Top", "Support", "Mid"], answer: 2, explain: "The support and the ADC share bot lane. The support protects the ADC and places vision." },
    { q: "At what level does your ultimate ability (R) unlock?", options: ["Level 3", "Level 6", "Level 9", "Level 11"], answer: 1, explain: "Ultimates unlock at level 6, which is a big power spike for most champions." }
  ]
});

/* ---------- 2. The map ---------- */
RA.guides.push({
  id: "the-map",
  title: "Summoner's Rift: The Map Explained",
  level: "beginner",
  category: "basics",
  minutes: 7,
  summary: "Lanes, river, jungle, towers and epic monsters: a tour of the map and what every part of it is for.",
  sections: [
    { h: "The big picture", html:
      "<p>Summoner's Rift is a square map. The <strong>blue side</strong> team starts in the bottom-left corner and the <strong>red side</strong> team starts in the top-right. Three lanes connect the two bases: <strong>top</strong> runs along the left and top edges, <strong>mid</strong> goes straight through the center, and <strong>bot</strong> runs along the bottom and right edges.</p>" +
      "<p>A <strong>river</strong> cuts diagonally across the map from top-left to bottom-right, splitting it into two halves. Each team's half of the jungle is on its own side of the river.</p>" },
    { h: "Towers, inhibitors and the Nexus", html:
      "<p>Each lane has three towers per team: the <strong>outer</strong>, <strong>inner</strong> and <strong>inhibitor</strong> tower. Behind the inhibitor tower is the <strong>inhibitor</strong> itself. Two more towers guard the Nexus.</p>" +
      "<ul>" +
      "<li>Towers shoot enemy minions and champions in range. They hit champions very hard early in the game.</li>" +
      "<li>Outer, inner and inhibitor towers each have 5 <strong>plates</strong>: pieces of armor that give gold when you break them. Plates stay on all game.</li>" +
      "<li>The first tower destroyed in the game gives +300 bonus gold, shared with nearby allies.</li>" +
      "<li>Destroying an inhibitor makes your team spawn <strong>super minions</strong> in that lane, which are very strong. Inhibitors grow back after a few minutes.</li>" +
      "</ul>" +
      "{{tip:A tower ignores you as long as there are minions to hit and you don't attack enemy champions. As soon as you hit an enemy champion under their tower, the tower targets you.}}" },
    { h: "The jungle", html:
      "<p>The jungle is the maze of paths between the lanes. It holds <strong>jungle camps</strong>: neutral monsters that give gold and XP. The most important are the two <strong>buff camps</strong>:</p>" +
      "<ul>" +
      "<li><strong>Blue Sentinel</strong> (blue buff): gives ability haste and mana regeneration.</li>" +
      "<li><strong>Red Brambleback</strong> (red buff): your attacks burn and slow enemies, plus health regeneration.</li>" +
      "</ul>" +
      "<p>Other camps are Gromp, Murk Wolves, Raptors and Krugs. Camps first appear at 0:55 (Gromp and Krugs at 1:07). The <strong>Rift Scuttler</strong>, a crab in the river, appears at 2:55. The jungler is the one who farms these camps. See {{role:jungle}}.</p>" },
    { h: "Epic monsters", html:
      "<p>The river has two big pits with powerful monsters that help the whole team:</p>" +
      "<table><tr><th>Monster</th><th>Where</th><th>When</th><th>What it gives</th></tr>" +
      "<tr><td>Dragons</td><td>Bottom pit</td><td>From 5:00, then 5:00 after each kill</td><td>A permanent team buff. 4 dragons give a Dragon Soul.</td></tr>" +
      "<tr><td>Void Grubs</td><td>Top pit</td><td>8:00 (gone at 14:45)</td><td>Extra damage against towers.</td></tr>" +
      "<tr><td>Rift Herald</td><td>Top pit</td><td>15:00 (gone at 19:45)</td><td>A summonable Herald that charges a tower for huge damage.</td></tr>" +
      "<tr><td>Baron Nashor</td><td>Top pit</td><td>20:00</td><td>A strong buff that powers up your minions.</td></tr>" +
      "<tr><td>Elder Dragon</td><td>Bottom pit</td><td>After a team gets Dragon Soul</td><td>Lets you execute low-health enemies.</td></tr>" +
      "</table>" +
      "<p>Learn how to fight over these in {{guide:objectives-and-dragons}}. You can track their timers with our <a href=\"#/tools/timers\">objective timer tool</a>.</p>" },
    { h: "Fog of war and brushes", html:
      "<p>You can only see the parts of the map near your team's champions, minions, towers and wards. Everything else is covered by the <strong>fog of war</strong>: enemies there are invisible to you.</p>" +
      "<p>The tall grass patches are called <strong>brushes</strong> (or bushes). A champion inside a brush is hidden from enemies outside it, unless they have a ward there. Brushes are perfect for ambushes, and dangerous to walk into blindly.</p>" +
      "{{warn:Walking into a dark brush or jungle path alone with no vision. If you can't see it, assume an enemy might be there, especially when several enemies are missing from the map.}}" },
    { h: "Faelights and other map features", html:
      "<p><strong>Faelights</strong> are glowing spots in the jungle and river. If you place a ward on one, the ward gets extra sight range and briefly reveals more of the area around it. There are 8 at the start of the game, and 4 more appear when the map changes element after the second dragon.</p>" +
      "<p>After the second dragon, the whole map takes on that dragon's element (for example, Ocean or Infernal), which changes some terrain and plants. Read more about vision in {{guide:vision-basics}}.</p>" }
  ],
  takeaways: [
    "Three lanes (top, mid, bot), a river, and a jungle on each side.",
    "Each lane has outer, inner and inhibitor towers; plates on them give gold all game.",
    "Dragons are in the bottom pit; Grubs, Herald and Baron are in the top pit.",
    "The fog of war hides enemies you can't see; brushes hide champions inside them.",
    "Warding a Faelight gives that ward extra vision."
  ],
  related: ["how-league-works", "vision-basics", "objectives-and-dragons"],
  quiz: [
    { q: "Where do dragons spawn?", options: ["The top side river pit", "The bottom side river pit", "In each team's base", "In the middle lane"], answer: 1, explain: "Dragons spawn in the bottom side pit. Grubs, Herald and Baron share the top side pit." },
    { q: "What happens when you destroy an enemy inhibitor?", options: ["You win the game", "Your team spawns super minions in that lane", "The enemy can't buy items", "Baron spawns immediately"], answer: 1, explain: "A destroyed inhibitor makes your team spawn super minions in that lane until it grows back." },
    { q: "What does placing a ward on a Faelight do?", options: ["Nothing special", "Makes the ward invisible to sweepers", "Gives the ward extra vision", "Gives you gold"], answer: 2, explain: "Wards placed on Faelights get bigger sight range and briefly reveal more of the area." }
  ]
});

/* ---------- 3. Last-hitting ---------- */
RA.guides.push({
  id: "last-hitting",
  title: "Last-Hitting 101",
  level: "beginner",
  category: "laning",
  minutes: 7,
  summary: "Farming minions is the most reliable way to get gold. Learn how last-hitting works and how to get better at it.",
  sections: [
    { h: "Why CS matters", html:
      "<p><strong>CS</strong> (creep score) is the number of minions and monsters you've killed. You only get gold from a minion if <em>your</em> hit is the one that kills it: the <strong>last hit</strong>.</p>" +
      "<p>Kills feel great, but minions are where most of your gold comes from. A full wave of 6 minions is worth about as much as a third of a kill, and a new wave arrives every 30 seconds, all game long. A player who farms well is often richer than a player with more kills.</p>" },
    { h: "How much each minion is worth", html:
      "<table><tr><th>Minion</th><th>Gold</th><th>Notes</th></tr>" +
      "<tr><td>Melee minion</td><td>20</td><td>The 3 minions in front. More health.</td></tr>" +
      "<tr><td>Caster minion</td><td>14</td><td>The 3 ranged minions in the back. Low health.</td></tr>" +
      "<tr><td>Cannon minion</td><td>50 (grows over time)</td><td>The big one. First appears in wave 3, then every few waves.</td></tr>" +
      "</table>" +
      "<p>Each normal wave is 3 melee and 3 caster minions. The <strong>cannon minion</strong> comes every 3rd wave until 14:00, every 2nd wave until 25:00, and then in every wave.</p>" +
      "{{tip:The cannon minion is worth more than two melee minions put together. If you can only get one minion in a wave, make it the cannon.}}" },
    { h: "How to last-hit", html:
      "<ol>" +
      "<li><strong>Don't auto-attack minions all the time.</strong> Stand back and let your own minions do the damage.</li>" +
      "<li><strong>Watch the health bars.</strong> When a minion's health drops to about what one of your basic attacks deals, attack it.</li>" +
      "<li><strong>Account for the delay.</strong> Every attack has a short wind-up, and ranged attacks take time to fly. Start your attack a little before the minion is low enough.</li>" +
      "<li><strong>Use abilities when you'd miss.</strong> If two minions are about to die at once, use a spell on one and attack the other.</li>" +
      "</ol>" +
      "<p>Practice with our <a href=\"#/tools/cs-trainer\">last-hit trainer</a>, or in a Practice Tool game with no enemies, until it feels natural.</p>" +
      "{{warn:Attacking every minion as fast as you can. This pushes your wave toward the enemy tower, where farming is harder and you're easier to gank. Only attack minions you can kill, unless you have a reason to push.}}" },
    { h: "Last-hitting under your tower", html:
      "<p>When the enemy pushes the wave into your tower, the tower hits the minions hard and steals last hits. Here's the basic rule for most champions:</p>" +
      "<ul>" +
      "<li><strong>Melee minions</strong> take 2 tower shots and then die to one of your attacks. Let the tower hit twice, then attack.</li>" +
      "<li><strong>Caster minions</strong> die to one tower shot. Hit them once <em>before</em> the tower does, then finish them after one tower shot.</li>" +
      "</ul>" +
      "<p>Exact numbers change as you buy items, but this pattern works for most champions in the first minutes.</p>" },
    { h: "XP: stay close", html:
      "<p>You get experience from minions that die near you (within about 1500 units, a bit more than a screen width), even if you don't last-hit them. If you're out of range, you get nothing from that minion. Missing a wave because you were wandering in the jungle costs you both gold and levels.</p>" },
    { h: "CS goals", html:
      "<p>A perfect player gets about 10 CS per minute in lane, plus bonus from cannons. You don't need to be perfect. Track your CS at 10 minutes (press <kbd>Tab</kbd> to see it):</p>" +
      "<ul>" +
      "<li><strong>40-50 CS at 10:00</strong>: a fine start for a new player.</li>" +
      "<li><strong>60-70 CS</strong>: good. You're getting most of your minions.</li>" +
      "<li><strong>80+ CS</strong>: excellent. This is where strong ranked players are.</li>" +
      "</ul>" +
      "<p>Supports are the exception: they shouldn't take minions from their ADC. Junglers count jungle monsters instead.</p>" }
  ],
  takeaways: [
    "Only the killing blow (last hit) on a minion gives gold.",
    "Melee minions give 20 gold, casters 14, cannons 50 or more: never miss a cannon.",
    "Don't attack every minion; wait until it's low enough, accounting for your wind-up.",
    "Under tower: melee minions need 2 tower shots, casters need 1 of your hits first.",
    "Aim for 60+ CS at 10 minutes as you improve."
  ],
  related: ["wave-management", "items-and-gold", "trading"],
  quiz: [
    { q: "When do you get gold from a minion?", options: ["Whenever you damage it", "When your hit kills it", "When it dies anywhere near you", "When your tower kills it"], answer: 1, explain: "Only the last hit gives gold. Being nearby only gives experience." },
    { q: "Which minion is worth the most gold?", options: ["Melee minion", "Caster minion", "Cannon minion", "They're all the same"], answer: 2, explain: "The cannon minion is worth 50 gold or more, more than two melee minions." },
    { q: "Under your tower, how do you last-hit a caster minion?", options: ["Wait for 2 tower shots", "Hit it once before the tower, then finish it after one tower shot", "Let the tower kill it", "Hit it three times"], answer: 1, explain: "One tower shot leaves a caster too low to last-hit, so damage it first, then finish it after the tower shot." }
  ]
});

/* ---------- 4. Items and gold ---------- */
RA.guides.push({
  id: "items-and-gold",
  title: "Items and Gold: How to Shop",
  level: "beginner",
  category: "basics",
  minutes: 7,
  summary: "Where gold comes from, what to buy first, how items are built from parts, and when to go back to shop.",
  sections: [
    { h: "Where gold comes from", html:
      "<ul>" +
      "<li><strong>Minions</strong>: 14 to 50+ gold each, but only with the last hit. See {{guide:last-hitting}}.</li>" +
      "<li><strong>Champion kills</strong>: 300 gold at levels 1-6, rising to 420 at level 18. The first kill of the game (First Blood) gives +100 extra. Assists give a share too.</li>" +
      "<li><strong>Towers and plates</strong>: every outer tower plate gives 120 gold early on. The first tower of the game gives +300 bonus gold.</li>" +
      "<li><strong>Jungle camps and epic monsters</strong>: mostly for the jungler, but dragons and Baron give gold too.</li>" +
      "<li><strong>Passive income</strong>: everyone gets a small amount of gold every second.</li>" +
      "</ul>" },
    { h: "Starting items", html:
      "<p>You start with 500 gold. Most players buy a starter item and a {{item:Health Potion}} or two:</p>" +
      "<ul>" +
      "<li>{{item:Doran's Ring}}: for mages. Ability power, health, and mana back when you damage enemies.</li>" +
      "<li>{{item:Doran's Blade}}: for fighters and some marksmen. Attack damage, health and healing.</li>" +
      "<li>{{item:Doran's Shield}}: for tanky laners in hard matchups. Health and regeneration.</li>" +
      "<li>{{item:Doran's Bow}}: a starter for marksmen who attack a lot.</li>" +
      "<li>{{item:World Atlas}}: the support item. Supports buy this instead.</li>" +
      "<li>Junglers buy a jungle pet, like {{item:Scorchclaw Pup}} or {{item:Gustwalker Hatchling}}, and need {{spell:Smite}}.</li>" +
      "</ul>" },
    { h: "How items are built", html:
      "<p>Big items (called <strong>legendary</strong> items) cost about 2,500 to 3,500 gold. You don't buy them all at once. Each one is built from cheaper <strong>components</strong>. For example, {{item:Rabadon's Deathcap}} is built from {{item:Needlessly Large Rod}} pieces.</p>" +
      "<p>When you go back to base with 1,200 gold, buy the most useful component of your next item. The stats help you right away, and you finish the full item later.</p>" +
      "<p>You can carry six items plus a trinket (a free ward item). <strong>Boots</strong> take one slot: everyone should buy them within the first few recalls.</p>" +
      "{{tip:Not sure what to buy? Open the shop and use the Recommended tab. It shows good items for your champion. Our champion guides also list full builds for the current patch.}}" },
    { h: "When to go back and shop", html:
      "<p>Pressing <kbd>B</kbd> starts your <strong>recall</strong>: after a few seconds you teleport to base, where you heal fully and can shop. Good times to recall:</p>" +
      "<ul>" +
      "<li>You're low on health or mana and can't fight anymore.</li>" +
      "<li>You have enough gold for an important component (often around 1,100 to 1,300 gold).</li>" +
      "<li>You just pushed your minion wave into the enemy tower, so you won't miss much farm while you're gone.</li>" +
      "</ul>" +
      "<p>Learn more about timing in {{guide:recall-timing}}.</p>" +
      "{{warn:Sitting on 3,000 unspent gold. Gold in your pocket does nothing. If you have a lot of gold and the game is quiet, go back and turn it into items.}}" },
    { h: "Armor or magic resist?", html:
      "<p>Damage comes in three types:</p>" +
      "<ul>" +
      "<li><strong>Physical damage</strong>: from attacks and AD (attack damage) champions like marksmen and fighters. <strong>Armor</strong> reduces it.</li>" +
      "<li><strong>Magic damage</strong>: from AP (ability power) champions like mages. <strong>Magic resist (MR)</strong> reduces it.</li>" +
      "<li><strong>True damage</strong>: ignores both.</li>" +
      "</ul>" +
      "<p>If the enemy laner or the fed enemy deals physical damage, defensive items with armor (like {{item:Plated Steelcaps}} or {{item:Zhonya's Hourglass}} for mages) help a lot. Against magic damage, buy MR (like {{item:Mercury's Treads}} or {{item:Banshee's Veil}}). Hover over an enemy's items with <kbd>Tab</kbd> to see what they built.</p>" },
    { h: "Reading item stats", html:
      "<p>Common stats you'll see: <strong>AD</strong> (attack damage), <strong>AP</strong> (ability power), <strong>attack speed</strong>, <strong>critical strike chance</strong>, <strong>ability haste</strong> (shorter cooldowns), <strong>health</strong>, <strong>armor</strong>, <strong>MR</strong> and <strong>lethality / magic penetration</strong> (ignore part of the enemy's defenses). Buy the stats your champion's abilities use: hover over an ability to see if it scales with AD or AP.</p>" }
  ],
  takeaways: [
    "Minions are your steadiest gold; kills and tower plates give big bursts.",
    "Start with a Doran's item and a potion (or World Atlas as support, a pet as jungler).",
    "Build big items from components each time you recall; buy boots early.",
    "Recall when you're low, when you can afford a key part, or after pushing your wave.",
    "Armor stops physical damage, magic resist stops magic damage."
  ],
  related: ["recall-timing", "last-hitting", "power-spikes"],
  quiz: [
    { q: "Which starting item is meant for mages?", options: ["Doran's Blade", "Doran's Shield", "Doran's Ring", "World Atlas"], answer: 2, explain: "Doran's Ring gives ability power and mana, made for mages." },
    { q: "What does armor protect you from?", options: ["Magic damage", "Physical damage", "True damage", "All damage"], answer: 1, explain: "Armor reduces physical damage. Magic resist reduces magic damage. Nothing reduces true damage." },
    { q: "Which is a good time to recall?", options: ["When your wave is about to crash into your tower", "Right after pushing your wave into the enemy tower", "When you have 200 gold", "Whenever your jungler pings"], answer: 1, explain: "After pushing your wave into their tower, you lose very little farm while you're in base." }
  ]
});

/* ---------- 5. Summoner spells and runes ---------- */
RA.guides.push({
  id: "summoners-and-runes",
  title: "Summoner Spells and Runes",
  level: "beginner",
  category: "basics",
  minutes: 8,
  summary: "Pick the right two summoner spells and understand the rune page you take into every game.",
  sections: [
    { h: "What summoner spells are", html:
      "<p>Before each game you pick two <strong>summoner spells</strong>. They're extra abilities on long cooldowns (several minutes), placed on <kbd>D</kbd> and <kbd>F</kbd> by default. Almost everyone takes {{spell:Flash}} plus one more spell that fits their role.</p>" },
    { h: "Every summoner spell", html:
      "<table><tr><th>Spell</th><th>What it does</th><th>Who takes it</th></tr>" +
      "<tr><td>{{spell:Flash}}</td><td>Instantly teleports you a short distance. Escape, dodge, or catch someone.</td><td>Almost everyone</td></tr>" +
      "<tr><td>{{spell:Ignite}}</td><td>Burns an enemy champion with true damage and reduces their healing.</td><td>Aggressive mid laners, some top laners and supports</td></tr>" +
      "<tr><td>{{spell:Teleport}}</td><td>After a channel, travel to an allied tower, minion or ward. Upgrades later into a faster version.</td><td>Top laners, some mid laners</td></tr>" +
      "<tr><td>{{spell:Heal}}</td><td>Heals you and an ally and gives move speed.</td><td>Most bot laners (ADCs)</td></tr>" +
      "<tr><td>{{spell:Barrier}}</td><td>Gives you a short shield.</td><td>Mid laners against burst, some ADCs</td></tr>" +
      "<tr><td>{{spell:Exhaust}}</td><td>Slows an enemy and reduces their damage.</td><td>Supports, sometimes mid against assassins</td></tr>" +
      "<tr><td>{{spell:Cleanse}}</td><td>Removes stuns, slows and other disables.</td><td>ADCs against heavy crowd control</td></tr>" +
      "<tr><td>{{spell:Ghost}}</td><td>Big move speed for a few seconds.</td><td>Some fighters and tanks</td></tr>" +
      "<tr><td>{{spell:Smite}}</td><td>Big damage to monsters. Required for jungle.</td><td>Junglers only</td></tr>" +
      "</table>" +
      "{{tip:Flash has a 5-minute cooldown. When an enemy uses it, ping it or type the time in chat. A laner without Flash is much easier to kill for the next few minutes.}}" },
    { h: "What runes are", html:
      "<p><strong>Runes</strong> are bonuses you choose before the game in your <strong>rune page</strong>. You pick a <strong>primary tree</strong> with a powerful <strong>keystone</strong> and three more runes, a <strong>secondary tree</strong> with two runes, and three small <strong>stat shards</strong>.</p>" +
      "<p>The game recommends a page for each champion. That's a perfectly good place to start. Our champion guides show the most successful page for the current patch.</p>" },
    { h: "The five rune trees", html:
      "<ul>" +
      "<li><strong>Precision</strong> (attacks and long fights): keystones {{rune:Press the Attack}}, {{rune:Lethal Tempo}}, {{rune:Fleet Footwork}}, {{rune:Conqueror}}. Popular for marksmen and fighters.</li>" +
      "<li><strong>Domination</strong> (burst and hunting): {{rune:Electrocute}}, {{rune:Dark Harvest}}, {{rune:Hail of Blades}}. For assassins and burst mages.</li>" +
      "<li><strong>Sorcery</strong> (spells and poke): {{rune:Summon Aery}}, {{rune:Arcane Comet}}, {{rune:Stormraider's Surge}}, {{rune:Deathfire Touch}}. For mages and poke champions. Minor runes include {{rune:Axiom Arcanist}}, {{rune:Manaflow Band}} and {{rune:Gathering Storm}}.</li>" +
      "<li><strong>Resolve</strong> (durability): {{rune:Grasp of the Undying}}, {{rune:Aftershock}}, {{rune:Guardian}}. For tanks and supports.</li>" +
      "<li><strong>Inspiration</strong> (utility and tricks): {{rune:Glacial Augment}}, {{rune:Unsealed Spellbook}}, {{rune:First Strike}}. Creative options for experienced players.</li>" +
      "</ul>" +
      "<p>Hover over any rune in the client to read exactly what it does.</p>" },
    { h: "Stat shards", html:
      "<p>The last part of a rune page is three rows of small stat bonuses:</p>" +
      "<ul>" +
      "<li><strong>Offense</strong>: Adaptive Force (AD or AP, whichever you have more of), Attack Speed, or Ability Haste.</li>" +
      "<li><strong>Flex</strong>: Adaptive Force, Move Speed, or Health that grows with level.</li>" +
      "<li><strong>Defense</strong>: Health, Tenacity and Slow Resist, or Health that grows with level.</li>" +
      "</ul>" +
      "<p>If you're unsure, Adaptive Force, Adaptive Force and Health are a safe default.</p>" },
    { h: "Keep it simple", html:
      "<p>As a new player, make one rune page per champion you play, using the recommended or guide setup, and don't change it every game. Learn what your keystone does and play around it: for example, {{rune:Electrocute}} rewards hitting three separate attacks or abilities quickly, so you want short, sharp combos.</p>" +
      "{{warn:Taking Smite when you're not the jungler, or not taking it when you are. Junglers must have Smite to clear camps and fight for objectives; everyone else should never take it.}}" }
  ],
  takeaways: [
    "Take Flash plus one spell that fits your role: Teleport top, Smite jungle, Ignite or Barrier mid, Heal bot, Exhaust or Ignite support.",
    "Track enemy Flash cooldowns: it's a 5-minute window to attack.",
    "Rune pages have a primary tree with a keystone, a secondary tree and stat shards.",
    "Start with the recommended or guide rune page and learn how your keystone works."
  ],
  related: ["items-and-gold", "matchups-and-cooldowns", "how-league-works"],
  quiz: [
    { q: "Which summoner spell must every jungler take?", options: ["Ignite", "Smite", "Teleport", "Ghost"], answer: 1, explain: "Smite is needed to clear jungle camps and win fights over epic monsters." },
    { q: "Which summoner spell do most ADCs take with Flash?", options: ["Heal", "Teleport", "Smite", "Ghost"], answer: 0, explain: "Most bot laners take Heal, which also helps their support." },
    { q: "Which tree contains the keystone Electrocute?", options: ["Precision", "Sorcery", "Domination", "Resolve"], answer: 2, explain: "Electrocute is in Domination, the burst and hunting tree." }
  ]
});

/* ---------- 6. Vision basics ---------- */
RA.guides.push({
  id: "vision-basics",
  title: "Vision Basics: Wards and the Minimap",
  level: "beginner",
  category: "vision",
  minutes: 6,
  summary: "Wards let you see enemies coming. Learn the types of wards, how many you can place, and where to put them.",
  sections: [
    { h: "Why vision matters", html:
      "<p>Most deaths happen because of something you couldn't see: a jungler in the brush, a mid laner walking to your lane. <strong>Wards</strong> are small items you place on the ground that let your whole team see that area through the fog of war. More vision means fewer surprises.</p>" },
    { h: "Trinkets: your free ward", html:
      "<p>Every champion has a free <strong>trinket</strong> slot (key <kbd>4</kbd>). There are three trinkets:</p>" +
      "<ul>" +
      "<li>{{item:Stealth Ward}}: the default. Places an invisible ward, holds up to 2 charges, and recharges over time. Use it all game.</li>" +
      "<li>{{item:Oracle Lens}}: a sweeper that reveals and disables enemy wards around you for a few seconds. Junglers and supports often switch to it.</li>" +
      "<li>{{item:Farsight Alteration}}: places a visible ward from very far away. Useful for marksmen later in the game.</li>" +
      "</ul>" +
      "{{tip:Your Stealth Ward trinket starts with charges ready. Don't leave them unused. A trinket at full charges is wasted vision.}}" },
    { h: "Control wards", html:
      "<p>A {{item:Control Ward}} costs 75 gold (40 gold for supports after their quest). It's visible to enemies, but it reveals and disables enemy wards near it, and it stays until someone destroys it.</p>" +
      "<ul>" +
      "<li>Each player can have <strong>3 Stealth Wards</strong> and <strong>1 Control Ward</strong> on the map at once.</li>" +
      "<li>You can carry up to 2 Control Wards in your inventory.</li>" +
      "</ul>" +
      "<p>Buy one almost every time you recall. It's one of the best-value items in the game.</p>" +
      "{{warn:Never buying Control Wards because they \"don't give stats\". 75 gold to spot the enemy jungler before they gank you is worth more than any stat.}}" },
    { h: "Where to ward as a laner", html:
      "<p>Ward the paths the enemy jungler uses to reach your lane:</p>" +
      "<ul>" +
      "<li><strong>Top and bot</strong>: the river brush (the tri-brush or river entrance) on the side the jungler would come from.</li>" +
      "<li><strong>Mid</strong>: the brushes on either side of the lane, or the river near them. Mid can be ganked from both sides, so ward the side where the enemy jungler was last seen.</li>" +
      "</ul>" +
      "<p>Place your first ward around <strong>2:30 to 3:00</strong>. That's when junglers finish their first round of camps and look for their first gank.</p>" +
      "<p>Wards placed on <strong>Faelights</strong> (glowing spots in the river and jungle) get extra vision range, so use them when they cover the area you need.</p>" },
    { h: "Look at the minimap", html:
      "<p>Wards are useless if you never look at what they show. The <strong>minimap</strong> in the corner shows every enemy your team can see. Build the habit of glancing at it every few seconds, for example every time you last-hit a minion.</p>" +
      "<p>When an enemy appears on the minimap near your lane, back off. When an enemy laner disappears from their lane, they might be coming for you. See {{guide:staying-alive}}.</p>" }
  ],
  takeaways: [
    "Wards let your whole team see through the fog of war.",
    "Use your free trinket every time it has a charge.",
    "Buy a Control Ward on most recalls; you can have 1 placed and 3 Stealth Wards.",
    "As a laner, ward the river path the enemy jungler uses, starting around 2:30-3:00.",
    "Glance at the minimap every few seconds."
  ],
  related: ["staying-alive", "vision-control", "the-map"],
  quiz: [
    { q: "How many Control Wards can one player have placed on the map at once?", options: ["1", "2", "3", "Unlimited"], answer: 0, explain: "Each player can have 1 Control Ward and 3 Stealth Wards placed at the same time." },
    { q: "What does the Oracle Lens trinket do?", options: ["Places a ward far away", "Reveals and disables nearby enemy wards", "Gives move speed", "Heals you"], answer: 1, explain: "Oracle Lens is a sweeper: it finds and disables enemy wards around you for a short time." },
    { q: "When should a laner usually place their first ward?", options: ["At 0:30", "Around 2:30-3:00", "At 10:00", "Only after dying"], answer: 1, explain: "Junglers usually finish their first clear and look to gank around 2:30-3:30." }
  ]
});

/* ---------- 7. Staying alive ---------- */
RA.guides.push({
  id: "staying-alive",
  title: "Staying Alive: Map Awareness for Beginners",
  level: "beginner",
  category: "basics",
  minutes: 6,
  summary: "Dying less is the fastest way to win more. Learn the habits that keep you alive: watching the minimap, tracking missing enemies, and knowing when to back off.",
  sections: [
    { h: "Why deaths cost so much", html:
      "<p>Every death gives the enemy 300 gold or more and some experience. While you're dead (10 seconds early, up to over a minute late in the game), your minions die without you, so you lose farm and XP too. And your team plays 4 versus 5.</p>" +
      "<p>New players often lose not because they're bad at fighting but because they die to things they could have seen coming.</p>" },
    { h: "The minimap habit", html:
      "<p>Look at the minimap every 3 to 5 seconds. It feels unnatural at first, so tie it to something you already do: after every last hit, or every time you use an ability. Check:</p>" +
      "<ul>" +
      "<li>Where is the enemy jungler?</li>" +
      "<li>Is my lane opponent still in lane?</li>" +
      "<li>Are several enemies grouped somewhere?</li>" +
      "</ul>" +
      "{{tip:If you see the enemy jungler on the opposite side of the map, you're safe for about 20 to 30 seconds. That's a great time to play aggressively.}}" },
    { h: "Missing enemies", html:
      "<p>When an enemy disappears into the fog of war, ask where they could be going. If your lane opponent leaves and you can't see them, they might be heading to another lane (a <strong>roam</strong>). Ping them as missing so your teammates know.</p>" +
      "<p>When you can't see the enemy jungler and you're pushed far forward, assume they're nearby. The further you are from your tower, the more danger you're in.</p>" +
      "{{warn:Chasing a low-health enemy deep into their side of the map. That's exactly where their jungler and teammates are. Many deaths start with \"I almost had him\".}}" },
    { h: "When to back off", html:
      "<ul>" +
      "<li><strong>You're low on health or mana.</strong> Recall instead of risking it.</li>" +
      "<li><strong>Your opponent just hit level 2 or 6 before you.</strong> They have a new ability and you don't.</li>" +
      "<li><strong>The enemy's minion wave is much bigger than yours.</strong> Minions hurt a lot early; don't fight inside a big enemy wave.</li>" +
      "<li><strong>Several enemies are missing.</strong> Play near your tower until you see them again.</li>" +
      "<li><strong>Your Flash is on cooldown.</strong> You have no escape, so play safer.</li>" +
      "</ul>" },
    { h: "Using your tower", html:
      "<p>Your tower is your safe zone in the early game. It hits enemy champions very hard, so enemies only attack you under it if they're sure they can kill you quickly. If you're being chased, run toward your tower. If you're low, stay near it and farm with abilities from a distance.</p>" +
      "<p>Later in the game, towers get weaker relative to champions, and enemy teams can kill you under them more easily.</p>" },
    { h: "Learn from your deaths", html:
      "<p>Every time you die, ask one question: <strong>\"What could I have seen or done earlier to avoid this?\"</strong> Usually the answer is one of: I didn't look at the minimap, I didn't have vision, I fought without my abilities, or I chased too far. Fixing one of these at a time makes a huge difference.</p>" }
  ],
  takeaways: [
    "Each death gives the enemy gold and costs you farm and XP.",
    "Check the minimap every 3-5 seconds; tie it to your last hits.",
    "Ping missing enemies, and play safe when you can't see the jungler.",
    "Back off when you're low, behind on levels, outnumbered, or without Flash.",
    "After each death, ask what you could have seen earlier."
  ],
  related: ["vision-basics", "jungle-tracking", "teamwork-and-pings"],
  quiz: [
    { q: "How often should you glance at the minimap?", options: ["Once a minute", "Every 3-5 seconds", "Only when someone pings", "Only after dying"], answer: 1, explain: "Frequent minimap checks are the best way to see danger coming." },
    { q: "Your lane opponent disappears from lane. What should you do?", options: ["Ignore it", "Ping them as missing so teammates are careful", "Follow them into the fog", "Recall immediately"], answer: 1, explain: "Pinging a missing enemy warns your teammates that they might be roaming." },
    { q: "When is it safest to play aggressively in lane?", options: ["When the enemy jungler was just seen on the other side of the map", "When you can't see anyone", "When your Flash is down", "When the enemy wave is bigger"], answer: 0, explain: "If the jungler is far away, they can't gank you for a while." }
  ]
});

/* ---------- 8. Teamwork and pings ---------- */
RA.guides.push({
  id: "teamwork-and-pings",
  title: "Teamwork, Pings and Role Quests",
  level: "beginner",
  category: "mental",
  minutes: 6,
  summary: "How to communicate without typing, how to keep a good attitude, and what your role quest gives you.",
  sections: [
    { h: "Pings: talk without typing", html:
      "<p>Typing in the middle of a fight gets you killed. Instead, use <strong>pings</strong>: quick signals on the map. Hold <kbd>G</kbd> (or <kbd>Alt</kbd>) and click, or use the ping wheel. The most useful ones:</p>" +
      "<ul>" +
      "<li><strong>Enemy Missing (?)</strong>: an enemy left their lane. Always ping this when your opponent disappears.</li>" +
      "<li><strong>Danger / Retreat</strong>: warn a teammate to back off.</li>" +
      "<li><strong>On My Way</strong>: you're coming to help.</li>" +
      "<li><strong>Assist Me</strong>: you want help.</li>" +
      "<li><strong>Push / Hold</strong>, and pings on an objective like a dragon to suggest taking it.</li>" +
      "</ul>" +
      "<p>You can also ping an enemy's summoner spell on the scoreboard to share when their Flash comes back.</p>" +
      "{{tip:Ping \"On My Way\" on dragon about 45 seconds before it spawns. It gives your team time to get ready and makes it clear what the plan is.}}" },
    { h: "Good communication", html:
      "<ul>" +
      "<li>Keep chat short and useful: \"flash down mid\", \"drag in 1 min\".</li>" +
      "<li>Praise good plays. A simple \"nice\" makes teammates play better.</li>" +
      "<li>Don't argue about who made a mistake mid-game. It can wait (forever).</li>" +
      "</ul>" +
      "{{warn:Spamming pings on a teammate after they die. It never helps them play better, and it often makes the whole team play worse. If someone is doing this to you, mute them.}}" },
    { h: "Muting and focusing on yourself", html:
      "<p>You can mute any player from the scoreboard (<kbd>Tab</kbd>) or by typing <kbd>/mute</kbd> followed by their name. Many good players mute all chat by default (<kbd>/muteall</kbd>) and only use pings. There's no shame in it.</p>" +
      "<p>The only player you control is you. In every game, focus on one or two things you want to do well, like your CS or your minimap checks. Win or lose, you can still improve. Read more in {{guide:mental-game}}.</p>" },
    { h: "Role quests", html:
      "<p>Every player automatically gets a <strong>role quest</strong> for their assigned position. You make progress by playing your role: killing minions, taking plates and objectives, getting takedowns, and spending time in your lane. When you complete it, you get a reward:</p>" +
      "<table><tr><th>Role</th><th>Quest reward</th></tr>" +
      "<tr><td>Top</td><td>A free Unleashed Teleport (or a big shield if you already took Teleport), bonus experience, and a level cap of 20.</td></tr>" +
      "<tr><td>Jungle</td><td>Primal Smite, extra gold and XP from large camps, and bonus move speed in the jungle and river.</td></tr>" +
      "<tr><td>Mid</td><td>+8% attack damage and ability power, and your Tier 2 boots upgrade to Tier 3 for free.</td></tr>" +
      "<tr><td>Bot</td><td>+300 gold, extra gold per minion and takedown, and your boots move to the quest slot, freeing an item slot.</td></tr>" +
      "<tr><td>Support</td><td>Free upgrades to your support item, Control Wards for 40 gold, and up to 2 Control Wards stored in the quest slot.</td></tr>" +
      "</table>" +
      "<p>Early on, playing outside your assigned lane costs you: you get 25% less minion gold and XP there until level 3 (supports until level 5). Stay in your lane early.</p>" },
    { h: "Play as a team", html:
      "<p>League is won by teams that move together. When your team pings an objective, go there. When four teammates are fighting, join them rather than farming alone. Five average players working together beat five great players who ignore each other.</p>" }
  ],
  takeaways: [
    "Use pings instead of typing, especially \"Enemy Missing\".",
    "Keep chat short and positive; mute anyone who tilts you.",
    "Focus on your own play: it's the only thing you control.",
    "Every role gets an automatic quest with a reward; stay in your lane early to complete it.",
    "Group with your team for objectives and fights."
  ],
  related: ["mental-game", "staying-alive", "how-league-works"],
  quiz: [
    { q: "What should you ping when your lane opponent disappears?", options: ["On My Way", "Enemy Missing", "Push", "Assist Me"], answer: 1, explain: "\"Enemy Missing\" warns teammates that an enemy might be coming to their lane." },
    { q: "What does the mid lane role quest give?", options: ["Level cap 20", "Primal Smite", "+8% AD and AP and free Tier 3 boots", "40-gold Control Wards"], answer: 2, explain: "Mid gets +8% attack damage and ability power, and a free upgrade to Tier 3 boots." },
    { q: "A teammate keeps flaming you in chat. What's the best move?", options: ["Argue back", "Mute them and keep playing", "Stop playing", "Ping them back"], answer: 1, explain: "Muting removes the distraction so you can focus on playing well." }
  ]
});
