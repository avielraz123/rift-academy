/* Objective & jungle timers: a cheat sheet plus a live tracker you run next to your game. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;

  function fmt(sec) {
    if (sec == null || isNaN(sec)) return "–";
    var neg = sec < 0; sec = Math.abs(Math.round(sec));
    return (neg ? "-" : "") + Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
  }
  function parseTime(s) {
    var m = String(s).trim().match(/^(\d{1,2}):(\d{2})$/);
    return m ? Number(m[1]) * 60 + Number(m[2]) : null;
  }
  var audio;
  function beep() {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      var o = audio.createOscillator(), g = audio.createGain();
      o.frequency.value = 880; o.connect(g); g.connect(audio.destination);
      g.gain.setValueAtTime(0.15, audio.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.4);
      o.start(); o.stop(audio.currentTime + 0.4);
    } catch (e) {}
  }

  RA.tools.timers = {
    title: "Objective Timers",
    emoji: "⏱️",
    summary: "Spawn and respawn times for every camp and objective, plus a live tracker to run during your game.",
    intro: "A cheat sheet of spawn and respawn times for patch " + ((RA.patch && RA.patch.number) || "") + ", and a live tracker. Start the game clock when your game starts (or type in the in-game time), then press \"Taken\" when an objective or camp dies to see when it comes back.",
    render: function (root) {
      var T = (RA.patch && RA.patch.timers) || { camps: [], epic: [] };
      var all = (T.epic || []).concat(T.camps || []);
      var clock = 0, running = false, last = 0, iv = null;
      var taken = {}; // name -> game time when it respawns
      var beeped = {};
      var sound = true;

      function cheat(rows, title) {
        if (!rows || !rows.length) return "";
        return '<div class="card" style="margin-bottom:16px"><h3>' + title + '</h3><div class="table-wrap"><table class="data-table"><tr><th>Name</th><th>First spawn</th><th>Respawn</th><th>Notes</th></tr>' +
          rows.map(function (r) { return "<tr><td><strong>" + esc(r.name) + "</strong></td><td>" + (r.first != null ? fmt(r.first) : "–") + "</td><td>" + (r.respawn ? fmt(r.respawn) : "–") + '</td><td style="color:var(--muted)">' + esc(r.note || "") + "</td></tr>"; }).join("") +
          "</table></div></div>";
      }

      root.innerHTML =
        '<div class="tool-panel" style="margin-bottom:20px">' +
          '<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;margin-bottom:16px">' +
            '<div><div style="color:var(--faint);font-size:.8rem">GAME CLOCK</div><div class="game-clock" id="tClock">0:00</div></div>' +
            '<div class="btn-row"><button class="btn" id="tStart">Start</button><button class="btn ghost" id="tReset">Reset</button></div>' +
            '<form id="tSet" style="display:flex;gap:8px;align-items:end"><label class="field">Set time (mm:ss)<input type="text" id="tSetVal" placeholder="12:30" style="width:90px"></label><button class="btn small ghost">Set</button></form>' +
            '<label style="display:flex;gap:6px;align-items:center;color:var(--muted);font-size:.9rem"><input type="checkbox" id="tSound" checked> Beep 30s before a spawn</label>' +
          "</div>" +
          '<div class="timer-grid" id="tGrid"></div>' +
        "</div>" +
        cheat(T.epic, "Epic monsters") + cheat(T.camps, "Jungle camps") +
        (T.notes ? '<div class="card"><h3>Good to know</h3><ul style="margin:0;padding-left:1.2em;color:var(--muted)">' + T.notes.map(function (n) { return "<li>" + RA.rich(n) + "</li>"; }).join("") + "</ul></div>" : "");

      var grid = root.querySelector("#tGrid");
      grid.innerHTML = all.map(function (r, k) {
        return '<div class="timer" data-k="' + k + '"><h4><span>' + esc(r.name) + '</span></h4><div class="clock">–</div><small class="status"></small>' +
          '<div class="btn-row"><button class="btn small" data-act="take">Taken</button><button class="btn small ghost" data-act="clear">Clear</button></div></div>';
      }).join("");

      function nextSpawn(r) {
        if (taken[r.name] != null) return taken[r.name];
        if (r.first != null && (r.until == null || clock < r.until)) return r.first;
        return null;
      }
      function draw() {
        root.querySelector("#tClock").textContent = fmt(clock);
        Array.prototype.forEach.call(grid.querySelectorAll(".timer"), function (el) {
          var r = all[Number(el.dataset.k)];
          var at = nextSpawn(r);
          var c = el.querySelector(".clock"), st = el.querySelector(".status");
          el.classList.remove("up", "soon");
          if (at === Infinity) {
            c.textContent = "Taken"; st.textContent = "Doesn't respawn";
          } else if (r.until != null && clock >= r.until && taken[r.name] == null) {
            c.textContent = "Gone"; st.textContent = "Despawned at " + fmt(r.until);
          } else if (at == null) {
            c.textContent = "–"; st.textContent = r.note ? r.note : "";
          } else if (clock >= at) {
            el.classList.add("up"); c.textContent = "UP"; st.textContent = "Spawned at " + fmt(at);
          } else {
            var left = at - clock;
            if (left <= 30) el.classList.add("soon");
            c.textContent = fmt(left); st.textContent = "Spawns at " + fmt(at);
            if (left <= 30 && running && sound && !beeped[r.name + at]) { beeped[r.name + at] = true; beep(); }
          }
        });
      }
      grid.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        var r = all[Number(b.closest(".timer").dataset.k)];
        if (b.dataset.act === "take") {
          if (!r.respawn) { taken[r.name] = Infinity; }
          else taken[r.name] = clock + r.respawn;
        } else delete taken[r.name];
        draw();
      });
      root.querySelector("#tStart").addEventListener("click", function () {
        running = !running;
        this.textContent = running ? "Pause" : "Start";
        last = performance.now();
      });
      root.querySelector("#tReset").addEventListener("click", function () {
        running = false; clock = 0; taken = {}; beeped = {};
        root.querySelector("#tStart").textContent = "Start";
        draw();
      });
      root.querySelector("#tSet").addEventListener("submit", function (e) {
        e.preventDefault();
        var v = parseTime(root.querySelector("#tSetVal").value);
        if (v != null) { clock = v; draw(); }
      });
      root.querySelector("#tSound").addEventListener("change", function (e) { sound = e.target.checked; });
      iv = setInterval(function () {
        var now = performance.now();
        if (running) clock += (now - last) / 1000;
        last = now;
        draw();
      }, 250);
      draw();
      return function () { clearInterval(iv); };
    }
  };
})();
