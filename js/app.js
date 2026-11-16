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
  RA.champRoles = RA.champRoles || {};
  // Register extra roles from role-specific guides, e.g. "Swain:support" adds "support" to Swain's roles.
  Object.keys(RA.champRoles).forEach(function (key) {
    var parts = key.split(":"), ch = null;
    for (var i = 0; i < RA.champs.length; i++) if (RA.champs[i].id === parts[0]) ch = RA.champs[i];
    if (ch && ch.roles.indexOf(parts[1]) < 0) ch.roles.push(parts[1]);
  });
  RA.draftScenarios = RA.draftScenarios || [];
  RA.champAdapt = RA.champAdapt || {};
  // Enemy team situations for "Adapt your build" (RA.champAdapt) and the Game Plan Builder.
  var SITUATIONS = {
    tanky: { label: "Tanky enemy team", icon: "🛡️", desc: "Two or more tanks or bruisers with lots of health and armor." },
    squishy: { label: "Squishy enemy team", icon: "🎯", desc: "Mostly low-health carries, mages and assassins." },
    ad: { label: "Lots of physical damage", icon: "⚔️", desc: "Most of their damage comes from attack damage champions." },
    ap: { label: "Lots of magic damage", icon: "🔮", desc: "Most of their damage comes from ability power champions." },
    healing: { label: "Healing or shields", icon: "💚", desc: "They heal or shield a lot, so fights drag on." },
    cc: { label: "Lots of crowd control", icon: "⛓️", desc: "Stuns, roots and knock-ups that can lock you down." }
  };
  RA.SITUATIONS = SITUATIONS;

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
    map: function () { return CDN + DD.version + "/img/map/map11.png"; },
    summoner: function (name) { var s = DD.summoners[name]; return s ? CDN + DD.version + "/img/spell/" + s[0] : ""; }
  };
  RA.img = img;

  function champName(id) { var c = DD.champions[id]; return c ? c[0] : id; }
  function champTitle(id) { var c = DD.champions[id]; return c ? c[1] : ""; }
  function hasGuide(id) { return !!byId(RA.champs, id); }
  function champLink(id, role) {
    var c = byId(RA.champs, id);
    return "#/champion/" + id + (role && c && c.roles[0] !== role && c.roles.indexOf(role) >= 0 ? "/" + role : "");
  }

  function iconChamp(id) {
    var inner = '<img src="' + img.champ(id) + '" alt="" loading="lazy">' + esc(champName(id));
    return hasGuide(id) ? '<a class="ic" href="' + champLink(id) + '">' + inner + "</a>" : '<span class="ic">' + inner + "</span>";
  }
  function iconItem(name) {
    var it = DD.items[name];
    if (!it) return "<strong>" + esc(name) + "</strong>";
    var tag = itemLink(name) ? 'a href="' + itemLink(name) + '"' : "span";
    return "<" + tag + ' class="ic" title="' + esc(name + " (" + it[1] + "g): " + it[2]) + '"><img src="' + img.item(name) + '" alt="" loading="lazy">' + esc(name) + "</" + tag.split(" ")[0] + ">";
  }
  function iconRune(name) {
    var r = DD.runes[name];
    if (!r) return "<strong>" + esc(name) + "</strong>";
    var tag = runeLink(name) ? 'a href="' + runeLink(name) + '"' : "span";
    return "<" + tag + ' class="ic rune" title="' + esc(r[2]) + '"><img src="' + img.rune(name) + '" alt="" loading="lazy">' + esc(name) + "</" + tag.split(" ")[0] + ">";
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

  /* ---------- router ----------
     Pages live at real paths on the web (…/rift-academy/guide/wave-basics/), and at #/guide/wave-basics when the
     site is opened from disk. Content and code always write links as "#/route"; fixLinks() turns them into
     real paths on the web. tools/build-pages.js pre-renders every route into <route>/index.html. */
  var HTTP = /^https?:$/.test(location.protocol);
  var ROOT = window.RA_ROOT || (function () {
    var s = document.currentScript && document.currentScript.src;
    return s ? s.replace(/js\/app\.js(\?.*)?$/, "") : location.href.split(/[?#]/)[0].replace(/[^/]*$/, "");
  })();
  var ROOT_PATH = ROOT.replace(/^[a-z]+:\/\/[^/]*/i, "");
  RA.root = ROOT;
  var routes = [];
  function route(pattern, fn) {
    var keys = [];
    var re = new RegExp("^" + pattern.replace(/:(\w+)/g, function (m, k) { keys.push(k); return "([^/]+)"; }) + "$");
    routes.push({ re: re, keys: keys, fn: fn });
  }
  // "guide/x?a=b" -> the URL for that route ("/rift-academy/guide/x/?a=b" on the web, "#/guide/x?a=b" from disk)
  function routeUrl(r) {
    r = String(r || "").replace(/^#?\/?/, "");
    if (!HTTP) return "#/" + r;
    var qi = r.indexOf("?"), path = qi >= 0 ? r.slice(0, qi) : r, qs = qi >= 0 ? r.slice(qi) : "";
    path = path.replace(/\/$/, "");
    return ROOT_PATH + (path ? path + "/" : "") + qs;
  }
  RA.url = routeUrl;
  function currentRoute() {
    if (/^#\//.test(location.hash)) return location.hash.slice(2);
    var path = location.pathname;
    if (path.indexOf(ROOT_PATH) === 0) path = path.slice(ROOT_PATH.length);
    else path = "";
    if (!HTTP) path = decodeURI(path);
    path = path.replace(/(^|\/)(index|404)\.html$/, "").replace(/\/$/, "");
    return path + location.search;
  }
  function parseRoute(h) {
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
  // Turn "#/route" links into real paths (web only). Runs after every render and on content added later.
  function fixLinks(root) {
    if (!root || !root.querySelectorAll) return;
    if (!HTTP) {
      // Opened from disk: pre-rendered links (data-r) go back to #/route form.
      Array.prototype.forEach.call(root.querySelectorAll("a[data-r]"), function (a) { a.setAttribute("href", "#/" + a.getAttribute("data-r")); });
      return;
    }
    var as = root.querySelectorAll('a[href^="#/"]');
    for (var i = 0; i < as.length; i++) {
      var r = as[i].getAttribute("href").slice(2);
      as[i].setAttribute("href", routeUrl(r));
      as[i].setAttribute("data-r", r);
    }
  }
  RA.go = function (r) {
    if (HTTP) { history.pushState(null, "", routeUrl(r)); render(); }
    else location.hash = "#/" + String(r).replace(/^#?\/?/, "");
  };
  // Change the address without re-rendering (e.g. switching champion tabs).
  RA.replaceRoute = function (r) { try { history.replaceState(null, "", routeUrl(r)); } catch (e) {} };
  var cleanup = null;
  function render() {
    if (cleanup) { try { cleanup(); } catch (e) { console.error(e); } cleanup = null; }
    if (HTTP && /^#\//.test(location.hash)) history.replaceState(null, "", routeUrl(location.hash.slice(2)));
    var loc = parseRoute(currentRoute());
    var app = $("#app");
    var found = false;
    RA.meta = {};
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
    fixLinks(document);
    var top = loc.path.split("/")[0];
    var navKey = { guide: "guides", role: "roles", champion: "champions", path: "guides", patch: "tierlist", item: "items", rune: "items", runes: "items" }[top] || top;
    $all(".main-nav a").forEach(function (a) { a.classList.toggle("active", a.dataset.nav === navKey); });
    $("#mainNav").classList.remove("open");
    $("#menuBtn").setAttribute("aria-expanded", "false");
    if (!loc.query.keepScroll) window.scrollTo(0, 0);
  }
  RA.render = render;
  var SITE_DESC = "League of Legends tips and guides for every level: fundamentals, role guides, champion guides with current-patch builds, and practice tools.";
  // Title, description and share image for the current page (also used by tools/build-pages.js).
  RA.setTitle = function (t, desc, image) {
    document.title = t ? t + " · Rift Academy" : "Rift Academy: League of Legends Guides";
    var d = String(desc || SITE_DESC).replace(/\s+/g, " ").trim();
    if (d.length > 200) d = d.slice(0, 197).replace(/\s+\S*$/, "").replace(/[,.;:]$/, "") + "…";
    RA.meta = { title: document.title, desc: d, image: image || "" };
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", RA.meta.desc);
  };
  function notFound(app) {
    RA.setTitle("Not found");
    app.innerHTML = '<div class="empty"><h1>Page not found</h1><p>That page doesn\'t exist. <a href="#/">Back to the home page</a></p></div>';
  }

  /* ---------- home ---------- */
  function continueCard() {
    var ns = nextStep();
    if (!ns.done) return "";
    return '<section class="section"><div class="card path-summary"><div class="path-summary-head"><h3>Your learning path</h3><a href="#/path">' + ns.done + " of " + ns.all.length + " steps done →</a></div>" +
      progressBar(ns.done, ns.all.length) + (ns.next ? '<a class="btn" href="' + ns.next.href + '">Continue: ' + esc(ns.next.title) + " →</a>" : "<p>Path complete. Nice work.</p>") + "</div></section>";
  }
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
        (RA.patchChanges ? '<a class="patch-pill" href="#/patch">● Updated for patch ' + esc(patchNo()) + ": see what changed →</a>" : '<div class="patch-pill">● Updated for patch ' + esc(patchNo()) + "</div>") +
        "<h1>Learn League of Legends, <em>one lesson at a time</em></h1>" +
        "<p>Clear guides for every level, from your first game to climbing ranked. Role guides, mid and bot champion guides with current builds, and tools to practice.</p>" +
        '<div class="btn-row"><a class="btn" href="#/path">I\'m new: start here</a><a class="btn ghost" href="#/tools/role-picker">Find my role</a></div>' +
      "</section>" +
      continueCard() +
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
      '<span class="badge">' + g.minutes + " min</span>" + (isDone("guide:" + g.id) ? '<span class="badge easy">✓ Read</span>' : "") + "</div><h3>" + esc(g.title) + "</h3><p>" + esc(textOf(g.summary)) + "</p></a>";
  }
  route("guides", function (app, p, q) {
    RA.setTitle("Guides", "League of Legends guides for beginner, intermediate and advanced players: farming, wave management, trading, vision, macro, teamfighting, champion picks and the mental game.");
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
      '<a class="card path-banner" href="#/path"><b>Not sure where to start?</b> Follow the <span>learning path</span>: every guide and practice tool in order, with your progress saved. →</a>' +
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
    RA.setTitle(g.title, textOf(g.summary));
    var idx = RA.guides.filter(function (x) { return x.level === g.level; });
    var pos = idx.indexOf(g);
    var next = idx[pos + 1];
    var related = (g.related || []).map(function (id) { return byId(RA.guides, id); }).filter(Boolean);
    app.innerHTML =
      '<div class="crumbs"><a href="#/guides">Guides</a> › <a href="#/guides?level=' + g.level + '">' + LEVEL_NAMES[g.level] + "</a></div>" +
      '<div class="article-layout"><article class="prose">' +
        '<div class="meta" style="display:flex;gap:8px;margin-bottom:10px">' + levelBadge(g.level) + '<span class="badge">' + esc(CATEGORY_NAMES[g.category] || "") + '</span><span class="badge">' + g.minutes + " min read</span></div>" +
        "<h1>" + esc(g.title) + '</h1><p style="color:var(--muted);font-size:1.12rem">' + rich(g.summary) + "</p>" +
        articleBody(g.sections) +
        (g.takeaways ? '<div class="takeaways"><h3>Key takeaways</h3>' + list(g.takeaways) + "</div>" : "") +
        miniQuiz(g.quiz) + readButton("guide:" + g.id) +
        (next ? '<p style="margin-top:2em"><a class="btn" href="#/guide/' + next.id + '">Next: ' + esc(next.title) + " →</a></p>" : "") +
        (related.length ? '<section class="section"><h2>Related guides</h2><div class="grid cols-2">' + related.map(guideCard).join("") + "</div></section>" : "") +
      "</article>" + toc(g.sections, g.quiz ? '<a href="#s-check" data-anchor>Check yourself</a>' : "") + "</div>";
    wireAnchors(app);
    wireReadButtons(app);
    if (g.quiz) wireMiniQuiz(app, g.quiz);
  });

  /* ---------- learning path & progress (saved in this browser only) ---------- */
  var PROG_KEY = "ra-progress";
  function prog() { try { return JSON.parse(localStorage.getItem(PROG_KEY) || "{}") || {}; } catch (e) { return {}; } }
  function isDone(key) {
    var p = prog();
    if (key === "role") return Object.keys(p).some(function (k) { return k.indexOf("role:") === 0; });
    return !!p[key];
  }
  function setDone(key, on) {
    var p = prog();
    if (on) p[key] = Date.now(); else delete p[key];
    try { localStorage.setItem(PROG_KEY, JSON.stringify(p)); } catch (e) {}
  }
  RA.isDone = isDone;
  RA.setDone = setDone;
  var LEARN_PATH = [
    { title: "Your first games", level: "beginner", blurb: "How a game works, the map, farming, shopping and staying alive. Enough to enjoy your first games and stop feeding.",
      steps: ["guide:how-league-works", "guide:the-map", "tool:role-picker", "role", "guide:last-hitting", "tool:cs-trainer", "guide:items-and-gold", "guide:summoners-and-runes",
        "guide:vision-basics", "guide:staying-alive", "tool:map-quiz", "guide:reading-the-scoreboard", "guide:teamwork-and-pings", "guide:champ-select-basics", "guide:climbing-low-elo", "tool:quiz"] },
    { title: "Winning your lane", level: "intermediate", blurb: "Control the wave, trade well, time your recalls and turn a lead into dragons and towers.",
      steps: ["guide:wave-management", "tool:wave-sim", "guide:trading", "guide:melee-vs-ranged", "guide:recall-timing", "guide:jungle-tracking", "guide:objectives-and-dragons", "tool:timers", "guide:roaming",
        "guide:teamfighting", "guide:reading-the-enemy-team", "guide:team-synergy", "tool:matchup", "tool:game-plan", "tool:draft-practice"] },
    { title: "Climbing ranked", level: "advanced", blurb: "Power spikes, lane priority, vision control, side lanes, win conditions and the mental game.",
      steps: ["guide:power-spikes", "guide:matchups-and-cooldowns", "guide:counter-picking", "guide:vision-control", "guide:side-lanes", "guide:win-conditions", "guide:mental-game", "patch"] }
  ];
  // What a step key points to: {key, title, href, kind, minutes}
  function stepInfo(key) {
    var parts = key.split(":"), x;
    if (parts[0] === "guide") { x = byId(RA.guides, parts[1]); return x && { key: key, title: x.title, href: "#/guide/" + x.id, kind: "Guide", minutes: x.minutes }; }
    if (parts[0] === "tool") { x = RA.tools[parts[1]]; return x && { key: key, title: x.title, href: "#/tools/" + parts[1], kind: "Practice" }; }
    if (key === "role") return { key: key, title: "Read the guide for your main role", href: "#/roles", kind: "Role guide", note: "Ticks itself when you mark any role guide as read" };
    if (key === "patch") return RA.patchChanges ? { key: key, title: "Check what changed this patch (do this every patch)", href: "#/patch", kind: "Habit" } : null;
    return null;
  }
  function pathSteps() {
    return LEARN_PATH.map(function (st) { return { stage: st, steps: st.steps.map(stepInfo).filter(Boolean) }; });
  }
  function nextStep() {
    var all = [];
    pathSteps().forEach(function (s) { all = all.concat(s.steps); });
    var done = all.filter(function (s) { return isDone(s.key); }).length;
    return { all: all, done: done, next: all.filter(function (s) { return !isDone(s.key); })[0] || null };
  }
  function progressBar(done, total) {
    return '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + done + '"><i style="width:' + (total ? done / total * 100 : 0) + '%"></i></div>';
  }
  // "Mark as read" button for guides and role guides
  function readButton(key) {
    var on = isDone(key);
    return '<div class="read-box"><button class="btn' + (on ? " done" : " ghost") + '" data-read="' + key + '">' + (on ? "✓ Read" : "Mark as read") + "</button>" +
      '<span>Tracks your <a href="#/path">learning path</a>. Saved in this browser only.</span></div>';
  }
  function wireReadButtons(app) {
    $all("[data-read]", app).forEach(function (b) {
      b.addEventListener("click", function () {
        var on = !isDone(b.dataset.read);
        setDone(b.dataset.read, on);
        b.textContent = on ? "✓ Read" : "Mark as read";
        b.className = "btn" + (on ? " done" : " ghost");
      });
    });
  }
  route("path", function (app) {
    RA.setTitle("Learning path", "A step-by-step League of Legends learning path from your first game to climbing ranked. Read the guides in order, practice with the tools and track your progress.");
    function draw() {
      var ns = nextStep();
      app.innerHTML =
        '<div class="page-head"><h1>Learning path</h1><p>A step-by-step plan from your first game to climbing ranked. Read each guide, try the practice tools, and tick off steps as you go. Your progress is saved in this browser only, so it stays private and needs no account.</p></div>' +
        '<div class="card path-summary"><div class="path-summary-head"><h3>' + ns.done + " of " + ns.all.length + " steps done</h3>" +
          (ns.done ? '<button class="linklike" id="pathReset">Reset progress</button>' : "") + "</div>" + progressBar(ns.done, ns.all.length) +
          (ns.next ? '<a class="btn" href="' + ns.next.href + '">' + (ns.done ? "Continue: " : "Start: ") + esc(ns.next.title) + " →</a>" : "<p>You've finished the whole path. Keep checking what changes each patch, and replay the tools to stay sharp.</p>") +
        "</div>" +
        pathSteps().map(function (s, n) {
          var d = s.steps.filter(function (x) { return isDone(x.key); }).length;
          return '<section class="section path-stage" style="--c:var(--' + s.stage.level + ')"><div class="path-stage-head"><span class="path-num">' + (n + 1) + "</span><div><h2>" + esc(s.stage.title) + "</h2><p>" + esc(s.stage.blurb) + "</p></div></div>" +
            progressBar(d, s.steps.length) + '<ol class="path-steps">' + s.steps.map(function (x) {
              var on = isDone(x.key);
              return '<li class="' + (on ? "done" : "") + '"><button class="path-check" data-step="' + x.key + '" aria-pressed="' + on + '" aria-label="' + (on ? "Mark as not done: " : "Mark as done: ") + esc(x.title) + '"' + (x.key === "role" ? " disabled" : "") + ">" + (on ? "✓" : "") + "</button>" +
                '<div><a href="' + x.href + '">' + esc(x.title) + '</a><div class="path-meta">' + esc(x.kind) + (x.minutes ? " · " + x.minutes + " min" : "") + (x.note ? " · " + esc(x.note) : "") + "</div></div></li>";
            }).join("") + "</ol></section>";
        }).join("");
      fixLinks(app);
      $all("[data-step]", app).forEach(function (b) {
        b.addEventListener("click", function () { setDone(b.dataset.step, !isDone(b.dataset.step)); draw(); });
      });
      var r = $("#pathReset");
      if (r) r.addEventListener("click", function () {
        if (window.confirm("Clear all your progress on this device?")) { try { localStorage.removeItem(PROG_KEY); } catch (e) {} draw(); }
      });
    }
    draw();
  });

  /* ---------- roles ---------- */
  route("roles", function (app) {
    RA.setTitle("Roles", "Guides for all five League of Legends roles: top, jungle, mid, bot and support. What each role does, how to play it, beginner champions and common mistakes.");
    app.innerHTML =
      '<div class="page-head"><h1>Role guides</h1><p>Every team has five roles. Each guide explains what the role does, how to play it from early to late game, beginner-friendly champions, and the mistakes to avoid. Not sure which suits you? Try the <a href="#/tools/role-picker">role picker</a>.</p></div>' +
      '<div class="grid cols-2">' + RA.roles.map(function (r) {
        var champs = (r.starterChamps || []).slice(0, 5).map(function (c) { return '<img src="' + img.champ(c.id) + '" alt="' + esc(champName(c.id)) + '" title="' + esc(champName(c.id)) + '" style="width:36px;height:36px;border-radius:8px" loading="lazy">'; }).join(" ");
        return '<a class="card" href="#/role/' + r.id + '"><div class="meta">' + diffBadge(r.difficulty) + "</div><h3>" + esc(r.name) + '</h3><p style="margin-bottom:12px">' + esc(textOf(r.summary)) + '</p><div style="display:flex;gap:6px">' + champs + "</div></a>";
      }).join("") + "</div>";
  });

  route("role/:id", function (app, p) {
    var r = byId(RA.roles, p.id);
    if (!r) return notFound(app);
    RA.setTitle(r.name + " guide", r.tagline + " " + textOf(r.summary));
    var guided = RA.champs.filter(function (c) { return c.roles.indexOf(r.id) >= 0; });
    var sections = [{ h: "What this role does", html: "<p>" + rich(r.summary) + "</p>" + list(r.responsibilities) }].concat(r.sections);
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
        articleBody(sections) + miniQuiz(r.quiz) + readButton("role:" + r.id) +
      "</article>" + toc(sections, r.quiz ? '<a href="#s-check" data-anchor>Check yourself</a>' : "") + "</div>";
    wireAnchors(app);
    wireReadButtons(app);
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
    RA.setTitle("Champion guides", "In-depth League of Legends champion guides with builds, runes, skill orders, combos and matchups for patch " + patchNo() + ".");
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
      '<div class="page-head"><h1>Champion guides</h1><p>In-depth guides for the most popular mid lane champions and the bot lane marksmen, plus their other common roles: how each ability works in practice, combos, power spikes, how to play every phase of the game, matchups, and builds for patch ' + esc(patchNo()) + ".</p></div>" +
      '<div class="chips">' + chip("role", "all", "All") + ["top", "jungle", "mid", "bot", "support"].filter(function (r) {
        return RA.champs.some(function (c) { return c.roles.indexOf(r) >= 0; });
      }).map(function (r) { return chip("role", r, ROLE_NAMES[r] + (r === "top" || r === "mid" || r === "bot" ? " lane" : "")); }).join("") + "</div>" +
      '<div class="chips">' + chip("diff", "all", "Any difficulty") + chip("diff", "Easy", "Easy") + chip("diff", "Medium", "Medium") + chip("diff", "Hard", "Hard") + "</div>" +
      '<div style="margin-bottom:18px"><input type="text" id="champFilter" placeholder="Filter by name…" style="width:100%;max-width:320px"></div>' +
      (cs.length ? '<div class="grid cols-4" id="champGrid">' + cs.map(function (c) { return champCard(c, role !== "all" ? role : null); }).join("") + "</div>" : '<p class="empty">No champions match.</p>');
    var f = $("#champFilter");
    if (f) f.addEventListener("input", function () {
      var v = f.value.toLowerCase();
      $all("#champGrid .champ-card").forEach(function (el) { el.style.display = el.textContent.toLowerCase().indexOf(v) >= 0 ? "" : "none"; });
    });
  });

  function adaptHtml(key) {
    var a = RA.champAdapt[key];
    if (!a) return "";
    function itemIc(n) { return '<img src="' + img.item(n) + '" alt="" loading="lazy">'; }
    return '<section class="card adapt" id="adapt"><h3>Adapt your build</h3><p class="adapt-intro">Swap these items in when the enemy team looks like this. Not sure which one fits your game? The <a href="#/tools/game-plan">Game Plan Builder</a> reads the enemy team for you.</p>' +
      '<div class="adapt-grid">' + Object.keys(SITUATIONS).filter(function (s) { return a[s]; }).map(function (s) {
        var sit = SITUATIONS[s];
        return '<div class="adapt-sit"><div class="adapt-head"><span aria-hidden="true">' + sit.icon + "</span><b>" + esc(sit.label) + "</b></div>" +
          (a[s].items || []).map(function (x) {
            var lk = itemLink(x.item);
            return '<div class="swap"><div class="swap-items">' + (lk ? '<a href="' + lk + '">' : "<span>") + itemIc(x.item) + esc(x.item) + (lk ? "</a>" : "</span>") +
              (x.replaces ? '<span class="swap-instead">instead of ' + itemIc(x.replaces) + esc(x.replaces) + "</span>" : "") + "</div><p>" + rich(x.why) + "</p></div>";
          }).join("") + (a[s].tip ? '<p class="adapt-tip">' + rich(a[s].tip) + "</p>" : "") + "</div>";
      }).join("") + "</div></section>";
  }
  RA.adaptHtml = adaptHtml;

  function buildHtml(c, role) {
    var b = RA.builds[c.id + ":" + role];
    if (!b) return '<p class="empty">Build data for this patch is coming soon.</p>';
    var kit = DD.kits[c.id];
    var slot = function (name, kind, cls) {
      var src = kind === "rune" ? img.rune(name) : kind === "sum" ? img.summoner(name) : img.item(name);
      var href = kind === "rune" ? runeLink(name) : kind === "sum" ? "" : itemLink(name);
      var tag = href ? 'a href="' + href + '"' : "div";
      return "<" + tag + ' class="slot ' + (cls || "") + '"><img src="' + src + '" alt="" loading="lazy">' + esc(name) + "</" + tag.split(" ")[0] + ">";
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
            return '<li><img src="' + img.item(s.item) + '" alt="" loading="lazy"><div><b>' + (itemLink(s.item) ? '<a href="' + itemLink(s.item) + '">' + esc(s.item) + "</a>" : esc(s.item)) + "</b><br><span>" + esc(s.when) + "</span></div></li>";
          }).join("") + "</ul>" : "") +
        "</div>" +
      "</div>" +
      adaptHtml(c.id + ":" + role) +
      (b.note ? '<p class="patch-note">📝 ' + esc(b.note) + "</p>" : "") +
      '<p class="patch-note">Builds change every patch. These are based on high-elo win-rate data for patch ' + esc(RA.patch.number || "") + ". Learn the <em>why</em> in our guide on {{guide}}.</p>".replace("{{guide}}", (byId(RA.guides, "items-and-gold") ? '<a href="#/guide/items-and-gold">items and gold</a>' : "itemization"));
  }

  // A champion's guide for one role: role-specific content (RA.champRoles["Id:role"]) overrides the main guide.
  function champFor(id, role) {
    var base = byId(RA.champs, id);
    if (!base) return null;
    if (base.roles.indexOf(role) < 0) role = base.roles[0];
    var ov = RA.champRoles[base.id + ":" + role];
    var c = ov ? Object.assign({}, base, ov, {
      id: base.id, roles: base.roles,
      abilities: Object.assign({}, base.abilities, ov.abilities || {}),
      phases: Object.assign({}, base.phases, ov.phases || {})
    }) : base;
    if (ov && !ov.supports) c.supports = null;
    return c;
  }
  RA.champFor = champFor;
  RA.champLink = champLink;
  RA.hasGuide = hasGuide;
  RA.roleNames = ROLE_NAMES;
  RA.list = list;
  route("champion/:id/:role", function (app, p, q) { return champPage(app, p.id, p.role, q); });
  route("champion/:id", function (app, p, q) { return champPage(app, p.id, q.role, q); });
  function champPage(app, id, wantRole, q) {
    var base = byId(RA.champs, id);
    if (!base) return notFound(app);
    var role = wantRole && base.roles.indexOf(wantRole) >= 0 ? wantRole : base.roles[0];
    var tab = q.tab || "overview";
    var ov = RA.champRoles[base.id + ":" + role];
    var c = champFor(base.id, role);
    RA.setTitle(champName(c.id) + " " + ROLE_NAMES[role] + " guide", champName(c.id) + " " + ROLE_NAMES[role].toLowerCase() + " guide for patch " + patchNo() + ": build, runes, skill order, matchups and how to play. " + textOf(c.summary), img.splash(c.id));
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

    var pk = RA.champPicks[c.id + ":" + role] || (ov ? null : RA.champPicks[c.id]);
    var chg = champChange(c.id);
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
      overview: (chg ? '<div class="card change-note"><div>' + changeBadge(chg.change) + ' <strong>in patch ' + esc(RA.patchChanges.patch) + ":</strong> " + esc(chg.summary) + "</div>" +
          list(chg.details.slice(0, 4).map(esc), "change-list") + '<a href="#/patch">All patch changes →</a></div>' : "") + pickBox +
        '<div class="two-col"><div class="card"><h3>Strengths</h3>' + list(c.strengths, "list-good") + '</div><div class="card"><h3>Weaknesses</h3>' + list(c.weaknesses, "list-bad") + "</div></div>" +
        '<div class="two-col" style="margin-top:16px"><div class="card"><h3>Power spikes</h3>' + list(c.spikes) + '</div><div class="card"><h3>Top tips</h3>' + list(c.tips) + "</div></div>",
      abilities: '<div class="card">' + abilities + '</div><div class="card" style="margin-top:16px"><h3>Combos</h3>' + combos + "</div>",
      play: '<div class="prose" style="max-width:none">' +
        "<h2>Early game: laning</h2>" + rich(c.phases.early) +
        "<h2>Mid game</h2>" + rich(c.phases.mid) +
        "<h2>Late game</h2>" + rich(c.phases.late) + "</div>",
      build: buildHtml(c, role),
      matchups: '<div class="two-col"><div class="card"><h3 style="color:var(--red)">Tough matchups</h3>' + mu(c.matchups && c.matchups.hard) + '</div><div class="card"><h3 style="color:var(--green)">Favorable matchups</h3>' + mu(c.matchups && c.matchups.easy) + "</div></div>" +
        (c.supports && c.supports.length && (role === "bot" || role === "support") ? '<div class="card" style="margin-top:16px"><h3>' + (role === "support" ? "Best ADC partners" : "Best support partners") + "</h3>" + mu(c.supports.map(function (s) { return { id: s.id, tip: s.why }; })) + "</div>" : "")
    };

    app.innerHTML =
      '<div class="crumbs"><a href="#/champions">Champions</a> › <a href="#/champions?role=' + role + '">' + ROLE_NAMES[role] + "</a></div>" +
      '<section class="champ-hero" style="background-image:url(' + img.splash(c.id) + ')"><div>' +
        '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">' + diffBadge(c.difficulty) + '<span class="badge">' + esc(c.damage) + " damage</span>" + '<span class="badge">' + esc(c.style) + "</span>" +
        (b && b.tier ? '<span class="badge gold">Tier ' + esc(b.tier) + " · patch " + esc(patchNo()) + "</span>" : "") + "</div>" +
        "<h1>" + esc(champName(c.id)) + '</h1><div class="title">' + esc(champTitle(c.id)) + "</div>" +
        (c.roles.length > 1 ? '<div class="chips" style="margin:0">' + c.roles.map(function (r) { return '<a class="chip' + (r === role ? " active" : "") + '" href="' + champLink(c.id, r) + (tab !== "overview" ? "?tab=" + tab : "") + '">' + ROLE_NAMES[r] + " lane</a>"; }).join("") + "</div>" : "") +
        "<p>" + rich(c.summary) + "</p>" +
      "</div></section>" +
      '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<button role="tab" data-tab="' + t[0] + '" class="' + (t[0] === tab ? "active" : "") + '">' + t[1] + "</button>"; }).join("") + "</div>" +
      '<div id="tabPanel"></div>';

    function show(t) {
      $("#tabPanel").innerHTML = panels[t] || "";
      if (t === "quiz" && RA.mountQuiz) RA.mountQuiz($("#champQuiz"), pk.quiz, { compact: true });
      $all(".tabs button").forEach(function (bt) { bt.classList.toggle("active", bt.dataset.tab === t); });
      RA.replaceRoute(champLink(c.id, role).slice(2) + (t !== "overview" ? "?tab=" + t : ""));
    }
    $all(".tabs button").forEach(function (bt) { bt.addEventListener("click", function () { show(bt.dataset.tab); }); });
    show(tab);
  }

  /* ---------- items & runes ---------- */
  var ITEM_SLUGS = {}, RUNE_SLUGS = {};
  Object.keys(DD.itemInfo || {}).forEach(function (n) { ITEM_SLUGS[slug(n)] = n; });
  Object.keys(DD.runeInfo || {}).forEach(function (n) { RUNE_SLUGS[slug(n)] = n; });
  function itemLink(name) { return DD.itemInfo && DD.itemInfo[name] ? "#/item/" + slug(name) : ""; }
  function runeLink(name) { return DD.runeInfo && DD.runeInfo[name] ? "#/rune/" + slug(name) : ""; }
  RA.itemLink = itemLink;
  RA.runeLink = runeLink;
  var SUPPORT_ITEMS = ["World Atlas", "Celestial Opposition", "Dream Maker", "Zaz'Zak's Realmspike", "Solstice Sleigh", "Bloodsong", "Moonstone Renewer", "Echoes of Helia",
    "Redemption", "Locket of the Iron Solari", "Mikael's Blessing", "Ardent Censer", "Staff of Flowing Water", "Dawncore", "Zeke's Convergence", "Knight's Vow",
    "Shurelya's Battlesong", "Imperial Mandate", "Bandlepipes", "Trailblazer"];
  var ITEM_CATS = [
    ["all", "All", function () { return true; }],
    ["mage", "Mage", function (i) { return i.tags.indexOf("SpellDamage") >= 0; }],
    ["physical", "Physical damage", function (i) { return i.tags.indexOf("Damage") >= 0; }],
    ["marksman", "Attack speed & crit", function (i) { return i.tags.indexOf("AttackSpeed") >= 0 || i.tags.indexOf("CriticalStrike") >= 0; }],
    ["defense", "Defense", function (i) { return /Armor|SpellBlock|Health/.test(i.tags.join(" ")) && i.tags.indexOf("Damage") < 0 && i.tags.indexOf("SpellDamage") < 0; }],
    ["support", "Support", function (i, n) { return SUPPORT_ITEMS.indexOf(n) >= 0; }]
  ];
  var KIND_NAMES = { starter: "Starting item", boots: "Boots", legendary: "Finished item" };
  // Every place our builds use an item or rune: [{key, champ, role, where, note}]
  function buildUses(test) {
    var out = [];
    Object.keys(RA.builds).forEach(function (key) {
      var b = RA.builds[key], parts = key.split(":"), hits = test(b);
      if (hits) out.push({ key: key, champ: parts[0], role: parts[1], where: hits });
    });
    return out.sort(function (a, b) { return champName(a.champ).localeCompare(champName(b.champ)); });
  }
  function usesList(uses) {
    if (!uses.length) return '<p style="color:var(--muted)">None of our current builds use it.</p>';
    return '<div class="grid cols-3" style="gap:4px 16px">' + uses.map(function (u) {
      return '<div class="matchup"><img src="' + img.champ(u.champ) + '" alt="" loading="lazy"><div><b><a href="' + champLink(u.champ, u.role) + '?tab=build">' + esc(champName(u.champ)) + " " + esc(ROLE_NAMES[u.role]) + "</a></b><span>" + esc(u.where) + "</span></div></div>";
    }).join("") + "</div>";
  }
  function champChips(ids) {
    return (ids || []).filter(function (id) { return DD.champions[id]; }).map(function (id) {
      return hasGuide(id) ? '<a class="ic" href="' + champLink(id) + '"><img src="' + img.champ(id) + '" alt="" loading="lazy">' + esc(champName(id)) + "</a>" : '<span class="ic"><img src="' + img.champ(id) + '" alt="" loading="lazy">' + esc(champName(id)) + "</span>";
    }).join(" ");
  }
  function itemTile(n) {
    var i = DD.itemInfo[n];
    return '<a class="item-tile" href="' + itemLink(n) + '"><img src="' + img.item(n) + '" alt="" loading="lazy"><div><b>' + esc(n) + "</b><span>" + i.gold + "g" + (i.plain ? " · " + esc(i.plain) : "") + "</span></div></a>";
  }

  route("items", function (app, p, q) {
    RA.setTitle("Items", "Every finished League of Legends item for patch " + patchNo() + ": what it does, who should buy it, and when. Starting items, boots and legendary items explained for beginners.");
    var cat = ITEM_CATS.filter(function (c) { return c[0] === q.cat; })[0] || ITEM_CATS[0];
    var names = Object.keys(DD.itemInfo).filter(function (n) { return cat[2](DD.itemInfo[n], n); }).sort();
    var groups = [["starter", "Starting items"], ["boots", "Boots"], ["legendary", "Finished items"]];
    app.innerHTML =
      '<div class="page-head"><h1>Items</h1><p>Every finished item for patch ' + esc(patchNo()) + ": what it does, who buys it and when. New to shopping? Read <a href=\"#/guide/items-and-gold\">Items and Gold: How to Shop</a> first. Looking for runes? See <a href=\"#/runes\">all runes</a>.</p></div>" +
      '<div class="chips">' + ITEM_CATS.map(function (c) { return '<a class="chip' + (c === cat ? " active" : "") + '" href="#/items' + (c[0] === "all" ? "" : "?cat=" + c[0]) + '">' + c[1] + "</a>"; }).join("") + "</div>" +
      '<div style="margin-bottom:18px"><input type="text" id="itemFilter" placeholder="Filter by name…" style="width:100%;max-width:320px"></div>' +
      groups.map(function (g) {
        var ns = names.filter(function (n) { return DD.itemInfo[n].kind === g[0]; });
        if (!ns.length) return "";
        return '<section class="item-group"><h2 class="letter-head">' + g[1] + ' <span style="color:var(--faint);font-size:.9rem">(' + ns.length + ')</span></h2><div class="item-grid">' + ns.map(itemTile).join("") + "</div></section>";
      }).join("");
    var f = $("#itemFilter");
    f.addEventListener("input", function () {
      var v = f.value.toLowerCase();
      $all(".item-tile").forEach(function (el) { el.style.display = el.textContent.toLowerCase().indexOf(v) >= 0 ? "" : "none"; });
      $all(".item-group").forEach(function (g) { g.style.display = $all(".item-tile", g).some(function (el) { return el.style.display !== "none"; }) ? "" : "none"; });
    });
  });

  route("item/:id", function (app, p) {
    var n = ITEM_SLUGS[p.id];
    if (!n) return notFound(app);
    var i = DD.itemInfo[n], g = (RA.itemGuide || {})[n] || {};
    RA.setTitle(n, n + " (" + i.gold + " gold): " + (g.what || i.plain || "") + " " + (g.buyWhen || ""));
    var uses = buildUses(function (b) {
      if ((b.core || []).indexOf(n) >= 0) return "Core item #" + ((b.core || []).indexOf(n) + 1);
      if (b.boots === n) return "Boots";
      if ((b.starter || []).indexOf(n) >= 0) return "Starting item";
      var s = (b.situational || []).filter(function (x) { return x.item === n; })[0];
      return s ? "Situational: " + s.when : "";
    });
    var adapts = [];
    Object.keys(RA.champAdapt || {}).forEach(function (key) {
      var a = RA.champAdapt[key];
      Object.keys(SITUATIONS).forEach(function (s) {
        ((a[s] && a[s].items) || []).forEach(function (x) { if (x.item === n) adapts.push({ key: key, s: s }); });
      });
    });
    var bySit = {};
    adapts.forEach(function (x) { (bySit[x.s] = bySit[x.s] || []).push(x.key); });
    app.innerHTML =
      '<div class="crumbs"><a href="#/items">Items</a> › ' + esc(KIND_NAMES[i.kind]) + "</div>" +
      '<div class="article-layout" style="grid-template-columns:1fr"><article class="prose" style="max-width:820px">' +
        '<div class="item-hero"><img src="' + img.item(n) + '" alt=""><div><h1>' + esc(n) + '</h1><div class="meta" style="display:flex;gap:8px;flex-wrap:wrap"><span class="badge gold">' + i.gold + " gold</span><span class=\"badge\">" + esc(KIND_NAMES[i.kind]) + "</span></div></div></div>" +
        (g.what ? '<p style="font-size:1.12rem">' + rich(g.what) + "</p>" : (i.plain ? '<p style="font-size:1.12rem">' + esc(i.plain) + "</p>" : "")) +
        '<div class="two-col"><div class="card"><h3>Stats</h3>' + (i.stats.length ? list(i.stats.map(esc)) : '<p>No stats.</p>') + "</div>" +
          '<div class="card"><h3>What it does</h3>' + (i.effects.length ? i.effects.map(function (e) {
            return "<p>" + (e.name ? "<strong>" + esc(e.name) + (e.active ? " (active)" : "") + ":</strong> " : "") + esc(e.text) + "</p>";
          }).join("") : "<p>Only the stats.</p>") + "</div></div>" +
        (g.buyWhen ? "<h2>When to buy it</h2><p>" + rich(g.buyWhen) + "</p>" : "") +
        (g.avoid ? '<div class="callout warn"><strong class="label">Skip it when</strong>' + rich(g.avoid) + "</div>" : "") +
        (g.goodOn && g.goodOn.length ? "<h2>Good on</h2><p>" + champChips(g.goodOn) + "</p>" : "") +
        (i.from.length ? "<h2>Builds from</h2><p>" + i.from.map(function (c) { return '<span class="ic"><img src="' + img.item(c) + '" alt="" loading="lazy">' + esc(c) + "</span>"; }).join(" ") + "</p>" : "") +
        (i.into.length ? "<h2>Upgrades into</h2><p>" + i.into.map(function (c) { return itemLink(c) ? '<a class="ic" href="' + itemLink(c) + '"><img src="' + img.item(c) + '" alt="" loading="lazy">' + esc(c) + "</a>" : esc(c); }).join(" ") + "</p>" : "") +
        "<h2>In our champion builds</h2>" + usesList(uses) +
        (adapts.length ? "<h2>When our guides switch to it</h2>" + Object.keys(bySit).map(function (s) {
          return "<p><strong>" + esc(SITUATIONS[s].label) + ":</strong> " + bySit[s].map(function (key) { var pr = key.split(":"); return '<a href="' + champLink(pr[0], pr[1]) + '?tab=build">' + esc(champName(pr[0])) + (pr[1] !== byId(RA.champs, pr[0]).roles[0] ? " " + esc(ROLE_NAMES[pr[1]]) : "") + "</a>"; }).join(", ") + "</p>";
        }).join("") : "") +
        '<p class="patch-note">Item stats from Riot\'s Data Dragon for patch ' + esc(patchNo()) + ".</p>" +
      "</article></div>";
  });

  route("runes", function (app) {
    RA.setTitle("Runes", "Every League of Legends rune for patch " + patchNo() + " explained: keystones and minor runes in all five trees, what they do and who should take them.");
    var trees = Object.keys(DD.trees);
    app.innerHTML =
      '<div class="page-head"><h1>Runes</h1><p>Every rune for patch ' + esc(patchNo()) + ". You pick a primary tree (a keystone plus three runes) and a secondary tree (two runes). New to runes? Read <a href=\"#/guide/summoners-and-runes\">Summoner Spells and Runes</a>. Looking for items? See <a href=\"#/items\">all items</a>.</p></div>" +
      trees.map(function (t) {
        var rs = Object.keys(DD.runeInfo).filter(function (n) { return DD.runes[n][1] === t; });
        var rows = [];
        rs.forEach(function (n) { var s = DD.runeInfo[n].slot; (rows[s] = rows[s] || []).push(n); });
        return '<section class="section rune-tree-sec"><div class="rune-tree" style="font-size:1.3rem"><img src="' + img.tree(t) + '" alt="">' + esc(t) + "</div>" +
          (RA.runeTrees && RA.runeTrees[t] ? '<p style="color:var(--muted);margin-top:0">' + rich(RA.runeTrees[t]) + "</p>" : "") +
          rows.map(function (row, si) {
            return '<div class="rune-row"><div class="rune-row-label">' + (si === 0 ? "Keystones" : "Row " + si) + '</div><div class="item-grid">' + row.map(function (n) {
              var gd = (RA.runeGuide || {})[n];
              return '<a class="item-tile rune-tile' + (si === 0 ? " keystone" : "") + '" href="' + runeLink(n) + '"><img src="' + img.rune(n) + '" alt="" loading="lazy"><div><b>' + esc(n) + "</b><span>" + esc(gd && gd.what ? textOf(gd.what) : DD.runes[n][2]) + "</span></div></a>";
            }).join("") + "</div></div>";
          }).join("") + "</section>";
      }).join("");
  });

  route("rune/:id", function (app, p) {
    var n = RUNE_SLUGS[p.id];
    if (!n) return notFound(app);
    var ri = DD.runeInfo[n], tree = DD.runes[n][1], g = (RA.runeGuide || {})[n] || {};
    RA.setTitle(n, n + " (" + tree + (ri.slot === 0 ? " keystone" : " rune") + "): " + (g.what || DD.runes[n][2]) + " " + (g.takeWhen || ""));
    var uses = buildUses(function (b) {
      var r = b.runes || {};
      if (r.keystone === n) return "Keystone";
      if ((r.primary || []).indexOf(n) >= 0) return "Primary tree (" + r.primaryTree + ")";
      if ((r.secondary || []).indexOf(n) >= 0) return "Secondary tree (" + r.secondaryTree + ")";
      if (b.altKeystone && b.altKeystone.keystone === n) return "Alternative keystone: " + b.altKeystone.when;
      return "";
    });
    var same = Object.keys(DD.runeInfo).filter(function (x) { return x !== n && DD.runes[x][1] === tree && DD.runeInfo[x].slot === ri.slot; });
    app.innerHTML =
      '<div class="crumbs"><a href="#/runes">Runes</a> › ' + esc(tree) + "</div>" +
      '<div class="article-layout" style="grid-template-columns:1fr"><article class="prose" style="max-width:820px">' +
        '<div class="item-hero"><img src="' + img.rune(n) + '" alt="" class="' + (ri.slot === 0 ? "keystone" : "") + '"><div><h1>' + esc(n) + '</h1><div class="meta" style="display:flex;gap:8px;flex-wrap:wrap"><span class="badge gold">' + esc(tree) + '</span><span class="badge">' + (ri.slot === 0 ? "Keystone" : "Row " + ri.slot) + "</span></div></div></div>" +
        (g.what ? '<p style="font-size:1.12rem">' + rich(g.what) + "</p>" : "") +
        '<div class="card"><h3>What it does</h3><p>' + esc(ri.desc) + "</p></div>" +
        (g.takeWhen ? "<h2>When to take it</h2><p>" + rich(g.takeWhen) + "</p>" : "") +
        (g.goodOn && g.goodOn.length ? "<h2>Good on</h2><p>" + champChips(g.goodOn) + "</p>" : "") +
        (same.length ? "<h2>" + (ri.slot === 0 ? "Other " + esc(tree) + " keystones" : "Other runes in this row") + "</h2><p>" + same.map(function (x) { return '<a class="ic rune" href="' + runeLink(x) + '"><img src="' + img.rune(x) + '" alt="" loading="lazy">' + esc(x) + "</a>"; }).join(" ") + "</p>" : "") +
        "<h2>In our champion builds</h2>" + usesList(uses) +
        '<p class="patch-note">Rune text from Riot\'s Data Dragon for patch ' + esc(patchNo()) + ".</p>" +
      "</article></div>";
  });

  /* ---------- what changed this patch ---------- */
  var CHANGE_NAMES = { buff: "Buffed", nerf: "Nerfed", adjust: "Adjusted", "new": "Reworked" };
  function changeBadge(ch) { return '<span class="badge chg-' + esc(ch) + '">' + esc(CHANGE_NAMES[ch] || ch) + "</span>"; }
  function champChange(id) {
    var pc = RA.patchChanges;
    if (!pc || pc.patch !== RA.patch.number) return null;
    return (pc.champions || []).filter(function (x) { return x.id === id; })[0] || null;
  }
  function changeCard(x, iconHtml, title, link) {
    return '<div class="card change-card"><div class="change-head">' + iconHtml + "<div><h3>" + (link ? '<a href="' + link + '">' + esc(title) + "</a>" : esc(title)) + "</h3>" + changeBadge(x.change) + "</div></div>" +
      "<p>" + esc(x.summary) + "</p>" +
      (x.details && x.details.length ? (x.details.length > 6 ? "<details><summary>All " + x.details.length + " changes</summary>" + list(x.details.map(esc), "change-list") + "</details>" : list(x.details.map(esc), "change-list")) : "") + "</div>";
  }
  route("patch", function (app) {
    var pc = RA.patchChanges;
    if (!pc) return notFound(app);
    RA.setTitle("Patch " + pc.patch + " changes", "What changed in League of Legends patch " + pc.patch + ", explained simply: champion buffs and nerfs, item changes, and what they mean for your games.");
    var champs = (pc.champions || []).slice().sort(function (a, b) { return champName(a.id).localeCompare(champName(b.id)); });
    var ours = champs.filter(function (x) { return hasGuide(x.id); });
    var others = champs.filter(function (x) { return !hasGuide(x.id); });
    function champBlock(x) {
      return changeCard(x, '<img class="change-icon" src="' + img.champ(x.id) + '" alt="" loading="lazy">', champName(x.id), hasGuide(x.id) ? champLink(x.id) : "");
    }
    var released = pc.released ? new Date(pc.released + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }) : "";
    app.innerHTML =
      '<div class="page-head"><h1>What changed in patch ' + esc(pc.patch) + "</h1><p>" + (released ? "Released " + esc(released) + ". " : "") +
        "The changes that matter for Summoner's Rift, explained in plain words. Our builds and tier list are already updated for this patch." +
        (pc.source ? ' Full details in the <a href="' + esc(pc.source) + '" target="_blank" rel="noopener">official patch notes</a>.' : "") + "</p></div>" +
      (pc.highlights && pc.highlights.length ? '<div class="takeaways" style="margin-top:0"><h3>The big picture</h3>' + list(pc.highlights.map(esc)) + "</div>" : "") +
      (ours.length ? '<section class="section"><h2>Champions with guides on this site</h2><div class="grid cols-2">' + ours.map(champBlock).join("") + "</div></section>" : "") +
      (others.length ? '<section class="section"><h2>' + (ours.length ? "Other champions" : "Champions") + '</h2><div class="grid cols-2">' + others.map(champBlock).join("") + "</div></section>" : "") +
      (pc.items && pc.items.length ? '<section class="section"><h2>Items</h2><div class="grid cols-2">' + pc.items.map(function (x) {
        return changeCard(x, DD.items[x.name] ? '<img class="change-icon" src="' + img.item(x.name) + '" alt="" loading="lazy">' : "", x.name);
      }).join("") + "</div></section>" : "") +
      (pc.runes && pc.runes.length ? '<section class="section"><h2>Runes</h2><div class="grid cols-2">' + pc.runes.map(function (x) {
        return changeCard(x, DD.runes[x.name] ? '<img class="change-icon" src="' + img.rune(x.name) + '" alt="" loading="lazy">' : "", x.name);
      }).join("") + "</div></section>" : "") +
      (pc.systems && pc.systems.length ? '<section class="section"><h2>Game modes and systems</h2><div class="grid cols-2">' + pc.systems.map(function (x) {
        return '<div class="card change-card"><h3>' + esc(x.title) + "</h3><p>" + esc(x.summary) + "</p>" +
          (x.details && x.details.length ? (x.details.length > 6 ? "<details><summary>All " + x.details.length + " changes</summary>" + list(x.details.map(esc), "change-list") + "</details>" : list(x.details.map(esc), "change-list")) : "") + "</div>";
      }).join("") + "</div></section>" : "") +
      '<p class="patch-note">Why it matters: a buff or nerf of a few points rarely changes how you play a champion, but it can change which champions are strong. Check this page each patch, then look at the <a href="#/tierlist">tier list</a>.</p>';
  });

  /* ---------- tier list ---------- */
  route("tierlist", function (app, p, q) {
    RA.setTitle("Tier list", "League of Legends mid and bot lane tier list for patch " + patchNo() + ", based on win rate and pick rate data.");
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
    RA.setTitle("Tools", "Free League of Legends practice tools: last-hit trainer, objective timers, quizzes, map quizzes, draft practice and a matchup lookup.");
    app.innerHTML = '<div class="page-head"><h1>Practice tools</h1><p>Train your last-hitting, learn the map, look up a matchup, practice drafting, track objective timers during a game, test what you\'ve learned, and find the role that suits you.</p></div>' +
      '<div class="grid cols-2">' + Object.keys(RA.tools).map(toolCard).join("") + "</div>";
  });
  route("tools/:id", function (app, p, q) {
    var t = RA.tools[p.id];
    if (!t) return notFound(app);
    RA.setTitle(t.title, t.summary);
    app.innerHTML = '<div class="crumbs"><a href="#/tools">Tools</a></div><div class="page-head"><h1>' + esc(t.title) + "</h1><p>" + esc(t.intro || t.summary) + '</p></div><div id="toolRoot"></div>';
    return t.render($("#toolRoot"), q);
  });

  /* ---------- glossary ---------- */
  route("glossary", function (app, p, q) {
    RA.setTitle("Glossary", "League of Legends slang and terms explained: " + RA.glossary.length + " words you hear in games, streams and guides.");
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
        if (score) results.push({ score: score, html: '<a class="card" href="' + champLink(c.id) + '"><div class="meta"><span class="badge">Champion guide</span>' + diffBadge(c.difficulty) + "</div><h3>" + esc(champName(c.id)) + "</h3><p>" + esc(textOf(c.summary)) + "</p></a>" });
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
    if (fp) fp.innerHTML = "Builds and tier lists updated for <strong>patch " + esc(patchNo()) + "</strong>" + (RA.patch.updated ? " (" + esc(RA.patch.updated) + ")" : "") + ". " + (RA.patchChanges ? '<a href="#/patch">What changed this patch</a>. ' : "") + "Images from Riot's Data Dragon.";
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
      if (v) RA.go("search?q=" + encodeURIComponent(v));
    });
    window.addEventListener("hashchange", render);
    if (HTTP) {
      window.addEventListener("popstate", render);
      // Same-site page links load without a full page reload.
      document.addEventListener("click", function (e) {
        var a = e.target.closest && e.target.closest("a[data-r]");
        if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target) return;
        e.preventDefault();
        RA.go(a.getAttribute("data-r"));
      });
      // Links added after a render (quiz explanations, tool screens) get fixed too.
      if (window.MutationObserver) new MutationObserver(function (ms) {
        ms.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, function (n) { if (n.nodeType === 1) { if (n.matches && n.matches('a[href^="#/"]')) fixLinks(n.parentNode); else fixLinks(n); } }); });
      }).observe(document.body, { childList: true, subtree: true });
    }
    render();
  };
})();
