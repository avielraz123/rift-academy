window.RA = window.RA || {};
RA.roles = RA.roles || [];

/* ---------------- TOP ---------------- */
RA.roles.push({
  id: "top",
  name: "Top Lane",
  tagline: "The island: long 1v1 duels, tough champions, and a lane that can carry the whole map.",
  difficulty: "Medium",
  summary: "Top lane is the solo lane at the top of the map. Top laners are usually durable fighters or tanks who win long duels, pressure side lanes, and either lead the charge or protect the team in fights.",
  youLikeThisIf: [
    "You enjoy pure 1v1 battles where your skill decides the lane.",
    "You like tough champions who can take a beating and keep swinging.",
    "You don't mind being a bit alone, away from the rest of your team.",
    "You like the idea of one player pulling three enemies to the side of the map."
  ],
  responsibilities: [
    "Win or hold your lane against one opponent, mostly without help.",
    "Farm well: top laners need levels and items to fight.",
    "Use {{spell:Teleport}} or your role quest's free Teleport to join fights in other lanes.",
    "Pressure the side lanes in the mid game so the enemy has to send people to stop you.",
    "In teamfights, either start the fight (tanks) or dive the enemy backline (fighters)."
  ],
  sections: [
    {
      h: "Champion types",
      html: "<p>Most top laners fit into a few families. Knowing which one you're playing tells you how to win:</p><ul><li><strong>Juggernauts and bruisers</strong> like {{champ:Garen}}, {{champ:Darius}} and {{champ:Sett}} deal big damage and are hard to kill. They want long fights up close.</li><li><strong>Tanks</strong> like {{champ:Malphite}} and {{champ:Ornn}} soak damage and start fights with powerful crowd control. They scale into teamfight monsters.</li><li><strong>Scaling champions</strong> like {{champ:Nasus}} are weak early but become terrifying late if they farm safely.</li><li><strong>Skirmishers and duelists</strong> like {{champ:Fiora}} and {{champ:Camille}} win 1v1 fights with clever mechanics. They're rewarding but harder to learn.</li><li><strong>Ranged top laners</strong> like {{champ:Teemo}} and {{champ:Kennen}} annoy melee champions by hitting them from a distance.</li></ul><p>If you're new, start with a bruiser or tank. They forgive mistakes, because you can survive a bad trade.</p>"
    },
    {
      h: "Early game (levels 1-6)",
      html: "<p>Top lane is long, so ganks take time to arrive and escapes are hard. That makes the early game a careful dance.</p><ul><li><strong>Start:</strong> most fighters start {{item:Doran's Blade}} or {{item:Doran's Shield}} plus a {{item:Health Potion}}. Take {{item:Doran's Shield}} if the matchup is hard.</li><li><strong>Farm first.</strong> Every minion is gold and experience you need. Read {{guide:last-hitting}} if you miss a lot.</li><li><strong>Trade when your opponent goes for a minion.</strong> Their attention is on the last hit, so that's your window. See {{guide:trading}}.</li><li><strong>Watch the level 2 and level 3 races.</strong> The first wave gives you level 2 a little before the second wave finishes. Being level 2 first is a free chance to hit your opponent.</li><li><strong>Respect the jungler.</strong> If you push far up the lane without vision, you're easy to gank. Ward the river brush or the tri-bush around 2:30-3:00, when the enemy jungler may arrive.</li></ul><p>You don't have to win every lane. A good top laner knows when the matchup is bad and just farms safely under tower.</p>{{tip:Freezing the wave near your own tower is the top laner's best defensive tool. Your opponent has to walk far forward to farm, which makes them easy prey for your jungler. Learn it in {{guide:wave-management}}.}}"
    },
    {
      h: "Your role quest",
      html: "<p>In 2026 every player automatically gets a quest for their assigned position. You fill it by farming, breaking plates, taking turrets and objectives, getting takedowns and simply spending time in your lane.</p><p>The <strong>top lane quest</strong> needs 1200 points. When it's done you get:</p><ul><li><strong>Unleashed Teleport</strong> as a bonus summoner spell (390s cooldown). If you already took {{spell:Teleport}}, it instead gets a shield worth 35% of your max health and a shorter cooldown.</li><li><strong>+600 bonus experience</strong>, +11% experience from everything, and +80 experience per takedown.</li><li><strong>A level cap of 20</strong> instead of 18, so you can out-level everyone late in the game.</li></ul><p>Because the quest gives you a free Teleport, many top laners now take {{spell:Ignite}} or {{spell:Ghost}} alongside {{spell:Flash}} to be stronger in lane.</p>{{warn:Leaving lane early to roam is costly. Minion gold and experience outside your lane are reduced by 25% until level 3, and you lose quest progress while you're away. Stay in lane early unless there's a clear kill to get.}}"
    },
    {
      h: "Mid game: side lanes and Teleport",
      html: "<p>Around 14 minutes, the outer turrets start falling and the game opens up. Top laners have two jobs now:</p><ul><li><strong>Split pushing:</strong> push the top side lane so the enemy has to send someone to stop you. If one player comes, you might win the 1v1. If two or three come, your team can take an objective somewhere else. See {{guide:side-lanes}}.</li><li><strong>Teleport plays:</strong> watch the map for fights near dragon or in bot lane. A well-timed Teleport onto a ward or minion behind the enemy can win the fight for your team.</li></ul><p>The Rift Herald spawns at 15:00 in the top side pit and leaves at 19:45. Top laners are often closest to it, so help your jungler take it. Ride the Herald into a turret for huge damage.</p><p>Remember: turret plates no longer fall off in 2026, so pressuring turrets stays rewarding all game.</p>"
    },
    {
      h: "Late game and teamfights",
      html: "<p>Late in the game, a single fight can decide everything. Your job depends on your champion:</p><ul><li><strong>Tanks:</strong> start the fight. Look for an engage that catches several enemies, like {{champ:Malphite}}'s ultimate. Then stand between your carries and the enemy divers.</li><li><strong>Fighters:</strong> wait for the enemy to use their crowd control, then dive their carries or fight whoever is closest. Going in first as a fighter usually means getting stunned and dying.</li><li><strong>Split pushers:</strong> keep pressure on a side lane, but stay close enough to join your team when Baron or Elder Dragon is up. Teleport helps here.</li></ul><p>If you're behind, become useful anyway: build tanky items and focus on protecting your carries or catching out a lone enemy.</p>"
    },
    {
      h: "Advanced tips",
      html: "<ul><li><strong>Track the enemy jungler's start.</strong> If they started bot side, you have a safe window to push early. See {{guide:jungle-tracking}}.</li><li><strong>Learn matchup power spikes.</strong> Know which levels or items make you stronger than your opponent, and fight then. {{guide:matchups-and-cooldowns}} covers how.</li><li><strong>Bounce the wave.</strong> Crashing a big wave into the enemy tower before you recall means you don't lose minions while you shop.</li><li><strong>Track the enemy Teleport.</strong> If theirs is on cooldown and yours isn't, your team has a numbers advantage in the next fight. Ping it.</li><li><strong>Proxy farming</strong> (farming behind the enemy's turret) is an advanced trick for fast-clearing champions to draw enemies away from objectives.</li></ul>"
    }
  ],
  starterChamps: [
    { id: "Garen", why: "Simple kit, heals himself, very forgiving. The classic first top laner." },
    { id: "Malphite", why: "Tanky rock with one of the easiest game-winning ultimates to use." },
    { id: "Sett", why: "Strong, straightforward brawler who wins most early fights up close." },
    { id: "Nasus", why: "Teaches you to farm: every last hit with Q makes him stronger forever." },
    { id: "Ornn", why: "Tank who builds item upgrades for the whole team. Great for learning teamfights." }
  ],
  mistakes: [
    "Pushing up the lane with no wards and dying to a gank over and over.",
    "Fighting your opponent when they're at a power spike (a new level or item) and you aren't.",
    "Forgetting you have Teleport and staying in lane while your team fights 4v5.",
    "Chasing a kill under the enemy tower at low health.",
    "Ignoring the map in the mid game: split pushing while the enemy team takes Baron.",
    "Roaming too early and losing farm, experience and quest progress."
  ],
  quiz: [
    { q: "What does the top lane role quest give you when you complete it?", options: ["A free Tier 3 boots upgrade", "A free Unleashed Teleport, bonus experience and a level cap of 20", "Extra gold per minion", "Primal Smite"], answer: 1, explain: "The top quest grants Unleashed Teleport (or a shield if you already have Teleport), +600 XP, more XP over time, and lets you reach level 20." },
    { q: "Why is freezing the wave near your own tower useful in top lane?", options: ["It makes minions give more gold", "It forces your opponent to walk forward to farm, where they're easy to gank", "It makes your tower stronger", "It speeds up your role quest"], answer: 1, explain: "A freeze keeps the wave near your tower, so your opponent has to overextend to farm, which exposes them to your jungler." },
    { q: "As a fighter in a late-game teamfight, when should you usually go in?", options: ["First, before anyone else", "Never, just push a lane", "After the enemy has used their crowd control", "Only when your health is low"], answer: 2, explain: "Fighters do the most when the enemy's stuns and slows are used up. Going in first usually means getting locked down and killed." }
  ]
});

