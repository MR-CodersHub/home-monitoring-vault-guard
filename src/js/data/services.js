window.VGData = window.VGData || {};

window.VGData.services = [
  {
    id: "alarm-monitoring",
    name: "24/7 Alarm Monitoring",
    short: "Trained operators verify every alarm, contact you, and dispatch emergency services when a real event is confirmed.",
    category: "Monitoring",
    icon: "activity",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=900&q=80&auto=format&fit=crop",
    priceFrom: 19,
    duration: "Setup in 24 hours",
    rating: 4.9,
    reviews: 2184,
    tagline: "The desk that never sleeps on your behalf",
    tags: ["24/7 operators", "Verified dispatch", "Under 30 seconds"],
    long: [
      "Every alarm your panel sends lands on a staffed verification desk \u2014 not a call centre queue. Our operators work from a live dashboard that shows the last 90 seconds of video from every camera on your property, plus the state of every sensor, the last time you armed the panel, and whether anyone else has a valid code.",
      "We verify before we dispatch. The difference sounds small, but it is the whole reason VaultGuard monitors over the phone: false alarms cost police time, and police time is finite. When an event is genuinely urgent, our operators speak to you first, then notify police, fire, or medical services with your address, zone, and a live description of what is happening inside.",
      "You are not a ticket number. Every alert creates a timeline entry you can open later, with the operator's notes, the video snapshot, and the actions taken. If a responder ever visits your property, that timeline is what makes the difference between a quick check and a long investigation."
    ],
    features: [
      { icon: "headset", title: "Human verification", body: "Every signal is reviewed by a trained operator before any authority is contacted." },
      { icon: "clock", title: "27 second median response", body: "Median time from signal to human voice on the line, measured across all monitored homes." },
      { icon: "video", title: "Live video context", body: "Operators see up to 90 seconds of pre-alarm video before deciding to escalate." },
      { icon: "mapPin", title: "Local dispatch", body: "Address, zone and access notes are pushed to responders with your pre-authorised list." },
      { icon: "file", title: "Permanent event log", body: "Every alert keeps notes, snapshots and outcomes in a timeline you control." },
      { icon: "shieldCheck", title: "False-alarm promise", body: "Confirmed false alarms are documented so police agencies can support your next permit." }
    ],
    steps: [
      { title: "We pair your panel", body: "Send us the panel make and model. Most panels pair in under ten minutes with guided instructions." },
      { title: "Set your response profile", body: "Tell us who to call first, who gets the spare key, and which authorities you pre-authorise." },
      { title: "Run a live drill", body: "A test signal confirms the full chain from sensor to operator to your phone." },
      { title: "Go live with monitoring", body: "Your property appears on the desk wall and stays there, every hour of the year." }
    ],
    pricing: [
      { name: "Desk Only", amount: 19, unit: "per month", note: "Monitoring without dispatch", features: ["24/7 operator desk", "App + SMS alerts", "30-day event log", "Battery health checks"], excludes: ["Authority dispatch", "Video verification"] },
      { name: "Verified Response", amount: 29, unit: "per month", note: "Most chosen", featured: true, features: ["Everything in Desk Only", "Live video verification", "Authority dispatch", "90-day event log", "Priority caller ID"] },
      { name: "Guard Response", amount: 45, unit: "per month", note: "With field responder", features: ["Everything in Verified Response", "Vetted field responder", "45-minute on-site target", "Annual alarm-permit support"] }
    ],
    specs: [
      { k: "Coverage", v: "24 hours, 365 days, including holidays" },
      { k: "Median response", v: "27 seconds from signal to live operator" },
      { k: "Certification", v: "UL-listed monitoring station, TMA Five Diamond" },
      { k: "Supported panels", v: "Honeywell, Ademco, DSC, Qolsys, Resideo, Vista" },
      { k: "Cellular failover", v: "Included on every panel with dual-path radio" },
      { k: "Languages", v: "English and Spanish, 24/7" }
    ],
    faqs: [
      { q: "How fast does an operator actually call me?", a: "Median is 27 seconds from the moment your panel sends a signal. The slowest 10% of events are handled within 55 seconds, and every delay is reported in your monthly SLA summary." },
      { q: "What happens if my internet goes down?", a: "If your panel has a cellular backup path, monitoring continues over the carrier network. If it does not, we recommend a cellular upgrade \u2014 it is a one-off $79 install and we flag it for you during setup." },
      { q: "Do you call the police without asking me?", a: "For pre-authorised categories such as fire, medical and duress alarms, yes \u2014 that is the point of the plan. For burglary we call you first, and escalate automatically if you do not answer within 30 seconds." },
      { q: "Will the police come for a false alarm?", a: "Not if we can help it. We verify first, and we maintain a false-alarm log with your local agency so repeated cancellations do not cost you your alarm permit." }
    ],
    related: ["smart-cameras", "smart-locks", "rental-watch"]
  },
  {
    id: "smart-cameras",
    name: "Smart Camera Systems",
    short: "Indoor, outdoor and fisheye cameras with colour night vision, local AI filtering and tamper alerts.",
    category: "Hardware",
    icon: "camera",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80&auto=format&fit=crop",
    priceFrom: 39,
    duration: "Installed in 1 day",
    rating: 4.8,
    reviews: 1760,
    tagline: "Cameras that know the difference between a person and a shadow",
    tags: ["4K sensors", "On-device AI", "Colour night vision"],
    long: [
      "Most camera systems wake up for every moving leaf. VaultGuard cameras classify activity on the device itself, so a neighbour walking past is dropped before a single video frame leaves the property. Only events that look like a person, a vehicle, or a package get recorded and pushed.",
      "Outside, colour night vision keeps faces readable in total darkness \u2014 no infrared wash, no white blob. Each camera carries a privacy shutter you can close from the app, and a hardware indicator that physically cuts power to the sensor when recording stops.",
      "Footage is stored on the vault, encrypted at rest, with a rolling retention window you choose. Exports are watermarked and time-stamped, which is what insurers and police actually ask for after an incident."
    ],
    features: [
      { icon: "eye", title: "On-device classification", body: "Person, vehicle and package detection runs locally, so routine motion never leaves your home." },
      { icon: "moon", title: "Colour night vision", body: "Readable faces and number plates at up to 25 metres without infrared glare." },
      { icon: "lock", title: "Physical privacy shutter", body: "A real shutter and a power cut, not just a software flag in a menu." },
      { icon: "database", title: "Encrypted retention", body: "Choose 7 to 60 days. Footage is encrypted at rest and in transit." },
      { icon: "alert", title: "Tamper alerts", body: "Any attempt to open, rotate or unplug a camera raises an immediate desk alert." },
      { icon: "download", title: "Evidence export", body: "One-click clip bundles with watermark, timestamps and a verification code." }
    ],
    steps: [
      { title: "Camera plan", body: "We map every entry point, blind spot and neighbour path before choosing hardware." },
      { title: "Mount and pair", body: "Cables are hidden, housings sealed for weather, and each camera is named in the app." },
      { title: "Tune detection zones", body: "Mask the street and the driveway edges so alerts describe your property only." },
      { title: "Hand over the walkthrough", body: "A 15-minute live walkthrough covers live view, clips, sharing and privacy controls." }
    ],
    pricing: [
      { name: "2-Camera Kit", amount: 39, unit: "per month", note: "Apartments and flats", features: ["2x 4K cameras", "AI detection", "7-day retention", "Mobile app access"] },
      { name: "6-Camera Kit", amount: 69, unit: "per month", note: "Most homes", featured: true, features: ["6x 4K cameras", "Doorbell integration", "30-day retention", "Priority monitoring link"] },
      { name: "12+ Camera Estate", amount: 129, unit: "per month", note: "Large homes and grounds", features: ["Unlimited cameras", "NVR on-site archive", "60-day retention", "Dedicated support engineer"] }
    ],
    specs: [
      { k: "Sensor", v: "1/2.8\" 4K, 110\u00b0 field of view" },
      { k: "Night performance", v: "Colour to 25 m, IR fallback to 60 m" },
      { k: "Power", v: "PoE or 12 V DC, weatherproof to IP67" },
      { k: "Storage", v: "AES-256 encrypted cloud or on-site NVR" },
      { k: "Retention options", v: "7, 14, 30 or 60 days" },
      { k: "Warranty", v: "3 years, advance replacement included" }
    ],
    faqs: [
      { q: "Do cameras record sound?", a: "Audio is off by default and can only be enabled per camera from the app. When it is on, a visible indicator lights and the state is stored in your event log." },
      { q: "What if the internet goes down?", a: "Cameras keep detecting and recording to local encrypted storage. Events are uploaded as soon as the connection returns, timestamped with the original capture time." },
      { q: "Can I keep footage without a subscription?", a: "On-site NVR owners keep 30 days of local footage with no monthly fee. Cloud retention and AI detection require a plan." },
      { q: "How are cameras powered?", a: "PoE is our default for new runs because one cable carries both power and data. Battery units are available for gates and garden cameras." }
    ],
    related: ["alarm-monitoring", "video-doorbell", "smart-home-automation"]
  },
  {
    id: "video-doorbell",
    name: "Video Doorbells",
    short: "Doorbell cameras with a live agent answering guests, package detection and a lock-screen that actually tells you who is there.",
    category: "Hardware",
    icon: "video",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80&auto=format&fit=crop",
    priceFrom: 24,
    duration: "Installed in 2 hours",
    rating: 4.8,
    reviews: 1320,
    tagline: "The doorbell that answers for you",
    tags: ["Live agent greeting", "Package detection", "One-tap guest pass"],
    long: [
      "A video doorbell is only useful if you can see who is standing there. Ours ships with a live-answer service: when a guest presses the bell and nobody is home, they can speak to a VaultGuard operator who can confirm the booking, unlock a temporary digital pass, or direct them to a lockbox.",
      "Package detection watches the mat, not the whole street. When a parcel is set down it starts a timer, and when the timer expires the operator checks the camera before deciding whether to raise an alert.",
      "The chime unit doubles as an indoor chime and a Wi-Fi extender, so the back of the house stays covered without adding another device to the shelf."
    ],
    features: [
      { icon: "userCheck", title: "Live agent greeting", body: "An operator answers your door on video and confirms who is expected." },
      { icon: "box", title: "Package watch", body: "Parcel detected on the mat, timer started, operator alerted if it stays too long." },
      { icon: "key", title: "Digital guest pass", body: "Issue a time-limited door code from the app \u2014 no key, no lockbox to service." },
      { icon: "message", title: "Two-way audio", body: "Full-duplex talk with noise suppression and a privacy mute." },
      { icon: "bell", title: "Indoor chime", body: "The chime unit extends Wi-Fi coverage through brick-walled homes." },
      { icon: "shieldCheck", title: "Privacy by design", body: "Hardwired option available, shutter on the lens, and per-device recording state." }
    ],
    steps: [
      { title: "Pick the power route", body: "We check for an existing transformer before anything else \u2014 most installs are under two hours." },
      { title: "Mount and aim", body: "Chime height is set for faces, not porches, so the visitor is framed from the shoulders up." },
      { title: "Set guest rules", body: "Quiet hours, delivery handling and which arrivals should reach an operator." },
      { title: "Test the run", body: "Ring from outside, answer from the app, then ring again with nobody home to confirm the agent path." }
    ],
    pricing: [
      { name: "Self Serve", amount: 24, unit: "per month", note: "You install", features: ["Doorbell camera", "Package detection", "7-day retention", "Chime included"] },
      { name: "Agent Answered", amount: 34, unit: "per month", note: "Most chosen", featured: true, features: ["Everything in Self Serve", "Live agent greeting", "Guest pass issuing", "30-day retention"] },
      { name: "Estate Bundle", amount: 59, unit: "per month", note: "Two doorbells", features: ["2 doorbells + cameras", "Side and gate entry", "Agent greeting", "60-day retention"] }
    ],
    specs: [
      { k: "Resolution", v: "2K HDR, 150\u00b0 diagonal" },
      { k: "Power", v: "Existing 16\u201324 V AC or 6-month battery" },
      { k: "Connectivity", v: "2.4 GHz + 5 GHz Wi-Fi, chime extender" },
      { k: "Operating range", v: "\u221230\u00b0C to 50\u00b0C, IP65" },
      { k: "Agent hours", v: "24/7, English and Spanish" },
      { k: "Guest pass", v: "Time-limited PIN valid for a single window" }
    ],
    faqs: [
      { q: "Can the agent let someone in without me?", a: "Yes, if you enable it. Operators can issue a time-limited digital pass after confirming identity against your guest list, or open a pre-approved lock if you prefer full automation." },
      { q: "Does it work with my existing doorbell chime?", a: "If your chime runs on 8\u201324 V AC it usually works through the included adapter. Mechanical chimes need a chime adapter, which we supply." },
      { q: "How do you stop the agent answering my family?", a: "Set quiet hours and a recognition list. Family members with app access get a silent in-app call instead of a desk transfer." },
      { q: "What happens to recordings of visitors?", a: "They follow the same retention window as your cameras, are encrypted, and are deleted automatically when the window closes." }
    ],
    related: ["smart-locks", "smart-cameras", "rental-watch"]
  },
  {
    id: "smart-locks",
    name: "Smart Locks & Access",
    short: "Keypad, fingerprint and app-controlled locks with audit trails, temporary codes and auto-relock on close.",
    category: "Hardware",
    icon: "lock",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop",
    priceFrom: 18,
    duration: "Installed in 1 hour",
    rating: 4.7,
    reviews: 940,
    tagline: "Every entry, accounted for",
    tags: ["Audit trail", "Temporary codes", "Auto-relock"],
    long: [
      "Smart locks replace the question \"who has a key?\" with an answer you can check. Each lock keeps a timestamped log of every entry and exit, whether it came from a code, a fingerprint, an app command, or an emergency override.",
      "Temporary codes are the part that changes daily life. A cleaner gets a code that stops working at 11:00 on Thursday. A contractor gets one that dies when they leave. You never hand over a physical key again.",
      "If the lock is forced or tampered with, the event is raised to the monitoring desk as a priority signal, with the camera context attached automatically."
    ],
    features: [
      { icon: "file", title: "Entry audit trail", body: "Timestamped log of every unlock, on every entry point, exportable as CSV." },
      { icon: "key", title: "Expiring guest codes", body: "Codes scoped to a date, a time window, or a single use." },
      { icon: "userCheck", title: "Fingerprint pads", body: "Capacitive sensors that keep working when a battery is low." },
      { icon: "alert", title: "Forced-entry signal", body: "Jamming or prying raises a priority desk alert with camera context." },
      { icon: "refresh", title: "Auto-relock", body: "Relocks the moment the door closes, or on a timer if it is left open." },
      { icon: "home", title: "Existing key override", body: "Keeps your current cylinder as a backup, so you are never locked out." }
    ],
    steps: [
      { title: "Check the door", body: "We confirm door thickness, swing direction, and whether the frame is solid or hollow." },
      { title: "Fit the lock", body: "Most retrofit fits take an hour and leave no visible damage to the door." },
      { title: "Load your people", body: "Family, cleaners and dog walkers are added with their own codes and schedules." },
      { title: "Connect to monitoring", body: "Door contact sensors are paired so forced entry escalates straight to the desk." }
    ],
    pricing: [
      { name: "Single Entry", amount: 18, unit: "per month", note: "1 smart lock", features: ["1 smart lock", "Unlimited codes", "Audit trail", "App control"] },
      { name: "Whole Home", amount: 32, unit: "per month", note: "Up to 4 entries", featured: true, features: ["4 smart locks", "Keypad + fingerprint", "Monitoring integration", "Guest scheduling"] },
      { name: "Landlord Set", amount: 79, unit: "per month", note: "Up to 12 doors", features: ["12 smart locks", "Tenant invites", "Portfolio dashboard", "Per-unit access report"] }
    ],
    specs: [
      { k: "Fit", v: "35\u201365 mm door thickness, standard backset" },
      { k: "Power", v: "4x AA, 18-month typical, low-battery alerts" },
      { k: "Codes", v: "250 active per lock, PIN or app-issued" },
      { k: "Weather rating", v: "IP65 for exterior doors" },
      { k: "Emergency power", v: "9 V external contact for entry doors" },
      { k: "Integrations", v: "Cameras, doorbells, Alexa, Google Home, HomeKit" }
    ],
    faqs: [
      { q: "What if the battery dies while I am away?", a: "You get a low-battery alert at 20%, and again at 5%. At 0% the inside knob still works mechanically, so nobody is locked out, and monitoring sees the power-loss event." },
      { q: "Can codes be reused accidentally?", a: "No. Once a one-time code is used it is deleted, and we flag repeated failed attempts to the desk as a possible credential-stuffing event." },
      { q: "Will it work on my existing doors?", a: "Almost always \u2014 retrofit fits are standard on US residential doors up to 65 mm thick. We confirm by photo before the installer is booked." },
      { q: "Does it notify me when family comes in?", a: "Yes, per person. You choose silent, in-app, or push for each member, which keeps everyday arrivals from becoming alert fatigue." }
    ],
    related: ["smart-cameras", "video-doorbell", "rental-watch"]
  },
  {
    id: "rental-watch",
    name: "Rental Watch for Hosts",
    short: "Remote guest verification, arrival time windows and evidence-ready damage trails for short-term rentals.",
    category: "Rentals",
    icon: "key",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop",
    priceFrom: 29,
    duration: "Live within 48 hours",
    rating: 4.9,
    reviews: 640,
    tagline: "Built for homes you are not standing in",
    tags: ["Guest verification", "Arrival windows", "Damage evidence"],
    long: [
      "Hosting a rental means your security system has to work while you are three states away. Rental Watch pairs the doorbell, the entry camera and a smart lock under one booking-aware profile: the system knows who is expected, when, and for how long, and it treats everything else as an event worth a phone call.",
      "Every booking gets a time window. Before the window opens, arriving guests are asked for a selfie at the door. A live operator matches it against the reservation and the card on file, then issues a digital pass \u2014 no lockbox, no codes in chat threads, nothing left behind when they leave.",
      "When something does happen, you get a timeline instead of an argument. Arrival and departure times, occupancy counts, and any footage around a damage report are stitched into a single export your insurer or platform will accept."
    ],
    features: [
      { icon: "userCheck", title: "Selfie verification", body: "Guests confirm identity at the door against the reservation before entry." },
      { icon: "clock", title: "Arrival windows", body: "The system knows who is due, so early or late arrivals are not false alarms." },
      { icon: "users", title: "Occupancy counting", body: "Entry and exit events build a guest count per booking for platform compliance." },
      { icon: "file", title: "Damage trail export", body: "One report linking bookings, arrivals and footage, ready for insurers." },
      { icon: "power", title: "Vacation mode", body: "Arm everything remotely and disarm when you are three time zones away." },
      { icon: "refresh", title: "Turnover automation", body: "Between bookings the system arms, watches for early arrivals, and reports on turnover." }
    ],
    steps: [
      { title: "Connect the booking calendar", body: "Sync your channel so arrival windows update automatically." },
      { title: "Set your house rules", body: "Quiet hours, party limits, pet policy, and which events should call you." },
      { title: "Publish guest instructions", body: "One link in your listing explains the doorbell, the pass, and the parking." },
      { title: "Run a test stay", body: "Book yourself for one night to confirm the whole guest journey." }
    ],
    pricing: [
      { name: "Host", amount: 29, unit: "per month", note: "1 property", features: ["1 property, 1 entry", "Guest verification", "Up to 30 bookings", "Damage trail export"] },
      { name: "Portfolio", amount: 79, unit: "per month", note: "Up to 5 properties", featured: true, features: ["5 properties", "Unlimited bookings", "Turnover automation", "Portfolio dashboard"] },
      { name: "Operator", amount: 149, unit: "per month", note: "Unlimited properties", features: ["Unlimited properties", "Live operator per stay", "Priority escalation", "Quarterly risk review"] }
    ],
    specs: [
      { k: "Bookings per month", v: "30 on Host, unlimited above" },
      { k: "Guest window", v: "Configurable check-in and check-out times" },
      { k: "Verification", v: "Live operator review, 92% auto-pass rate" },
      { k: "Evidence window", v: "90 days for verified incidents" },
      { k: "Timezones", v: "Property local time, host local time, UTC in exports" },
      { k: "Platforms", v: "Exports for Airbnb, Booking.com and Vrbo" }
    ],
    faqs: [
      { q: "Will guests complain about the selfie step?", a: "In testing, 94% of guests completed it without friction because an operator answered the door on video at the same time. Your listing instructions explain it in two sentences." },
      { q: "Can I use this with a lockbox instead?", a: "Yes, but most hosts switch after the first booking. Keeping physical keys in circulation is the weakest link in an otherwise digital entry system." },
      { q: "What if a guest arrives outside the window?", a: "The doorbell rings an operator instead of firing an alarm. They confirm the reservation, and if nobody is authorised you choose whether to cancel, reschedule, or escalate." },
      { q: "Do you share my guest data with platforms?", a: "No. Booking metadata stays in your dashboard, and we only ever export the records you ask for." }
    ],
    related: ["video-doorbell", "smart-locks", "alarm-monitoring"]
  },
  {
    id: "smart-home-automation",
    name: "Home Automation & Scenes",
    short: "Lights, climate, garage and shutters tied to arming state, occupancy and time of day.",
    category: "Automation",
    icon: "layers",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
    priceFrom: 15,
    duration: "Configured in 1 session",
    rating: 4.6,
    reviews: 520,
    tagline: "The house responds to the alarm, not the other way round",
    tags: ["Scenes", "Energy saving", "Alarm-linked"],
    long: [
      "Automation on a security system is not about smart bulbs \u2014 it is about what the house does when something happens. Away mode closes the garage, kills interior lights, drops the thermostat by 3 degrees, and arms every perimeter zone in a single action.",
      "Scenes are reversible. Returning home disarms, restores the comfort settings you had before you left, and tells you which doors and windows are still open before you walk in.",
      "We also wire the practical stuff: holiday schedules, guest modes, and energy scenes that cut consumption by a typical 12 to 18 percent for households that run lighting and climate remotely."
    ],
    features: [
      { icon: "zap", title: "Alarm-linked scenes", body: "Arming the system triggers lighting, climate and garage states you define." },
      { icon: "home", title: "Return-home restore", body: "One action restores the exact state you were in before you left." },
      { icon: "clock", title: "Schedules", body: "Weekday, weekend, holiday and per-room routines with exceptions." },
      { icon: "userCheck", title: "Guest mode", body: "Temporary profiles for visitors, cleaners and contractors." },
      { icon: "power", title: "Energy views", body: "Per-device consumption history so savings are not a guess." },
      { icon: "refresh", title: "Scene rollback", body: "Every scene keeps a snapshot so a failed automation can be reversed." }
    ],
    steps: [
      { title: "Device discovery", body: "We find what is already on your network and what needs a bridge." },
      { title: "Scene design", body: "We write scenes around routines you actually have, not a demo list." },
      { title: "Safety interlock", body: "Scenes that unlock doors or disable sensors are locked behind a PIN." },
      { title: "Handover session", body: "Everyone who uses the house gets a two-minute walkthrough." }
    ],
    pricing: [
      { name: "Essentials", amount: 15, unit: "per month", note: "Up to 8 devices", features: ["8 devices", "4 scenes", "Alarm linkage", "Energy view"] },
      { name: "Whole Home", amount: 29, unit: "per month", note: "Up to 30 devices", featured: true, features: ["30 devices", "Unlimited scenes", "Guest profiles", "Priority support"] },
      { name: "Estate", amount: 59, unit: "per month", note: "Unlimited", features: ["Unlimited devices", "Multi-property view", "Custom integrations", "Engineer on call"] }
    ],
    specs: [
      { k: "Protocols", v: "Matter, Thread, Zigbee, Z-Wave, Wi-Fi" },
      { k: "Hub", v: "Included with Whole Home and above" },
      { k: "Local control", v: "Scenes run on the hub when the cloud is unreachable" },
      { k: "Safety interlock", v: "PIN required for security-sensitive scenes" },
      { k: "Typical saving", v: "12\u201318 percent on lighting and climate" },
      { k: "Integrations", v: "Alexa, Google Home, Apple Home, Home Assistant" }
    ],
    faqs: [
      { q: "Does this replace my alarm panel?", a: "No. Automation sits on top of your panel. The panel remains the source of truth for arming state and sensors." },
      { q: "What happens to scenes when the internet is down?", a: "Scenes that run on the hub keep working. Cloud-only scenes pause and resume, and you get a notification explaining what did not run." },
      { q: "Can a guest break my security?", a: "Guest profiles are limited by zone and duration, and any scene touching a lock or a sensor requires your PIN, which guests do not have." },
      { q: "Is the energy saving real?", a: "Households on the Whole Home plan average 14 percent lower lighting and climate consumption. Your dashboard shows the per-device comparison once a month of data exists." }
    ],
    related: ["smart-locks", "smart-cameras", "alarm-monitoring"]
  }
];

window.VGData.serviceById = function (id) {
  var list = window.VGData.services;
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
  return null;
};
