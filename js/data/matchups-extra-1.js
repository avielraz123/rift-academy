/* Extra lane matchups, added to each guide's own list. Source and patch noted per key. */
window.RA = window.RA || {};
RA.matchupsExtra = RA.matchupsExtra || {};

RA.matchupsExtra["Ahri:mid"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Mel", wr: "49.1%", tip: "Her W (reworked in 26.22) no longer reflects: it destroys projectiles close to her, hits back and shields her. Don't throw your Orb or Charm into it at close range; wait out its long cooldown, and side-step her E root." },
    { id: "Vladimir", wr: "49.2%", tip: "His pool makes him untargetable, so Charm him right after he uses it. Push early and take plates before he scales into a teamfight monster." },
    { id: "Veigar", wr: "49.2%", tip: "Never Spirit Rush into his cage: walking through the edge stuns you. Bait his E first, and don't fight at low health while his ultimate is up." },
    { id: "Akshan", wr: "49.4%", tip: "He shoves fast and roams with his rope swing. Charm him when he swings in with E, and ping your team when he leaves lane." },
    { id: "Leblanc", wr: "49.5%", tip: "She bursts you before you can react. Hold Charm for when she dashes in with W, and keep Spirit Rush to break out of her chain." }
  ],
  easy: [
    { id: "Akali", wr: "54.3%", tip: "Hold Charm for when she dashes in with E or R; a charm mid-dash stops her cold. Walk out of her shroud instead of chasing into it." },
    { id: "Yone", wr: "53.6%", tip: "He has to walk close to hit you. Poke him with Q when he goes for last hits, and Charm him when he steps up for his stacked Q." },
    { id: "Irelia", wr: "53.7%", tip: "Stay out of the line between her two E blades. Charm her as she Bladesurges onto a minion near you, and don't fight inside a big wave she can reset Q on." },
    { id: "Azir", wr: "53.6%", tip: "He needs his soldiers near you to trade. Walk around them, poke with Q, and look for Charm when his E dash is on cooldown." },
    { id: "Malzahar", wr: "52.7%", tip: "His passive shield blocks your first poke. Pop it with Q, trade before it comes back, and use your mobility to roam while he farms." }
  ]
};

RA.matchupsExtra["Ashe:bot"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Jinx", wr: "48.7%", tip: "She out-scales you in late fights. Use W poke and your arrow to win fights early, and don't chase her over her chompers." },
    { id: "MissFortune", wr: "48.8%", tip: "Don't stand behind a low-health minion in line with her, or her Q bounce crits you. Your arrow stun cancels her Bullet Time, so hold it in fights." },
    { id: "Samira", wr: "48.2%", tip: "She dashes in to build her style for R. Her W destroys projectiles, so fire your arrow after she uses it, and slow her with attacks as she comes in." },
    { id: "Tristana", wr: "48.9%", tip: "She jumps on you with W and bursts with her E bomb. Keep your arrow or Flash for her jump, and back off when her bomb is on you." },
    { id: "Corki", wr: "48.6%", tip: "His missiles stop on the first unit hit, so stand behind your minions. Fight him when his Valkyrie dash is on cooldown." }
  ],
  easy: [
    { id: "Caitlyn", wr: "51.9%", tip: "She out-ranges you, but your slows win longer fights. Don't stand in her traps, and go in with your support once she has used her net." },
    { id: "Kalista", wr: "51.9%", tip: "Every attack you land slows her hops. Keep attacking her when she jumps in, and step back once her spears stack up on you." },
    { id: "Aphelios", wr: "51.4%", tip: "He has no dash. Poke him with W when he walks up to farm, and land your arrow for an easy kill with your support." },
    { id: "Kaisa", wr: "50.8%", tip: "She needs to get close to all-in. Poke her with W while she farms, and slow her with attacks when she dives with her ultimate." }
  ]
};

