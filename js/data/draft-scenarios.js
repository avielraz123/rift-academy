window.RA = window.RA || {};
RA.draftScenarios = RA.draftScenarios || [];
RA.draftScenarios.push(
  /* ---------- beginner ---------- */
  {
    id: "assassins-everywhere",
    level: "beginner",
    role: "mid",
    ally: ["Malphite", "Sejuani"],
    enemy: ["Talon", "Zed", "Evelynn"],
    q: "The enemy team has three assassins who want to jump on your carries. Which mid pick handles them best?",
    options: ["Malzahar", "Yasuo", "Ziggs", "Aurora"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Malzahar}}'s passive blocks most of an assassin's burst, and his ultimate suppresses whoever dives in. Immobile poke champions like {{champ:Ziggs}} are exactly what assassins love to catch."
  },
  {
    id: "all-ad-team",
    level: "beginner",
    role: "mid",
    ally: ["Darius", "LeeSin", "Draven", "Pyke"],
    enemy: ["Ornn", "Vi", "Ahri", "Jhin", "Braum"],
    q: "Every champion on your team so far deals physical damage. Which mid should you pick?",
    options: ["Lux", "Yasuo", "Zed"],
    optionChamps: true,
    answer: 0,
    explain: "An all-AD team lets the enemy stack armor and shrug off your damage. {{champ:Lux}} adds magic damage, plus a bind and a shield your team doesn't have."
  },
  {
    id: "no-frontline",
    level: "beginner",
    role: "support",
    ally: ["Fiora", "Kindred", "Syndra", "Jinx"],
    enemy: ["Malphite", "JarvanIV", "Orianna", "MissFortune"],
    q: "Your team has no tank and nobody to start fights. Which support fills the gap?",
    options: ["Leona", "Lux", "Brand", "Senna"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Leona}} is a tanky engage support: she stands in front, starts fights with her stuns, and soaks damage for {{champ:Jinx}} and {{champ:Syndra}}. The other three are squishy damage dealers, like the rest of your team."
  },
  {
    id: "safe-blind-mid",
    level: "beginner",
    role: "mid",
    ally: [],
    enemy: ["Vi"],
    q: "You're picking mid very early. The enemy has only shown their jungler. Which champion is the safest blind pick?",
    options: ["Ahri", "Yasuo", "Annie", "Veigar"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Ahri}} is ranged, has three dashes on her ultimate and a charm for self-defense, so few mids hard counter her. {{champ:Yasuo}}, short-range {{champ:Annie}} and early-weak {{champ:Veigar}} are easier to punish with a counter pick."
  },
  {
    id: "healing-enemies",
    level: "beginner",
    role: "bot",
    ally: ["Ornn", "LeeSin", "Syndra", "Caitlyn", "Thresh"],
    enemy: ["Aatrox", "Warwick", "Vladimir", "Jhin", "Soraka"],
    q: "You're playing Caitlyn. The enemy team heals constantly: Aatrox, Warwick, Vladimir and Soraka. Which item should you get earlier than usual?",
    options: ["Mortal Reminder", "Infinity Edge", "Bloodthirster", "Guardian Angel"],
    optionChamps: false,
    answer: 0,
    explain: "{{item:Mortal Reminder}} applies Grievous Wounds, which cuts healing. Start with the cheap {{item:Executioner's Calling}} component if Soraka's heals are winning the lane."
  },
  {
    id: "lulu-loves-carries",
    level: "beginner",
    role: "bot",
    ally: ["Ornn", "Sejuani", "Orianna", "Lulu"],
    enemy: ["Renekton", "Graves", "Syndra"],
    q: "Your support locked in Lulu, who shields, speeds up and protects one carry. Which ADC gets the most out of her?",
    options: ["Jinx", "Ezreal", "Ziggs"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Lulu}} is at her best protecting a hyper-carry who wants to stand still and auto-attack. {{champ:Jinx}} does exactly that, and with Ornn and Sejuani in front, your team becomes a classic protect-the-carry comp."
  },

  /* ---------- intermediate ---------- */
  {
    id: "poke-comp-mid",
    level: "intermediate",
    role: "mid",
    ally: ["Jayce", "Nidalee", "Ezreal", "Karma"],
    enemy: ["Ornn", "Sejuani", "Galio", "Jinx", "Braum"],
    q: "Your team is built to poke from long range. The enemy is tanky and wants to engage. Which mid completes your plan?",
    options: ["Ziggs", "Yasuo", "Annie", "Malzahar"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Ziggs}} has the longest-range poke of any mid, and his Satchel Charge can blow up damaged turrets. With Jayce, Nidalee, Ezreal and Karma you can siege and wear down the tanks before they reach you."
  },
  {
    id: "dodge-the-dive",
    level: "intermediate",
    role: "bot",
    ally: ["Ornn", "Viego", "Orianna", "Lulu"],
    enemy: ["Malphite", "JarvanIV", "Diana", "Leona"],
    q: "The enemy team has four champions whose job is to jump onto your ADC. Which ADC survives best?",
    options: ["Ezreal", "Draven", "Jhin", "Caitlyn"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Ezreal}}'s Arcane Shift is a short-cooldown blink that lets him dodge engages, and his long-range spells let him deal damage from safety. Immobile marksmen like {{champ:Jhin}} and {{champ:Draven}} are prime targets for this much dive."
  },
  {
    id: "tank-wall",
    level: "intermediate",
    role: "bot",
    ally: ["Camille", "Graves", "Syndra", "Nami"],
    enemy: ["Ornn", "Sejuani", "Sion", "Braum"],
    q: "The enemy team has four tanks. Which ADC is the best pick to break through them?",
    options: ["Vayne", "Draven", "Jhin", "MissFortune"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Vayne}}'s Silver Bolts deal true damage based on the target's max health, so tanks melt as fast as anyone else. Burst-focused marksmen struggle when every enemy has thousands of health and armor."
  },
  {
    id: "wombo-combo",
    level: "intermediate",
    role: "mid",
    ally: ["Malphite", "JarvanIV", "MissFortune", "Leona"],
    enemy: ["Fiora", "Graves", "Syndra", "Jhin"],
    q: "Your top and jungle both love diving into the enemy team with area knock-ups. Which mid creates the strongest teamfight combo with them?",
    options: ["Orianna", "Ziggs", "Veigar", "Lux"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Orianna}} can attach her ball to a diving Malphite or Jarvan IV, then pull everyone together with Shockwave, right into Miss Fortune's Bullet Time. It's the classic teamfight wombo combo."
  },
  {
    id: "crowd-control-boots",
    level: "intermediate",
    role: "bot",
    ally: ["Garen", "Graves", "Ahri", "Jinx", "Thresh"],
    enemy: ["Shen", "Amumu", "Malzahar", "Varus", "Leona"],
    q: "You're Jinx. The enemy team is full of stuns, snares and Malzahar's suppression, mostly from magic damage. Which boots fit best?",
    options: ["Mercury's Treads", "Berserker's Greaves", "Plated Steelcaps", "Boots of Swiftness"],
    optionChamps: false,
    answer: 0,
    explain: "{{item:Mercury's Treads}} give tenacity, which shortens every stun and root, plus magic resist against Amumu and Malzahar. Later, {{item:Mercurial Scimitar}} can cleanse a suppression."
  },
  {
    id: "need-a-tank-top",
    level: "intermediate",
    role: "top",
    ally: ["Graves", "Syndra", "Jinx", "Lux"],
    enemy: ["Renekton", "Vi", "Zed", "Draven", "Nautilus"],
    q: "You're the last pick, playing top. Your team is four squishy damage dealers. Which pick helps most?",
    options: ["Ornn", "Fiora", "Jayce", "Gangplank"],
    optionChamps: true,
    answer: 0,
    explain: "Your team has plenty of damage but nobody to stand in front or start fights. {{champ:Ornn}} gives frontline, engage and free item upgrades for the whole team."
  },

  /* ---------- advanced ---------- */
  {
    id: "comfort-vs-counter",
    level: "advanced",
    role: "mid",
    ally: ["Ornn", "LeeSin", "Jinx", "Thresh"],
    enemy: ["Gnar", "Viego", "Fizz", "Ezreal", "Nautilus"],
    q: "You're the last pick mid against Fizz. You have 250 games on Ahri, and 4 games on a champion that's listed as Fizz's counter. What's the best choice?",
    options: ["Ahri, your comfort pick", "The counter you've played 4 games of", "A champion you've never played but is S tier", "Dodge the game"],
    optionChamps: false,
    answer: 0,
    explain: "Matchup data assumes both players know their champion. Hundreds of games on {{champ:Ahri}} (who has a charm and dashes to deal with Fizz's dive) are worth more than a counter you barely know."
  },
  {
    id: "last-pick-vs-yasuo",
    level: "advanced",
    role: "mid",
    ally: ["Ornn", "LeeSin", "Jinx", "Thresh"],
    enemy: ["Camille", "Kindred", "Yasuo", "Caitlyn", "Lux"],
    q: "You're last pick and the enemy mid is Yasuo. Your pool is Malzahar, Ziggs and Lux. Which do you pick?",
    options: ["Malzahar", "Ziggs", "Lux"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Yasuo}}'s Wind Wall blocks projectiles, which shuts down much of {{champ:Ziggs}} and {{champ:Lux}}. {{champ:Malzahar}}'s ultimate can't be blocked and stops Yasuo's all-in, and current ranked data lists it as a good matchup."
  },
  {
    id: "protect-the-hypercarries",
    level: "advanced",
    role: "support",
    ally: ["Kayle", "MasterYi", "Kassadin", "Vayne"],
    enemy: ["Renekton", "LeeSin", "Leblanc", "Draven", "Nautilus"],
    q: "Your team is all late-game carries and the enemy is built to snowball early with dives and assassins. Which support gives your team the best chance?",
    options: ["Lulu", "Pyke", "Brand", "Blitzcrank"],
    optionChamps: true,
    answer: 0,
    explain: "Your team wins if it survives to the late game. {{champ:Lulu}} polymorphs divers and assassins, shields, and her ultimate keeps Vayne or Master Yi alive. Aggressive picks like Pyke or Blitzcrank don't fit a team that wants to scale."
  },
  {
    id: "flex-first-pick",
    level: "advanced",
    role: "mid",
    ally: [],
    enemy: ["Sejuani"],
    q: "Your team has the first pick. You want a strong champion that also hides which lane it's going to. Which pick does that?",
    options: ["Ziggs", "Draven", "Veigar", "Caitlyn"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Ziggs}} is played both mid and bot, so the enemy can't counter-pick him without guessing his lane. Flex picks give your team the last word in the draft."
  },
  {
    id: "punish-the-scalers",
    level: "advanced",
    role: "jungle",
    ally: ["Renekton", "Leblanc", "Draven", "Leona"],
    enemy: ["Kayle", "Karthus", "Kassadin", "KogMaw", "Lulu"],
    q: "Every enemy champion is weak early and strong late, and your lanes are early-game bullies. Which jungler fits?",
    options: ["LeeSin", "MasterYi", "Karthus", "Sejuani"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:LeeSin}} is strongest early: he can invade the farming Karthus, gank lanes that are already winning, and help your team end before Kayle, Kassadin and Kog'Maw come online. Master Yi wants a long game, which is exactly what the enemy wants too."
  },
  {
    id: "follow-the-hook",
    level: "advanced",
    role: "bot",
    ally: ["Ornn", "JarvanIV", "Syndra", "Nautilus"],
    enemy: ["Caitlyn", "Lux"],
    q: "Your support is Nautilus. The enemy bot lane is Caitlyn and Lux, a long-range poke duo. Which ADC pairs best?",
    options: ["Kaisa", "Smolder", "Ezreal", "Ziggs"],
    optionChamps: true,
    answer: 0,
    explain: "{{champ:Kaisa}}'s passive stacks faster when allies immobilize enemies, and her ultimate dashes onto anyone Nautilus hooks. Against an immobile {{champ:Caitlyn}}, Kai'Sa wins the all-in, and the poke lane never gets to play its game."
  }
);
