/* Champion Pool Builder: enter the champions you play, see your pool's weak spots and which champion covers them best. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;
  var ROLES = ["top", "jungle", "mid", "bot", "support"];

  function guideOf(id) { return RA.champs.filter(function (c) { return c.id === id; })[0] || null; }
  function hasRole(id, role) { var g = guideOf(id); return !!(g && g.roles.indexOf(role) >= 0); }
  function sortByName(ids) { return ids.slice().sort(function (a, b) { return RA.champName(a).localeCompare(RA.champName(b)); }); }
  function picksFor(id, role) { return RA.champPicks[id + ":" + role] || (RA.champRoles[id + ":" + role] ? null : RA.champPicks[id]); }
  function champsIn(lines) {
    var out = [];
    (lines || []).forEach(function (l) { String(l).replace(/\{\{champ:\s*([^}\s]+)\s*\}\}/g, function (m, id) { if (out.indexOf(id) < 0) out.push(id); }); });
    return out;
  }
  // Everything we know about one champion in one role.
  function info(id, role) {
    var d = RA.dd.champions[id], tags = String(d[2] || "").split("/");
    var g = hasRole(id, role) ? RA.champFor(id, role) : null, pk = g ? picksFor(id, role) : null;
    var dmg = g && g.damage ? (g.damage === "Magic" ? "ap" : g.damage === "Physical" ? "ad" : "mixed") : (d[4] >= d[3] + 2 ? "ap" : d[3] >= d[4] + 2 ? "ad" : "mixed");
    var b = RA.builds[id + ":" + role];
    return {
      id: id, guided: !!g, tags: tags, cls: tags[0], dmg: dmg, ranged: (d[6] || 0) >= 300,
      blind: pk && pk.blind ? pk.blind.safe : null,
      hard: g && g.matchups ? (g.matchups.hard || []).map(function (m) { return m.id; }) : [],
      easy: g && g.matchups ? (g.matchups.easy || []).map(function (m) { return m.id; }) : [],
      into: champsIn(pk && pk.into), avoid: champsIn(pk && pk.avoid),
      weak: g ? (g.weaknesses || []) : [], tier: b && b.tier ? b.tier.charAt(0) : ""
    };
  }
  var DMG = { ap: "magic", ad: "physical", mixed: "mixed" };
  function names(ids) { return ids.map(function (id) { return "{{champ:" + id + "}}"; }).join(", "); }

  function analyse(role, pool) {
    var ps = pool.map(function (id) { return info(id, role); });
    // Enemies that give your pool trouble, and which of your champions they beat.
    var threats = {};
    ps.forEach(function (p) {
      p.hard.concat(p.avoid).forEach(function (e) {
        if (pool.indexOf(e) >= 0) return;
        threats[e] = threats[e] || [];
        if (threats[e].indexOf(p.id) < 0) threats[e].push(p.id);
      });
    });
    var gaps = [];
    var dmgs = ps.map(function (p) { return p.dmg; });
    var allAP = dmgs.every(function (d) { return d === "ap"; }), allAD = dmgs.every(function (d) { return d === "ad"; });
    if (ps.length >= 2 && (allAP || allAD)) gaps.push({ key: "dmg", text: "Your pool is all " + (allAP ? "magic" : "physical") + " damage. When your team already has that damage type, enemies can stack one kind of defense against you." });
    var allMelee = ps.every(function (p) { return !p.ranged; }), allRanged = ps.every(function (p) { return p.ranged; });
    if (ps.length >= 2 && allMelee) gaps.push({ key: "range", want: true, text: "Every champion in your pool is melee. Ranged champions that poke you in lane are a problem for all of them." });
    if (ps.length >= 2 && allRanged && role !== "bot" && role !== "support") gaps.push({ key: "range", want: false, text: "Every champion in your pool is ranged. Divers and assassins who jump on you hit all of them." });
    var known = ps.filter(function (p) { return p.blind !== null; });
    if (known.length && known.length === ps.length && !known.some(function (p) { return p.blind; })) gaps.push({ key: "blind", text: "None of your champions is a safe blind pick, so you need a fallback when you have to pick first." });
    var cls = ps.map(function (p) { return p.cls; });
    var PLURAL = { Marksman: "marksmen", Mage: "mages", Assassin: "assassins", Fighter: "fighters", Tank: "tanks", Support: "supports" };
    if (ps.length >= 2 && cls.every(function (c) { return c === cls[0]; }) && !(role === "bot" && cls[0] === "Marksman"))
      gaps.push({ key: "class", text: "All your champions are " + (PLURAL[cls[0]] || cls[0].toLowerCase()) + ", so the same counter-picks work against your whole pool." });

    // Score every champion we have a guide for in this role.
    var cands = RA.champs.filter(function (c) { return c.roles.indexOf(role) >= 0 && pool.indexOf(c.id) < 0; }).map(function (c) {
      var ci = info(c.id, role), score = 0, reasons = [], covers = [], weakTo = [];
      Object.keys(threats).forEach(function (e) {
        var n = threats[e].length;
        if (ci.easy.indexOf(e) >= 0 || ci.into.indexOf(e) >= 0) { score += 3 * n; covers.push(e); }
        else if (ci.hard.indexOf(e) >= 0 || ci.avoid.indexOf(e) >= 0) { score -= 2 * n; weakTo.push(e); }
      });
      if (covers.length) reasons.push({ good: true, text: "Good into " + names(covers) + ", who " + (covers.length === 1 ? "gives" : "give") + " your pool trouble." });
      if (weakTo.length) reasons.push({ good: false, text: "Also struggles into " + names(weakTo) + ", like your current pool." });
      gaps.forEach(function (gp) {
        if (gp.key === "dmg" && ci.dmg !== dmgs[0]) { score += ci.dmg === "mixed" ? 2 : 4; reasons.push({ good: true, text: "Adds " + DMG[ci.dmg] + " damage to your pool." }); }
        if (gp.key === "range" && ci.ranged === gp.want) { score += 2; reasons.push({ good: true, text: ci.ranged ? "Ranged, so you have an answer to lane poke." : "Melee and tanky enough to deal with divers." }); }
        if (gp.key === "blind" && ci.blind) { score += 4; reasons.push({ good: true, text: "A safe blind pick for when you pick first." }); }
        if (gp.key === "class" && ci.cls !== cls[0]) { score += 2; reasons.push({ good: true, text: "A different kind of champion (" + ci.tags.join(" / ").toLowerCase() + "), so one counter doesn't beat your whole pool." }); }
      });
      if (ci.tier === "S") score += 1.5; else if (ci.tier === "A") score += 1;
      if (ci.tier === "S" || ci.tier === "A") reasons.push({ good: true, text: "Strong this patch (tier " + ci.tier + ")." });
      return { id: c.id, info: ci, score: score, reasons: reasons, covers: covers };
    }).sort(function (a, b) { return b.score - a.score || RA.champName(a.id).localeCompare(RA.champName(b.id)); });
    return { ps: ps, threats: threats, gaps: gaps, cands: cands };
  }
  RA.poolAnalyse = analyse;

  RA.tools["pool-builder"] = {
    title: "Champion Pool Builder",
    emoji: "🧩",
    summary: "Enter the champions you play. See your pool's weak spots and which champion to add to cover them.",
    intro: "A good champion pool covers itself: when one of your champions gets countered, another one beats that counter. Pick your role and the 1 to 3 champions you play. We'll find the matchups and team types your pool struggles with, and suggest the champion from our guides that fills those gaps best.",
    render: function (root, q) {
      q = q || {};
      var role = ROLES.indexOf(q.role) >= 0 ? q.role : "mid";
      var pool = String(q.pool || "").split(",").filter(function (id) { return RA.dd.champions[id]; }).slice(0, 3);
      var all = sortByName(Object.keys(RA.dd.champions));

      function draw() {
        var slots = pool.concat(["", "", ""]).slice(0, 3);
        root.innerHTML = '<div class="tool-panel pb-picker">' +
          "<h3>Your role</h3><div class=\"chips\">" + ROLES.map(function (r) {
            var n = RA.champs.filter(function (c) { return c.roles.indexOf(r) >= 0; }).length;
            return '<button class="chip' + (r === role ? " active" : "") + '" data-role="' + r + '">' + RA.roleNames[r] + ' <span style="opacity:.7">(' + n + ")</span></button>";
          }).join("") + "</div>" +
          '<h3>Champions you play</h3><div class="gp-enemies">' + slots.map(function (id, i) {
            return '<label><span>Champion ' + (i + 1) + (i ? " (optional)" : "") + '</span><select data-slot="' + i + '"><option value="">' + (i ? "None" : "Choose a champion…") + "</option>" +
              all.map(function (c) { return '<option value="' + c + '"' + (c === id ? " selected" : "") + ">" + esc(RA.champName(c)) + (hasRole(c, role) ? " ★" : "") + "</option>"; }).join("") + "</select></label>";
          }).join("") + '</div><p class="pb-note">★ = we have a guide for this champion in this role, so we know their matchups.</p></div>' +
          '<div id="pbResult">' + result() + "</div>";
        Array.prototype.forEach.call(root.querySelectorAll("[data-role]"), function (b) { b.addEventListener("click", function () { role = b.dataset.role; update(); }); });
        Array.prototype.forEach.call(root.querySelectorAll("[data-slot]"), function (s) {
          s.addEventListener("change", function () {
            var next = slots.slice(); next[Number(s.dataset.slot)] = s.value;
            pool = next.filter(function (id, i) { return id && next.indexOf(id) === i; });
            update();
          });
        });
      }
      function update() {
        draw();
        RA.replaceRoute("tools/pool-builder?role=" + role + (pool.length ? "&pool=" + pool.join(",") : ""));
      }

      function card(c, rank) {
        var good = c.reasons.filter(function (r) { return r.good; }), bad = c.reasons.filter(function (r) { return !r.good; });
        return '<div class="card pb-cand' + (rank === 0 ? " top" : "") + '"><div class="pb-cand-head"><img src="' + RA.img.champ(c.id) + '" alt=""><div>' +
          (rank === 0 ? '<span class="badge gold">Best fit</span> ' : "") + "<h3>" + esc(RA.champName(c.id)) + "</h3><span class=\"pb-sub\">" + esc(c.info.tags.join(" / ")) + " · " + DMG[c.info.dmg] + " damage · " + (c.info.ranged ? "ranged" : "melee") + "</span></div></div>" +
          (good.length ? RA.list(good.map(function (r) { return r.text; }), "list-good") : '<p style="color:var(--muted)">No specific gaps covered, but a solid option for this role.</p>') +
          (bad.length ? RA.list(bad.map(function (r) { return r.text; }), "list-bad") : "") +
          '<p style="margin:10px 0 0"><a href="' + RA.champLink(c.id, role) + '">' + esc(RA.champName(c.id)) + " guide →</a></p></div>";
      }

      function result() {
        if (!pool.length) return '<p class="empty">Pick at least one champion you play.</p>';
        var a = analyse(role, pool);
        if (!a.cands.length) return '<p class="empty">We don\'t have guides for other ' + esc(RA.roleNames[role].toLowerCase()) + " champions yet.</p>";
        var top = a.cands.slice(0, 3), more = a.cands.slice(3, 8);
        var coveredBy = {};
        top.forEach(function (c) { c.covers.forEach(function (e) { coveredBy[e] = coveredBy[e] || c.id; }); });

        var weak = '<div class="card"><h3>Your pool\'s weak spots</h3>' + a.ps.map(function (p) {
          var th = Object.keys(a.threats).filter(function (e) { return a.threats[e].indexOf(p.id) >= 0; });
          return '<div class="pb-weak"><div class="pb-weak-head"><img src="' + RA.img.champ(p.id) + '" alt=""><b>' + esc(RA.champName(p.id)) + "</b></div>" +
            (p.guided ? (th.length ? '<p>Struggles into:</p><div class="pb-threats">' + th.map(function (e) {
                var cov = coveredBy[e];
                return '<span class="pb-threat' + (cov ? " covered" : "") + '" title="' + (cov ? "Covered by " + esc(RA.champName(cov)) : "Not covered by the top suggestions") + '"><img src="' + RA.img.champ(e) + '" alt="">' + esc(RA.champName(e)) +
                  (cov ? ' <small>✓ ' + esc(RA.champName(cov)) + "</small>" : "") + "</span>";
              }).join("") + "</div>" : "<p>Our guide lists no tough matchups.</p>") +
              (p.weak.length ? '<p class="pb-weak-text">' + RA.rich(p.weak[0]) + "</p>" : "")
            : '<p class="pb-weak-text">We don\'t have a ' + esc(RA.roleNames[role].toLowerCase()) + " guide for this champion yet, so we only use its damage type and range.</p>") + "</div>";
        }).join("") +
          (a.gaps.length ? '<h4 style="margin-top:14px">Gaps in the whole pool</h4>' + RA.list(a.gaps.map(function (g) { return g.text; }), "list-bad") : '<p style="margin-top:12px;color:var(--muted)">No pool-wide gaps in damage type, range or blind picks.</p>') + "</div>";

        return weak + '<h2 style="margin:28px 0 12px">Champions to add</h2><div class="grid cols-3">' + top.map(card).join("") + "</div>" +
          (more.length ? '<p style="margin-top:16px;color:var(--muted)">Also worth a look: ' + more.map(function (c) { return '<a href="' + RA.champLink(c.id, role) + '">' + esc(RA.champName(c.id)) + "</a>"; }).join(", ") + ".</p>" : "") +
          '<p class="patch-note">Based on the matchups and "When to pick" notes in our guides, damage type, range and this patch\'s tiers. Two or three champions you know well beat a big pool you play badly. Read <a href="#/guide/counter-picking">Counter-Picking</a> for more.</p>';
      }
      draw();
    }
  };
})();
