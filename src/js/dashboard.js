window.VG = window.VG || {};

VG.dash = (function () {
  "use strict";

  function nav(items, active) {
    return '<aside class="dash-side"><div class="dash-side-inner">' +
      '<a class="dash-side-brand" href="' + VG.url("index.html") + '" aria-label="' + VG.esc(VG.site.name) + ' home">' +
      '<span class="logo-icon">' +
      '<img class="dash-logo-img" src="' + VG.url("assets/logo.png") + '" alt="VaultGuard logo" width="28" height="28" style="display:block;width:28px;height:28px;object-fit:contain;flex-shrink:0;" onerror="if(!this.dataset.fallback){this.dataset.fallback=1;this.src=\'' + VG.url("assets/img/logo.svg") + '\';}" />' +
      '</span><div><strong>' + VG.esc(VG.site.name) + "</strong><small>Operations console</small></div></a>" +
      '<nav class="dash-nav" aria-label="Dashboard sections">' +
      items.map(function (i) {
        return '<a class="dash-nav-link' + (i.id === active ? " is-active" : "") + '" href="#' + i.id + '"' +
          (i.id === active ? ' aria-current="page"' : "") + ">" +
          VG.icon(i.icon, "w-[18px] h-[18px]") + "<span>" + VG.esc(i.label) + "</span>" +
          (i.badge ? '<em class="dash-badge">' + VG.esc(i.badge) + "</em>" : "") + "</a>";
      }).join("") + "</nav>" +
      '<div class="dash-side-foot">' +
      '<a class="btn-ghost btn-compact dash-foot-link" href="' + VG.url("index.html") + '">' +
      VG.icon("arrowRight", "w-4 h-4") + "Back to site</a>" +
      '<a class="btn-ghost btn-compact dash-foot-link" href="' + VG.url("public/auth/login.html") + '">' +
      VG.icon("logOut", "w-4 h-4") + "Sign out</a>" +
      "</div>" +
      "</div></aside>";
  }

  /* Keeps the sidebar in step with the section that is on screen and makes
     a deep link such as user-dashboard.html#devices land on the right panel. */
  function spy(defaultId) {
    var links = VG.qa(".dash-nav-link");
    if (!links.length) return;
    var sections = links.map(function (l) {
      var id = (l.getAttribute("href") || "").replace("#", "");
      return id ? VG.q("#" + id) : null;
    });

    function setActive(id) {
      links.forEach(function (l) {
        var on = (l.getAttribute("href") || "") === "#" + id;
        l.classList.toggle("is-active", on);
        if (on) l.setAttribute("aria-current", "page");
        else l.removeAttribute("aria-current");
      });
    }

    function fromHash() {
      var id = (window.location.hash || "").replace("#", "");
      return id && VG.q("#" + id) ? id : null;
    }

    links.forEach(function (l) {
      l.addEventListener("click", function () {
        setActive((l.getAttribute("href") || "").replace("#", ""));
      });
    });

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) setActive(en.target.id);
        });
      }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
      sections.forEach(function (s) { if (s) io.observe(s); });
    }

    var hash = fromHash();
    if (hash) {
      setActive(hash);
      window.requestAnimationFrame(function () {
        var target = VG.q("#" + hash);
        if (target) target.scrollIntoView({ block: "start" });
      });
    } else {
      setActive(defaultId || (sections[0] && sections[0].id));
    }

    window.addEventListener("hashchange", function () {
      var id = fromHash();
      if (id) setActive(id);
    });
  }



  function kpi(items) {
    return '<div class="kpi-grid">' + items.map(function (k) {
      var value = typeof k.value === "number" ? VG.num(k.value) : VG.esc(k.value);
      return '<article class="kpi vg-card" data-reveal="up">' +
        '<div class="kpi-top"><span class="kpi-ico ' + (k.tone || "") + '">' + VG.icon(k.icon, "w-5 h-5") + "</span>" +
        (k.delta ? '<span class="kpi-delta ' + (k.up ? "up" : "down") + '">' + VG.icon(k.up ? "arrowUp" : "arrowRight", "w-3 h-3") + k.delta + "</span>" : "") +
        "</div>" +
        '<p class="kpi-label">' + VG.esc(k.label) + "</p>" +
        '<p class="kpi-value">' + (k.prefix || "") + value + (k.suffix || "") + "</p>" +
        '<p class="kpi-foot">' + VG.esc(k.foot || "") + "</p></article>";
    }).join("") + "</div>";
  }

  function bars(data, opts) {
    var max = Math.max.apply(null, data.map(function (d) { return d.v; }));
    var o = opts || {};
    return '<div class="chart" role="img" aria-label="' + VG.esc(o.label || "Bar chart") + '">' +
      '<div class="chart-grid" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' +
      '<div class="chart-bars">' + data.map(function (d, i) {
        var h = Math.round((d.v / max) * 100);
        return '<div class="chart-col" style="--h:' + h + '%;--d:' + (i * 0.05) + 's">' +
          '<span class="chart-bar" title="' + VG.esc(d.l + ": " + VG.num(d.v)) + '"></span>' +
          '<span class="chart-lab">' + VG.esc(d.l) + "</span></div>";
      }).join("") + "</div></div>";
  }

  function spark(values) {
    var max = Math.max.apply(null, values);
    var min = Math.min.apply(null, values);
    var span = max - min || 1;
    var pts = values.map(function (v, i) {
      var x = (i / (values.length - 1)) * 100;
      var y = 34 - ((v - min) / span) * 30;
      return x.toFixed(1) + "," + y.toFixed(1);
    }).join(" ");
    return '<svg class="spark" viewBox="0 0 100 36" preserveAspectRatio="none" aria-hidden="true">' +
      '<polyline points="' + pts + '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />' +
      "</svg>";
  }

  function donut(segments) {
    var total = segments.reduce(function (a, s) { return a + s.v; }, 0);
    var acc = 0;
    var stops = segments.map(function (s) {
      var from = (acc / total) * 360;
      acc += s.v;
      var to = (acc / total) * 360;
      return s.color + " " + from.toFixed(1) + "deg " + to.toFixed(1) + "deg";
    }).join(",");
    return '<div class="donut-wrap"><div class="donut" style="background:conic-gradient(' + stops + ')" role="img" aria-label="Distribution">' +
      '<div class="donut-hole"><strong>' + segments[0].v + "</strong><span>" + VG.esc(segments[0].label) + "</span></div></div>" +
      '<ul class="donut-legend">' + segments.map(function (s) {
        return '<li><i style="background:' + s.color + '"></i><span>' + VG.esc(s.label) + "</span><b>" + s.v + "</b></li>";
      }).join("") + "</ul></div>";
  }


  function table(host, cols, rows) {
    host.innerHTML = '<div class="table-scroll"><table class="vtable dash-table"><thead><tr>' +
      cols.map(function (c) { return "<th>" + VG.esc(c) + "</th>"; }).join("") +
      "</tr></thead><tbody>" + rows.map(function (r) {
        return "<tr " + (r.attrs || "") + ">" + r.cells.map(function (c, i) {
          var tag = i === 0 ? "th scope=\"row\"" : "td";
          return "<" + tag + ">" + c + "</" + tag.split(" ")[0] + ">";
        }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }

  function filters(scope) {
    var search = VG.q("[data-table-search]", scope);
    var selects = VG.qa("[data-table-filter]", scope);
    var rows = VG.qa("[data-filter-table] tbody tr", scope);
    function apply() {
      var term = search ? search.value.trim().toLowerCase() : "";
      var filters2 = selects.map(function (s) { return s.value; });
      var keys = selects.map(function (s) { return s.getAttribute("data-table-filter"); });
      rows.forEach(function (tr) {
        var okTerm = !term || tr.textContent.toLowerCase().indexOf(term) !== -1;
        var okSel = selects.every(function (s, i) {
          return !filters2[i] || (tr.getAttribute("data-" + keys[i]) || "") === filters2[i];
        });
        tr.classList.toggle("is-hidden", !(okTerm && okSel));
      });
      var counter = VG.q("[data-table-count]", scope);
      if (counter) {
        var shown = rows.filter(function (tr) { return !tr.classList.contains("is-hidden"); }).length;
        counter.textContent = shown + " of " + rows.length + " rows";
      }
    }
    if (search) search.addEventListener("input", apply);
    selects.forEach(function (s) { s.addEventListener("change", apply); });
    apply();
  }

  function tabs(scope) {
    VG.qa("[data-tab-group]", scope).forEach(function (group) {
      group.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-tab]");
        if (!btn) return;
        var name = btn.getAttribute("data-tab");
        VG.qa("[data-tab]", group).forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        VG.qa("[data-panel]", scope).forEach(function (p) {
          p.classList.toggle("is-hidden", p.getAttribute("data-panel") !== name);
        });
      });
    });
  }

  function switches(scope) {
    VG.qa("[data-switch]", scope).forEach(function (sw) {
      var input = sw.querySelector("input");
      function paint() { sw.classList.toggle("is-on", input.checked); }
      input.addEventListener("change", function () {
        paint();
        var label = sw.getAttribute("data-switch-label") || input.getAttribute("aria-label") || "Setting";
        VG.toast(label + (input.checked ? " enabled" : " disabled"), input.checked ? "success" : "error");
      });
      paint();
    });
  }

  function clock(scope) {
    var el = VG.q("[data-dash-clock]", scope);
    if (!el) return;
    var out = VG.q("[data-dash-clock-time]", el) || el;
    function tick() {
      var d = new Date();
      out.textContent = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" +
        ("0" + d.getSeconds()).slice(-2) + " CT";
    }
    tick();
    setInterval(tick, 1000);
  }

  return { nav: nav, spy: spy, kpi: kpi, bars: bars, spark: spark, donut: donut, table: table, filters: filters, tabs: tabs, switches: switches, clock: clock };
})();
