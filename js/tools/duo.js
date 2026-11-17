/* Bot lane duo finder: pick your marksman (or support) and see the best partners. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;

  // Lane styles. Long-standing roles, used when our guides don't list a pair.
  var SUP = {
    engage: { name: "Engage", desc: "starts fights with a big crowd-control spell", ids: ["Leona", "Nautilus", "Alistar", "Rell", "Rakan", "Maokai", "Poppy", "Amumu"] },
    catch: { name: "Catch", desc: "grabs or roots one target at a time", ids: ["Blitzcrank", "Thresh", "Pyke", "Morgana", "Bard", "Neeko"] },
    enchanter: { name: "Enchanter", desc: "heals, shields and speeds up the carry", ids: ["Soraka", "Yuumi", "Nami", "Lulu", "Janna", "Milio", "Sona", "Seraphine", "Karma", "Renata"] },
    warden: { name: "Warden", desc: "stands in front and protects the carry", ids: ["Braum", "Taric", "TahmKench"] },
    poke: { name: "Poke mage", desc: "chips the enemy down from range", ids: ["Lux", "Xerath", "Zyra", "Brand", "Velkoz", "Swain", "Senna", "Zilean", "Hwei"] }
  };
  var ADC = {
    allin: { name: "Lane bully", desc: "wins short, early fights", ids: ["Draven", "Samira", "Kalista", "Lucian", "Nilah", "Tristana", "MissFortune"] },
    hyper: { name: "Scaling carry", desc: "weak early, huge damage late", ids: ["Jinx", "Vayne", "KogMaw", "Twitch", "Aphelios", "Zeri", "Smolder", "Kaisa"] },
    poke: { name: "Long-range poke", desc: "hits from far away and sieges", ids: ["Caitlyn", "Ezreal", "Varus", "Ziggs", "Corki", "Veigar", "Viktor", "Hwei"] },
    utility: { name: "Utility marksman", desc: "slows, roots or reveals for the team", ids: ["Ashe", "Jhin", "Sivir", "Xayah"] }
  };
  // How well each support style fits each marksman style (0-3) and why.
  var FIT = {
    allin: { engage: [3, "Both want to fight early: the support starts the fight and the marksman follows up for the kill."], catch: [3, "Every landed grab or root is a kill for a lane bully."], enchanter: [1, "Safe, but the enchanter can't start the early fights a lane bully wants."], warden: [2, "Solid protection, though less kill pressure."], poke: [1, "Poke slows down the all-ins a lane bully wants."] },
    hyper: { enchanter: [3, "Heals and shields keep the carry alive until they scale, then make them hard to kill late."], warden: [3, "A protector keeps divers off the carry in fights."], engage: [1, "Engage wants early fights the scaling carry isn't ready for."], catch: [2, "Picks help, but a missed hook leaves the carry exposed."], poke: [1, "Little protection for a carry who needs it."] },
    poke: { poke: [3, "Two long-range champions win trades before the enemy can get close."], enchanter: [2, "Sustain and shields keep poke lanes healthy."], catch: [2, "Hooks punish enemies who walk up to dodge poke."], engage: [1, "Engage pulls a poke marksman into fights they'd rather avoid."], warden: [1, "Safe but low pressure."] },
    utility: { engage: [3, "The marksman's slows and roots set up the support's engage (or follow it up)."], catch: [3, "Easy follow-up crowd control on every catch."], enchanter: [2, "Steady and safe."], poke: [2, "Good long-range damage together."], warden: [1, "Safe but passive."] }
  };
  var PLURAL = { "Lane bully": "Lane bullies", "Scaling carry": "Scaling carries", "Long-range poke": "Long-range poke marksmen", "Utility marksman": "Utility marksmen" };
  function styleOf(id, table) { for (var k in table) if (table[k].ids.indexOf(id) >= 0) return k; return null; }
  function guideOf(id) { return RA.champs.filter(function (c) { return c.id === id; })[0] || null; }
  function partnersFromGuides(id, role) {
    var out = [];
    function push(pid, why, from) { if (RA.dd.champions[pid] && pid !== id && !out.some(function (x) { return x.id === pid; })) out.push({ id: pid, why: why, from: from }); }
    // 1. Our own guide for this champion in this role
    var g = guideOf(id);
    if (g && (g.roles.indexOf(role) >= 0)) {
      var c = RA.champFor(id, role);
      (c.supports || []).forEach(function (s) { push(s.id, s.why, RA.champName(id) + " guide"); });
      var pk = RA.champPicks[id + ":" + role] || (RA.champRoles[id + ":" + role] ? null : RA.champPicks[id]);
      ((pk && pk.teammates) || []).forEach(function (t) {
        var tags = String((RA.dd.champions[t.id] || [])[2] || "");
        if (role === "bot" ? /Support|Mage/.test(tags) : /Marksman/.test(tags)) push(t.id, t.why, RA.champName(id) + " guide");
      });
    }
    // 2. Other guides that list this champion as their partner
    var other = role === "bot" ? "support" : "bot";
    Object.keys(RA.builds).forEach(function (key) {
      var p = key.split(":");
      if (p[1] !== other || p[0] === id) return;
      var c = RA.champFor(p[0], other);
      (c && c.supports || []).forEach(function (s) {
        if (s.id === id) push(p[0], "The " + RA.champName(p[0]) + " guide picks " + RA.champName(id) + " as a top partner: “" + s.why + "”", RA.champName(p[0]) + " guide");
      });
    });
    return out;
  }

  RA.tools.duo = {
    title: "Bot Lane Duo Finder",
    emoji: "🤝",
    summary: "Pick your marksman or support and find the partners that work best with it, and why.",
    intro: "Bot lane is played in pairs, and some pairs are much stronger together. Pick the champion you play in bot lane or support. You'll see the partners our guides recommend, plus good matches by lane style.",
    render: function (root, q) {
      q = q || {};
      var role = q.role === "support" ? "support" : "bot";
      function pool(r) {
        var table = r === "bot" ? ADC : SUP, ids = [];
        Object.keys(table).forEach(function (k) { table[k].ids.forEach(function (id) { if (RA.dd.champions[id] && ids.indexOf(id) < 0) ids.push(id); }); });
        Object.keys(RA.builds).forEach(function (key) { var p = key.split(":"); if (p[1] === r && ids.indexOf(p[0]) < 0) ids.push(p[0]); });
        return ids.sort(function (a, b) { return RA.champName(a).localeCompare(RA.champName(b)); });
      }
      var champ = q.champ && RA.dd.champions[q.champ] ? q.champ : (role === "bot" ? "Jinx" : "Thresh");

      function draw() {
        var ids = pool(role);
        if (ids.indexOf(champ) < 0) champ = ids[0];
        root.innerHTML = '<div class="tool-panel duo-picker"><div class="chips">' +
          '<button class="chip' + (role === "bot" ? " active" : "") + '" data-role="bot">I play marksman (bot)</button><button class="chip' + (role === "support" ? " active" : "") + '" data-role="support">I play support</button></div>' +
          '<label><span>Your champion</span><select id="duoChamp">' + ids.map(function (id) { return '<option value="' + id + '"' + (id === champ ? " selected" : "") + ">" + esc(RA.champName(id)) + "</option>"; }).join("") + "</select></label></div>" +
          '<div id="duoResult">' + result() + "</div>";
        Array.prototype.forEach.call(root.querySelectorAll("[data-role]"), function (b) { b.addEventListener("click", function () { role = b.dataset.role; champ = role === "bot" ? "Jinx" : "Thresh"; update(); }); });
        root.querySelector("#duoChamp").addEventListener("change", function (e) { champ = e.target.value; update(); });
      }
      function update() { draw(); RA.replaceRoute("tools/duo?role=" + role + "&champ=" + champ); }

      function partnerCard(p, badge) {
        var hasG = RA.hasGuide(p.id);
        return '<div class="matchup"><img src="' + RA.img.champ(p.id) + '" alt="" loading="lazy"><div><b>' + (hasG ? '<a href="' + RA.champLink(p.id, role === "bot" ? "support" : "bot") + '">' + esc(RA.champName(p.id)) + "</a>" : esc(RA.champName(p.id))) +
          (badge ? ' <small class="mu-wr">' + esc(badge) + "</small>" : "") + "</b><span>" + RA.rich(p.why) + "</span></div></div>";
      }
      // Lane-style matches grouped by style: the reason once, then the champions.
      function groups(list) {
        var by = {}, order = [];
        list.forEach(function (p) { if (!by[p.style]) { by[p.style] = { why: p.why, ids: [] }; order.push(p.style); } by[p.style].ids.push(p.id); });
        return order.map(function (st) {
          return '<div class="duo-style"><b>' + esc(role === "bot" ? st + " supports" : (PLURAL[st] || st)) + "</b><p>" + esc(by[st].why) + '</p><div class="duo-chips">' + by[st].ids.map(function (id) {
            var other = role === "bot" ? "support" : "bot", inner = '<img src="' + RA.img.champ(id) + '" alt="" loading="lazy">' + esc(RA.champName(id));
            return RA.hasGuide(id) ? '<a class="ic" href="' + RA.champLink(id, other) + '">' + inner + "</a>" : '<span class="ic">' + inner + "</span>";
          }).join(" ") + "</div></div>";
        }).join("");
      }
      function result() {
        var mine = role === "bot" ? ADC : SUP, theirs = role === "bot" ? SUP : ADC;
        var myStyle = styleOf(champ, mine);
        var fromGuides = partnersFromGuides(champ, role);
        var listed = fromGuides.map(function (p) { return p.id; });
        // Style matches, best fit first
        var styled = [];
        if (myStyle) {
          Object.keys(theirs).forEach(function (k) {
            var fit = role === "bot" ? FIT[myStyle][k] : FIT[k][myStyle];
            if (!fit || fit[0] < 3) return;
            theirs[k].ids.forEach(function (id) { if (RA.dd.champions[id] && listed.indexOf(id) < 0 && id !== champ) styled.push({ id: id, why: fit[1], style: theirs[k].name }); });
          });
        }
        var cn = esc(RA.champName(champ));
        return '<div class="card duo-me"><img src="' + RA.img.champ(champ) + '" alt=""><div><h3>' + cn + "</h3>" +
            (myStyle ? '<p><span class="badge gold">' + esc(mine[myStyle].name) + "</span> " + esc(mine[myStyle].desc) + ".</p>" : '<p style="color:var(--muted)">Not a common ' + (role === "bot" ? "marksman" : "support") + " pick, so only our guides' recommendations are shown.</p>") +
            (RA.hasGuide(champ) ? '<a href="' + RA.champLink(champ, role) + '">' + cn + " guide →</a>" : "") + "</div></div>" +
          '<div class="card" style="margin-top:16px"><h3>Recommended in our guides</h3>' + (fromGuides.length ? fromGuides.map(function (p) { return partnerCard(p, "from the " + p.from); }).join("") : '<p style="color:var(--muted)">Our guides don\'t list partners for ' + cn + " yet.</p>") + "</div>" +
          (styled.length ? '<div class="card" style="margin-top:16px"><h3>Also great by lane style</h3>' + groups(styled) + "</div>" : "") +
          '<div class="card" style="margin-top:16px"><h3>How lane styles fit</h3><p style="color:var(--muted);margin-top:-4px">The general rule behind these picks:</p>' +
            RA.list(["<strong>Lane bullies</strong> (Draven, Samira, Lucian) + <strong>engage or catch</strong> supports (Leona, Nautilus, Blitzcrank): fight early and often.",
              "<strong>Scaling carries</strong> (Jinx, Vayne, Kog'Maw) + <strong>enchanters or wardens</strong> (Lulu, Milio, Braum): survive lane, then dominate late.",
              "<strong>Long-range poke</strong> (Caitlyn, Ezreal, Varus) + <strong>poke mages</strong> (Lux, Xerath): win trades from a distance and take towers.",
              "<strong>Utility marksmen</strong> (Ashe, Jhin) + <strong>engage</strong>: their slows and roots chain with the support's crowd control."]) + "</div>" +
          '<p class="patch-note">Playing with a friend? Look up your lane matchup in the <a href="#/tools/matchup">Matchup Lookup</a> and plan your build with the <a href="#/tools/game-plan">Game Plan Builder</a>.</p>';
      }
      draw();
    }
  };
})();
