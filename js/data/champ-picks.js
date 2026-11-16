window.RA = window.RA || {};
/* "When to pick" boxes and per-champion pick quizzes. Shape: docs/content-format.md (Per-champion picks). */
RA.champPicks = RA.champPicks || {};

/* ---------------- MID ---------------- */

RA.champPicks.Ahri = {
  blind: { safe: true, why: "Yes. Three dashes and a long-range Charm make her playable into almost any mid, so she's a great first pick." },
  into: [
    "Immobile mages who can't escape a Charm, like {{champ:Xerath}}, {{champ:Velkoz}} and {{champ:Ryze}}",
    "Squishy backlines she can pick off with Charm + Spirit Rush, like {{champ:Jinx}} or {{champ:Lux}}",
    "Teams that rely on dashes: Charm cancels them, so {{champ:Yasuo}} or {{champ:Kaisa}} get stopped mid-dash",
    "Slow, grouped compositions where she can roam and find picks before fights start"
  ],
  avoid: [
    "Hard-hitting assassins who out-burst her, like {{champ:Katarina}} and {{champ:Diana}}",
    "Very tanky teams with lots of health: she wants squishy targets",
    "Teams with lots of point-and-click crowd control that pins her before she can dash, like {{champ:Malzahar}} + {{champ:Leona}}"
  ],
  teammates: [
    { id: "Vi", why: "Vi's point-and-click ultimate locks a target so Ahri's Charm and combo can't miss." },
    { id: "Nautilus", why: "Nautilus hooks and roots, giving Ahri easy follow-up on roams to bot lane." },
    { id: "JarvanIV", why: "Jarvan IV's Cataclysm traps enemies so Ahri can unload her full damage." }
  ],
  teamNeeds: "Pick Ahri when your team has a frontline to start fights, so she can flank and finish the squishies they reveal.",
  quiz: [
    { q: "The enemy team picks Xerath mid, Jinx bot and Lux support. Why is Ahri a strong pick here?", enemy: ["Xerath", "Jinx", "Lux"],
      options: ["They're all immobile squishies that Charm can catch", "They have no healing", "They're all melee", "She out-ranges Xerath"], answer: 0,
      explain: "Ahri thrives against squishy targets with no dashes: one Charm and Spirit Rush can delete any of them." },
    { q: "Which enemy mid is one of Ahri's toughest matchups?",
      options: ["Ryze", "Galio", "Katarina", "Orianna"], answer: 2,
      explain: "Katarina's resets and burst can out-damage Ahri, especially if Charm misses. Ryze, Galio and Orianna are favorable lanes." },
    { q: "Why is Ahri a safe blind pick?",
      options: ["She has the longest range of any mage", "Her three dashes and Charm let her handle most matchups", "She can't be ganked", "She counters every assassin"], answer: 1,
      explain: "Mobility plus a reliable crowd control spell means she's rarely hopeless in lane, even if she's counter-picked." }
  ]
};

RA.champPicks.Annie = {
  blind: { safe: false, why: "Risky. Her short range gets punished by long-range mages, so she's better picked after you see the enemy mid." },
  into: [
    "Melee mids and assassins who have to walk into her stun, like {{champ:Yasuo}}, {{champ:Talon}} and {{champ:Qiyana}}",
    "Scaling mages who are weak early, like {{champ:Ryze}}, {{champ:Azir}} and {{champ:Cassiopeia}}",
    "Teams that like to group up: a Tibbers stun on three or four people wins the fight",
    "Squishy carries she can burst before they react, like {{champ:Jinx}} or {{champ:Xerath}}"
  ],
  avoid: [
    "Long-range poke mages who hit her from outside her range, like {{champ:Zoe}} and {{champ:Velkoz}}",
    "Divers who are tanky enough to survive her burst, like {{champ:Diana}}",
    "Spread-out teams with lots of tanks where her single combo isn't enough",
    "Teams with Cleanse or Quicksilver on every carry"
  ],
  teammates: [
    { id: "Amumu", why: "Amumu's ultimate stuns the whole team so Tibbers lands on everyone." },
    { id: "Malphite", why: "Malphite's ultimate knocks the enemy team up in a clump, the perfect moment to flash in with Tibbers." },
    { id: "Leona", why: "Leona's chain of crowd control keeps targets still for Annie's flash-Tibbers combo." }
  ],
  teamNeeds: "Pick Annie when your team has other engage or wombo-combo ultimates, so her Tibbers stun can start or finish fights.",
  quiz: [
    { q: "The enemy has picked Zoe mid. Is Annie a good answer?", enemy: ["Zoe"],
      options: ["Yes, Annie counters every mage", "No, Zoe's long-range poke punishes Annie's short range", "Yes, Annie's stun goes through Zoe's E", "It doesn't matter"], answer: 1,
      explain: "Annie has a short range and no dash. Zoe can poke her from far away, so Annie struggles in that lane." },
    { q: "Which enemy team makes Annie's Tibbers stun most valuable?", enemy: ["Yasuo", "Yone", "Diana", "Samira", "Rakan"],
      options: ["A spread-out poke team", "A team of melee divers who group up to engage", "A split-push team", "A team with five tanks"], answer: 1,
      explain: "Melee divers have to clump up close to you. A flash-Tibbers stun hits all of them at once." },
    { q: "Annie wants teammates who...", options: ["Split push alone", "Have their own wombo-combo crowd control", "Only farm", "Never engage"], answer: 1,
      explain: "Annie's ultimate stuns a group, so allies like Amumu or Leona who lock enemies together make her fights unstoppable." }
  ]
};