RA.matchupsExtra["Diana:jungle"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Viego", wr: "47.4%", tip: "He wins long duels and resets fights by taking over dead enemies. Avoid early 1v1s, gank first, and fight him only when your team is close." },
    { id: "MonkeyKing", wr: "47.7%", tip: "His decoy can soak your Crescent Strike. Wait for him to use W, then Q and dash, and keep Moonfall until his spin is used." },
    { id: "Chogath", wr: "45.4%", tip: "He's tanky and his scream silences you mid-combo. Don't duel him early; farm and gank, and dive in only after his W is used." },
    { id: "Lillia", wr: "47.0%", tip: "She is faster than you and kites while healing. Don't chase her through camps; play for ganks and land Q before you dash in." },
    { id: "XinZhao", wr: "46.4%", tip: "He beats you in early duels, so ward against his level 2 and 3 invades. Don't fight from outside his ultimate circle, which blocks damage from outside." }
  ],
  easy: [
    { id: "LeeSin", wr: "52.8%", tip: "He's strongest early. Play safe for your first clear, then out-fight him from level 6 when your full combo kills him in one go." },
    { id: "JarvanIV", wr: "51.7%", tip: "Don't fight next to his flag, where his drag can knock you up. When he ganks with his flag combo, collapse with Moonfall to punish him." },
    { id: "Graves", wr: "51.4%", tip: "His smoke blinds you but doesn't stop your dash. Wait for his Quickdraw dash, then go in with Q-E and your W shield." },
    { id: "Khazix", wr: "51.2%", tip: "He's strongest against a lone target. Clear near your laners, and when he jumps on you, turn with your W shield and full combo." },
    { id: "Sylas", wr: "51.1%", tip: "Fight him after his W heal and E chain are on cooldown. If he steals Moonfall, he only gets one cast, so bait it before you commit." }
  ]
};

RA.matchupsExtra["Ekko:mid"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Pantheon", wr: "41.9%", tip: "His point-and-click stun and front shield win early fights. Play safe until level 6, and step sideways to dodge his spear." },
    { id: "Lissandra", wr: "49.5%", tip: "Her W roots you when you dive in, and her ultimate can freeze herself. Wait for her W before you Phase Dive onto her." },
    { id: "Ahri", wr: "49.6%", tip: "Her Charm stops your Phase Dive. Bait it before you go in, and fight her when her Spirit Rush is on cooldown." }
  ],
  easy: [
    { id: "Taliyah", wr: "55.3%", tip: "Don't Phase Dive through her minefield: the mines stun dashes. Wait for her E, then dive in, since she has no escape." },
    { id: "Ryze", wr: "55.1%", tip: "Win short trades by landing three hits for your passive. Dive him after he uses his W root." },
    { id: "Locke", wr: "54.1%", tip: "Cast W where he will land after Ashen Pursuit so he walks into the stun. Keep Chronobreak in case his ultimate threatens to finish you." },
    { id: "Irelia", wr: "54.3%", tip: "Use Phase Dive to step out of her E stun line, and drop W where she will land after a Bladesurge." },
    { id: "Cassiopeia", wr: "56.7%", tip: "She can't dash away. Turn away from her when she casts her ultimate so you're only slowed, not stunned, then dive in." }
  ]
};

RA.matchupsExtra["Galio:support"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Seraphine", wr: "46.6%", tip: "She pokes from range and her ultimate charms you if you engage into it. Wait for her E and R to be used before you Justice Punch in." },
    { id: "Rell", wr: "46.9%", tip: "She engages harder than you. Stay next to your ADC with W ready, and taunt her when she jumps in so her follow-up fails." },
    { id: "Soraka", wr: "46.0%", tip: "Her heals undo your poke. She has no dash, so engage on her with E into W right after she throws her Q." },
    { id: "Pyke", wr: "48.2%", tip: "He hooks and stuns with his dash. Stand next to your ADC and taunt him with W right after he lands his hook." },
    { id: "Rakan", wr: "48.7%", tip: "His dash engage is faster than yours. Keep W ready near your ADC, and punish him after his W knock-up is used." }
  ],
  easy: [
    { id: "Swain", wr: "56.1%", tip: "His damage is magic, which you resist well. Side-step his E pull, then walk in with E into W." },
    { id: "Maokai", wr: "54.9%", tip: "He deals magic damage, so your passive shield helps. Avoid his saplings and engage when his Q is down." },
    { id: "Velkoz", wr: "53.4%", tip: "He has no dash. Side-step his Q split and his E knock-up, then Justice Punch him." },
    { id: "Brand", wr: "53.5%", tip: "He's squishy with no dash. Wait for his E into Q stun to be used, then engage while your magic shield soaks his poke." },
    { id: "TahmKench", wr: "52.4%", tip: "Don't let him hit you three times in a row, or he can swallow you with his ultimate. Engage on his ADC instead of on him." }
  ]
};

