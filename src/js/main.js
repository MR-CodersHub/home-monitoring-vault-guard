/* ═══════════════════════════════════════════════════════════════
   VaultGuard — Main JavaScript
   Handles: nav scroll, hamburger menu, scroll reveal, animations
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── DOM Elements ──────────────────────────────────────────── */
  const navbar       = document.getElementById('navbar');
  const hamburger    = document.getElementById('hamburger');
  const navLinks     = document.getElementById('navLinks');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const allNavLinks  = document.querySelectorAll('.nav-link');
  const sections     = document.querySelectorAll('section[id]');
  const revealEls    = document.querySelectorAll('[data-reveal]');

  /* ── Navbar — scroll effect ────────────────────────────────── */
  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load

  /* ── Hamburger menu ────────────────────────────────────────── */
  function openMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    mobileOverlay.classList.add('open');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    mobileOverlay.classList.remove('open');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileOverlay.addEventListener('click', closeMenu);

  // Close menu when a nav link is clicked
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        closeMenu();
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  /* ── Active nav link on scroll ─────────────────────────────── */
  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href.includes(current)) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ── Scroll Reveal ─────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Unobserve after reveal so it doesn't toggle
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── Smooth scroll for anchor links ────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Live clock in dashboard overlay ──────────────────────── */
  const dashTime = document.querySelector('.dash-time');
  if (dashTime) {
    let seconds = 4 * 60 + 23; // start at 04:23
    function tick() {
      seconds++;
      const m = String(Math.floor(seconds / 60)).padStart(2, '0');
      const s = String(seconds % 60).padStart(2, '0');
      dashTime.textContent = `00:${m}:${s}`;
    }
    setInterval(tick, 1000);
  }

  /* ── Simulated live alert pulse ───────────────────────────── */
  const alertCard = document.querySelector('.float-card-alert');
  const alertMessages = [
    { title: 'Motion Detected', sub: 'Front Yard • Just now' },
    { title: 'Door Opened',     sub: 'Side Entrance • 2 min ago' },
    { title: 'System Armed',    sub: 'Main Panel • 5 min ago' },
    { title: 'Motion Detected', sub: 'Backyard • Just now' },
  ];
  let alertIdx = 0;

  if (alertCard) {
    const titleEl = alertCard.querySelector('.float-card-title');
    const subEl   = alertCard.querySelector('.float-card-sub');

    setInterval(() => {
      alertIdx = (alertIdx + 1) % alertMessages.length;
      alertCard.style.opacity = '0';
      alertCard.style.transform = 'translateY(-4px)';
      alertCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

      setTimeout(() => {
        titleEl.textContent = alertMessages[alertIdx].title;
        subEl.textContent   = alertMessages[alertIdx].sub;
        alertCard.style.opacity = '1';
        alertCard.style.transform = 'translateY(0)';
      }, 350);
    }, 4500);
  }

  /* ── Solutions card hover ripple ──────────────────────────── */
  document.querySelectorAll('.sol-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.willChange = 'transform, box-shadow';
    });
    card.addEventListener('mouseleave', function () {
      this.style.willChange = 'auto';
    });
  });

  /* ── Plans section — highlight featured plan ───────────────── */
  // Already styled in CSS; add a subtle entrance animation reset
  const planFeatured = document.querySelector('.plan-card-featured');
  if (planFeatured) {
    const planObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          planFeatured.style.animationPlayState = 'running';
          planObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    planObserver.observe(planFeatured);
  }

  /* ── Parallax hero background glow ────────────────────────── */
  const heroGlows = document.querySelectorAll('.hero-bg-glow');
  if (heroGlows.length) {
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroGlows.forEach((g, i) => {
        const depth = (i + 1) * 0.4;
        g.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        g.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1)';
      });
    }, { passive: true });
  }

  /* ── Step items hover ─────────────────────────────────────── */
  document.querySelectorAll('.step-item').forEach(step => {
    step.addEventListener('mouseenter', function () {
      const ring = this.querySelector('.step-ring');
      if (ring) ring.style.animationDuration = '4s';
    });
    step.addEventListener('mouseleave', function () {
      const ring = this.querySelector('.step-ring');
      if (ring) ring.style.animationDuration = '15s';
    });
  });

  /* ── Footer social icons ──────────────────────────────────── */
  document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', e => {
      e.preventDefault();
      // In production, these would link to actual social pages
    });
  });

  /* ── Console greeting ─────────────────────────────────────── */
  console.log(
    '%c🛡 VaultGuard Security %c— Premium Home Security\n%cProtecting Your Home. Securing Your Peace.',
    'color:#A855F7;font-size:16px;font-weight:bold;',
    'color:#C9C4D8;font-size:14px;',
    'color:#8A82A0;font-size:11px;'
  );

})();