RA.champPicks.Aurora = {
  blind: { safe: true, why: "Mostly. Her hops and invisibility keep her safe into most lanes, but avoid blind picking her into the few counters if your team has a last pick for mid." },
  into: [
    "Immobile scaling mages, like {{champ:Ryze}} and {{champ:Orianna}}, that she can trade with and roam away from",
    "Melee divers and skirmishers who get trapped in her ultimate zone, like {{champ:Irelia}} or {{champ:Yasuo}}",
    "Teams that chase hard: E hop and W invisibility make them waste their engage",
    "Grouped teams she can trap with Between Worlds"
  ],
  avoid: [
    "Long-range poke she can't reach, like {{champ:Zoe}}",
    "Burst assassins who kill her while W is down, like {{champ:Leblanc}} and {{champ:Katarina}}",
    "Teams with lots of point-and-click crowd control that stops her hops"
  ],
  teammates: [
    { id: "Sejuani", why: "Sejuani's engage starts fights inside Aurora's ultimate zone." },
    { id: "Rell", why: "Rell pulls enemies together so Aurora's ultimate traps more of them." },
    { id: "Vi", why: "Vi locks a target down so Aurora's Q curses always land." }
  ],
  teamNeeds: "Pick Aurora when your team can start fights, so she can follow up with her ultimate zone and hop around the edges.",
  quiz: [
    { q: "The enemy team has Irelia, Yasuo and Kaisa, all champions who dash in. What makes Aurora good here?", enemy: ["Irelia", "Yasuo", "Kaisa"],
      options: ["Her ultimate zone slows and traps divers, and she can teleport across it to escape", "She heals her whole team", "She has the longest range in the game", "She's immune to crowd control"], answer: 0,
      explain: "Between Worlds punishes champions who dive in, and her hops let her stay out of reach." },
    { q: "Which enemy mid is a hard matchup for Aurora?",
      options: ["Orianna", "Ryze", "Leblanc", "Galio"], answer: 2,
      explain: "LeBlanc's burst and mobility can kill Aurora when her W is on cooldown." },
    { q: "When is Aurora weakest?", options: ["When her W (Across the Veil) is on cooldown", "At level 6", "When she has a full item", "When she's near her tower"], answer: 0,
      explain: "W is her main escape. Without it, hard crowd control and burst can catch her." }
  ]
};

RA.champPicks.Lux = {
  blind: { safe: true, why: "Fairly safe. Her huge range lets her farm from a distance, but assassins can punish her if your jungler doesn't help." },
  into: [
    "Short-range melee mids she can poke from far away, like {{champ:Irelia}} and {{champ:Yasuo}}",
    "Immobile scaling mages, like {{champ:Azir}} and {{champ:Cassiopeia}}, who can't avoid her poke",
    "Slow teams that walk in straight lines: Light Binding catches them",
    "Passive teams that want to scale; her poke chips them before objectives"
  ],
  avoid: [
    "Assassins and divers who reach her quickly, like {{champ:Diana}}, {{champ:Zed}} and {{champ:Fizz}}",
    "Long-range champions who can trade back, like {{champ:Vladimir}} who sustains through poke",
    "Teams with lots of dashes that dodge her skill shots easily"
  ],
  teammates: [
    { id: "Leona", why: "Leona's stuns keep enemies still so Lux's binding and Final Spark always hit." },
    { id: "Amumu", why: "Amumu's ultimate stuns a group for a free Final Spark." },
    { id: "Malphite", why: "Malphite's Unstoppable Force knocks up enemies in a line, perfect for Final Spark." }
  ],
  teamNeeds: "Pick Lux when your team has a frontline to keep assassins away from her, so she can stay back and poke.",
  quiz: [
    { q: "The enemy has picked Zed mid and Kha'Zix jungle. Is Lux a good pick?", enemy: ["Zed", "Khazix"],
      options: ["Yes, Lux has no counters", "Risky: she has no dash, and assassins can reach her", "Yes, Lux is tanky", "Yes, her shield blocks all damage"], answer: 1,
      explain: "Lux has no dash. If Light Binding misses, assassins like Zed can reach her and kill her." },
    { q: "Which enemy mid does Lux do well against?",
      options: ["Diana", "Vladimir", "Irelia", "Twisted Fate"], answer: 2,
      explain: "Irelia is melee, so Lux can poke her from far outside her range. Diana, Vladimir and Twisted Fate are tough matchups." },
    { q: "Which ally makes Lux's Final Spark easiest to land?", ally: ["Amumu"],
      options: ["A split pusher", "Amumu, whose ultimate stuns the enemy team", "A champion with no crowd control", "Another long-range poke mage"], answer: 1,
      explain: "Final Spark is a delayed beam. Allies who stun enemies in place make it land every time." }
  ]
};