/* ---------------- JUNGLE ---------------- */
RA.roles.push({
  id: "jungle",
  name: "Jungle",
  tagline: "The map's playmaker: farm the wilds, gank lanes, and control every big objective.",
  difficulty: "Hard",
  summary: "The jungler doesn't have a lane. Instead, you farm the monster camps between the lanes, surprise enemy laners with ganks, and lead your team in taking dragons, Void Grubs, Rift Herald and Baron.",
  youLikeThisIf: [
    "You like making decisions and deciding where the action happens.",
    "You'd rather roam the whole map than stay in one lane.",
    "You enjoy reading the game and guessing what the enemy will do next.",
    "You like having a big impact on all your teammates' games."
  ],
  responsibilities: [
    "Clear jungle camps efficiently to keep up in gold and experience.",
    "Gank lanes where a kill or a flash is likely.",
    "Track the enemy jungler and warn your lanes.",
    "Control objectives: dragons, Void Grubs, Rift Herald and Baron.",
    "Counter-gank: show up when the enemy jungler attacks your lanes."
  ],
  sections: [
    {
      h: "How the jungle works",
      html: "<p>As a jungler you take {{spell:Smite}}, which deals big damage to monsters, and you start with a jungle pet item: {{item:Scorchclaw Pup}} (damage), {{item:Gustwalker Hatchling}} (speed) or {{item:Mosstomper Seedling}} (tankiness). The pet helps you clear and grows by killing monsters.</p><p>Junglers take 50% less damage from normal monsters, and killing large monsters restores some health. Still, the jungle wears you down, so use your health potions and recall when needed.</p><p>The camps you'll clear:</p><table><tr><th>Camp</th><th>First spawn</th><th>Respawn</th></tr><tr><td>Blue Sentinel, Red Brambleback</td><td>0:55</td><td>5:00</td></tr><tr><td>Murk Wolves, Raptors</td><td>0:55</td><td>2:15</td></tr><tr><td>Gromp, Krugs</td><td>1:07</td><td>2:15</td></tr><tr><td>Rift Scuttler (river crab)</td><td>2:55</td><td>2:30</td></tr></table><p>Blue buff gives ability haste and mana regeneration. Red buff makes your attacks burn and slow, and heals you out of combat. Killing a Scuttler leaves a Speed Shrine in that river for 90 seconds, which gives vision and speed.</p>"
    },
    {
      h: "Your first clear and the jungle quest",
      html: "<p>Your first route through the jungle is called your <strong>first clear</strong>. A common one is a <strong>full clear</strong>: all six camps on your side, starting at one buff and ending near the river around 3:00, in time to fight for the Scuttler or gank a lane. Faster champions can start at a buff, take three camps, and gank early.</p><p>Your laners help you with the first camp (the <strong>leash</strong>). Ask for one in chat or with a ping before the game starts.</p><p>The <strong>jungle role quest</strong> is completed by feeding your pet: it needs 35 stacks from monsters. When it's done, you get:</p><ul><li><strong>Primal Smite</strong>, the strongest version of Smite.</li><li><strong>+10 gold and +10 experience</strong> for each large camp.</li><li><strong>Bonus move speed</strong> in the jungle and river (4%, or 8% out of combat).</li></ul>{{tip:Start your clear at the buff on the side where your lane is stronger. If your bot lane is winning, end your clear near bot so you can gank there with a level advantage.}}"
    },
    {
      h: "Pathing and ganking",
      html: "<p>Pathing means choosing which camps to clear and where to go next. Good junglers plan ahead: \"I'll clear these three camps, then gank mid when the enemy mid uses Flash.\"</p><p><strong>Gank a lane when:</strong></p><ul><li>The enemy laner is pushed up toward your side, far from their tower.</li><li>The enemy has used {{spell:Flash}} or their escape ability.</li><li>Your laner has crowd control to help (a stun, root or slow).</li><li>The enemy laner is low on health.</li></ul><p><strong>Don't gank when</strong> the enemy is under their tower with full health and Flash, or when you'd waste a lot of time walking there. Every failed gank is lost farm.</p><p>Walk in through fog of war and avoid known enemy wards. Coming in from behind the enemy (around their side of the lane) is often best, because they have to run past you.</p>{{warn:Don't spend the whole early game ganking one losing lane. If a lane is far behind and the enemy has vision, help a lane that can actually win instead, or farm and take objectives.}}"
    },
    {
      h: "Objective control",
      html: "<p>Objectives are the jungler's main job after the early game:</p><ul><li><strong>Dragons</strong> spawn at 5:00 and return 5:00 after each kill. Each drake gives your team a permanent buff, and the first team to 4 gets the Dragon Soul. After a team gets Soul, the <strong>Elder Dragon</strong> appears 6:00 later. Its buff burns enemies and executes them below 20% health.</li><li><strong>Void Grubs:</strong> 3 grubs spawn at 8:00 in the top pit (one wave only, gone at 14:45). Each grub makes your team stronger against turrets, and all three summon little Voidmites while you hit structures.</li><li><strong>Rift Herald</strong> spawns at 15:00 and leaves at 19:45. Ride her into a turret for 3000 true damage.</li><li><strong>Baron Nashor</strong> spawns at 20:00 and returns 6:00 after each kill. Hand of Baron makes your team and nearby minions much stronger for 3 minutes.</li></ul><p>Set up objectives about a minute early: push your lanes, place wards, and get your team there first. Read {{guide:objectives-and-dragons}} for the full plan. Use the Objective Timers tool (under Tools) to track respawns.</p>"
    },
    {
      h: "Mid and late game",
      html: "<p>After laning ends, the jungler becomes the team's tempo-setter. Keep farming your camps between fights, because a jungler with no gold can't do anything. Then show up for every objective with your team.</p><p>Smite matters a lot late in the game: keep it ready for Baron and Elder Dragon, and never use it on a small camp right before an objective. A stolen Baron can lose a game.</p><p>In fights, your job depends on your champion: tanks like {{champ:Amumu}} start fights, while damage dealers like {{champ:MasterYi}} wait to clean up. Junglers are also great at catching enemies who walk alone into fog.</p>"
    },
    {
      h: "Advanced tips",
      html: "<ul><li><strong>Track the enemy jungler.</strong> If you see them top at 3:00, they're probably not bot at 3:15. Ping your bot lane that it's safe, or go take something on the opposite side. See {{guide:jungle-tracking}}.</li><li><strong>Look for lanes with priority.</strong> A laner who can push their wave first can follow you to the river. Fighting near those lanes is much safer.</li><li><strong>Counter-gank.</strong> If the enemy jungler ganks your lane, be there to turn the fight around.</li><li><strong>Trade objectives.</strong> If the enemy takes dragon and you can't contest, take Void Grubs or a turret on the other side.</li><li><strong>Use Faelights.</strong> A ward placed on a Faelight gets extra vision range. They're great spots for objective setup. See {{guide:vision-control}}.</li></ul>"
    }
  ],
  starterChamps: [
    { id: "Warwick", why: "Heals constantly, easy clear, and his passive shows you where to gank low-health enemies." },
    { id: "Amumu", why: "Simple tank with a huge area stun ultimate that wins teamfights." },
    { id: "Vi", why: "Point-and-click ultimate makes ganks reliable and easy to land." },
    { id: "JarvanIV", why: "Strong early ganks and a combo that's simple to learn." },
    { id: "MasterYi", why: "Fast farmer who teaches you clear routes. Great at cleaning up fights." }
  ],
  mistakes: [
    "Ganking a lane that's pushed under the enemy tower, then falling behind on farm.",
    "Forgetting your camps: a jungler who only ganks ends up poor and weak.",
    "Using Smite on a small camp right before dragon or Baron spawns.",
    "Starting objectives without vision or without your lanes pushed.",
    "Following one losing lane for 15 minutes instead of playing where you can win.",
    "Arguing with laners about ganks instead of pinging and moving on."
  ],
  quiz: [
    { q: "When do the first jungle buffs (Blue and Red) spawn in 2026?", options: ["1:30", "0:55", "2:00", "3:15"], answer: 1, explain: "In 2026 all first spawns moved 35 seconds earlier: buffs, Murk Wolves and Raptors at 0:55, Gromp and Krugs at 1:07." },
    { q: "What do you need to do to complete the jungle role quest?", options: ["Kill 3 champions", "Feed your jungle pet 35 stacks from monsters", "Take the first dragon", "Reach level 6"], answer: 1, explain: "Your pet needs 35 stacks. Then you get Primal Smite, extra gold and XP per large camp, and bonus speed in the jungle." },
    { q: "Which is the best time to gank a lane?", options: ["When the enemy is under their tower at full health", "When the enemy laner is pushed toward your side and has used Flash", "Right after your laner died", "When your own camps are up"], answer: 1, explain: "Ganks work best when the enemy is far from their tower and has used their escape, like Flash." }
  ]
});

