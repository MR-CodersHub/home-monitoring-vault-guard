window.VGData = window.VGData || {};

window.VGData.plans = [
  {
    id: "watch",
    name: "Watch",
    blurb: "Self-monitored protection for apartments and first homes.",
    monthly: 0,
    annual: 0,
    trial: 0,
    badge: "Free forever",
    highlight: false,
    features: ["2 cameras or 1 doorbell", "App alerts only", "7-day clip history", "1 named household member"],
    excludes: ["24/7 operator monitoring", "Authority dispatch", "Video verification"]
  },
  {
    id: "essential",
    name: "Essential",
    blurb: "Alarm monitoring with a human on the other end of every signal.",
    monthly: 19,
    annual: 15,
    trial: 30,
    badge: "30-day free trial",
    highlight: false,
    features: ["2 smart cameras", "Door and window sensors", "24/7 operator monitoring", "App + SMS alerts", "30-day event log"],
    excludes: ["Live video verification", "Guest verification"]
  },
  {
    id: "smart",
    name: "Smart",
    blurb: "Connected security with video verification and smart access.",
    monthly: 39,
    annual: 31,
    trial: 30,
    badge: "Most chosen",
    highlight: true,
    features: ["6 smart cameras", "Video doorbell with agent greeting", "Smart lock integration", "Live video verification", "Authority dispatch", "30-day cloud storage", "Automation scenes"],
    excludes: []
  },
  {
    id: "complete",
    name: "Complete",
    blurb: "Everything monitored, unlimited cameras, priority response.",
    monthly: 69,
    annual: 55,
    trial: 30,
    badge: "Best for families",
    highlight: false,
    features: ["Unlimited cameras", "Full sensor suite", "2 smart locks + alarm panel", "Priority 27-second response", "Unlimited cloud storage", "Quarterly security review"],
    excludes: []
  },
  {
    id: "estate",
    name: "Estate",
    blurb: "Landlords, HOAs and small portfolios with a shared dashboard.",
    monthly: 149,
    annual: 119,
    trial: 14,
    badge: "Portfolio plan",
    highlight: false,
    features: ["Up to 12 doors and gates", "Tenant invites and guest passes", "Rental Watch verification", "Portfolio-wide dashboard", "Monthly SLA report", "Named account engineer"],
    excludes: []
  }
];

window.VGData.planById = function (id) {
  var list = window.VGData.plans;
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
  return null;
};

window.VGData.compareRows = [
  { label: "Cameras included", watch: "2", essential: "2", smart: "6", complete: "Unlimited", estate: "Unlimited" },
  { label: "Smart locks", watch: "\u2014", essential: "\u2014", smart: "1", complete: "2", estate: "12" },
  { label: "24/7 operator monitoring", watch: "\u2014", essential: "Included", smart: "Included", complete: "Included", estate: "Included" },
  { label: "Video verification", watch: "\u2014", essential: "\u2014", smart: "Included", complete: "Included", estate: "Included" },
  { label: "Authority dispatch", watch: "\u2014", essential: "Included", smart: "Included", complete: "Priority", estate: "Priority" },
  { label: "Guest verification", watch: "\u2014", essential: "\u2014", smart: "Doorbell only", complete: "Doorbell only", estate: "Full Rental Watch" },
  { label: "Cloud retention", watch: "7 days", essential: "30 days", smart: "30 days", complete: "Unlimited", estate: "Unlimited" },
  { label: "Automation scenes", watch: "3", essential: "8", smart: "Unlimited", complete: "Unlimited", estate: "Unlimited" },
  { label: "Response SLA", watch: "None", essential: "45 s median", smart: "32 s median", complete: "27 s median", estate: "27 s median" },
  { label: "SLA report", watch: "\u2014", essential: "Quarterly", smart: "Monthly", complete: "Monthly", estate: "Monthly" }
];

window.VGData.addons = [
  { name: "Extra camera", price: 8, unit: "per month", icon: "camera", note: "Any point, indoor or outdoor" },
  { name: "Cellular failover radio", price: 6, unit: "per month", icon: "wifi", note: "Keeps monitoring live if broadband drops" },
  { name: "Extra safe key vault", price: 4, unit: "per month", icon: "key", note: "With responder unlock training" },
  { name: "Evidence pack service", price: 15, unit: "per case", icon: "file", note: "Assembled, watermarked and certified" },
  { name: "Vacation watch", price: 12, unit: "per month", icon: "shield", note: "Extra checks while you are away" },
  { name: "Guest pass unlimited", price: 9, unit: "per month", icon: "users", note: "Live verification for every arrival" }
];
