/* Rift Academy — app shell: helpers, router, pages */
(function () {
  "use strict";
  var RA = window.RA = window.RA || {};
  RA.guides = RA.guides || [];
  RA.roles = RA.roles || [];
  RA.champs = RA.champs || [];
  RA.builds = RA.builds || {};
  RA.glossary = RA.glossary || [];
  RA.tools = RA.tools || {};
  RA.patch = RA.patch || {};

  var DD = RA.dd;
  var CDN = "https://ddragon.leagueoflegends.com/cdn/";
  var LEVELS = ["beginner", "intermediate", "advanced"];
  var LEVEL_NAMES = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };
  var CATEGORY_NAMES = { basics: "Basics", laning: "Laning", macro: "Macro", vision: "Vision", teamfighting: "Teamfighting", draft: "Champion picks", mental: "Mental" };
  RA.champPicks = RA.champPicks || {};
  RA.draftScenarios = RA.draftScenarios || [];
  var ROLE_NAMES = { top: "Top", jungle: "Jungle", mid: "Mid", bot: "Bot", support: "Support" };

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  var img = {
    champ: function (id) { return CDN + DD.version + "/img/champion/" + id + ".png"; },
    splash: function (id, n) { return CDN + "img/champion/splash/" + id + "_" + (n || 0) + ".jpg"; },
    centered: function (id, n) { return CDN + "img/champion/centered/" + id + "_" + (n || 0) + ".jpg"; },
    spell: function (file) { return CDN + DD.version + "/img/spell/" + file; },
    passive: function (file) { return CDN + DD.version + "/img/passive/" + file; },
    item: function (name) { var it = DD.items[name]; return it ? CDN + DD.version + "/img/item/" + it[0] + ".png" : ""; },
    rune: function (name) { var r = DD.runes[name]; return r ? CDN + "img/" + r[0] : ""; },
    tree: function (name) { var t = DD.trees[name]; return t ? CDN + "img/" + t : ""; },
    summoner: function (name) { var s = DD.summoners[name]; return s ? CDN + DD.version + "/img/spell/" + s[0] : ""; }
  };
  RA.img = img;

  function champName(id) { var c = DD.champions[id]; return c ? c[0] : id; }
  function champTitle(id) { var c = DD.champions[id]; return c ? c[1] : ""; }
  function hasGuide(id) { return !!byId(RA.champs, id); }
  function champLink(id, role) { return "#/champion/" + id + (role ? "?role=" + role : ""); }

  function iconChamp(id) {
    var inner = '<img src="' + img.champ(id) + '" alt="" loading="lazy">' + esc(champName(id));
    return hasGuide(id) ? '<a class="ic" href="' + champLink(id) + '">' + inner + "</a>" : '<span class="ic">' + inner + "</span>";
  }
  function iconItem(name) {
    var it = DD.items[name];
    if (!it) return "<strong>" + esc(name) + "</strong>";
    return '<span class="ic" title="' + esc(name + " (" + it[1] + "g): " + it[2]) + '"><img src="' + img.item(name) + '" alt="" loading="lazy">' + esc(name) + "</span>";
  }
  function iconRune(name) {
    var r = DD.runes[name];
    if (!r) return "<strong>" + esc(name) + "</strong>";
    return '<span class="ic rune" title="' + esc(r[2]) + '"><img src="' + img.rune(name) + '" alt="" loading="lazy">' + esc(name) + "</span>";
  }
  function iconSummoner(name) {
    if (!DD.summoners[name]) return "<strong>" + esc(name) + "</strong>";
    return '<span class="ic" title="' + esc(DD.summoners[name][1]) + '"><img src="' + img.summoner(name) + '" alt="" loading="lazy">' + esc(name) + "</span>";
  }

  /* Expand {{token:value}} helpers inside trusted content HTML. */
  function rich(html) {
    if (!html) return "";
    // Inline tokens first, so they can sit inside {{tip:…}} / {{warn:…}} boxes; boxes second.
    return expand(expand(String(html), /\{\{(champ|item|rune|spell|guide|role):([^}]+)\}\}/g), /\{\{(\w+):([^}]+)\}\}/g);
  }
  function expand(html, re) {
    return html.replace(re, function (m, kind, val) {
      val = val.trim();
      switch (kind) {
        case "champ": return iconChamp(val);
        case "item": return iconItem(val);
        case "rune": return iconRune(val);
        case "spell": return iconSummoner(val);
        case "guide":
          var g = byId(RA.guides, val);
          return g ? '<a href="#/guide/' + g.id + '">' + esc(g.title) + "</a>" : esc(val);
        case "role":
          var r = byId(RA.roles, val);
          return r ? '<a href="#/role/' + r.id + '">' + esc(r.name) + "</a>" : esc(val);
        case "tip": return '<div class="callout"><strong class="label">Pro tip</strong>' + val + "</div>";
        case "warn": return '<div class="callout warn"><strong class="label">Common mistake</strong>' + val + "</div>";
        default: return m;
      }
    });
  }
  RA.rich = rich;
  RA.esc = esc;
  RA.champName = champName;

  function levelBadge(level) { return '<span class="badge ' + level + '">' + LEVEL_NAMES[level] + "</span>"; }
  function diffBadge(d) { return d ? '<span class="badge ' + slug(d) + '">' + esc(d) + "</span>" : ""; }
  function list(items, cls) {
    if (!items || !items.length) return "";
    return '<ul class="' + (cls || "") + '">' + items.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul>";
  }
  function patchNo() { return RA.patch.number || "?"; }

  /* ---------- router ---------- */
  var routes = [];
  function route(pattern, fn) {
    var keys = [];
    var re = new RegExp("^" + pattern.replace(/:(\w+)/g, function (m, k) { keys.push(k); return "([^/]+)"; }) + "$");
    routes.push({ re: re, keys: keys, fn: fn });
  }
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, "");
    var q = {};
    var qi = h.indexOf("?");
    if (qi >= 0) {
      h.slice(qi + 1).split("&").forEach(function (p) {
        var kv = p.split("=");
        if (kv[0]) q[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1] || "").replace(/\+/g, " "));
      });
      h = h.slice(0, qi);
    }
    return { path: h.replace(/\/$/, ""), query: q };
  }
  var cleanup = null;
  function render() {
    if (cleanup) { try { cleanup(); } catch (e) { console.error(e); } cleanup = null; }
    var loc = parseHash();
    var app = $("#app");
    var found = false;
    for (var i = 0; i < routes.length; i++) {
      var m = loc.path.match(routes[i].re);
      if (m) {
        var params = {};
        routes[i].keys.forEach(function (k, j) { params[k] = decodeURIComponent(m[j + 1]); });
        found = true;
        var res = routes[i].fn(app, params, loc.query);
        if (typeof res === "function") cleanup = res;
        break;
      }
    }
    if (!found) notFound(app);
    var top = loc.path.split("/")[0];
    var navKey = { guide: "guides", role: "roles", champion: "champions" }[top] || top;
    $all(".main-nav a").forEach(function (a) { a.classList.toggle("active", a.dataset.nav === navKey); });
    $("#mainNav").classList.remove("open");
    $("#menuBtn").setAttribute("aria-expanded", "false");
    if (!loc.query.keepScroll) window.scrollTo(0, 0);
  }
  RA.setTitle = function (t) { document.title = t ? t + " · Rift Academy" : "Rift Academy: League of Legends Guides"; };
  function notFound(app) {
    RA.setTitle("Not found");
    app.innerHTML = '<div class="empty"><h1>Page not found</h1><p>That page doesn\'t exist. <a href="#/">Back to the home page</a></p></div>';
  }

  /* ---------- home ---------- */
  route("", function (app) {
    RA.setTitle("");
    var featured = ["Aurora", "Draven", "Veigar", "Caitlyn", "Ziggs"].filter(hasGuide);
    var heroChamp = featured[Math.floor(Math.random() * featured.length)] || "Aurora";
    var paths = LEVELS.map(function (lv) {
      var gs = RA.guides.filter(function (g) { return g.level === lv; });
      var color = "var(--" + lv + ")";
      var blurb = {
        beginner: "New to League? Learn how a game works, how to farm, and how to stay alive.",
        intermediate: "Know the basics? Learn wave management, trading, recalls and objectives.",
        advanced: "Ready to climb? Macro, vision control, win conditions and the mental game."
      }[lv];
      return '<div class="card path-card" style="--c:' + color + '"><h3>' + LEVEL_NAMES[lv] + "</h3><p>" + blurb + "</p><ol>" +
        gs.slice(0, 5).map(function (g) { return '<li><a href="#/guide/' + g.id + '">' + esc(g.title) + "</a></li>"; }).join("") +
        '</ol><p style="margin-top:12px"><a href="#/guides?level=' + lv + '">All ' + gs.length + " " + lv + " guides →</a></p></div>";
    }).join("");

    var roleCards = RA.roles.map(function (r) {
      return '<a class="card" href="#/role/' + r.id + '"><div class="meta">' + diffBadge(r.difficulty) + "</div><h3>" + esc(r.name) + "</h3><p>" + esc(r.tagline) + "</p></a>";
    }).join("");

    var champCards = featured.map(champCard).join("");
    var tools = Object.keys(RA.tools).map(function (k) { return toolCard(k); }).join("");

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-bg" style="background-image:url(' + img.splash(heroChamp) + ')"></div>' +
        '<div class="patch-pill">● Updated for patch ' + esc(patchNo()) + "</div>" +
        "<h1>Learn League of Legends, <em>one lesson at a time</em></h1>" +
        "<p>Clear guides for every level, from your first game to climbing ranked. Role guides, mid and bot champion guides with current builds, and tools to practice.</p>" +
        '<div class="btn-row"><a class="btn" href="#/guides?level=beginner">I\'m new: start here</a><a class="btn ghost" href="#/tools/role-picker">Find my role</a></div>' +
      "</section>" +
      '<section class="section"><div class="section-head"><h2>Pick your level</h2><a href="#/guides">All guides →</a></div><div class="grid cols-3">' + paths + "</div></section>" +
      (RA.guides.some(function (g) { return g.category === "draft"; }) ?
        '<section class="section"><div class="section-head"><h2>Champion picks</h2><a href="#/tools/draft-practice">Practice drafting →</a></div>' +
        '<p style="color:var(--muted);margin-top:-6px">Which champion should you pick against the enemy team? Learn champ select, counter-picking and team building.</p>' +
        '<div class="grid cols-4">' + RA.guides.filter(function (g) { return g.category === "draft"; }).map(guideCard).join("") + "</div></section>" : "") +
      '<section class="section"><div class="section-head"><h2>Role guides</h2><a href="#/roles">All roles →</a></div><div class="grid cols-5">' + roleCards + "</div></section>" +
      '<section class="section"><div class="section-head"><h2>Featured champions</h2><a href="#/champions">All champion guides →</a></div><div class="grid cols-5">' + champCards + "</div></section>" +
      '<section class="section"><div class="section-head"><h2>Practice tools</h2><a href="#/tools">All tools →</a></div><div class="grid cols-4">' + tools + "</div></section>";
  });

  /* ---------- guides ---------- */
  function guideCard(g) {
    return '<a class="card" href="#/guide/' + g.id + '"><div class="meta">' + levelBadge(g.level) +
      '<span class="badge">' + esc(CATEGORY_NAMES[g.category] || g.category) + "</span>" +
      '<span class="badge">' + g.minutes + " min</span></div><h3>" + esc(g.title) + "</h3><p>" + esc(g.summary) + "</p></a>";
  }
  route("guides", function (app, p, q) {
    RA.setTitle("Guides");
    var level = q.level || "all";
    var cat = q.cat || "all";
    var gs = RA.guides.filter(function (g) { return (level === "all" || g.level === level) && (cat === "all" || g.category === cat); });
    function chip(key, val, label, cur) {
      var qs = { level: level, cat: cat };
      qs[key] = val;
      var href = "#/guides?" + Object.keys(qs).filter(function (k) { return qs[k] !== "all"; }).map(function (k) { return k + "=" + qs[k]; }).join("&");
      return '<a class="chip' + (cur === val ? " active" : "") + '" href="' + href + '">' + label + "</a>";
    }
    var cats = Object.keys(CATEGORY_NAMES).filter(function (c) { return RA.guides.some(function (g) { return g.category === c; }); });
    app.innerHTML =
      '<div class="page-head"><h1>Guides</h1><p>Lessons that stay useful from patch to patch. Start with the beginner guides and work your way up, or jump to the topic you need.</p></div>' +
      '<div class="chips">' + chip("level", "all", "All levels", level) + LEVELS.map(function (l) { return chip("level", l, LEVEL_NAMES[l], level); }).join("") + "</div>" +
      '<div class="chips">' + chip("cat", "all", "All topics", cat) + cats.map(function (c) { return chip("cat", c, CATEGORY_NAMES[c], cat); }).join("") + "</div>" +
      (gs.length ? LEVELS.map(function (l) {
        var sub = gs.filter(function (g) { return g.level === l; });
        if (!sub.length) return "";
        return '<h2 class="letter-head">' + LEVEL_NAMES[l] + '</h2><div class="grid cols-3">' + sub.map(guideCard).join("") + "</div>";
      }).join("") : '<p class="empty">No guides match these filters.</p>');
  });

  function articleBody(sections) {
    return sections.map(function (s) {
      return '<h2 id="s-' + slug(s.h) + '">' + esc(s.h) + "</h2>" + rich(s.html);
    }).join("");
  }
  function toc(sections, extra) {
    return '<aside class="toc"><h4>On this page</h4>' + sections.map(function (s) {
      return '<a href="#s-' + slug(s.h) + '" data-anchor>' + esc(s.h) + "</a>";
    }).join("") + (extra || "") + "</aside>";
  }
  function wireAnchors(app) {
    $all("a[data-anchor]", app).forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var t = document.getElementById(a.getAttribute("href").slice(1));
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
  function miniQuiz(questions, sourceLabel) {
    if (!questions || !questions.length) return "";
    return '<section class="section"><h2 id="s-check">Check yourself</h2><div class="tool-panel" data-miniquiz></div></section>';
  }
  function wireMiniQuiz(app, questions) {
    var el = $("[data-miniquiz]", app);
    if (el && RA.mountQuiz) RA.mountQuiz(el, questions.map(function (x) { return x; }), { compact: true });
  }

  route("guide/:id", function (app, p) {
    var g = byId(RA.guides, p.id);
    if (!g) return notFound(app);
    RA.setTitle(g.title);
    var idx = RA.guides.filter(function (x) { return x.level === g.level; });
    var pos = idx.indexOf(g);
    var next = idx[pos + 1];
    var related = (g.related || []).map(function (id) { return byId(RA.guides, id); }).filter(Boolean);
    app.innerHTML =
      '<div class="crumbs"><a href="#/guides">Guides</a> › <a href="#/guides?level=' + g.level + '">' + LEVEL_NAMES[g.level] + "</a></div>" +
      '<div class="article-layout"><article class="prose">' +
        '<div class="meta" style="display:flex;gap:8px;margin-bottom:10px">' + levelBadge(g.level) + '<span class="badge">' + esc(CATEGORY_NAMES[g.category] || "") + '</span><span class="badge">' + g.minutes + " min read</span></div>" +
        "<h1>" + esc(g.title) + '</h1><p style="color:var(--muted);font-size:1.12rem">' + esc(g.summary) + "</p>" +
        articleBody(g.sections) +
        (g.takeaways ? '<div class="takeaways"><h3>Key takeaways</h3>' + list(g.takeaways) + "</div>" : "") +
        miniQuiz(g.quiz) +
        (next ? '<p style="margin-top:2em"><a class="btn" href="#/guide/' + next.id + '">Next: ' + esc(next.title) + " →</a></p>" : "") +
        (related.length ? '<section class="section"><h2>Related guides</h2><div class="grid cols-2">' + related.map(guideCard).join("") + "</div></section>" : "") +
      "</article>" + toc(g.sections, g.quiz ? '<a href="#s-check" data-anchor>Check yourself</a>' : "") + "</div>";
    wireAnchors(app);
    if (g.quiz) wireMiniQuiz(app, g.quiz);
  });

  /* ---------- roles ---------- */
  route("roles", function (app) {
    RA.setTitle("Roles");
    app.innerHTML =
      '<div class="page-head"><h1>Role guides</h1><p>Every team has five roles. Each guide explains what the role does, how to play it from early to late game, beginner-friendly champions, and the mistakes to avoid. Not sure which suits you? Try the <a href="#/tools/role-picker">role picker</a>.</p></div>' +
      '<div class="grid cols-2">' + RA.roles.map(function (r) {
        var champs = (r.starterChamps || []).slice(0, 5).map(function (c) { return '<img src="' + img.champ(c.id) + '" alt="' + esc(champName(c.id)) + '" title="' + esc(champName(c.id)) + '" style="width:36px;height:36px;border-radius:8px" loading="lazy">'; }).join(" ");
        return '<a class="card" href="#/role/' + r.id + '"><div class="meta">' + diffBadge(r.difficulty) + "</div><h3>" + esc(r.name) + '</h3><p style="margin-bottom:12px">' + esc(r.summary) + '</p><div style="display:flex;gap:6px">' + champs + "</div></a>";
      }).join("") + "</div>";
  });

  route("role/:id", function (app, p) {
    var r = byId(RA.roles, p.id);
    if (!r) return notFound(app);
    RA.setTitle(r.name + " guide");
    var guided = RA.champs.filter(function (c) { return c.roles.indexOf(r.id) >= 0; });
    var sections = [{ h: "What this role does", html: "<p>" + esc(r.summary) + "</p>" + list(r.responsibilities) }].concat(r.sections);
    var champs = '<div class="grid cols-2" style="margin-bottom:1em">' + (r.starterChamps || []).map(function (c) {
      return '<div class="matchup"><img src="' + img.champ(c.id) + '" alt="" loading="lazy"><div><b>' + (hasGuide(c.id) ? '<a href="' + champLink(c.id, r.id) + '">' + esc(champName(c.id)) + "</a>" : esc(champName(c.id))) + "</b><span>" + rich(c.why) + "</span></div></div>";
    }).join("") + "</div>";
    sections.push({ h: "Beginner-friendly champions", html: champs + (guided.length ? '<p>We also have full guides for ' + guided.length + ' ' + esc(r.name.toLowerCase()) + ' champions. <a href="#/champions?role=' + r.id + '">See them all →</a></p>' : "") });
    sections.push({ h: "Common mistakes", html: list(r.mistakes, "list-bad") });
    app.innerHTML =
      '<div class="crumbs"><a href="#/roles">Roles</a></div>' +
      '<div class="article-layout"><article class="prose">' +
        '<div style="display:flex;gap:8px;margin-bottom:10px">' + diffBadge(r.difficulty) + '<span class="badge">Role guide</span></div>' +
        "<h1>" + esc(r.name) + '</h1><p style="color:var(--muted);font-size:1.12rem">' + esc(r.tagline) + "</p>" +
        (r.youLikeThisIf ? '<div class="takeaways" style="margin-top:0"><h3>You\'ll enjoy this role if…</h3>' + list(r.youLikeThisIf) + "</div>" : "") +
        articleBody(sections) + miniQuiz(r.quiz) +
      "</article>" + toc(sections, r.quiz ? '<a href="#s-check" data-anchor>Check yourself</a>' : "") + "</div>";
    wireAnchors(app);
    if (r.quiz) wireMiniQuiz(app, r.quiz);
  });

  /* ---------- champions ---------- */
  function champCard(id, role) {
    var c = typeof id === "string" ? byId(RA.champs, id) : id;
    if (!c) return "";
    var b = RA.builds[c.id + ":" + (role || c.roles[0])];
    return '<a class="card champ-card" href="' + champLink(c.id, role) + '">' +
      '<div class="art" style="background-image:url(' + img.centered(c.id) + ')"></div>' +
      '<div class="body"><div style="display:flex;justify-content:space-between;align-items:end;gap:8px"><h3>' + esc(champName(c.id)) + "</h3>" +
      (b && b.tier ? '<span class="tier ' + b.tier.charAt(0) + '" title="Tier this patch">' + esc(b.tier.charAt(0)) + "</span>" : "") +
      '</div><div class="sub">' + esc(c.style) + '</div><div class="meta">' + diffBadge(c.difficulty) +
      c.roles.map(function (r) { return '<span class="badge">' + ROLE_NAMES[r] + "</span>"; }).join("") + "</div></div></a>";
  }
  route("champions", function (app, p, q) {
    RA.setTitle("Champion guides");
    var role = q.role || "all";
    var diff = q.diff || "all";
    function chip(key, val, label) {
      var qs = { role: role, diff: diff }; qs[key] = val;
      var href = "#/champions?" + Object.keys(qs).filter(function (k) { return qs[k] !== "all"; }).map(function (k) { return k + "=" + qs[k]; }).join("&");
      return '<a class="chip' + ((key === "role" ? role : diff) === val ? " active" : "") + '" href="' + href + '">' + label + "</a>";
    }
    var cs = RA.champs.filter(function (c) {
      return (role === "all" || c.roles.indexOf(role) >= 0) && (diff === "all" || c.difficulty === diff);
    }).sort(function (a, b) { return champName(a.id).localeCompare(champName(b.id)); });
    app.innerHTML =
      '<div class="page-head"><h1>Champion guides</h1><p>In-depth guides for mid and bot lane champions: how each ability works in practice, combos, power spikes, how to play every phase of the game, matchups, and builds for patch ' + esc(patchNo()) + ".</p></div>" +
      '<div class="chips">' + chip("role", "all", "All") + chip("role", "mid", "Mid lane") + chip("role", "bot", "Bot lane") + "</div>" +
      '<div class="chips">' + chip("diff", "all", "Any difficulty") + chip("diff", "Easy", "Easy") + chip("diff", "Medium", "Medium") + chip("diff", "Hard", "Hard") + "</div>" +
      '<div style="margin-bottom:18px"><input type="text" id="champFilter" placeholder="Filter by name…" style="width:100%;max-width:320px"></div>' +
      (cs.length ? '<div class="grid cols-4" id="champGrid">' + cs.map(function (c) { return champCard(c, role !== "all" ? role : null); }).join("") + "</div>" : '<p class="empty">No champions match.</p>');
    var f = $("#champFilter");
    if (f) f.addEventListener("input", function () {
      var v = f.value.toLowerCase();
      $all("#champGrid .champ-card").forEach(function (el) { el.style.display = el.textContent.toLowerCase().indexOf(v) >= 0 ? "" : "none"; });
    });
  });

  function buildHtml(c, role) {
    var b = RA.builds[c.id + ":" + role];
    if (!b) return '<p class="empty">Build data for this patch is coming soon.</p>';
    var kit = DD.kits[c.id];
    var slot = function (name, kind, cls) {
      var src = kind === "rune" ? img.rune(name) : kind === "sum" ? img.summoner(name) : img.item(name);
      return '<div class="slot ' + (cls || "") + '"><img src="' + src + '" alt="" loading="lazy">' + esc(name) + "</div>";
    };
    var r = b.runes || {};
    var shards = (r.shards || []).map(function (s) { return '<span class="badge">' + esc(s) + "</span>"; }).join(" ");
    var keys = { Q: 0, W: 1, E: 2, R: 3 };
    var maxOrder = String(b.skillMax || "").split(/\s*>\s*/).filter(Boolean);
    var skills = maxOrder.map(function (k, i) {
      var sp = kit && kit.spells[keys[k.trim().charAt(0)]];
      return (i ? '<span class="arrow" style="margin:0">›</span>' : "") + '<div class="sk">' + (sp ? '<img src="' + img.spell(sp.img) + '" alt="" loading="lazy">' : "") + esc(k) + "</div>";
    }).join("");
    return '<div class="patch-pill" style="margin-bottom:16px">Patch ' + esc(RA.patch.number || "") + (b.tier ? " · Tier " + esc(b.tier) : "") + (b.winRate ? " · Win rate " + esc(b.winRate) : "") + "</div>" +
      '<div class="build-grid">' +
        '<div class="card"><h3>Runes</h3>' +
          '<div class="rune-tree"><img src="' + img.tree(r.primaryTree) + '" alt="">' + esc(r.primaryTree) + "</div>" +
          '<div class="slot-row" style="margin-bottom:14px">' + slot(r.keystone, "rune", "rune keystone") + (r.primary || []).map(function (x) { return slot(x, "rune", "rune"); }).join("") + "</div>" +
          '<div class="rune-tree"><img src="' + img.tree(r.secondaryTree) + '" alt="">' + esc(r.secondaryTree) + "</div>" +
          '<div class="slot-row" style="margin-bottom:14px">' + (r.secondary || []).map(function (x) { return slot(x, "rune", "rune"); }).join("") + "</div>" +
          (shards ? '<div style="font-size:.85rem;color:var(--muted)">Stat shards: ' + shards + "</div>" : "") +
          (b.altKeystone && b.altKeystone.keystone ? '<p class="patch-note">Alternative: ' + iconRune(b.altKeystone.keystone) + " " + esc(b.altKeystone.when) + "</p>" : "") +
        "</div>" +
        '<div class="card"><h3>Summoner spells</h3><div class="slot-row" style="margin-bottom:18px">' + (b.summoners || []).map(function (s) { return slot(s, "sum"); }).join("") + "</div>" +
          '<h3>Skill order</h3><p style="font-size:.9rem;color:var(--muted)">First three levels: <strong style="color:var(--text)">' + esc(b.firstThree) + "</strong>. Put points in your ultimate (R) whenever you can (levels 6, 11, 16), then max in this order:</p>" +
          '<div class="skill-order">' + skills + "</div></div>" +
        '<div class="card" style="grid-column:1/-1"><h3>Items</h3>' +
          '<div class="slot-row">' +
            '<div><div style="font-size:.8rem;color:var(--faint);margin-bottom:6px">START</div><div class="slot-row">' + (b.starter || []).map(function (x) { return slot(x); }).join("") + "</div></div>" +
            '<div style="width:18px"></div>' +
            '<div><div style="font-size:.8rem;color:var(--faint);margin-bottom:6px">CORE (in order)</div><div class="slot-row">' + (b.core || []).map(function (x, i) { return (i ? '<span class="arrow">›</span>' : "") + slot(x); }).join("") + "</div></div>" +
            '<div style="width:18px"></div>' +
            '<div><div style="font-size:.8rem;color:var(--faint);margin-bottom:6px">BOOTS</div><div class="slot-row">' + (b.boots ? slot(b.boots) : "") + "</div></div>" +
          "</div>" +
          (b.situational && b.situational.length ? '<h3 style="margin-top:18px">Situational items</h3><ul class="sit-list">' + b.situational.map(function (s) {
            return '<li><img src="' + img.item(s.item) + '" alt="" loading="lazy"><div><b>' + esc(s.item) + "</b><br><span>" + esc(s.when) + "</span></div></li>";
          }).join("") + "</ul>" : "") +
        "</div>" +
      "</div>" +
      (b.note ? '<p class="patch-note">📝 ' + esc(b.note) + "</p>" : "") +
      '<p class="patch-note">Builds change every patch. These are based on high-elo win-rate data for patch ' + esc(RA.patch.number || "") + ". Learn the <em>why</em> in our guide on {{guide}}.</p>".replace("{{guide}}", (byId(RA.guides, "items-and-gold") ? '<a href="#/guide/items-and-gold">items and gold</a>' : "itemization"));
  }

  route("champion/:id", function (app, p, q) {
    var c = byId(RA.champs, p.id);
    if (!c) return notFound(app);
    var role = q.role && c.roles.indexOf(q.role) >= 0 ? q.role : c.roles[0];
    var tab = q.tab || "overview";
    RA.setTitle(champName(c.id) + " " + ROLE_NAMES[role] + " guide");
    var kit = DD.kits[c.id];
    var b = RA.builds[c.id + ":" + role];
    var keys = ["P", "Q", "W", "E", "R"];

    var abilities = kit ? keys.map(function (k, i) {
      var sp = i === 0 ? kit.passive : kit.spells[i - 1];
      var src = i === 0 ? img.passive(sp.img) : img.spell(sp.img);
      return '<div class="ability"><img src="' + src + '" alt="" loading="lazy"><div><div class="key">' + (i === 0 ? "PASSIVE" : k + (sp.cd ? " · " + esc(sp.cd) + "s" : "")) + "</div><h4>" + esc(sp.name) + '</h4><div class="desc">' + esc(sp.desc) + '</div><p class="how">' + rich(c.abilities[k] || "") + "</p></div></div>";
    }).join("") : "";

    var combos = (c.combos || []).map(function (x) {
      return '<div class="combo"><span class="keys">' + esc(x.keys) + "</span><div><b>" + esc(x.name) + '</b><br><span style="color:var(--muted)">' + rich(x.note) + "</span></div></div>";
    }).join("");

    function mu(arr) {
      return (arr || []).map(function (m) {
        return '<div class="matchup"><img src="' + img.champ(m.id) + '" alt="" loading="lazy"><div><b>' + (hasGuide(m.id) ? '<a href="' + champLink(m.id) + '">' + esc(champName(m.id)) + "</a>" : esc(champName(m.id))) + "</b><span>" + rich(m.tip) + "</span></div></div>";
      }).join("");
    }

    var pk = RA.champPicks[c.id];
    var pickBox = pk ? '<div class="card pick-box" style="margin-bottom:16px">' +
        '<div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:12px"><h3 style="margin:0">When to pick ' + esc(champName(c.id)) + "</h3>" +
        (pk.blind ? '<span class="badge ' + (pk.blind.safe ? "easy" : "hard") + '">' + (pk.blind.safe ? "✓ Safe blind pick" : "✗ Better as a counter-pick") + "</span>" : "") + "</div>" +
        (pk.blind && pk.blind.why ? '<p style="color:var(--muted);margin:0 0 14px">' + rich(pk.blind.why) + "</p>" : "") +
        '<div class="two-col"><div><h4 style="color:var(--green)">Pick into</h4>' + list(pk.into, "list-good") + '</div><div><h4 style="color:var(--red)">Avoid into</h4>' + list(pk.avoid, "list-bad") + "</div></div>" +
        (pk.teammates && pk.teammates.length ? '<h4 style="margin-top:6px">Great teammates</h4><div class="grid cols-3" style="gap:4px 16px">' + mu(pk.teammates.map(function (t) { return { id: t.id, tip: t.why }; })) + "</div>" : "") +
        (pk.teamNeeds ? '<p style="margin:12px 0 0"><strong>Your team needs:</strong> <span style="color:var(--muted)">' + rich(pk.teamNeeds) + "</span></p>" : "") +
        '<p style="margin:12px 0 0;font-size:.9rem"><a href="#/guide/reading-the-enemy-team">How to read the enemy team →</a> · <a href="#/tools/draft-practice">Practice drafting →</a></p>' +
      "</div>" : "";

    var tabs = [
      ["overview", "Overview"], ["abilities", "Abilities & combos"], ["play", "How to play"], ["build", "Build"], ["matchups", "Matchups"]
    ];
    if (pk && pk.quiz && pk.quiz.length) tabs.push(["quiz", "Quiz"]);
    var panels = {
      quiz: '<div class="tool-panel" id="champQuiz"></div>',
      overview: pickBox +
        '<div class="two-col"><div class="card"><h3>Strengths</h3>' + list(c.strengths, "list-good") + '</div><div class="card"><h3>Weaknesses</h3>' + list(c.weaknesses, "list-bad") + "</div></div>" +
        '<div class="two-col" style="margin-top:16px"><div class="card"><h3>Power spikes</h3>' + list(c.spikes) + '</div><div class="card"><h3>Top tips</h3>' + list(c.tips) + "</div></div>",
      abilities: '<div class="card">' + abilities + '</div><div class="card" style="margin-top:16px"><h3>Combos</h3>' + combos + "</div>",
      play: '<div class="prose" style="max-width:none">' +
        "<h2>Early game: laning</h2>" + rich(c.phases.early) +
        "<h2>Mid game</h2>" + rich(c.phases.mid) +
        "<h2>Late game</h2>" + rich(c.phases.late) + "</div>",
      build: buildHtml(c, role),
      matchups: '<div class="two-col"><div class="card"><h3 style="color:var(--red)">Tough matchups</h3>' + mu(c.matchups && c.matchups.hard) + '</div><div class="card"><h3 style="color:var(--green)">Favorable matchups</h3>' + mu(c.matchups && c.matchups.easy) + "</div></div>" +
        (c.supports && role === "bot" ? '<div class="card" style="margin-top:16px"><h3>Best support partners</h3>' + mu(c.supports.map(function (s) { return { id: s.id, tip: s.why }; })) + "</div>" : "")
    };

    app.innerHTML =
      '<div class="crumbs"><a href="#/champions">Champions</a> › <a href="#/champions?role=' + role + '">' + ROLE_NAMES[role] + "</a></div>" +
      '<section class="champ-hero" style="background-image:url(' + img.splash(c.id) + ')"><div>' +
        '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">' + diffBadge(c.difficulty) + '<span class="badge">' + esc(c.damage) + " damage</span>" + '<span class="badge">' + esc(c.style) + "</span>" +
        (b && b.tier ? '<span class="badge gold">Tier ' + esc(b.tier) + " · patch " + esc(patchNo()) + "</span>" : "") + "</div>" +
        "<h1>" + esc(champName(c.id)) + '</h1><div class="title">' + esc(champTitle(c.id)) + "</div>" +
        (c.roles.length > 1 ? '<div class="chips" style="margin:0">' + c.roles.map(function (r) { return '<a class="chip' + (r === role ? " active" : "") + '" href="#/champion/' + c.id + "?role=" + r + "&tab=" + tab + '">' + ROLE_NAMES[r] + " lane</a>"; }).join("") + "</div>" : "") +
        "<p>" + esc(c.summary) + "</p>" +
      "</div></section>" +
      '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<button role="tab" data-tab="' + t[0] + '" class="' + (t[0] === tab ? "active" : "") + '">' + t[1] + "</button>"; }).join("") + "</div>" +
      '<div id="tabPanel"></div>';

    function show(t) {
      $("#tabPanel").innerHTML = panels[t] || "";
      if (t === "quiz" && RA.mountQuiz) RA.mountQuiz($("#champQuiz"), pk.quiz, { compact: true });
      $all(".tabs button").forEach(function (bt) { bt.classList.toggle("active", bt.dataset.tab === t); });
      history.replaceState(null, "", "#/champion/" + c.id + "?role=" + role + (t !== "overview" ? "&tab=" + t : ""));
    }
    $all(".tabs button").forEach(function (bt) { bt.addEventListener("click", function () { show(bt.dataset.tab); }); });
    show(tab);
  });

  /* ---------- tier list ---------- */
  route("tierlist", function (app, p, q) {
    RA.setTitle("Tier list");
    var role = q.role === "bot" ? "bot" : "mid";
    var tl = (RA.patch.tierList && RA.patch.tierList[role]) || [];
    // add our guided champions that aren't already in the list, using their build tier
    var seen = {};
    tl.forEach(function (t) { seen[t.id] = true; });
    var rows = tl.slice();
    RA.champs.forEach(function (c) {
      var b = RA.builds[c.id + ":" + role];
      if (c.roles.indexOf(role) >= 0 && b && b.tier && !seen[c.id]) rows.push({ id: c.id, tier: b.tier.charAt(0), note: "" });
    });
    var tiers = ["S", "A", "B", "C", "D"];
    var colors = { S: "#ff8a5c", A: "#f2c94c", B: "#6fcf97", C: "#8fb4d8", D: "#a7a7a7" };
    app.innerHTML =
      '<div class="page-head"><h1>Tier list · patch ' + esc(patchNo()) + "</h1><p>" + esc(RA.patch.tierListNote || "Which champions are strongest right now, based on win rate and pick rate data.") + " Tier lists only tell you what's strong on average. A champion you know well beats a high-tier champion you don't.</p></div>" +
      '<div class="chips"><a class="chip' + (role === "mid" ? " active" : "") + '" href="#/tierlist?role=mid">Mid lane</a><a class="chip' + (role === "bot" ? " active" : "") + '" href="#/tierlist?role=bot">Bot lane</a></div>' +
      tiers.map(function (t) {
        var cs = rows.filter(function (r) { return r.tier === t; });
        if (!cs.length) return "";
        return '<div class="tier-row"><div class="tier-label" style="background:' + colors[t] + '">' + t + '</div><div class="tier-champs">' + cs.map(function (r) {
          var tag = hasGuide(r.id) ? "a" : "div";
          return "<" + tag + ' class="tier-champ"' + (tag === "a" ? ' href="' + champLink(r.id, role) + '"' : "") + '><img src="' + img.champ(r.id) + '" alt="" loading="lazy"><div><b>' + esc(champName(r.id)) + "</b><span>" + esc(r.note || (hasGuide(r.id) ? "Full guide →" : "")) + "</span></div></" + tag + ">";
        }).join("") + "</div></div>";
      }).join("") +
      (RA.patch.sources ? '<p class="patch-note">Sources: ' + RA.patch.sources.map(function (s) { return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a>"; }).join(", ") + ".</p>" : "");
  });

  /* ---------- tools ---------- */
  function toolCard(k) {
    var t = RA.tools[k];
    return '<a class="card tool-card" href="#/tools/' + k + '"><span class="emoji" aria-hidden="true">' + t.emoji + "</span><h3>" + esc(t.title) + "</h3><p>" + esc(t.summary) + "</p></a>";
  }
  route("tools", function (app) {
    RA.setTitle("Tools");
    app.innerHTML = '<div class="page-head"><h1>Practice tools</h1><p>Train your last-hitting, track objective timers during a game, test what you\'ve learned, and find the role that suits you.</p></div>' +
      '<div class="grid cols-2">' + Object.keys(RA.tools).map(toolCard).join("") + "</div>";
  });
  route("tools/:id", function (app, p, q) {
    var t = RA.tools[p.id];
    if (!t) return notFound(app);
    RA.setTitle(t.title);
    app.innerHTML = '<div class="crumbs"><a href="#/tools">Tools</a></div><div class="page-head"><h1>' + esc(t.title) + "</h1><p>" + esc(t.intro || t.summary) + '</p></div><div id="toolRoot"></div>';
    return t.render($("#toolRoot"), q);
  });

  /* ---------- glossary ---------- */
  route("glossary", function (app, p, q) {
    RA.setTitle("Glossary");
    var terms = RA.glossary.slice().sort(function (a, b) { return a.term.localeCompare(b.term); });
    var groups = {};
    terms.forEach(function (t) { var L = /[a-z]/i.test(t.term.charAt(0)) ? t.term.charAt(0).toUpperCase() : "#"; (groups[L] = groups[L] || []).push(t); });
    app.innerHTML = '<div class="page-head"><h1>Glossary</h1><p>League has a lot of slang. Here are ' + terms.length + ' terms you\'ll hear in games, streams and guides.</p></div>' +
      '<input type="text" id="glossFilter" placeholder="Filter terms…" style="width:100%;max-width:360px;margin-bottom:10px" value="' + esc(q.term || "") + '">' +
      '<div id="glossList">' + Object.keys(groups).sort().map(function (L) {
        return '<div class="gloss-group"><h3 class="letter-head">' + L + '</h3><dl class="glossary">' + groups[L].map(function (t) {
          return '<div class="gloss-item" id="term-' + slug(t.term) + '"><dt>' + esc(t.term) + "</dt><dd>" + rich(t.def) + "</dd></div>";
        }).join("") + "</dl></div>";
      }).join("") + "</div>";
    var f = $("#glossFilter");
    function apply() {
      var v = f.value.toLowerCase().trim();
      $all(".gloss-item").forEach(function (el) { el.style.display = !v || el.textContent.toLowerCase().indexOf(v) >= 0 ? "" : "none"; });
      $all(".gloss-group").forEach(function (g) { g.style.display = $all(".gloss-item", g).some(function (el) { return el.style.display !== "none"; }) ? "" : "none"; });
    }
    f.addEventListener("input", apply);
    apply();
  });

  /* ---------- search ---------- */
  function textOf(html) { return String(html || "").replace(/\{\{\w+:([^}]+)\}\}/g, "$1").replace(/<[^>]+>/g, " "); }
  route("search", function (app, p, q) {
    var term = (q.q || "").trim();
    RA.setTitle("Search");
    var t = term.toLowerCase();
    var results = [];
    if (t) {
      RA.guides.forEach(function (g) {
        var hay = (g.title + " " + g.summary + " " + g.sections.map(function (s) { return s.h + " " + textOf(s.html); }).join(" ")).toLowerCase();
        var score = (g.title.toLowerCase().indexOf(t) >= 0 ? 10 : 0) + (hay.split(t).length - 1);
        if (score) results.push({ score: score, html: guideCard(g) });
      });
      RA.roles.forEach(function (r) {
        var hay = (r.name + " " + r.summary + " " + r.sections.map(function (s) { return s.h + " " + textOf(s.html); }).join(" ")).toLowerCase();
        var score = (r.name.toLowerCase().indexOf(t) >= 0 ? 10 : 0) + (hay.split(t).length - 1);
        if (score) results.push({ score: score, html: '<a class="card" href="#/role/' + r.id + '"><div class="meta"><span class="badge">Role guide</span></div><h3>' + esc(r.name) + "</h3><p>" + esc(r.tagline) + "</p></a>" });
      });
      RA.champs.forEach(function (c) {
        var name = champName(c.id).toLowerCase();
        var score = name.indexOf(t) >= 0 ? 20 : 0;
        if (score) results.push({ score: score, html: '<a class="card" href="' + champLink(c.id) + '"><div class="meta"><span class="badge">Champion guide</span>' + diffBadge(c.difficulty) + "</div><h3>" + esc(champName(c.id)) + "</h3><p>" + esc(c.summary) + "</p></a>" });
      });
      RA.glossary.forEach(function (g) {
        if (g.term.toLowerCase().indexOf(t) >= 0 || textOf(g.def).toLowerCase().indexOf(t) >= 0) {
          results.push({ score: g.term.toLowerCase() === t ? 15 : 3, html: '<a class="card" href="#/glossary?term=' + encodeURIComponent(g.term) + '"><div class="meta"><span class="badge">Glossary</span></div><h3>' + esc(g.term) + "</h3><p>" + esc(textOf(g.def)) + "</p></a>" });
        }
      });
      results.sort(function (a, b) { return b.score - a.score; });
    }
    app.innerHTML = '<div class="page-head"><h1>Search</h1>' + (term ? "<p>" + results.length + " result" + (results.length === 1 ? "" : "s") + " for “" + esc(term) + "”</p>" : "<p>Type in the search box at the top.</p>") + "</div>" +
      '<div class="search-results">' + (results.length ? results.slice(0, 40).map(function (r) { return r.html; }).join("") : (term ? '<p class="empty">Nothing found. Try a different word, like "wave" or "Ziggs".</p>' : "")) + "</div>";
  });

  /* ---------- start ---------- */
  RA.start = function () {
    var fp = $("#footerPatch");
    if (fp) fp.innerHTML = "Builds and tier lists updated for <strong>patch " + esc(patchNo()) + "</strong>" + (RA.patch.updated ? " (" + esc(RA.patch.updated) + ")" : "") + ". Images from Riot's Data Dragon.";
    $("#menuBtn").addEventListener("click", function () {
      var nav = $("#mainNav");
      nav.classList.toggle("open");
      this.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
    $("#themeBtn").addEventListener("click", function () {
      var cur = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = cur;
      try { localStorage.setItem("ra-theme", cur); } catch (e) {}
    });
    $("#searchForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var v = $("#searchInput").value.trim();
      if (v) location.hash = "#/search?q=" + encodeURIComponent(v);
    });
    window.addEventListener("hashchange", render);
    render();
  };
})();
