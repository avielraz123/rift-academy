/* Map quiz questions. Coordinates are fractions of Riot's minimap image (x from the left, y from the top);
   the blue team's base is bottom-left. A click counts if it lands inside any zone (r = radius, same units).
   marks: points drawn on the map before answering. See docs/content-format.md. */
window.RA = window.RA || {};
(function () {
  // Landmarks, checked against the Data Dragon minimap (map11.png).
  var L = {
    dragon: [0.674, 0.699], baron: [0.322, 0.289],
    scuttleTop: [0.296, 0.354], scuttleBot: [0.706, 0.652],
    blueBlue: [0.257, 0.455], blueGromp: [0.154, 0.432], blueWolves: [0.254, 0.563], blueRaptors: [0.459, 0.630], blueRed: [0.522, 0.730], blueKrugs: [0.570, 0.818],
    redBlue: [0.739, 0.532], redGromp: [0.854, 0.567], redWolves: [0.740, 0.436], redRaptors: [0.537, 0.363], redRed: [0.478, 0.267], redKrugs: [0.425, 0.183],
    riverTopMid: [0.42, 0.42], riverBotMid: [0.58, 0.58], riverTopLane: [0.2, 0.2], riverBotLane: [0.8, 0.8]
  };
  function z(p, r) { return { x: p[0], y: p[1], r: r }; }
  function pt(x, y, r) { return { x: x, y: y, r: r }; }
  // A lane is a chain of circles along its path.
  var botLane = [pt(0.3, 0.91, 0.06), pt(0.45, 0.91, 0.06), pt(0.6, 0.91, 0.06), pt(0.75, 0.91, 0.06), pt(0.9, 0.91, 0.07), pt(0.91, 0.75, 0.06), pt(0.91, 0.6, 0.06), pt(0.91, 0.45, 0.06), pt(0.91, 0.3, 0.06)];

  RA.mapQuiz = [
    /* ---------- beginner: where things are ---------- */
    { level: "beginner", topic: "Map basics", q: "Click the Dragon pit.", zones: [z(L.dragon, 0.075)],
      explain: "The Dragon pit is in the bottom half of the river, between mid and bot lane. The first dragon spawns at 5:00, and a new one 5 minutes after each kill. Every dragon your team takes gives a permanent bonus, and four give the Dragon Soul." },
    { level: "beginner", topic: "Map basics", q: "Click the pit where Baron Nashor spawns.", zones: [z(L.baron, 0.075)],
      explain: "The top-side pit. Void Grubs appear here at 8:00, the Rift Herald at 15:00, and Baron Nashor from 20:00. Baron's buff makes your minions much stronger, which is how teams break into a base." },
    { level: "beginner", topic: "Map basics", side: "blue", q: "You're on the blue team. Click your blue buff (the Blue Sentinel).", zones: [z(L.blueBlue, 0.065)],
      explain: "Your blue buff is in your top-side jungle, between top and mid lane. It gives mana regeneration and ability haste. It first spawns at 0:55 and comes back 5 minutes after it's killed." },
    { level: "beginner", topic: "Map basics", side: "blue", q: "You're on the blue team. Click your red buff (the Red Brambleback).", zones: [z(L.blueRed, 0.065)],
      explain: "Your red buff is in your bottom-side jungle, between mid and bot lane. It makes your attacks slow and burn enemies and helps you heal out of combat. Like blue buff, it spawns at 0:55 and comes back 5 minutes after it's killed." },
    { level: "beginner", topic: "Map basics", side: "red", q: "You're on the red team. Click your blue buff.", zones: [z(L.redBlue, 0.065)],
      explain: "The map is mirrored. For the red team, blue buff is in the bottom-side jungle (between mid and bot) and red buff is on the top side. A common mix-up is thinking both teams have blue buff in the same spot." },
    { level: "beginner", topic: "Map basics", q: "Click anywhere in the bot lane.", zones: botLane,
      explain: "Bot lane runs along the bottom edge of the map and up the right side. The marksman and support play here together. Top lane is its mirror, along the left and top edges, and mid lane is the diagonal through the center." },
    { level: "beginner", topic: "Map basics", q: "Click a spot where a Rift Scuttler (the river crab) spawns.", zones: [z(L.scuttleTop, 0.07), z(L.scuttleBot, 0.07)],
      explain: "Two crabs spawn at 2:55, one in each half of the river. Killing one gives gold and creates a shrine that gives vision and speed in that part of the river, so junglers often fight over them." },
    { level: "beginner", topic: "Map basics", side: "blue", q: "You're on the blue team. Click your Gromp, the big toad camp.", zones: [z(L.blueGromp, 0.06)],
      explain: "Gromp sits at the outer edge of your top-side jungle, right next to your blue buff. It spawns at 1:07, a little later than the other camps." },
    { level: "beginner", topic: "Map basics", side: "red", q: "You're on the red team. Click your Raptors, the camp of six birds.", zones: [z(L.redRaptors, 0.06)],
      explain: "Raptors are the camp closest to mid lane. For the red team they're just above the center of the map. Mid laners and junglers use this area for quick gold and to check the river." },

    /* ---------- intermediate: vision and tracking ---------- */
    { level: "intermediate", topic: "Vision", side: "blue", q: "You're the blue team's mid laner. Where should your first ward go to protect you from ganks coming from the top side?",
      zones: [z(L.riverTopMid, 0.08), pt(0.49, 0.39, 0.05)],
      explain: "Ward the river next to mid lane, on the side the enemy jungler will come from. Mid can be ganked from both sides, so ward one river entrance and stand closer to the warded side, or ward both when you can." },
    { level: "intermediate", topic: "Vision", side: "blue", q: "Blue team, bot lane, 2:45. Where is the best ward to see the enemy jungler coming for a gank?",
      zones: [z(L.riverBotLane, 0.075), pt(0.73, 0.71, 0.06)],
      explain: "The enemy jungler usually reaches bot lane through the river past the Dragon pit. A ward in the river near your lane or near the pit shows them coming. Place it before the enemy jungler finishes their first clear, around 2:45 to 3:15." },
    { level: "intermediate", topic: "Vision", side: "red", q: "You're the red team's top laner. Where do you ward to see the enemy jungler coming?",
      zones: [z(L.riverTopLane, 0.08), pt(0.26, 0.26, 0.05)],
      explain: "The river entrance next to top lane is where most top lane ganks come from. Your own jungle is behind you, so the river is the dangerous side. A ward there lets you push without fear." },
    { level: "intermediate", topic: "Vision", side: "blue", q: "Dragon spawns in one minute and your team wants it. Where should you place wards?",
      zones: [pt(0.68, 0.7, 0.1)],
      explain: "Ward the pit and the paths around it about a minute before it spawns, so you see the enemy team arriving. Use a Control Ward to clear their wards. Fighting for an objective you have vision of is much safer than walking in blind." },
    { level: "intermediate", topic: "Jungle tracking", side: "blue", q: "Your top laner pings that the enemy jungler is ganking top. Which objective is now safest for your team to take?",
      marks: [{ x: 0.15, y: 0.17, label: "Enemy jungler", color: "red" }],
      zones: [z(L.dragon, 0.075)],
      explain: "The enemy jungler is on the opposite side of the map, and Dragon is a long walk away for them. Your bot side can start it with less risk. Playing on the opposite side of the enemy jungler is one of the simplest ways to get free objectives." },
    { level: "intermediate", topic: "Jungle tracking", side: "blue", q: "The enemy jungler (red team) started at their red buff at 0:55. A full clear of six camps usually ends around 3:15. Where are they most likely at 3:15?",
      marks: [{ x: L.redRed[0], y: L.redRed[1], label: "Seen at 0:55", color: "red" }],
      zones: [pt(0.8, 0.55, 0.1), z(L.scuttleBot, 0.07), pt(0.91, 0.72, 0.07)],
      explain: "A jungler who starts at red buff usually clears toward the other side and ends near their blue buff and Gromp. From there the closest plays are the bottom crab or a gank in bot lane. So at 3:15, bot lane should be careful and top lane can push more safely." },
    { level: "intermediate", topic: "Jungle tracking", side: "red", q: "The enemy jungler (blue team) was seen at their blue buff at 1:00 and cleared their whole jungle. It's 3:10. Click where they're most likely to be.",
      marks: [{ x: L.blueBlue[0], y: L.blueBlue[1], label: "Seen at 1:00", color: "red" }],
      zones: [pt(0.55, 0.77, 0.1), z(L.scuttleBot, 0.07), z(L.riverBotLane, 0.07)],
      explain: "Starting at blue buff (top side) and clearing everything ends at the bottom side, near their red buff and Krugs. Next they'll likely take the bottom crab or gank bot lane through the river. Your bot lane should play safe and your top side is free to push." },

    /* ---------- advanced: macro and deep vision ---------- */
    { level: "advanced", topic: "Vision", side: "red", q: "You're the red team, ahead, and want to start Baron at 25:00. Where do wards help most?",
      zones: [pt(0.25, 0.44, 0.1), pt(0.27, 0.35, 0.07)],
      explain: "Ward the enemy jungle around their blue buff and the paths they'd use to walk to Baron. Seeing them arrive early lets you finish Baron or back off in time. Your side of the pit matters less, because the enemy comes from theirs." },
    { level: "advanced", topic: "Vision", side: "blue", q: "You're the blue team and behind. The enemy is setting up around Dragon. Where can you ward without walking into them?",
      zones: [pt(0.6, 0.72, 0.07), pt(0.56, 0.65, 0.06)],
      explain: "When you're behind, ward from the edge of your own jungle next to the pit. Walking into the river without vision is how you get caught and lose both the dragon and a player. Your wards show where they are, so you can decide to contest or take something elsewhere." },
    { level: "advanced", topic: "Macro", side: "red", q: "You're the red team's mid laner. You just pushed the wave into the enemy tower and want to help your bot lane. Click the way you'd walk.",
      zones: [z(L.riverBotMid, 0.07), pt(0.72, 0.66, 0.07), pt(0.78, 0.5, 0.07)],
      explain: "Walk down the bottom river or through your own jungle past your blue buff. Push the wave first so you don't lose minions, and ping your bot lane before you arrive so they're ready to fight." },
    { level: "advanced", topic: "Macro", side: "blue", q: "The enemy team is taking Void Grubs at 8:30. Your team can't win a fight there in time. Click the objective you should take instead.",
      marks: [{ x: L.baron[0], y: L.baron[1], label: "Enemy at Grubs", color: "red" }],
      zones: [z(L.dragon, 0.075)],
      explain: "Trade objectives. If the enemy commits to the top side, take Dragon on the other side. You get something of similar value without a fight you'd lose." },
    { level: "advanced", topic: "Vision", side: "blue", q: "You're the blue team's support. Your bot lane is pushed up to the enemy tower. Where's the best deep ward to spot the enemy jungler coming?",
      zones: [pt(0.82, 0.6, 0.09), z(L.redBlue, 0.06)],
      explain: "When your wave is pushed, danger comes from the enemy jungle next to your lane, behind you. Ward the entrance near their blue buff and Gromp, the path they use to reach bot lane from the side." }
  ];
})();