RA.matchupsExtra["Irelia:top"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Sett", wr: "45.4%", tip: "His W grows as you hit him and deals true damage in the middle. Avoid long trades, and move to the side when he charges W." },
    { id: "Volibear", wr: "45.9%", tip: "He wins early all-ins and stuns with his Q. Don't fight inside his E circle, which shields him, and only trade with full passive stacks." },
    { id: "Fiora", wr: "46.9%", tip: "Her Riposte parries your E stun. Throw E only after her W is used, and avoid short trades where she can hit her vitals." },
    { id: "Trundle", wr: "44.5%", tip: "His bite drains your damage and his ultimate steals your stats. Keep trades short and play for your jungler instead of long duels." },
    { id: "Shen", wr: "47.0%", tip: "His W blocks your attacks and his taunt stops your Q. Wait for his E dash before going in, and push when he uses his ultimate to help another lane." }
  ],
  easy: [
    { id: "Yone", wr: "54.2%", tip: "Your W blocks much of his physical damage. Hold E for when he dashes in with his stacked Q, then Q onto the mark." },
    { id: "Aatrox", wr: "53.2%", tip: "His Q hits hardest at the edge. Step toward him when he swings, and Bladesurge to a minion to dodge the next swing." },
    { id: "Ambessa", wr: "54.2%", tip: "She dashes in a lot and deals physical damage. Charge your W when she commits to block her burst, then stun her with E." },
    { id: "Yorick", wr: "54.2%", tip: "Kill his ghouls with Q to reset it and stay healthy. Fight him away from his Maiden." },
    { id: "DrMundo", wr: "54.3%", tip: "Dodge his cleavers by staying behind minions, and buy {{item:Executioner's Calling}} to cut his healing. Fight him before his ultimate makes him hard to kill." }
  ]
};

RA.matchupsExtra["Kassadin:mid"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Yone", wr: "47.0%", tip: "He's mostly physical damage, so your passive helps less. Farm under tower with W until level 6, and blink away when he uses Soul Unbound." },
    { id: "Akshan", wr: "46.9%", tip: "He pokes you with physical damage and roams. Don't trade early; farm with W and call out when he leaves lane." },
    { id: "Ekko", wr: "48.3%", tip: "Don't Riftwalk into his W sphere, which stuns. Wait for his Chronobreak to be used before going in for a kill." },
    { id: "Vex", wr: "48.8%", tip: "Her passive fear punishes dashes, including your Riftwalk. Wait until she uses her fear before you blink in." },
    { id: "Ahri", wr: "49.1%", tip: "Her Charm stops you and her ultimate escapes your blinks. Block her burst with your Q shield, and only commit when her Charm is down." }
  ],
  easy: [
    { id: "Leblanc", wr: "53.2%", tip: "Your passive and Q shield cut down her magic burst. Survive her early levels near tower, then punish her once you have your ultimate." },
    { id: "Malzahar", wr: "52.9%", tip: "Your Q interrupts his ultimate channel, and your passive cuts his magic damage. Farm safely early and out-scale him." },
    { id: "Xerath", wr: "53.2%", tip: "Your Q interrupts his ultimate. Survive his poke with your passive, then Riftwalk onto him after level 6, since he has no escape." },
    { id: "Azir", wr: "56.8%", tip: "He's slow and his soldiers can't follow your blinks. Riftwalk onto him after he uses his E dash." },
    { id: "Taliyah", wr: "53.7%", tip: "She's immobile. Soak her poke with your passive and Q shield, then blink onto her after level 6 once her W is down." }
  ]
};

RA.matchupsExtra["Locke:mid"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Kassadin", wr: "45.4%", tip: "He resists your magic damage and out-scales you. Trade hard with Q and attacks in the first levels while he's weak." },
    { id: "Ekko", wr: "45.9%", tip: "His W stun catches your Ashen Pursuit and his Chronobreak undoes your burst. Don't dash in while his sphere is forming, and hold your ultimate until he uses his." },
    { id: "Yone", wr: "46.1%", tip: "He can return to his body with E. Save your ultimate until Soul Unbound snaps him back, and don't stand in line with his stacked Q." },
    { id: "Leblanc", wr: "46.2%", tip: "She bursts and dashes back before you can follow. Wait for her W return to be used before you commit with Ashen Pursuit." },
    { id: "Akshan", wr: "44.7%", tip: "He out-ranges you and swings away with E. Don't chase him; farm safely and wait for your jungler." }
  ],
  easy: [
    { id: "Syndra", wr: "52.2%", tip: "Bait her E stun first, then dash in with Ashen Pursuit and finish her with your ultimate." },
    { id: "Viktor", wr: "51.8%", tip: "He relies on his W to stop divers. Wait for Gravity Field to be used, then dash in with E and your Q marks." },
    { id: "Mel", wr: "51.8%", tip: "Her W (reworked in 26.22) no longer reflects: it destroys projectiles close to her, hits back and shields her. Don't throw Ritual Nails while she's about to use it. Wait for it to go down, then commit with E." },
    { id: "Velkoz", wr: "51.7%", tip: "He can't escape a dash. Side-step his Q and wait for his E knock-up, then commit with Ashen Pursuit." }
  ]
};

