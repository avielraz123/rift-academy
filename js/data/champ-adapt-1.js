/* "Adapt your build": item changes by enemy team composition. Baseline = RA.builds for the same key. */
window.RA = window.RA || {};
RA.champAdapt = RA.champAdapt || {};

RA.champAdapt["Ahri:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist, while Shadowflame's flat penetration does little against stacked resist." }], tip: "Charm and burst their carry; trying to kill the front line first just wastes your ultimate." },
  squishy: { items: [{ item: "Stormsurge", why: "Your full combo easily deals 25% of a squishy target's health, so its Squall adds a second hit of magic damage, and the Move Speed helps you roam." }, { item: "Mejai's Soulstealer", why: "Each takedown adds 5 Ability Power through Glory, and squishy teams give you lots of takedowns to stack it." }], tip: "Look for picks with Charm on carries who walk forward without vision." },
  ad: { items: [{ item: "Zhonya's Hourglass", why: "Buy it second instead of third: its 50 Armor and Time Stop stasis let you survive an AD assassin or fighter jumping on you." }, { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces damage from basic attacks by 10%, which helps a lot against AD carries and fighters." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Gives Magic Resist and a Spell Shield that blocks the next enemy ability, so a mage's key spell can miss you completely." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity, so you take less magic damage and their crowd control wears off faster." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and you still get Ability Power plus some Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes stuns, roots and slows end sooner, so you can use your ultimate dashes before you get locked down." }, { item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Its Spell Shield blocks the next enemy ability, which can eat the hook or stun that starts their combo." }], tip: "Keep one ultimate dash ready to dodge their engage instead of using all three to chase." }
};

RA.champAdapt["Annie:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration lets your burst still hurt targets who stacked magic resist." }], tip: "Use your stun on the enemy carry, not on the tank who walks in first." },
  squishy: { items: [{ item: "Hextech Rocketbelt", replaces: "Malignance", why: "Its dash active lets you jump in and land your stun plus full combo on a squishy target before they can react." }], tip: "One stun and your full combo can kill a squishy carry, so flank and wait for them to step up." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Shadowflame", why: "Gives 50 Armor and a Time Stop stasis, so you live through the AD assassin or fighter that dives you." }, { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and cuts damage from basic attacks by 10%." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Its Spell Shield blocks the next enemy ability and it adds Magic Resist, so mages struggle to burst you first." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and it gives Health and Ability Haste too." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, so you get back to casting faster." }], tip: "Keep your stun ready to answer their engage instead of using it first." }
};

