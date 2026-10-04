(function () {
  "use strict";

  function logo(size) {
    var s = size || 30;
    return '<img class="footer-logo-img" src="' + VG.url("assets/logo.png") + '" alt="VaultGuard logo" width="' + s + '" height="' + s + '" style="display:block;width:' + s + 'px;height:' + s + 'px;object-fit:contain;" />';
  }

  function socials() {
    var list = [
      { label: "X", d: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 5.896zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>' },
      { label: "Instagram", d: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>' },
      { label: "Facebook", d: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
      { label: "LinkedIn", d: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' }
    ];
    return list.map(function (s) {
      return '<a class="social-icon" href="#" aria-label="' + s.label + '">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + s.d + "</svg></a>";
    }).join("");
  }

  function col(title, links) {
    return '<div class="footer-col"><h4 class="footer-col-title">' + title + "</h4><ul class=\"footer-links\" role=\"list\">" +
      links.map(function (l) {
        return '<li><a class="footer-link" href="' + VG.url(l.path) + '">' + VG.esc(l.label) + "</a></li>";
      }).join("") + "</ul></div>";
  }


  function markup() {
    var s = VG.site;
    return '<footer class="footer" id="footer" role="contentinfo">' +
      '<div class="footer-top-glow" aria-hidden="true"></div>' +
      '<div class="vg-container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<a href="' + VG.url("index.html") + '" class="nav-logo footer-logo">' +
              '<span class="logo-icon" aria-hidden="true">' + logo(28) + "</span>" +
              '<span class="logo-text">' + VG.esc(s.name) + "</span></a>" +
            '<p class="footer-desc">' + VG.esc(s.tagline) + " \u2014 professionally monitored alarms, cameras, access control and rental verification for homes that cannot be unmonitored.</p>" +
            '<div class="footer-socials" aria-label="Social media">' + socials() + "</div>" +
            '<form class="footer-news" data-form="newsletter" novalidate>' +
              '<label class="footer-news-label" for="footerEmail">' + VG.icon("mail", "w-4 h-4") + "Security briefings, monthly. No noise.</label>" +
              '<div class="footer-news-row">' +
                '<input class="input" type="email" id="footerEmail" name="email" placeholder="you@email.com" data-label="Email" autocomplete="email" required />' +
                '<button class="btn-primary btn-compact" type="submit">Subscribe</button>' +
              "</div>" +
              '<p class="form-msg" data-form-msg role="status"></p>' +
            "</form>" +
          "</div>" +
          col("Products", s.footerProducts) +
          col("Company", s.footerCompany) +
          col("Support", s.footerSupport) +
        "</div>" +
        '<div class="footer-bottom">' +
          '<p class="footer-copy">\u00a9 <span data-year>2026</span> ' + VG.esc(s.name) + " Security. All rights reserved. Licensed alarm monitoring operator.</p>" +
          '<div class="footer-bottom-links">' +
            '<a href="' + VG.url("public/pages/Privacy-policy.html") + '">Privacy Policy</a>' +
            '<a href="' + VG.url("public/pages/Terms-of-service.html") + '">Terms</a>' +
            '<a href="' + VG.url("public/pages/FAQ.html") + '">FAQ</a>' +
            '<a href="tel:' + s.phone.replace(/-/g, "") + '">' + VG.esc(s.phone) + "</a>" +
          "</div>" +
        "</div>" +
      "</div></footer>";
  }

  function mount() {
    var host = VG.q("[data-footer]");
    if (!host) return;
    host.innerHTML = markup();
    VG.stampYear();
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(mount);
})();
