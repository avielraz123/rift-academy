/* Matchup lookup: pick your champion and the enemy, get the tips we have for that pair. */
(function () {
  "use strict";
  var RA = window.RA;
  var esc = RA.esc;

  // Advice by the enemy's champion class (Data Dragon tags), for pairs our guides don't cover.
  var CLASS_TIPS = {
    Assassin: {
      name: "assassin",
      tips: [
        "They want to catch you alone and burst you in one combo. Stand near your minions and your team, and ward the paths they use to flank.",
        "Track their key dash or ultimate. When it's on cooldown, that's your window to trade or push.",
        "Defensive items buy you time: {{item:Zhonya's Hourglass}} for mages, {{item:Guardian Angel}} or {{item:Edge of Night}} for marksmen and fighters. One armor item early ({{item:Plated Steelcaps}}) helps against attack damage assassins."
      ]
    },
    Mage: {
      name: "mage",
      tips: [
        "Mages win with poke and big spell combos. Learn their main skill shot, dodge it, then trade while it's on cooldown.",
        "Stand behind your minions so their skill shots hit the wave instead of you.",
        "Magic resist helps: {{item:Mercury's Treads}}, {{item:Maw of Malmortius}} or {{item:Banshee's Veil}}, or a {{item:Doran's Shield}} start if their poke is heavy."
      ]
    },
    Marksman: {
      name: "marksman",
      tips: [
        "Marksmen are weak early and very strong late. Punish them in lane and in skirmishes before they finish their core items.",
        "In teamfights, reach them by going around the frontline, or wait for them to step forward. Don't stand still in their attack range.",
        "Armor and attack-speed counters help late: {{item:Randuin's Omen}}, {{item:Frozen Heart}} or {{item:Thornmail}} on tanks, {{item:Plated Steelcaps}} for anyone."
      ]
    },
    Fighter: {
      name: "fighter",
      tips: [
        "Fighters win long fights up close. Trade from range, then back off before they can stick to you.",
        "Don't take extended fights at low health. They often heal or get stronger the longer the fight goes.",
        "Grievous Wounds cuts their healing: {{item:Executioner's Calling}} (attack damage), {{item:Oblivion Orb}} (ability power) or {{item:Thornmail}} (tanks)."
      ]
    },
    Tank: {
      name: "tank",
      tips: [
        "Tanks are hard to kill and set up fights for their team. In lane, farm safely and use your mobility advantage.",
        "In teamfights, don't spend your whole combo on the tank. Hit whoever you can reach safely, usually their carries.",
        "Penetration and %health damage help late: {{item:Liandry's Torment}} or {{item:Void Staff}} for mages, {{item:Lord Dominik's Regards}} or {{item:Black Cleaver}} for attack damage."
      ]
    },
    Support: {
      name: "support",
      tips: [
        "Against shield and heal supports, burst through before the shield lands or focus the carry they're protecting.",
        "Against hook and catch supports, stand behind minions and don't walk into fog of war without vision.",
        "Grievous Wounds ({{item:Morellonomicon}}, {{item:Mortal Reminder}}, {{item:Oblivion Orb}}) cuts their healing in fights."
      ]
    }
  };

  function an(word) { return (/^[aeiou]/i.test(word) ? "an " : "a ") + word; }
  function sortByName(ids) { return ids.slice().sort(function (a, b) { return RA.champName(a).localeCompare(RA.champName(b)); }); }
  function find(arr, id) { return (arr || []).filter(function (m) { return m.id === id; })[0] || null; }
  function mentions(lines, id) {
    var re = new RegExp("\\{\\{champ:\\s*" + id + "\\s*\\}\\}");
    return (lines || []).filter(function (l) { return re.test(l); });
  }

  RA.tools.matchup = {
    title: "Matchup Lookup",
    emoji: "⚔️",
    summary: "Pick your champion and the enemy. Get lane tips, who's favored and what to build.",
    intro: "Choose the champion you play and the one you're facing. You'll get the tips from our champion guides for that matchup, what the enemy's class means for you, and links to the full guides.",
    render: function (root, q) {
      q = q || {};
      var guided = sortByName(RA.champs.map(function (c) { return c.id; }));
      var all = sortByName(Object.keys(RA.dd.champions));
      var you = RA.hasGuide(q.you) ? q.you : guided[0];
      var role = q.role;
      var vs = RA.dd.champions[q.vs] ? q.vs : "";

      function roleOf(id, want) {
        var c = RA.champs.filter(function (x) { return x.id === id; })[0];
        return c && c.roles.indexOf(want) >= 0 ? want : (c ? c.roles[0] : "mid");
      }

      function draw() {
        role = roleOf(you, role);
        var me = RA.champs.filter(function (x) { return x.id === you; })[0];
        root.innerHTML = '<div class="tool-panel mu-picker">' +
          '<label><span>You play</span><select id="muYou">' + guided.map(function (id) { return '<option value="' + id + '"' + (id === you ? " selected" : "") + ">" + esc(RA.champName(id)) + "</option>"; }).join("") + "</select></label>" +
          (me.roles.length > 1 ? '<div class="chips mu-roles">' + me.roles.map(function (r) { return '<button class="chip' + (r === role ? " active" : "") + '" data-role="' + r + '">' + RA.roleNames[r] + "</button>"; }).join("") + "</div>" : "") +
          '<label><span>Against</span><select id="muVs"><option value="">Choose the enemy champion…</option>' + all.filter(function (id) { return id !== you; }).map(function (id) { return '<option value="' + id + '"' + (id === vs ? " selected" : "") + ">" + esc(RA.champName(id)) + "</option>"; }).join("") + "</select></label>" +
          (vs && RA.hasGuide(vs) ? '<button class="btn ghost" id="muSwap" title="See it from the other side">⇄ Swap sides</button>' : "") +
          "</div>" + '<div id="muResult">' + (vs ? result() : '<p class="empty">Pick the enemy champion to see the matchup.</p>') + "</div>";

        root.querySelector("#muYou").addEventListener("change", function (e) { you = e.target.value; if (vs === you) vs = ""; update(); });
        root.querySelector("#muVs").addEventListener("change", function (e) { vs = e.target.value; update(); });
        Array.prototype.forEach.call(root.querySelectorAll("[data-role]"), function (b) { b.addEventListener("click", function () { role = b.dataset.role; update(); }); });
        var sw = root.querySelector("#muSwap");
        if (sw) sw.addEventListener("click", function () { var t = you; you = vs; vs = t; role = roleOf(you, role); update(); });
      }
      function update() {
        draw();
        RA.replaceRoute("tools/matchup?you=" + you + "&role=" + role + (vs ? "&vs=" + vs : ""));
      }

      function result() {
        var mine = RA.champFor(you, role);
        var yn = esc(RA.champName(you)), en = esc(RA.champName(vs));
        var verdict = null, tips = [];
        // 1. Our own guide's matchup list
        var h = find(mine.matchups && mine.matchups.hard, vs), e = find(mine.matchups && mine.matchups.easy, vs);
        if (h) { verdict = "hard"; tips.push({ from: "From the " + yn + " guide", html: RA.rich(h.tip) }); }
        if (e) { verdict = "easy"; tips.push({ from: "From the " + yn + " guide", html: RA.rich(e.tip) }); }
        // 2. The enemy's guide, seen from their side
        var theirs = RA.hasGuide(vs) ? RA.champFor(vs, roleOf(vs, role)) : null;
        if (theirs) {
          var th = find(theirs.matchups && theirs.matchups.hard, you), te = find(theirs.matchups && theirs.matchups.easy, you);
          if (th) { verdict = verdict || "easy"; tips.push({ from: "From the " + en + " guide (their side: " + yn + " is a tough matchup for them)", html: RA.rich(th.tip) }); }
          if (te) { verdict = verdict || "hard"; tips.push({ from: "From the " + en + " guide (their side: they like this matchup)", html: RA.rich(te.tip) }); }
        }
        // 3. "When to pick" notes that name the enemy
        var pk = RA.champPicks[you + ":" + role] || (RA.champRoles[you + ":" + role] ? null : RA.champPicks[you]);
        var into = mentions(pk && pk.into, vs), avoid = mentions(pk && pk.avoid, vs);
        var head = {
          hard: ['<span class="badge hard">Tough matchup</span>', yn + " is not favored here. Play safe early and look for the windows below."],
          easy: ['<span class="badge easy">Favorable matchup</span>', yn + " is favored here. Use the tips below to press your advantage."],
          none: ['<span class="badge">No rating yet</span>', "Our guides don't rate this pair yet, so it's mostly about skill and the general plan below."]
        }[verdict || (avoid.length ? "hard" : into.length ? "easy" : "none")];

        var tags = (RA.dd.champions[vs][2] || "").split("/");
        var cls = CLASS_TIPS[tags[0]];
        var kit = RA.dd.kits[vs];
        var watch = kit ? kit.spells.map(function (sp, i) {
          return '<li><img src="' + RA.img.spell(sp.img) + '" alt="" loading="lazy"><div><b>' + "QWER".charAt(i) + " · " + esc(sp.name) + "</b>" + (sp.cd ? '<span class="cd">' + esc(sp.cd) + "s cooldown</span>" : "") + "</div></li>";
        }).join("") : "";

        return '<div class="card mu-result">' +
          '<div class="mu-vs"><a href="' + RA.champLink(you, role) + '"><img src="' + RA.img.champ(you) + '" alt="">' + yn + "</a><span>vs</span>" +
            (theirs ? '<a href="' + RA.champLink(vs) + '">' : "<div>") + '<img src="' + RA.img.champ(vs) + '" alt="">' + en + (theirs ? "</a>" : "</div>") + "</div>" +
          '<div class="mu-verdict">' + head[0] + "<p>" + head[1] + "</p></div>" +
          tips.map(function (t) { return '<div class="mu-tip"><div class="mu-from">' + t.from + "</div><p>" + t.html + "</p></div>"; }).join("") +
          (into.length ? '<div class="mu-tip"><div class="mu-from">When to pick ' + yn + ": good into</div>" + RA.list(into, "list-good") + "</div>" : "") +
          (avoid.length ? '<div class="mu-tip"><div class="mu-from">When to pick ' + yn + ": avoid into</div>" + RA.list(avoid, "list-bad") + "</div>" : "") +
          "</div>" +
          (cls ? '<div class="card" style="margin-top:16px"><h3>Playing against ' + an(cls.name) + "</h3>" +
            '<p style="color:var(--muted);margin-top:-4px">' + en + " is " + an(esc(tags.join(" / ").toLowerCase())) + ". General tips for this kind of champion:</p>" + RA.list(cls.tips) + "</div>" : "") +
          (watch ? '<div class="card" style="margin-top:16px"><h3>' + en + "'s abilities to track</h3><p style=\"color:var(--muted);margin-top:-4px\">Cooldowns at rank 1 to max rank. Trade when the big ones are down.</p><ul class=\"mu-kit\">" + watch + "</ul></div>" : "") +
          '<p class="patch-note"><a href="' + RA.champLink(you, role) + '?tab=matchups">All ' + yn + " matchups →</a>" + (theirs ? ' · <a href="' + RA.champLink(vs) + '">' + en + " guide →</a>" : "") + ' · <a href="#/guide/matchups-and-cooldowns">How to play any matchup →</a></p>';
      }
      draw();
    }
  };
})();