RA.champAdapt["Aurora:top"] = {
  tanky: { items: [{ item: "Liandry's Torment", replaces: "Stormsurge", why: "Its burn deals a percent of the target's max Health, which is great against tanks, while Stormsurge rarely triggers on high-health targets." }, { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration lets you ignore a big part of their magic resist." }] },
  squishy: { items: [{ item: "Mejai's Soulstealer", why: "Each takedown adds 5 Ability Power through Glory, and squishy teams are easy to get takedowns on." }], tip: "The baseline build is already made for bursting squishy targets, so flank and pick off carries." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces basic attack damage by 10%, which helps a lot against AD fighters in top lane." }, { item: "Zhonya's Hourglass", replaces: "Rabadon's Deathcap", why: "Gives 50 Armor and a Time Stop stasis to survive when an AD fighter or assassin jumps on you." }] },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity, so you take less magic damage and escape their crowd control sooner." }, { item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, which cuts the healing of top laners like Aatrox or Warwick, and it adds Health." }], tip: "Buy it second against a healing top laner so the lane does not turn against you." },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes stuns, roots and slows end faster." }, { item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, which can stop the stun that starts their combo." }] }
};

RA.champAdapt["Diana:mid"] = {
  tanky: { items: [{ item: "Riftmaker", replaces: "Stormsurge", why: "Its damage grows the longer you fight and gives Health and Omnivamp, which suits long fights against tanks better than Stormsurge's burst." }, { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }] },
  squishy: { items: [{ item: "Lich Bane", why: "After each ability your next attack deals bonus magic damage, which adds a lot of burst for jumping on carries." }], tip: "Dive the backline with your ultimate when their carries group up." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces damage from basic attacks by 10%." }], tip: "Zhonya's Hourglass in the baseline already gives Armor, so buy it second against a fed AD threat." },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity against magic damage and their crowd control." }, { item: "Banshee's Veil", replaces: "Shadowflame", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and you get extra Health for diving." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, so you are not stuck in the middle of their team." }, { item: "Banshee's Veil", replaces: "Shadowflame", why: "Its Spell Shield blocks the first stun or root they throw at you when you dive." }] }
};

RA.champAdapt["Ekko:mid"] = {
  tanky: { items: [{ item: "Void Staff", why: "Buy it third, before Rabadon's Deathcap: its 40% Magic Penetration ignores a big part of their magic resist." }], tip: "Your job is to dive and kill their carry, not to fight the tanks." },
  squishy: { items: [{ item: "Shadowflame", why: "Buy it third: your damage critically strikes targets below 40% Health, which helps you finish squishy carries." }], tip: "The baseline build already bursts squishy targets well, so focus on flanking." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Rabadon's Deathcap", why: "Gives 50 Armor and a Time Stop stasis for when an AD threat catches you before your ultimate is ready." }, { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces basic attack damage by 10%." }] },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity, so mages and their crowd control hurt you less." }, { item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Rabadon's Deathcap", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes stuns and roots end sooner, so you can still get your combo or ultimate off." }], tip: "Wait for their key crowd control to be used before you dive." }
};

RA.champAdapt["Galio:mid"] = {
  tanky: { items: [{ item: "Liandry's Torment", replaces: "Imperial Mandate", why: "Its burn deals a percent of max Health, so your abilities still hurt high-health tanks, and it gives you Health." }], tip: "Against tanks your main job is engage and peel, not damage." },
  squishy: { items: [{ item: "Rabadon's Deathcap", why: "Buy it as your fourth item: it raises your total Ability Power by 30%, so your abilities hit squishy targets much harder." }], tip: "Use your ultimate to join a fight where your team is already jumping on their carries." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Mercury's Treads", why: "Adds Armor and reduces basic attack damage by 10%, which is better than Magic Resist boots against an AD team." }, { item: "Thornmail", why: "Gives a lot of Armor and Health and hurts attackers who hit you." }] },
  ap: { items: [{ item: "Kaenic Rookern", replaces: "Zhonya's Hourglass", why: "Gives a lot of Magic Resist and Health, plus a magic shield after you go 15 seconds without taking magic damage." }], tip: "Mercury's Treads in the baseline already help, so you are a strong pick into magic damage." },
  healing: { items: [{ item: "Morellonomicon", replaces: "Imperial Mandate", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }, { item: "Thornmail", why: "If their healer attacks you, being hit applies 40% Wounds to them." }] },
  cc: { items: [{ item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Its Spell Shield blocks the next enemy ability, which can eat a stun that would stop your engage." }], tip: "Mercury's Treads in the baseline already shorten their crowd control, so you are well set up." }
};

RA.champAdapt["Hwei:mid"] = {
  tanky: { items: [{ item: "Liandry's Torment", replaces: "Shadowflame", why: "Its burn deals a percent of max Health, which keeps your poke useful against tanks." }, { item: "Void Staff", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }] },
  squishy: { items: [{ item: "Stormsurge", why: "As your fourth item, your combos easily deal 25% of a squishy target's health, so its Squall adds an extra hit of magic damage." }], tip: "The baseline build already bursts squishy targets well, so keep your distance and land your long-range spells." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Rabadon's Deathcap", why: "Gives 50 Armor and a Time Stop stasis to survive AD assassins and fighters who reach you." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity against their magic damage and crowd control." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, which matters because you have no dash." }, { item: "Zhonya's Hourglass", replaces: "Rabadon's Deathcap", why: "If they lock you down, Time Stop can save you once the crowd control ends." }] }
};

RA.champAdapt["Jhin:bot"] = {
  tanky: { items: [{ item: "Lord Dominik's Regards", why: "Buy it fourth: its Armor Penetration and bonus damage against high-Health targets let you hurt tanks." }], tip: "Your fourth shot still hits hard, so aim it at whoever is closest to dying." },
  squishy: { items: [{ item: "The Collector", replaces: "Phantom Dancer", why: "Its Lethality hurts low-armor targets, it executes champions below 5% Health, and kills give bonus gold." }] },
  ad: { items: [{ item: "Guardian Angel", why: "Gives Armor and brings you back to life once after lethal damage." }], tip: "Stay at max range and use your W root on divers before they reach you." },
  ap: { items: [{ item: "Maw of Malmortius", why: "Gives Magic Resist and a magic damage shield when you drop low, so mages and AP assassins struggle to burst you." }, { item: "Mercury's Treads", replaces: "Boots of Swiftness", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Mortal Reminder", replaces: "Lord Dominik's Regards", why: "Your physical damage applies 40% Wounds, cutting their healing, and it still gives Armor Penetration and crit." }] },
  cc: { items: [{ item: "Mercurial Scimitar", why: "Its active removes all crowd control except knock-ups, so you can escape a stun or root." }, { item: "Mercury's Treads", replaces: "Boots of Swiftness", why: "Tenacity makes all their crowd control end sooner." }] }
};

RA.champAdapt["Kassadin:mid"] = {
  tanky: { items: [{ item: "Void Staff", why: "Buy it fourth: its 40% Magic Penetration ignores a big part of their magic resist." }], tip: "Use your ultimate to reach their carries; you cannot out-damage stacked tanks." },
  squishy: { items: [{ item: "Mejai's Soulstealer", why: "Buy it early when ahead: each takedown adds 5 Ability Power, and squishy targets give you plenty of takedowns." }], tip: "Once your build comes online, squishy carries are your main targets." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces basic attack damage by 10%." }, { item: "Frozen Heart", why: "Gives a lot of Armor, Mana and Ability Haste, and slows the attack speed of nearby enemies." }] },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity, so mage burst and crowd control hurt you less." }, { item: "Banshee's Veil", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Malignance", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes stuns and roots end sooner, so you can blink out with your ultimate faster." }], tip: "You cannot use your ultimate while stunned, so stay out of their crowd control range." }
};

RA.champAdapt["Lissandra:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration lets your damage still hurt high-resist targets." }], tip: "Lock down their carry and let your team do the damage." },
  squishy: { items: [{ item: "Rabadon's Deathcap", why: "Buy it fourth: it raises your total Ability Power by 30%, so your combo can kill a squishy carry you freeze." }], tip: "Flank and use your ultimate on their carry, not the tank." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces basic attack damage by 10%." }], tip: "Zhonya's Hourglass in the baseline already gives Armor, so buy it second against an AD team." },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner." }, { item: "Banshee's Veil", replaces: "Shadowflame", why: "Its Spell Shield blocks the next enemy ability, which can save you from the stun that starts their combo." }] }
};

RA.champAdapt["Lux:support"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration keeps your combo strong against targets who stack magic resist." }], tip: "Save your binding for their carry, not the tank walking in front." },
  squishy: { items: [{ item: "Zaz'Zak's Realmspike", why: "Upgrade your support item to this: dealing ability damage to a champion causes an extra explosion of magic damage." }], tip: "The baseline build is already made for bursting squishy targets." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Shadowflame", why: "Gives 50 Armor and a Time Stop stasis for when AD divers reach you." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and you poke often enough to keep it applied." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, which matters because you have no dash." }, { item: "Banshee's Veil", replaces: "Shadowflame", why: "Its Spell Shield blocks the next enemy ability, like a hook or stun." }] }
};

RA.champAdapt["Orianna:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration lets your ball damage still hurt high-resist targets." }] },
  squishy: { items: [{ item: "Rabadon's Deathcap", why: "Buy it fourth: it raises your total Ability Power by 30%, so your ultimate can delete grouped squishy targets." }], tip: "Put the ball on an ally who dives so your ultimate lands on their backline." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces basic attack damage by 10%." }], tip: "Zhonya's Hourglass in the baseline already gives Armor, so buy it second against an AD team." },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, which matters because you have no dash." }] }
};

RA.champAdapt["Sylas:mid"] = {
  tanky: { items: [{ item: "Void Staff", why: "Buy it fourth: its 40% Magic Penetration ignores a big part of their magic resist." }], tip: "Riftmaker in the baseline already grows stronger in long fights, which is good against tanks." },
  squishy: { items: [{ item: "Shadowflame", replaces: "Riftmaker", why: "Your damage critically strikes targets below 40% Health, which adds burst to finish squishy carries." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces basic attack damage by 10%." }], tip: "Zhonya's Hourglass in the baseline already gives Armor, so buy it second against an AD team." },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity against magic damage and crowd control." }, { item: "Banshee's Veil", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Riftmaker", why: "Your magic damage applies 40% Wounds, cutting their healing, and it still gives Ability Power and Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner while you are in the middle of a fight." }] }
};

RA.champAdapt["Syndra:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration lets your combo still hurt high-resist targets." }] },
  squishy: { items: [{ item: "Stormsurge", why: "Buy it second: your combo easily deals 25% of a squishy target's health, so its Squall adds an extra hit of magic damage." }], tip: "Look for picks on carries who step into your stun range." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Rabadon's Deathcap", why: "Gives 50 Armor and a Time Stop stasis for when AD assassins or fighters reach you." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, which matters because you have no dash." }, { item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, like a hook or stun." }] }
};

RA.champAdapt["TwistedFate:mid"] = {
  tanky: { items: [{ item: "Void Staff", why: "Buy it fourth: its 40% Magic Penetration ignores a big part of their magic resist." }], tip: "Your strength is map pressure: use your ultimate and gold card to catch their carries in side lanes." },
  squishy: { items: [{ item: "Rabadon's Deathcap", why: "Buy it fourth: it raises your total Ability Power by 30%, so your gold card plus Lich Bane hit can burst squishy targets." }], tip: "The baseline build already bursts squishy targets well." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Rapid Firecannon", why: "Gives 50 Armor and a Time Stop stasis to survive AD divers." }, { item: "Plated Steelcaps", replaces: "Boots of Swiftness", why: "Adds Armor and reduces basic attack damage by 10%." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Rapid Firecannon", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }, { item: "Mercury's Treads", replaces: "Boots of Swiftness", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Rapid Firecannon", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Boots of Swiftness", why: "Tenacity makes stuns and roots end sooner, which matters because you have no dash." }] }
};

RA.champAdapt["Veigar:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Stormsurge", why: "Its 40% Magic Penetration ignores a big part of their magic resist, while Stormsurge rarely triggers on high-health targets." }] },
  squishy: { items: [{ item: "Rabadon's Deathcap", why: "Buy it second: it raises your total Ability Power by 30%, so your combo kills squishy targets sooner." }], tip: "The baseline build is already made for bursting squishy targets." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Stormsurge", why: "Gives 50 Armor and a Time Stop stasis to survive AD divers." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Stormsurge", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Stormsurge", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, which matters because you have no dash." }], tip: "Place your cage between you and their engage to block divers." }
};

