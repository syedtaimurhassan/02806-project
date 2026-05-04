(() => {
  /* =========================================================
     The Uneven Curb — script.js
     ========================================================= */

  const body        = document.body;
  const navToggle   = document.querySelector(".nav-toggle");
  const nav         = document.querySelector("#site-nav");
  const navLinks    = Array.from(document.querySelectorAll(".site-nav a"));
  const sections    = Array.from(document.querySelectorAll("main section[id]"));
  const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  const backToTop   = document.querySelector(".back-to-top");
  const iframes     = Array.from(document.querySelectorAll("iframe"));
  const progressBar = document.querySelector("#scroll-progress");
  const header      = document.querySelector(".site-header");
  const statPanel   = document.querySelector(".stat-panel");
  const animTargets = Array.from(document.querySelectorAll("[data-animate]"));

  /* ---- Helpers ------------------------------------------- */
  const closeMobileNav = () => {
    if (!navToggle) return;
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("nav-open");
  };

  /* ---- Mobile nav toggle --------------------------------- */
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      body.classList.toggle("nav-open", !isOpen);
    });
  }

  /* ---- Smooth internal links ----------------------------- */
  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      closeMobileNav();

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", hash);
    });
  });

  /* ---- Back to top -------------------------------------- */
  if (backToTop) {
    backToTop.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#top")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      history.pushState(null, "", "#top");
    });
  }

  /* ---- Iframe load --------------------------------------- */
  iframes.forEach((iframe) => {
    iframe.addEventListener(
      "load",
      () => {
        iframe.classList.add("is-loaded");
        iframe.closest(".iframe-wrap")?.classList.add("is-loaded");
      },
      { once: true }
    );
  });

  /* ---- Scroll: progress bar + header shadow -------------- */
  const onScroll = () => {
    const scrollTop    = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrollable   = scrollHeight - clientHeight;

    /* Progress bar */
    if (progressBar && scrollable > 0) {
      const pct = Math.min(100, (scrollTop / scrollable) * 100);
      progressBar.style.width = pct + "%";
    }

    /* Header shadow */
    if (header) {
      body.classList.toggle("scrolled", scrollTop > 40);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  /* Run once on load to handle pre-scrolled state */
  onScroll();

  /* ---- Active nav highlight ------------------------------ */
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const linkById = new Map(
      navLinks
        .map((link) => [link.getAttribute("href")?.replace("#", ""), link])
        .filter(([id]) => Boolean(id))
    );

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => link.classList.remove("active"));
        linkById.get(visible.target.id)?.classList.add("active");
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ---- Entrance animations: [data-animate] elements ------ */
  if ("IntersectionObserver" in window && animTargets.length) {
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          animObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    animTargets.forEach((el) => animObserver.observe(el));
  }

  /* ---- Stat panel: slide-in from right ------------------- */
  if ("IntersectionObserver" in window && statPanel) {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          statPanel.classList.add("is-visible");
          statObserver.unobserve(statPanel);
        });
      },
      {
        threshold: 0.2,
      }
    );

    statObserver.observe(statPanel);
  }

  /* ---- Copy buttons (kept from original) ----------------- */
  const copyButtons = Array.from(document.querySelectorAll("[data-copy-link]"));
  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const target = button.getAttribute("data-copy-link");
      if (!target || !navigator.clipboard) return;

      const url = new URL(target, window.location.href).toString();
      await navigator.clipboard.writeText(url);
      button.classList.add("copied");
      button.setAttribute("aria-label", "Link copied");
      window.setTimeout(() => button.classList.remove("copied"), 1600);
    });
  });
})();
