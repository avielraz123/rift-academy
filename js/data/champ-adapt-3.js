/* "Adapt your build": item changes by enemy team composition. Baseline = RA.builds for the same key. */
window.RA = window.RA || {};
RA.champAdapt = RA.champAdapt || {};

RA.champAdapt["Akali:top"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration ignores a big part of their magic resist, so your combo still hurts tanky top laners." }], tip: "You will rarely kill a full tank in one combo, so use your shroud to reach their carries in team fights." },
  squishy: { items: [{ item: "Rabadon's Deathcap", why: "Buy it right after your core: it adds a lot of Ability Power and raises your total Ability Power by 30%, so one full combo deletes a squishy target." }], tip: "Look for flanks in side lanes and jump the first carry who walks up alone." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Gives armor and cuts damage from basic attacks by 10%, which helps a lot against AD fighters in lane." }], tip: "{{item:Zhonya's Hourglass}} already gives armor, so you can buy it before Shadowflame if they keep diving you." },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds magic resist and tenacity so magic burst and stuns hurt less." }, { item: "Banshee's Veil", replaces: "Shadowflame", why: "Gives magic resist and a spell shield that blocks the next enemy ability, often the one meant to kill you." }] },
  healing: { items: [{ item: "Morellonomicon", why: "Buy it after Hextech Gunblade: your magic damage applies Grievous Wounds, which cuts the enemy's healing, and it also adds health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Its tenacity makes stuns and slows end sooner, so you can get back into your shroud faster." }, { item: "Banshee's Veil", why: "Its spell shield blocks the first crowd control ability thrown at you when you dive in." }] }
};

RA.champAdapt["Aurora:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration lets your spells keep doing real damage to tanks stacking magic resist." }] },
  squishy: { items: [{ item: "Luden's Echo", why: "Good fourth item: its echoes add bonus magic damage to your target and nearby enemies, which punishes grouped squishies." }], tip: "Your baseline build is already made to burst squishy targets, so focus on landing your spells first." },
  ad: { items: [{ item: "Zhonya's Hourglass", why: "Buy it third: it gives armor, and its active puts you in stasis so you can wait out an AD assassin's burst." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Adds magic resist and a spell shield that blocks the next enemy ability, which is great against mage burst." }] },
  healing: { items: [{ item: "Morellonomicon", why: "Buy it after Stormsurge: your magic damage applies Grievous Wounds and cuts the enemy's healing." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner, so you can use your mobility to escape." }, { item: "Banshee's Veil", replaces: "Shadowflame", why: "Its spell shield blocks the first stun or root aimed at you." }] }
};

RA.champAdapt["Diana:jungle"] = {
  tanky: { items: [{ item: "Liandry's Torment", why: "Buy it after your core: your abilities burn enemies for a share of their max health, which hurts tanks with big health bars." }, { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration cuts through the magic resist tanks build." }] },
  squishy: { items: [{ item: "Shadowflame", replaces: "Riftmaker", why: "More burst Ability Power and magic penetration, and your damage crits enemies below 40% health, so squishies die before they can react." }, { item: "Rabadon's Deathcap", why: "Buy it next: it raises your total Ability Power by 30% for even bigger dives." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Gives armor and reduces damage from basic attacks by 10%, which helps when AD carries focus you after you dive." }], tip: "{{item:Zhonya's Hourglass}} already gives armor, so rush it earlier if they are mostly AD." },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds magic resist and tenacity against mage burst and stuns." }, { item: "Banshee's Veil", replaces: "Shadowflame", why: "Gives magic resist and a spell shield that blocks the next enemy ability when you dive in." }] },
  healing: { items: [{ item: "Morellonomicon", why: "Buy it after Dusk and Dawn: your magic damage applies Grievous Wounds to cut their healing, and it adds health for diving." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes stuns and roots shorter, so you are not locked down for long after you dive." }], tip: "Wait until their main crowd control ability is used before you dive in with your ultimate." }
};

RA.champAdapt["Ekko:jungle"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration ignores a big part of the magic resist tanks build." }, { item: "Nashor's Tooth", why: "Good fourth item: attack speed and on-hit magic damage let you keep hitting tanks in long fights." }] },
  squishy: { items: [{ item: "Stormsurge", why: "Good fourth item: after you deal a big chunk of a champion's health quickly, it deals extra magic damage, finishing off squishies." }], tip: "Your baseline build is already burst-focused, so look for picks on carries who walk alone." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Rabadon's Deathcap", why: "Gives armor and a stasis active to survive AD burst when you dive in." }, { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from basic attacks." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Rabadon's Deathcap", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds magic resist and tenacity against mages." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Rabadon's Deathcap", why: "Your magic damage applies Grievous Wounds, which cuts their healing, and it adds health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner, so you can still use your ultimate to escape." }], tip: "Save your ultimate to undo the damage taken after you get caught." }
};

RA.champAdapt["Fizz:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration lets your combo still hurt enemies with lots of magic resist." }], tip: "Don't waste your combo on tanks; use your trident hop to reach their carries." },
  squishy: { items: [{ item: "Stormsurge", why: "Buy it second: after you deal a big chunk of a champion's health quickly, it deals extra magic damage, so squishies die from one combo." }, { item: "Rabadon's Deathcap", why: "Raises your total Ability Power by 30% for even more burst." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Gives armor and reduces damage from basic attacks by 10%." }], tip: "{{item:Zhonya's Hourglass}} already gives armor; buy it second if their AD threats focus you." },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds magic resist and tenacity against mage burst." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies Grievous Wounds and cuts their healing, and the item adds health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }, { item: "Banshee's Veil", why: "Its spell shield blocks the first stun or root aimed at you." }], tip: "Use your trident hop to dodge their key crowd control ability, not just to deal damage." }
};

RA.champAdapt["Hwei:bot"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration keeps your spells strong against tanks who stack magic resist." }], tip: "{{item:Liandry's Torment}} already burns a share of max health, so your build handles tanks well." },
  squishy: { items: [{ item: "Luden's Echo", replaces: "Liandry's Torment", why: "Adds burst: its echoes deal bonus magic damage to your target and nearby enemies." }, { item: "Rabadon's Deathcap", why: "Raises your total Ability Power by 30% for more burst." }] },
  ad: { items: [{ item: "Zhonya's Hourglass", why: "Buy it third: it gives armor and a stasis active to survive dives from AD threats." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies Grievous Wounds and cuts their healing." }] },
  cc: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Its spell shield blocks the first hook or stun thrown at you." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }], tip: "Stand behind your minions so hooks and skillshots can't reach you easily." }
};

RA.champAdapt["Irelia:top"] = {
  tanky: { items: [{ item: "Black Cleaver", replaces: "Hullbreaker", why: "Your physical damage lowers the target's armor, stacking up to 5 times, and it adds health for long fights." }], tip: "{{item:Blade of The Ruined King}} already deals damage based on current health, so your build is good against tanks." },
  squishy: { items: [{ item: "Kraken Slayer", replaces: "Hullbreaker", why: "Every third attack deals bonus damage that grows with the target's missing health, so you finish squishies fast." }] },
  ad: { items: [{ item: "Death's Dance", replaces: "Hullbreaker", why: "Gives armor and delays part of the damage you take, then heals you when a champion you damaged dies." }], tip: "{{item:Plated Steelcaps}} are already in your build for this." },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Plated Steelcaps", why: "Adds magic resist and tenacity against mages." }, { item: "Wit's End", why: "Buy it second: magic resist, attack speed and on-hit damage help you fight AP champions." }] },
  healing: { items: [{ item: "Chempunk Chainsword", replaces: "Hullbreaker", why: "Your physical damage applies Grievous Wounds and cuts their healing, and it adds health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Plated Steelcaps", why: "Tenacity makes crowd control end sooner." }, { item: "Sterak's Gage", replaces: "Hullbreaker", why: "Adds tenacity and a shield when your health drops low." }], tip: "{{item:Wit's End}} also gives tenacity." }
};

RA.champAdapt["Kaisa:bot"] = {
  tanky: { items: [{ item: "Blade of The Ruined King", why: "Good fourth item: attacks deal a percentage of the enemy's current health, which is strong against big health bars." }], tip: "{{item:Guinsoo's Rageblade}} and {{item:Terminus}} already help against tanks." },
  squishy: { items: [{ item: "Shadowflame", why: "Good fourth item: magic damage crits enemies below 40% health, so you finish squishies with your abilities." }] },
  ad: { items: [{ item: "Guardian Angel", why: "Gives armor and revives you once after lethal damage." }], tip: "Light attacks from {{item:Terminus}} grant armor and magic resist for a few seconds." },
  ap: { items: [{ item: "Wit's End", why: "Good fourth item: magic resist, attack speed and on-hit damage help against AP threats." }] },
  healing: { items: [{ item: "Mortal Reminder", why: "Good fourth item: your physical damage applies Grievous Wounds, cutting their healing, and it gives armor penetration." }] },
  cc: { items: [{ item: "Mercurial Scimitar", why: "Its active removes most crowd control debuffs and gives move speed." }], tip: "Hold your ultimate: once their crowd control is used, its dash and shield can get you out." }
};

RA.champAdapt["Leblanc:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration keeps your combo damage up against magic resist." }], tip: "LeBlanc can't kill tanks quickly, so look to burst their carries instead." },
  squishy: { items: [{ item: "Stormsurge", replaces: "Luden's Echo", why: "After you deal a big chunk of a champion's health quickly, it deals extra magic damage, so squishies die from one combo." }, { item: "Mejai's Soulstealer", why: "If you are ahead, takedowns grant Glory, which gives Ability Power and move speed." }] },
  ad: { items: [{ item: "Zhonya's Hourglass", why: "Buy it second: it gives armor and a stasis active to survive AD burst." }, { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from basic attacks." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies Grievous Wounds and cuts their healing." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }, { item: "Banshee's Veil", why: "Its spell shield blocks the first stun or root aimed at you." }] }
};

RA.champAdapt["Lux:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration keeps your spells strong against magic resist stacking." }] },
  squishy: { items: [{ item: "Rabadon's Deathcap", why: "Good fourth item: it raises your total Ability Power by 30% for even more burst." }, { item: "Mejai's Soulstealer", why: "If you are ahead, takedowns grant Glory, which gives Ability Power and move speed." }], tip: "Your baseline build is already burst-focused; land your root first, then follow up." },
  ad: { items: [{ item: "Zhonya's Hourglass", why: "Buy it third: it gives armor and a stasis active to survive dives from AD threats." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Stormsurge", why: "Your magic damage applies Grievous Wounds and cuts their healing." }] },
  cc: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Its spell shield blocks the first stun or root aimed at you." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }] }
};

RA.champAdapt["MissFortune:bot"] = {
  tanky: { items: [{ item: "Lord Dominik's Regards", why: "Good fourth item: armor penetration plus bonus damage against champions with lots of bonus health." }] },
  squishy: { items: [{ item: "Hubris", replaces: "Bloodthirster", why: "Buy it first instead: its Lethality hits low-armor targets hard, and each takedown gives you bonus Attack Damage for 90 seconds, so you snowball off squishy teams." }], tip: "{{item:The Collector}} already executes low-health targets; your build is good against squishies." },
  ad: { items: [{ item: "Guardian Angel", why: "Gives armor and revives you once after lethal damage." }, { item: "Plated Steelcaps", replaces: "Boots of Swiftness", why: "Armor plus 10% less damage from basic attacks." }] },
  ap: { items: [{ item: "Edge of Night", why: "Good fifth item: health plus a spell shield that blocks the next enemy ability, often a mage's key spell." }] },
  healing: { items: [{ item: "Mortal Reminder", replaces: "Lord Dominik's Regards", why: "Your physical damage applies Grievous Wounds, cutting their healing, and it gives armor penetration." }] },
  cc: { items: [{ item: "Edge of Night", why: "Its spell shield blocks the next enemy ability, which stops crowd control from interrupting your ultimate." }, { item: "Mercury's Treads", replaces: "Boots of Swiftness", why: "Tenacity makes crowd control end sooner." }] }
};

RA.champAdapt["Sylas:jungle"] = {
  tanky: { items: [{ item: "Bloodletter's Curse", why: "Good fourth item: your magic damage lowers their magic resist, stacking up to 4 times." }, { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration cuts through tanks' magic resist." }] },
  squishy: { items: [{ item: "Shadowflame", why: "Good fourth item: magic damage crits enemies below 40% health, so you finish squishies quickly." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from basic attacks." }], tip: "{{item:Zhonya's Hourglass}} already gives armor." },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds magic resist and tenacity against mages." }, { item: "Banshee's Veil", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", why: "Buy it after Riftmaker: your magic damage applies Grievous Wounds and cuts their healing." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }], tip: "Stealing their best crowd control ultimate with your own ultimate is often your best play." }
};

RA.champAdapt["Sylas:top"] = {
  tanky: { items: [{ item: "Bloodletter's Curse", why: "Good fourth item: your magic damage lowers their magic resist, stacking up to 4 times." }, { item: "Void Staff", why: "Its 40% magic penetration cuts through tanks' magic resist." }] },
  squishy: { items: [{ item: "Shadowflame", why: "Good fourth item: magic damage crits enemies below 40% health, so you finish squishies quickly." }, { item: "Sorcerer's Shoes", replaces: "Ionian Boots of Lucidity", why: "Magic penetration adds burst against low magic resist targets." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Ionian Boots of Lucidity", why: "Armor plus 10% less damage from basic attacks." }], tip: "{{item:Zhonya's Hourglass}} already gives armor." },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Adds magic resist and tenacity against mages." }, { item: "Banshee's Veil", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", why: "Buy it after Riftmaker: your magic damage applies Grievous Wounds and cuts their healing." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Tenacity makes crowd control end sooner." }], tip: "Stealing their best crowd control ultimate with your own ultimate is often your best play." }
};

RA.champAdapt["Taliyah:mid"] = {
  tanky: { items: [{ item: "Liandry's Torment", why: "Good fourth item: your abilities burn enemies for a share of their max health." }, { item: "Cryptbloom", why: "Magic penetration helps against tanks stacking magic resist." }] },
  squishy: { items: [{ item: "Shadowflame", why: "Good fourth item: magic damage crits enemies below 40% health, so you finish squishies quickly." }, { item: "Sorcerer's Shoes", replaces: "Ionian Boots of Lucidity", why: "Magic penetration adds burst against low magic resist targets." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Ionian Boots of Lucidity", why: "Armor plus 10% less damage from basic attacks." }], tip: "Buy {{item:Zhonya's Hourglass}} second if AD threats focus you." },
  ap: { items: [{ item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Adds magic resist and tenacity against mages." }, { item: "Banshee's Veil", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Rylai's Crystal Scepter", why: "Your magic damage applies Grievous Wounds and cuts their healing, and it still gives health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Tenacity makes crowd control end sooner." }, { item: "Banshee's Veil", why: "Its spell shield blocks the first stun or root aimed at you." }] }
};

RA.champAdapt["Veigar:bot"] = {
  tanky: { items: [{ item: "Void Staff", why: "Buy it after Rabadon's Deathcap: its 40% magic penetration cuts through tanks' magic resist." }], tip: "Your passive keeps stacking Ability Power, so tanks get harder to survive your combo over time." },
  squishy: { items: [{ item: "Shadowflame", why: "Good fourth item: magic damage crits enemies below 40% health, so you finish squishies quickly." }], tip: "Your baseline build is already burst-focused." },
  ad: { items: [{ item: "Zhonya's Hourglass", why: "Buy it third: it gives armor and a stasis active to survive AD dives." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Stormsurge", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Stormsurge", why: "Your magic damage applies Grievous Wounds and cuts their healing." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }, { item: "Banshee's Veil", why: "Its spell shield blocks the first stun or root aimed at you." }] }
};

RA.champAdapt["Viktor:bot"] = {
  tanky: { items: [{ item: "Void Staff", why: "Good fourth item: its 40% magic penetration cuts through tanks' magic resist." }] },
  squishy: { items: [{ item: "Shadowflame", why: "Good fourth item: magic damage crits enemies below 40% health, so you finish squishies quickly." }, { item: "Rabadon's Deathcap", why: "Raises your total Ability Power by 30% for more burst." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from basic attacks." }], tip: "{{item:Zhonya's Hourglass}} already gives armor." },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Zhonya's Hourglass", why: "Gives magic resist instead of armor, plus a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Lich Bane", why: "Your magic damage applies Grievous Wounds and cuts their healing." }] },
  cc: { items: [{ item: "Banshee's Veil", why: "Its spell shield blocks the first stun or root aimed at you." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }] }
};

RA.champAdapt["Vladimir:top"] = {
  tanky: { items: [{ item: "Riftmaker", replaces: "Stormsurge", why: "Its damage grows the longer you fight champions, it gives health, and it turns part of your bonus health into Ability Power." }, { item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration cuts through tanks' magic resist." }] },
  squishy: { items: [{ item: "Shadowflame", why: "Buy it second: magic damage crits enemies below 40% health, so you finish squishies quickly." }], tip: "Your baseline build is already burst-focused." },
  ad: { items: [{ item: "Zhonya's Hourglass", replaces: "Shadowflame", why: "Gives armor and a stasis active to survive AD burst." }, { item: "Plated Steelcaps", replaces: "Sorcerer's Shoes", why: "Armor plus 10% less damage from basic attacks." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Adds magic resist and tenacity against mages." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Shadowflame", why: "Your magic damage applies Grievous Wounds and cuts their healing, and it adds health." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }], tip: "Use your pool to dodge their key crowd control ability." }
};

RA.champAdapt["Yasuo:bot"] = {
  tanky: { items: [{ item: "Lord Dominik's Regards", why: "Good fourth item: armor penetration plus bonus damage against champions with lots of bonus health." }] },
  squishy: { items: [{ item: "Bloodthirster", why: "Good fourth item: big Attack Damage and life steal, and extra healing becomes a shield." }], tip: "Your baseline build is already good against squishy targets." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Berserker's Greaves", why: "Armor plus 10% less damage from basic attacks." }, { item: "Guardian Angel", why: "Gives armor and revives you once after lethal damage." }], tip: "{{item:Death's Dance}} already gives armor." },
  ap: { items: [{ item: "Wit's End", why: "Good fourth item: magic resist, attack speed and tenacity help against AP threats." }, { item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Adds magic resist and tenacity against mages." }] },
  healing: { items: [{ item: "Mortal Reminder", why: "Good fourth item: your physical damage applies Grievous Wounds, cutting their healing, and it gives armor penetration." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Tenacity makes crowd control end sooner." }, { item: "Mercurial Scimitar", why: "Its active removes most crowd control debuffs and gives move speed." }], tip: "Use your wind wall to block their projectile crowd control." }
};

RA.champAdapt["Yone:mid"] = {
  tanky: { items: [{ item: "Blade of The Ruined King", why: "Good fourth item: attacks deal a percentage of the enemy's current health, which is strong against big health bars." }, { item: "Lord Dominik's Regards", why: "Armor penetration plus bonus damage against champions with lots of bonus health." }] },
  squishy: { items: [{ item: "Bloodthirster", why: "Good fourth item: big Attack Damage and life steal, and extra healing becomes a shield." }], tip: "Your baseline build is already good against squishy targets." },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Berserker's Greaves", why: "Armor plus 10% less damage from basic attacks." }, { item: "Guardian Angel", why: "Gives armor and revives you once after lethal damage." }], tip: "{{item:Death's Dance}} already gives armor." },
  ap: { items: [{ item: "Wit's End", why: "Good fourth item: magic resist, attack speed and tenacity help against AP threats." }, { item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Adds magic resist and tenacity against mages." }] },
  healing: { items: [{ item: "Mortal Reminder", why: "Good fourth item: your physical damage applies Grievous Wounds, cutting their healing, and it gives armor penetration." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Berserker's Greaves", why: "Tenacity makes crowd control end sooner." }, { item: "Mercurial Scimitar", why: "Its active removes most crowd control debuffs and gives move speed." }] }
};

RA.champAdapt["Zed:mid"] = {
  tanky: { items: [{ item: "Serylda's Grudge", why: "Good fourth item: armor penetration, and your abilities slow enemies below 50% health." }], tip: "{{item:Lord Dominik's Regards}} is already in your build to help against tanks; you may want it earlier." },
  squishy: { items: [{ item: "Axiom Arc", replaces: "Lord Dominik's Regards", why: "Lethality, and takedowns refund part of your ultimate's cooldown." }] },
  ad: { items: [{ item: "Plated Steelcaps", replaces: "Ionian Boots of Lucidity", why: "Armor plus 10% less damage from basic attacks." }, { item: "Guardian Angel", why: "Gives armor and revives you once after lethal damage." }] },
  ap: { items: [{ item: "Edge of Night", why: "Good fourth item: health plus a spell shield that blocks the next enemy ability." }, { item: "Maw of Malmortius", why: "Magic resist plus a shield against magic damage when you drop low." }] },
  healing: { items: [{ item: "Chempunk Chainsword", why: "Good fourth item: your physical damage applies Grievous Wounds and cuts their healing." }, { item: "Serpent's Fang", why: "Reduces shields on enemies you damage, if their team relies on shields." }] },
  cc: { items: [{ item: "Mercury's Treads", replaces: "Ionian Boots of Lucidity", why: "Tenacity makes crowd control end sooner." }, { item: "Endless Hunger", why: "Good fourth item: tenacity and omnivamp." }] }
};

RA.champAdapt["Zoe:mid"] = {
  tanky: { items: [{ item: "Void Staff", replaces: "Shadowflame", why: "Its 40% magic penetration cuts through tanks' magic resist." }] },
  squishy: { items: [{ item: "Rabadon's Deathcap", why: "Good fourth item: it raises your total Ability Power by 30% for even more burst." }], tip: "Your baseline build is already burst-focused." },
  ad: { items: [{ item: "Zhonya's Hourglass", why: "Buy it third: it gives armor and a stasis active to survive AD dives." }] },
  ap: { items: [{ item: "Banshee's Veil", replaces: "Shadowflame", why: "Gives magic resist and a spell shield that blocks the next enemy ability." }] },
  healing: { items: [{ item: "Morellonomicon", replaces: "Lich Bane", why: "Your magic damage applies Grievous Wounds and cuts their healing." }] },
  cc: { items: [{ item: "Banshee's Veil", why: "Its spell shield blocks the first stun or root aimed at you." }, { item: "Mercury's Treads", replaces: "Sorcerer's Shoes", why: "Tenacity makes crowd control end sooner." }] }
};
