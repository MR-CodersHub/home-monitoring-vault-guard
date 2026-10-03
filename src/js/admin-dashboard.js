(function () {
  "use strict";

  var RANGES = {
    "7d": { l: "Last 7 days", d: [{ l: "Mon", v: 18400 }, { l: "Tue", v: 21200 }, { l: "Wed", v: 19800 }, { l: "Thu", v: 24600 }, { l: "Fri", v: 27100 }, { l: "Sat", v: 15900 }, { l: "Sun", v: 14200 }] },
    "30d": { l: "Last 30 days", d: [{ l: "W1", v: 64200 }, { l: "W2", v: 71800 }, { l: "W3", v: 69400 }, { l: "W4", v: 88100 }] },
    "12m": { l: "Last 12 months", d: [{ l: "Oct", v: 312000 }, { l: "Nov", v: 328000 }, { l: "Dec", v: 301000 }, { l: "Jan", v: 356000 }, { l: "Feb", v: 371000 }, { l: "Mar", v: 402000 }, { l: "Apr", v: 418000 }, { l: "May", v: 447000 }, { l: "Jun", v: 462000 }, { l: "Jul", v: 489000 }, { l: "Aug", v: 503000 }, { l: "Sep", v: 538000 }] }
  };

  var ALERTS = [
    { sev: "Critical", src: "Villa Ridge · Austin TX", t: "Burglary, zone 2 confirmed", when: "00:04:12", status: "Dispatched", owner: "D. Reyes" },
    { sev: "High", src: "Oak Court 12 · Denver CO", t: "Glass break, front door", when: "00:19:48", status: "Verified", owner: "S. Patel" },
    { sev: "Medium", src: "Lakeside Bungalow · Tampa FL", t: "Video doorbell, unknown face", when: "00:33:05", status: "Pending", owner: "Unassigned" },
    { sev: "Medium", src: "Maple Nook · Portland OR", t: "Low battery x3 sensors", when: "00:41:52", status: "Scheduled", owner: "Field team" },
    { sev: "Low", src: "Harbour Flat 4B · Seattle WA", t: "Guest verification, extra person", when: "01:02:19", status: "Resolved", owner: "A. Okafor" },
    { sev: "Critical", src: "Palm Court · Phoenix AZ", t: "Fire alarm, kitchen zone", when: "01:15:37", status: "Dispatched", owner: "D. Reyes" },
    { sev: "Low", src: "Elm Row · Chicago IL", t: "Automation scene failed", when: "01:44:02", status: "Open", owner: "Support" }
  ];

  var SIGNUPS = [
    ["Avery Linton", "avery@linton.co", "Smart", "2 min ago", "Verified"],
    ["Noor Haddad", "noor@haddad.net", "Essential", "26 min ago", "Trial"],
    ["Brighton Holdings", "ops@brighton.io", "Estate", "1 h ago", "Review"],
    ["Selma Ortiz", "selma.ortiz@mail.com", "Smart", "3 h ago", "Trial"],
    ["Kite & Co. Rentals", "team@kiteco.com", "Estate", "5 h ago", "Verified"],
    ["Jonah Weiss", "jweiss@mail.com", "Watch", "8 h ago", "Trial"]
  ];

  var TICKETS = [
    ["#4821", "Guest cannot receive digital pass at gate", "High", "Open"],
    ["#4818", "Camera offline since Tuesday, Harbour Flat 4B", "Medium", "Awaiting customer"],
    ["#4812", "Add two locks to Estate plan mid-term", "Low", "Resolved"],
    ["#4809", "False alarm report filed with city", "High", "Escalated"]
  ];


  var AGENTS = [
    ["D. Reyes", "Verification lead", "on", "4 alerts"],
    ["S. Patel", "Operator", "on", "2 alerts"],
    ["M. Okoro", "Operator", "break", "\u2014"],
    ["J. Lindqvist", "Operator", "on", "1 alert"],
    ["R. Chandra", "Dispatch liaison", "on", "3 alerts"]
  ];

  function render() {
    var side = VG.q("[data-dash-side]");
    if (side) {
      side.innerHTML = VG.dash.nav([
        { id: "overview", label: "Overview", icon: "grid" },
        { id: "revenue", label: "Revenue", icon: "dollar" },
        { id: "alerts", label: "Alert queue", icon: "alert", badge: "7" },
        { id: "subscribers", label: "Subscribers", icon: "users" },
        { id: "desk", label: "Desk & agents", icon: "headset" },
        { id: "tickets", label: "Tickets", icon: "ticket", badge: "4" }
      ], "overview");
    }

    var kpiHost = VG.q("[data-kpi]");
    if (kpiHost) {
      kpiHost.innerHTML = VG.dash.kpi([
        { label: "Monthly recurring revenue", value: 538240, icon: "dollar", up: true, delta: "6.4%", tone: "t-purple", foot: "vs. $504,900 last month" },
        { label: "Active subscriptions", value: 12843, icon: "users", up: true, delta: "3.1%", tone: "t-mint", foot: "412 trials in progress" },
        { label: "Alerts handled today", value: 1847, icon: "bell", up: true, delta: "9.8%", tone: "t-blue", foot: "Median response 27 s" },
        { label: "False alarm rate", value: 0.3, decimals: 1, suffix: "%", icon: "target", up: false, delta: "0.1%", tone: "t-green", foot: "Target below 1.0%" }
      ]);
    }

    var chartHost = VG.q("[data-revenue-chart]");
    if (chartHost) {
      function paintRange(key) {
        var r = RANGES[key];
        chartHost.innerHTML = VG.dash.bars(r.d, { label: r.l }) +
          '<div class="chart-foot"><span>' + VG.esc(r.l) + "</span><span>Peak " +
          VG.num(Math.max.apply(null, r.d.map(function (x) { return x.v; }))) + " USD</span></div>";
      }
      paintRange("12m");
      var group = VG.q("[data-range-group]");
      if (group) {
        group.addEventListener("click", function (e) {
          var b = e.target.closest("[data-range]");
          if (!b) return;
          VG.qa("[data-range]", group).forEach(function (x) {
            x.classList.toggle("is-active", x === b);
            x.setAttribute("aria-selected", x === b ? "true" : "false");
          });
          paintRange(b.getAttribute("data-range"));
        });
      }
      var sparkHost = VG.q("[data-revenue-spark]");
      if (sparkHost) sparkHost.innerHTML = VG.dash.spark(RANGES["12m"].d.map(function (x) { return x.v; }));
    }

    var donutHost = VG.q("[data-plan-donut]");
    if (donutHost) {
      donutHost.innerHTML = VG.dash.donut([
        { label: "Smart", v: 4810, color: "#A855F7" },
        { label: "Essential", v: 3620, color: "#7C3AED" },
        { label: "Complete", v: 2180, color: "#22D3A5" },
        { label: "Estate", v: 640, color: "#E879F9" },
        { label: "Watch", v: 1593, color: "#6D28D9" }
      ]);
    }


    var alertsHost = VG.q("[data-alert-table]");
    if (alertsHost) {
      VG.dash.table(alertsHost, ["Severity", "Property", "Event", "Elapsed", "Status", "Owner"], ALERTS.map(function (a) {
        var cls = a.sev === "Critical" ? "sev-critical" : a.sev === "High" ? "sev-high" : a.sev === "Medium" ? "sev-medium" : "sev-low";
        return {
          attrs: 'data-filter-table data-sev="' + a.sev + '" data-status="' + a.status + '"',
          cells: [
            '<span class="sev-pill ' + cls + '">' + VG.esc(a.sev) + "</span>",
            VG.esc(a.src),
            VG.esc(a.t),
            '<code>' + VG.esc(a.when) + "</code>",
            VG.esc(a.status),
            VG.esc(a.owner)
          ]
        };
      }));
      VG.dash.filters(document);
    }

    var signHost = VG.q("[data-signup-table]");
    if (signHost) {
      VG.dash.table(signHost, ["Account", "Email", "Plan", "Joined", "State"], SIGNUPS.map(function (s) {
        return {
          attrs: 'data-filter-table data-state="' + s[4] + '"',
          cells: [VG.esc(s[0]), VG.esc(s[1]), VG.esc(s[2]), VG.esc(s[3]), '<span class="tag">' + VG.esc(s[4]) + "</span>"]
        };
      }));
    }

    var agentHost = VG.q("[data-agent-list]");
    if (agentHost) {
      agentHost.innerHTML = AGENTS.map(function (a) {
        var tone = a[2] === "on" ? "t-mint" : "t-amber";
        return '<li class="agent"><span class="agent-avatar">' + VG.esc(a[0].charAt(0)) + "</span>" +
          '<span class="agent-info"><strong>' + VG.esc(a[0]) + "</strong><small>" + VG.esc(a[1]) + " \u00b7 " + VG.esc(a[3]) + "</small></span>" +
          '<span class="dot-pill ' + tone + '">' + (a[2] === "on" ? "On desk" : "Break") + "</span></li>";
      }).join("");
    }

    var ticketHost = VG.q("[data-ticket-table]");
    if (ticketHost) {
      VG.dash.table(ticketHost, ["Ref", "Subject", "Priority", "Status"], TICKETS.map(function (t) {
        return {
          attrs: 'data-filter-table data-status="' + t[3] + '"',
          cells: ["<code>" + VG.esc(t[0]) + "</code>", VG.esc(t[1]), VG.esc(t[2]), VG.esc(t[3])]
        };
      }));
    }

    var feed = VG.q("[data-activity-feed]");
    if (feed) {
      var items = [
        ["check", "Alert #4821 dispatched to Austin PD", "2 min ago"],
        ["userPlus", "Brighton Holdings upgraded to Estate", "18 min ago"],
        ["dollar", "Invoice #99114 paid \u2014 $1,482.00", "41 min ago"],
        ["settings", "Response playbook v4 published", "1 h ago"],
        ["alert", "False alarm cancellation logged, Seattle WA", "2 h ago"]
      ];
      feed.innerHTML = items.map(function (i) {
        return '<li><span class="feed-ico">' + VG.icon(i[0], "w-4 h-4") + "</span>" +
          "<span>" + VG.esc(i[1]) + "</span><time>" + VG.esc(i[2]) + "</time></li>";
      }).join("");
    }

    VG.dash.clock(document);
    VG.reveal(document);
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(render);
})();
