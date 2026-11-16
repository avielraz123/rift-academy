/* Role picker: a short quiz that recommends a role. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;

  var QUESTIONS = [
    { q: "In a teamfight, what do you most want to be doing?", a: [
      ["Charging in and soaking up damage for my team", { top: 2, jungle: 1, support: 1 }],
      ["Dealing huge, steady damage from a safe distance", { bot: 3, mid: 1 }],
      ["Landing a big combo that deletes one enemy", { mid: 3, jungle: 1 }],
      ["Protecting my teammates and setting up plays", { support: 3 }]
    ] },
    { q: "How do you feel about playing alone?", a: [
      ["I love a 1v1: just me against my opponent", { top: 3, mid: 1 }],
      ["I'd rather work closely with a partner", { bot: 2, support: 2 }],
      ["I want to roam around the whole map", { jungle: 3, support: 1, mid: 1 }]
    ] },
    { q: "Killing minions for gold (\"farming\") sounds…", a: [
      ["Fun. I like a steady grind and getting rich", { bot: 2, mid: 1, top: 1 }],
      ["Fine, as long as there's action too", { mid: 1, top: 1, jungle: 1 }],
      ["Boring. I'd rather do anything else", { support: 3, jungle: 1 }]
    ] },
    { q: "How much do you like making calls for the team?", a: [
      ["A lot. I want to decide where we fight and when", { jungle: 3, support: 1 }],
      ["Sometimes, but I'd rather focus on my own play", { mid: 1, top: 1, bot: 1 }],
      ["Not much. Give me a clear job and I'll do it", { bot: 1, top: 1 }]
    ] },
    { q: "Which kind of champion appeals to you most?", a: [
      ["A tough warrior or a tank", { top: 2, jungle: 1, support: 1 }],
      ["A mage who throws spells", { mid: 3, support: 1 }],
      ["An archer or gunslinger", { bot: 3 }],
      ["A sneaky assassin or hunter", { jungle: 2, mid: 1 }],
      ["A guardian or healer", { support: 3 }]
    ] },
    { q: "What are you best at in games?", a: [
      ["Aiming skill shots and fast mechanics", { mid: 2, bot: 1 }],
      ["Positioning and staying alive", { bot: 2, support: 1 }],
      ["Reading the map and predicting enemies", { jungle: 2, support: 1 }],
      ["Winning long, drawn-out fights", { top: 2 }]
    ] },
    { q: "When do you want to be at your strongest?", a: [
      ["Early. I want to snowball and take control fast", { jungle: 1, top: 1, mid: 1 }],
      ["Late. I'm patient and want to be unstoppable later", { bot: 2, mid: 1 }],
      ["I don't mind. I want to be useful the whole game", { support: 2, top: 1 }]
    ] }
  ];
  var ORDER = ["top", "jungle", "mid", "bot", "support"];

  RA.tools["role-picker"] = {
    title: "Which Role Suits Me?",
    emoji: "🧭",
    summary: "Seven quick questions to find the role that fits how you like to play.",
    intro: "Answer seven quick questions about how you like to play, and we'll suggest a role with beginner-friendly champions to try. There are no wrong answers.",
    render: function (root) {
      var i = 0;
      var score = {};
      ORDER.forEach(function (r) { score[r] = 0; });

      function draw() {
        if (i >= QUESTIONS.length) return result();
        var x = QUESTIONS[i];
        root.innerHTML = '<div class="tool-panel">' +
          '<div class="progress"><i style="width:' + (i / QUESTIONS.length * 100) + '%"></i></div>' +
          '<div style="color:var(--faint);font-size:.85rem;margin-bottom:6px">Question ' + (i + 1) + " of " + QUESTIONS.length + "</div>" +
          '<div class="quiz-q">' + esc(x.q) + '</div><div class="quiz-opts">' +
          x.a.map(function (a, k) { return '<button class="quiz-opt" data-k="' + k + '">' + esc(a[0]) + "</button>"; }).join("") +
          "</div></div>";
        Array.prototype.forEach.call(root.querySelectorAll(".quiz-opt"), function (b) {
          b.addEventListener("click", function () {
            var w = x.a[Number(b.dataset.k)][1];
            Object.keys(w).forEach(function (r) { score[r] += w[r]; });
            i++;
            draw();
          });
        });
      }

      function result() {
        var ranked = ORDER.slice().sort(function (a, b) { return score[b] - score[a]; });
        var total = ORDER.reduce(function (s, r) { return s + score[r]; }, 0) || 1;
        var top = ranked[0];
        var role = (RA.roles || []).filter(function (r) { return r.id === top; })[0];
        var second = (RA.roles || []).filter(function (r) { return r.id === ranked[1]; })[0];
        var champs = role ? (role.starterChamps || []).map(function (c) {
          return '<div class="matchup"><img src="' + RA.img.champ(c.id) + '" alt="" loading="lazy"><div><b>' + esc(RA.champName(c.id)) + "</b><span>" + RA.rich(c.why) + "</span></div></div>";
        }).join("") : "";
        var guided = RA.champs.filter(function (c) { return c.roles.indexOf(top) >= 0; });
        var bars = ranked.map(function (r) {
          var name = (RA.roles.filter(function (x) { return x.id === r; })[0] || { name: r }).name;
          var pct = Math.round(score[r] / total * 100);
          return '<div style="display:grid;grid-template-columns:110px 1fr 44px;gap:10px;align-items:center;margin-bottom:6px;font-size:.9rem"><span>' + esc(name) + '</span><div class="progress" style="margin:0"><i style="width:' + pct + '%"></i></div><span style="color:var(--muted)">' + pct + "%</span></div>";
        }).join("");
        root.innerHTML = '<div class="tool-panel">' +
          '<div style="color:var(--faint);font-size:.85rem">Your best match</div>' +
          '<h2 style="margin:4px 0 8px">' + esc(role ? role.name : top) + "</h2>" +
          (role ? '<p style="color:var(--muted)">' + RA.rich(role.summary) + "</p>" : "") +
          '<div class="btn-row" style="margin-bottom:18px">' + (role ? '<a class="btn" href="#/role/' + role.id + '">Read the ' + esc(role.name) + " guide</a>" : "") +
          (guided.length ? '<a class="btn ghost" href="#/champions?role=' + top + '">' + guided.length + " champion guides</a>" : "") +
          '<button class="btn ghost" id="rpAgain">Take it again</button></div>' +
          (champs ? '<h3>Champions to start with</h3><div class="grid cols-2" style="margin-bottom:18px">' + champs + "</div>" : "") +
          "<h3>All your results</h3>" + bars +
          (second ? '<p style="color:var(--muted);margin-top:12px">Your second pick is <a href="#/role/' + second.id + '">' + esc(second.name) + "</a>. In ranked you choose two roles, so it's worth learning both.</p>" : "") +
          "</div>";
        root.querySelector("#rpAgain").addEventListener("click", function () {
          i = 0; ORDER.forEach(function (r) { score[r] = 0; }); draw();
        });
      }
      draw();
    }
  };
})();
