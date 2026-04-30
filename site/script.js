(() => {
  const body = document.body;
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  const backToTop = document.querySelector(".back-to-top");
  const iframes = Array.from(document.querySelectorAll("iframe"));
  const copyButtons = Array.from(document.querySelectorAll("[data-copy-link]"));

  const closeMobileNav = () => {
    if (!navToggle) return;
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("nav-open");
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      body.classList.toggle("nav-open", !isOpen);
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      closeMobileNav();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      history.pushState(null, "", hash);
    });
  });

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const linkById = new Map(
      navLinks
        .map((link) => [link.getAttribute("href")?.replace("#", ""), link])
        .filter(([id]) => Boolean(id))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => link.classList.remove("active"));
        linkById.get(visible.target.id)?.classList.add("active");
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

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