RA.champPicks.Malzahar = {
  blind: { safe: true, why: "Yes. His passive shield and easy wave clear make his lane safe, and his ultimate is useful into any team." },
  into: [
    "Assassins and divers he can lock down with Nether Grasp, like {{champ:Zed}}, {{champ:Qiyana}} and {{champ:Talon}}",
    "Mobile champions with dashes: his suppression can't be dodged, so {{champ:Yasuo}} and {{champ:Kaisa}} get caught",
    "Long-range poke mids like {{champ:Zoe}}, whose damage gets soaked by Void Shift",
    "Teams with one main carry you need to shut down"
  ],
  avoid: [
    "Tanky divers who don't care about his suppression, like {{champ:Sion}}",
    "Dive assassins who break his passive and kill him first, like {{champ:Fizz}} and {{champ:Diana}}",
    "Teams that build Quicksilver effects or have lots of Cleanse"
  ],
  teammates: [
    { id: "JarvanIV", why: "Jarvan's Cataclysm traps enemies so Malzahar's zone and W damage stack up." },
    { id: "Vi", why: "Vi and Malzahar both lock one target for a guaranteed kill." },
    { id: "Nautilus", why: "Nautilus adds even more crowd control for picks." }
  ],
  teamNeeds: "Pick Malzahar when your team has damage to follow up on his ultimate, because he suppresses but doesn't kill alone.",
  quiz: [
    { q: "The enemy team has Zed mid and Kaisa bot. Why is Malzahar a good pick?", enemy: ["Zed", "Kaisa"],
      options: ["Nether Grasp can't be dodged and stops their all-ins", "He's the fastest champion", "He has three dashes", "He out-scales everyone"], answer: 0,
      explain: "Mobile carries rely on dashing in. Malzahar's point-and-click suppression catches them no matter how slippery they are." },
    { q: "Which enemy item makes Malzahar's ultimate less reliable?",
      options: ["Mercurial Scimitar", "Infinity Edge", "Rabadon's Deathcap", "Doran's Ring"], answer: 0,
      explain: "Quicksilver effects like Mercurial Scimitar remove his suppression." },
    { q: "Which enemy mid is a hard matchup for Malzahar?",
      options: ["Zoe", "Qiyana", "Fizz", "Yasuo"], answer: 2,
      explain: "Fizz can break Malzahar's passive, dodge with his E, and burst him. Zoe, Qiyana and Yasuo are easier lanes." }
  ]
};

RA.champPicks.Orianna = {
  blind: { safe: true, why: "Yes. Her lane is safe and her poke is long-ranged, so she's rarely in a hopeless matchup." },
  into: [
    "Teams that group up and dive, like {{champ:Malphite}}, {{champ:Yasuo}} and {{champ:Diana}}: Shockwave pulls them together",
    "Immobile scaling mages, like {{champ:Cassiopeia}} and {{champ:Ryze}}, she can poke safely",
    "Front-to-back teamfight compositions where her ultimate decides fights",
    "Teams that rely on one carry she can protect with Command: Protect"
  ],
  avoid: [
    "Assassins who dive her while the ball is away, like {{champ:Ekko}} and {{champ:Leblanc}}",
    "Long-range scaling mages who out-poke her, like {{champ:AurelionSol}}",
    "Split-push teams that never group up for her ultimate"
  ],
  teammates: [
    { id: "Malphite", why: "Put the ball on Malphite with E, and his ultimate brings Shockwave right into the enemy team." },
    { id: "JarvanIV", why: "Jarvan dives in with the ball attached, then Orianna uses Shockwave." },
    { id: "Yasuo", why: "Shockwave knocks enemies into the air, which lets Yasuo use Last Breath." }
  ],
  teamNeeds: "Pick Orianna when your team has divers or tanks who can carry her ball into the enemy team.",
  quiz: [
    { q: "Your team has Malphite top and Jarvan IV jungle. Why is Orianna a great mid pick?", ally: ["Malphite", "JarvanIV"],
      options: ["She can put her ball on them and use Shockwave when they dive in", "She'll split push alone", "She steals their gold", "She doesn't need them"], answer: 0,
      explain: "Divers carry Orianna's ball into the enemy team, turning her ultimate into a team-wide pull." },
    { q: "The enemy drafts Ekko mid, LeBlanc top and Kha'Zix jungle. Why is that a problem for Orianna?", enemy: ["Ekko", "Leblanc", "Khazix"],
      options: ["They're slow tanks", "They're assassins who jump on her when the ball is away", "They have no damage", "They're all ranged"], answer: 1,
      explain: "Orianna has very little mobility. Assassins like Ekko or LeBlanc punish her when the ball isn't nearby." },
    { q: "Which ally lets Orianna turn her ultimate into a team-wide knock-up combo?",
      options: ["Yasuo", "Ezreal", "Soraka", "Teemo"], answer: 0,
      explain: "Shockwave knocks enemies up, and Yasuo's Last Breath works on knocked-up targets." }
  ]
};

