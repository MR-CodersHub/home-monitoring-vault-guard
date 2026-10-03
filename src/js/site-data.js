window.VGSite = {
  name: "VaultGuard",
  tagline: "Professional home security and smart monitoring",
  phone: "1-800-555-0199",
  phoneHref: "tel:+18005550199",
  email: "hello@vaultguard.com",
  supportEmail: "support@vaultguard.com",
  salesEmail: "sales@vaultguard.com",
  address: "4180 Halcyon Ridge Blvd, Suite 210, Austin, TX 78758",
  addressShort: "Austin, Texas",
  hours: "Monitoring desk 24/7 \u00b7 Office Mon\u2013Fri, 8:00\u201320:00 CT",
  mapsUrl: "https://maps.google.com/?q=4180+Halcyon+Ridge+Blvd+Austin+TX",
  nav: [
    { label: "Home", path: "index.html" },
    { label: "Smart Rentals", path: "public/pages/home-2.html" },
    { label: "Services", path: "public/pages/services.html" },
    { label: "Pricing", path: "public/pages/pricing.html" },
    { label: "Blog", path: "public/pages/blog.html" },
    { label: "FAQ", path: "public/pages/FAQ.html" },
    { label: "Contact", path: "public/pages/contact.html" }
  ],
  auth: {
    login: "public/auth/login.html",
    signup: "public/auth/signup.html",
    admin: "public/auth/admin/admin-dashboard.html",
    user: "public/auth/user/user-dashboard.html"
  },
  footerProducts: [
    { label: "24/7 Alarm Monitoring", path: "public/pages/service-details.html?id=alarm-monitoring" },
    { label: "Smart Camera Install", path: "public/pages/service-details.html?id=smart-cameras" },
    { label: "Video Doorbells", path: "public/pages/service-details.html?id=video-doorbell" },
    { label: "Smart Locks & Access", path: "public/pages/service-details.html?id=smart-locks" },
    { label: "Rental Watch", path: "public/pages/service-details.html?id=rental-watch" }
  ],
  footerCompany: [
    { label: "About Us", path: "public/pages/about.html" },
    { label: "Smart Rentals", path: "public/pages/home-2.html" },
    { label: "All Services", path: "public/pages/services.html" },
    { label: "Pricing", path: "public/pages/pricing.html" },
    { label: "Blog", path: "public/pages/blog.html" }
  ],
  footerSupport: [
    { label: "Help Center", path: "public/pages/FAQ.html" },
    { label: "Privacy Policy", path: "public/pages/Privacy-policy.html" },
    { label: "Terms of Service", path: "public/pages/Terms-of-service.html" },
    { label: "Coming Soon", path: "public/pages/coming-soon.html" }
  ],
  stats: [
    { value: 12800, suffix: "+", label: "Homes protected" },
    { value: 99.4, suffix: "%", label: "Systems online", decimals: 1 },
    { value: 27, suffix: "s", label: "Average response", decimals: 0 },
    { value: 3400, suffix: "+", label: "Cities covered" }
  ],
  team: [
    { name: "Amara Okafor", role: "Founder & CEO", icon: "shield", bio: "Former law-enforcement dispatcher who built VaultGuard after a decade of watching alarm companies miss response windows." },
    { name: "Daniel Reyes", role: "Head of Monitoring Operations", icon: "activity", bio: "Runs the 24/7 verification desk and the response playbook used by every VaultGuard monitoring team." },
    { name: "Priya Raman", role: "Director of Smart Hardware", icon: "camera", bio: "Designs the camera, doorbell and sensor line, and leads field installation quality across all regions." },
    { name: "Tom\u00e1s Herrera", role: "Lead Field Engineer", icon: "wrench", bio: "Certifies every installer and handles complex retrofits for heritage homes and gated communities." },
    { name: "Nadia Belkacem", role: "Customer Trust Lead", icon: "headset", bio: "Owns onboarding, SLA reporting and the response-time transparency programme we publish monthly." },
    { name: "Jae-won Park", role: "Data & AI Engineer", icon: "database", bio: "Builds the pattern-learning model that filters neighbour traffic and holiday-package noise." }
  ],
  testimonials: [
    { name: "Maya Fernandes", role: "Homeowner \u00b7 Austin, TX", stars: 5, quote: "The verification desk called me before the police did. They had already disarmed my panel and were waiting at my door when I got home. Nothing else I tried felt this fast." },
    { name: "Derek Huang", role: "Property Manager \u00b7 22 units", stars: 5, quote: "We run eleven rentals on the rental watch plan. Damage claims dropped by more than half because every guest arrival is on video and time-stamped." },
    { name: "Sara Lindqvist", role: "Homeowner \u00b7 Denver, CO", stars: 5, quote: "Three false alarms in one year, all explained honestly by the team. That transparency is rarer than it should be in this industry." },
    { name: "Michael Adeyemi", role: "Airbnb Host \u00b7 Nashville, TN", stars: 5, quote: "Selfie check-in with a live agent replaced my lockbox codes entirely. Guests love it and my insurance company loved it more." },
    { name: "Lena Kowalski", role: "Smart-home Enthusiast \u00b7 Chicago, IL", stars: 4, quote: "The camera and lock integration is the smoothest I have used. Setup took 90 minutes and the app just works." },
    { name: "Robert Iwu", role: "Facilities Lead \u00b7 HOA, 60 units", stars: 5, quote: "One dashboard for six buildings, shared with my board, and a monthly SLA report I can actually read." }
  ],
  faqGroups: [
    { id: "getting-started", label: "Getting started", icon: "rocket" },
    { id: "monitoring", label: "Monitoring & response", icon: "activity" },
    { id: "billing", label: "Billing & plans", icon: "card" },
    { id: "hardware", label: "Hardware & install", icon: "camera" },
    { id: "account", label: "Account & privacy", icon: "lock" }
  ],
  value: function () {
    return window.VGSite;
  }
};