/* ---------------- MID ---------------- */
RA.roles.push({
  id: "mid",
  name: "Mid Lane",
  tagline: "The center of the map: big damage, short lane, and the freedom to roam anywhere.",
  difficulty: "Medium",
  summary: "Mid lane is the short lane through the middle of the map. Mid laners are usually mages or assassins who deal big damage, win the lane with clever trades, and roam to help the jungle and the side lanes.",
  youLikeThisIf: [
    "You like flashy plays and big bursts of damage.",
    "You enjoy aiming skill shots and outplaying your opponent.",
    "You want to influence both sides of the map.",
    "You like being one of your team's main damage sources."
  ],
  responsibilities: [
    "Farm and trade well in a short, dangerous lane.",
    "Push your wave so you can move first to the river, dragon or side lanes.",
    "Roam to help your jungler and other lanes when it's safe.",
    "Deal a big share of your team's damage in fights.",
    "Watch both rivers and ward them: you're in the middle of everything."
  ],
  sections: [
    {
      h: "Champion types",
      html: "<ul><li><strong>Control mages</strong> like {{champ:Orianna}}, {{champ:Syndra}} and {{champ:Malzahar}} control the fight with crowd control and area damage.</li><li><strong>Burst mages</strong> like {{champ:Annie}}, {{champ:Veigar}} and {{champ:Lux}} can delete a target with one combo.</li><li><strong>Poke mages</strong> like {{champ:Ziggs}} damage enemies from very long range and destroy turrets fast.</li><li><strong>Mobile mages and assassins</strong> like {{champ:Ahri}}, {{champ:Aurora}} and {{champ:Zed}} dash in, kill a squishy target and escape.</li><li><strong>Melee skirmishers</strong> like {{champ:Yasuo}} use crit and mobility to fight up close. They're harder to play.</li></ul><p>We have full guides for every mid laner named here: see the list at the bottom of this page.</p>"
    },
    {
      h: "Early game (levels 1-6)",
      html: "<p>Mid lane is short, so your tower is close and you're relatively safe. But ganks can come from both sides, and the enemy jungler reaches you quickly.</p><ul><li><strong>Start:</strong> most mages start {{item:Doran's Ring}} and two {{item:Health Potion}}s.</li><li><strong>Push for priority.</strong> Use your abilities to clear the wave faster than your opponent. The laner who pushes first can move to the river first, which wins skirmishes around the Scuttler and dragon.</li><li><strong>Trade with abilities.</strong> Hit your opponent when their key ability is on cooldown or when they walk up to last-hit. See {{guide:trading}}.</li><li><strong>Ward both sides.</strong> One ward in each side brush or river entrance keeps you safe from ganks.</li><li><strong>Level 6</strong> is a huge spike for most mid laners. Many can kill an opponent from about half health once they have their ultimate.</li></ul>{{tip:When your opponent disappears from lane, ping them as missing right away, and warn the lane closest to where they went. Mid laners roaming unseen get many kills in low ranks.}}"
    },
    {
      h: "Your role quest",
      html: "<p>The <strong>mid lane quest</strong> needs 1350 points from farming, plates, takedowns, objectives and time spent in your lane. When you complete it you get:</p><ul><li><strong>+8% bonus AD and AP</strong>, so your damage gets a permanent boost.</li><li><strong>Free Tier 3 boots</strong>: your Tier 2 boots (like {{item:Sorcerer's Shoes}}) upgrade for free to an exclusive Tier 3 version.</li></ul><p>You keep earning passive points while you're anywhere in your lane, and after level 3 you can roam for up to 60 seconds without losing progress. That makes short, well-timed roams cheap.</p>{{warn:Roaming before level 3 is usually a mistake: you get 25% less minion gold and experience outside your lane until then, and your opponent gets free farm.}}"
    },
    {
      h: "Roaming",
      html: "<p>Roaming is what makes mid lane special. You're the closest laner to every other lane.</p><p><strong>Good roams:</strong></p><ul><li>Push your wave into the enemy tower first, so you don't lose minions while you're away.</li><li>Go when a side lane has a good setup: an enemy pushed up, low on health, or without Flash.</li><li>Join your jungler at the Scuttler, Void Grubs or dragon.</li></ul><p><strong>Bad roams:</strong> leaving with your wave pushed toward you (you'll lose the whole wave and maybe a turret plate), or walking into a lane where the enemy can see you coming.</p><p>If your opponent roams, either follow them (ping your teammates) or punish them by pushing their tower and taking plates. Read {{guide:roaming}} for more.</p>"
    },
    {
      h: "Mid and late game",
      html: "<p>After laning, mid laners usually group with the team near dragon or Baron, or catch side waves that come into mid. Keep farming: as a mage, items are your power.</p><p>In teamfights:</p><ul><li><strong>Control mages</strong> stay behind the frontline and hit as many enemies as possible.</li><li><strong>Burst mages and assassins</strong> wait for the right moment, then delete the enemy carry.</li><li><strong>Poke mages</strong> chip away at the enemy before the fight starts.</li></ul><p>Don't facecheck brushes in the late game. You're squishy, and one catch can lose a Baron. Let a tank or a ward check first. See {{guide:teamfighting}}.</p>"
    },
    {
      h: "Advanced tips",
      html: "<ul><li><strong>Manage your mana.</strong> Spamming abilities on minions leaves you with nothing when the enemy jungler arrives.</li><li><strong>Track cooldowns.</strong> If the enemy mid used their escape, you have a window to all-in. See {{guide:matchups-and-cooldowns}}.</li><li><strong>Time your recalls</strong> with objective spawns, so you're back with full health and new items when dragon appears. See {{guide:recall-timing}}.</li><li><strong>Play around your jungler.</strong> Push your wave when your jungler is near, so you can join any fight in the river.</li><li><strong>Look at the side lanes.</strong> After 14 minutes, waves come faster. A mid laner who catches side waves gets a lot of gold.</li></ul>"
    }
  ],
  starterChamps: [
    { id: "Annie", why: "Simple point-and-click combo and a big stun. Great for learning the lane." },
    { id: "Lux", why: "Long range and a safe playstyle. Teaches skill shots and positioning." },
    { id: "Veigar", why: "Grows stronger every game with his passive. His cage stuns whole teams." },
    { id: "Malzahar", why: "Pushes waves easily and his ultimate locks down any target." },
    { id: "Ahri", why: "Mobile and safe with three dashes, and her charm sets up easy kills." }
  ],
  mistakes: [
    "Not warding and dying to the same jungler gank twice.",
    "Roaming while your wave is pushing toward your tower and losing tons of farm.",
    "Using all your mana on minions and having nothing to fight with.",
    "Not pinging when your lane opponent goes missing.",
    "Walking into unwarded brush alone in the late game."
  ],
  quiz: [
    { q: "Why do mid laners want to push their wave first?", options: ["Pushed waves give more gold", "So they can move to the river or another lane before their opponent", "It completes the role quest instantly", "Turrets do more damage when pushed"], answer: 1, explain: "This is called priority. The laner who pushes first can move first to skirmishes, the Scuttler or dragon." },
    { q: "What does the mid lane role quest give you?", options: ["A level cap of 20", "+8% AD and AP, and free Tier 3 boots", "40g control wards", "+2 gold per minion"], answer: 1, explain: "The mid quest grants +8% bonus AD and AP, and upgrades your Tier 2 boots to an exclusive Tier 3 version for free." },
    { q: "When is a good time to roam from mid?", options: ["Right at the start of the game", "After pushing your wave into the enemy tower", "When your wave is pushing toward your tower", "Only when you're low on health"], answer: 1, explain: "Pushing first means you don't lose minions while you're gone, and your opponent has to deal with the wave too." }
  ]
});

