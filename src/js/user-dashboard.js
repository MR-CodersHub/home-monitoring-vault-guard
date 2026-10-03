(function () {
  "use strict";

  var DEVICES = [
    { name: "Front Door", kind: "Video doorbell", icon: "video", status: "Online", battery: 78, cam: "Doorbell HD", rec: true },
    { name: "Driveway", kind: "Outdoor camera", icon: "camera", status: "Online", battery: 100, cam: "Cam 2 \u00b7 4K", rec: true },
    { name: "Backyard", kind: "Outdoor camera", icon: "camera", status: "Online", battery: 64, cam: "Cam 3 \u00b7 4K", rec: true },
    { name: "Front Entry", kind: "Smart lock", icon: "lock", status: "Online", battery: 71, cam: "\u2014", rec: false },
    { name: "Garage Side Door", kind: "Contact sensor", icon: "sliders", status: "Low battery", battery: 12, cam: "\u2014", rec: false },
    { name: "Living Room", kind: "Indoor camera", icon: "video", status: "Paused", battery: 100, cam: "Cam 5 \u00b7 2K", rec: false }
  ];

  var EVENTS = [
    ["activity", "Motion detected, Driveway", "Today 18:42", "Reviewed"],
    ["bell", "Guest verification passed \u2014 M. Alvarez", "Today 17:05", "Auto"],
    ["lock", "Front Entry unlocked by fingerprint: Sam", "Today 16:58", "Permitted"],
    ["alert", "Low battery: Garage Side Door sensor", "Yesterday 21:12", "Action needed"],
    ["power", "System armed, Away mode", "Yesterday 19:40", "Auto"],
    ["activity", "Motion detected, Backyard", "Yesterday 15:22", "Reviewed"]
  ];

  var INVOICES = [
    ["VG-2026-0041", "12 Sep 2026", "$39.00", "Paid"],
    ["VG-2026-0038", "12 Aug 2026", "$39.00", "Paid"],
    ["VG-2026-0035", "12 Jul 2026", "$39.00", "Paid"],
    ["VG-2026-0032", "12 Jun 2026", "$34.00", "Paid"]
  ];


  function render() {
    var side = VG.q("[data-dash-side]");
    if (side) {
      side.innerHTML = VG.dash.nav([
        { id: "overview", label: "Overview", icon: "grid" },
        { id: "plan", label: "My plan", icon: "briefcase" },
        { id: "devices", label: "Devices", icon: "camera", badge: "6" },
        { id: "activity", label: "Activity", icon: "activity" },
        { id: "billing", label: "Billing", icon: "card" },
        { id: "settings", label: "Settings", icon: "sliders" }
      ], "overview");
    }

    var kpiHost = VG.q("[data-kpi]");
    if (kpiHost) {
      kpiHost.innerHTML = VG.dash.kpi([
        { label: "Plan", value: 0, icon: "briefcase", tone: "t-purple", foot: "Smart \u00b7 $39/mo, renews 12 Oct" },
        { label: "Days protected", value: 412, icon: "calendar", up: true, delta: "+30", tone: "t-mint", foot: "Continuous coverage since Mar 2025" },
        { label: "Devices online", value: 5, suffix: "/6", icon: "wifi", tone: "t-blue", foot: "One sensor needs a battery" },
        { label: "Alerts this month", value: 23, icon: "bell", tone: "t-green", foot: "2 needed review, 21 handled" }
      ]);
    }

    var planHost = VG.q("[data-plan-card]");
    if (planHost) {
      planHost.innerHTML = '<div class="plan vg-card is-featured">' +
        '<div class="plan-top"><span class="plan-flag">Active</span>' +
        '<h3 class="plan-name">Smart</h3><p class="plan-blurb">Connected security with video verification and smart access.</p></div>' +
        '<div class="plan-price"><span class="cur">$</span><span class="amt">39</span><span class="per">/month</span></div>' +
        '<ul class="tick-list plan-ticks">' +
        ["6 smart cameras", "Video doorbell with agent greeting", "Smart lock integration", "Live video verification", "30-day cloud storage"]
          .map(function (f) { return "<li>" + VG.icon("check", "w-4 h-4") + "<span>" + VG.esc(f) + "</span></li>"; }).join("") +
        "</ul>" +
        '<div class="usage"><div class="usage-row"><span>Camera allowance</span><strong>6 of 6 used</strong></div>' +
        '<div class="bar"><i style="width:100%"></i></div>' +
        '<div class="usage-row"><span>Storage used</span><strong>412 GB of 1 TB</strong></div>' +
        '<div class="bar"><i style="width:41%"></i></div>' +
        '<div class="usage-row"><span>Trial days left</span><strong>Renews 12 Oct 2026</strong></div></div>' +
        '<div class="btn-row"><a class="btn-primary btn-compact" href="' + VG.url("public/pages/pricing.html") + '">Upgrade plan</a>' +
        '<a class="btn-ghost btn-compact" href="' + VG.url("public/pages/contact.html") + '">Talk to the desk</a></div></div>';
    }


    var devHost = VG.q("[data-device-grid]");
    if (devHost) {
      devHost.innerHTML = DEVICES.map(function (d, i) {
        var tone = d.status === "Online" ? "t-mint" : d.status === "Low battery" ? "t-amber" : "t-muted";
        var low = d.battery < 20;
        return '<article class="device vg-card">' +
          '<div class="device-top"><span class="feat-ico">' + VG.icon(d.icon, "w-5 h-5") + "</span>" +
          '<span class="dot-pill ' + tone + '">' + VG.esc(d.status) + "</span></div>" +
          "<h3>" + VG.esc(d.name) + "</h3><p>" + VG.esc(d.kind) + " \u00b7 " + VG.esc(d.cam) + "</p>" +
          '<div class="device-meta"><span>' + VG.icon(d.battery === 100 ? "zap" : "power", "w-3.5 h-3.5") +
          (d.battery === 100 ? "Mains power" : "Battery " + d.battery + "%") + "</span>" +
          (low ? '<span class="warn">' + VG.icon("alert", "w-3.5 h-3.5") + "Replace soon</span>" : "") + "</div>" +
          '<div class="device-foot"><label class="switch" data-switch data-switch-label="Recording on ' + VG.esc(d.name) + '">' +
          '<input type="checkbox"' + (d.rec ? " checked" : "") + ' aria-label="Recording on ' + VG.esc(d.name) + '" /><span class="track"></span></label>' +
          '<button type="button" class="link-btn" data-device-test="' + i + '">' + VG.icon("activity", "w-3.5 h-3.5") + "Test</button></div>" +
          "</article>";
      }).join("");
      VG.dash.switches(devHost);
      VG.qa("[data-device-test]", devHost).forEach(function (b) {
        b.addEventListener("click", function () {
          VG.toast("Test signal sent \u2014 the desk acknowledged in 6 seconds.", "success");
        });
      });
    }

    var evHost = VG.q("[data-event-list]");
    if (evHost) {
      evHost.innerHTML = EVENTS.map(function (e) {
        return '<li><span class="feed-ico">' + VG.icon(e[0], "w-4 h-4") + "</span>" +
          "<span>" + VG.esc(e[1]) + "</span><time>" + VG.esc(e[2]) + "</time>" +
          '<span class="tag">' + VG.esc(e[3]) + "</span></li>";
      }).join("");
    }

    var invHost = VG.q("[data-invoice-table]");
    if (invHost) {
      VG.dash.table(invHost, ["Invoice", "Date", "Amount", "Status"], INVOICES.map(function (v) {
        return { attrs: 'data-filter-table', cells: ["<code>" + VG.esc(v[0]) + "</code>", VG.esc(v[1]), VG.esc(v[2]), '<span class="tag">' + VG.esc(v[3]) + "</span>"] };
      }));
    }

var tabGroup = VG.q("[data-tab-group]");
    if (tabGroup) VG.dash.tabs(document);
    VG.dash.filters(document);
    var swHost = VG.q("[data-prefs]");
    if (swHost) {
      VG.dash.switches(swHost);
      VG.qa("[data-switch]", swHost).forEach(function (s) { s.querySelector("input").checked = true; s.classList.add("is-on"); });
    }

    VG.dash.clock(document);
    VG.reveal(document);
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
