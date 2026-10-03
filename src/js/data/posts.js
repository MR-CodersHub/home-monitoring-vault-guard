window.VGData = window.VGData || {};

window.VGData.posts = [
  {
    id: "setup-guide",
    title: "How to Set Up Smart Home Monitoring in 6 Steps",
    category: "Guides",
    author: "Priya Raman",
    role: "Director of Smart Hardware",
    date: "2026-09-18",
    read: 7,
    views: 18420,
    featured: true,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1000&q=80&auto=format&fit=crop",
    excerpt: "A practical walkthrough from bare wall to armed system \u2014 what to install first, what to skip, and the order that avoids doing anything twice.",
    tags: ["setup", "DIY", "monitoring"],
    body: [
      { type: "lead", text: "Most smart security installs fail in the same two places: the Wi-Fi, and the placement of the sensors. Fix those first and the rest is configuration." },
      { type: "h2", text: "1. Decide what you are protecting" },
      { type: "p", text: "Write down the three things you would be upset to lose. For most households that is people, pets and the ground-floor entry. That single sentence usually tells you how many cameras you need and where they go." },
      { type: "h2", text: "2. Fix the network before touching hardware" },
      { type: "p", text: "Cameras hate congested Wi-Fi more than they hate weather. Test a 5 GHz connection where the camera will actually live, not where the router sits. If the signal is weak, put a mesh node or a PoE switch under that room instead of buying a different camera." },
      { type: "callout", title: "Rule of thumb", text: "If you cannot stream two 4K cameras smoothly while the television is on, monitoring will drop frames exactly when you need the recording." },
      { type: "h2", text: "3. Place sensors before cameras" },
      { type: "p", text: "Entry sensors belong on the door itself, not the frame, and the magnet goes within a quarter inch of the reed switch. Motion detectors want corner mounts and a clear diagonal view across the room. Put these in first and align detection zones afterwards." },
      { type: "h2", text: "4. Run the test signal" },
      { type: "p", text: "Trigger the panel and confirm the chain end to end: sensor to panel, panel to monitoring desk, desk to your phone. Do this before the system is armed for real, because a silent failure discovered at 2 a.m. is the worst possible time." },
      { type: "quote", text: "Six steps, in order, each one finished before the next begins. That is the entire difference between a weekend project and a weekend of troubleshooting." }
    ]
  },
  {
    id: "best-cameras",
    title: "Best Cameras for Small Apartments in 2026",
    category: "Hardware",
    author: "Jae-won Park",
    role: "Data & AI Engineer",
    date: "2026-09-04",
    read: 6,
    views: 12980,
    featured: false,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=1000&q=80&auto=format&fit=crop",
    excerpt: "Two cameras, one doorbell and a hallway blind spot: the honest minimum for a flat, and the three mistakes that waste most of that budget.",
    tags: ["cameras", "apartments", "buying guide"],
    body: [
      { type: "lead", text: "Apartments invert the usual problem. You get fewer entry points but more strangers walking past, which means blind spots matter more than resolution." },
      { type: "h2", text: "The entry is the priority" },
      { type: "p", text: "A video doorbell plus one interior camera covering the hall and the living room covers the overwhelming majority of apartment risk. The doorbell records faces, which is the only footage anyone ever asks for, and it doubles as a lock-screen alert." },
      { type: "h2", text: "Mask the neighbours" },
      { type: "p", text: "Detection zones should stop at your own threshold. In apartment buildings, doors opposite yours generate a constant stream of motion, and if that is not masked you will mute the alerts within a week." },
      { type: "callout", title: "Landlord note", text: "Check your lease before aiming a camera at a shared corridor. External-facing cameras aimed at communal space can breach tenancy terms even where local law would allow it." },
      { type: "h2", text: "Skip the extras" },
      { type: "p", text: "Wireless battery cameras are not wrong, they are just slower to wake and shorter-lived than mains units. In a flat, one mains camera and one battery doorbell is the sensible split." },
      { type: "list", items: ["Doorbell camera at eye height, not 6 feet", "Hallway camera mounted high and angled down", "Every camera with a physical shutter", "Retention set to 30 days, exports tested once"] }
    ]
  },
  {
    id: "response-times",
    title: "What \u201cUnder 30 Seconds\u201d Actually Means",
    category: "Monitoring",
    author: "Daniel Reyes",
    role: "Head of Monitoring Operations",
    date: "2026-08-27",
    read: 5,
    views: 9630,
    featured: false,
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1000&q=80&auto=format&fit=crop",
    excerpt: "Every security company advertises a response number. Here is exactly how ours is measured, what sits outside the clock, and how to audit anyone.",
    tags: ["monitoring", "SLA", "transparency"],
    body: [
      { type: "lead", text: "A response time is meaningless unless you know when the clock starts and when it stops. Ours starts at the first byte from your panel and stops when a human voice is on the line with you." },
      { type: "h2", text: "What is inside the clock" },
      { type: "p", text: "Panel signal, operator screen open, video context loaded, decision made, call placed. That is the full sequence and every second of it is logged." },
      { type: "h2", text: "What is outside the clock" },
      { type: "p", text: "The time between you answering and us reaching an authority. That is a different number, published separately, because bundling them flatters the vendor who has slow dispatch." },
      { type: "h2", text: "How to audit anyone, including us" },
      { type: "list", items: ["Ask for the median and the 90th percentile, not the average", "Ask how many events were cancelled by verification", "Ask whether dispatch happens without a human decision", "Ask what happens at 3 a.m. on a public holiday"] },
      { type: "callout", title: "Our published figures", text: "27 second median, 55 seconds for the slowest 10 percent of events, 0.3 percent cancellation rate across the last quarter." },
      { type: "quote", text: "Anyone can advertise thirty seconds. Publish the shape of the distribution and the number means something." }
    ]
  },
  {
    id: "guest-verification",
    title: "How Guest Verification Cuts Rental Damage",
    category: "Rentals",
    author: "Amara Okafor",
    role: "Founder & CEO",
    date: "2026-08-14",
    read: 8,
    views: 14220,
    featured: false,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&q=80&auto=format&fit=crop",
    excerpt: "Hosts who verify every arrival see fewer damage claims, fewer chargebacks and better reviews. Here is the operational shape of a verified entry.",
    tags: ["rentals", "verification", "hosts"],
    body: [
      { type: "lead", text: "Most rental damage is not caused by a bad guest. It is caused by an unverified arrival plus a property nobody was watching at the time." },
      { type: "h2", text: "What an unverified entry looks like" },
      { type: "p", text: "Someone uses a code that was forwarded to a friend, a colleague stays an extra night, or a party arrives in two cars instead of one. Nothing is detected, nothing is recorded, and the host finds out three days later from a platform message." },
      { type: "h2", text: "The verified arrival" },
      { type: "p", text: "The guest presses the doorbell and completes a selfie check. A live operator compares it against the reservation, confirms the window, and issues a time-limited digital pass. Arrival time, identity and party size are now facts instead of guesses." },
      { type: "h2", text: "What the evidence trail does" },
      { type: "p", text: "Damage claims move from a conversation to a file. Arrival times, occupancy counts and footage sit in one export that insurers and platforms accept without a twenty-minute dispute." },
      { type: "table", head: ["Metric", "Unverified", "Verified"], rows: [["Damage claims per 100 stays", "7.2", "2.8"], ["Average resolution time", "19 days", "4 days"], ["Chargeback win rate", "34%", "78%"], ["Cleanliness complaints", "11%", "5%"]] },
      { type: "quote", text: "The guest journey gets faster and your liability gets smaller. Those two facts usually point the same direction." }
    ]
  },
  {
    id: "privacy-tips",
    title: "Seven Ways to Keep Cameras Private at Home",
    category: "Tips",
    author: "Nadia Belkacem",
    role: "Customer Trust Lead",
    date: "2026-08-02",
    read: 6,
    views: 10470,
    featured: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80&auto=format&fit=crop",
    excerpt: "Your footage is your data. Practical steps to limit who sees it, where it is stored, and how long it survives.",
    tags: ["privacy", "data", "policy"],
    body: [
      { type: "lead", text: "Most privacy problems in home security are not hacks. They are ordinary oversharing: a shared household account, a camera aimed at a neighbour's window, and footage kept for a year." },
      { type: "list", items: ["Give every person their own access, never a shared password", "Mask public areas so neighbours are never recorded", "Turn audio off per camera, and check it stayed off", "Set retention to the shortest window you can live with", "Keep the recovery codes offline, not in the same app", "Review the household access list once a quarter", "Ask before exporting, and delete exports after use"] },
      { type: "h2", text: "Where the footage lives" },
      { type: "p", text: "Clips are encrypted in transit and at rest, stored in the region you chose at signup, and removed automatically when the retention window closes. Exports are watermarked and traceable back to your account, which is why they are safe to hand to an insurer." },
      { type: "callout", title: "Practical test", text: "Open your access list. If there is a name you do not immediately recognise, revoke it today. That single check catches most of the real risk." },
      { type: "p", text: "You can read the full details in our privacy policy, including retention windows, subprocessors, and how to request a copy or deletion of your data." }
    ]
  },
  {
    id: "false-alarms",
    title: "Why Your Alarm Goes Off at 3 AM",
    category: "Monitoring",
    author: "Daniel Reyes",
    role: "Head of Monitoring Operations",
    date: "2026-07-21",
    read: 5,
    views: 15230,
    featured: false,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1000&q=80&auto=format&fit=crop",
    excerpt: "Pets, storms, low batteries and open windows: the four causes behind most middle-of-the-night activations, and how to kill each one.",
    tags: ["alarms", "troubleshooting", "pets"],
    body: [
      { type: "lead", text: "The 3 a.m. activation is almost always something physical, not a break-in. Four causes account for nearly all of them." },
      { type: "h2", text: "Low battery behaviour" },
      { type: "p", text: "A sensor that reaches its low-battery threshold can chirp and, on some panels, raise a trouble signal that sounds like a chime. Replace batteries on a schedule rather than waiting for the warning." },
      { type: "h2", text: "Pets and insects" },
      { type: "p", text: "Motion detectors mounted at 5 feet see a cat on a cabinet perfectly well. Raise the detector, aim it across rather than through the room, and set the sensitivity down before you set it up." },
      { type: "h2", text: "Storm and power events" },
      { type: "p", text: "Voltage dips during storms cause brownouts that trip mains devices. A UPS or a cellular-backed panel with a battery chamber prevents most of it; the rest is handled by our weather hold logic." },
      { type: "callout", title: "Open windows", text: "In summer, one propped window plus a motion detector is the classic 2 a.m. alarm. Check your entry sensors before you blame a burglar." },
      { type: "quote", text: "Every false alarm we verify is one we never send to a police dispatch queue. That is a service to your neighbours too." }
    ]
  },
  {
    id: "alarm-permits",
    title: "Alarm Permits: A Practical City-by-City Guide",
    category: "Security News",
    author: "Tom\u00e1s Herrera",
    role: "Lead Field Engineer",
    date: "2026-07-09",
    read: 7,
    views: 8130,
    featured: false,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=80&auto=format&fit=crop",
    excerpt: "More than 300 US municipalities now require a permit for a monitored alarm. Here is what that changes and how to apply without losing a weekend.",
    tags: ["permits", "compliance", "cities"],
    body: [
      { type: "lead", text: "An alarm permit is a cheap piece of paperwork that prevents an expensive argument. More than 300 municipalities require one, and the penalties are usually levied on the homeowner." },
      { type: "h2", text: "What a permit actually does" },
      { type: "p", text: "It registers your address with the police non-emergency division so dispatch knows the alarm is monitored and who to call. It does not license anyone to enter your home, and it never obliges police to respond." },
      { type: "h2", text: "How the process usually runs" },
      { type: "list", items: ["Apply online or through the non-emergency line \u2014 most take under ten minutes", "Add the permit number to your monitoring profile so dispatch sees it", "Reapply when you move or change monitoring provider", "Keep the confirmation number in your property file"] },
      { type: "callout", title: "We check for you", text: "Our installer notes your municipality during the site survey and files the application as part of the setup fee for monitored plans." },
      { type: "h2", text: "If you move" },
      { type: "p", text: "Permits do not transfer. Cancel the old one and file a new one on moving day; a stale permit attached to a property that no longer has a system is exactly the kind of record that triggers a false-alarm fine." }
    ]
  },
  {
    id: "winter-cameras",
    title: "Cold-Weather Camera Care and Battery Life",
    category: "Hardware",
    author: "Priya Raman",
    role: "Director of Smart Hardware",
    date: "2026-06-25",
    read: 5,
    views: 7690,
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80&auto=format&fit=crop",
    excerpt: "Lithium batteries lose capacity in freezing weather and condensation is the real enemy. A short seasonal checklist for outdoor cameras.",
    tags: ["winter", "batteries", "maintenance"],
    body: [
      { type: "lead", text: "Cold does not kill outdoor cameras, but it shortens battery life and it moves water where water should not be." },
      { type: "h2", text: "Battery expectations" },
      { type: "p", text: "A lithium pack rated for six months at 20\u00b0C can manage four in freezing weather. That is normal, and it is why we size winter installations with 30 percent headroom rather than the optimistic figure on the box." },
      { type: "h2", text: "Condensation is the killer" },
      { type: "p", text: "Warm indoor air meeting a cold lens creates condensation on the glass. Mount housings so the face is slightly downward, keep the gasket seated, and leave the camera powered through the transition so the heater cycle can run." },
      { type: "list", items: ["Check battery levels monthly between November and February", "Wipe lenses after storms, not before", "Confirm every housing gasket is seated and screwed down", "Keep the IR sensor clear of snow and spider webs"] },
      { type: "callout", title: "Service reminder", text: "Plan a spring check on every unit installed the previous autumn. It takes twenty minutes and catches seal failure before a storm does." }
    ]
  },

  {
    id: "doorbell-vs-cameras",
    title: "Video Doorbell or Full Camera System?",
    category: "Guides",
    author: "Tom\u00e1s Herrera",
    role: "Lead Field Engineer",
    date: "2026-06-11",
    read: 6,
    views: 8860,
    featured: false,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1000&q=80&auto=format&fit=crop",
    excerpt: "Doorbell cameras win on faces and lose on coverage. How to decide without overspending on hardware you do not need.",
    tags: ["doorbell", "cameras", "planning"],
    body: [
      { type: "lead", text: "A doorbell camera is a camera with one fixed job, done well. The question is whether that one job is the job you have." },
      { type: "h2", text: "Choose the doorbell when\u2026" },
      { type: "list", items: ["Your main risk is a visitor at the door", "You live in a flat or a townhouse with one entry", "You want to talk to couriers and guests", "You want the cheapest useful recording device"] },
      { type: "h2", text: "Choose cameras when\u2026" },
      { type: "list", items: ["You need coverage of a yard, garage or side path", "You want a recorded trail through the property", "You need night footage with licence-plate detail", "You want context when an alert fires"] },
      { type: "h2", text: "The common mistake" },
      { type: "p", text: "Buying four doorbells for four doors on a property with a driveway. Doorbells are wide but shallow. Cameras give you depth of field. Most homes are best served by one doorbell plus two cameras, and our installers will tell you that even when it costs them a sale." },
      { type: "callout", title: "Good middle ground", text: "A doorbell at the pedestrian entry, a wide-angle camera over the driveway, and one interior camera covering the hall covers most single-family layouts." }
    ]
  },
  {
    id: "senior-living",
    title: "Smart Monitoring for Independent Living",
    category: "Tips",
    author: "Nadia Belkacem",
    role: "Customer Trust Lead",
    date: "2026-05-30",
    read: 7,
    views: 6480,
    featured: false,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&q=80&auto=format&fit=crop",
    excerpt: "How adult children are using monitored sensors to support ageing parents without turning the relationship into surveillance.",
    tags: ["care", "sensors", "family"],
    body: [
      { type: "lead", text: "The useful outcome of monitoring for an ageing parent is not a camera feed. It is knowing that help arrived within twenty minutes of a fall." },
      { type: "h2", text: "Start with consent" },
      { type: "p", text: "Agree what is monitored before anything is installed. In our experience, families who explain the exact setup and who sees what keep the arrangement healthy; families who install quietly create a trust problem that outlives the device." },
      { type: "h2", text: "Use presence, not surveillance" },
      { type: "list", items: ["No-activity alerts on kitchen, bathroom and hallway sensors", "Door contact on the fridge or main entry for missed-meal patterns", "A help button that reaches an operator, not an app", "Night-path lighting that turns on between bedroom and bathroom"] },
      { type: "h2", text: "Set the response ladder" },
      { type: "p", text: "Level one is a text to the family. Level two is a call. Level three is an operator who calls emergency services. Most families should start at level two and only move to three after a conversation about risk." },
      { type: "callout", title: "What to avoid", text: "Anything that streams continuously into a family chat. It changes the relationship faster than any technical setting." }
    ]
  },
  {
    id: "smart-locks-guide",
    title: "Temporary Codes Are the Whole Point of a Smart Lock",
    category: "Hardware",
    author: "Jae-won Park",
    role: "Data & AI Engineer",
    date: "2026-05-16",
    read: 5,
    views: 5820,
    featured: false,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&q=80&auto=format&fit=crop",
    excerpt: "Key handoffs are the least secure habit in home security. How scoped codes change cleaners, dog walkers, contractors and short-term guests.",
    tags: ["locks", "access", "guests"],
    body: [
      { type: "lead", text: "The average front-door key is copied five to seven times over its life and nobody can say who holds them. Scoped codes end that conversation." },
      { type: "h2", text: "Three scopes worth learning" },
      { type: "list", items: ["Date-scoped: valid for a named day, ideal for repairs", "Window-scoped: valid between two times, ideal for cleaners", "Single-use: consumed on first entry, ideal for couriers and one-time deliveries"] },
      { type: "h2", text: "What the log tells you" },
      { type: "p", text: "Every unlock is timestamped and attributed. When someone claims they let themselves in, the log answers the question in seconds rather than turning into a family argument." },
      { type: "h2", text: "Set it up once" },
      { type: "p", text: "Create recurring codes for regular helpers instead of rewriting them weekly. A Thursday morning cleaner should keep the same Thursday code indefinitely \u2014 the code ends when the arrangement ends, not every seven days." },
      { type: "callout", title: "Keep the physical key", text: "A smart lock should never be the only way in. Keep your existing cylinder as a mechanical override." }
    ]
  },
  {
    id: "monitoring-vs-alarm",
    title: "An Alarm System Without Monitoring Is Just a Loudspeaker",
    category: "Monitoring",
    author: "Amara Okafor",
    role: "Founder & CEO",
    date: "2026-04-28",
    read: 6,
    views: 11760,
    featured: false,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=80&auto=format&fit=crop",
    excerpt: "DIY panels are cheap and effective at making noise. The gap is what happens in the four minutes after that noise stops.",
    tags: ["monitoring", "DIY", "response"],
    body: [
      { type: "lead", text: "A siren is designed to frighten and to summon attention from within about 150 metres. In a quiet street at night that is enough. On a suburban cul-de-sac at 3 p.m. it is not." },
      { type: "h2", text: "The four-minute gap" },
      { type: "p", text: "Most break-ins begin with a check of whether anyone is home. That check takes minutes. Without monitoring, the only signal is a noise that may not reach anyone, and the gap between activation and discovery is exactly where the decision gets made." },
      { type: "h2", text: "What monitoring adds" },
      { type: "list", items: ["A human voice within a median of 27 seconds", "Video context before any authority is contacted", "Confirmed dispatch with your property details attached", "A written timeline afterwards, for insurance and police"] },
      { type: "h2", text: "Where DIY still makes sense" },
      { type: "p", text: "If you are in a low-risk rental, already have smart devices, and your priority is notifications rather than response, a self-monitored plan is a legitimate choice. Just be honest about what it does." },
      { type: "quote", text: "Notifications tell you something happened. Monitoring tells you what to do about it." }
    ]
  }
];

window.VGData.postById = function (id) {
  var list = window.VGData.posts;
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
  return null;
};

window.VGData.postCategories = function () {
  var out = [];
  var list = window.VGData.posts;
  for (var i = 0; i < list.length; i++) {
    if (out.indexOf(list[i].category) === -1) out.push(list[i].category);
  }
  return out;
};

window.VGData.formattedDate = function (iso) {
  var d = new Date(iso + "T12:00:00");
  var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return d.getDate() + " " + m[d.getMonth()] + " " + d.getFullYear();
};