RA.matchupsExtra["MissFortune:bot"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Ziggs", wr: "46.8%", tip: "He out-ranges you and takes towers fast. Stay behind minions to dodge his Q, and walk around his mines instead of through them." },
    { id: "Yasuo", wr: "47.1%", tip: "His wind wall blocks your Q and your Bullet Time. Wait for him to use W before you channel your ultimate." },
    { id: "Swain", wr: "43.4%", tip: "He heals in long fights and his E roots you on the way back. Dodge the return of his E, and keep trades short with Q." },
    { id: "Nilah", wr: "45.9%", tip: "She dashes in and her W makes her dodge your attacks. Slow her with E when she comes in, and back off while her W is up." },
    { id: "Viktor", wr: "47.3%", tip: "His E laser out-pokes you. Don't stand in line between him and the caster minions, and fight him when his W is used." }
  ],
  easy: [
    { id: "Kalista", wr: "52.5%", tip: "She hops around but can't avoid your E slow area. Throw E where she lands and bounce Q off low minions onto her." },
    { id: "Corki", wr: "52.0%", tip: "Trade with Q bounces when he steps up to farm, and fight him when his Valkyrie dash is on cooldown." },
    { id: "Aphelios", wr: "51.8%", tip: "He has no dash. Land your E slow and Q bounce, then save Bullet Time for when he's slowed." },
    { id: "Caitlyn", wr: "51.7%", tip: "She out-ranges you but can't win an all-in. Avoid her traps, and go in with your support after she uses her net." },
    { id: "Tristana", wr: "51.7%", tip: "She jumps in to all-in. Slow her with E when she lands, and win short trades with Q bounces off minions." }
  ]
};

RA.matchupsExtra["Sylas:mid"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Galio", wr: "46.3%", tip: "He's tanky against magic and his taunt stops your combo. Avoid long trades; push and roam, and his stolen ultimate lets you fly to fights too." },
    { id: "Katarina", wr: "46.6%", tip: "She resets on kills and slips away with Shunpo. Hold your E chain for when she blinks in, and stay away from her daggers on the ground." },
    { id: "Vex", wr: "45.6%", tip: "Her passive fear punishes dashes, including your E and W. Only dash in after she has used her fear." },
    { id: "Veigar", wr: "45.5%", tip: "Never dash into his cage. Bait his E before you engage, and don't fight him at low health while his ultimate is up." },
    { id: "Lux", wr: "46.6%", tip: "She out-ranges you and her Q root stops your engage. Keep minions between you, and dash in after her binding is used." }
  ],
  easy: [
    { id: "Jayce", wr: "53.5%", tip: "He pokes from range but has little sustain. Wait for his hammer knock-back, then chain onto him and win the longer fight with your W heal." },
    { id: "Azir", wr: "51.6%", tip: "He's slow and needs his soldiers. Chain onto him after he uses his E dash, and steal his ultimate to wall his own team." },
    { id: "Qiyana", wr: "51.3%", tip: "Your W heal wins the longer fights she can't end fast. Don't stand near walls when her ultimate is up." },
    { id: "Anivia", wr: "51.0%", tip: "She is slow and can't escape once you're on her. Dash in after her Q stun is used, and keep hitting her egg if you pop her once." }
  ]
};