RA.champPicks.Syndra = {
  blind: { safe: false, why: "Better picked later. She has no dash, so assassins like Fizz and Katarina punish a blind pick." },
  into: [
    "Immobile mages she out-trades with long-range poke, like {{champ:Cassiopeia}} and {{champ:Orianna}}",
    "Squishy carries she can one-shot with Unleashed Power, like {{champ:Jinx}} or {{champ:Xerath}}",
    "Divers who walk in a line toward her stun, like {{champ:Darius}} or {{champ:Garen}}",
    "Teams with one key carry you need to delete"
  ],
  avoid: [
    "Assassins who dodge her stun and jump on her, like {{champ:Fizz}}, {{champ:Katarina}} and {{champ:Ekko}}",
    "Very tanky teams where her single-target burst doesn't kill anyone",
    "Teams with lots of magic resist or Banshee's Veil"
  ],
  teammates: [
    { id: "Vi", why: "Vi locks a target in place so Syndra's spheres and stun hit." },
    { id: "Sejuani", why: "Sejuani's stuns give Syndra time to land her full combo." },
    { id: "Thresh", why: "Thresh's hook pulls a target in for Syndra's burst." }
  ],
  teamNeeds: "Pick Syndra when your team has a frontline and peel, so assassins can't jump on her.",
  quiz: [
    { q: "The enemy last-picked Fizz mid against your Syndra. What's the problem?", enemy: ["Fizz"],
      options: ["Fizz can dodge her combo with his E and jump on her", "Fizz out-ranges Syndra", "Fizz heals through her damage", "There's no problem"], answer: 0,
      explain: "Syndra has no dash. Fizz's E dodges her stun, and he can burst her before she reacts." },
    { q: "Why is Syndra great into a team with Jinx and Xerath?", enemy: ["Jinx", "Xerath"],
      options: ["She can one-shot squishy, immobile carries with her ultimate", "She heals them", "She's tanky", "They can't see her"], answer: 0,
      explain: "Unleashed Power deals huge single-target burst, perfect for deleting squishies with no escape." },
    { q: "Should you blind pick Syndra first in draft?",
      options: ["Yes, always", "Usually not: assassins can counter-pick her", "Only on bot lane", "Only with Smite"], answer: 1,
      explain: "Picking her later lets you avoid her counters, like Fizz or Katarina." }
  ]
};

RA.champPicks.Veigar = {
  blind: { safe: false, why: "Not ideal. He's weak early and many mages out-range him, so picking him after the enemy mid is safer." },
  into: [
    "Immobile mages who walk into his cage, like {{champ:Azir}} and {{champ:Galio}}",
    "Melee mids and divers who must walk through Event Horizon, like {{champ:Yasuo}} or {{champ:Irelia}}",
    "Slow, scaling games: the longer it goes, the bigger his AP stacks",
    "Teams with squishy carries he can one-shot late"
  ],
  avoid: [
    "Assassins who kill him before he stacks, like {{champ:Katarina}} and {{champ:Leblanc}}",
    "Long-range poke that keeps him from farming, like {{champ:Velkoz}}",
    "Fast-paced, early-game teams that end before he scales"
  ],
  teammates: [
    { id: "Leona", why: "Leona's stuns hold targets inside Event Horizon so Dark Matter lands." },
    { id: "Amumu", why: "Amumu stuns enemies, giving Veigar a free cage and combo." },
    { id: "Braum", why: "Braum's shield and stuns keep divers off Veigar while he scales." }
  ],
  teamNeeds: "Pick Veigar when your team can survive the early game and protect him while he scales.",
  quiz: [
    { q: "Your team has a lot of early-game champions and wants to end fast. Is Veigar a good fit?", ally: ["Draven", "LeeSin", "Renekton"],
      options: ["Yes, he's strongest early", "Not really: Veigar is weak early and wants a long game", "Yes, he ends games fastest", "It doesn't matter"], answer: 1,
      explain: "Veigar gains AP forever, so he shines late. An early-game team doesn't need his scaling." },
    { q: "The enemy team is Katarina mid, Kha'Zix jungle and Draven bot. Why is Veigar a risky pick?", enemy: ["Katarina", "Khazix", "Draven"],
      options: ["They're all tanks", "They're strong early and can kill him before he stacks AP", "They have no crowd control to stop", "They're all long range"], answer: 1,
      explain: "Veigar is weak early. Katarina's burst and an early snowball team can kill him before he scales." },
    { q: "Why is Veigar good against melee divers?",
      options: ["His cage stuns anyone who walks through it", "He has a dash", "He's very tanky", "He heals"], answer: 0,
      explain: "Divers must walk to him, so Event Horizon catches them for his burst." }
  ]
};

RA.champPicks.Yasuo = {
  blind: { safe: false, why: "No. He's melee and was nerfed this patch, so long-range mages and crowd-control mids punish a blind pick." },
  into: [
    "Projectile-heavy champions whose damage Wind Wall blocks, like {{champ:Ezreal}}, {{champ:Akshan}} and {{champ:Jinx}}",
    "Squishy mages who can't stop his dashes, if they lack hard crowd control",
    "Teams where your allies have knock-ups for Last Breath",
    "Late-game, crit-scaling games where he can carry"
  ],
  avoid: [
    "Point-and-click crowd control he can't Wind Wall, like {{champ:Lissandra}} and {{champ:Malzahar}}",
    "Long-range mages who out-range him, like {{champ:AurelionSol}}",
    "Sustain mages like {{champ:Vladimir}} who out-trade him",
    "Teams with lots of armor and crowd control"
  ],
  teammates: [
    { id: "Malphite", why: "Malphite's ultimate knocks up the whole team for a huge Last Breath." },
    { id: "Alistar", why: "Alistar's Pulverize knocks enemies up in an area." },
    { id: "Gragas", why: "Gragas's body slam and barrel knock enemies into the air for Yasuo." }
  ],
  teamNeeds: "Pick Yasuo when your team has knock-ups, so his ultimate has targets.",
  quiz: [
    { q: "Your team has Malphite and Alistar. Why is Yasuo a good mid pick?", ally: ["Malphite", "Alistar"],
      options: ["Their knock-ups let Yasuo use Last Breath", "They protect him from all damage", "They give him gold", "They split push"], answer: 0,
      explain: "Last Breath needs airborne enemies. Allies with knock-ups give him free ultimates." },
    { q: "The enemy has Lissandra mid. Why is Yasuo a risky pick?", enemy: ["Lissandra"],
      options: ["Her crowd control is mostly not projectiles, so Wind Wall can't block it", "She heals", "She's melee", "She has no crowd control"], answer: 0,
      explain: "Wind Wall only blocks projectiles. Lissandra's freezes still hit him." },
    { q: "Which enemy champions does Wind Wall do the most against?", enemy: ["Ezreal", "Jinx", "Caitlyn"],
      options: ["Projectile-based marksmen and mages", "Melee tanks", "Point-and-click champions", "Champions with true damage"], answer: 0,
      explain: "Wind Wall blocks all enemy projectiles, including basic attacks from ranged champions." }
  ]
};

