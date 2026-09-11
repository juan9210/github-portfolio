/* ============================================================
   Portfolio interactions — Juan Carlos Cárdenas
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  navToggle.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    navToggle.classList.toggle("active", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navList.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navList.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- theme toggle (persisted) ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀️";
  }
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "light");
    }
  });

  /* ---------- typing effect ---------- */
  const typedEl = document.getElementById("typed");
  const phrases = [
    "Cloud & Cybersecurity Leader",
    "DevSecOps · SRE · Healthcare IT",
    "ISO 27001 · HIPAA · FDA 21 CFR Part 11",
    "Multicloud: AWS · Azure · DigitalOcean · Oracle",
  ];
  let pi = 0, ci = 0, deleting = false;
  function type() {
    const word = phrases[pi];
    typedEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    let delay = deleting ? 45 : 85;
    if (!deleting && ci === word.length + 1) { deleting = true; delay = 1600; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
    setTimeout(type, delay);
  }
  type();

  /* ---------- scroll progress + to-top ---------- */
  const progress = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = scrolled + "%";
    toTop.classList.toggle("show", h.scrollTop > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");

        // animate stat counters
        e.target.querySelectorAll?.(".stat-card__num[data-target]").forEach(countUp);
        if (e.target.matches?.(".stat-card")) {
          const n = e.target.querySelector(".stat-card__num[data-target]");
          if (n) countUp(n);
        }

        // animate skill bars
        if (e.target.matches?.(".bar")) {
          const fill = e.target.querySelector("i");
          fill.style.width = (e.target.dataset.level || 0) + "%";
        }

        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* ---------- count up ---------- */
  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const target = +el.dataset.target;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- active nav link on scroll ---------- */
  const sections = document.querySelectorAll("section[id]");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        document.querySelectorAll(".nav__link").forEach(l =>
          l.style.color = l.getAttribute("href") === "#" + id ? "var(--primary)" : ""
        );
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => spy.observe(s));
});