RA.champAdapt["Viktor:mid"] = {
  tanky: { items: [{ item: "Liandry's Torment", replaces: "Lich Bane", why: "Its burn deals a percent of max Health, so your abilities keep hurting high-health tanks, and it adds Health." }, { item: "Void Staff", why: "Its 40% Magic Penetration ignores a big part of their magic resist." }] },
  squishy: { items: [{ item: "Shadowflame", why: "Buy it fourth: your damage critically strikes targets below 40% Health, which helps finish squishy carries." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Adds Armor and reduces basic attack damage by 10%." }], tip: "Zhonya's Hourglass in the baseline already gives Armor, so buy it second against an AD team." },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Lich Bane", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Lich Bane", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, which matters because you have no dash." }] }
};

RA.champAdapt["Xerath:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration lets your poke still hurt high-resist targets." }] },
  squishy: { items: [{ item: "Stormsurge", why: "Buy it fourth: a few landed spells deal 25% of a squishy target's health, so its Squall adds an extra hit of magic damage." }], tip: "The baseline build already bursts squishy targets well." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Rabadon's Deathcap", why: "Gives 50 Armor and a Time Stop stasis for when AD divers reach you." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and you poke often enough to keep it applied." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner, which matters because you have no dash." }, { item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, like a hook or stun." }] }
};

RA.champAdapt["Yasuo:mid"] = {
  tanky: { items: [{ item: "Lord Dominik's Regards", why: "Buy it third: its Armor Penetration and bonus damage against high-Health targets let you cut through tanks." }] },
  squishy: { items: [{ item: "The Collector", why: "Buy it fourth: its Lethality hurts low-armor targets and it executes champions below 5% Health." }], tip: "The baseline crit build already kills squishy targets well." },
  ad: { items: [{ item: "Guardian Angel", why: "Gives Armor and brings you back to life once after lethal damage." }, { item: "Plated Steelcaps", replaces: "Berserker's Greaves", why: "Adds Armor and reduces basic attack damage by 10%." }], tip: "Death's Dance in the baseline already gives Armor." },
  ap: { items: [{ item: "Maw of Malmortius", replaces: "Death's Dance", why: "Gives Magic Resist and a magic damage shield when you drop low." }, { item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Mortal Reminder", replaces: "Lord Dominik's Regards", why: "Your physical damage applies 40% Wounds, cutting their healing, and it still gives Armor Penetration and crit." }] },
  cc: { items: [{ item: "Mercurial Scimitar", why: "Its active removes all crowd control except knock-ups, so you can escape a stun or root." }, { item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Tenacity makes all their crowd control end sooner." }] }
};

RA.champAdapt["Yone:top"] = {
  tanky: { items: [{ item: "Lord Dominik's Regards", why: "Buy it fourth: its Armor Penetration and bonus damage against high-Health targets let you cut through tanks." }], tip: "Blade of The Ruined King in the baseline already deals damage based on current Health, which helps against tanks." },
  squishy: { items: [{ item: "The Collector", why: "Buy it fourth: its Lethality hurts low-armor targets and it executes champions below 5% Health." }], tip: "The baseline crit build already kills squishy targets well." },
  ad: { items: [{ item: "Death's Dance", replaces: "Immortal Shieldbow", why: "Gives Armor and spreads part of the damage you take over 3 seconds, so burst hurts less." }, { item: "Plated Steelcaps", replaces: "Berserker's Greaves", why: "Adds Armor and reduces basic attack damage by 10%, great against AD top laners." }] },
  ap: { items: [{ item: "Wit's End", replaces: "Immortal Shieldbow", why: "Gives Magic Resist, Tenacity and Attack Speed, plus bonus magic damage on your attacks." }, { item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Adds Magic Resist and Tenacity." }] },
  healing: { items: [{ item: "Mortal Reminder", why: "Your physical damage applies 40% Wounds, cutting their healing, and it still gives crit and Armor Penetration." }], tip: "Buy it early against a healing top laner like Aatrox or Warwick." },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Tenacity makes all their crowd control end sooner." }, { item: "Wit's End", replaces: "Immortal Shieldbow", why: "Its Tenacity stacks with Mercury's Treads, so you spend even less time locked down." }] }
};

RA.champAdapt["Ziggs:bot"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% Magic Penetration lets your bombs still hurt high-resist targets." }], tip: "Use your range to destroy turrets when their tanks can't reach you." },
  squishy: { items: [{ item: "Stormsurge", why: "Buy it fourth: your bombs easily deal 25% of a squishy target's health, so its Squall adds an extra hit of magic damage." }], tip: "The baseline build already bursts squishy targets well." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Rabadon's Deathcap", why: "Gives 50 Armor and a Time Stop stasis for when their AD carry or divers reach you." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies 40% Wounds, cutting their healing, and you poke often enough to keep it applied." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes their crowd control end sooner." }, { item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Its Spell Shield blocks the next enemy ability, like a hook or stun." }] }
};

RA.champAdapt["Zoe:support"] = {
  tanky: { items: [{ item: "Void Staff", why: "Buy it fourth: its 40% Magic Penetration ignores a big part of their magic resist." }], tip: "Use your sleep bubble on their carry, not the tank." },
  squishy: { items: [{ item: "Zaz'Zak's Realmspike", why: "Upgrade your support item to this: dealing ability damage to a champion causes an extra explosion of magic damage." }, { item: "Luden's Echo", replaces: "Shurelya's Battlesong", why: "Its Echoes add bonus magic damage to your abilities, which can kill squishy targets you hit with a long-range Paddle Star." }] },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Shurelya's Battlesong", why: "Gives 50 Armor and a Time Stop stasis for when AD divers reach you." }, { item: "Celestial Opposition", why: "Pick it as your support item upgrade: it reduces champion damage for 2 seconds after you are hit, then slows nearby enemies." }] },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Adds Magic Resist and Tenacity." }, { item: "Banshee's Veil", replaces: "Shurelya's Battlesong", why: "Its Spell Shield blocks the next enemy ability, and it adds Magic Resist." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shurelya's Battlesong", why: "Your magic damage applies 40% Wounds, cutting their healing, and it adds Health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Tenacity makes their crowd control end sooner." }], tip: "Stay far back and keep your sleep ready for whoever tries to engage on you." }
};