/* ---------------- BOT ---------------- */
RA.roles.push({
  id: "bot",
  name: "Bot Lane (ADC)",
  tagline: "The marksman: weak early, unstoppable late, and always the team's main damage.",
  difficulty: "Medium",
  summary: "Bot lane is played by two players: the ADC (attack damage carry) and the support. The ADC is usually a ranged marksman who farms carefully, scales with items, and deals steady, huge damage in late-game fights as long as they stay alive.",
  youLikeThisIf: [
    "You enjoy farming and slowly becoming the strongest player on the map.",
    "You like dealing damage from a distance while dodging enemies.",
    "You want to play with a partner (your support) in lane.",
    "You're good at positioning and staying alive under pressure."
  ],
  responsibilities: [
    "Farm as much as possible: you're the most item-dependent role.",
    "Play the 2v2 lane with your support and win trades together.",
    "Take dragons with your jungler, since bot lane is right next to the dragon pit.",
    "Stay alive in fights and deal damage to whatever is in range.",
    "Push lanes and take turrets: marksmen destroy structures fast."
  ],
  sections: [
    {
      h: "Champion types",
      html: "<ul><li><strong>Hyper carries</strong> like {{champ:Jinx}}, {{champ:Vayne}} and {{champ:Smolder}} are weaker early but become game-winning late.</li><li><strong>Lane bullies</strong> like {{champ:Draven}} and {{champ:Caitlyn}} win the early game with high damage or long range and try to end the game fast.</li><li><strong>Utility marksmen</strong> like {{champ:Ashe}} and {{champ:Jhin}} bring crowd control and long-range plays.</li><li><strong>Skill-shot marksmen</strong> like {{champ:Ezreal}} rely on abilities and poke from range.</li><li><strong>Mages in bot</strong> like {{champ:Ziggs}} also work well, pushing waves and destroying turrets.</li></ul><p>We have full guides for every marksman named here: see the list at the bottom of this page.</p>"
    },
    {
      h: "The 2v2 lane",
      html: "<p>Bot lane is about teamwork. You and your support fight together against another pair.</p><ul><li><strong>Start:</strong> most marksmen start {{item:Doran's Blade}} and a {{item:Health Potion}}.</li><li><strong>The level 2 race</strong> is huge in bot lane. You reach level 2 after the first wave plus three melee minions from the second wave. If you hit level 2 first, you and your support can attack while the enemy has only one ability.</li><li><strong>Follow your support's engage.</strong> When your support lands a stun or hook, attack right away. Hesitating wastes their play.</li><li><strong>Trade when the enemy support goes in.</strong> If the enemy support walks forward without protection, punish them.</li><li><strong>Watch for ganks</strong>, especially when your wave is pushed. Ward the river and tri-brush.</li></ul>{{tip:Talk to your support with pings. Ping \"on my way\" on an enemy when you want to fight, and \"retreat\" when you're low. Good duos often win lanes just by acting at the same time.}}"
    },
    {
      h: "Your role quest",
      html: "<p>The <strong>bot lane quest</strong> needs 1350 points, mostly from farming, plates, takedowns and time in lane. The reward:</p><ul><li><strong>+300 gold</strong> right away.</li><li><strong>+2 gold for every minion</strong> you kill afterward, and <strong>+40 gold per takedown</strong>.</li><li><strong>Your boots move to the quest slot</strong>, freeing a whole item slot. That's effectively a seventh item late in the game.</li></ul><p>This is why farming matters so much as an ADC: more minions finish your quest faster, and then each minion pays even more.</p>"
    },
    {
      h: "Kiting",
      html: "<p>Kiting means attacking while moving, so the enemy can't reach you. It's the most important mechanical skill for marksmen.</p><ol><li>Attack the enemy.</li><li>As soon as the attack fires, click to move (away from a melee enemy, or toward a fleeing one).</li><li>Attack again when your attack is ready.</li></ol><p>Moving back between attacks is called <strong>kiting back</strong>. Moving forward between attacks to chase is <strong>kiting forward</strong>. Practice in the practice tool: attack a target dummy and move between every attack. Use \"attack move\" (an attack-move key binding) to attack the nearest enemy without accidentally walking into them.</p>{{warn:Don't stand still while attacking in fights. A marksman who doesn't move is the easiest target for every enemy ability.}}"
    },
    {
      h: "Positioning in fights",
      html: "<p>Late in the game, your team's chances depend on you staying alive and doing damage. The rule: <strong>attack the closest enemy you can hit safely.</strong></p><ul><li>Stand behind your frontline (tanks and fighters).</li><li>Know the enemy's threats: which assassin or diver will jump on you? Keep your Flash and escape for them.</li><li>Don't dive for the enemy carry if it means walking past three enemies. Hitting their tank from safety is better than dying.</li><li>Stay with your support. A good support protects you with shields, heals and crowd control.</li></ul><p>Read {{guide:teamfighting}} for more about roles in fights.</p>"
    },
    {
      h: "Mid and late game",
      html: "<p>After laning, ADCs often move to mid lane, where they can farm safely and join fights quickly. Keep farming waves: as a marksman, you need items to deal damage.</p><p>Group with your team for dragons and Baron. Never walk into the side lanes alone late in the game without vision: you're the enemy's favorite target to catch.</p><p>When your team takes Baron, use the buff to push turrets with your minions. Marksmen take down structures faster than anyone.</p>"
    },
    {
      h: "Advanced tips",
      html: "<ul><li><strong>Track the enemy jungler.</strong> When they're seen top side, your lane can play aggressively. See {{guide:jungle-tracking}}.</li><li><strong>Manage the wave for dragon.</strong> Push your wave before dragon spawns, so you get to the pit first. See {{guide:objectives-and-dragons}}.</li><li><strong>Learn your power spikes.</strong> Most marksmen spike hard at their first and second completed items. Fight then. See {{guide:power-spikes}}.</li><li><strong>Recall at good times.</strong> Bring back enough gold for a component, and crash the wave first so you lose fewer minions. See {{guide:recall-timing}}.</li></ul>"
    }
  ],
  starterChamps: [
    { id: "Ashe", why: "Slows every target and has a huge stun arrow. Easy to learn and useful all game." },
    { id: "MissFortune", why: "Strong early damage and a game-winning area ultimate in fights." },
    { id: "Caitlyn", why: "Longest attack range among marksmen. Great for learning to farm safely and bully lanes." },
    { id: "Jinx", why: "Simple kit that teaches positioning. Becomes a monster in the late game." },
    { id: "Ezreal", why: "Very safe with a blink. Teaches skill shots and poke." }
  ],
  mistakes: [
    "Walking up to farm when the enemy jungler might be nearby, with no wards.",
    "Not following your support's engage, leaving them to die alone.",
    "Standing in front of your team in fights.",
    "Facechecking brushes in the late game.",
    "Missing lots of minions: you need gold more than any other role.",
    "Chasing kills too far and getting caught."
  ],
  quiz: [
    { q: "What does the bot lane role quest give you?", options: ["Free Teleport", "+300 gold, extra gold per minion and takedown, and your boots move to the quest slot", "+8% AD and AP", "Primal Smite"], answer: 1, explain: "The bot quest pays 300 gold, +2 gold per minion, +40 per takedown, and moves your boots to the quest slot, freeing an item slot." },
    { q: "What does kiting mean?", options: ["Hiding in brush", "Attacking, then moving between attacks so the enemy can't reach you", "Recalling right after a kill", "Using only abilities"], answer: 1, explain: "Kiting is attacking and moving in between attacks. It's the most important mechanical skill for marksmen." },
    { q: "In a late-game teamfight, what should an ADC usually attack?", options: ["The enemy carry, no matter where they are", "The closest enemy they can hit safely", "The enemy turret", "Only enemies at full health"], answer: 1, explain: "Staying alive matters most. Hitting the closest safe target keeps your damage up without dying." }
  ]
});

