window.RA = window.RA || {};
RA.guides = RA.guides || [];

/* ---------- 1. Champ select basics (beginner) ---------- */
RA.guides.push({
  id: "champ-select-basics",
  title: "Champ Select Basics: Bans, Picks and Roles",
  level: "beginner",
  category: "draft",
  minutes: 7,
  summary: "How champion select works in ranked, what to ban, when to pick safe champions, and what to do when things go wrong before the game even starts.",
  sections: [
    {
      h: "How champ select works",
      html: "<p>Before every ranked game you go through <strong>champion select</strong> (\"champ select\" or \"draft\"). Your role is assigned before it starts, based on the two positions you queued for. Then it runs in three parts:</p>" +
        "<ol><li><strong>Ban phase.</strong> Each player bans one champion, so up to 10 champions are removed from the game. Bans are revealed together at the end of the phase.</li>" +
        "<li><strong>Pick phase.</strong> Teams take turns locking in champions in a 1-2-2-2-2-1 order: the blue side picks first, then red picks two, blue picks two, and so on, until red makes the last pick.</li>" +
        "<li><strong>Final phase.</strong> A short window to set your runes, summoner spells and skin, and to trade champions with a teammate if you both agree.</li></ol>" +
        "<p>The order matters. The first picks have to choose without knowing much about the enemy team. The last picks get to see almost everything and can react to it.</p>"
    },
    {
      h: "What to ban",
      html: "<p>You only get one ban, so use it on purpose. Good reasons to ban a champion:</p>" +
        "<ul><li><strong>It counters your main.</strong> If you play {{champ:Veigar}} and always struggle against {{champ:Katarina}}, banning her protects your pick.</li>" +
        "<li><strong>You hate playing against it.</strong> A champion you don't understand will beat you more often than its win rate suggests.</li>" +
        "<li><strong>It's very strong this patch.</strong> Check the <a href=\"#/tierlist\">tier list</a> for champions that are overperforming.</li></ul>" +
        "{{warn:Never ban the champion a teammate is hovering. It's the fastest way to start the game with an angry teammate. Look at your team's hovers before you lock in your ban.}}"
    },
    {
      h: "Blind pick vs counter pick",
      html: "<p>A <strong>blind pick</strong> is choosing your champion before you know who you'll be laning against. A <strong>counter pick</strong> is choosing after you've seen your opponent, so you can pick something that beats them.</p>" +
        "<p>If you pick early, choose a champion that's safe against most opponents: one with range, an escape, or few bad matchups. In mid, {{champ:Ahri}} and {{champ:Malzahar}} are classic safe picks. In bot, long-range marksmen like {{champ:Caitlyn}} and {{champ:Jhin}} rarely get bullied out of lane.</p>" +
        "<p>If you pick late, you can look at your lane opponent and pick into them. You don't have to: a champion you know well is usually a better choice than a 'counter' you've barely played. The {{guide:counter-picking}} guide goes deeper.</p>" +
        "<p>Bot lane has an extra layer: the ADC and support pick as a pair. If your support picks first, they should choose something flexible, like a tank who works with most marksmen, and let the ADC react to the enemy bot lane. If you really want to counter pick but you're picking early, you can ask a later teammate to swap pick order with you. Many players are happy to help if you ask nicely.</p>"
    },
    {
      h: "Hover early and talk to your team",
      html: "<p><strong>Hovering</strong> means selecting a champion without locking it in. Your teammates can see your hover, so hover your intended pick as early as you can. It helps them plan bans and picks around you.</p>" +
        "<p>Short, friendly messages go a long way:</p>" +
        "<ul><li>\"I'll play Ahri, ban Katarina pls?\"</li><li>\"Can someone pick a tank? I can play Malzahar or Lux.\"</li><li>\"Last pick, what do we need?\"</li></ul>" +
        "{{tip:If you pick early, say which champions you're comfortable on. A late-picking teammate can then counter the enemy for you or fill a gap in the team.}}"
    },
    {
      h: "When someone takes your role",
      html: "<p>Sometimes a teammate asks for your role, or picks a champion for your lane. Stay calm: arguing in champ select almost always ends in a loss.</p>" +
        "<ul><li>Ask politely which role they were assigned. Often it's a simple misunderstanding.</li>" +
        "<li>If you can play their role, a swap is fine. Remember that role quests come from your assigned position, so only trade roles if you both really want to.</li>" +
        "<li>If they refuse and you can't play anything else, pick the safest champion you have and play for the team.</li></ul>" +
        "<p>Never respond by picking a champion just to 'troll' them. Two players ruining the game is worse than one.</p>"
    },
    {
      h: "Build a small champion pool",
      html: "<p>You don't need to know 50 champions. A small pool for your main role is enough to climb:</p>" +
        "<ul><li><strong>One safe blind pick</strong> you can play into anything (for example {{champ:Ahri}} mid or {{champ:Caitlyn}} bot).</li>" +
        "<li><strong>One or two champions for specific situations</strong>, like {{champ:Malzahar}} into assassins, or {{champ:Ziggs}} when your team needs poke and turret pressure.</li>" +
        "<li><strong>Something for your secondary role</strong>, in case you get it.</li></ul>" +
        "<p>Practice your picks in different situations with the <a href=\"#/tools/draft-practice\">Draft Practice tool</a>.</p>"
    },
    {
      h: "Should you dodge?",
      html: "<p>Leaving champ select (\"dodging\") costs you some LP and makes you wait before you can queue again, and the penalty grows if you dodge repeatedly. Only dodge when a game is clearly lost before it starts: a teammate who says they'll throw the game on purpose, or a team with no chance to work together. Don't dodge just because you got your second role or a teammate picked something you don't like.</p>"
    }
  ],
  takeaways: [
    "Ranked picks go 1-2-2-2-2-1. Early picks blind pick, late picks can counter pick.",
    "Ban what counters your main or what you don't understand, never a teammate's hover.",
    "Pick safe champions when you pick early, and a comfortable champion beats an unfamiliar counter.",
    "Hover early and tell your team what you can play.",
    "A small pool (a safe blind pick plus one or two situational picks) is enough to climb."
  ],
  related: ["counter-picking", "reading-the-enemy-team", "team-synergy", "win-conditions"],
  quiz: [
    {
      q: "You're the first pick on your team and you play mid. Nobody on the enemy team has picked yet. What kind of champion should you choose?",
      options: ["A niche counter pick", "A safe champion with few bad matchups", "Whatever is banned least often", "The champion your lane opponent mained last game"],
      answer: 1,
      explain: "As a first pick you're blind picking. A safe champion like Ahri or Malzahar won't get hard countered by whatever the enemy picks later."
    },
    {
      q: "A teammate is hovering Ahri. You were planning to ban Ahri because she's strong this patch. What should you do?",
      options: ["Ban Ahri anyway, it's your ban", "Ban something else", "Dodge the game", "Pick Ahri before them"],
      answer: 1,
      explain: "Banning a teammate's hover starts the game on a bad note and takes away their best champion. Use your ban on another threat."
    },
    {
      q: "You're the last pick and the enemy mid is locked in. You've played 300 games of Lux and 3 games of the champion that 'counters' their mid. What's usually the better choice?",
      options: ["The counter, because counters always win", "Lux, because you know her very well", "A random champion you've never played", "Dodge"],
      answer: 1,
      explain: "Experience is worth a lot. A champion you've played hundreds of times usually beats a counter pick you barely know."
    }
  ]
});

