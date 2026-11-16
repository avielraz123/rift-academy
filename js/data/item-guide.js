/* Buying advice for finished items (item pages). Based on Data Dragon item text for the current patch. */
window.RA = window.RA || {};
RA.itemGuide = {
  "Doran's Shield": {
    what: "A starting item with extra health that heals you over time after an enemy champion hits you.",
    buyWhen: "Start with it in top lane as a melee champion when the enemy laner is ranged or pokes you a lot, so you can stay in lane longer.",
    goodOn: ["Malphite", "Ornn", "Garen", "Sett", "Akali"],
    avoid: "If you plan to fight hard from level 1, {{item:Doran's Blade}} gives you more damage."
  },
  "Doran's Blade": {
    what: "A starting item with attack damage, some health and a little omnivamp (you heal for part of all damage you deal).",
    buyWhen: "Start with it on attack-damage fighters and some marksmen who want to trade hits early in lane.",
    goodOn: ["Irelia", "MissFortune", "Smolder", "Zed", "Darius"],
    avoid: "Skip it in a lane where you'll mostly be poked from range; {{item:Doran's Shield}} keeps you healthier."
  },
  "Doran's Ring": {
    what: "A starting item for mages with ability power, health and steady mana regeneration, which goes up after you hit an enemy champion.",
    buyWhen: "Start with it on most mid lane mages so you can use your spells to farm and poke without running out of mana.",
    goodOn: ["Ahri", "Syndra", "Orianna", "Viktor", "Lux", "Ziggs"]
  },
  "Dark Seal": {
    what: "A cheap starting item that gives more ability power each time you get a kill or assist, but loses half its stacks when you die.",
    buyWhen: "Start with it or buy it early on mages and assassins who expect to get kills, then upgrade it to {{item:Mejai's Soulstealer}}.",
    goodOn: ["Kassadin", "Katarina", "Ekko", "Leblanc"],
    avoid: "Don't buy it if you are dying a lot; each death costs you 5 Glory."
  },
  "Cull": {
    what: "A starting item with attack damage and healing on each attack that pays you extra gold for killing minions, plus a 350 gold bonus once you reach the 100 gold limit.",
    buyWhen: "Start with it on attack-damage laners who expect a calm lane and want to farm safely for gold instead of fighting.",
    goodOn: [],
    avoid: "Skip it in an aggressive lane; a Doran's item helps you more when the enemy fights you early."
  },
  "Doran's Bow": {
    what: "A starting item with attack damage, attack speed and a little omnivamp for champions who hit with basic attacks.",
    buyWhen: "Start with it on most marksmen in bot lane, and on attack-speed melee champions who rely on fast basic attacks.",
    goodOn: ["Jinx", "Caitlyn", "Ashe", "Kaisa", "Vayne", "Yasuo"]
  },
  "Scorchclaw Pup": {
    what: "A jungle starting pet that helps you kill monsters and, once grown, makes your next attack or ability burn and slow enemies.",
    buyWhen: "Pick it as a jungler who deals damage and wants to gank: the slow helps you catch laners.",
    goodOn: ["Diana", "Ekko", "Taliyah", "Kayn", "Khazix"],
    avoid: "Only buy a jungle pet if you take Smite and play jungle."
  },
  "Gustwalker Hatchling": {
    what: "A jungle starting pet that helps you kill monsters and, once grown, gives you move speed when you enter a brush.",
    buyWhen: "Pick it as a jungler who wants to move around the map quickly and surprise lanes from the brush.",
    goodOn: ["Rengar", "Khazix", "LeeSin", "Nidalee", "Evelynn"],
    avoid: "Only buy a jungle pet if you take Smite and play jungle."
  },
  "Mosstomper Seedling": {
    what: "A jungle starting pet that helps you kill monsters and, once grown, gives you a shield out of combat and after killing large monsters.",
    buyWhen: "Pick it as a tank jungler who goes into fights first and wants the extra protection.",
    goodOn: ["Sejuani", "Zac", "Amumu", "Rammus", "Maokai", "Nunu"],
    avoid: "Only buy a jungle pet if you take Smite and play jungle."
  },
  "Doran's Helm": {
    what: "A starting item with a lot of health plus a little armor and magic resist, so you survive both kinds of damage.",
    buyWhen: "Start with it on tanks and durable top laners who want to survive the early lane and scale later.",
    goodOn: ["Ornn", "Malphite", "Sion", "Chogath", "KSante"],
    avoid: "If you want to win early trades, a damage starter like {{item:Doran's Blade}} fits better."
  },
  "Shurelya's Battlesong": {
    what: "A support item with ability power and mana regeneration whose active gives nearby allies 30% move speed for 4 seconds.",
    buyWhen: "Buy it as an enchanter support (a support who heals, shields or speeds up allies) when your team needs to start fights or run away together.",
    goodOn: ["Janna", "Lulu", "Karma", "Nami", "Zoe", "Rakan"]
  },
  "Overlord's Bloodmail": {
    what: "A fighter item with attack damage and lots of health that turns some of your bonus health into damage and hits harder when you are low.",
    buyWhen: "Buy it on attack-damage fighters who stay in long fights and like having more health.",
    goodOn: ["Darius", "Garen", "Sett", "Aatrox", "Illaoi"],
    avoid: "Marksmen and assassins get more from pure damage items."
  },
  "Unending Despair": {
    what: "A tank item with health, armor and ability haste that damages nearby enemy champions every 4 seconds in a fight and heals you for it.",
    buyWhen: "Buy it on tanks when the enemy has a lot of physical damage and fights last a long time.",
    goodOn: ["Ornn", "Sejuani", "Zac", "Sion", "Chogath"]
  },
  "Blackfire Torch": {
    what: "A mage item that makes your damaging abilities burn enemies, and gives you more ability power for each enemy you are burning.",
    buyWhen: "Buy it as a first or second item on mages who hit several enemies or monsters with abilities in long fights.",
    goodOn: ["Hwei", "Malzahar", "Taliyah", "Viktor", "Lillia", "Brand"]
  },
  "Kaenic Rookern": {
    what: "A defensive item with health and a lot of magic resist that gives you a shield against magic damage if you haven't taken any for 15 seconds.",
    buyWhen: "Buy it on tanks and fighters when the enemy team has strong mages who burst you with magic damage.",
    goodOn: ["Galio", "Garen", "Sion", "Ornn", "Sett"],
    avoid: "Skip it if the enemy deals mostly physical damage."
  },
  "Dusk and Dawn": {
    what: "A hybrid item with health, ability power and attack speed: after you use an ability, your next attack deals bonus magic damage, heals you and triggers on-hit effects twice.",
    buyWhen: "Buy it on ability-power melee champions who mix abilities with basic attacks.",
    goodOn: ["Diana", "Ekko", "Gwen"]
  },
  "Fiendhunter Bolts": {
    what: "A crit item with attack speed and lower ultimate cooldown: after you use your ultimate, your next 3 attacks get faster and deal critical damage.",
    buyWhen: "Buy it on marksmen whose ultimate is a big part of their damage, so they get to use it more often.",
    goodOn: ["Jhin", "MissFortune", "Ashe", "Kaisa", "Xayah"]
  },
  "Endless Hunger": {
    what: "An attack-damage item with omnivamp and tenacity (shorter crowd control on you) that also lowers your cooldowns based on your bonus attack damage.",
    buyWhen: "Buy it on attack-damage champions who use abilities a lot and want healing in long fights, especially when they snowball off kills.",
    goodOn: ["Irelia", "Ezreal", "Smolder", "Zed", "Riven", "Aatrox"]
  },
  "Bastionbreaker": {
    what: "A lethality item (lethality ignores some of the enemy's armor) whose ability hits deal extra true damage, and kills make your next hit on a turret or epic monster stronger.",
    buyWhen: "Buy it on attack-damage assassins who kill with abilities and want to turn kills into towers, dragons and Baron.",
    goodOn: ["Zed", "Talon", "Qiyana", "Naafiri", "Pantheon"]
  },
  "Actualizer": {
    what: "A mage item with ability power and mana whose active doubles your mana costs for 8 seconds but gives more damage, shielding and healing and faster basic ability cooldowns.",
    buyWhen: "Buy it on mages with big mana pools who cast lots of spells and want a short window of extra power in fights.",
    goodOn: ["Ryze", "Cassiopeia", "Anivia", "Karma"],
    avoid: "Skip it if you already run out of mana often."
  },
  "Hexoptics C44": {
    what: "A crit item with attack damage that deals up to 10% more damage to far-away targets and gives extra attack range after a kill.",
    buyWhen: "Buy it on long-range marksmen who can hit enemies from a safe distance.",
    goodOn: ["Ashe", "Caitlyn", "Draven", "Jinx", "Jhin"],
    avoid: "Champions who fight up close won't get the range bonus."
  },
  "Bandlepipes": {
    what: "A support tank item: when you slow or stun an enemy champion, you get move speed and nearby allies attack faster.",
    buyWhen: "Buy it as a tank support with lots of crowd control (stuns, roots, slows) when your team has marksmen or other basic attackers.",
    goodOn: ["Nautilus", "Leona", "Rell", "Alistar", "Braum", "Galio"]
  },
  "Protoplasm Harness": {
    what: "A tank item with a lot of health that, when you drop below 30% health, gives you more max health, healing, move speed and tenacity for a short time.",
    buyWhen: "Buy it on tanks and fighters who dive into the enemy team and often get focused down.",
    goodOn: ["Zac", "Sion", "Chogath", "Volibear", "Sejuani"]
  },
  "Archangel's Staff": {
    what: "A mage item with ability power and mana that turns some of your mana into ability power and grows as you land abilities, then turns into Seraph's Embrace.",
    buyWhen: "Buy it on mages who cast a lot of spells and scale with mana; buy {{item:Tear of the Goddess}} early so it starts growing.",
    goodOn: ["Kassadin", "Ryze", "Anivia", "Veigar"],
    avoid: "It is slow to get strong, so it's a poor pick if you need damage right away."
  },
  "Manamune": {
    what: "An attack-damage item with mana that gives more damage based on your mana and grows as you land attacks and abilities, then turns into Muramana.",
    buyWhen: "Buy it on attack-damage champions who use mana and cast a lot of abilities; buy {{item:Tear of the Goddess}} early so it starts growing.",
    goodOn: ["Ezreal", "Jayce", "Varus", "Corki"]
  },
  "Berserker's Greaves": {
    what: "Boots that give attack speed along with move speed.",
    buyWhen: "Buy them on marksmen and other champions who deal most of their damage with fast basic attacks.",
    goodOn: ["Jinx", "Ashe", "Kaisa", "Vayne", "Yasuo", "Yone"],
    avoid: "If the enemy has lots of crowd control or burst, defensive boots may keep you alive longer."
  },
  "Gluttonous Greaves": {
    what: "Boots with omnivamp (healing from all damage you deal) that give more omnivamp each time you get a kill or assist, up to 10 times.",
    buyWhen: "Buy them on fighters and damage dealers who stay in fights and want extra healing, especially when you are getting kills.",
    goodOn: [],
    avoid: "Against heavy crowd control or burst, {{item:Mercury's Treads}} or {{item:Plated Steelcaps}} usually help more."
  },
  "Boots of Swiftness": {
    what: "Boots with the most move speed of the basic options that also make slows on you 25% weaker.",
    buyWhen: "Buy them when the enemy team has a lot of slows, or when your champion needs to move around the map a lot.",
    goodOn: ["Jhin", "MissFortune", "TwistedFate"]
  },
  "Sorcerer's Shoes": {
    what: "Boots for mages with magic penetration, which makes your magic damage hit harder.",
    buyWhen: "Buy them on mages and other ability-power damage dealers when you want more damage.",
    goodOn: ["Syndra", "Ahri", "Viktor", "Lux", "Veigar", "Brand"],
    avoid: "If you keep getting killed by crowd control or basic attacks, pick defensive boots instead."
  },
  "Guardian Angel": {
    what: "An item with attack damage and armor that brings you back to life once after you die, after 4 seconds of stasis (frozen and untargetable).",
    buyWhen: "Buy it late in the game on carries who get focused in fights, so one mistake doesn't lose the game.",
    goodOn: ["Jinx", "Caitlyn", "Kaisa", "Yasuo", "Yone", "Zed"],
    avoid: "Early on, a damage item usually does more for you."
  },
  "Infinity Edge": {
    what: "A crit item with a lot of attack damage that makes your critical strikes deal more damage.",
    buyWhen: "Buy it as a core item on crit marksmen, usually once you already have some crit chance from another item.",
    goodOn: ["Jinx", "Caitlyn", "Jhin", "MissFortune", "Yasuo", "Yone"]
  },
  "Yun Tal Wildarrows": {
    what: "A marksman item with attack damage and attack speed that slowly gains up to 25% crit chance as you attack and gives a burst of attack speed when you hit champions.",
    buyWhen: "Buy it as a first item on attack-speed marksmen who will keep attacking in fights.",
    goodOn: ["Xayah", "Tristana", "Jinx", "Sivir", "Twitch"]
  },
  "Mortal Reminder": {
    what: "A crit item with armor penetration whose physical damage puts 40% Wounds on enemy champions (Wounds reduce their healing).",
    buyWhen: "Buy it on marksmen when the enemy team heals a lot, for example champions with life steal, self-healing or healing supports.",
    goodOn: ["Ashe", "Draven", "Jinx", "MissFortune", "Yasuo"],
    avoid: "If the enemy barely heals, {{item:Lord Dominik's Regards}} gives more damage."
  },
  "Lord Dominik's Regards": {
    what: "A crit item with armor penetration that deals extra damage to champions with a lot of bonus health.",
    buyWhen: "Buy it on marksmen when the enemy team has tanks or builds lots of armor and health.",
    goodOn: ["Caitlyn", "Jhin", "Draven", "Jinx", "MissFortune", "Zed"]
  },
  "Mejai's Soulstealer": {
    what: "An upgrade of {{item:Dark Seal}} that gives more ability power for each kill or assist, plus move speed at 10 or more Glory, but loses Glory when you die.",
    buyWhen: "Buy it when you are ahead and confident you can keep getting kills without dying.",
    goodOn: ["Ahri", "Katarina", "Kassadin", "Leblanc", "Sylas", "Lux"],
    avoid: "Don't buy it when you are behind; each death loses 10 Glory."
  },
  "Phantom Dancer": {
    what: "A crit item with a lot of attack speed and move speed that lets you walk through other units (Ghosted).",
    buyWhen: "Buy it on marksmen and attack-speed champions who need to move around while attacking in fights.",
    goodOn: ["Ashe", "Jhin", "Kaisa", "Yasuo", "Yone"]
  },
  "Plated Steelcaps": {
    what: "Boots with armor that reduce damage from basic attacks by 10%.",
    buyWhen: "Buy them when the enemy team deals a lot of damage with basic attacks, like marksmen or attack-speed fighters.",
    goodOn: ["Malphite", "Galio", "Irelia", "Sejuani", "Diana"],
    avoid: "Against mostly magic damage or heavy crowd control, {{item:Mercury's Treads}} is better."
  },
  "Zeke's Convergence": {
    what: "A tank support item with health and both resistances: using your ultimate creates a storm that damages and slows nearby enemy champions for 5 seconds.",
    buyWhen: "Buy it as a tank support whose ultimate puts you in the middle of the enemy team.",
    goodOn: ["Leona", "Nautilus", "Rell", "Alistar", "Braum"]
  },
  "Sterak's Gage": {
    what: "A fighter item with health, tenacity and bonus attack damage that gives you a big shield when you drop below 30% health.",
    buyWhen: "Buy it on melee fighters who go into the enemy team and get burst down.",
    goodOn: ["Darius", "Irelia", "Garen", "Sett", "Aatrox", "Renekton"]
  },
  "Spirit Visage": {
    what: "A defensive item with health and magic resist that makes heals and shields on you 25% stronger.",
    buyWhen: "Buy it on tanks and fighters who heal themselves, when the enemy has magic damage.",
    goodOn: ["DrMundo", "Aatrox", "Warwick", "Volibear", "Olaf"]
  },
  "Sunfire Aegis": {
    what: "A tank item with health and armor that burns nearby enemies after you deal or take damage.",
    buyWhen: "Buy it on tanks and tank junglers when the enemy has physical damage and you are often fighting up close.",
    goodOn: ["Amumu", "Sejuani", "Zac", "Ornn", "Skarner"]
  },
  "Tear of the Goddess": {
    what: "A cheap mana item that grows your max mana as you land abilities, up to 360, and later upgrades into a bigger mana item.",
    buyWhen: "Buy it early (often on your first trip back) if you plan to build {{item:Archangel's Staff}}, {{item:Manamune}} or {{item:Winter's Approach}}, so it fills up sooner.",
    goodOn: ["Ezreal", "Kassadin", "Ryze", "Jayce", "Anivia"],
    avoid: "Skip it if your champion doesn't use mana or won't build one of its upgrades."
  },
  "Black Cleaver": {
    what: "A fighter item with attack damage, health and ability haste that lowers the armor of champions you hit and gives you move speed.",
    buyWhen: "Buy it on attack-damage fighters who hit enemies many times, especially when the enemy has tanks with armor.",
    goodOn: ["Darius", "Smolder", "Aatrox", "Jayce", "Renekton", "Vi"]
  },
  "Bloodthirster": {
    what: "A marksman item with a lot of attack damage and 15% life steal; healing beyond your max health becomes a shield.",
    buyWhen: "Buy it on attack-damage carries when you need healing to survive poke or long fights.",
    goodOn: ["Draven", "MissFortune", "Caitlyn", "Jinx", "Yasuo", "Yone"]
  },
  "Experimental Hexplate": {
    what: "A fighter item with attack damage, attack speed and health that lowers your ultimate cooldown and gives attack speed and move speed after you use it.",
    buyWhen: "Buy it on attack-damage fighters and junglers who use their ultimate to start fights.",
    goodOn: ["Vi", "XinZhao", "Belveth", "Vayne"]
  },
  "Ravenous Hydra": {
    what: "An attack-damage item with life steal whose attacks also hit enemies around your target, and you heal from that damage too.",
    buyWhen: "Buy it on melee fighters who want to clear minion waves fast and heal in fights.",
    goodOn: ["Riven", "Briar", "Belveth", "Fiora", "Renekton"]
  },
  "Thornmail": {
    what: "A tank item with a lot of armor that damages enemies who attack you and puts 40% Wounds on them (Wounds reduce their healing).",
    buyWhen: "Buy it when the enemy has basic attackers who heal, such as marksmen with life steal or self-healing fighters.",
    goodOn: ["Galio", "Malphite", "Rammus", "Ornn", "Leona"],
    avoid: "Against mostly ability or magic damage, it does very little."
  },
  "Trinity Force": {
    what: "A fighter item with attack damage, attack speed, health and ability haste: after you use an ability your next attack hits harder, and attacking gives move speed.",
    buyWhen: "Buy it on champions who weave basic attacks between their abilities and fight for a while.",
    goodOn: ["Ezreal", "Jax", "Camille", "Fiora", "Gangplank"]
  },
  "Warmog's Armor": {
    what: "A tank item with 1000 health that rapidly heals you out of combat once you have 2000 bonus health.",
    buyWhen: "Buy it late on tanks who already have lots of health and want to recover quickly between fights.",
    goodOn: ["DrMundo", "Sion", "Chogath", "Zac"],
    avoid: "It gives no armor or magic resist, so it's a poor answer to one damage type."
  },
  "Heartsteel": {
    what: "A tank item with lots of health whose charged attacks on nearby champions deal extra damage and give you max health permanently.",
    buyWhen: "Buy it early on tanks in lanes where you can hit the enemy often, so it keeps stacking health all game.",
    goodOn: ["Sion", "Chogath", "Ornn", "Zac", "TahmKench", "Sett"]
  },
  "Runaan's Hurricane": {
    what: "A crit item with attack speed whose attacks also fire bolts at 2 more enemies near your target.",
    buyWhen: "Buy it on marksmen who want to clear minion waves faster and hit several enemies in teamfights.",
    goodOn: ["Jinx", "Twitch", "KogMaw", "Sivir"]
  },
  "Statikk Shiv": {
    what: "A hybrid item with attack damage, ability power and attack speed whose charged attacks fire chain lightning at nearby enemies.",
    buyWhen: "Buy it on champions who use both attack damage and ability power and want faster wave clear.",
    goodOn: ["Kaisa", "Kayle", "Varus"]
  },
  "Rabadon's Deathcap": {
    what: "A mage item with the most ability power in the game that also increases your total ability power by 30%.",
    buyWhen: "Buy it as a third or later item on mages, once you already have some ability power for the bonus to multiply.",
    goodOn: ["Veigar", "Syndra", "Ziggs", "Xerath", "Hwei", "Vladimir"],
    avoid: "As a first item it's expensive and slow to complete."
  },
  "Wit's End": {
    what: "An attack-speed item with magic resist and tenacity whose attacks deal bonus magic damage.",
    buyWhen: "Buy it on attack-speed fighters and marksmen when the enemy has strong magic damage or crowd control.",
    goodOn: ["Irelia", "Yasuo", "Yone", "Vayne", "Fiora", "MasterYi"]
  },
  "Rapid Firecannon": {
    what: "A crit item with attack speed whose charged attack deals 40 bonus magic damage and has 35% more range.",
    buyWhen: "Buy it on marksmen who need to hit enemies from farther away, poke towers safely or finish fleeing targets.",
    goodOn: ["TwistedFate", "Caitlyn", "Jhin", "MissFortune", "Smolder"]
  },
  "Stormrazor": {
    what: "A crit item with attack damage and attack speed whose charged attack deals bonus magic damage and gives a short burst of move speed.",
    buyWhen: "Buy it on marksmen who want extra burst on their first attack and a way to reposition in fights.",
    goodOn: ["Jhin", "Caitlyn", "Smolder"]
  },
  "Lich Bane": {
    what: "A mage item with a lot of ability power and move speed: after you use an ability, your next attack deals bonus magic damage.",
    buyWhen: "Buy it on ability-power champions who attack between their spells to burst a single target.",
    goodOn: ["Fizz", "Katarina", "TwistedFate", "Viktor", "Zoe", "Diana"]
  },
  "Banshee's Veil": {
    what: "A mage item with ability power and magic resist that blocks the next enemy ability that would hit you.",
    buyWhen: "Buy it on mages and assassins when the enemy has a key ability that catches you, like a stun or a long-range hook, or lots of magic burst.",
    goodOn: ["Ahri", "Akali", "Fizz", "Katarina", "Leblanc", "Syndra"],
    avoid: "Against mostly physical damage, {{item:Zhonya's Hourglass}} protects you better."
  },
  "Redemption": {
    what: "A support item whose active, after 2.5 seconds, heals allies in an area and deals true damage to enemy champions there.",
    buyWhen: "Buy it as an enchanter support for big teamfights where your team stands close together.",
    goodOn: ["Soraka", "Sona", "Nami", "Janna", "Yuumi", "Taric"]
  },
  "Knight's Vow": {
    what: "A tank support item: you link to one ally, take part of the damage they receive and heal from the damage they deal to champions.",
    buyWhen: "Buy it as a tank support when your marksman or main carry is fed and the enemy keeps diving them.",
    goodOn: ["Braum", "Taric", "Alistar", "Rell", "Galio"]
  },
  "Frozen Heart": {
    what: "An armor item with mana and ability haste that slows the attack speed of nearby enemy champions by 20%.",
    buyWhen: "Buy it when the enemy has fast-attacking marksmen or fighters and you are often near them.",
    goodOn: ["Malphite", "Sejuani", "Galio", "Ezreal", "Kassadin"]
  },
  "Mercury's Treads": {
    what: "Boots with magic resist and 30% tenacity, which makes stuns, slows and other crowd control on you shorter.",
    buyWhen: "Buy them when the enemy team has lots of crowd control or deals mostly magic damage.",
    goodOn: ["Irelia", "Galio", "Diana", "Akali", "Sylas", "Yasuo"],
    avoid: "Against mostly basic attacks, {{item:Plated Steelcaps}} is better."
  },
  "Nashor's Tooth": {
    what: "An ability-power item with attack speed whose attacks deal bonus magic damage.",
    buyWhen: "Buy it on ability-power champions who deal a lot of damage with basic attacks.",
    goodOn: ["Kaisa", "Kayle", "Teemo", "Gwen", "Ekko"]
  },
  "Rylai's Crystal Scepter": {
    what: "A mage item with ability power and health whose damaging abilities slow enemies by 30% for 1 second.",
    buyWhen: "Buy it on mages who hit enemies often with abilities and want to keep them from running away or reaching you.",
    goodOn: ["Malzahar", "Taliyah", "Swain", "Brand", "Rumble", "Ryze"]
  },
  "Malignance": {
    what: "A mage item with ability power and mana that lowers your ultimate cooldown, and your ultimate burns the ground and lowers enemy magic resist.",
    buyWhen: "Buy it as a first item on mages whose ultimate is a big part of their damage.",
    goodOn: ["Ahri", "Annie", "Lissandra", "Kassadin", "Brand", "Swain"]
  },
  "Winter's Approach": {
    what: "A tank item with health and mana that gives more health based on your mana and grows as you land attacks and abilities, then turns into Fimbulwinter.",
    buyWhen: "Buy it on tanks that use mana and cast abilities often; buy {{item:Tear of the Goddess}} early so it starts growing.",
    goodOn: ["Malphite", "Sejuani", "Ornn", "Galio"]
  },
  "Guinsoo's Rageblade": {
    what: "An on-hit item (on-hit means it triggers every time your attack lands) with attack damage, ability power and attack speed that stacks attack speed, and every third attack applies on-hit effects twice when fully stacked.",
    buyWhen: "Buy it on champions who deal damage with fast basic attacks and other on-hit items.",
    goodOn: ["Kaisa", "Vayne", "KogMaw", "Varus", "Kayle"]
  },
  "Void Staff": {
    what: "A mage item with ability power and 40% magic penetration, which lets your magic damage ignore part of the enemy's magic resist.",
    buyWhen: "Buy it as a second or third item when enemies start buying magic resist, especially tanks.",
    goodOn: ["Ahri", "Syndra", "Viktor", "Veigar", "Lux", "Fizz"],
    avoid: "If nobody on the enemy team has magic resist, other damage items help more."
  },
  "Cryptbloom": {
    what: "A mage item with ability power, magic penetration and ability haste that heals allies around an enemy champion you helped kill.",
    buyWhen: "Buy it on mages when enemies have magic resist and your team fights together in groups.",
    goodOn: ["Aurora", "Hwei", "Orianna", "Syndra", "Viktor", "Ziggs"]
  },
  "Mercurial Scimitar": {
    what: "A marksman item with attack damage, magic resist and life steal whose active removes crowd control from you (not knock-ups) and gives move speed.",
    buyWhen: "Buy it late when one enemy stun, root or suppression keeps catching and killing you.",
    goodOn: ["Jinx", "Caitlyn", "Vayne", "Yasuo", "Yone"]
  },
  "Youmuu's Ghostblade": {
    what: "A lethality item (lethality ignores some of the enemy's armor) with move speed out of combat and an active that gives move speed and lets you walk through units.",
    buyWhen: "Buy it on attack-damage assassins who roam the map and need to reach squishy targets.",
    goodOn: ["Talon", "Pyke", "Qiyana", "Rengar", "Khazix", "Naafiri"]
  },
  "Randuin's Omen": {
    what: "A tank item with health and a lot of armor that makes you take 30% less damage from critical strikes.",
    buyWhen: "Buy it on tanks when the enemy has a fed crit marksman or other crit champions.",
    goodOn: ["Malphite", "Rammus", "Ornn", "Sejuani", "Leona", "Zac"]
  },
  "Hextech Gunblade": {
    what: "A hybrid item with ability power, attack damage and omnivamp whose active shocks an enemy champion for magic damage and slows them.",
    buyWhen: "Buy it on champions who use both attack damage and ability power and want healing and a slow to catch targets.",
    goodOn: ["Akali", "Kayle", "Diana"]
  },
  "Hextech Rocketbelt": {
    what: "A mage item with ability power and health whose active dashes you forward and fires missiles that deal magic damage.",
    buyWhen: "Buy it on mages who need to get close to start their combo or chase enemies down.",
    goodOn: ["Galio", "Sylas", "Annie", "Orianna", "TwistedFate", "Kennen"]
  },
  "Blade of The Ruined King": {
    what: "An attack-speed item with life steal whose attacks deal damage based on the enemy's current health, and hitting a champion 3 times slows them.",
    buyWhen: "Buy it on fighters and marksmen who attack a lot, especially against tanks with high health.",
    goodOn: ["Irelia", "Vayne", "Yasuo", "Yone", "KogMaw", "Viego"]
  },
  "Maw of Malmortius": {
    what: "An attack-damage item with magic resist that shields you from magic damage when it would drop you below 30% health.",
    buyWhen: "Buy it on attack-damage champions when an enemy mage or assassin keeps bursting you with magic damage.",
    goodOn: ["Ezreal", "Yasuo", "Riven", "Jayce", "Talon", "Renekton"]
  },
  "Zhonya's Hourglass": {
    what: "A mage item with ability power and armor whose active puts you in stasis for 2.5 seconds (you can't act, but you can't be hurt or targeted).",
    buyWhen: "Buy it on mages and ability-power assassins when enemies dive you with physical damage, or when you need to survive after jumping in.",
    goodOn: ["Ahri", "Akali", "Fizz", "Katarina", "Leblanc", "Sylas"]
  },
  "Ionian Boots of Lucidity": {
    what: "Cheap boots with ability haste (lower ability cooldowns) and summoner spell haste (Flash and others come back sooner).",
    buyWhen: "Buy them on champions who want to cast abilities more often, and when the enemy has no threat that needs defensive boots.",
    goodOn: ["Ezreal", "Sylas", "Taliyah", "Zed", "Zoe", "Lux"]
  },
  "Spear of Shojin": {
    what: "A fighter item with attack damage and health that lowers basic ability cooldowns and increases your ability damage as you keep hitting with abilities.",
    buyWhen: "Buy it on attack-damage champions who deal most of their damage with abilities.",
    goodOn: ["Ezreal", "Smolder", "Jayce", "Riven", "Renekton", "Aatrox"]
  },
  "Morellonomicon": {
    what: "A mage item with ability power and health whose magic damage puts 40% Wounds on enemy champions (Wounds reduce their healing).",
    buyWhen: "Buy it on mages when the enemy team heals a lot, such as champions with self-healing or healing supports.",
    goodOn: ["Lux", "Malzahar", "Xerath", "Ziggs", "Brand", "Zyra"],
    avoid: "If the enemy barely heals, buy a damage item instead."
  },
  "Immortal Path": {
    what: "The upgrade of {{item:Gluttonous Greaves}}: you deal 4% more damage while above half health, and get stronger healing and shields while below half health.",
    buyWhen: "Mid laners get this upgrade free when they complete the mid role quest with Gluttonous Greaves; it's worth aiming for if you fight often and rely on healing.",
    goodOn: []
  },
  "Swiftmarch": {
    what: "The upgrade of {{item:Boots of Swiftness}} with even more move speed, weaker slows on you, and bonus damage based on your move speed.",
    buyWhen: "Mid laners get this upgrade free when they complete the mid role quest with Boots of Swiftness; it's worth it if you roam a lot or the enemy slows you often.",
    goodOn: []
  },
  "Crimson Lucidity": {
    what: "The upgrade of {{item:Ionian Boots of Lucidity}} with more ability haste and summoner spell haste, plus move speed when you hit enemies or help allies with abilities.",
    buyWhen: "Mid laners get this upgrade free when they complete the mid role quest with Ionian Boots; it's worth it on champions who cast a lot of abilities.",
    goodOn: ["Sylas", "Taliyah", "Zoe", "Hwei", "Orianna"]
  },
  "Gunmetal Greaves": {
    what: "The upgrade of {{item:Berserker's Greaves}} with more attack speed and some life steal.",
    buyWhen: "Mid laners get this upgrade free when they complete the mid role quest with Berserker's Greaves; it's worth it on champions who fight with basic attacks.",
    goodOn: ["Yasuo", "Yone", "Kayle"]
  },
  "Chainlaced Crushers": {
    what: "The upgrade of {{item:Mercury's Treads}} with more magic resist and a magic shield after an enemy champion hits you with magic damage.",
    buyWhen: "Mid laners get this upgrade free when they complete the mid role quest with Mercury's Treads; it's worth it when the enemy has heavy magic damage or crowd control.",
    goodOn: ["Galio", "Akali", "Diana", "Kassadin", "Sylas"]
  },
  "Armored Advance": {
    what: "The upgrade of {{item:Plated Steelcaps}} with more armor and a physical shield after an enemy champion hits you with physical damage.",
    buyWhen: "Mid laners get this upgrade free when they complete the mid role quest with Plated Steelcaps; it's worth it when the enemy has lots of basic attackers.",
    goodOn: ["Galio", "Irelia", "Diana"]
  },
  "Spellslinger's Shoes": {
    what: "The upgrade of {{item:Sorcerer's Shoes}} with more magic penetration, so your magic damage hits even harder.",
    buyWhen: "Mid laners get this upgrade free when they complete the mid role quest with Sorcerer's Shoes; it's the natural choice for damage mages.",
    goodOn: ["Syndra", "Ahri", "Viktor", "Orianna", "Veigar", "Lux"]
  },
  "Umbral Glaive": {
    what: "A lethality item whose next attack after being unseen deals extra true damage, and that reveals nearby enemy wards so you can destroy them.",
    buyWhen: "Buy it on attack-damage assassins and junglers who want to clear enemy vision and ambush targets.",
    goodOn: ["Talon", "Pyke", "Khazix", "Rengar", "Kayn", "Nocturne"]
  },
  "Hullbreaker": {
    what: "A fighter item with attack damage and health whose every fifth attack deals bonus damage, more to towers, and makes nearby big allied minions tougher.",
    buyWhen: "Buy it on fighters who split push (push a side lane alone to take towers while the team is elsewhere).",
    goodOn: ["Yorick", "Nasus", "Trundle", "Irelia", "Jax"],
    avoid: "It's weak if you spend most of the game grouped with your team."
  },
  "Locket of the Iron Solari": {
    what: "A tank support item with health and both resistances whose active gives nearby allies a short shield.",
    buyWhen: "Buy it as a tank support when the enemy has lots of burst damage in teamfights.",
    goodOn: ["Galio", "Braum", "Leona", "Nautilus", "Taric", "Rell"]
  },
  "Mikael's Blessing": {
    what: "A support item whose active removes crowd control from an ally (not knock-ups or suppression) and heals them.",
    buyWhen: "Buy it as an enchanter support when the enemy has a stun, root or charm that catches and kills your carry.",
    goodOn: ["Janna", "Lulu", "Nami", "Soraka", "Milio", "Karma"]
  },
  "Terminus": {
    what: "An on-hit item with attack damage and attack speed whose attacks deal bonus magic damage and alternate between extra resistances and extra penetration.",
    buyWhen: "Buy it on attack-speed champions who stay in long fights and hit the same target many times.",
    goodOn: ["Kaisa", "Vayne", "Jax", "KogMaw"]
  },
  "Ardent Censer": {
    what: "A support item: healing or shielding an ally gives you both attack speed and bonus magic damage on attacks for 6 seconds.",
    buyWhen: "Buy it as an enchanter support when your team has a marksman or fighter who deals damage with basic attacks.",
    goodOn: ["Lulu", "Janna", "Nami", "Soraka", "Milio", "Yuumi"]
  },
  "Essence Reaver": {
    what: "A crit item with attack damage and ability haste: after you use an ability your next attack hits harder and gives back mana.",
    buyWhen: "Buy it on attack-damage champions who use a lot of mana and attack between abilities.",
    goodOn: ["Smolder", "Ezreal", "Gangplank"]
  },
  "Dead Man's Plate": {
    what: "A tank item with health, armor and move speed that builds up speed while you move and makes slows on you 15% weaker; your next attack uses that speed for bonus damage.",
    buyWhen: "Buy it on tanks and fighters who need to run at the enemy team or move around the map a lot.",
    goodOn: ["Sion", "Hecarim", "Skarner", "Udyr", "Nautilus", "Poppy"]
  },
  "Titanic Hydra": {
    what: "A fighter item with attack damage and lots of health whose attacks hit enemies behind your target, with an empowered hit for extra damage.",
    buyWhen: "Buy it on fighters and tanks who build health and want better wave clear and damage.",
    goodOn: ["Sett", "Sion", "DrMundo", "Nasus", "Volibear"]
  },
  "Edge of Night": {
    what: "A lethality item with health that blocks the next enemy ability that would hit you.",
    buyWhen: "Buy it on attack-damage assassins and carries when an enemy stun or burst ability keeps stopping you.",
    goodOn: ["Zed", "MissFortune", "Talon", "Qiyana", "Kayn"]
  },
  "World Atlas": {
    what: "The support starting item that gives you gold without taking minion kills and later upgrades into your final support item.",
    buyWhen: "Every support starts with it so the marksman can take the minion gold. Complete the support role quest to upgrade it.",
    goodOn: [],
    avoid: "Don't buy it unless you are the support."
  },
  "Celestial Opposition": {
    what: "A final support item that reduces damage you take from champions for 2 seconds after getting hit, then slows nearby enemies; its active places wards.",
    buyWhen: "Pick it as a tank support who goes in first and takes a lot of damage.",
    goodOn: ["Leona", "Nautilus", "Alistar", "Braum", "Rell", "Galio"]
  },
  "Dream Maker": {
    what: "A final support item: healing or shielding an ally makes their next attack deal bonus magic damage and reduces the next damage they take; its active places wards.",
    buyWhen: "Pick it as an enchanter support who heals or shields often.",
    goodOn: ["Lulu", "Janna", "Nami", "Soraka", "Milio", "Sona"]
  },
  "Zaz'Zak's Realmspike": {
    what: "A final support item that makes your ability damage on champions cause an extra magic explosion; its active places wards.",
    buyWhen: "Pick it as a mage support who pokes enemies with damaging abilities.",
    goodOn: ["Lux", "Xerath", "Zyra", "Brand", "Velkoz", "Zoe"]
  },
  "Solstice Sleigh": {
    what: "A final support item: slowing or stunning an enemy champion near allies heals and speeds up you and a nearby ally; its active places wards.",
    buyWhen: "Pick it as a support with crowd control who wants to catch enemies and roam with an ally.",
    goodOn: ["Rakan", "Bard", "Thresh", "Blitzcrank", "Rell"]
  },
  "Bloodsong": {
    what: "A final support item: after you use an ability your next attack deals bonus damage and makes the champion take more damage for 4 seconds; its active places wards.",
    buyWhen: "Pick it as a support who often attacks right after landing an ability, to help your team burst that target.",
    goodOn: ["Senna", "Pyke", "Thresh", "Blitzcrank", "Leona"]
  },
  "Imperial Mandate": {
    what: "A support item with ability power that lowers cooldowns of your immobilizing abilities and makes enemies you immobilize take 7% more damage for 4 seconds.",
    buyWhen: "Buy it as a mage support with roots, stuns or other abilities that stop enemies from moving.",
    goodOn: ["Morgana", "Lux", "Neeko", "Zoe", "Seraphine", "Galio"]
  },
  "Force of Nature": {
    what: "A defensive item with health and magic resist that gives a lot more magic resist and some move speed after you take magic damage from champions 8 times.",
    buyWhen: "Buy it on tanks and fighters when the enemy has several sources of magic damage in long fights.",
    goodOn: ["Ornn", "Sion", "Chogath", "Zac", "Sejuani"],
    avoid: "Against one burst mage, {{item:Kaenic Rookern}} or {{item:Maw of Malmortius}} reacts faster."
  },
  "Horizon Focus": {
    what: "A mage item with ability power and ability haste: hitting a champion with an ability from 600 range or more reveals them and nearby enemies.",
    buyWhen: "Buy it on long-range mages who hit enemies from far away with abilities.",
    goodOn: ["Xerath", "Zoe", "Ziggs", "Velkoz", "Lux"]
  },
  "Cosmic Drive": {
    what: "A mage item with ability power, health and lots of ability haste that gives you move speed after damaging champions with magic or true damage.",
    buyWhen: "Buy it on ability-power champions who fight up close and need to move around and dodge in fights.",
    goodOn: ["Ekko", "Diana", "Kennen", "Rumble", "Lillia"]
  },
  "Riftmaker": {
    what: "A mage item with ability power and health that deals more damage the longer you stay in a fight, gives omnivamp at full strength, and turns some health into ability power.",
    buyWhen: "Buy it on ability-power fighters and battle mages who stay in long fights.",
    goodOn: ["Diana", "Sylas", "Vladimir", "Mordekaiser", "Gwen", "Rumble"]
  },
  "Shadowflame": {
    what: "A mage item with a lot of ability power and magic penetration whose magic and true damage deal 20% more to enemies below 40% health.",
    buyWhen: "Buy it as a second or third item on burst mages and assassins who finish off low-health enemies.",
    goodOn: ["Ahri", "Syndra", "Leblanc", "Annie", "Akali", "Fizz"]
  },
  "Stormsurge": {
    what: "A mage item with ability power, magic penetration and move speed: dealing 25% of a champion's max health within 2.5 seconds triggers extra magic damage on them.",
    buyWhen: "Buy it on burst mages who deal a lot of damage quickly to one target.",
    goodOn: ["Annie", "Aurora", "Lux", "Veigar", "Leblanc", "Syndra"]
  },
  "Death's Dance": {
    what: "A fighter item with attack damage and armor that delays part of the damage you take over 3 seconds, and removes that delayed damage if you get a takedown.",
    buyWhen: "Buy it on attack-damage fighters when the enemy has physical burst, so you survive long enough to fight back.",
    goodOn: ["Irelia", "Yasuo", "Yone", "Jax", "Riven"]
  },
  "Chempunk Chainsword": {
    what: "A fighter item with attack damage, health and ability haste whose physical damage puts 40% Wounds on enemy champions (Wounds reduce their healing).",
    buyWhen: "Buy it on attack-damage fighters and junglers when the enemy team heals a lot.",
    goodOn: ["Darius", "Renekton", "Pantheon", "Riven", "Rengar"],
    avoid: "If the enemy barely heals, another damage item is better."
  },
  "Sundered Sky": {
    what: "A fighter item with attack damage and health whose first attack against a champion is a critical strike that heals you.",
    buyWhen: "Buy it on melee fighters who jump in and out of fights and want healing during short trades.",
    goodOn: ["LeeSin", "Riven", "Fiora", "Camille", "Darius"]
  },
  "Staff of Flowing Water": {
    what: "A support item: healing or shielding an ally gives you both 40 ability power and 15 ability haste for 6 seconds.",
    buyWhen: "Buy it as an enchanter support when your team has mages or other ability-power damage dealers.",
    goodOn: ["Soraka", "Nami", "Sona", "Lulu", "Yuumi", "Milio"]
  },
  "Moonstone Renewer": {
    what: "A support item with health and ability haste: your heals and shields on an ally also jump to another ally at reduced strength.",
    buyWhen: "Buy it as an enchanter support who heals or shields often in long teamfights.",
    goodOn: ["Soraka", "Sona", "Yuumi", "Nami", "Seraphine"]
  },
  "Echoes of Helia": {
    what: "A support item: damaging enemy champions stores charges, and your next heal or shield on an ally uses them to restore extra health.",
    buyWhen: "Buy it as an enchanter support who also deals damage with abilities during fights.",
    goodOn: ["Karma", "Seraphine", "Nami", "Sona"]
  },
  "Dawncore": {
    what: "A support item that gives more heal and shield power and ability power the more base mana regeneration you have.",
    buyWhen: "Buy it as a second or third item on enchanter supports who already have mana regeneration from other support items.",
    goodOn: ["Sona", "Soraka", "Nami", "Milio", "Yuumi"]
  },
  "Stridebreaker": {
    what: "A fighter item with attack damage, attack speed and health whose attacks hit nearby enemies, and its active damages and slows enemies around you and speeds you up.",
    buyWhen: "Buy it on melee fighters who have trouble catching mobile enemies.",
    goodOn: ["Darius", "Hecarim", "Olaf", "Trundle", "Sett"]
  },
  "Liandry's Torment": {
    what: "A mage item with ability power and health whose damaging abilities burn enemies for 2% of their max health per second, and you deal more damage the longer you fight.",
    buyWhen: "Buy it on mages who fight for a long time, especially against tanks with lots of health.",
    goodOn: ["Brand", "Malzahar", "Hwei", "Zyra", "Cassiopeia", "Lillia"]
  },
  "Luden's Echo": {
    what: "A mage item with a lot of ability power and mana whose damaging abilities fire extra bolts that hit your target and enemies near them.",
    buyWhen: "Buy it as a first item on burst and poke mages who want strong early damage.",
    goodOn: ["Lux", "Syndra", "Orianna", "Xerath", "Ziggs", "Leblanc"]
  },
  "Rod of Ages": {
    what: "A mage item that grows stronger every minute (up to 10 times, then gives you a level), restores mana when you take damage and heals you when you cast.",
    buyWhen: "Buy it early on mages who want to survive lane and scale into the late game.",
    goodOn: ["Kassadin", "TwistedFate", "Ryze", "Veigar", "Sylas"],
    avoid: "Buying it late wastes its growth, since the stacks take 10 minutes."
  },
  "Iceborn Gauntlet": {
    what: "A tank item with health, armor and ability haste: after you use an ability your next attack deals bonus damage and creates a slowing frost field.",
    buyWhen: "Buy it on tanks and fighters who attack between abilities and want to slow enemies, especially against physical damage.",
    goodOn: ["Skarner", "Shen", "Ornn", "Malphite"]
  },
  "Hollow Radiance": {
    what: "A tank item with health and magic resist that burns nearby enemies after you deal or take damage, and enemies that die near you explode.",
    buyWhen: "Buy it on tanks when the enemy has magic damage and you want to help clear minion waves.",
    goodOn: ["Galio", "Amumu", "Zac", "Sejuani", "Ornn"]
  },
  "Jak'Sho, The Protean": {
    what: "A defensive item with health, armor and magic resist that boosts your armor and magic resist by 30% after 5 seconds of fighting champions.",
    buyWhen: "Buy it on tanks and fighters when the enemy has both physical and magic damage and fights last a long time.",
    goodOn: ["Ornn", "Sejuani", "Poppy", "Jax", "Vayne", "Yone"]
  },
  "Kraken Slayer": {
    what: "An attack-speed item whose every third attack deals bonus damage, more against low-health targets.",
    buyWhen: "Buy it on attack-speed champions who need to take down tough enemies in one-on-one fights.",
    goodOn: ["Irelia", "Kaisa", "Vayne", "KogMaw", "Varus"]
  },
  "Immortal Shieldbow": {
    what: "A crit item with attack damage that gives you a shield when damage would drop you below 30% health.",
    buyWhen: "Buy it on crit carries when assassins or divers keep bursting you down.",
    goodOn: ["Yasuo", "Yone", "Ashe", "Draven"]
  },
  "Navori Flickerblade": {
    what: "A crit item with attack speed whose attacks lower the remaining cooldowns of your basic abilities by 15%.",
    buyWhen: "Buy it on attack-speed champions whose basic abilities are a big part of their damage or safety.",
    goodOn: ["Yasuo", "Yone", "Tristana", "Xayah", "Samira"]
  },
  "The Collector": {
    what: "A crit item with attack damage and lethality that kills champions instantly below 5% health and gives 25 extra gold per kill.",
    buyWhen: "Buy it on marksmen who want strong early damage to win fights and secure kills.",
    goodOn: ["MissFortune", "Caitlyn", "Draven", "Jhin", "Tristana"]
  },
  "Eclipse": {
    what: "An attack-damage item with ability haste that gives you a short shield when you hit a champion with 2 attacks or abilities within 2 seconds.",
    buyWhen: "Buy it on attack-damage fighters and assassins who hit quickly with a combo of abilities.",
    goodOn: ["Pantheon", "Qiyana", "Aatrox", "Riven", "Talon", "Jayce"]
  },
  "Serylda's Grudge": {
    what: "An attack-damage item with armor penetration and ability haste whose damaging abilities slow enemies below 50% health.",
    buyWhen: "Buy it on attack-damage champions who use lots of abilities, when enemies start building armor.",
    goodOn: ["Ezreal", "Zed", "Jayce", "Varus", "Pantheon"]
  },
  "Serpent's Fang": {
    what: "A lethality item that weakens shields on enemy champions you damage.",
    buyWhen: "Buy it when the enemy has a lot of shields, such as an enchanter support or champions who shield themselves.",
    goodOn: ["Pyke", "Talon", "Kayn", "Qiyana", "Zed"],
    avoid: "If the enemy has few shields, another lethality item is better."
  },
  "Axiom Arc": {
    what: "A lethality item with ability haste that refunds part of your ultimate cooldown when a champion you damaged dies.",
    buyWhen: "Buy it on attack-damage assassins whose ultimate helps them get kills, so they can use it again sooner.",
    goodOn: ["Zed", "Pyke", "Talon", "Varus", "Khazix"]
  },
  "Hubris": {
    what: "A lethality item that gives you extra attack damage for 90 seconds when a champion you damaged dies.",
    buyWhen: "Buy it on attack-damage assassins and marksmen who expect to snowball by getting kills.",
    goodOn: ["Jhin", "Zed", "Talon", "Naafiri", "Rengar", "Khazix"]
  },
  "Profane Hydra": {
    what: "A lethality item whose attacks hit nearby enemies, with an active that deals physical damage around you.",
    buyWhen: "Buy it on melee assassins who want faster wave clear and extra burst.",
    goodOn: ["Talon", "Naafiri", "Khazix", "Rengar", "Kayn"]
  },
  "Voltaic Cyclosword": {
    what: "A lethality item whose abilities trigger a charged attack that deals damage based on the target's current health and gives extra lethality for 4 seconds.",
    buyWhen: "Buy it on attack-damage assassins who open fights with an ability and follow up with attacks.",
    goodOn: ["Zed", "Talon", "Qiyana", "Naafiri", "Pantheon"]
  },
  "Bloodletter's Curse": {
    what: "A mage item with ability power and health whose magic damage from abilities lowers the enemy's magic resist, stacking up to 4 times.",
    buyWhen: "Buy it on ability-power champions who hit enemies repeatedly, especially when your team also deals magic damage.",
    goodOn: ["Sylas", "Mordekaiser", "Rumble", "Brand", "Lillia"]
  },
  "Abyssal Mask": {
    what: "A tank item with health and magic resist that makes nearby enemy champions take 12% more magic damage.",
    buyWhen: "Buy it on tanks when the enemy has magic damage and your own team has mages who can use the bonus.",
    goodOn: ["Galio", "Amumu", "Sejuani", "Zac", "Maokai", "Leona"]
  }
};
