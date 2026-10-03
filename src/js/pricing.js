(function () {
  "use strict";

  function planCard(p, cycle) {
    var amount = cycle === "annual" ? p.annual : p.monthly;
    var per = cycle === "annual" ? "/mo, billed yearly" : "/month";
    return '<article class="plan vg-card' + (p.highlight ? " is-featured" : "") + '" data-id="' + p.id + '">' +
      (p.badge ? '<span class="plan-flag">' + VG.esc(p.badge) + "</span>" : "") +
      '<h3 class="plan-name">' + VG.esc(p.name) + "</h3>" +
      '<p class="plan-blurb">' + VG.esc(p.blurb) + "</p>" +
      '<div class="plan-price"><span class="cur">$</span><span class="amt" data-amount="' + amount + '">' + amount + "</span>" +
        '<span class="per">' + VG.esc(per) + "</span></div>" +
      (p.trial ? '<p class="plan-trial">' + VG.icon("gift", "w-4 h-4") + p.trial + "-day free trial, cancel anytime</p>" : '<p class="plan-trial">No card needed</p>') +
      '<ul class="tick-list plan-ticks">' + p.features.map(function (f) {
        return "<li>" + VG.icon("check", "w-4 h-4") + "<span>" + VG.esc(f) + "</span></li>";
      }).join("") + "</ul>" +
      (p.excludes.length ? '<ul class="tick-list muted plan-ticks">' + p.excludes.map(function (f) {
        return "<li>" + VG.icon("x", "w-4 h-4") + "<span>" + VG.esc(f) + "</span></li>";
      }).join("") + "</ul>" : "") +
      '<a class="' + (p.highlight ? "btn-primary" : "btn-outline") + ' plan-cta" href="' + VG.url("public/auth/signup.html") + '">' +
      (p.monthly === 0 ? "Create free account" : "Start free trial") + "</a></div>";
  }

  function render() {
    var host = VG.q("[data-pricing-plans]");
    if (!host) return;
    var plans = VG.data.plans;
    var cycle = "monthly";

    function paint() {
      host.innerHTML = plans.map(function (p) { return planCard(p, cycle); }).join("");
    }
    paint();

    VG.qa("[data-cycle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        VG.qa("[data-cycle]").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        cycle = btn.getAttribute("data-cycle");
        paint();
        var note = VG.q("[data-cycle-note]");
        if (note) {
          note.textContent = cycle === "annual"
            ? "Annual billing \u2014 two months free, and hardware shipping included."
            : "Monthly billing \u2014 change or cancel from your dashboard at any time.";
        }
      });
    });

    var table = VG.q("[data-compare-table]");
    if (table) {
      var ids = plans.map(function (p) { return p.id; });
      table.innerHTML = '<div class="table-scroll"><table class="vtable compare"><caption class="sr-only">Plan comparison</caption><thead><tr><th scope="col">Feature</th>' +
        plans.map(function (p) {
          return '<th scope="col"' + (p.highlight ? ' class="is-featured"' : "") + ">" + VG.esc(p.name) + "</th>";
        }).join("") + "</tr></thead><tbody>" +
        VG.data.compareRows.map(function (row) {
          return "<tr><th scope=\"row\">" + VG.esc(row.label) + "</th>" +
            ids.map(function (id) {
              var v = row[id];
              var muted = v === "\u2014";
              return '<td class="' + (muted ? "is-muted " : "") + (row[id] === "Included" ? "is-yes" : "") + '">' + VG.esc(v) + "</td>";
            }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
    }

    var addons = VG.q("[data-addons]");
    if (addons) {
      addons.innerHTML = VG.data.addons.map(function (a) {
        return '<div class="addon vg-card"><span class="feat-ico">' + VG.icon(a.icon, "w-5 h-5") + "</span>" +
          "<div><h3>" + VG.esc(a.name) + "</h3><p>" + VG.esc(a.note) + "</p></div>" +
          '<span class="addon-price">$' + a.price + '<small>' + VG.esc(a.unit) + "</small></span></div>";
      }).join("");
    }
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
