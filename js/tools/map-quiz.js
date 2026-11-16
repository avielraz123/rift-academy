/* Map quiz: click the right spot on the minimap. Questions live in js/data/map-quiz.js. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pct(v) { return (v * 100).toFixed(2) + "%"; }
  function circle(x, y, r, cls) {
    return '<span class="' + cls + '" style="left:' + pct(x - r) + ";top:" + pct(y - r) + ";width:" + pct(2 * r) + ";height:" + pct(2 * r) + '"></span>';
  }
  var SIDES = { blue: "You're on the blue team (base at the bottom left)", red: "You're on the red team (base at the top right)" };

  RA.tools["map-quiz"] = {
    title: "Map Quiz",
    emoji: "🗺️",
    summary: "Click the right spot on the minimap: objectives, jungle camps, ward spots and where the enemy jungler is.",
    intro: "Each question shows the minimap. Tap or click where you think the answer is, then read why. The blue team's base is always at the bottom left and the red team's at the top right.",
    render: function (root) {
      var level = "all";
      function pool() {
        return (RA.mapQuiz || []).filter(function (s) { return level === "all" || s.level === level; });
      }
      function menu() {
        var n = pool().length;
        var levels = [["all", "All levels"], ["beginner", "Beginner"], ["intermediate", "Intermediate"], ["advanced", "Advanced"]];
        root.innerHTML = '<div class="tool-panel">' +
          '<h3>Level</h3><div class="chips">' + levels.map(function (l) { return '<button class="chip' + (l[0] === level ? " active" : "") + '" data-level="' + l[0] + '">' + l[1] + "</button>"; }).join("") + "</div>" +
          '<p style="color:var(--muted)">' + n + " questions: beginner ones ask where things are, intermediate and advanced ones ask about vision and the enemy jungler.</p>" +
          '<button class="btn" id="mqStart"' + (n ? "" : " disabled") + ">Start (" + Math.min(10, n) + " questions)</button></div>" +
          '<p class="patch-note">New to the map? Read <a href="#/guide/the-map">Summoner\'s Rift: The Map Explained</a> first. Map image: Riot Games Data Dragon.</p>';
        Array.prototype.forEach.call(root.querySelectorAll("[data-level]"), function (b) {
          b.addEventListener("click", function () { level = b.dataset.level; menu(); });
        });
        root.querySelector("#mqStart").addEventListener("click", function () { play(shuffle(pool()).slice(0, 10)); });
      }
      function play(qs) {
        var i = 0, score = 0;
        function draw() {
          if (i >= qs.length) return finish();
          var x = qs[i], answered = false;
          root.innerHTML = '<div class="tool-panel">' +
            '<div class="progress"><i style="width:' + (i / qs.length * 100) + '%"></i></div>' +
            '<div class="mq-top"><span>Question ' + (i + 1) + " of " + qs.length + " · " + esc(x.topic || "") + "</span><span>Score " + score + "</span></div>" +
            (x.side ? '<div class="mq-side ' + x.side + '">' + SIDES[x.side] + "</div>" : "") +
            '<div class="quiz-q">' + esc(x.q) + "</div>" +
            '<div class="mq-map" id="mqMap" role="button" tabindex="0" aria-label="Minimap. Click where you think the answer is.">' +
              '<img src="' + RA.img.map() + '" alt="Minimap of Summoner\'s Rift" draggable="false">' +
              (x.marks || []).map(function (m) {
                return '<span class="mq-mark ' + (m.color || "red") + '" style="left:' + pct(m.x) + ";top:" + pct(m.y) + '"><i></i><b>' + esc(m.label) + "</b></span>";
              }).join("") +
            "</div>" +
            '<div id="mqFeedback"><button class="linklike" id="mqShow">Show the answer (no point)</button></div></div>';
          var map = root.querySelector("#mqMap");
          function answer(px, py) {
            if (answered) return;
            answered = true;
            var hit = px != null && x.zones.some(function (zn) { var dx = px - zn.x, dy = py - zn.y; return dx * dx + dy * dy <= zn.r * zn.r; });
            if (hit) score++;
            map.insertAdjacentHTML("beforeend", x.zones.map(function (zn) { return circle(zn.x, zn.y, zn.r, "mq-zone"); }).join("") +
              (px != null ? '<span class="mq-click ' + (hit ? "good" : "bad") + '" style="left:' + pct(px) + ";top:" + pct(py) + '"></span>' : ""));
            map.classList.add("answered");
            root.querySelector("#mqFeedback").innerHTML = '<div class="quiz-explain ' + (hit ? "good" : px != null ? "bad" : "") + '"><strong>' +
              (hit ? "Correct!" : px != null ? "Not quite. The green areas are correct." : "The green areas are correct.") + "</strong> " + RA.rich(esc(x.explain)) + "</div>" +
              '<button class="btn" id="mqNext">' + (i + 1 < qs.length ? "Next question →" : "See results") + "</button>";
            var nb = root.querySelector("#mqNext");
            nb.addEventListener("click", function () { i++; draw(); });
            nb.focus();
          }
          map.addEventListener("click", function (e) {
            var r = map.getBoundingClientRect();
            answer((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
          });
          map.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); answer(null, null); } });
          root.querySelector("#mqShow").addEventListener("click", function () { answer(null, null); });
        }
        function finish() {
          var best = 0;
          try { best = Number(localStorage.getItem("ra-mapquiz-best") || 0); if (score > best) localStorage.setItem("ra-mapquiz-best", String(score)); } catch (e) {}
          root.innerHTML = '<div class="tool-panel"><h2 style="margin-top:0">' + score + " / " + qs.length + "</h2><p style=\"color:var(--muted)\">" +
            (score === qs.length ? "Perfect. You know the map." : score >= qs.length * 0.7 ? "Good map sense. Replay to learn the ones you missed." : "Keep going. Map knowledge comes fast with a few rounds.") +
            (best && score <= best ? " Your best: " + best + "." : score > best ? " New best!" : "") + '</p><div class="btn-row"><button class="btn" id="mqAgain">Play again</button><button class="btn ghost" id="mqMenu">Change level</button>' +
            '<a class="btn ghost" href="#/guide/jungle-tracking">Read: tracking the jungler</a></div></div>';
          root.querySelector("#mqAgain").addEventListener("click", function () { play(shuffle(pool()).slice(0, 10)); });
          root.querySelector("#mqMenu").addEventListener("click", menu);
        }
        draw();
      }
      menu();
    }
  };
})();