/* ---------------- SUPPORT ---------------- */
RA.roles.push({
  id: "support",
  name: "Support",
  tagline: "The team's guardian and vision master: protect, set up plays, and see everything.",
  difficulty: "Easy",
  summary: "Supports play bot lane with the ADC but don't need minion gold. Instead, they protect their carry, start fights, place wards, and roam to help other lanes. A great support makes the whole team better.",
  youLikeThisIf: [
    "You like helping teammates more than racking up kills.",
    "You'd rather skip farming minions.",
    "You enjoy setting up plays, saving allies and controlling vision.",
    "You want to have a say in where the team goes."
  ],
  responsibilities: [
    "Protect your ADC in lane and in fights.",
    "Start fights (engage) or stop the enemy from starting them (disengage).",
    "Place and clear wards: you control your team's vision.",
    "Roam to help mid and the jungler when bot lane is safe.",
    "Leave minions to your ADC: let them take the farm."
  ],
  sections: [
    {
      h: "Support types",
      html: "<ul><li><strong>Engage supports</strong> like {{champ:Leona}}, {{champ:Nautilus}} and {{champ:Thresh}} jump on enemies with stuns and hooks. They start fights and create kills.</li><li><strong>Enchanters</strong> like {{champ:Lulu}}, {{champ:Soraka}}, {{champ:Janna}} and {{champ:Sona}} heal, shield and speed up their allies, keeping the carry alive.</li><li><strong>Wardens</strong> like {{champ:Braum}} protect allies by standing in front of them and blocking damage.</li><li><strong>Mage supports</strong> like {{champ:Lux}} and {{champ:Morgana}} poke the enemy and catch them with crowd control.</li></ul><p>Engage supports are best when your team wants to fight. Enchanters are best with a strong carry to protect.</p>"
    },
    {
      h: "Your support item and quest",
      html: "<p>Supports start with {{item:World Atlas}}, the support item. It gives you gold when you damage enemies or stay near your ADC, so you don't need to take minions.</p><p>The <strong>support role quest</strong> needs 800 points. Completing it upgrades your item from {{item:Runic Compass}} into {{item:Bounty of Worlds}}, which you can then upgrade for free into a final support item like {{item:Celestial Opposition}}, {{item:Solstice Sleigh}}, {{item:Dream Maker}}, {{item:Bloodsong}} or {{item:Zaz'Zak's Realmspike}}. Pick the one that fits your champion.</p><p>Supports also get cheaper Control Wards (40 gold instead of 75), and up to 2 Control Wards are stored in your quest slot from the start, so they don't take item space.</p>{{warn:Don't take minion last hits when your ADC is nearby. Their gold matters much more than yours, and supports outside bot lane get 33% less minion gold and experience until level 5 anyway.}}"
    },
    {
      h: "Early game in lane",
      html: "<ul><li><strong>Help win the level 2 race.</strong> Damage the first wave so you and your ADC hit level 2 before the enemy. Then go in together.</li><li><strong>Poke and zone.</strong> Hit the enemy ADC when they walk up to last-hit. Standing forward in the lane can scare them away from minions.</li><li><strong>Engage when the enemy makes a mistake</strong>: when they're out of position, low, or used their escape.</li><li><strong>Protect your ADC from ganks.</strong> Ward the river and tri-brush around 2:30-3:00, when the enemy jungler might arrive.</li></ul>{{tip:Watch the enemy support's key ability. If their hook or stun is on cooldown, your lane has a few seconds to fight with no risk.}}"
    },
    {
      h: "Warding",
      html: "<p>Vision is one of the support's biggest jobs. With vision, your team sees ganks coming and fights with information.</p><ul><li>Early on, ward the river and tri-brush near bot lane.</li><li>Before dragon spawns, ward around the dragon pit about a minute early.</li><li>Buy {{item:Control Ward}}s every recall. They reveal and disable enemy wards.</li><li>Once your support item is upgraded, swap your trinket to {{item:Oracle Lens}} to clear enemy wards.</li><li>Use Faelights: a ward placed on one gets 25% more sight range.</li></ul><p>Each player can have 3 Stealth Wards and 1 Control Ward placed at a time. Learn more in {{guide:vision-basics}} and {{guide:vision-control}}.</p>"
    },
    {
      h: "Roaming and the mid game",
      html: "<p>Once bot lane is safe (for example, your ADC just recalled), roam to mid or help your jungler with the Scuttler or an invade. A support showing up in mid lane often creates an easy kill.</p><p>In the mid game, walk with your carries and place vision ahead of them. Clear enemy wards around objectives with {{item:Oracle Lens}}. Don't let your carries walk into unwarded areas alone.</p><p>Read {{guide:roaming}} to learn when to leave lane.</p>"
    },
    {
      h: "Late game and teamfights",
      html: "<ul><li><strong>Engage supports:</strong> look for a fight-starting engage on a key target, but only when your team is close enough to follow.</li><li><strong>Enchanters:</strong> stay near your carry. Shield, heal and speed them up when they're attacked.</li><li><strong>Everyone:</strong> keep your crowd control for the enemy divers and assassins who jump on your carry. This is called peeling.</li></ul><p>A support who dies first in a fight often loses the fight. Don't facecheck brushes alone: use wards or sweep with your Oracle Lens first.</p>"
    }
  ],
  starterChamps: [
    { id: "Leona", why: "Tanky engage support with lots of stuns. Teaches you when to start fights." },
    { id: "Soraka", why: "Simple healer who keeps her whole team alive." },
    { id: "Lux", why: "Long-range poke and roots. Easy to play safely." },
    { id: "Nautilus", why: "Hook, stun and knock-ups. One of the easiest engage supports." },
    { id: "Sona", why: "Simple enchanter who heals, speeds up allies and has a team-wide stun ultimate." }
  ],
  mistakes: [
    "Taking minions from your ADC.",
    "Not buying Control Wards or never using your trinket.",
    "Engaging when your ADC isn't ready or can't follow.",
    "Roaming while your ADC is alone in a dangerous lane.",
    "Facechecking brushes alone in the late game.",
    "Using your crowd control to start a fight instead of protecting your carry when they're getting dived."
  ],
  quiz: [
    { q: "Why don't supports need to take minions?", options: ["Minions give supports no gold", "The support item gives them gold from damaging enemies and staying near their ADC", "Supports never buy items", "Their role quest gives infinite gold"], answer: 1, explain: "World Atlas and its upgrades give supports income without farming, so their ADC can take the minion gold." },
    { q: "How much do Control Wards cost for supports with the support quest perks?", options: ["75 gold", "40 gold", "Free", "150 gold"], answer: 1, explain: "Supports get Control Wards for 40g, and up to 2 are stored in their quest slot." },
    { q: "What does peeling mean?", options: ["Starting a fight", "Protecting your carry from enemies jumping on them", "Clearing wards", "Roaming to mid"], answer: 1, explain: "Peeling means using crowd control and shields to keep divers and assassins off your carry." }
  ]
});