RA.champPicks.Ziggs = {
  blind: { safe: true, why: "Mostly. Long range and fast wave clear make his lane safe mid or bot, but assassins can still reach him." },
  into: [
    "Slow, defensive teams: he takes towers quickly with Satchel Charge and poke",
    "Immobile champions he can poke from far away, like {{champ:Galio}} and short-range melee mids",
    "Low-range bot lanes he out-pokes and out-pushes",
    "Teams with weak wave clear that can't stop his siege"
  ],
  avoid: [
    "Assassins and divers who reach him, like {{champ:Katarina}}, {{champ:Leblanc}} and {{champ:Irelia}}",
    "All-in bot lanes with hard engage, like a {{champ:Draven}} + {{champ:Leona}}",
    "Teams that want short, close-range fights where poke matters less"
  ],
  teammates: [
    { id: "Lux", why: "A Lux support adds even more long-range poke for a siege composition." },
    { id: "Karma", why: "Karma's shields and speed help Ziggs poke safely." },
    { id: "Jayce", why: "Jayce adds long-range poke to a siege team (in flex picks)." }
  ],
  teamNeeds: "Pick Ziggs when your team wants to poke and siege towers, and has some peel to keep divers off him.",
  quiz: [
    { q: "Your team has Jayce top and Lux support. What kind of composition is Ziggs joining?", ally: ["Jayce", "Lux"],
      options: ["A poke and siege team", "An all-in dive team", "A split-push team", "A tank team"], answer: 0,
      explain: "Ziggs, Jayce and Lux all poke from far away and take towers before fights start." },
    { q: "The enemy drafts Katarina mid and Nocturne jungle. What's the danger for Ziggs?", enemy: ["Katarina", "Nocturne"],
      options: ["They out-range him", "They can jump on him and burst him before he escapes with Satchel Charge", "They heal through his poke", "There is none"], answer: 1,
      explain: "Ziggs's only escape is Satchel Charge. Assassins and dive junglers can reach him and burst him." },
    { q: "Why is Ziggs strong at taking turrets?",
      options: ["Satchel Charge can instantly destroy low-health turrets", "He has true damage on attacks", "He's immune to tower shots", "He builds tank items"], answer: 0,
      explain: "His W executes low-health turrets, and his poke keeps enemies from defending." }
  ]
};

/* ---------------- BOT ---------------- */

RA.champPicks.Ashe = {
  blind: { safe: true, why: "Yes. Her slows and long-range arrow are useful into any team, so she's a safe early pick." },
  into: [
    "Teams that need setting up: her arrow starts fights from far away",
    "Divers and melee champions she can kite with slows, like {{champ:Draven}} or {{champ:Lucian}}",
    "Poke-light teams that let her farm safely",
    "Low-range marksmen, like {{champ:Ezreal}}, whom she out-damages"
  ],
  avoid: [
    "Hyper-scaling marksmen who out-damage her late, like {{champ:Twitch}} and {{champ:KogMaw}}",
    "Assassins who reach her when her arrow is down",
    "All-in lanes with hard engage that catch her without a dash"
  ],
  teammates: [
    { id: "Seraphine", why: "Seraphine's poke and crowd control pair well with Ashe's slows." },
    { id: "Milio", why: "Milio gives her range and peel." },
    { id: "Senna", why: "Senna adds long-range damage and sustain." }
  ],
  teamNeeds: "Pick Ashe when your team needs engage or a way to start fights from range.",
  quiz: [
    { q: "Your team has no engage. Why is Ashe a good bot pick?", ally: ["Orianna", "Karma"],
      options: ["Enchanted Crystal Arrow can start fights from long range", "She has the most burst", "She's a tank", "She heals"], answer: 0,
      explain: "Ashe's arrow stuns from across the map, letting her team engage." },
    { q: "The enemy picks Kog'Maw bot with Lulu support. Why is that tough for Ashe?", enemy: ["KogMaw", "Lulu"],
      options: ["Kog'Maw is weak late", "Kog'Maw scales very hard and out-damages her in long fights", "Lulu has no shields", "Ashe out-ranges both"], answer: 1,
      explain: "Kog'Maw scales very hard and, with Lulu's buffs, out-damages Ashe in long fights." },
    { q: "Why is Ashe a safe blind pick?",
      options: ["Her slows and arrow are useful in any game", "She has three dashes", "She can't be ganked", "She's the strongest late"], answer: 0,
      explain: "Her utility helps every team, even if she isn't winning lane." }
  ]
};

