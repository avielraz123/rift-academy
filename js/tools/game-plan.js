/* Game Plan Builder: your champion + the enemy team -> what kind of team it is, which items to change, who to watch. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;
  var ORDER = ["top", "jungle", "mid", "bot", "support"];

  function sortByName(ids) { return ids.slice().sort(function (a, b) { return RA.champName(a).localeCompare(RA.champName(b)); }); }
  function guideOf(id) { return RA.champs.filter(function (c) { return c.id === id; })[0] || null; }

  // What one enemy brings: damage type, frontline, squishy, healing, crowd control.
  function profile(id) {
    var d = RA.dd.champions[id], tags = String(d[2] || "").split("/"), atk = d[3] || 0, mag = d[4] || 0, def = d[5] || 0;
    var g = guideOf(id);
    var dmg = g && g.damage ? (g.damage === "Magic" ? "ap" : g.damage === "Physical" ? "ad" : "mixed") :
      (mag >= atk + 2 ? "ap" : atk >= mag + 2 ? "ad" : "mixed");
    var front = tags.indexOf("Tank") >= 0 || (tags[0] === "Fighter" && def >= 6);
    var tc = RA.compTags || { healing: [], cc: [] };
    return { id: id, tags: tags, dmg: dmg, front: front, squishy: !front && def <= 4,
      healing: tc.healing.indexOf(id) >= 0, cc: tc.cc.indexOf(id) >= 0 };
  }
  // Which RA.SITUATIONS apply to this enemy team, with the reason.
  function situations(ps) {
    var n = ps.length, ad = 0, ap = 0, out = [];
    ps.forEach(function (p) { if (p.dmg === "ad") ad++; else if (p.dmg === "ap") ap++; else { ad += 0.5; ap += 0.5; } });
    var fronts = ps.filter(function (p) { return p.front; }), squish = ps.filter(function (p) { return p.squishy; });
    var heal = ps.filter(function (p) { return p.healing; }), cc = ps.filter(function (p) { return p.cc; });
    function names(list) { return list.map(function (p) { return RA.champName(p.id); }).join(", "); }
    if (fronts.length >= 2) out.push({ key: "tanky", why: fronts.length + " frontline champions: " + names(fronts) });
    if (squish.length >= 3 && fronts.length <= 1) out.push({ key: "squishy", why: squish.length + " squishy champions: " + names(squish) });
    if (n >= 3 && ad / n >= 0.6) out.push({ key: "ad", why: "About " + Math.round(ad / n * 100) + "% of their damage is physical" });
    if (n >= 3 && ap / n >= 0.6) out.push({ key: "ap", why: "About " + Math.round(ap / n * 100) + "% of their damage is magic" });
    if (heal.length) out.push({ key: "healing", why: "Strong healing or shields: " + names(heal) });
    if (cc.length >= 3) out.push({ key: "cc", why: cc.length + " champions with heavy crowd control: " + names(cc) });
    return { list: out, ad: ad, ap: ap, fronts: fronts, squish: squish, heal: heal, cc: cc };
  }
  RA.compProfile = profile;
  RA.compSituations = situations;

  var THREAT = {
    Assassin: "Can burst you from out of sight. Ward their path to you and keep a defensive item or Flash ready.",
    Mage: "Big spell damage from range. Dodge their main skill shot, then trade while it's on cooldown.",
    Marksman: "Weak early, deadly late. Punish them before their items come online and reach them in fights.",
    Fighter: "Wins long fights up close. Kite them and don't fight them in a 1v1 when they have their items.",
    Tank: "Starts fights and soaks damage. Don't waste your combo on them; hit whoever is in range safely.",
    Support: "Protects or catches. Watch for their key skill (hook, stun or shield) before you walk forward."
  };

  RA.tools["game-plan"] = {
    title: "Game Plan Builder",
    emoji: "📋",
    summary: "Enter your champion and the enemy team. Get a plan: which items to change, who to watch, and your matchup.",
    intro: "Pick the champion you're playing and the five enemies (you can leave slots empty). We'll read their team, damage and crowd control, and tell you which items to change, who the dangerous enemies are, and how your lane matchup goes.",
    render: function (root, q) {
      q = q || {};
      var guided = sortByName(RA.champs.map(function (c) { return c.id; }));
      var all = sortByName(Object.keys(RA.dd.champions));
      var you = RA.hasGuide(q.you) ? q.you : guided[0];
      var role = q.role;
      var enemies = String(q.e || "").split(",").slice(0, 5);
      while (enemies.length < 5) enemies.push("");
      enemies = enemies.map(function (id) { return RA.dd.champions[id] ? id : ""; });

      function roleOf(id, want) { var c = guideOf(id); return c && c.roles.indexOf(want) >= 0 ? want : (c ? c.roles[0] : "mid"); }

      function draw() {
        role = roleOf(you, role);
        var me = guideOf(you);
        root.innerHTML = '<div class="tool-panel gp-picker">' +
          '<div class="gp-you"><label><span>You play</span><select id="gpYou">' + guided.map(function (id) { return '<option value="' + id + '"' + (id === you ? " selected" : "") + ">" + esc(RA.champName(id)) + "</option>"; }).join("") + "</select></label>" +
          (me.roles.length > 1 ? '<div class="chips">' + me.roles.map(function (r) { return '<button class="chip' + (r === role ? " active" : "") + '" data-role="' + r + '">' + RA.roleNames[r] + "</button>"; }).join("") + "</div>" : "") + "</div>" +
          '<h3 style="margin:16px 0 8px">Enemy team</h3><div class="gp-enemies">' + ORDER.map(function (r, i) {
            return '<label class="' + (r === role ? "gp-lane" : "") + '"><span>' + RA.roleNames[r] + (r === role ? " · your lane" : "") + '</span><select data-slot="' + i + '"><option value="">Not picked yet</option>' +
              all.map(function (id) { return '<option value="' + id + '"' + (id === enemies[i] ? " selected" : "") + ">" + esc(RA.champName(id)) + "</option>"; }).join("") + "</select></label>";
          }).join("") + "</div>" +
          '<div class="btn-row" style="margin-top:12px"><button class="btn ghost small" id="gpClear">Clear enemies</button></div></div>' +
          '<div id="gpResult">' + result() + "</div>";
        root.querySelector("#gpYou").addEventListener("change", function (e) { you = e.target.value; update(); });
        Array.prototype.forEach.call(root.querySelectorAll("[data-role]"), function (b) { b.addEventListener("click", function () { role = b.dataset.role; update(); }); });
        Array.prototype.forEach.call(root.querySelectorAll("[data-slot]"), function (s) { s.addEventListener("change", function () { enemies[Number(s.dataset.slot)] = s.value; update(); }); });
        root.querySelector("#gpClear").addEventListener("click", function () { enemies = ["", "", "", "", ""]; update(); });
      }
      function update() {
        draw();
        var picked = enemies.some(Boolean);
        RA.replaceRoute("tools/game-plan?you=" + you + "&role=" + role + (picked ? "&e=" + enemies.join(",") : ""));
      }

      function result() {
        var ids = enemies.filter(Boolean);
        if (!ids.length) return '<p class="empty">Pick at least one enemy champion to build your plan. Three or more gives the best read of their team.</p>';
        var ps = ids.map(profile), sit = situations(ps), n = ps.length;
        var yn = esc(RA.champName(you)), c = RA.champFor(you, role);
        var adapt = RA.champAdapt[you + ":" + role];
        var adPct = Math.round(sit.ad / n * 100);

        // 1. Their team at a glance
        var glance = '<div class="card"><h3>Their team at a glance</h3>' +
          '<div class="gp-dmg"><span style="width:' + adPct + '%" class="ad">' + (adPct >= 15 ? "Physical " + adPct + "%" : "") + '</span><span style="width:' + (100 - adPct) + '%" class="ap">' + (100 - adPct >= 15 ? "Magic " + (100 - adPct) + "%" : "") + "</span></div>" +
          '<div class="gp-stats"><div><b>' + sit.fronts.length + "</b><span>frontline</span></div><div><b>" + sit.squish.length + "</b><span>squishy</span></div><div><b>" + sit.heal.length + "</b><span>healers</span></div><div><b>" + sit.cc.length + "</b><span>heavy CC</span></div></div>" +
          (n < 3 ? '<p style="color:var(--muted)">Only ' + n + " enem" + (n === 1 ? "y" : "ies") + " picked, so this read is rough.</p>" : "") + "</div>";

        // 2. Item changes for each situation that applies
        var items = sit.list.length ? sit.list.map(function (s) {
          var S = RA.SITUATIONS[s.key], a = adapt && adapt[s.key];
          return '<div class="adapt-sit"><div class="adapt-head"><span aria-hidden="true">' + S.icon + "</span><b>" + esc(S.label) + '</b></div><p class="gp-why">' + esc(s.why) + ".</p>" +
            (a ? (a.items || []).map(function (x) {
              var lk = RA.itemLink(x.item);
              return '<div class="swap"><div class="swap-items">' + (lk ? '<a href="' + lk + '">' : "<span>") + '<img src="' + RA.img.item(x.item) + '" alt="" loading="lazy">' + esc(x.item) + (lk ? "</a>" : "</span>") +
                (x.replaces ? '<span class="swap-instead">instead of <img src="' + RA.img.item(x.replaces) + '" alt="" loading="lazy">' + esc(x.replaces) + "</span>" : "") + "</div><p>" + RA.rich(x.why) + "</p></div>";
            }).join("") + (a.tip ? '<p class="adapt-tip">' + RA.rich(a.tip) + "</p>" : "") : "<p>No item advice for this situation yet.</p>") + "</div>";
        }).join("") : '<p style="margin:0">Their team is balanced, so stick to the standard build. Check the <a href="' + RA.champLink(you, role) + '?tab=build">' + yn + " build</a>.</p>";
        var itemsCard = '<div class="card" style="margin-top:16px"><h3>Change your items</h3>' + (sit.list.length ? '<div class="adapt-grid">' + items + "</div>" : items) + "</div>";

        // 3. Lane matchup
        var laneId = enemies[ORDER.indexOf(role)], lane = "";
        if (laneId) {
          var mv = RA.matchupVerdict(you, role, laneId);
          var badge = { hard: '<span class="badge hard">Tough matchup</span>', easy: '<span class="badge easy">Favorable matchup</span>', none: '<span class="badge">No rating yet</span>' }[mv.verdict];
          lane = '<div class="card" style="margin-top:16px"><h3>Your lane: ' + yn + " vs " + esc(RA.champName(laneId)) + "</h3><p>" + badge + "</p>" +
            (mv.tips[0] ? '<div class="mu-tip"><div class="mu-from">' + mv.tips[0].from + "</div><p>" + mv.tips[0].html + "</p></div>" : "") +
            '<p style="margin-top:12px"><a href="#/tools/matchup?you=' + you + "&role=" + role + "&vs=" + laneId + '">Full matchup →</a></p></div>';
        }

        // 4. Who to watch
        var watch = '<div class="card" style="margin-top:16px"><h3>Who to watch</h3><ul class="gp-watch">' + ps.map(function (p) {
          var flags = [p.front ? "Frontline" : "", p.healing ? "Heals/shields" : "", p.cc ? "Heavy CC" : ""].filter(Boolean);
          return '<li><img src="' + RA.img.champ(p.id) + '" alt="" loading="lazy"><div><b>' + (RA.hasGuide(p.id) ? '<a href="' + RA.champLink(p.id) + '">' + esc(RA.champName(p.id)) + "</a>" : esc(RA.champName(p.id))) + "</b> <span class=\"gp-tags\">" + esc(p.tags.join(" / ")) + (flags.length ? " · " + esc(flags.join(" · ")) : "") + "</span><p>" + esc(THREAT[p.tags[0]] || "") + "</p></div></li>";
        }).join("") + "</ul></div>";

        // 5. Your plan, from the guide
        var pk = RA.champPicks[you + ":" + role] || (RA.champRoles[you + ":" + role] ? null : RA.champPicks[you]);
        var goodInto = [], badInto = [];
        ids.forEach(function (id) {
          var re = new RegExp("\\{\\{champ:\\s*" + id + "\\s*\\}\\}");
          ((pk && pk.into) || []).forEach(function (l) { if (re.test(l) && goodInto.indexOf(l) < 0) goodInto.push(l); });
          ((pk && pk.avoid) || []).forEach(function (l) { if (re.test(l) && badInto.indexOf(l) < 0) badInto.push(l); });
        });
        var plan = '<div class="card" style="margin-top:16px"><h3>Your plan as ' + yn + "</h3>" +
          (goodInto.length ? '<h4 style="color:var(--green)">Good news</h4>' + RA.list(goodInto, "list-good") : "") +
          (badInto.length ? '<h4 style="color:var(--red)">Be careful</h4>' + RA.list(badInto, "list-bad") : "") +
          (c.spikes && c.spikes.length ? "<h4>Your power spikes</h4>" + RA.list(c.spikes.slice(0, 3)) : "") +
          (pk && pk.teamNeeds ? "<p><strong>Your team needs:</strong> <span style=\"color:var(--muted)\">" + RA.rich(pk.teamNeeds) + "</span></p>" : "") +
          '<p><a href="' + RA.champLink(you, role) + '?tab=play">How to play ' + yn + " →</a></p></div>";

        return glance + itemsCard + lane + watch + plan;
      }
      draw();
    }
  };
})();
