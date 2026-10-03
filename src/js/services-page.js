(function () {
  "use strict";

  function card(s) {
    return '<article class="svc-card vg-card" data-cat="' + VG.esc(s.category) + '" data-id="' + VG.esc(s.id) + '">' +
      '<div class="svc-media"><img src="' + VG.esc(s.image) + '" alt="' + VG.esc(s.name) + '" loading="lazy" data-fb="' + VG.url("assets/img/ph-camera.svg") + '" />' +
        '<span class="svc-chip">' + VG.icon(s.icon, "w-4 h-4") + VG.esc(s.category) + "</span></div>" +
      '<div class="svc-body">' +
        '<div class="svc-meta"><span>' + VG.icon("clock", "w-3.5 h-3.5") + VG.esc(s.duration) + "</span>" +
          '<span>' + VG.icon("star", "w-3.5 h-3.5 star") + s.rating.toFixed(1) + "</span></div>" +
        '<h3 class="svc-title">' + VG.esc(s.name) + "</h3>" +
        '<p class="svc-text">' + VG.esc(s.short) + "</p>" +
        '<div class="svc-foot"><span class="svc-price">from <strong>$' + s.priceFrom + "</strong>/mo</span>" +
          '<a class="svc-link" href="' + VG.url("public/pages/service-details.html?id=" + s.id) + '">' +
          "View details " + VG.icon("arrowRight", "w-4 h-4") + "</a></div>" +
      "</div></article>";
  }

  function render() {
    var grid = VG.q("[data-services-grid]");
    if (!grid) return;
    var list = VG.data.services;
    grid.innerHTML = list.map(card).join("");

    var chips = VG.q("[data-service-filters]");
    var cats = [];
    list.forEach(function (s) { if (cats.indexOf(s.category) === -1) cats.push(s.category); });
    if (chips) {
      chips.innerHTML = '<button class="chip is-active" data-filter="all">All services <span>' + list.length + "</span></button>" +
        cats.map(function (c) {
          var n = list.filter(function (s) { return s.category === c; }).length;
          return '<button class="chip" data-filter="' + VG.esc(c) + '">' + VG.esc(c) + " <span>" + n + "</span></button>";
        }).join("");
    }

    var search = VG.q("[data-service-search]");
    var count = VG.q("[data-service-count]");
    var active = "all";
    var term = "";

    function apply() {
      var shown = 0;
      VG.qa(".svc-card", grid).forEach(function (el) {
        var okCat = active === "all" || el.getAttribute("data-cat") === active;
        var text = el.textContent.toLowerCase();
        var okTerm = !term || text.indexOf(term) !== -1;
        var show = okCat && okTerm;
        el.classList.toggle("is-hidden", !show);
        if (show) shown++;
      });
      if (count) count.textContent = shown + (shown === 1 ? " service" : " services");
    }

    if (chips) {
      chips.addEventListener("click", function (e) {
        var b = e.target.closest(".chip");
        if (!b) return;
        VG.qa(".chip", chips).forEach(function (c) { c.classList.remove("is-active"); });
        b.classList.add("is-active");
        active = b.getAttribute("data-filter");
        apply();
      });
    }
    if (search) {
      search.addEventListener("input", function () {
        term = search.value.trim().toLowerCase();
        apply();
      });
    }
    apply();
    VG.reveal(grid);
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
