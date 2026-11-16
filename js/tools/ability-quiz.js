/* Ability icon quiz: recognize abilities by their icon. Covers every champion (data loaded on demand). */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;
  var KEYS = ["Passive", "Q", "W", "E", "R"];

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function loadData(cb) {
    if (RA.abilitiesAll) return cb(true);
    var s = document.createElement("script");
    s.src = RA.root + "js/data/abilities-all.js";
    s.onload = function () { cb(!!RA.abilitiesAll); };
    s.onerror = function () { cb(false); };
    document.head.appendChild(s);
  }
  function iconUrl(k, file) { return k === 0 ? RA.img.passive(file) : RA.img.spell(file); }

  function makeQuestions(mode, ids) {
    var all = ids.slice();
    return shuffle(all).slice(0, 10).map(function (id, n) {
      var a = RA.abilitiesAll[id], k = Math.floor(Math.random() * 5), ab = a[k];
      var m = mode === "mixed" ? (n % 2 ? "key" : "champion") : mode;
      var cname = RA.champName(id);
      var explain = ab[0] + " is " + cname + "'s " + (k === 0 ? "passive" : KEYS[k] + " ability") + "." +
        (RA.hasGuide(id) ? " Learn how to play against it in the " + cname + " guide." : "");
      if (m === "key") {
        return { q: "This is one of " + cname + "'s abilities. Which key is it on?", image: iconUrl(k, ab[1]), imageLabel: cname,
          options: KEYS.slice(), answer: k, fixedOrder: true, explain: explain };
      }
      var others = shuffle(all.filter(function (x) { return x !== id; })).slice(0, 3);
      var opts = shuffle([id].concat(others));
      return { q: "Which champion has this ability?", image: iconUrl(k, ab[1]), options: opts, answer: opts.indexOf(id), optionChamps: true, explain: explain };
    });
  }

  RA.tools["ability-quiz"] = {
    title: "Ability Icon Quiz",
    emoji: "✨",
    summary: "See an ability icon and name the champion or the key. Covers every champion in the game.",
    intro: "Recognizing enemy abilities at a glance helps you dodge, trade and track cooldowns. Pick a mode, then name the champion or the key (Passive, Q, W, E or R) for each icon. Icons come from Riot's Data Dragon, so every champion is included.",
    render: function (root) {
      var mode = "champion", scope = "all";
      root.innerHTML = '<div class="tool-panel"><p>Loading every champion\'s abilities…</p></div>';
      function menu() {
        var ids = scope === "guided" ? RA.champs.map(function (c) { return c.id; }) : Object.keys(RA.abilitiesAll).filter(function (id) { return RA.dd.champions[id]; });
        var best = 0;
        try { best = Number(localStorage.getItem("ra-abilityquiz-best") || 0); } catch (e) {}
        var chip = function (key, val, label, cur) { return '<button class="chip' + (val === cur ? " active" : "") + '" data-' + key + '="' + val + '">' + label + "</button>"; };
        root.innerHTML = '<div class="tool-panel">' +
          "<h3>Mode</h3><div class=\"chips\">" + chip("mode", "champion", "Name the champion", mode) + chip("mode", "key", "Name the key", mode) + chip("mode", "mixed", "Mixed", mode) + "</div>" +
          "<h3>Champions</h3><div class=\"chips\">" + chip("scope", "all", "All " + ids.length + " champions", scope === "all" ? "all" : "") + chip("scope", "guided", "Only champions with guides (" + RA.champs.length + ")", scope) + "</div>" +
          '<p style="color:var(--muted)">10 questions per round.' + (best ? " Your best: " + best + "/10." : "") + "</p>" +
          '<button class="btn" id="aqStart">Start</button></div>';
        Array.prototype.forEach.call(root.querySelectorAll("[data-mode]"), function (b) { b.addEventListener("click", function () { mode = b.dataset.mode; menu(); }); });
        Array.prototype.forEach.call(root.querySelectorAll("[data-scope]"), function (b) { b.addEventListener("click", function () { scope = b.dataset.scope; menu(); }); });
        root.querySelector("#aqStart").addEventListener("click", function () {
          root.innerHTML = '<div class="tool-panel" id="aqBox"></div>';
          var qs = makeQuestions(mode, ids);
          RA.mountQuiz(root.querySelector("#aqBox"), qs, {
            onDone: menu,
            onScore: function (score) { try { if (score > best) localStorage.setItem("ra-abilityquiz-best", String(score)); } catch (e) {} }
          });
        });
      }
      loadData(function (ok) {
        if (ok) menu();
        else root.innerHTML = '<div class="tool-panel"><p>Couldn\'t load the ability data. Check your connection and reload the page.</p></div>';
      });
    }
  };
})();
