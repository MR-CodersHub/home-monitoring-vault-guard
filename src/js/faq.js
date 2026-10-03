(function () {
  "use strict";

  function item(f, open) {
    return '<div class="acc-item vg-card' + (open ? " open" : "") + '">' +
      '<button class="acc-head" data-acc-head aria-expanded="' + (open ? "true" : "false") + '">' +
      "<span>" + VG.esc(f.q) + "</span>" + VG.icon("chevDown", "w-4 h-4 acc-caret") + "</button>" +
      '<div class="acc-body" data-acc-body><p>' + VG.esc(f.a) + "</p></div></div>";
  }

  function render() {
    var host = VG.q("[data-faq-list]");
    if (!host) return;
    var all = VG.data.faqs;
    var groups = VG.site.faqGroups;
    var active = "all", term = "";

    var nav = VG.q("[data-faq-nav]");
    if (nav) {
      nav.innerHTML = '<button class="chip is-active" data-group="all">All questions <span>' + all.length + "</span></button>" +
        groups.map(function (g) {
          var n = all.filter(function (f) { return f.group === g.id; }).length;
          return '<button class="chip" data-group="' + g.id + '">' + VG.esc(g.label) + " <span>" + n + "</span></button>";
        }).join("");
    }

    function paint() {
      var list = all.filter(function (f) {
        var okGroup = active === "all" || f.group === active;
        var okTerm = !term || (f.q + " " + f.a).toLowerCase().indexOf(term) !== -1;
        return okGroup && okTerm;
      });
      if (!list.length) {
        host.innerHTML = '<div class="empty-state vg-card">' + VG.icon("search", "w-8 h-8") +
          "<h3>No answers match that search</h3><p>Try a shorter phrase, or ask the monitoring desk directly \u2014 it is open 24/7.</p>" +
          '<a class="btn-outline btn-compact" href="' + VG.url("public/pages/contact.html") + '">Ask a question</a></div>';
        return;
      }
      host.innerHTML = groups.map(function (g) {
        var items = list.filter(function (f) { return f.group === g.id; });
        if (!items.length) return "";
        return '<section class="faq-group"><h3 class="faq-group-title">' + VG.icon(g.icon, "w-5 h-5") +
          VG.esc(g.label) + '<span>' + items.length + "</span></h3>" +
          '<div class="acc">' + items.map(function (f, i) { return item(f, i === 0 && active === g.id); }).join("") + "</div></section>";
      }).join("");
      VG.accordion(host);
    }

    paint();

    if (nav) {
      nav.addEventListener("click", function (e) {
        var b = e.target.closest(".chip");
        if (!b) return;
        VG.qa(".chip", nav).forEach(function (c) { c.classList.toggle("is-active", c === b); });
        active = b.getAttribute("data-group");
        paint();
      });
    }
    var search = VG.q("[data-faq-search]");
    if (search) {
      search.addEventListener("input", function () {
        term = search.value.trim().toLowerCase();
        paint();
      });
    }
    VG.reveal(host);
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
