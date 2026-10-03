(function () {
  "use strict";

  function init() {
(VG.onReady || []).forEach(function (fn) {
      try { fn(); } catch (err) { if (window.console) console.warn(err); }
    });
    VG.icons(document);
    VG.accordion(document);
    VG.reveal(document);
    VG.countUp(document);
    VG.imageFallback(document);
    VG.stampYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.addEventListener("load", function () {
    VG.imageFallback(document);
    VG.reveal(document);
  });
})();
