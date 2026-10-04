(function () {
  "use strict";

  function logo(size) {
    var s = size || 34;
    return '<img class="nav-logo-img" src="' + VG.url("assets/logo.png") + '" alt="VaultGuard logo" width="' + s + '" height="' + s + '" style="display:block;width:' + s + 'px;height:' + s + 'px;object-fit:contain;" />';
  }

  function navLinks() {
    var out = "";
    VG.site.nav.forEach(function (item) {
      var file = item.path.split("/").pop();
      out += '<li><a class="nav-link" href="' + VG.url(item.path) + '" data-nav-link data-nav-file="' + file + '">' +
        VG.esc(item.label) + "</a></li>";
    });
    return out;
  }

  function dropdownItem(icon, label, path, note) {
    return '<a class="pd-item" role="menuitem" href="' + VG.url(path) + '">' +
      '<span class="pd-ico">' + VG.icon(icon, "w-[18px] h-[18px]") + "</span>" +
      '<span class="pd-text"><strong>' + VG.esc(label) + "</strong>" +
      (note ? "<small>" + VG.esc(note) + "</small>" : "") + "</span></a>";
  }

  function markup() {
    var s = VG.site, a = s.auth;
    return '<nav class="navbar" id="navbar" aria-label="Main">' +
      '<div class="nav-container">' +
        '<a href="' + VG.url("index.html") + '" class="nav-logo" aria-label="' + VG.esc(s.name) + ' home">' +
          '<span class="logo-icon" aria-hidden="true">'+logo(32)+ "</span>" +
          '<span class="logo-text">' + VG.esc(s.name) + "</span>" +
        "</a>" +
        '<ul class="nav-links" id="navLinks" role="list">' + navLinks() + "</ul>" +
        '<div class="nav-actions">' +
          '<button type="button" class="icon-btn" data-theme-toggle></button>' +
          '<button type="button" class="icon-btn" data-dir-toggle></button>' +
          '<div class="profile-menu">' +
            '<button type="button" class="profile-btn" id="profileBtn" aria-haspopup="true" aria-expanded="false" aria-controls="profileDropdown">' +
              VG.icon("user", "w-[18px] h-[18px]") +
            "</button>" +
            '<div class="profile-dropdown" id="profileDropdown" role="menu" aria-labelledby="profileBtn">' +
              '<div class="pd-head">' + logo(32) +
              '<div><strong>' + VG.esc(s.name) + "</strong></div></div>" +
              dropdownItem("logIn", "Sign in", a.login) +
              dropdownItem("userPlus", "Create account", a.signup) +
              '<span class="pd-sep" aria-hidden="true"></span>' +
              dropdownItem("grid", "User dashboard", a.user) +
              dropdownItem("shieldCheck", "Admin dashboard", a.admin) +
              '<span class="pd-sep" aria-hidden="true"></span>' +
              dropdownItem("headset", "Talk to support", "public/pages/contact.html") +
            "</div>" +
          "</div>" +
          '<button type="button" class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">' +
            "<span></span><span></span><span></span></button>" +
        "</div>" +
      "</div></nav>" +
      '<div class="mobile-overlay" id="mobileOverlay" aria-hidden="true"></div>';
  }

  function mount() {
    var host = VG.q("[data-navbar]");
    if (!host) return;
    host.innerHTML = markup();
    bind();
    VG.markActiveLinks();
    if (window.VGTheme) window.VGTheme.paint();
    if (window.VGDir) window.VGDir.paint();
  }

  function bind() {
    var navbar = VG.q("#navbar");
    var hamburger = VG.q("#hamburger");
    var navLinksEl = VG.q("#navLinks");
    var overlay = VG.q("#mobileOverlay");
    var profileMenu = VG.q(".profile-menu");
    var profileBtn = VG.q("#profileBtn");
    var dropdown = VG.q("#profileDropdown");

    function onScroll() {
      if (window.scrollY > 30) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function setMenu(open) {
      hamburger.classList.toggle("open", open);
      navLinksEl.classList.toggle("open", open);
      overlay.classList.toggle("open", open);
      overlay.setAttribute("aria-hidden", open ? "false" : "true");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    }
    hamburger.addEventListener("click", function () {
      setMenu(!navLinksEl.classList.contains("open"));
    });
    overlay.addEventListener("click", function () { setMenu(false); });
    VG.qa("#navLinks .nav-link").forEach(function (l) {
      l.addEventListener("click", function () { setMenu(false); });
    });

    function setDrop(open) {
      if (profileMenu) profileMenu.classList.toggle("open", open);
      if (dropdown) dropdown.classList.toggle("open", open);
      if (profileBtn) profileBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    if (profileBtn && dropdown) {
      profileBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = profileMenu ? profileMenu.classList.contains("open") : dropdown.classList.contains("open");
        setDrop(!isOpen);
      });
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".profile-menu")) setDrop(false);
      });
      dropdown.addEventListener("click", function (e) {
        if (e.target.closest(".pd-item")) setDrop(false);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      setDrop(false);
      setMenu(false);
    });

    VG.qa('a[href^="#"]').forEach(function (a) {
      if (a.closest("#navLinks")) return;
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        var top = t.getBoundingClientRect().top + window.pageYOffset - 78;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(mount);
})();
