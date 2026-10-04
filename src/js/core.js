window.VG = window.VG || {};

(function () {
  "use strict";

  function rootPath() {
    try {
      var s = document.currentScript;
      if (!s) {
        var scripts = document.querySelectorAll('script[src*="core.js"]');
        if (scripts && scripts.length) s = scripts[scripts.length - 1];
      }
      if (s) {
        var raw = s.getAttribute("src") || "";
        var match = raw.match(/^(.*?)src\/js\/core\.js/i);
        if (match) return match[1];
      }
    } catch (e) {}

    var p = window.location.pathname.replace(/\\/g, "/");
    if (/\/public\/auth\/(admin|user)\//i.test(p)) {
      return "../../../";
    }
    if (/\/public\//i.test(p)) {
      return "../../";
    }
    return "";
  }

  function param(name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
  }

  function esc(str) {
    return String(str === undefined || str === null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function num(n) {
    return Number(n).toLocaleString("en-US");
  }

  function q(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qa(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }


  var toastBox = null;
  function toast(msg, type) {
    if (!toastBox) {
      toastBox = document.createElement("div");
      toastBox.className = "toast-stack";
      toastBox.setAttribute("role", "status");
      toastBox.setAttribute("aria-live", "polite");
      document.body.appendChild(toastBox);
    }
    var kind = type || "success";
var mark = kind === "error"
      ? window.VGIcons.icon("alertCircle", "w-4 h-4")
      : kind === "info"
        ? window.VGIcons.icon("info", "w-4 h-4")
        : window.VGIcons.icon("checkCircle", "w-4 h-4");
    var el = document.createElement("div");
    el.className = "toast toast-" + kind;
    el.innerHTML = '<span class="toast-mark">' + mark + "</span><span>" + esc(msg) + "</span>";
    toastBox.appendChild(el);
    requestAnimationFrame(function () { el.classList.add("show"); });
    setTimeout(function () {
      el.classList.remove("show");
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 350);
    }, 3800);
  }

  function reveal(scope) {
    var els = qa("[data-reveal]", scope);
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("revealed"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("revealed");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }


function accordion(scope) {
    var host = scope || document;
    if (!host || host.__vgAcc) return;
    host.__vgAcc = true;
    host.addEventListener("click", function (e) {
      var head = e.target.closest ? e.target.closest("[data-acc-head]") : null;
      if (!head || !host.contains(head)) return;
      var item = head.closest ? head.closest(".acc-item") : head.parentNode;
      if (!item) return;
      var open = item.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function countUp(scope) {
    qa("[data-count]", scope).forEach(function (el) {
      if (el.dataset.done) return;
      var target = parseFloat(el.getAttribute("data-count"));
      var dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
      var io = new IntersectionObserver(function (en) {
        if (!en[0].isIntersecting) return;
        el.dataset.done = "1";
        var start = 0, t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1400, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = num((start + (target - start) * eased).toFixed(dec));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.disconnect();
      }, { threshold: 0.4 });
      io.observe(el);
    });
  }

  function imageFallback(scope) {
    qa("img[data-fb]", scope).forEach(function (img) {
      img.addEventListener("error", function () {
        if (img.dataset.fbDone) return;
        img.dataset.fbDone = "1";
        img.src = img.getAttribute("data-fb");
      }, { once: true });
    });
  }


function stampYear() {
    var y = String(new Date().getFullYear());
    qa("[data-year]").forEach(function (el) { el.textContent = y; });
  }

  function icons(scope) {
    qa("[data-icon]", scope).forEach(function (el) {
      if (el.dataset.iconDone) return;
      var name = el.getAttribute("data-icon");
      el.innerHTML = window.VGIcons.icon(name, el.getAttribute("data-icon-class") || "w-5 h-5");
      el.dataset.iconDone = "1";
    });
  }

  function markActiveLinks() {
    var cleanPath = window.location.pathname.replace(/\/+$/, "");
    var file = cleanPath.split("/").pop() || "index.html";
    if (!file || file.indexOf(".") === -1) file = "index.html";
    var q = window.location.search;
    qa("[data-nav-link]").forEach(function (a) {
      var target = a.getAttribute("data-nav-file") || "";
      var same = target === file;
      var sameQ = target === file && (q === "" || (q !== "" && a.getAttribute("data-nav-q") === "1"));
      if (same && (q === "" || sameQ)) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      }
    });
  }

VG.root = rootPath();
  VG.onReady = VG.onReady || [];
  VG.param = param;
  VG.esc = esc;
  VG.num = num;
  VG.q = q;
  VG.qa = qa;
  VG.icon = window.VGIcons.icon;
  VG.toast = toast;
  VG.reveal = reveal;
  VG.accordion = accordion;
  VG.countUp = countUp;
  VG.imageFallback = imageFallback;
  VG.stampYear = stampYear;
  VG.icons = icons;
  VG.markActiveLinks = markActiveLinks;
  VG.onReady.push(function () {
    VG.qa("[data-toast]").forEach(function (el) {
      if (el.dataset.toastBound) return;
      el.dataset.toastBound = "1";
      el.addEventListener("click", function () {
        toast(el.getAttribute("data-toast"), el.getAttribute("data-toast-type") || "info");
      });
    });
  });
  VG.site = window.VGSite;
  VG.data = window.VGData;
  VG.url = function (path) { return VG.root + path; };
})();
