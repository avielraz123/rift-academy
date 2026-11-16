/* Wave simulator: a simplified lane that shows how freezing, slow pushing and crashing move the wave.
   Not a real game engine: minion stats are scaled so the effects are easy to see in about a minute. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;

  var LANE = 100, BLUE_TOWER = 10, RED_TOWER = 90, TOWER_RANGE = 9, TOWER_DPS = 40;
  var WAVE_EVERY = 30, SPEED = 1.8, STEP = 0.05;
  var TYPES = {
    melee: { hp: 100, dps: 10, range: 1.8, r: 1.9 },
    caster: { hp: 60, dps: 13, range: 6, r: 1.6 },
    cannon: { hp: 220, dps: 16, range: 6, r: 2.5 }
  };
  var MODES = {
    lasthit: { label: "Last-hit only", desc: "You only take the killing blow. The wave stays even." },
    push: { label: "Hit everything (fast push)", desc: "You damage every enemy minion. Your wave races to their tower." },
    slow: { label: "Kill their casters (slow push)", desc: "You kill the enemy casters, then last-hit. Your wave grows a little every time." },
    freeze: { label: "Freeze", desc: "You last-hit and thin the wave only if it gets too big, so it stays just outside your tower." },
    away: { label: "Do nothing (you're away)", desc: "You're not in lane. The minions fight on their own." }
  };
  var LESSONS = [
    { id: "even", title: "Even wave", mode: "lasthit", duration: 80, notes: [
      [1, "Both teams send a wave of minions every 30 seconds: 3 melee, 3 casters, and a cannon minion every third wave."],
      [26, "The waves meet in the middle of the lane and fight."],
      [45, "You only last-hit, so you don't change who wins the fight. Both waves stay about the same size."],
      [65, "That's why an even lane keeps meeting near the middle. To move the wave on purpose, you have to change how many minions each side has."]
    ] },
    { id: "crash", title: "Fast push and crash", mode: "push", duration: 95, notes: [
      [1, "Now you hit every enemy minion with attacks and abilities."],
      [30, "The enemy wave dies fast, and your minions keep walking toward their tower."],
      [50, "Your wave reaches their tower and the tower kills it. That's called crashing the wave."],
      [68, "Their next wave meets yours closer to their tower, so the fight there takes a while, and you have time to leave."],
      [82, "Crash the wave right before you recall, roam or help with an objective, so you don't lose minions while you're gone."]
    ] },
    { id: "slow", title: "Slow push", mode: "slow", duration: 135, notes: [
      [1, "You kill the enemy casters first, then only last-hit."],
      [35, "Your side ends each fight with a few minions left over."],
      [65, "Those survivors join the next wave, so your wave gets bigger every 30 seconds. Watch your minion count."],
      [105, "A big stack hits their tower hard. The enemy laner either loses gold and experience under tower, or has to stay and clear it."],
      [122, "Slow push before a recall, a dragon fight or a dive: you get time, and they're stuck in lane."]
    ] },
    { id: "freeze", title: "Freeze", mode: "freeze", duration: 80, setup: "freeze", notes: [
      [1, "The enemy wave is bigger, so the fight happens close to your tower. You stand just in front of their minions so they attack you instead of walking into your tower's range."],
      [20, "You only last-hit. If their wave gets too big, you kill an extra minion or two so it doesn't crash into your tower."],
      [40, "The wave stays near you. The enemy laner has to walk far from their tower to farm, which makes them easy to gank."],
      [60, "Freeze when you're ahead or waiting for your jungler. If you only last-hit and let the minions walk in, your tower kills them and the freeze breaks in seconds."]
    ] },
    { id: "free", title: "Free play", mode: "lasthit", duration: 0, notes: [
      [0, "Pick what you do in lane and watch the wave react. Try a slow push for two waves, then switch to hitting everything to crash the stack."]
    ] }
  ];


  function Sim(setup) {
    var t = 0, waves = 0, minions = [], cs = 0, nextSpawn = 0;
    function add(side, type, x) {
      var T = TYPES[type];
      minions.push({ side: side, type: type, x: x, hp: T.hp, max: T.hp, id: Math.random() });
    }
    function spawn() {
      var cannon = waves % 3 === 2;
      ["blue", "red"].forEach(function (side) {
        var base = side === "blue" ? 2 : LANE - 2, dir = side === "blue" ? -1 : 1;
        for (var i = 0; i < 3; i++) add(side, "melee", base + dir * i * 0.6);
        if (cannon) add(side, "cannon", base + dir * 3);
        for (var j = 0; j < 3; j++) add(side, "caster", base + dir * (4 + j * 0.6));
      });
      waves++;
    }
    if (setup === "freeze") {
      // Your wave arrives just outside your tower, where a bigger enemy stack is waiting (they slow pushed into you).
      for (var i = 0; i < 3; i++) { add("blue", "melee", 21 + i * 0.6); add("blue", "caster", 16 + i * 0.6); }
      for (var k = 0; k < 6; k++) add("red", "melee", 23.5 + k * 0.6);
      add("red", "cannon", 28);
      for (var c = 0; c < 6; c++) add("red", "caster", 30 + c * 0.6);
      nextSpawn = 10;
    }
    function inRange(a, b, range) { return Math.abs(a.x - b.x) <= range; }
    function frontOf(side) {
      var xs = minions.filter(function (m) { return m.side === side; }).map(function (m) { return m.x; });
      if (!xs.length) return side === "blue" ? BLUE_TOWER : RED_TOWER;
      return side === "blue" ? Math.max.apply(null, xs) : Math.min.apply(null, xs);
    }
    function step(mode) {
      t += STEP;
      if (t >= nextSpawn) { spawn(); nextSpawn += WAVE_EVERY; }
      var dmg = [];
      minions.forEach(function (m) {
        var T = TYPES[m.type], dir = m.side === "blue" ? 1 : -1;
        var foes = minions.filter(function (o) { return o.side !== m.side && inRange(m, o, T.range); });
        if (foes.length) {
          foes.sort(function (a, b) { return Math.abs(a.x - m.x) - Math.abs(b.x - m.x); });
          dmg.push([foes[0], T.dps * STEP]);
          return;
        }
        var tower = m.side === "blue" ? RED_TOWER : BLUE_TOWER;
        if (Math.abs(tower - m.x) <= T.range + 1) return; // attacking the tower (towers can't die here)
        // Freezing: you stand in front of the enemy minions so they attack you instead of walking into your tower's range.
        if (mode === "freeze" && m.side === "red" && m.x - SPEED * STEP < BLUE_TOWER + TOWER_RANGE + 2.5) return;
        m.x += dir * SPEED * STEP;
      });
      // towers shoot the closest enemy minion in range
      [["blue", BLUE_TOWER], ["red", RED_TOWER]].forEach(function (tw) {
        var foes = minions.filter(function (o) { return o.side !== tw[0] && Math.abs(o.x - tw[1]) <= TOWER_RANGE; });
        if (foes.length) {
          foes.sort(function (a, b) { return Math.abs(a.x - tw[1]) - Math.abs(b.x - tw[1]); });
          dmg.push([foes[0], TOWER_DPS * STEP]);
        }
      });
      // you (blue side), standing just behind your front minion
      var me = Math.max(BLUE_TOWER, frontOf("blue") - 4);
      var near = minions.filter(function (o) { return o.side === "red" && Math.abs(o.x - me) <= (mode === "freeze" ? 14 : 9); });
      if (mode === "push") near.forEach(function (o) { dmg.push([o, 20 * STEP]); });
      if (mode === "slow") {
        var casters = near.filter(function (o) { return o.type === "caster"; }).sort(function (a, b) { return a.hp - b.hp; });
        if (casters[0]) dmg.push([casters[0], 14 * STEP]);
      }
      if (mode === "freeze") {
        var reds = minions.filter(function (o) { return o.side === "red"; }).length, blues = minions.filter(function (o) { return o.side === "blue"; }).length;
        if (near.length && reds > blues + 4) { near.sort(function (a, b) { return a.hp - b.hp; }); dmg.push([near[0], 30 * STEP]); }
      }
      dmg.forEach(function (d) { d[0].hp -= d[1]; });
      // last hits: you take kills on low enemy minions near you
      if (mode !== "away") near.forEach(function (o) { if (o.hp > 0 && o.hp <= 14) { o.hp = 0; o.lastHit = true; } });
      minions = minions.filter(function (m) {
        if (m.hp > 0) return true;
        if (m.side === "red" && m.lastHit) cs++;
        return false;
      });
      return me;
    }
    return {
      step: step,
      state: function () { return { t: t, waves: waves, minions: minions, cs: cs, nextSpawn: nextSpawn }; },
      front: function () {
        var b = frontOf("blue"), r = frontOf("red");
        var has = function (s) { return minions.some(function (m) { return m.side === s; }); };
        if (has("blue") && has("red")) return (b + r) / 2;
        return has("blue") ? b : has("red") ? r : 50;
      }
    };
  }

  function where(x) {
    if (x < 30) return ["Near your tower", "blue"];
    if (x > 70) return ["Near the enemy tower", "red"];
    if (x < 45) return ["Your side of the lane", "blue"];
    if (x > 55) return ["Their side of the lane", "red"];
    return ["The middle", ""];
  }

  RA.waveSim = Sim; // exposed for tests

  RA.tools["wave-sim"] = {
    title: "Wave Simulator",
    emoji: "🌊",
    summary: "Watch what freezing, slow pushing and crashing do to the minion wave, in a simple animated lane.",
    intro: "A simplified lane between your tower (left, blue) and the enemy tower (right, red). Pick a lesson and watch how your choices move the wave. The minions are simplified so each idea shows up in about a minute. Read the wave management guide for the full picture.",
    render: function (root) {
      var lesson = LESSONS[0], mode = lesson.mode, sim = null, me = BLUE_TOWER, speed = 2, playing = true, raf = null, last = 0, acc = 0, done = false;

      function start(l) {
        lesson = l; mode = l.mode; sim = Sim(l.setup); me = BLUE_TOWER; playing = true; done = false; acc = 0;
        drawShell();
      }
      function drawShell() {
        root.innerHTML = '<div class="tool-panel">' +
          '<div class="chips ws-lessons">' + LESSONS.map(function (l, i) { return '<button class="chip' + (l === lesson ? " active" : "") + '" data-lesson="' + i + '">' + (l.duration ? i + 1 + ". " : "") + esc(l.title) + "</button>"; }).join("") + "</div>" +
          '<svg class="ws-lane" viewBox="0 0 100 28" role="img" aria-label="Lane with minions"><g id="wsStatic"></g><g id="wsDyn"></g></svg>' +
          '<div class="ws-bar"><div class="ws-stats" id="wsStats"></div><div class="btn-row">' +
            '<button class="btn small" id="wsPlay"></button><button class="btn ghost small" id="wsSpeed"></button><button class="btn ghost small" id="wsRestart">Restart</button></div></div>' +
          (lesson.id === "free" ? '<div class="ws-modes">' + Object.keys(MODES).map(function (k) { return '<button class="chip' + (k === mode ? " active" : "") + '" data-mode="' + k + '">' + esc(MODES[k].label) + "</button>"; }).join("") + "</div>" : "") +
          '<div class="ws-mode-desc"><b>You: ' + esc(MODES[mode].label) + ".</b> " + esc(MODES[mode].desc) + "</div>" +
          '<ol class="ws-notes" id="wsNotes">' + lesson.notes.map(function (n) { return '<li data-at="' + n[0] + '">' + esc(n[1]) + "</li>"; }).join("") + "</ol>" +
          '<div id="wsEnd"></div></div>' +
          '<p class="patch-note">Simplified on purpose: real minions, towers and champions have more rules, but waves push, stack and bounce the same way. Learn the details in <a href="#/guide/wave-management">Wave Management: Push, Freeze and Crash</a>.</p>';
        var st = '<rect x="0" y="7" width="100" height="12" rx="2" class="ws-road"/>' +
          '<line x1="50" y1="5" x2="50" y2="21" class="ws-river"/>' +
          '<circle cx="' + BLUE_TOWER + '" cy="13" r="' + TOWER_RANGE + '" class="ws-range blue"/><circle cx="' + RED_TOWER + '" cy="13" r="' + TOWER_RANGE + '" class="ws-range red"/>' +
          '<rect x="' + (BLUE_TOWER - 2) + '" y="9" width="4" height="8" rx="1" class="ws-tower blue"/><rect x="' + (RED_TOWER - 2) + '" y="9" width="4" height="8" rx="1" class="ws-tower red"/>' +
          '<text x="' + BLUE_TOWER + '" y="24.5" class="ws-label">Your tower</text><text x="' + RED_TOWER + '" y="24.5" class="ws-label">Enemy tower</text><text x="50" y="3.8" class="ws-label">middle</text>';
        root.querySelector("#wsStatic").innerHTML = st;
        Array.prototype.forEach.call(root.querySelectorAll("[data-lesson]"), function (b) { b.addEventListener("click", function () { start(LESSONS[Number(b.dataset.lesson)]); }); });
        Array.prototype.forEach.call(root.querySelectorAll("[data-mode]"), function (b) { b.addEventListener("click", function () { mode = b.dataset.mode; drawShell(); }); });
        root.querySelector("#wsPlay").addEventListener("click", function () { if (done) return start(lesson); playing = !playing; paint(); });
        root.querySelector("#wsSpeed").addEventListener("click", function () { speed = speed === 1 ? 2 : speed === 2 ? 4 : 1; paint(); });
        root.querySelector("#wsRestart").addEventListener("click", function () { start(lesson); });
        paint();
      }
      function paint() {
        var s = sim.state();
        var dyn = s.minions.map(function (m) {
          var T = TYPES[m.type], lane = m.type === "melee" ? 0 : m.type === "cannon" ? 1 : 2;
          var y = 10 + lane * 3 + ((m.id * 100) % 1) * 1.2;
          return '<circle cx="' + m.x.toFixed(2) + '" cy="' + y.toFixed(2) + '" r="' + T.r + '" class="ws-m ' + m.side + '" style="opacity:' + (0.45 + 0.55 * m.hp / m.max).toFixed(2) + '"/>';
        }).join("") + '<path d="M' + me.toFixed(2) + ' 5.2 l1.6 1.6 -1.6 1.6 -1.6 -1.6z" class="ws-you"/><text x="' + me.toFixed(2) + '" y="4.6" class="ws-label you">You</text>';
        root.querySelector("#wsDyn").innerHTML = dyn;
        var blue = s.minions.filter(function (m) { return m.side === "blue"; }).length, red = s.minions.length - blue;
        var w = where(sim.front());
        var secs = Math.max(0, Math.ceil(s.nextSpawn - s.t));
        root.querySelector("#wsStats").innerHTML = '<span class="ws-chip blue">Your minions <b>' + blue + '</b></span><span class="ws-chip red">Enemy minions <b>' + red + "</b></span>" +
          '<span class="ws-chip">Wave: <b class="' + w[1] + '">' + w[0] + '</b></span><span class="ws-chip">Next wave in <b>' + secs + 's</b></span><span class="ws-chip">Your CS <b>' + s.cs + "</b></span>";
        root.querySelector("#wsPlay").textContent = done ? "Watch again" : playing ? "Pause" : "Play";
        root.querySelector("#wsSpeed").textContent = "Speed " + speed + "x";
        Array.prototype.forEach.call(root.querySelectorAll("#wsNotes li"), function (li) { li.classList.toggle("on", s.t >= Number(li.dataset.at)); });
      }
      function frame() {
        var ts = Date.now();
        var dt = last ? Math.min(0.25, (ts - last) / 1000) : 0;
        last = ts;
        if (!playing || done || !sim) return;
        acc += dt * speed;
        while (acc >= STEP) { me = sim.step(mode); acc -= STEP; }
        var s = sim.state();
        if (lesson.duration && s.t >= lesson.duration) {
          done = true;
          var i = LESSONS.indexOf(lesson), nx = LESSONS[i + 1];
          root.querySelector("#wsEnd").innerHTML = '<div class="quiz-explain good"><strong>Lesson done.</strong> ' + (nx ? 'Next: <button class="linklike" id="wsNext">' + esc(nx.title) + " →</button>" : "") + "</div>";
          var nb = root.querySelector("#wsNext");
          if (nb) nb.addEventListener("click", function () { start(nx); });
        }
        paint();
      }
      start(lesson);
      raf = window.setInterval(frame, 50);
      return function () { window.clearInterval(raf); };
    }
  };
})();
