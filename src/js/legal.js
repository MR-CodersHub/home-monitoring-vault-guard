(function () {
  "use strict";

  function render() {
var docs = VG.qa("[data-legal]");
    if (!docs.length) return;
    var sections = [];
    docs.forEach(function (doc) {
      sections = sections.concat(VG.qa(".legal-section", doc));
    });
    if (!sections.length) return;

    sections.forEach(function (sec) {
      var h = sec.querySelector("h2");
      if (h && !h.id) h.id = "legal-" + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40);
    });

    var toc = VG.q("[data-legal-toc]");
    if (toc) {
      toc.innerHTML = '<nav class="toc" aria-label="On this page"><h4>Contents</h4><ol>' +
        sections.map(function (s) {
          var h = s.querySelector("h2");
          return "<li><a href=\"#" + h.id + "\">" + VG.esc(h.textContent) + "</a></li>";
        }).join("") + "</ol></nav>";
    }

    var links = VG.qa("[data-legal-toc] a");
function spy() {
      var current = sections[0].id;
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= 140) current = s.id;
      });
      links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + current); });
    }
    window.addEventListener("scroll", spy, { passive: true });
    spy();

    var top = VG.q("[data-to-top]");
    if (top) {
      top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    }
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
