window.RA = window.RA || {};
/* Patch-dependent facts. Refresh this file every patch (see README). */
RA.patch = {
  number: "26.22",
  updated: "November 2026",
  minionGold: { melee: 20, caster: 14, cannon: 50 },

  timers: {
    epic: [
      { name: "Dragon", first: 300, respawn: 300, note: "First at 5:00, back 5:00 after each kill. 4 drakes = Dragon Soul." },
      { name: "Elder Dragon", first: null, respawn: 360, note: "Appears 6:00 after a team gets Soul. Press Taken when Soul is claimed, then after each Elder." },
      { name: "Void Grubs", first: 480, respawn: 0, until: 885, note: "3 grubs at 8:00, one wave only, gone at 14:45." },
      { name: "Rift Herald", first: 900, respawn: 0, until: 1185, note: "Spawns 15:00, leaves at 19:45. Doesn't respawn." },
      { name: "Baron Nashor", first: 1200, respawn: 360, note: "Spawns 20:00, back 6:00 after each kill." }
    ],
    camps: [
      { name: "Blue Sentinel", first: 55, respawn: 300, note: "Blue buff: ability haste + mana regen." },
      { name: "Red Brambleback", first: 55, respawn: 300, note: "Red buff: burn + slow on attacks, health regen." },
      { name: "Murk Wolves", first: 55, respawn: 135 },
      { name: "Raptors", first: 55, respawn: 135 },
      { name: "Gromp", first: 67, respawn: 135 },
      { name: "Krugs", first: 67, respawn: 135 },
      { name: "Rift Scuttler", first: 175, respawn: 150, note: "Leaves a Speed Shrine for 90s when killed." }
    ],
    notes: [
      "Minion waves: the first wave arrives at 0:30, then one every 30s. From 14:00 waves come every 25s, and from 30:00 every 20s.",
      "Cannon minions: first on wave 3 (1:30), then every 3rd wave until 14:00, every 2nd wave until 25:00, then every wave.",
      "The map turns elemental after the 2nd drake (it takes the 3rd drake's element).",
      "Atakhan was removed at the start of 2026 and hasn't returned."
    ]
  },

  /* Short facts the guides can quote. */
  facts: {
    startingGold: 500,
    levelCap: 18,
    plating: "Turret plates no longer fall off. Outer, inner and inhibitor turrets each have 5 plates. Outer plates give 120g each, dropping 10g per minute from 11:00 down to 80g.",
    firstBlood: "First Blood gives +100 gold; the first turret gives +300 gold, shared with nearby allies.",
    killGold: "A champion kill is worth 300 gold at levels 1-6, rising to 420 at level 18, plus bounties.",
    wards: "Each player can have 3 Stealth Wards and 1 Control Ward on the map. You can carry up to 2 Control Wards (75g each).",
    xpRange: "You get experience from dying enemy minions only if you're within about 1500 units. It's split when allies are nearby.",
    roleQuests: {
      top: "Top quest: free Unleashed Teleport (or a big shield if you already took Teleport), bonus experience, and a level cap of 20.",
      jungle: "Jungle quest: Primal Smite, extra gold and XP from large camps, and bonus move speed in the jungle and river.",
      mid: "Mid quest: +8% AD and AP, and your Tier 2 boots upgrade to Tier 3 for free.",
      bot: "Bot quest: +300 gold, +2 gold per minion, +40 gold per takedown, and your boots move to the quest slot (a free item slot).",
      support: "Support quest: free upgrades of your support item, 40g Control Wards, and up to 2 Control Wards stored in the quest slot."
    },
    offLane: "Playing outside your assigned lane early gives 25% less minion gold and XP until level 3 (33% until level 5 for supports).",
    changes2026: [
      "Atakhan, Blood Roses and Feats of Strength were removed.",
      "Baron Nashor spawns at 20:00 again.",
      "Jungle camps spawn 35 seconds earlier (0:55).",
      "Turret plates are permanent now.",
      "Role quests are automatic for your assigned position.",
      "Faelights: placing a ward on one gives it extra vision range.",
      "Minion waves come faster later in the game.",
      "First Blood and first turret gold are back.",
      "Critical strikes deal 200% damage again."
    ]
  },

  tierList: { mid: [], bot: [] },
  tierListNote: "",
  sources: []
};
