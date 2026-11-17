/* Champion comparison: two champion guides side by side, plus how they do against each other. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;

  function guideOf(id) { return RA.champs.filter(function (c) { return c.id === id; })[0] || null; }
  function sortByName(ids) { return ids.slice().sort(function (a, b) { return RA.champName(a).localeCompare(RA.champName(b)); }); }
  function picksFor(id, role) { return RA.champPicks[id + ":" + role] || (RA.champRoles[id + ":" + role] ? null : RA.champPicks[id]); }
  function itemIcons(list) {
    return (list || []).filter(Boolean).map(function (n) {
      var lk = RA.itemLink(n);
      return (lk ? '<a href="' + lk + '"' : "<span") + ' class="cmp-ic" title="' + esc(n) + '"><img src="' + RA.img.item(n) + '" alt="' + esc(n) + '" loading="lazy"></' + (lk ? "a" : "span") + ">";
    }).join("");
  }

  RA.tools.compare = {
    title: "Champion Comparison",
    emoji: "⚖️",
    summary: "Put two champions side by side: difficulty, damage, strengths, power spikes, builds and their matchup.",
    intro: "Choose two champions from our guides to compare how hard they are, what they're good and bad at, when they're strong, what they build, and how they do against each other in lane.",
    render: function (root, q) {
      q = q || {};
      var ids = sortByName(RA.champs.map(function (c) { return c.id; }));
      var side = [
        { id: guideOf(q.a) ? q.a : "Ahri", role: q.ar },
        { id: guideOf(q.b) ? q.b : "Syndra", role: q.br }
      ];
      side.forEach(function (s) { if (!guideOf(s.id)) s.id = ids[0]; });

      function fixRoles() {
        side.forEach(function (s) { var g = guideOf(s.id); if (g.roles.indexOf(s.role) < 0) s.role = g.roles[0]; });
      }
      function draw() {
        fixRoles();
        root.innerHTML = '<div class="tool-panel cmp-picker">' + side.map(function (s, i) {
          var g = guideOf(s.id);
          return '<div><label><span>Champion ' + (i ? "B" : "A") + '</span><select data-side="' + i + '">' + ids.map(function (id) { return '<option value="' + id + '"' + (id === s.id ? " selected" : "") + ">" + esc(RA.champName(id)) + "</option>"; }).join("") + "</select></label>" +
            (g.roles.length > 1 ? '<div class="chips">' + g.roles.map(function (r) { return '<button class="chip' + (r === s.role ? " active" : "") + '" data-side-role="' + i + ":" + r + '">' + RA.roleNames[r] + "</button>"; }).join("") + "</div>" : "") + "</div>";
        }).join("") + '<button class="btn ghost small" id="cmpSwap">⇄ Swap</button></div><div id="cmpResult">' + result() + "</div>";
        Array.prototype.forEach.call(root.querySelectorAll("[data-side]"), function (sel) { sel.addEventListener("change", function () { side[Number(sel.dataset.side)].id = sel.value; update(); }); });
        Array.prototype.forEach.call(root.querySelectorAll("[data-side-role]"), function (b) { b.addEventListener("click", function () { var p = b.dataset.sideRole.split(":"); side[Number(p[0])].role = p[1]; update(); }); });
        root.querySelector("#cmpSwap").addEventListener("click", function () { side.reverse(); update(); });
      }
      function update() {
        draw();
        RA.replaceRoute("tools/compare?a=" + side[0].id + "&ar=" + side[0].role + "&b=" + side[1].id + "&br=" + side[1].role);
      }

      function data(s) {
        var c = RA.champFor(s.id, s.role), b = RA.builds[s.id + ":" + s.role] || {}, pk = picksFor(s.id, s.role), d = RA.dd.champions[s.id];
        return { c: c, b: b, pk: pk, ranged: (d[6] || 0) >= 300, tags: String(d[2] || "").split("/") };
      }
      function row(label, a, b) {
        return '<div class="cmp-label">' + label + '</div><div class="cmp-cell">' + a + '</div><div class="cmp-cell">' + b + "</div>";
      }
      function result() {
        var A = data(side[0]), B = data(side[1]);
        if (side[0].id === side[1].id && side[0].role === side[1].role) return '<p class="empty">Pick two different champions (or two roles of the same champion).</p>';
        var head = '<div class="cmp-grid cmp-head"><div></div>' + [A, B].map(function (x, i) {
          var s = side[i];
          return '<a class="cmp-champ" href="' + RA.champLink(s.id, s.role) + '"><img src="' + RA.img.champ(s.id) + '" alt=""><b>' + esc(RA.champName(s.id)) + "</b><span>" + esc(RA.roleNames[s.role]) + "</span></a>";
        }).join("") + "</div>";
        var mv = RA.matchupVerdict ? RA.matchupVerdict(side[0].id, side[0].role, side[1].id) : null;
        var sameLane = side[0].role === side[1].role;
        var h2h = mv && sameLane ? '<div class="card cmp-h2h"><h3>Head to head in ' + esc(RA.roleNames[side[0].role].toLowerCase()) + "</h3>" +
          "<p>" + ({ hard: "<b>" + esc(RA.champName(side[1].id)) + "</b> is favored over " + esc(RA.champName(side[0].id)) + ".",
                    easy: "<b>" + esc(RA.champName(side[0].id)) + "</b> is favored over " + esc(RA.champName(side[1].id)) + ".",
                    none: "Our guides don't rate this matchup, so it comes down to skill." })[mv.verdict] + "</p>" +
          (mv.tips[0] ? '<div class="mu-tip"><div class="mu-from">' + mv.tips[0].from + "</div><p>" + mv.tips[0].html + "</p></div>" : "") +
          '<p style="margin:10px 0 0"><a href="#/tools/matchup?you=' + side[0].id + "&role=" + side[0].role + "&vs=" + side[1].id + '">Full matchup →</a></p></div>' : "";
        var tier = function (x) { return x.b.tier ? '<span class="tier ' + x.b.tier.charAt(0) + '">' + esc(x.b.tier.charAt(0)) + "</span>" + (x.b.winRate ? ' <span class="cmp-sub">' + esc(String(x.b.winRate).split(" ")[0]) + " win rate</span>" : "") : "–"; };
        var diff = function (x) { return '<span class="badge ' + String(x.c.difficulty || "").toLowerCase() + '">' + esc(x.c.difficulty || "") + "</span>"; };
        var style = function (x) { return esc(x.c.style || "") + '<span class="cmp-sub">' + esc(x.tags.join(" / ")) + " · " + (x.ranged ? "ranged" : "melee") + "</span>"; };
        var blind = function (x) { return x.pk && x.pk.blind ? (x.pk.blind.safe ? '<span class="badge easy">✓ Safe</span>' : '<span class="badge hard">Counter-pick</span>') : "–"; };
        var key = function (x) { var k = x.b.runes && x.b.runes.keystone; return k ? '<a class="ic rune" href="' + RA.runeLink(k) + '"><img src="' + RA.img.rune(k) + '" alt="">' + esc(k) + "</a>" : "–"; };
        var lst = function (field, n, cls) { return function (x) { return RA.list((x.c[field] || []).slice(0, n), cls) || "–"; }; };
        var rows = [
          ["Tier this patch", tier], ["Difficulty", diff], ["Damage", function (x) { return esc(x.c.damage || ""); }], ["Style", style], ["Blind pick", blind],
          ["Strengths", lst("strengths", 3, "list-good")], ["Weaknesses", lst("weaknesses", 3, "list-bad")], ["Power spikes", lst("spikes", 3)],
          ["Keystone", key], ["Core items", function (x) { return itemIcons((x.b.core || []).concat([x.b.boots])) || "–"; }],
          ["Skill order", function (x) { return esc(x.b.skillMax || "–"); }],
          ["Good into", function (x) { return RA.list(((x.pk && x.pk.into) || []).slice(0, 2), "list-good") || "–"; }]
        ];
        var grid = '<div class="cmp-grid">' + rows.map(function (r) { return row(r[0], r[1](A), r[1](B)); }).join("") + "</div>";
        return head + h2h + '<div class="card" style="margin-top:16px">' + grid + "</div>" +
          '<p class="patch-note">Full details: <a href="' + RA.champLink(side[0].id, side[0].role) + '">' + esc(RA.champName(side[0].id)) + ' guide</a> · <a href="' + RA.champLink(side[1].id, side[1].role) + '">' + esc(RA.champName(side[1].id)) + " guide</a></p>";
      }
      draw();
    }
  };
})();
