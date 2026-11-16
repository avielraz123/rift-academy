/* CS trainer: click an enemy minion to attack it. Only the killing blow gives gold (a "last hit"). */
(function () {
  "use strict";
  var RA = window.RA;

  var DIFF = {
    easy:   { label: "Easy",   hitMin: 25, hitMax: 45, gapMin: 0.8, gapMax: 1.2, cd: 1.2, hint: true },
    normal: { label: "Normal", hitMin: 35, hitMax: 70, gapMin: 0.55, gapMax: 0.95, cd: 1.4, hint: false },
    hard:   { label: "Hard",   hitMin: 40, hitMax: 90, gapMin: 0.4, gapMax: 0.8, cd: 1.5, hint: false }
  };
  var CHAMP = {
    melee:  { label: "Melee champion", windup: 0.25, travel: 0 },
    ranged: { label: "Ranged champion", windup: 0.3, travel: 0.28 }
  };
  var AD = 60;
  var WAVES = 5;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function best(key) { try { return Number(localStorage.getItem("ra-cs-" + key)) || 0; } catch (e) { return 0; } }
  function setBest(key, v) { try { localStorage.setItem("ra-cs-" + key, String(v)); } catch (e) {} }

  RA.tools["cs-trainer"] = {
    title: "Last-Hit Trainer",
    emoji: "🎯",
    summary: "Practice landing the killing blow on minions. Only last hits give gold.",
    intro: "Allied minions (blue) slowly damage the enemy wave (red). Click or tap an enemy minion to attack it: you only get the gold if your hit is the one that kills it. Your attack has a short wind-up, and a ranged attack also needs time to fly, so attack a little before the health bar looks low enough.",
    render: function (root) {
      var diffKey = "normal", champKey = "ranged";
      var timer = null;
      var gold = (RA.patch && RA.patch.minionGold) || { melee: 21, caster: 14, cannon: 60 };

      function setup() {
        stop();
        root.innerHTML =
          '<div class="tool-panel">' +
            '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:16px">' +
              '<label class="field">Difficulty<select id="csDiff">' + Object.keys(DIFF).map(function (k) { return '<option value="' + k + '"' + (k === diffKey ? " selected" : "") + ">" + DIFF[k].label + "</option>"; }).join("") + "</select></label>" +
              '<label class="field">Your champion<select id="csChamp">' + Object.keys(CHAMP).map(function (k) { return '<option value="' + k + '"' + (k === champKey ? " selected" : "") + ">" + CHAMP[k].label + "</option>"; }).join("") + "</select></label>" +
            "</div>" +
            '<div class="stat-row">' +
              '<div class="stat"><b id="csCs">0</b><span>CS</span></div>' +
              '<div class="stat"><b id="csMissed">0</b><span>Missed</span></div>' +
              '<div class="stat"><b id="csGold">0</b><span>Gold</span></div>' +
              '<div class="stat"><b id="csWave">0/' + WAVES + '</b><span>Wave</span></div>' +
              '<div class="stat"><b id="csBest">' + best(diffKey + champKey) + "</b><span>Best CS</span></div>" +
            "</div>" +
            '<div class="lane" id="lane"><div class="lane-msg"><div><h3>Ready?</h3><p>' + WAVES + " waves. Your hit does " + AD + " damage." + (DIFF[diffKey].hint ? " On Easy, a minion's bar turns gold when your hit would kill it." : "") + '</p><button class="btn" id="csStart">Start</button></div></div></div>' +
            '<div style="margin-top:10px;height:8px;background:var(--panel-2);border-radius:99px;overflow:hidden"><i id="csCd" style="display:block;height:100%;width:100%;background:var(--teal)"></i></div>' +
            '<p style="color:var(--faint);font-size:.85rem;margin-top:6px">The bar above shows when your next attack is ready.</p>' +
          "</div>" +
          '<div class="card" style="margin-top:16px"><h3>Tips</h3><ul style="color:var(--muted);margin:0;padding-left:1.2em">' +
            "<li>Watch how fast each health bar drops, and start your attack just before it reaches the kill point.</li>" +
            "<li>Ranged attacks take time to fly. Start them earlier than melee attacks.</li>" +
            "<li>Don't hit a minion early unless it's about to drop too fast for you to last-hit later. That's how pros set up hard last hits.</li>" +
            "<li>Cannon minions (the big ones) are worth the most gold. Never miss them.</li>" +
            "<li>In a real game a wave has 6 minions (3 melee, 3 caster), plus a cannon minion every few waves. Around 70-80 CS at 10 minutes is a solid goal; pros get close to 100.</li>" +
          "</ul></div>";
        root.querySelector("#csDiff").addEventListener("change", function (e) { diffKey = e.target.value; setup(); });
        root.querySelector("#csChamp").addEventListener("change", function (e) { champKey = e.target.value; setup(); });
        root.querySelector("#csStart").addEventListener("click", start);
      }

      var state;
      function start() {
        var d = DIFF[diffKey], ch = CHAMP[champKey];
        var lane = root.querySelector("#lane");
        lane.innerHTML = "";
        stop();
        state = { t: 0, wave: 0, cs: 0, missed: 0, gold: 0, minions: [], allies: [], ready: 0, nextWave: 0.5, d: d, ch: ch, lane: lane, pending: [] };
        ["#csCs", "#csMissed", "#csGold"].forEach(function (id) { root.querySelector(id).textContent = "0"; });
        root.querySelector("#csWave").textContent = "0/" + WAVES;
        // decorative allied minions
        for (var i = 0; i < 6; i++) {
          var a = document.createElement("div");
          a.className = "minion ally" + (i >= 3 ? " caster" : "");
          a.style.left = (i < 3 ? 34 : 22) + "%";
          a.style.top = (22 + (i % 3) * 28) + "%";
          a.innerHTML = '<div class="hp"><i style="width:100%"></i></div><div class="body"></div>';
          lane.appendChild(a);
          state.allies.push(a);
        }
        var last = performance.now();
        timer = setInterval(function () {
          var now = performance.now();
          var dt = Math.min(0.1, (now - last) / 1000);
          last = now;
          tick(dt);
        }, 40);
      }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }

      function spawnWave() {
        state.wave++;
        var types = ["melee", "melee", "melee", "caster", "caster", "caster"];
        if (state.wave === 3 || state.wave === 5) types.splice(3, 0, "cannon");
        var hp = { melee: 480, caster: 300, cannon: 900 };
        types.forEach(function (type, i) {
          var front = type !== "caster";
          var row = type === "cannon" ? 1 : i % 3;
          var m = {
            type: type, hp: hp[type], max: hp[type], dead: false,
            // front-line minions get attacked first, casters a few seconds later
            startAt: state.t + (type === "melee" ? rand(0.3, 1.2) : type === "cannon" ? rand(4, 5.5) : rand(3, 4.5)),
            nextHit: 0, el: document.createElement("button")
          };
          m.nextHit = m.startAt;
          m.el.className = "minion " + type;
          m.el.setAttribute("aria-label", "Enemy " + type + " minion");
          m.el.style.left = (front ? (type === "cannon" ? 66 : 60) : 76) + "%";
          m.el.style.top = (22 + row * 28) + "%";
          m.el.innerHTML = '<div class="hp"><i style="width:100%"></i></div><div class="body"></div>';
          m.el.addEventListener("pointerdown", function (e) { e.preventDefault(); attack(m); });
          state.lane.appendChild(m.el);
          state.minions.push(m);
        });
        root.querySelector("#csWave").textContent = state.wave + "/" + WAVES;
      }

      function floatText(m, text, cls) {
        var f = document.createElement("div");
        f.className = "float-text " + cls;
        f.textContent = text;
        f.style.left = m.el.style.left;
        f.style.top = "calc(" + m.el.style.top + " - 34px)";
        state.lane.appendChild(f);
        setTimeout(function () { f.remove(); }, 900);
      }

      function kill(m, byPlayer) {
        m.dead = true;
        m.hp = 0;
        m.el.classList.add("dead");
        if (byPlayer) {
          state.cs++; state.gold += gold[m.type];
          floatText(m, "+" + gold[m.type] + "g", "good");
        } else {
          state.missed++;
          floatText(m, "missed", "bad");
        }
        root.querySelector("#csCs").textContent = state.cs;
        root.querySelector("#csMissed").textContent = state.missed;
        root.querySelector("#csGold").textContent = state.gold;
      }

      function attack(m) {
        if (!state || m.dead || state.t < state.ready) return;
        state.ready = state.t + state.d.cd;
        state.pending.push({ m: m, at: state.t + state.ch.windup + state.ch.travel });
      }

      function tick(dt) {
        var s = state;
        s.t += dt;
        // spawn waves
        var alive = s.minions.some(function (m) { return !m.dead; });
        if (!alive) {
          if (s.wave >= WAVES) { if (!s.pending.length) return finish(); }
          else {
            if (s.nextWave == null) s.nextWave = s.t + 1.5;
            if (s.t >= s.nextWave) {
              s.minions.forEach(function (m) { m.el.remove(); });
              s.minions = [];
              s.nextWave = null;
              spawnWave();
            }
          }
        }
        // player hits landing
        s.pending = s.pending.filter(function (p) {
          if (s.t < p.at) return true;
          if (!p.m.dead) {
            p.m.hp -= AD;
            if (p.m.hp <= 0) kill(p.m, true);
          }
          return false;
        });
        // allied minion damage
        s.minions.forEach(function (m) {
          if (m.dead || s.t < m.nextHit) return;
          m.hp -= rand(s.d.hitMin, s.d.hitMax) * (m.type === "cannon" ? 1.3 : 1);
          m.nextHit = s.t + rand(s.d.gapMin, s.d.gapMax);
          if (m.hp <= 0) kill(m, false);
        });
        // draw
        s.minions.forEach(function (m) {
          if (m.dead) return;
          m.el.querySelector(".hp i").style.width = Math.max(0, m.hp / m.max * 100) + "%";
          m.el.classList.toggle("killable", s.d.hint && m.hp <= AD);
        });
        s.allies.forEach(function (a, i) {
          var w = 60 + 40 * Math.abs(Math.sin(s.t / 3 + i));
          a.querySelector(".hp i").style.width = w + "%";
        });
        var cdLeft = Math.max(0, s.ready - s.t);
        root.querySelector("#csCd").style.width = (100 - cdLeft / s.d.cd * 100) + "%";
      }

      function finish() {
        stop();
        var s = state;
        var total = s.cs + s.missed;
        var pct = total ? Math.round(s.cs / total * 100) : 0;
        var key = diffKey + champKey;
        var newBest = s.cs > best(key);
        if (newBest) setBest(key, s.cs);
        root.querySelector("#csBest").textContent = best(key);
        var verdict = pct >= 90 ? "Excellent! That's pro-level farming." : pct >= 75 ? "Great job. Try a harder difficulty." : pct >= 50 ? "Decent. Focus on timing your attacks a little earlier." : "Keep practicing. Watch the health bars closely.";
        var msg = document.createElement("div");
        msg.className = "lane-msg";
        msg.innerHTML = "<div><h3>" + s.cs + " / " + total + " CS (" + pct + "%)</h3><p>" + (newBest ? "New personal best! " : "") + verdict + '</p><button class="btn" id="csAgain">Play again</button></div>';
        s.lane.appendChild(msg);
        msg.querySelector("#csAgain").addEventListener("click", start);
      }

      setup();
      return stop;
    }
  };
})();
