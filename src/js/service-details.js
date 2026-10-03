(function () {
  "use strict";

  function tagList(items) {
    return items.map(function (t) { return '<span class="tag">' + VG.esc(t) + "</span>"; }).join("");
  }

  function iconCards(items) {
    return items.map(function (f) {
      return '<div class="feat-card vg-card"><span class="feat-ico">' + VG.icon(f.icon, "w-5 h-5") + "</span>" +
        '<div><h3>' + VG.esc(f.title) + "</h3><p>" + VG.esc(f.body) + "</p></div></div>";
    }).join("");
  }

  function steps(items) {
    return items.map(function (s, i) {
      return '<li class="step-mini"><span class="step-num">' + ("0" + (i + 1)).slice(-2) + "</span>" +
        '<div><h4>' + VG.esc(s.title) + "</h4><p>" + VG.esc(s.body) + "</p></div></li>";
    }).join("");
  }

function ticks(items, icon, cls) {
    return '<ul class="tick-list ' + (cls || "") + '">' + items.map(function (f) {
      return "<li>" + VG.icon(icon, "w-3.5 h-3.5") + "<span>" + VG.esc(f) + "</span></li>";
    }).join("") + "</ul>";
  }

  function pricingTable(rows) {
    var head = '<div class="table-scroll"><table class="vtable price-table">' +
      '<caption class="sr-only">Pricing tiers for this service</caption><thead><tr>' +
      '<th scope="col">Tier</th><th scope="col">Price</th><th scope="col">Includes</th>' +
      '<th scope="col">Not included</th><th scope="col"><span class="sr-only">Choose</span></th></tr></thead><tbody>';
    var body = rows.map(function (r) {
      var excluded = r.excludes.length ? r.excludes : ["Nothing \u2014 full feature set"];
      return "<tr" + (r.featured ? ' class="is-featured"' : "") + ">" +
        '<th scope="row"><span class="tier-name">' + VG.esc(r.name) + "</span>" +
        (r.featured ? '<span class="tier-flag">Recommended</span>' : "") +
        "<small>" + VG.esc(r.note) + "</small></th>" +
        '<td><strong class="tier-price">$' + r.amount + "</strong><small>" + VG.esc(r.unit) + "</small></td>" +
        "<td>" + ticks(r.features, "check") + "</td>" +
        '<td>' + ticks(excluded, r.excludes.length ? "x" : "check", "muted") + "</td>" +
        '<td><a class="btn-outline btn-compact" href="' + VG.url("public/auth/signup.html") + '">Choose</a></td></tr>';
    }).join("");
    return head + body + "</tbody></table></div>";
  }


  function specs(list) {
    return '<dl class="spec-list">' + list.map(function (s) {
      return "<div><dt>" + VG.esc(s.k) + "</dt><dd>" + VG.esc(s.v) + "</dd></div>";
    }).join("") + "</dl>";
  }

  function faqs(list, openFirst) {
    return list.map(function (f, i) {
      return '<div class="acc-item vg-card' + (openFirst && i === 0 ? " open" : "") + '">' +
        '<button class="acc-head" data-acc-head aria-expanded="' + (openFirst && i === 0 ? "true" : "false") + '">' +
        "<span>" + VG.esc(f.q) + "</span>" + VG.icon("chevDown", "w-4 h-4 acc-caret") + "</button>" +
        '<div class="acc-body" data-acc-body><p>' + VG.esc(f.a) + "</p></div></div>";
    }).join("");
  }

  function render() {
    var host = VG.q("[data-service-detail]");
    if (!host) return;
    var id = VG.param("id");
    var svc = VG.data.serviceById(id) || VG.data.services[0];
    document.title = svc.name + " | " + VG.site.name;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", svc.short);

    var crumbs = VG.q("[data-breadcrumb]");
    if (crumbs) {
      crumbs.innerHTML = '<a href="' + VG.url("index.html") + '">Home</a><span class="sep">/</span>' +
        '<a href="' + VG.url("public/pages/services.html") + '">Services</a><span class="sep">/</span>' +
        "<span>" + VG.esc(svc.name) + "</span>";
    }

    var hero = VG.q("[data-sd-hero]");
    if (hero) {
      hero.innerHTML =
        '<div class="sd-hero-grid">' +
          '<div class="sd-hero-copy" data-reveal="up">' +
            '<span class="vg-eyebrow">' + VG.icon(svc.icon, "w-4 h-4") + VG.esc(svc.category) + "</span>" +
            '<h1 class="vg-title">' + VG.esc(svc.tagline) + "</h1>" +
            '<p class="vg-sub">' + VG.esc(svc.short) + "</p>" +
            '<div class="tag-row">' + tagList(svc.tags) + "</div>" +
            '<div class="sd-facts">' +
              '<span>' + VG.icon("dollar", "w-4 h-4") + "From <strong>$" + svc.priceFrom + "/mo</strong></span>" +
              '<span>' + VG.icon("clock", "w-4 h-4") + VG.esc(svc.duration) + "</span>" +
              '<span>' + VG.icon("star", "w-4 h-4 star") + "<strong>" + svc.rating.toFixed(1) + "</strong> (" + VG.num(svc.reviews) + " reviews)</span>" +
            "</div>" +
            '<div class="btn-row">' +
              '<a class="btn-primary" href="' + VG.url("public/auth/signup.html") + '">Start with this service' + VG.icon("arrowRight", "w-4 h-4") + "</a>" +
              '<a class="btn-ghost" href="' + VG.url("public/pages/contact.html") + '">Ask a specialist</a>' +
            "</div>" +
          "</div>" +
          '<div class="sd-hero-media" data-reveal="right">' +
            '<img src="' + VG.esc(svc.image) + '" alt="' + VG.esc(svc.name) + '" data-fb="' + VG.url("assets/img/ph-camera.svg") + '" />' +
            '<div class="sd-hero-card vg-card"><span class="live-dot" aria-hidden="true"></span>' +
            "<strong>Desk online</strong><span>Operator watching \u00b7 " + VG.site.hours.split("\u00b7")[0].trim() + "</span></div>" +
          "</div>" +
        "</div>";
    }


    var overview = VG.q("[data-sd-overview]");
    if (overview) {
      overview.innerHTML = '<div class="prose" data-reveal="up">' +
        svc.long.map(function (t) { return "<p>" + VG.esc(t) + "</p>"; }).join("") + "</div>";
    }

    var feats = VG.q("[data-sd-features]");
    if (feats) {
      feats.innerHTML = '<div class="feat-grid">' + iconCards(svc.features) + "</div>";
      feats.setAttribute("data-reveal", "up");
    }

    var stepsHost = VG.q("[data-sd-steps]");
    if (stepsHost) {
      stepsHost.innerHTML = '<ol class="steps-mini">' + steps(svc.steps) + "</ol>";
      stepsHost.setAttribute("data-reveal", "up");
    }

    var specHost = VG.q("[data-sd-specs]");
    if (specHost) specHost.innerHTML = specs(svc.specs);

    var priceHost = VG.q("[data-sd-pricing]");
    if (priceHost) priceHost.innerHTML = pricingTable(svc.pricing);

    var faqHost = VG.q("[data-sd-faqs]");
    if (faqHost) {
      faqHost.innerHTML = '<div class="acc">' + faqs(svc.faqs, true) + "</div>" +
        '<p class="note">' + VG.icon("headset", "w-4 h-4 inline-icon") +
        ' Still unsure? <a href="' + VG.url("public/pages/FAQ.html") + '">Read all FAQs</a> or ' +
        '<a href="' + VG.url("public/pages/contact.html") + '">ask the desk</a>.</p>';
    }

    var relHost = VG.q("[data-sd-related]");
    if (relHost) {
      var rel = (svc.related || []).map(function (rid) { return VG.data.serviceById(rid); })
        .filter(Boolean);
      relHost.innerHTML = rel.map(function (r) {
        return '<a class="rel-card vg-card" href="' + VG.url("public/pages/service-details.html?id=" + r.id) + '">' +
          '<span class="rel-ico">' + VG.icon(r.icon, "w-5 h-5") + "</span>" +
          "<span><strong>" + VG.esc(r.name) + "</strong><small>" + VG.esc(r.short.slice(0, 78)) + "\u2026</small></span>" +
          VG.icon("arrowUp", "w-4 h-4") + "</a>";
      }).join("");
    }

    host.setAttribute("data-service-id", svc.id);
    VG.reveal(host);
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