/* ---------- 2. Reading the enemy team (intermediate) ---------- */
RA.guides.push({
  id: "reading-the-enemy-team",
  title: "Reading the Enemy Team: Pick and Build Against It",
  level: "intermediate",
  category: "draft",
  minutes: 9,
  summary: "Spot what the enemy team wants to do, then choose a champion and items that shut it down: armor or magic resist, anti-heal, tank shredding, and answers to dive, poke and crowd control.",
  sections: [
    {
      h: "Look before you lock in",
      html: "<p>Every enemy team has a plan, whether they know it or not. Before you lock in (and every time you back to shop) ask four questions:</p>" +
        "<ol><li><strong>What damage do they deal?</strong> Mostly physical (AD), mostly magic (AP), or a mix?</li>" +
        "<li><strong>How do they start fights?</strong> Hard engage, poke from range, assassins who jump on one target?</li>" +
        "<li><strong>How tanky are they?</strong> Count the tanks and bruisers.</li>" +
        "<li><strong>Who heals?</strong> Healing supports, life-steal bruisers and drain tanks all need anti-heal.</li></ol>" +
        "<p>The answers decide what you should pick if you're picking late, and what you should build no matter when you picked.</p>"
    },
    {
      h: "Heavy AD or heavy AP",
      html: "<p>When most of the enemy damage is one type, defensive stats against it become extremely efficient.</p>" +
        "<table><tr><th>Enemy team</th><th>Pick ideas</th><th>Build ideas</th></tr>" +
        "<tr><td>4-5 AD champions</td><td>Champions with armor or self-protection; AP damage so they can't stack armor against you too</td><td>{{item:Plated Steelcaps}}, {{item:Frozen Heart}}, {{item:Randuin's Omen}}, {{item:Zhonya's Hourglass}} (mages), {{item:Death's Dance}} (AD)</td></tr>" +
        "<tr><td>4-5 AP champions</td><td>Champions with magic resist or shields; AD damage to diversify</td><td>{{item:Mercury's Treads}}, {{item:Force of Nature}}, {{item:Kaenic Rookern}}, {{item:Banshee's Veil}} (mages), {{item:Maw of Malmortius}}, {{item:Wit's End}} (AD)</td></tr></table>" +
        "{{tip:Boots are your cheapest answer. Plated Steelcaps against a team of AD auto-attackers, or Mercury's Treads against magic damage and crowd control, can change a whole lane.}}"
    },
    {
      h: "Tanks and assassins",
      html: "<p><strong>Against tanks</strong>, pick and build damage that scales with their health. {{champ:Vayne}}'s Silver Bolts deal a percentage of max health as true damage, {{item:Liandry's Torment}} burns high-health targets, and armor or magic penetration ({{item:Lord Dominik's Regards}}, {{item:Black Cleaver}}, {{item:Void Staff}}) stops them from out-scaling your damage. Avoid all-burst picks if the enemy has three or four tanks: your combo won't kill anyone.</p>" +
        "<p><strong>Against assassins</strong> like {{champ:Zed}}, {{champ:Talon}} or {{champ:Katarina}}, pick crowd control and self-protection. {{champ:Malzahar}}'s passive blocks burst and his ultimate suppresses a diving assassin, {{champ:Lux}} has a bind and a shield, {{champ:Annie}} has an instant stun and {{champ:Veigar}}'s cage stops dives. Then build to survive the burst: {{item:Zhonya's Hourglass}} and {{item:Banshee's Veil}} for mages, {{item:Guardian Angel}} or {{item:Immortal Shieldbow}} for marksmen.</p>"
    },
    {
      h: "Poke, dive and healing",
      html: "<p><strong>Poke teams</strong> (think {{champ:Xerath}}, {{champ:Jayce}}, {{champ:Ziggs}}) want to chip you down before fights. Answer them with hard engage that forces a fight ({{champ:Malphite}}, {{champ:Leona}}) or with champions that heal and sustain. Never stand in a long line under their tower waiting.</p>" +
        "<p><strong>Dive teams</strong> ({{champ:JarvanIV}}, {{champ:Diana}}, {{champ:Leona}}) jump onto your backline. Pick mobility ({{champ:Ezreal}}'s Arcane Shift) and peel ({{champ:Janna}}, {{champ:Lulu}}), and keep your carries close to the frontline.</p>" +
        "<p><strong>Healing teams</strong> ({{champ:Soraka}}, {{champ:Vladimir}}, {{champ:Aatrox}}, {{champ:Warwick}}, {{champ:DrMundo}}) need <strong>Grievous Wounds</strong>, an effect that cuts healing. Cheap components give it early: {{item:Executioner's Calling}} (AD), {{item:Oblivion Orb}} (AP) and {{item:Bramble Vest}} (tanks). Full items: {{item:Mortal Reminder}}, {{item:Chempunk Chainsword}}, {{item:Morellonomicon}} and {{item:Thornmail}}.</p>" +
        "{{warn:Don't wait until your fifth item to buy anti-heal against a healing lane. Buy the cheap component early when the healing is winning you the lane, then finish it later.}}"
    },
    {
      h: "Crowd control, split pushers and hyper-carries",
      html: "<ul><li><strong>Lots of crowd control</strong> ({{champ:Leona}}, {{champ:Amumu}}, {{champ:Morgana}}, {{champ:Malzahar}}): {{item:Mercury's Treads}} for tenacity, and {{item:Mercurial Scimitar}} or {{item:Quicksilver Sash}} to cleanse a key stun or suppression. Marksmen can take {{spell:Cleanse}}.</li>" +
        "<li><strong>A split pusher</strong> ({{champ:Fiora}}, {{champ:Tryndamere}}, {{champ:Jax}}): pick a mid with strong wave clear like {{champ:Ziggs}} or {{champ:Malzahar}}, so your team can hold side lanes, and force fights on the other side of the map. The {{guide:side-lanes}} guide explains how.</li>" +
        "<li><strong>Hyper-carries</strong> ({{champ:Kayle}}, {{champ:KogMaw}}, {{champ:Kassadin}}): they're weak early and monstrous late. Pick early-game champions ({{champ:Draven}}, {{champ:LeeSin}}), punish them in lane, and try to end before they scale.</li></ul>"
    },
    {
      h: "A quick example",
      html: "<p>Say you're the last pick mid. The enemy has {{champ:Malphite}} top, {{champ:Amumu}} jungle, {{champ:Katarina}} mid, {{champ:Jinx}} bot and {{champ:Leona}} support. Run the four questions:</p>" +
        "<ul><li><strong>Damage:</strong> mostly magic (Malphite, Amumu and Katarina), with Jinx as the only real physical threat.</li>" +
        "<li><strong>Engage:</strong> huge. Malphite, Amumu and Leona all have area crowd control, and Katarina resets through teamfights.</li>" +
        "<li><strong>Tankiness:</strong> two tanks and a tanky support.</li>" +
        "<li><strong>Healing:</strong> none worth buying anti-heal for.</li></ul>" +
        "<p>So you want a mid who survives being engaged on and punishes an assassin. {{champ:Malzahar}} fits: his passive blocks the first hit of an engage, his ultimate stops Katarina, and {{item:Liandry's Torment}} in his build burns down tanks. On the build side, {{item:Mercury's Treads}} against all that magic damage and crowd control, and {{item:Zhonya's Hourglass}} or {{item:Banshee's Veil}} for the moment Malphite flies in.</p>"
    },
    {
      h: "Your pick vs your build",
      html: "<p>Your pick is decided once. Your build adapts every time you shop. If you blind picked and the enemy team turned out to be four AD assassins, you can't change champion, but you can buy armor and {{item:Zhonya's Hourglass}}.</p>" +
        "<p>Every back, take three seconds to press <kbd>Tab</kbd> and look at the enemy items. A fed assassin, a healer or a stacking tank tells you what to buy next. See {{guide:items-and-gold}} for the basics of shopping.</p>" +
        "<p>Want to practice reading enemy teams? Try the <a href=\"#/tools/draft-practice\">Draft Practice tool</a>.</p>"
    }
  ],
  takeaways: [
    "Check enemy damage type, engage style, tankiness and healing before you lock in and every time you shop.",
    "Defense against one damage type is very efficient when the enemy team mostly deals that type.",
    "Against tanks, use percent-health damage and penetration; against assassins, pick CC and build to survive burst.",
    "Buy Grievous Wounds early against healing, starting with a cheap component.",
    "Your pick is fixed, but your build should change every game."
  ],
  related: ["team-synergy", "counter-picking", "items-and-gold", "teamfighting"],
  quiz: [
    {
      q: "The enemy team is Zed, Talon, Graves, Draven and Pyke: all AD. You're a mage. Which item is the best early defensive buy?",
      options: ["Banshee's Veil", "Zhonya's Hourglass", "Mercury's Treads", "Rabadon's Deathcap"],
      answer: 1,
      explain: "Zhonya's Hourglass gives armor and an active that makes you untargetable through an assassin's combo. Banshee's Veil and Mercury's Treads give magic resist, which does nothing against an all-AD team."
    },
    {
      q: "The enemy has Soraka support and Aatrox top. What should your team buy?",
      options: ["Grievous Wounds items like Mortal Reminder or Morellonomicon", "More health potions", "Only magic resist", "Nothing, healing doesn't matter"],
      answer: 0,
      explain: "Grievous Wounds cuts healing. Against Soraka's heals and Aatrox's drain, it's one of the most important buys in the game."
    },
    {
      q: "The enemy team has Ornn, Sejuani, Sion and Braum: four tanks. You're picking an ADC. Which champion is the best fit?",
      options: ["Vayne, with true damage based on max health", "Draven, for early lane kills", "Miss Fortune, for her ultimate", "Any ADC, it doesn't matter"],
      answer: 0,
      explain: "Vayne's Silver Bolts deal true damage based on the target's maximum health, so the tankier the enemy, the better she does."
    }
  ]
});

