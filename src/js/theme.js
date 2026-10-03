(function () {
  "use strict";
  var KEY = "vg-theme";
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)") : null;

  function current() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function paint() {
    var t = current();
    var dark = t === "dark";
    document.documentElement.setAttribute("data-theme", t);
    document.documentElement.classList.toggle("dark", dark);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#120D2B" : "#F5F3FD");
    VG.qa("[data-theme-toggle]").forEach(function (btn) {
      btn.innerHTML = dark ? VG.icon("sun", "w-[18px] h-[18px]") : VG.icon("moon", "w-[18px] h-[18px]");
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      btn.setAttribute("title", dark ? "Light mode" : "Dark mode");
      btn.setAttribute("aria-pressed", dark ? "true" : "false");
    });
    window.dispatchEvent(new CustomEvent("vg:theme", { detail: { theme: t } }));
  }

  function apply(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    paint();
  }

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  apply(stored() || (media && media.matches ? "light" : "dark"));

  if (media) {
    var onChange = function (e) { if (!stored()) apply(e.matches ? "light" : "dark"); };
    if (media.addEventListener) media.addEventListener("change", onChange);
    else if (media.addListener) media.addListener(onChange);
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-theme-toggle]") : null;
    if (!btn) return;
    e.preventDefault();
    apply(current() === "dark" ? "light" : "dark");
  });

  window.VGTheme = { apply: apply, current: current, paint: paint, toggle: function () { apply(current() === "dark" ? "light" : "dark"); } };
})();
