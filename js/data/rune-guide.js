/* Advice for runes and rune trees (rune pages). Based on Data Dragon rune text for the current patch. */
window.RA = window.RA || {};
RA.runeTrees = {
  Precision: "Precision is about winning longer fights with basic attacks: attack speed, healing and extra damage that grows the longer you fight. Marksmen and melee fighters who hit enemies over and over take it.",
  Domination: "Domination is about burst damage and hunting: deal a lot of damage quickly, then get rewarded for kills. Assassins, burst mages and aggressive junglers take it.",
  Sorcery: "Sorcery is about spells: ability damage, mana, cooldowns and movement speed. Mages, poke champions and many supports take it.",
  Resolve: "Resolve is about staying alive: extra health, armor, magic resist, healing and shields. Tanks, frontline supports and durable top laners take it.",
  Inspiration: "Inspiration is a toolbox of unusual effects: extra gold, free items, potions and summoner spell tricks. It is most often a secondary tree for players who want lane sustain or faster summoner spells."
};
RA.runeGuide = {
  "Electrocute": {
    what: "Hit an enemy champion with 3 separate attacks or abilities within 3 seconds to deal a burst of bonus damage.",
    takeWhen: "Take it on assassins and burst mages who can land a quick combo and kill a target in a few seconds. It has a 20 second cooldown, so it rewards short, sharp trades.",
    goodOn: ["Ahri", "Leblanc", "Fizz", "Katarina", "Akali", "Evelynn"]
  },
  "Dark Harvest": {
    what: "Damaging a champion below 50% health deals bonus damage and collects a soul, which makes Dark Harvest stronger for the rest of the game.",
    takeWhen: "Take it on champions who finish off low-health enemies and get many kills, especially in the jungle or as damage supports. It gets stronger the more souls you collect, so it suits games where you fight often.",
    goodOn: ["Karthus", "Ekko", "Taliyah", "Graves", "Nidalee", "Elise"]
  },
  "Hail of Blades": {
    what: "Your next 3 attacks on an enemy champion are much faster and deal a bit of bonus true damage.",
    takeWhen: "Take it on champions who jump in and want to land several attacks right away. Attack resets add one more fast attack, so champions with attack resets get even more out of it.",
    goodOn: ["Pyke", "Ekko", "MasterYi", "Viego", "Nocturne", "Shaco"]
  },
  "Cheap Shot": {
    what: "Damaging a champion who is slowed, stunned or otherwise impaired deals a little bonus true damage.",
    takeWhen: "Pick this over {{rune:Taste of Blood}} when your kit slows or stuns enemies before you damage them, so it triggers easily. It has only a 4 second cooldown.",
    goodOn: []
  },
  "Taste of Blood": {
    what: "Heal a small amount when you damage an enemy champion, once every 20 seconds.",
    takeWhen: "Pick this when you are new or expect a hard lane and want some healing from short trades. It is the safe default in this row.",
    goodOn: []
  },
  "Sudden Impact": {
    what: "After you dash, blink, teleport or leave stealth, your next damage on a champion deals bonus true damage.",
    takeWhen: "Pick this over {{rune:Taste of Blood}} on champions whose combos start with a dash, blink or stealth. If your champion has no dash, it will rarely trigger.",
    goodOn: ["Kayn", "Talon", "Evelynn", "Rengar"]
  },
  "Sixth Sense": {
    what: "Automatically spots a nearby hidden enemy ward and tracks it for your team, with a long cooldown.",
    takeWhen: "Pick it when you want help finding enemy wards without sweeping. From level 11 it also reveals the ward for 10 seconds so your team can kill it.",
    goodOn: []
  },
  "Grisly Mementos": {
    what: "Each champion takedown gives a memento (up to 18), and each memento makes your trinket come back faster.",
    takeWhen: "Pick it over {{rune:Sixth Sense}} when you expect to get many kills and assists and want to place or sweep wards more often. It does little if you are not fighting.",
    goodOn: []
  },
  "Deep Ward": {
    what: "Your wards in the enemy jungle get 1 extra health and last longer; from level 9 river wards get this too.",
    takeWhen: "Pick it when you like to ward deep in enemy territory, like many junglers and supports. Your wards survive longer and take one more hit to kill.",
    goodOn: []
  },
  "Treasure Hunter": {
    what: "The first takedown on each enemy champion gives you extra gold, and the bonus grows with each new champion you take down.",
    takeWhen: "Pick it when you want more gold from early fights and expect to take down many different enemies. It helps snowball champions who need items fast.",
    goodOn: []
  },
  "Relentless Hunter": {
    what: "Gain move speed out of combat for each enemy champion you have taken down at least once.",
    takeWhen: "Pick it over {{rune:Treasure Hunter}} on roaming junglers and supports who walk around the map a lot. The speed only works out of combat.",
    goodOn: []
  },
  "Ultimate Hunter": {
    what: "Your ultimate gets ability haste, plus more for each enemy champion you have taken down at least once.",
    takeWhen: "Pick it over {{rune:Treasure Hunter}} when your ultimate is the most important part of your champion and you want to use it more often.",
    goodOn: []
  },
  "Glacial Augment": {
    what: "Stunning, rooting or otherwise immobilizing an enemy creates frozen zones that slow enemies and make them deal less damage to your allies.",
    takeWhen: "Take it on supports and tanks who immobilize enemies often and want to protect their team. The damage reduction only helps your allies, not yourself.",
    goodOn: ["Blitzcrank", "Taric", "Thresh", "Morgana", "Ivern", "Galio"]
  },
  "Unsealed Spellbook": {
    what: "Lets you swap one of your summoner spells for a different single-use summoner spell during the game, starting at 6 minutes.",
    takeWhen: "Take it once you know summoner spells well and want to pick the right spell for each moment. It is hard to use well, so beginners should usually pick another keystone.",
    goodOn: ["Alistar", "Rakan", "TwistedFate", "Poppy"]
  },
  "First Strike": {
    what: "If you hit an enemy champion first when a fight starts, you deal 7% extra damage for 3 seconds and turn part of that damage into gold.",
    takeWhen: "Take it on champions who can start trades safely from range and want extra gold to reach items sooner. It does nothing if the enemy always hits you first.",
    goodOn: ["Veigar", "Zed", "MissFortune", "Kassadin", "Syndra", "Xerath"]
  },
  "Hextech Flashtraption": {
    what: "While Flash is on cooldown, you get Hexflash: channel for 2 seconds to blink to a new spot.",
    takeWhen: "Pick it when you want a slow extra blink for engaging or crossing walls while Flash is down. It cannot be used to escape mid-fight, because entering champion combat puts it on cooldown.",
    goodOn: []
  },
  "Magical Footwear": {
    what: "You get free {{item:Slightly Magical Footwear}} at 12 minutes, sooner if you get takedowns, but you cannot buy boots before then.",
    takeWhen: "Pick it when your champion can wait for boots and you want to save the gold. Avoid it if you need early boots to dodge skillshots or chase.",
    goodOn: []
  },
  "Cash Back": {
    what: "Get 7.5% of the gold back when you buy a legendary item.",
    takeWhen: "Pick it over {{rune:Magical Footwear}} when you want a little extra gold over the whole game and need to buy boots early.",
    goodOn: []
  },
  "Triple Tonic": {
    what: "You get free elixirs at levels 3, 6 and 9: {{item:Elixir of Avarice}}, {{item:Elixir of Force}} and {{item:Elixir of Skill}}.",
    takeWhen: "Pick it when you want free power boosts in the early and mid game. Use each elixir before a fight or an objective.",
    goodOn: []
  },
  "Time Warp Tonic": {
    what: "When you drink a potion, 40% of its healing happens instantly instead of over time.",
    takeWhen: "Pick it over {{rune:Biscuit Delivery}} when you buy several potions and want them to save you in sudden trades.",
    goodOn: []
  },
  "Biscuit Delivery": {
    what: "You get a free {{item:Total Biscuit of Everlasting Will}} every 2 minutes until 6 minutes, and each one you eat gives 30 max health permanently.",
    takeWhen: "Pick it for easy lane sustain, especially in hard lanes. It is a simple, safe choice for beginners in this row.",
    goodOn: []
  },
  "Cosmic Insight": {
    what: "Your summoner spells and item actives come back faster.",
    takeWhen: "Pick it when you want Flash and your other summoner spells up more often. It is a solid generic choice in this row.",
    goodOn: []
  },
  "Approach Velocity": {
    what: "Gain move speed toward nearby enemy champions who are slowed or stunned, with a bigger bonus if you caused it.",
    takeWhen: "Pick it over {{rune:Cosmic Insight}} on champions with slows or stuns who need to stay close to their target.",
    goodOn: []
  },
  "Jack Of All Trades": {
    what: "Each different stat you get from items gives 1 ability haste, plus bonus adaptive force at 5 and 10 different stats.",
    takeWhen: "Pick it when your build mixes many different stats, such as items that give health, armor, ability haste and damage together.",
    goodOn: []
  },
  "Press the Attack": {
    what: "Hit an enemy champion with 3 basic attacks in a row to deal bonus damage. After that, all your damage is 8% higher until you leave combat with champions.",
    takeWhen: "Take it on champions who trade with quick basic attack combos and want to win short and medium fights in lane.",
    goodOn: ["Lucian", "MissFortune", "Aphelios", "Teemo"]
  },
  "Lethal Tempo": {
    what: "Attacking enemy champions gives you stacking attack speed, and at 6 stacks your attacks deal bonus damage.",
    takeWhen: "Take it on champions who want to keep attacking in long fights and build attack speed. It is weak in very short fights, because it needs time to stack.",
    goodOn: ["Jinx", "Kaisa", "KogMaw", "Twitch", "Yasuo", "Yone"]
  },
  "Fleet Footwork": {
    what: "Moving and attacking charges up an attack that heals you and gives a short burst of move speed.",
    takeWhen: "Take it on champions who want safe lane sustain and help kiting or escaping. Healing and speed are weaker for ranged champions.",
    goodOn: ["Jhin", "Nasus", "Talon", "Gnar", "DrMundo"]
  },
  "Conqueror": {
    what: "Damaging enemy champions builds stacks of extra damage, and at 12 stacks you heal for part of the damage you deal.",
    takeWhen: "Take it on melee fighters who stay in long fights and keep hitting. Ranged champions build stacks more slowly with basic attacks and heal less.",
    goodOn: ["Darius", "Fiora", "Irelia", "Riven", "Aatrox", "Sett"]
  },
  "Absorb Life": {
    what: "Killing a target, including minions, heals you.",
    takeWhen: "Pick it when you want steady healing while farming in lane. Pick {{rune:Triumph}} instead if you care more about surviving fights with champions.",
    goodOn: []
  },
  "Triumph": {
    what: "Champion takedowns restore some of your health and give 20 extra gold.",
    takeWhen: "Pick it when you often fight to low health and want a heal after a kill or assist to survive. It is the common safe choice in this row.",
    goodOn: []
  },
  "Presence of Mind": {
    what: "Damaging an enemy champion gives back some mana or energy, and takedowns restore 15% of your max mana or energy.",
    takeWhen: "Pick it on champions who run out of mana or energy in lane. Champions with no mana or energy get nothing from it.",
    goodOn: []
  },
  "Legend: Alacrity": {
    what: "Gain attack speed, which grows as you earn Legend stacks from kills, monsters and minions.",
    takeWhen: "Pick it on champions who rely on basic attacks and want more attack speed.",
    goodOn: []
  },
  "Legend: Haste": {
    what: "Gain basic ability haste, which grows as you earn Legend stacks from kills, monsters and minions.",
    takeWhen: "Pick it over {{rune:Legend: Alacrity}} when your basic abilities do most of your damage and you want to cast them more often.",
    goodOn: []
  },
  "Legend: Bloodline": {
    what: "Gain life steal as you earn Legend stacks, and 85 max health once you reach all 15 stacks.",
    takeWhen: "Pick it on attack damage champions who want more healing from their attacks in long games. It takes more stacks to finish than the other Legend runes.",
    goodOn: []
  },
  "Coup de Grace": {
    what: "Deal 8% more damage to champions below 40% health.",
    takeWhen: "Pick it when your job is to finish off low-health enemies. Pick {{rune:Cut Down}} instead if you mostly fight healthy, tanky targets.",
    goodOn: []
  },
  "Cut Down": {
    what: "Deal 8% more damage to champions above 60% health.",
    takeWhen: "Pick it when the enemy team has many tanks or high-health champions, or when you deal most of your damage at the start of a fight.",
    goodOn: []
  },
  "Last Stand": {
    what: "Deal more damage to champions while you are below 60% health, up to the max bonus at 30% health.",
    takeWhen: "Pick it on melee fighters who stay in fights while low on health and keep hitting.",
    goodOn: []
  },
  "Grasp of the Undying": {
    what: "Every 4 seconds in combat, your next attack on a champion deals bonus damage based on your max health, heals you and gives you 5 permanent health.",
    takeWhen: "Take it on tanky top laners who can hit the enemy often in lane. It is much weaker on ranged champions.",
    goodOn: ["Ornn", "Shen", "Sion", "Chogath", "DrMundo"]
  },
  "Aftershock": {
    what: "After you immobilize an enemy champion, you gain lots of armor and magic resist for 2.5 seconds, then explode for damage around you.",
    takeWhen: "Take it on tanks and engage supports who start fights with a stun, root or knock-up and want to survive the enemy's reply.",
    goodOn: ["Leona", "Nautilus", "Rell", "Alistar", "Sejuani", "Zac"]
  },
  "Guardian": {
    what: "Protects nearby allies and allies you target with spells, giving both of you a shield if one of you takes enough damage.",
    takeWhen: "Take it on supports who stay close to their carry and want to save them from burst damage.",
    goodOn: ["Braum", "Rakan", "Renata", "Thresh", "Taric"]
  },
  "Demolish": {
    what: "Every 30 seconds, your third attack on a tower deals bonus damage based on your max health.",
    takeWhen: "Pick it when you plan to hit towers a lot, often in side lanes. It is a strong pick on high-health champions.",
    goodOn: []
  },
  "Font of Life": {
    what: "Slowing, rooting or otherwise impairing an enemy champion heals you and the lowest-health nearby ally.",
    takeWhen: "Pick it over {{rune:Demolish}} on supports and tanks who slow or stun enemies often in team fights.",
    goodOn: []
  },
  "Shield Bash": {
    what: "Whenever you get a new shield, your next attack on a champion deals bonus damage.",
    takeWhen: "Pick it on champions who shield themselves often in fights. If you rarely get shields, it does nothing.",
    goodOn: []
  },
  "Conditioning": {
    what: "After 12 minutes, gain 8 armor and 8 magic resist, plus 3% more of both.",
    takeWhen: "Pick it on tanks who will last into the mid and late game. Pick {{rune:Bone Plating}} or {{rune:Second Wind}} instead if you need help in the early lane.",
    goodOn: []
  },
  "Second Wind": {
    what: "After an enemy champion damages you, heal for part of your missing health over 10 seconds.",
    takeWhen: "Pick it over {{rune:Bone Plating}} when the enemy laner pokes you from range with lots of small hits.",
    goodOn: []
  },
  "Bone Plating": {
    what: "After an enemy champion damages you, their next 3 hits on you deal less damage.",
    takeWhen: "Pick it over {{rune:Second Wind}} when the enemy laner goes all in with quick combos or bursts you down.",
    goodOn: []
  },
  "Overgrowth": {
    what: "Minions and monsters dying near you give you permanent max health, plus a bigger bonus after 120 of them.",
    takeWhen: "Pick it on tanks who want more health over the game, especially in a farming lane.",
    goodOn: []
  },
  "Revitalize": {
    what: "Gain 5% heal and shield power, and heals and shields are stronger on targets below 40% health.",
    takeWhen: "Pick it on healers, shielders and champions who heal themselves a lot.",
    goodOn: []
  },
  "Unflinching": {
    what: "Gain 10 armor and magic resist while crowd controlled and for 2 seconds after.",
    takeWhen: "Pick it over {{rune:Overgrowth}} when the enemy team has a lot of stuns, roots and slows.",
    goodOn: []
  },
  "Summon Aery": {
    what: "Damaging enemies sends Aery to deal a little damage, and helping allies with abilities sends Aery to shield them.",
    takeWhen: "Take it on supports and poke champions who hit enemies or shield allies often. Aery has to fly back to you before she can be sent again.",
    goodOn: ["Janna", "Lulu", "Karma", "Soraka", "Nami"]
  },
  "Arcane Comet": {
    what: "Damaging a champion with an ability drops a comet on them, which deals more damage the farther away you are.",
    takeWhen: "Take it on long-range mages and poke champions who hit abilities from a distance. Slow or easy-to-dodge abilities can make the comet miss.",
    goodOn: ["Xerath", "Velkoz", "Lux", "Ziggs", "Zyra"]
  },
  "Stormraider's Surge": {
    what: "Dealing 25% of a champion's max health within 3 seconds gives you a big burst of move speed and slow resistance for 4 seconds.",
    takeWhen: "Take it on champions who deal a lot of damage quickly and then want to chase or get away. The speed is weaker on ranged champions.",
    goodOn: ["Vladimir", "Taliyah", "Galio", "Diana", "Orianna"]
  },
  "Deathfire Touch": {
    what: "Damaging a champion with an ability sets them on fire, and the burn gets stronger if they keep burning for 3 seconds.",
    takeWhen: "Take it on champions who hit the same target with abilities again and again. Single-target hits burn longer than area hits.",
    goodOn: ["Malzahar", "Smolder", "Viktor", "Hwei", "Taliyah"]
  },
  "Axiom Arcanist": {
    what: "Your ultimate deals more damage and gives more healing and shielding, and takedowns lower its current cooldown.",
    takeWhen: "Pick it when your ultimate is a big part of your damage or healing. The bonus is smaller for area damage.",
    goodOn: ["Garen", "Chogath", "Fiddlesticks", "Karthus", "Annie", "Twitch"]
  },
  "Manaflow Band": {
    what: "Hitting enemy champions with abilities raises your max mana by 25 at a time, up to 250, then slowly restores mana.",
    takeWhen: "Pick it on mana-hungry champions who poke enemies with abilities in lane. It is the safe choice in this row for most mages.",
    goodOn: []
  },
  "Nimbus Cloak": {
    what: "After you use a summoner spell, gain a short burst of move speed and walk through units.",
    takeWhen: "Pick it when you want extra speed after Flash or Ghost to chase or escape. Spells with longer cooldowns give more speed.",
    goodOn: []
  },
  "Transcendence": {
    what: "Gain ability haste at levels 5 and 8, and from level 11 takedowns lower your basic ability cooldowns.",
    takeWhen: "Pick it on champions who want to cast abilities more often. It is a simple, reliable choice in this row.",
    goodOn: []
  },
  "Celerity": {
    what: "Gain 1% move speed, and all move speed bonuses are 7% more effective on you.",
    takeWhen: "Pick it over {{rune:Transcendence}} on champions who get a lot of move speed from their kit or items.",
    goodOn: []
  },
  "Absolute Focus": {
    what: "While above 70% health, gain bonus attack damage or ability power.",
    takeWhen: "Pick it on ranged champions who poke from a safe distance and stay at high health.",
    goodOn: []
  },
  "Scorch": {
    what: "Your next damaging ability on a champion sets them on fire for a little bonus damage, every 10 seconds.",
    takeWhen: "Pick it when you want stronger early lane trades with abilities. It falls off later, so pick {{rune:Gathering Storm}} if you plan to scale.",
    goodOn: []
  },
  "Waterwalking": {
    what: "Gain move speed and bonus damage while in the river.",
    takeWhen: "Pick it on junglers and roamers who fight around the river, for example near Scuttle Crab or dragon.",
    goodOn: []
  },
  "Gathering Storm": {
    what: "Every 10 minutes, gain bonus attack damage or ability power, and the bonus grows the longer the game lasts.",
    takeWhen: "Pick it on champions who are strong late in the game. It gives nothing for the first 10 minutes.",
    goodOn: []
  }
};