RA.matchupsExtra["Taliyah:jungle"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Lillia", wr: "47.2%", tip: "She clears and moves faster than you. Don't duel her; ward her jungle and match her ganks with your wall instead." },
    { id: "Talon", wr: "47.7%", tip: "He vaults over walls to invade you. Ward your jungle entrances and keep W + E ready for when he jumps in." },
    { id: "MasterYi", wr: "47.7%", tip: "He wins every late duel. Gank early to get ahead, and stun him with W + E as soon as his Q ends." },
    { id: "Nidalee", wr: "47.7%", tip: "She invades with spears and pounces. Dodge her spears near brushes, and drop your mines where she will pounce in." },
    { id: "Rengar", wr: "47.9%", tip: "He leaps out of brushes onto you. Stay away from tall brushes when you can, and keep W + E ready for his leap." }
  ],
  easy: [
    { id: "Graves", wr: "52.9%", tip: "Ward his invade paths and use your wall to gank while he farms. His dash lands him in your mines if you place them where he wants to go." },
    { id: "Sylas", wr: "53.2%", tip: "He dashes in with chains. Place your mines where he will land and throw him into them with W." },
    { id: "Naafiri", wr: "53.5%", tip: "She dashes in with her pack. Drop your minefield where she lands and throw her with W." },
    { id: "Nocturne", wr: "52.7%", tip: "Stay near your laners after his level 6. When he flies in with his ultimate, throw him through your mines with W." },
    { id: "LeeSin", wr: "52.0%", tip: "He invades early, so don't fight him at levels 2 and 3. Stun him when he dashes in with his second Q." }
  ]
};

RA.matchupsExtra["Veigar:bot"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Tristana", wr: "49.5%", tip: "She jumps on you and out-ranges you late. Keep your cage ready for her Rocket Jump and farm with Q from safe spots." },
    { id: "KogMaw", wr: "49.5%", tip: "He out-ranges you with his W and shreds you late. Stack AP with Q early, and cage him with your support, since he has no dash." }
  ],
  easy: [
    { id: "Draven", wr: "55.1%", tip: "He wants short trades with his axes. Cage the spot where he will catch his axe, and farm with Q until your support can follow up." },
    { id: "Samira", wr: "54.4%", tip: "She has to dash in to fight. Place your cage around yourself when she jumps, and hold your ultimate until she's low." },
    { id: "Varus", wr: "54.3%", tip: "He pokes but can't escape a cage. Side-step his charged Q, and cage him when he steps up to throw it." },
    { id: "Jhin", wr: "53.4%", tip: "He's slow and has to reload after four shots. Cage him while he reloads, and don't stand where his W root can reach you." },
    { id: "Jinx", wr: "53.2%", tip: "She has no dash. Cage her when she steps up to farm, and don't walk over her chompers." }
  ]
};

RA.matchupsExtra["Viktor:mid"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Akali", wr: "47.4%", tip: "She dashes in and hides in her shroud. Drop W at your feet when she jumps on you, and keep your Q shield for her burst." },
    { id: "Yone", wr: "47.6%", tip: "When he uses Soul Unbound, put Gravity Field where his body is, since he snaps back there. Don't stand in line with his stacked Q." },
    { id: "TwistedFate", wr: "47.4%", tip: "He shoves and roams with his ultimate. Push your wave with E when he leaves, and ping your team when his ultimate is up." },
    { id: "Aurora", wr: "46.8%", tip: "She hops away with her E and goes invisible with W. Don't chase her too far, and keep your W for when she leaps in with her ultimate." },
    { id: "Velkoz", wr: "45.4%", tip: "He out-ranges your poke. Stay off the line of his Q split, and farm with E from max range." }
  ],
  easy: [
    { id: "Azir", wr: "52.6%", tip: "Hit him with E through his soldiers to win poke trades. Keep W ready for when he dashes in with E and his ultimate." },
    { id: "Ryze", wr: "51.5%", tip: "Out-range him with your E, and stay out of the short range of his W root." },
    { id: "Galio", wr: "51.5%", tip: "He's tanky but slow. Poke him with E, and when he dashes in with E, drop W so his taunt engage stalls." },
    { id: "Zed", wr: "51.4%", tip: "Drop W at your feet when he ults onto you, and hold your Q shield for his burst. {{item:Zhonya's Hourglass}} helps against his ultimate mark." },
    { id: "Malzahar", wr: "51.3%", tip: "His passive shield blocks your first hit. Break it with Q, then trade with E, and stay out of his ultimate range when he's ahead." }
  ]
};