RA.champPicks.Caitlyn = {
  blind: { safe: true, why: "Yes. Her huge range lets her farm safely and bully most lanes, so she's a solid blind pick." },
  into: [
    "Short-range marksmen she can bully, like {{champ:Vayne}} and {{champ:Ezreal}}",
    "Immobile teams that walk into her traps",
    "Games where you want to take plates and towers early",
    "Passive lanes that let her farm and push"
  ],
  avoid: [
    "Long-range lanes that trade back, like {{champ:Ziggs}} and {{champ:Jhin}}",
    "Hyper-scaling marksmen, like {{champ:KogMaw}}, who out-damage her late",
    "Teams with lots of dive and engage that reach her"
  ],
  teammates: [
    { id: "Nami", why: "Nami's bubble sets up traps and headshots." },
    { id: "Blitzcrank", why: "Blitzcrank's hook pulls a target onto a trap." },
    { id: "Thresh", why: "Thresh adds crowd control for traps and peel." }
  ],
  teamNeeds: "Pick Caitlyn when your team wants to win lane early and siege towers.",
  quiz: [
    { q: "The enemy picked Vayne bot. Why is Caitlyn a good answer?", enemy: ["Vayne"],
      options: ["Her huge range bullies Vayne's short range", "She heals more", "She's tankier", "She has more dashes"], answer: 0,
      explain: "Caitlyn out-ranges Vayne and can keep her from farming." },
    { q: "Which ally makes Caitlyn's traps easier to land?", ally: ["Blitzcrank"],
      options: ["Blitzcrank", "A split pusher", "An enchanter with no crowd control", "A jungler who never ganks"], answer: 0,
      explain: "Blitzcrank's hook pulls targets onto traps for empowered headshots." },
    { q: "Which enemy bot is tough for Caitlyn?",
      options: ["Ezreal", "Vayne", "Ziggs", "Yunara"], answer: 2,
      explain: "Ziggs out-pokes and out-pushes Caitlyn in lane." }
  ]
};

RA.champPicks.Draven = {
  blind: { safe: false, why: "Risky. He's strong in lane, but long-range or scaling lanes can punish him if he can't snowball." },
  into: [
    "Weak early marksmen he can kill in lane, like {{champ:Ezreal}} and {{champ:Kalista}}",
    "Passive supports that can't match his early damage",
    "Teams that want long games: he aims to end early",
    "Lanes where your jungler can help him snowball"
  ],
  avoid: [
    "Long-range poke lanes that keep him from catching axes, like {{champ:KogMaw}}",
    "Hyper-scaling marksmen he can't kill early, like {{champ:Smolder}}",
    "Teams with lots of crowd control and dive"
  ],
  teammates: [
    { id: "Janna", why: "Janna's peel and shields keep Draven safe while he catches axes." },
    { id: "Thresh", why: "Thresh's hook sets up Draven's early kills." },
    { id: "Blitzcrank", why: "Blitzcrank's hook gives Draven easy kills." }
  ],
  teamNeeds: "Pick Draven when your team wants to win early, so his snowball turns into objectives.",
  quiz: [
    { q: "The enemy picked Smolder bot. Why is Draven a decent answer?", enemy: ["Smolder"],
      options: ["He can kill Smolder early before he scales", "He out-scales Smolder", "He heals more", "He's tankier"], answer: 0,
      explain: "Draven's early damage can punish a weak-early scaling marksman." },
    { q: "Which enemy bot is tough for Draven?",
      options: ["Ezreal", "Kalista", "Kog'Maw", "Yunara"], answer: 2,
      explain: "Kog'Maw's range and scaling punish Draven." },
    { q: "Draven wants his team to...", options: ["Play for early fights and objectives", "Stall for 40 minutes", "Split push", "Never fight"], answer: 0,
      explain: "Draven snowballs with early kills and gold." }
  ]
};

RA.champPicks.Ezreal = {
  blind: { safe: true, why: "Yes. His blink and long-range poke let him survive almost any lane." },
  into: [
    "Teams with lots of dive: Arcane Shift keeps him safe",
    "Lanes where he can poke safely, like into {{champ:Caitlyn}} or {{champ:Corki}}",
    "Long games where he scales with items"
  ],
  avoid: [
    "Wind Wall champions who block his skill shots, like {{champ:Yasuo}}",
    "All-in lanes with hard crowd control that catch him",
    "Teams that need high damage from their ADC"
  ],
  teammates: [
    { id: "Leona", why: "Leona's engage helps Ezreal land his skill shots." },
    { id: "Senna", why: "Senna adds long-range damage." },
    { id: "Nami", why: "Nami's crowd control helps him hit skill shots." }
  ],
  teamNeeds: "Pick Ezreal when your team has other damage, so his safety and poke matter more than his raw output.",
  quiz: [
    { q: "The enemy has Yasuo mid. Why is that bad for Ezreal?", enemy: ["Yasuo"],
      options: ["Wind Wall blocks his skill shots", "Yasuo heals", "Yasuo out-ranges him", "There's no problem"], answer: 0,
      explain: "Ezreal's damage comes from projectiles that Wind Wall blocks." },
    { q: "Why is Ezreal a safe blind pick?",
      options: ["His blink keeps him alive in almost any lane", "He does the most damage", "He's tanky", "He can't be killed"], answer: 0,
      explain: "Arcane Shift on a short cooldown makes him hard to catch." },
    { q: "What's Ezreal's biggest weakness this patch?",
      options: ["Lower damage than most marksmen", "No escape", "Short range", "No poke"], answer: 0,
      explain: "He's safe, but his damage is lower, especially early." }
  ]
};

