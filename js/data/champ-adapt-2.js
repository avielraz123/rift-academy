/* "Adapt your build": item changes by enemy team composition. Baseline = RA.builds for the same key. */
window.RA = window.RA || {};
RA.champAdapt = RA.champAdapt || {};

RA.champAdapt["Akali:mid"] = {
  tanky: { items: [
    { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist, so your combo still hurts once they build it." },
    { item: "Riftmaker", why: "Its damage grows the longer you stay in combat and it adds health, which suits the longer fights tanks force on you." }
  ], tip: "Don't waste your full combo on the front line; wait for a carry to step forward." },
  squishy: { items: [
    { item: "Stormsurge", why: "Buy it second: one full combo easily deals the 25% max Health it needs, so the extra magic damage lands on low-health carries." }
  ], tip: "Look for picks on lone carries; your shroud and dashes make you hard to catch afterward." },
  ad: { items: [
    { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from attacks keeps you alive against auto-attackers and AD assassins." }
  ], tip: "Zhonya's Hourglass already gives armor; buy it earlier if an AD threat is getting fed." },
  ap: { items: [
    { item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Gives about the same Ability Power plus magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds, cutting their healing right when you need the kill." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "30% Tenacity shortens every stun and root, so one spell is less likely to end your all-in." },
    { item: "Banshee's Veil", why: "Its spell shield blocks the first crowd control ability thrown at you when you dive in." }
  ], tip: "Wait for their main stun to be used before you jump in." }
};

RA.champAdapt["Ashe:bot"] = {
  tanky: { items: [
    { item: "Blade of The Ruined King", replaces: "Phantom Dancer", why: "Your attacks deal a percentage of the target's current Health, which keeps your damage high against big health bars." },
    { item: "Lord Dominik's Regards", why: "Buy it third: armor penetration and bonus damage against high bonus Health cut through tanks." }
  ], tip: "Hit whoever is closest and safe to reach; your slows still help your team even when you can't kill the tank." },
  squishy: { items: [
    { item: "The Collector", replaces: "Lord Dominik's Regards", why: "Against low-armor targets its Lethality and execute below 5% Health do more than armor penetration would." }
  ], tip: "Your baseline crit build already kills squishy targets well; use Volley and your arrow to start picks." },
  ad: { items: [
    { item: "Immortal Shieldbow", replaces: "Hexoptics C44", why: "Same Attack Damage and crit, but you get a shield when a diver drops you below 30% Health." },
    { item: "Guardian Angel", why: "Gives armor and brings you back once after lethal damage, which buys time against AD assassins." }
  ], tip: "Stand behind your team and slow divers with your attacks and Volley." },
  ap: { items: [
    { item: "Mercurial Scimitar", why: "Magic resist and an active that removes crowd control (except knock-ups) helps you survive mage burst and catch combos." },
    { item: "Immortal Shieldbow", replaces: "Hexoptics C44", why: "Same Attack Damage and crit, plus a shield when burst drops you below 30% Health." }
  ] },
  healing: { items: [
    { item: "Mortal Reminder", why: "Buy it as soon as healing becomes a problem: your physical damage applies 40% Wounds from long range." }
  ] },
  cc: { items: [
    { item: "Mercurial Scimitar", why: "Its active removes stuns and roots (not knock-ups) and gives Move Speed to escape." }
  ], tip: "Use your long range to stay out of their crowd control and let your slows do the work." }
};

RA.champAdapt["Caitlyn:bot"] = {
  tanky: { items: [
    { item: "Lord Dominik's Regards", why: "It's already in your core; buy it second instead of third so your attacks cut through armor sooner." }
  ], tip: "Your baseline already handles tanks well; keep hitting from max range and siege with traps." },
  squishy: { items: [
    { item: "The Collector", replaces: "Lord Dominik's Regards", why: "Against low-armor targets its Lethality and execute below 5% Health do more than armor penetration." }
  ], tip: "Use your long range to poke them low early; squishy teams can't trade back well." },
  ad: { items: [
    { item: "Immortal Shieldbow", why: "Buy it third: it keeps your damage stats and shields you when a diver drops you below 30% Health." },
    { item: "Guardian Angel", why: "Gives armor and brings you back once after lethal damage." }
  ] },
  ap: { items: [
    { item: "Mercurial Scimitar", why: "Gives magic resist and an active that removes crowd control (except knock-ups) before a mage's combo lands." }
  ] },
  healing: { items: [
    { item: "Mortal Reminder", replaces: "Lord Dominik's Regards", why: "Still gives armor penetration, and your physical damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Mercurial Scimitar", why: "Its active removes stuns and roots (not knock-ups) so you can escape and keep shooting." }
  ], tip: "Put traps in front of you to stop engagers before they reach you." }
};

RA.champAdapt["Draven:bot"] = {
  tanky: { items: [
    { item: "Lord Dominik's Regards", why: "Buy it third: armor penetration and bonus damage against high bonus Health keep your axes hurting tanks." }
  ], tip: "Keep catching axes in long fights; dropping them against tanks costs you most of your damage." },
  squishy: { items: [
    { item: "The Collector", replaces: "Hexoptics C44", why: "Lethality hits hard on low-armor targets, it executes champions below 5% Health, and kills give bonus gold." }
  ], tip: "Squishy teams are your best case; play aggressive in lane and snowball." },
  ad: { items: [
    { item: "Immortal Shieldbow", replaces: "Hexoptics C44", why: "Same Attack Damage and crit, but you get a shield when a diver drops you below 30% Health." },
    { item: "Guardian Angel", why: "Gives armor and brings you back once after lethal damage." }
  ] },
  ap: { items: [
    { item: "Mercurial Scimitar", why: "Gives magic resist and an active that removes crowd control (except knock-ups), so mages can't lock you down and burst you." }
  ] },
  healing: { items: [
    { item: "Mortal Reminder", why: "Buy it as your third item: your physical damage applies 40% Wounds and it adds armor penetration." }
  ] },
  cc: { items: [
    { item: "Mercurial Scimitar", why: "Its active removes stuns and roots (not knock-ups) so one spell doesn't decide the fight." }
  ], tip: "Use your E to stop engagers before they reach you." }
};

RA.champAdapt["Ezreal:bot"] = {
  tanky: { items: [
    { item: "Black Cleaver", replaces: "Spear of Shojin", why: "Your physical damage lowers their armor by up to 30%, and it still gives health and Ability Haste." },
    { item: "Serylda's Grudge", why: "Armor penetration plus a slow on abilities against targets below 50% Health." }
  ], tip: "Poke the front line from max range; you rarely win a straight fight with them." },
  squishy: { items: [
    { item: "Endless Hunger", replaces: "Spear of Shojin", why: "More Attack Damage makes each Mystic Shot hit harder, and you gain Omnivamp after kills." }
  ], tip: "Land Mystic Shot over and over to wear them down before fights." },
  ad: { items: [
    { item: "Frozen Heart", why: "Gives armor, mana and Ability Haste, and slows the attack speed of nearby champions by 20%." }
  ], tip: "Keep Arcane Shift ready to dodge divers instead of using it to attack." },
  ap: { items: [
    { item: "Maw of Malmortius", why: "Magic resist plus a magic shield when magic damage drops you below 30% Health." }
  ] },
  healing: { items: [
    { item: "Chempunk Chainsword", replaces: "Spear of Shojin", why: "Similar Attack Damage and health, and your physical damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Magic resist and 30% Tenacity make their stuns and roots shorter." },
    { item: "Maw of Malmortius", why: "If they lock you down with magic damage, its shield helps you survive the combo." }
  ], tip: "Hold Arcane Shift to dodge their main crowd control spell." }
};

RA.champAdapt["Galio:support"] = {
  tanky: { items: [
    { item: "Abyssal Mask", replaces: "Thornmail", why: "Nearby enemy champions take 12% more magic damage, which helps your team's mages break their tanks." }
  ], tip: "Your job is to taunt and knock up their carries, not to out-damage their tanks." },
  squishy: { items: [
    { item: "Bandlepipes", replaces: "Thornmail", why: "Each time you slow or knock up an enemy, you and nearby allies gain Attack Speed, so squishy targets die faster." }
  ], tip: "Your baseline already does well; save your taunt for an assassin who jumps on your carry." },
  ad: { items: [
    { item: "Frozen Heart", why: "Gives armor and slows the attack speed of nearby champions by 20%." }
  ], tip: "Thornmail and Plated Steelcaps already handle AD teams; add Frozen Heart against attack-speed carries." },
  ap: { items: [
    { item: "Mercury's Treads", replaces: "Plated Steelcaps", why: "Magic resist and 30% Tenacity help against mages and their crowd control." },
    { item: "Force of Nature", replaces: "Thornmail", why: "Gives health and magic resist, and gains a lot more magic resist after taking magic damage several times." }
  ], tip: "Magic resist also feeds your passive, so you get tankier and hit harder." },
  healing: { items: [
    { item: "Thornmail", why: "Already in your core; buy it second when they rely on healing, since attackers who hit you get 40% Wounds." }
  ], tip: "Thornmail only applies Wounds to enemies who attack you, so stand where their healers' teammates will hit you." },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Plated Steelcaps", why: "30% Tenacity shortens stuns and roots so you can still use your taunt and ultimate." },
    { item: "Mikael's Blessing", why: "Its active removes crowd control (except knock-ups and suppression) from an ally and heals them." }
  ] }
};

RA.champAdapt["Irelia:mid"] = {
  tanky: { items: [
    { item: "Black Cleaver", why: "Your physical damage lowers their armor by up to 30%, and it adds health for long fights." }
  ], tip: "Blade of The Ruined King already deals damage based on current Health, so you are fine against tanks." },
  squishy: { items: [
    { item: "Endless Hunger", why: "More Attack Damage, and Omnivamp after kills helps you chain resets through low-health targets." }
  ], tip: "Mark several targets with your E and use resets on low enemies to dash around the fight." },
  ad: { items: [
    { item: "Plated Steelcaps", replaces: "Mercury's Treads", why: "Armor plus 10% less damage from attacks helps against AD fighters and marksmen." }
  ], tip: "Death's Dance is already in your core; buy it earlier if AD burst is the problem." },
  ap: { items: [
    { item: "Wit's End", replaces: "Kraken Slayer", why: "Keeps strong Attack Speed and adds magic resist, Tenacity and on-hit magic damage." }
  ] },
  healing: { items: [
    { item: "Chempunk Chainsword", why: "Buy it third: your physical damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Sterak's Gage", why: "Adds Tenacity and health, and shields you when you drop below 30% Health while locked down." }
  ], tip: "Mercury's Treads already gives Tenacity; time your W to soak damage while you wait out crowd control." }
};

RA.champAdapt["Jinx:bot"] = {
  tanky: { items: [
    { item: "Lord Dominik's Regards", why: "Buy it fourth: armor penetration and bonus damage against high bonus Health cut through tanks." }
  ], tip: "Use your rockets to hit the tanks and the people behind them at the same time." },
  squishy: { items: [
    { item: "The Collector", replaces: "Lord Dominik's Regards", why: "Against low-armor targets its Lethality and execute below 5% Health help you get the kills that start your passive." }
  ], tip: "Each kill or assist triggers your passive speed boost, so squishy teams let you chain kills." },
  ad: { items: [
    { item: "Immortal Shieldbow", replaces: "Hexoptics C44", why: "Same Attack Damage and crit, but you get a shield when a diver drops you below 30% Health." },
    { item: "Guardian Angel", why: "Gives armor and brings you back once after lethal damage." }
  ] },
  ap: { items: [
    { item: "Mercurial Scimitar", why: "Gives magic resist and an active that removes crowd control (except knock-ups) before mages burst you." }
  ] },
  healing: { items: [
    { item: "Mortal Reminder", replaces: "Lord Dominik's Regards", why: "Still gives armor penetration, and your physical damage applies 40% Wounds." }
  ] },
  cc: { items: [
    { item: "Mercurial Scimitar", why: "Its active removes stuns and roots (not knock-ups) so you can escape." }
  ], tip: "Throw your traps in front of you to stop engagers." }
};

RA.champAdapt["Katarina:mid"] = {
  tanky: { items: [
    { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }
  ], tip: "Don't dive the tanks; wait for their carries to come into range of your daggers." },
  squishy: { items: [
    { item: "Rabadon's Deathcap", why: "Buy it third: it raises your total Ability Power by 30%, so each reset deals more damage." }
  ], tip: "Your baseline already kills squishy targets; focus on getting the first kill to start resets." },
  ad: { items: [
    { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from attacks keeps you alive against AD threats." }
  ], tip: "Zhonya's Hourglass already gives armor; buy it earlier if you get focused." },
  ap: { items: [
    { item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "30% Tenacity shortens stuns and roots that stop your ultimate." },
    { item: "Banshee's Veil", why: "Its spell shield blocks the first crowd control ability aimed at you." }
  ], tip: "Wait for their stuns to be used before you jump in." }
};

RA.champAdapt["Locke:mid"] = {
  tanky: { items: [
    { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }
  ], tip: "Your damage grows against wounded targets, so finish enemies your team has softened instead of starting on tanks." },
  squishy: { items: [
    { item: "Stormsurge", why: "Buy it second: your combo easily deals the 25% max Health it needs, adding extra burst on carries." }
  ] },
  ad: { items: [
    { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from attacks keeps you alive after you dash in." }
  ], tip: "Zhonya's Hourglass already gives armor; buy it earlier if AD threats focus you." },
  ap: { items: [
    { item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds, making your execute easier to reach." }
  ] },
  cc: { items: [
    { item: "Banshee's Veil", why: "Its spell shield blocks the first crowd control ability thrown at you." },
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "30% Tenacity shortens stuns and roots." }
  ], tip: "Wait for their main crowd control spell to be used before you commit." }
};

RA.champAdapt["Malzahar:mid"] = {
  tanky: { items: [
    { item: "Void Staff", why: "Buy it fourth: its 40% Magic Penetration ignores a big part of their magic resist." }
  ], tip: "Liandry's Torment already burns a percentage of max Health, so your core is good against tanks." },
  squishy: { items: [
    { item: "Shadowflame", replaces: "Liandry's Torment", why: "More Ability Power, and your damage crits enemies below 40% Health." }
  ] },
  ad: { items: [
    { item: "Zhonya's Hourglass", why: "Buy it third: armor plus an active that makes you untouchable for 2.5 seconds when divers jump on you." }
  ] },
  ap: { items: [
    { item: "Banshee's Veil", replaces: "Rylai's Crystal Scepter", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", replaces: "Rylai's Crystal Scepter", why: "Similar Ability Power and health, and your magic damage applies 40% Wounds." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "30% Tenacity shortens stuns and roots so you can still use your ultimate." },
    { item: "Zhonya's Hourglass", why: "Stasis lets you wait out a dive while your teammates respond." }
  ], tip: "Use your ultimate on whoever is most likely to start a fight on your team." }
};

RA.champAdapt["Smolder:bot"] = {
  tanky: { items: [
    { item: "Lord Dominik's Regards", why: "Buy it fourth: armor penetration and bonus damage against high bonus Health." }
  ], tip: "Black Cleaver already lowers armor, so your core is good against tanks; keep stacking Q safely." },
  squishy: { items: [
    { item: "Infinity Edge", replaces: "Black Cleaver", why: "Against low-armor targets more crit damage is worth more than lowering their armor." }
  ] },
  ad: { items: [
    { item: "Guardian Angel", why: "Gives armor and brings you back once after lethal damage." }
  ], tip: "Stack Q on minions from a safe distance and don't walk up into AD divers." },
  ap: { items: [
    { item: "Maw of Malmortius", why: "Attack Damage, Ability Haste and magic resist, plus a magic shield when you drop below 30% Health." }
  ] },
  healing: { items: [
    { item: "Chempunk Chainsword", replaces: "Spear of Shojin", why: "Same Attack Damage and health, and your physical damage applies 40% Wounds." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Gluttonous Greaves", why: "Magic resist and 30% Tenacity make their stuns and roots shorter." }
  ], tip: "Save your flight to escape over walls once their engage is used." }
};

RA.champAdapt["Sylas:support"] = {
  tanky: { items: [
    { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }
  ], tip: "Steal a big engage ultimate from their tanks and use it on their carries." },
  squishy: { items: [
    { item: "Zaz'Zak's Realmspike", replaces: "Celestial Opposition", why: "Your ability damage on champions causes an extra magic explosion, which helps you bully squishy lanes." },
    { item: "Stormsurge", why: "Buy it second for extra magic damage after you deal 25% of a champion's max Health quickly." }
  ] },
  ad: { items: [
    { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from attacks." }
  ], tip: "Zhonya's Hourglass already gives armor; buy it earlier if their AD threats are ahead." },
  ap: { items: [
    { item: "Banshee's Veil", replaces: "Shadowflame", why: "Similar Ability Power plus magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds to cut their healing and shielding." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Magic resist and 30% Tenacity make their stuns and roots shorter." }
  ], tip: "Wait for their main crowd control to be used before you chain in." }
};

RA.champAdapt["Taliyah:jungle"] = {
  tanky: { items: [
    { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }
  ], tip: "Use your W to throw tanks away from your carries instead of trying to kill them." },
  squishy: { items: [
    { item: "Rabadon's Deathcap", why: "Buy it third: it raises your total Ability Power by 30%, so your W and E combo can kill a carry." }
  ], tip: "Your baseline already bursts squishy targets; look for ganks with your ultimate." },
  ad: { items: [
    { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from attacks." }
  ], tip: "Zhonya's Hourglass already gives armor; buy it earlier if AD assassins hunt you." },
  ap: { items: [
    { item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Magic resist and 30% Tenacity shorten stuns and roots." },
    { item: "Banshee's Veil", why: "Its spell shield blocks the first crowd control ability aimed at you." }
  ] }
};

RA.champAdapt["Vayne:bot"] = {
  tanky: { items: [
    { item: "Lord Dominik's Regards", why: "Buy it fourth: armor penetration and bonus damage against high bonus Health." }
  ], tip: "Blade of The Ruined King and your W already shred tanks, so your core is strong here." },
  squishy: { items: [
    { item: "Experimental Hexplate", why: "Gives Ultimate Ability Haste and extra Attack Speed and Move Speed after your ultimate, so you can chase low-health carries." }
  ], tip: "Your baseline already does well; wait for their engage, then go in with your ultimate." },
  ad: { items: [
    { item: "Jak'Sho, The Protean", why: "Gives health, armor and magic resist, and both grow after a few seconds of fighting." }
  ], tip: "Use Condemn to push divers away or into walls." },
  ap: { items: [
    { item: "Wit's End", why: "Gives Attack Speed, magic resist, Tenacity and on-hit magic damage." }
  ] },
  healing: { items: [
    { item: "Mortal Reminder", replaces: "Lord Dominik's Regards", why: "Still gives armor penetration, and your physical damage applies 40% Wounds." }
  ] },
  cc: { items: [
    { item: "Mercurial Scimitar", why: "Its active removes stuns, roots and suppression (not knock-ups) so you can tumble away." }
  ], tip: "Don't tumble in first; wait for their crowd control to be used." }
};

RA.champAdapt["Vex:mid"] = {
  tanky: { items: [
    { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }
  ], tip: "Fear tanks off your carries; your passive punishes them for dashing in." },
  squishy: { items: [
    { item: "Stormsurge", why: "Buy it second for extra magic damage after you deal 25% of a champion's max Health quickly." }
  ] },
  ad: { items: [
    { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from attacks." }
  ], tip: "Zhonya's Hourglass already gives armor; buy it earlier if AD assassins dive you." },
  ap: { items: [
    { item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Banshee's Veil", why: "Its spell shield blocks the first crowd control ability aimed at you." },
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "30% Tenacity shortens stuns and roots." }
  ] }
};

RA.champAdapt["Vladimir:mid"] = {
  tanky: { items: [
    { item: "Liandry's Torment", replaces: "Stormsurge", why: "Your abilities burn a percentage of max Health, and your damage grows the longer you fight." },
    { item: "Void Staff", why: "Buy it fourth: its 40% Magic Penetration ignores a big part of their magic resist." }
  ] },
  squishy: { items: [
    { item: "Shadowflame", replaces: "Riftmaker", why: "More burst, and your damage crits enemies below 40% Health." }
  ] },
  ad: { items: [
    { item: "Zhonya's Hourglass", why: "Buy it fourth: armor plus 2.5 seconds of stasis after your pool is used." }
  ] },
  ap: { items: [
    { item: "Banshee's Veil", why: "Gives Ability Power, magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Magic resist and 30% Tenacity make stuns and roots shorter." }
  ], tip: "Use your pool to dodge their key crowd control spell." }
};

RA.champAdapt["Xerath:support"] = {
  tanky: { items: [
    { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }
  ], tip: "Poke their front line before fights, then hit whoever is reachable." },
  squishy: { items: [
    { item: "Stormsurge", why: "Extra magic damage after you deal 25% of a champion's max Health quickly." }
  ], tip: "Your baseline already does well; keep poking from max range." },
  ad: { items: [
    { item: "Zhonya's Hourglass", why: "Armor plus an active that makes you untouchable for 2.5 seconds when divers reach you." }
  ] },
  ap: { items: [
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Magic resist and 30% Tenacity help against mage poke and crowd control." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Banshee's Veil", why: "Its spell shield blocks the first hook or stun aimed at you." }
  ], tip: "Stay at max range and keep a minion between you and hooks." }
};

RA.champAdapt["Yasuo:top"] = {
  tanky: { items: [
    { item: "Lord Dominik's Regards", why: "Buy it fourth: armor penetration and bonus damage against high bonus Health." }
  ], tip: "Blade of The Ruined King already helps against tanks; wait for knock-ups so you can ultimate the carries." },
  squishy: { items: [
    { item: "The Collector", replaces: "Lord Dominik's Regards", why: "Against low-armor targets its Lethality and execute below 5% Health do more than armor penetration." }
  ] },
  ad: { items: [
    { item: "Death's Dance", why: "Gives armor and delays part of the damage you take, which you can cleanse with takedowns." },
    { item: "Plated Steelcaps", replaces: "Berserker's Greaves", why: "Armor plus 10% less damage from attacks." }
  ] },
  ap: { items: [
    { item: "Maw of Malmortius", why: "Magic resist plus a magic shield when magic damage drops you below 30% Health." }
  ], tip: "Use Wind Wall to block their key projectile spells." },
  healing: { items: [
    { item: "Mortal Reminder", why: "Your physical damage applies 40% Wounds, and it adds armor penetration." }
  ] },
  cc: { items: [
    { item: "Mercurial Scimitar", why: "Its active removes stuns and roots (not knock-ups) and gives Move Speed." },
    { item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Magic resist and 30% Tenacity make stuns and roots shorter." }
  ] }
};

RA.champAdapt["Zed:jungle"] = {
  tanky: { items: [
    { item: "Lord Dominik's Regards", replaces: "Axiom Arc", why: "Armor penetration and bonus damage against high bonus Health." }
  ], tip: "Don't waste your ultimate on tanks; wait for a carry to be exposed." },
  squishy: { items: [
    { item: "Hubris", replaces: "Axiom Arc", why: "Each kill gives you more Attack Damage for a while, so you snowball through squishy teams." }
  ] },
  ad: { items: [
    { item: "Death's Dance", why: "Gives armor and delays part of the damage you take." }
  ] },
  ap: { items: [
    { item: "Maw of Malmortius", why: "Magic resist plus a magic shield when magic damage drops you below 30% Health." }
  ] },
  healing: { items: [
    { item: "Chempunk Chainsword", why: "Your physical damage applies 40% Wounds to cut their healing." },
    { item: "Serpent's Fang", why: "Against heavy shielding, it reduces shields they gain after you damage them." }
  ] },
  cc: { items: [
    { item: "Edge of Night", replaces: "Axiom Arc", why: "Its spell shield blocks the next enemy ability, so you can go in without being stunned instantly." },
    { item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Magic resist and 30% Tenacity shorten stuns and roots." }
  ] }
};

RA.champAdapt["Ziggs:mid"] = {
  tanky: { items: [
    { item: "Void Staff", replaces: "Shadowflame", why: "Ignores a big part of their magic resist, so your bombs still hurt their front line." }
  ], tip: "Use your satchel to knock tanks away from your carries." },
  squishy: { items: [
    { item: "Stormsurge", why: "Extra magic damage after you deal 25% of a champion's max Health quickly." }
  ], tip: "Your baseline already does well; poke them low before fights." },
  ad: { items: [
    { item: "Zhonya's Hourglass", why: "Armor plus an active that makes you untouchable for 2.5 seconds." }
  ] },
  ap: { items: [
    { item: "Banshee's Veil", why: "Gives Ability Power, magic resist and a spell shield that blocks the next enemy ability." }
  ] },
  healing: { items: [
    { item: "Morellonomicon", why: "Your magic damage applies 40% Wounds to cut their healing." }
  ] },
  cc: { items: [
    { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Magic resist and 30% Tenacity shorten stuns and roots." }
  ], tip: "Keep your satchel to escape when they jump on you." }
};
