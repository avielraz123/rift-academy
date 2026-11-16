/* Quiz tool: questions come from the guides and role guides. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* Mount a quiz into el. questions: [{q, options, answer, explain, source?}] */
  RA.mountQuiz = function (el, questions, opts) {
    opts = opts || {};
    // shuffle options per question, keeping track of the right answer
    var qs = questions.map(function (x) {
      var order = x.fixedOrder ? x.options.map(function (_, i) { return i; }) : shuffle(x.options.map(function (_, i) { return i; }));
      return { q: x.q, options: order.map(function (i) { return x.options[i]; }), answer: order.indexOf(x.answer), explain: x.explain, source: x.source,
        ally: x.ally, enemy: x.enemy, role: x.role, optionChamps: x.optionChamps, image: x.image, imageLabel: x.imageLabel, fixedOrder: x.fixedOrder };
    });
    function team(label, ids, color) {
      if (!ids || !ids.length) return "";
      return '<div class="draft-team"><span style="color:' + color + '">' + label + "</span>" + ids.map(function (id) {
        return '<span class="draft-champ"><img src="' + RA.img.champ(id) + '" alt="" loading="lazy">' + esc(RA.champName(id)) + "</span>";
      }).join("") + "</div>";
    }
    function draftBox(x) {
      if (!x.ally && !x.enemy) return "";
      return '<div class="draft-box">' + (x.role ? '<div class="draft-team"><span>You pick</span><strong>' + esc({ top: "Top", jungle: "Jungle", mid: "Mid", bot: "Bot", support: "Support" }[x.role] || x.role) + "</strong></div>" : "") +
        team("Your team", x.ally, "var(--blue)") + team("Enemy team", x.enemy, "var(--red)") + "</div>";
    }
    function optLabel(x, o) {
      if (x.optionChamps && RA.dd.champions[o]) return '<img src="' + RA.img.champ(o) + '" alt="" loading="lazy" style="width:30px;height:30px;border-radius:6px;vertical-align:middle;margin-right:10px">' + esc(RA.champName(o));
      return esc(o);
    }
    var i = 0, score = 0, answered = false;

    function draw() {
      if (i >= qs.length) return finish();
      var x = qs[i];
      answered = false;
      el.innerHTML =
        '<div class="progress"><i style="width:' + (i / qs.length * 100) + '%"></i></div>' +
        '<div style="color:var(--faint);font-size:.85rem;margin-bottom:6px">Question ' + (i + 1) + " of " + qs.length + (opts.compact ? "" : " · Score " + score) + "</div>" +
        draftBox(x) +
        (x.image ? '<div class="quiz-img"><img src="' + esc(x.image) + '" alt="' + esc(x.imageLabel || "") + '">' + (x.imageLabel ? "<span>" + esc(x.imageLabel) + "</span>" : "") + "</div>" : "") +
        '<div class="quiz-q">' + esc(x.q) + "</div>" +
        '<div class="quiz-opts' + (x.fixedOrder && x.options.length === 5 ? " quiz-keys" : "") + '">' + x.options.map(function (o, k) { return '<button class="quiz-opt" data-k="' + k + '">' + optLabel(x, o) + "</button>"; }).join("") + "</div>" +
        '<div id="qExplain"></div>';
      Array.prototype.forEach.call(el.querySelectorAll(".quiz-opt"), function (b) {
        b.addEventListener("click", function () { pick(Number(b.dataset.k)); });
      });
    }
    function pick(k) {
      if (answered) return;
      answered = true;
      var x = qs[i];
      var right = k === x.answer;
      if (right) score++;
      Array.prototype.forEach.call(el.querySelectorAll(".quiz-opt"), function (b) {
        var bk = Number(b.dataset.k);
        b.disabled = true;
        if (bk === x.answer) b.classList.add("right");
        else if (bk === k) b.classList.add("wrong");
      });
      el.querySelector("#qExplain").innerHTML =
        '<div class="quiz-explain"><strong style="color:' + (right ? "var(--green)" : "var(--red)") + '">' + (right ? "Correct!" : "Not quite.") + "</strong> " + RA.rich(esc(x.explain || "")) +
        (x.source ? ' <a href="' + x.source.href + '">Read: ' + esc(x.source.title) + "</a>" : "") + "</div>" +
        '<div style="margin-top:14px"><button class="btn" id="qNext">' + (i + 1 < qs.length ? "Next question →" : "See results") + "</button></div>";
      el.querySelector("#qNext").addEventListener("click", function () { i++; draw(); });
      el.querySelector("#qNext").focus();
    }
    function finish() {
      if (opts.onScore) opts.onScore(score, qs.length);
      var pct = Math.round(score / qs.length * 100);
      var msg = pct === 100 ? "Perfect! You really know this." : pct >= 70 ? "Nice work! Review the ones you missed." : pct >= 40 ? "Good start. Re-read the guides and try again." : "Keep learning. The guides will get you there.";
      el.innerHTML = '<div style="text-align:center;padding:10px 0"><div class="score-big">' + score + " / " + qs.length + '</div><p style="color:var(--muted)">' + msg + '</p><div class="btn-row" style="justify-content:center"><button class="btn" id="qAgain">Try again</button>' + (opts.onDone ? '<button class="btn ghost" id="qMenu">Change quiz</button>' : "") + "</div></div>";
      el.querySelector("#qAgain").addEventListener("click", function () { RA.mountQuiz(el, questions, opts); });
      if (opts.onDone) el.querySelector("#qMenu").addEventListener("click", opts.onDone);
    }
    draw();
  };

  function pool(level, topic) {
    var out = [];
    RA.guides.forEach(function (g) {
      if (level !== "all" && g.level !== level) return;
      if (topic !== "all" && g.category !== topic) return;
      (g.quiz || []).forEach(function (x) { out.push(Object.assign({ source: { href: "#/guide/" + g.id, title: g.title } }, x)); });
    });
    if (topic === "all" || topic === "roles") {
      RA.roles.forEach(function (r) {
        if (level !== "all" && level !== "beginner") return; // role quizzes count as beginner level
        (r.quiz || []).forEach(function (x) { out.push(Object.assign({ source: { href: "#/role/" + r.id, title: r.name + " guide" } }, x)); });
      });
    }
    if (topic === "roles") out = out.filter(function (x) { return x.source.href.indexOf("#/role/") === 0; });
    return out;
  }

  RA.tools.quiz = {
    title: "League Knowledge Quiz",
    emoji: "🧠",
    summary: "Ten questions from our guides. Pick your level and topic, then see how much you know.",
    intro: "Test what you've learned. Every question links back to the guide it came from, so you can read more about anything you miss.",
    render: function (root) {
      var level = "all", topic = "all";
      function menu() {
        var topics = [["all", "Everything"], ["basics", "Basics"], ["laning", "Laning"], ["macro", "Macro"], ["vision", "Vision"], ["teamfighting", "Teamfighting"], ["mental", "Mental"], ["roles", "Roles"]];
        var levels = [["all", "All levels"], ["beginner", "Beginner"], ["intermediate", "Intermediate"], ["advanced", "Advanced"]];
        var n = pool(level, topic).length;
        root.innerHTML = '<div class="tool-panel">' +
          "<h3>Level</h3><div class=\"chips\">" + levels.map(function (l) { return '<button class="chip' + (l[0] === level ? " active" : "") + '" data-level="' + l[0] + '">' + l[1] + "</button>"; }).join("") + "</div>" +
          "<h3>Topic</h3><div class=\"chips\">" + topics.map(function (t) { return '<button class="chip' + (t[0] === topic ? " active" : "") + '" data-topic="' + t[0] + '">' + t[1] + "</button>"; }).join("") + "</div>" +
          '<p style="color:var(--muted)">' + n + " questions available." + (n === 0 ? " Try a different level or topic." : "") + "</p>" +
          '<button class="btn" id="qStart"' + (n ? "" : " disabled") + ">Start quiz (" + Math.min(10, n) + " questions)</button></div>";
        Array.prototype.forEach.call(root.querySelectorAll("[data-level]"), function (b) { b.addEventListener("click", function () { level = b.dataset.level; menu(); }); });
        Array.prototype.forEach.call(root.querySelectorAll("[data-topic]"), function (b) { b.addEventListener("click", function () { topic = b.dataset.topic; menu(); }); });
        var s = root.querySelector("#qStart");
        if (s) s.addEventListener("click", function () {
          root.innerHTML = '<div class="tool-panel" id="qBox"></div>';
          RA.mountQuiz(root.querySelector("#qBox"), shuffle(pool(level, topic)).slice(0, 10), { onDone: menu });
        });
      }
      menu();
    }
  };
})();