RA.champPicks.Jhin = {
  blind: { safe: true, why: "Mostly. His long range and burst let him play into most lanes, but divers punish his slow attacks." },
  into: [
    "Weak early marksmen he can burst, like {{champ:Ezreal}} and {{champ:Caitlyn}}",
    "Teams that need picks: his long-range root sets up kills",
    "Slow, immobile teams he can finish with Curtain Call"
  ],
  avoid: [
    "Divers who reach him during reloads, like {{champ:Yasuo}}",
    "Hyper-scaling marksmen who out-damage him late, like {{champ:KogMaw}} and {{champ:Twitch}}",
    "Long, drawn-out fights where his fixed attack speed falls behind"
  ],
  teammates: [
    { id: "Senna", why: "Senna adds long-range damage and roots." },
    { id: "Leona", why: "Leona's stuns set up Jhin's W root." },
    { id: "Alistar", why: "Alistar's crowd control helps Jhin land his burst." }
  ],
  teamNeeds: "Pick Jhin when your team can set up picks and protect him from divers.",
  quiz: [
    { q: "The enemy has Yasuo. Why is Jhin at risk?", enemy: ["Yasuo"],
      options: ["Wind Wall blocks his shots and Yasuo dives him during reloads", "Yasuo heals", "Yasuo out-ranges him", "There's no problem"], answer: 0,
      explain: "Jhin's slow attacks and reloads leave him open to divers." },
    { q: "Which ally helps Jhin root targets?",
      options: ["Leona", "Soraka", "Yuumi", "Teemo"], answer: 0,
      explain: "Leona's crowd control lets Jhin's W root targets." },
    { q: "What kind of enemy is easy for Jhin?",
      options: ["Weak early marksmen", "Hyper-scaling marksmen", "Divers", "Tanks"], answer: 0,
      explain: "Jhin's burst punishes weak early lanes." }
  ]
};

RA.champPicks.Jinx = {
  blind: { safe: true, why: "Fairly safe. She scales into any game, but needs a calm lane to get there." },
  into: [
    "Grouped teams where her rockets and resets shine",
    "Low-range marksmen she out-scales, like {{champ:Ezreal}} and {{champ:Kaisa}}",
    "Long games where she becomes a hyper-carry",
    "Teams with weak dive"
  ],
  avoid: [
    "Hyper-scaling lanes that match her, like {{champ:Twitch}} and {{champ:KogMaw}}",
    "Assassins and divers who reach her without a dash",
    "Early-game lane bullies that keep her from farming"
  ],
  teammates: [
    { id: "Braum", why: "Braum's shield and peel protect Jinx." },
    { id: "Blitzcrank", why: "Blitzcrank sets up kills for her." },
    { id: "Thresh", why: "Thresh gives her peel and engage." }
  ],
  teamNeeds: "Pick Jinx when your team can protect her from divers and play for late fights.",
  quiz: [
    { q: "Your team has strong peel. Why is Jinx a good pick?", ally: ["Braum", "Lulu"],
      options: ["She can carry late if divers can't reach her", "She's tanky", "She has dashes", "She heals"], answer: 0,
      explain: "Jinx is a hyper-carry who needs protection." },
    { q: "The enemy has Zed mid and Kha'Zix jungle. What does Jinx need from her team?", enemy: ["Zed", "Khazix"],
      options: ["Peel: crowd control and shields to keep assassins off her", "Nothing, she can duel them alone", "More poke", "A split pusher"], answer: 0,
      explain: "Jinx has no dash. Against assassins she needs teammates like Braum or Lulu to protect her." },
    { q: "When is Jinx strongest?",
      options: ["Late game", "Level 1", "Before first item", "Never"], answer: 0,
      explain: "Jinx scales into a hyper-carry." }
  ]
};

RA.champPicks.Kaisa = {
  blind: { safe: true, why: "Mostly. Her mobility and mixed damage fit most teams, but long-range lanes bully her early." },
  into: [
    "Immobile, squishy carries she can dive, like {{champ:Ezreal}} or {{champ:Jhin}}",
    "Teams with weak crowd control where she can dive freely",
    "Teams where your allies have crowd control to stack her Plasma"
  ],
  avoid: [
    "Lanes that punish her short range and dives, like {{champ:Xayah}} and {{champ:Zeri}}",
    "Teams with lots of crowd control and burst",
    "Hyper-scaling marksmen like {{champ:KogMaw}}"
  ],
  teammates: [
    { id: "Rell", why: "Rell's crowd control helps her dive." },
    { id: "Blitzcrank", why: "Blitzcrank pulls targets in for her." },
    { id: "Alistar", why: "Alistar's crowd control stacks her Plasma." }
  ],
  teamNeeds: "Pick Kai'Sa when your team has crowd control to set up her dives.",
  quiz: [
    { q: "Your team has Rell support. Why is Kai'Sa a good bot pick?", ally: ["Rell"],
      options: ["Rell's crowd control stacks Plasma and sets up dives", "Rell heals her", "Rell splits", "Rell has no crowd control"], answer: 0,
      explain: "Allies' immobilizing effects help Kai'Sa stack Plasma." },
    { q: "The enemy bot lane is Xayah + Rakan. Which statement is true for Kai'Sa?", enemy: ["Xayah", "Rakan"],
      options: ["It's an easy lane", "Xayah is one of her tough matchups", "Xayah can't fight back", "Rakan has no crowd control"], answer: 1,
      explain: "Xayah can counter Kai'Sa's dives, so play the lane carefully." },
    { q: "Why is Kai'Sa hard to itemize against?",
      options: ["She deals mixed physical and magic damage", "She's immune to damage", "She has no damage", "She's a tank"], answer: 0,
      explain: "Mixed damage makes armor or magic resist less effective." }
  ]
};

