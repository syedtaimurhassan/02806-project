/* ==========================================================================
   THE UNEVEN CURB — script.js
   - Reading progress bar
   - IntersectionObserver fade-ups (.reveal -> .in-view)
   - Mobile nav toggle
   ========================================================================== */

(function () {
  'use strict';

  // ----- Reading progress bar ----------------------------------------------
  const progressBar = document.getElementById('progressBar');

  function updateProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct.toFixed(2) + '%';
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateProgress();

  // ----- Reveal on scroll --------------------------------------------------
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Fallback: just show everything.
    reveals.forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  // ----- Mobile nav --------------------------------------------------------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('topnavLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----- Smooth-scroll anchor offset (account for sticky nav) -------------
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.querySelector('.topnav')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      window.scrollTo({ top: top, behavior: 'smooth' });
      // update URL hash without jump
      history.pushState(null, '', href);
    });
  });
})();