/* ---------- 3. Team synergy (intermediate) ---------- */
RA.guides.push({
  id: "team-synergy",
  title: "Team Synergy: Building a Comp That Works",
  level: "intermediate",
  category: "draft",
  minutes: 9,
  summary: "Five strong champions don't always make a strong team. Learn to balance damage types, frontline, engage, peel and wave clear, and how the main team composition types win.",
  sections: [
    {
      h: "Why your five picks matter together",
      html: "<p>A team of five carries with no tank gets run over. A team of five tanks can't kill anyone. Good teams cover the basics and share a plan. You don't need a perfect comp in solo queue, but filling one obvious gap in your team often matters more than picking the 'best' champion on the tier list.</p>" +
        "<p>The good news: you only need to check a few things. That's what this guide is about.</p>"
    },
    {
      h: "Balance your damage",
      html: "<p>If your team deals only physical damage, the enemy builds armor and your damage melts away. The same is true for all-magic teams and magic resist. Aim for at least one or two strong sources of each damage type.</p>" +
        "<p>Mid lane is usually where this gets fixed. If your top, jungle and ADC are all AD, an AP mid like {{champ:Lux}}, {{champ:Syndra}} or {{champ:Ahri}} keeps the enemy from stacking armor. If your team already has lots of magic damage, an AD mid like {{champ:Yasuo}} balances it out.</p>" +
        "{{tip:Hovering helps here too. If you see three AD champions locked on your team, tell them you'll go AP mid before the last picks happen.}}"
    },
    {
      h: "Frontline, engage and peel",
      html: "<p>Most winning teams have someone in each of these jobs. One champion can do two of them.</p>" +
        "<table><tr><th>Job</th><th>What it means</th><th>Examples</th><th>Without it</th></tr>" +
        "<tr><td>Frontline</td><td>Stands in front and absorbs damage</td><td>{{champ:Ornn}}, {{champ:Sejuani}}, {{champ:Malphite}}, {{champ:Braum}}</td><td>Your carries get hit first and die</td></tr>" +
        "<tr><td>Engage</td><td>Starts fights on your terms</td><td>{{champ:Leona}}, {{champ:Malphite}}, {{champ:JarvanIV}}, {{champ:Orianna}}</td><td>You can't force a fight when you're ahead</td></tr>" +
        "<tr><td>Peel</td><td>Protects your carries from divers</td><td>{{champ:Janna}}, {{champ:Lulu}}, {{champ:Braum}}</td><td>Assassins and divers kill your damage dealers</td></tr>" +
        "<tr><td>Wave clear</td><td>Kills minion waves quickly, from range</td><td>{{champ:Ziggs}}, {{champ:Malzahar}}, {{champ:Jinx}}</td><td>You can't defend towers or siege safely</td></tr></table>"
    },
    {
      h: "Early game vs late game",
      html: "<p>Some champions are strongest early ({{champ:Draven}}, {{champ:LeeSin}}, {{champ:Renekton}}), others scale into late-game monsters ({{champ:Kayle}}, {{champ:Kassadin}}, {{champ:Smolder}}). Neither is wrong, but your team needs to know which plan it's on.</p>" +
        "<ul><li><strong>Early-game team:</strong> fight for every early objective, dive, take towers, and end before 30 minutes.</li>" +
        "<li><strong>Scaling team:</strong> farm safely, trade objectives instead of contesting bad fights, and win late.</li>" +
        "<li><strong>Mixed:</strong> the early champions create space while the scalers farm.</li></ul>" +
        "{{warn:A team of five late-game champions can fall too far behind to ever reach the late game. If your team is all scaling, a safe early-game pick (or at least a good laner) helps you survive.}}"
    },
    {
      h: "The main comp types",
      html: "<table><tr><th>Comp</th><th>How it wins</th><th>Example pieces</th></tr>" +
        "<tr><td>Engage / teamfight</td><td>Big area crowd control into big area damage</td><td>{{champ:Malphite}} + {{champ:Orianna}} + {{champ:MissFortune}}</td></tr>" +
        "<tr><td>Poke</td><td>Chips enemies down from range before fights or sieges</td><td>{{champ:Ziggs}} + {{champ:Jayce}} + {{champ:Ezreal}} + {{champ:Karma}}</td></tr>" +
        "<tr><td>Pick</td><td>Catches one enemy out of position, then takes objectives 5v4</td><td>{{champ:Ahri}} + {{champ:Blitzcrank}} + {{champ:Ashe}}</td></tr>" +
        "<tr><td>Protect the carry</td><td>Keeps one hyper-carry alive while it destroys everything</td><td>{{champ:Jinx}} + {{champ:Lulu}} + {{champ:Braum}}</td></tr>" +
        "<tr><td>Split push</td><td>A strong duelist pressures a side lane while the team holds</td><td>{{champ:Fiora}} + {{champ:Ziggs}} + {{champ:Janna}}</td></tr></table>" +
        "<p>Once you know your comp type, the {{guide:win-conditions}} guide explains how to play it.</p>"
    },
    {
      h: "Checking what your team lacks",
      html: "<p>When you're picking in the second half of the draft, run this quick checklist:</p>" +
        "<ol><li>Who is our frontline?</li><li>Who starts fights?</li><li>Do we have both magic and physical damage?</li><li>Who clears waves and defends towers?</li><li>Are we an early or a late team?</li></ol>" +
        "<p>Then pick the champion <em>from your own pool</em> that fills the biggest gap. If your team has no AP, play your AP champion. If you're a support and there's no frontline, pick an engage tank over an enchanter.</p>"
    },
    {
      h: "Example: fixing a draft",
      html: "<p>Your team picked {{champ:Jayce}} top, {{champ:Kindred}} jungle and {{champ:Ezreal}} bot, and you're picking mid, with your support last. Run the checklist:</p>" +
        "<ul><li><strong>Frontline:</strong> none so far. Your support should probably be a tank.</li>" +
        "<li><strong>Engage:</strong> none. Again, the support can fix this.</li>" +
        "<li><strong>Damage:</strong> all physical. This is the gap you can fill.</li>" +
        "<li><strong>Wave clear and range:</strong> Jayce and Ezreal already poke from long range.</li></ul>" +
        "<p>The team is leaning toward poke, so a long-range AP mid like {{champ:Ziggs}} or {{champ:Lux}} adds magic damage and fits the plan. Then tell your support: \"We have no frontline, can you play a tank or an engage support?\" With {{champ:Leona}} or {{champ:Braum}} added, you have a poke comp with someone to stand in front, a much better draft than five squishy champions.</p>" +
        "{{tip:You don't need to be the last pick to fix a draft. Say what the team is missing in chat early, and the players after you can fill it.}}"
    }
  ],
  takeaways: [
    "Have at least one or two strong sources of both magic and physical damage.",
    "Check your team for frontline, engage, peel and wave clear.",
    "Know whether your team wins early or late, and play to that plan.",
    "Learn the comp types (engage, poke, pick, protect, split push) and how each one wins.",
    "When picking late, fill your team's biggest gap with a champion you know."
  ],
  related: ["reading-the-enemy-team", "win-conditions", "teamfighting", "counter-picking"],
  quiz: [
    {
      q: "Your team has Darius top, Lee Sin jungle, Draven bot and Pyke support. You're mid. What should you pick?",
      options: ["Another AD champion", "An AP champion like Lux or Syndra", "A second support", "It doesn't matter"],
      answer: 1,
      explain: "Your team is all physical damage. An AP mid stops the enemy from just stacking armor and shutting you down."
    },
    {
      q: "Your team: Fiora top, Kindred jungle, Syndra mid, Jinx bot. You're support. What does your team lack most?",
      options: ["Magic damage", "A frontline and engage", "Wave clear", "A split pusher"],
      answer: 1,
      explain: "Nobody on that team can stand in front or start a fight. A tanky engage support like Leona fills that gap."
    },
    {
      q: "Your team is Malphite, Jarvan IV and Miss Fortune. Which mid fits the plan best?",
      options: ["Orianna", "Ziggs", "Veigar", "Yasuo"],
      answer: 0,
      explain: "That's a teamfight comp built on big area crowd control. Orianna's Shockwave stacks with Malphite and Jarvan IV's engage and sets up Miss Fortune's Bullet Time."
    }
  ]
});

