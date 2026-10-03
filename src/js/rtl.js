(function () {
  "use strict";
  var KEY = "vg-dir";
  var RTL_LANGS = ["ar", "he", "fa", "ur", "ps", "sd", "dv", "ku", "yi"];

  function detect() {
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return RTL_LANGS.indexOf(nav.slice(0, 2).toLowerCase()) !== -1 ? "rtl" : "ltr";
  }

  function current() {
    return document.documentElement.getAttribute("dir") === "rtl" ? "rtl" : "ltr";
  }

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function paint() {
    var d = current();
    document.documentElement.setAttribute("dir", d);
    document.body && document.body.classList.toggle("is-rtl", d === "rtl");
    VG.qa("[data-dir-toggle]").forEach(function (btn) {
      btn.innerHTML = VG.icon(d === "rtl" ? "chevRight" : "globe", "w-[18px] h-[18px]");
      btn.setAttribute("aria-label", d === "rtl" ? "Switch to left to right layout" : "Switch to right to left layout");
      btn.setAttribute("title", d === "rtl" ? "LTR layout" : "RTL layout");
      btn.setAttribute("aria-pressed", d === "rtl" ? "true" : "false");
    });
    window.dispatchEvent(new CustomEvent("vg:dir", { detail: { dir: d } }));
  }

  function apply(d) {
    document.documentElement.setAttribute("dir", d);
    document.documentElement.setAttribute("data-dir", d);
    try { localStorage.setItem(KEY, d); } catch (e) {}
    paint();
  }

  apply(stored() || detect());

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-dir-toggle]") : null;
    if (!btn) return;
    e.preventDefault();
    apply(current() === "rtl" ? "ltr" : "rtl");
  });

  window.VGDir = { apply: apply, current: current, detect: detect, paint: paint };
})();
