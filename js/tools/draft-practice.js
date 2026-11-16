/* Draft practice: "here's the draft so far, what do you pick?" scenarios. */
(function () {
  "use strict";
  var RA = window.RA;

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  RA.tools["draft-practice"] = {
    title: "Draft Practice",
    emoji: "🛡️",
    summary: "See the enemy team, pick the best champion. Practice the decisions you make in champ select.",
    intro: "Each question shows a draft in progress: the role you're picking for, your team's picks and the enemy's picks. Choose the champion that helps your team most, then read why. New to this? Start with the champ select basics guide.",
    render: function (root) {
      var level = "all";
      function pool() {
        return (RA.draftScenarios || []).filter(function (s) { return level === "all" || s.level === level; });
      }
      function menu() {
        var n = pool().length;
        var levels = [["all", "All levels"], ["beginner", "Beginner"], ["intermediate", "Intermediate"], ["advanced", "Advanced"]];
        var guides = RA.guides.filter(function (g) { return g.category === "draft"; });
        root.innerHTML = '<div class="tool-panel">' +
          '<h3>Level</h3><div class="chips">' + levels.map(function (l) { return '<button class="chip' + (l[0] === level ? " active" : "") + '" data-level="' + l[0] + '">' + l[1] + "</button>"; }).join("") + "</div>" +
          '<p style="color:var(--muted)">' + n + " draft scenarios." + (n ? "" : " Try another level.") + "</p>" +
          '<button class="btn" id="dpStart"' + (n ? "" : " disabled") + ">Start (" + Math.min(10, n) + " drafts)</button></div>" +
          (guides.length ? '<div class="section"><h2>Learn first</h2><div class="grid cols-2">' + guides.map(function (g) {
            return '<a class="card" href="#/guide/' + g.id + '"><div class="meta"><span class="badge ' + g.level + '">' + g.level + "</span></div><h3>" + RA.esc(g.title) + "</h3><p>" + RA.esc(g.summary) + "</p></a>";
          }).join("") + "</div></div>" : "");
        Array.prototype.forEach.call(root.querySelectorAll("[data-level]"), function (b) {
          b.addEventListener("click", function () { level = b.dataset.level; menu(); });
        });
        var s = root.querySelector("#dpStart");
        if (s) s.addEventListener("click", function () {
          root.innerHTML = '<div class="tool-panel" id="dpBox"></div>';
          RA.mountQuiz(root.querySelector("#dpBox"), shuffle(pool()).slice(0, 10), { onDone: menu });
        });
      }
      menu();
    }
  };
})();