RA.matchupsExtra["Xerath:support"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Blitzcrank", wr: "45.7%", tip: "His hook decides the lane. Always stand behind your minions, and keep your E stun for when he walks up after a miss." },
    { id: "Karma", wr: "45.8%", tip: "Her empowered Q out-pokes you and her shield soaks your damage. Poke her ADC instead, and charge Q from behind your minions." },
    { id: "Janna", wr: "44.8%", tip: "Her shield cancels your poke and her tornado stops dives. Poke when her shield is on cooldown." },
    { id: "Alistar", wr: "46.9%", tip: "His W-Q combo knocks you up from range. Stand far back, and throw your E stun as soon as he heads toward you." },
    { id: "Zilean", wr: "45.1%", tip: "His bombs stun if two land on you, and his speed boost helps his team reach you. Stay at max range and walk away from a bomb stuck on you." }
  ],
  easy: [
    { id: "Ashe", wr: "57.9%", tip: "She has no dash. Hit her with W and Q when she steps up to farm, and dodge her long-range arrow." },
    { id: "Hwei", wr: "53.6%", tip: "You both poke, but your charged Q reaches farther. Dodge his slow skill shots and hit him first." },
    { id: "Mel", wr: "57.1%", tip: "Her W (reworked in 26.22) no longer reflects: it destroys projectiles close to her, hits back and shields her. Don't throw your E stun into it. Your Q and W aren't projectiles, so poke her with those." }
  ]
};

RA.matchupsExtra["Yone:mid"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Ahri", wr: "46.4%", tip: "Her Charm stops your engage. Bait it with a step forward before you dash in, and side-step her Q on its way back." },
    { id: "Lissandra", wr: "45.8%", tip: "She roots you when you dash in and can freeze herself with her ultimate. Wait for her W root to be used before you go in." },
    { id: "Leblanc", wr: "46.5%", tip: "She out-trades you early. Farm safely, dodge her chain, and all-in when her W is on cooldown." },
    { id: "Annie", wr: "45.8%", tip: "Watch the counter above her head: at four stacks her next spell stuns. Fight her right after the stun is used." },
    { id: "Lux", wr: "46.3%", tip: "Her Q root stops your engage. Keep minions between you, and dash in after her binding is used." }
  ],
  easy: [
    { id: "Locke", wr: "54.0%", tip: "Use your W shield to soak his marked attacks, and fight back when his Soul Ignition has drained his own health." },
    { id: "Azir", wr: "53.8%", tip: "Dash past his soldiers with stacked Q or Soul Unbound, then snap back before he can push you with his ultimate." },
    { id: "Kassadin", wr: "52.9%", tip: "Bully him before level 6. He's weak early, and your physical damage gets past his magic-damage passive." },
    { id: "Orianna", wr: "52.7%", tip: "She's immobile. Engage when her ball is away from her, so she can't hit you with W as you arrive." },
    { id: "Talon", wr: "52.6%", tip: "Your W shield soaks his poke. When he jumps on you, turn on him with your stacked Q knock-up." }
  ]
};

RA.matchupsExtra["Ziggs:bot"] = {
  source: "op.gg Emerald+, patch 26.22",
  hard: [
    { id: "Sivir", wr: "44.1%", tip: "Her spell shield blocks one of your spells and she pushes as fast as you. Bait her E with a Q before you throw Satchel Charge or your ultimate." },
    { id: "Yasuo", wr: "43.6%", tip: "His wind wall blocks your Q and your ultimate. Throw your spells after he uses W, and keep mines between you and him." },
    { id: "Lucian", wr: "48.2%", tip: "He dashes in with E and bursts you. Keep Satchel Charge ready to knock him away, and stay close to your support." },
    { id: "Kaisa", wr: "48.4%", tip: "She dives you with her ultimate from level 6. Keep W and mines ready for when she lands next to you." },
    { id: "Zeri", wr: "49.0%", tip: "She moves fast and dodges slow bombs. Aim Q ahead of her, and save Satchel Charge for when she dashes in." }
  ],
  easy: [
    { id: "Caitlyn", wr: "56.6%", tip: "Your Q outranges her attacks. Push the wave and take plates, and keep W ready in case she nets in for a fight." },
    { id: "Aphelios", wr: "55.4%", tip: "He has no dash. Poke him with Q and mines, and push towers since he can't match your wave clear early." },
    { id: "Varus", wr: "54.4%", tip: "Side-step his charged Q, and out-push him to take plates." },
    { id: "MissFortune", wr: "53.2%", tip: "Your Satchel Charge knock-back cancels her Bullet Time. Poke her with Q from behind minions so her bounce can't reach you." },
    { id: "Samira", wr: "53.1%", tip: "Her W destroys projectiles like your Q. Throw spells after it's used, and knock her away with Satchel Charge when she jumps in." }
  ]
};