/* ---------- 4. Counter-picking (advanced) ---------- */
RA.guides.push({
  id: "counter-picking",
  title: "Counter-Picking: When and How to Pick Into Someone",
  level: "advanced",
  category: "draft",
  minutes: 9,
  summary: "Counter picks win lanes when they're used well and lose games when they're not. Learn what makes a counter, when comfort beats it, and how to use a last pick for the whole team.",
  sections: [
    {
      h: "What a counter pick really is",
      html: "<p>A counter isn't magic. A champion counters another when something in its kit removes the opponent's way of winning. Usually that's one of four things:</p>" +
        "<table><tr><th>Advantage</th><th>How it works</th><th>Example</th></tr>" +
        "<tr><td>Range</td><td>You hit them from a distance they can't answer</td><td>{{champ:Caitlyn}} bullies short-range {{champ:Vayne}}</td></tr>" +
        "<tr><td>Hard lockdown</td><td>Your crowd control shuts down their all-in or their escape</td><td>{{champ:Yasuo}}'s Wind Wall can't block {{champ:Malzahar}}'s ultimate, which locks him down</td></tr>" +
        "<tr><td>Mobility</td><td>You dodge the skill shots they depend on</td><td>{{champ:Ahri}}'s Spirit Rush against immobile, skill-shot mages</td></tr>" +
        "<tr><td>All-in power</td><td>You win the fight once it starts, before they scale</td><td>{{champ:Kaisa}} with an engage support against {{champ:Caitlyn}}</td></tr></table>" +
        "<p>Every champion guide on this site lists tough and favorable matchups, based on current ranked data. Use them as a starting point.</p>"
    },
    {
      h: "Counter pick vs comfort",
      html: "<p>Matchup charts assume both players know their champions. In real games, experience often matters more than the matchup. A champion you've played hundreds of times, where you know every power spike and cooldown, will often beat a 'counter' you've played five times.</p>" +
        "<p>A simple rule: <strong>only counter-pick with champions already in your pool.</strong> If your pool is {{champ:Ahri}}, {{champ:Malzahar}} and {{champ:Lux}}, your counter-pick decision is just: which of these three is best into this opponent?</p>" +
        "{{tip:Build your pool so your champions cover each other's weaknesses. Ahri struggles into Katarina; Malzahar (whose passive blocks burst and whose ultimate stops her) handles assassins better. Two champions that cover each other are better than five random ones.}}"
    },
    {
      h: "When not to counter-pick",
      html: "<ul><li><strong>When it breaks your team.</strong> Countering the enemy mid with an AD champion is a bad trade if your team is already all AD.</li>" +
        "<li><strong>When the opponent can swap lanes.</strong> Flex picks like {{champ:Ziggs}} (mid or bot) can change lanes after you counter them.</li>" +
        "<li><strong>When the 'counter' is weak this patch.</strong> Winning lane with a champion that falls off can still lose you the game.</li>" +
        "<li><strong>When you'd lose to the enemy's jungler.</strong> A short-range counter into an aggressive gank jungler might never get to play its lane.</li></ul>" +
        "{{warn:Don't lock in a counter you've never played in ranked. Learn it in normal games first, or you'll lose the matchup you were trying to win.}}"
    },
    {
      h: "Reading the enemy's draft",
      html: "<p>Pay attention to what the enemy picks early. A first pick that's a flex champion, like {{champ:Ziggs}} (mid or bot), or a champion that can go top or jungle, means you don't know their lane yet. Wait to counter until you're sure, or pick something that's fine against both options.</p>" +
        "<p>Also watch the enemy's hovers and bans. If the enemy bans {{champ:Malzahar}} and {{champ:Annie}}, their mid probably plays an assassin who hates crowd control. You can plan your pick before they even lock in.</p>" +
        "<p>Finally, think about the enemy jungler. If they picked an early-game ganker like {{champ:LeeSin}} or {{champ:Elise}}, a lane counter with no escape can be a trap: you win the 1v1 but lose to the 2v1. A safer pick with an escape might be better.</p>"
    },
    {
      h: "Making the most of last pick",
      html: "<p>Last pick is a big advantage, and it's about more than your lane. You can see four enemy champions, often all five, so you can:</p>" +
        "<ol><li><strong>Counter your lane</strong> with the best option from your pool.</li>" +
        "<li><strong>Fill your team's gaps.</strong> No frontline? No magic damage? The last pick fixes it. See {{guide:team-synergy}}.</li>" +
        "<li><strong>Answer the enemy plan.</strong> Against three assassins, pick crowd control and self-peel. Against a scaling comp, pick something that wins early. See {{guide:reading-the-enemy-team}}.</li></ol>" +
        "<p>If you pick early, ask your last-pick teammates to cover what you can't.</p>"
    },
    {
      h: "Synergy in bot lane and with your jungler",
      html: "<p>Bot lane is a 2v2, so the support and ADC picks work together. An engage support like {{champ:Nautilus}}, {{champ:Rell}} or {{champ:Alistar}} pairs well with an ADC who can follow up: {{champ:Kaisa}}'s passive even stacks faster when allies immobilize enemies, and her ultimate dashes straight onto them. An enchanter like {{champ:Lulu}} or {{champ:Janna}} wants a hyper-carry like {{champ:Jinx}} to protect.</p>" +
        "<p>Mid and jungle work together too. A mid with fast wave clear (like {{champ:Ziggs}} or {{champ:Malzahar}}) can push and move first to help the jungler invade or fight for scuttle and drakes. If your jungler is an early-game champion, pick a mid who can join those fights.</p>"
    },
    {
      h: "Practice your drafting",
      html: "<p>Drafting is a skill like last-hitting: the more situations you've thought through, the faster and better your picks become. Before your next session:</p>" +
        "<ul><li>Read the <strong>When to pick</strong> box and the matchups tab on each champion in your pool.</li>" +
        "<li>Write down your one blind pick and which champion you play into assassins, poke and tanks.</li>" +
        "<li>Test yourself with real scenarios in the <a href=\"#/tools/draft-practice\">Draft Practice tool</a>.</li></ul>" +
        "<p>Then use what you learned in lane with the {{guide:matchups-and-cooldowns}} guide.</p>"
    }
  ],
  takeaways: [
    "Counters come from range, lockdown, mobility or all-in power that removes the opponent's plan.",
    "Only counter-pick with champions you already know well.",
    "Don't counter-pick if it breaks your team's damage balance or leaves you open to flex picks and ganks.",
    "Last pick can counter a lane, fill team gaps and answer the enemy plan, all at once.",
    "In bot lane, pick a duo that works together: engage with follow-up, or an enchanter with a hyper-carry."
  ],
  related: ["champ-select-basics", "reading-the-enemy-team", "team-synergy", "matchups-and-cooldowns"],
  quiz: [
    {
      q: "You're the last pick mid. The enemy mid is Yasuo, and your pool is Malzahar, Ziggs and Lux. Which is the best pick?",
      options: ["Malzahar", "Ziggs", "Lux"],
      answer: 0,
      explain: "Malzahar's ultimate can't be blocked by Wind Wall and locks Yasuo down, and his passive blunts Yasuo's damage. Ziggs and Lux rely on projectiles that Wind Wall blocks."
    },
    {
      q: "Your support locked in Nautilus. The enemy bot lane is Caitlyn and Lux. Which ADC pairs best with your support?",
      options: ["Kai'Sa", "Smolder", "Ezreal", "Ziggs"],
      answer: 0,
      explain: "Kai'Sa follows Nautilus's hooks with her ultimate dash, her passive stacks faster off his crowd control, and she wins all-ins against an immobile Caitlyn."
    },
    {
      q: "Your team is already all AD. The champion that counters the enemy mid best is also AD. What's the smart move?",
      options: ["Pick the AD counter anyway", "Pick a strong AP champion from your pool instead", "Pick a support mid", "Ask a teammate to switch to AP mid-game"],
      answer: 1,
      explain: "Winning lane doesn't help if the enemy can stack armor against your whole team. Damage balance wins more games than one lane matchup."
    }
  ]
});