RA.champPicks.MissFortune = {
  blind: { safe: true, why: "Yes. She's easy to learn and strong in lane, but avoid her into heavy dive." },
  into: [
    "Grouped teams for her Bullet Time",
    "Short-range marksmen she bullies, like {{champ:Vayne}} and {{champ:Ezreal}}",
    "Teams with crowd control to set up her ultimate"
  ],
  avoid: [
    "Hyper-scaling marksmen, like {{champ:KogMaw}} and {{champ:Jinx}}, who out-damage her late",
    "Teams with lots of crowd control that interrupts Bullet Time",
    "Assassins who reach her without an escape"
  ],
  teammates: [
    { id: "Rell", why: "Rell groups enemies for Bullet Time." },
    { id: "Blitzcrank", why: "Blitzcrank sets up her kills." },
    { id: "Leona", why: "Leona keeps enemies still for Bullet Time." }
  ],
  teamNeeds: "Pick Miss Fortune when your team has crowd control to keep enemies in her ultimate.",
  quiz: [
    { q: "Your team has Amumu and Leona. Why is Miss Fortune a strong pick?", ally: ["Amumu", "Leona"],
      options: ["Their crowd control keeps enemies in Bullet Time", "They heal her", "They split push", "They have no crowd control"], answer: 0,
      explain: "Bullet Time deals huge damage to enemies who can't escape." },
    { q: "The enemy team has Malphite, Leona and Lissandra. Why is Miss Fortune riskier here?", enemy: ["Malphite", "Leona", "Lissandra"],
      options: ["Their crowd control can cancel Bullet Time", "They have no crowd control", "They're all long range", "They heal"], answer: 0,
      explain: "Bullet Time is a channel. Hard crowd control stops it, so she needs to ult from a safe angle." },
    { q: "What interrupts Bullet Time?",
      options: ["Any stun or knock-up", "A shield", "Healing", "Nothing"], answer: 0,
      explain: "Bullet Time is a channel, so crowd control cancels it." }
  ]
};

RA.champPicks.Smolder = {
  blind: { safe: true, why: "Mostly. His long range keeps him safe, but all-in lanes can punish his weak early game." },
  into: [
    "Passive lanes that let him stack, like {{champ:Ezreal}} and {{champ:Kalista}}",
    "Long games where he scales with Dragon Practice",
    "Grouped teams for his ultimate"
  ],
  avoid: [
    "All-in lanes with hard crowd control",
    "Hyper-scaling marksmen like {{champ:Twitch}} and {{champ:KogMaw}}",
    "Lane bullies like {{champ:MissFortune}} who keep him from stacking"
  ],
  teammates: [
    { id: "Thresh", why: "Thresh protects him while he stacks." },
    { id: "Leona", why: "Leona's engage helps him land abilities." },
    { id: "Nami", why: "Nami's sustain and crowd control help him scale." }
  ],
  teamNeeds: "Pick Smolder when your team can protect him early and play for a long game.",
  quiz: [
    { q: "The enemy picks Draven + Leona bot. Why is Smolder risky here?", enemy: ["Draven", "Leona"],
      options: ["He's weak early, and they want to all-in him", "They're weak early", "They have no crowd control", "They're tanky"], answer: 0,
      explain: "Smolder needs stacks to scale; an early all-in lane can kill him before he gets them." },
    { q: "Which enemy bot is tough for Smolder?",
      options: ["Ezreal", "Kalista", "Miss Fortune", "Vayne"], answer: 2,
      explain: "Miss Fortune's early trades keep him from stacking." },
    { q: "When is Smolder strongest?",
      options: ["Late game", "Level 1", "Before first item", "Never"], answer: 0,
      explain: "Smolder scales with Dragon Practice stacks." }
  ]
};

RA.champPicks.Vayne = {
  blind: { safe: false, why: "No. Her short range makes her easy to bully early, so pick her after seeing the enemy bot." },
  into: [
    "Tank-heavy teams: Silver Bolts deal true damage",
    "Melee divers she can condemn against walls",
    "Weak early lanes she can survive, like {{champ:Ezreal}} and {{champ:Kalista}}"
  ],
  avoid: [
    "Long-range lanes that bully her early, like {{champ:Caitlyn}}",
    "Teams with lots of crowd control and burst",
    "Strong early lanes like {{champ:MissFortune}} and {{champ:Samira}}"
  ],
  teammates: [
    { id: "Soraka", why: "Soraka's healing helps her survive early." },
    { id: "Nami", why: "Nami gives her sustain and crowd control." },
    { id: "Milio", why: "Milio gives her range and peel." }
  ],
  teamNeeds: "Pick Vayne when your team can protect her early and the enemy has tanks.",
  quiz: [
    { q: "The enemy has Ornn, Sion and Malphite. Why is Vayne strong here?", enemy: ["Ornn", "Sion", "Malphite"],
      options: ["Silver Bolts deal true damage that shreds tanks", "She's tanky", "She has crowd control", "She heals"], answer: 0,
      explain: "Vayne's true damage ignores armor, so tanks melt." },
    { q: "Which enemy bot is tough for Vayne early?",
      options: ["Ezreal", "Kalista", "Caitlyn", "Sivir"], answer: 2,
      explain: "Caitlyn's range bullies Vayne's short range." },
    { q: "Should you blind pick Vayne?",
      options: ["Usually not; she's easy to counter in lane", "Yes, always", "Only mid", "Only with Smite"], answer: 0,
      explain: "Vayne is easy to bully early, so pick her later." }
  ]
};
