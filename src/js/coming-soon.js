(function () {
  "use strict";

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function tick() {
    var host = VG.q("[data-countdown]");
    if (!host) return;
    var target = new Date(host.getAttribute("data-countdown") + "T09:00:00").getTime();
    var diff = target - Date.now();
    if (diff < 0) diff = 0;
    var s = Math.floor(diff / 1000);
    var days = Math.floor(s / 86400);
    var hours = Math.floor((s % 86400) / 3600);
    var mins = Math.floor((s % 3600) / 60);
    var secs = s % 60;
    host.innerHTML = [
      { v: days, l: "Days" }, { v: hours, l: "Hours" }, { v: mins, l: "Minutes" }, { v: secs, l: "Seconds" }
    ].map(function (p) {
      return '<div class="cd-cell vg-card"><span class="cd-num">' + pad(p.v) + "</span><span class=\"cd-lab\">" + p.l + "</span></div>";
    }).join("");
    var bar = VG.q("[data-launch-bar]");
    var total = target - new Date(host.getAttribute("data-launch-start") + "T09:00:00").getTime();
    if (bar && total > 0) {
      var pct = Math.min(100, Math.max(4, Math.round(((total - diff) / total) * 100)));
      bar.style.width = pct + "%";
      var lab = VG.q("[data-launch-pct]");
      if (lab) lab.textContent = pct + "% built";
    }
  }

  function render() {
    var host = VG.q("[data-countdown]");
    if (!host) return;
    tick();
    setInterval(tick, 1000);
    var checklist = VG.q("[data-launch-list]");
    if (checklist) {
      var items = [
        ["Alert routing engine v3", true],
        ["Guest verification with live agents", true],
        ["Neighbourhood camera mesh", true],
        ["Battery-free doorbell hardware", false],
        ["Property manager API", false]
      ];
      checklist.innerHTML = items.map(function (it) {
        return '<li class="' + (it[1] ? "done" : "") + '">' +
          VG.icon(it[1] ? "checkCircle" : "clock", "w-4 h-4") + "<span>" + VG.esc(it[0]) + "</span>" +
          '<em>' + (it[1] ? "Shipped" : "In build") + "</em></li>";
      }).join("");
    }
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
