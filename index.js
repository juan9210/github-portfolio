/* ============================================================
   Portfolio interactions — Juan Carlos Cárdenas
   Bilingual (ES / EN) + theme + animations
   ============================================================ */

/* ---------- i18n dictionary ---------- */
const I18N = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Skills",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",
    "nav.certs": "Certificaciones",
    "nav.contact": "Contacto",

    "hero.eyebrow": "👋 Hola, soy",
    "hero.desc": "Líder técnico en <strong>Cloud, DevSecOps y Ciberseguridad</strong> para entornos críticos regulados del sector salud. Más de <strong>7 años</strong> diseñando plataformas multicloud seguras, escalables y auditables.",
    "hero.cta1": "Contáctame",
    "hero.cta2": "Ver experiencia",

    "stats.incidents": "Incidentes de seguridad",
    "stats.resolution": "Tiempo de resolución",
    "stats.costs": "Costos de infraestructura",
    "stats.findings": "Hallazgos críticos (ISO/HIPAA)",

    "about.title": "Sobre mí",
    "about.p1": "Soy <strong>Ingeniero de Sistemas</strong> con Especialización en Seguridad de la Información (mención de honor) y actualmente cursando una <strong>Maestría en Seguridad de la Información</strong>.",
    "about.p2": "Mi trayectoria ha sido progresiva: desde Soporte Técnico hasta el <strong>Liderazgo estratégico</strong> de nube y ciberseguridad, gestionando plataformas multicloud (AWS, Azure, DigitalOcean, Oracle) con prácticas <strong>DevSecOps</strong>, <strong>SRE</strong> y observabilidad end-to-end.",
    "about.p3": "Me especializo en entornos altamente regulados — <strong>ISO 27001, HIPAA, NIST, FDA 21 CFR Part 11, GxP/GAMP 5</strong> — donde la seguridad, la trazabilidad y el cumplimiento no son opcionales.",
    "about.fact1": "📍 Bogotá, Colombia",
    "about.fact2": "🗣️ Español (nativo) · Inglés (B2 → C1)",
    "about.fact3": "🎯 Orientado a resultados medibles y reducción de riesgos",
    "about.years": "años",
    "about.audits": "hallazgos críticos",

    "skills.title": "Competencias &amp; Stack",
    "skills.cat1": "☁️ Cloud &amp; Plataforma",
    "skills.cat2": "🔁 DevSecOps &amp; Automatización",
    "skills.cat3": "🛡️ Ciberseguridad &amp; Cumplimiento",
    "skills.cat4": "📊 Observabilidad &amp; Sistemas",
    "skills.ha": "Alta disponibilidad",
    "skills.cost": "Optimización de costos",
    "skills.linux": "Linux (experto)",
    "skills.level": "Nivel de dominio",
    "skills.bar1": "Cloud (AWS/Azure)",
    "skills.bar2": "Ciberseguridad &amp; Compliance",
    "skills.bar3": "DevSecOps / CI-CD",
    "skills.bar4": "Kubernetes &amp; Contenedores",
    "skills.bar5": "Linux &amp; Automatización",

    "exp.title": "Experiencia profesional",
    "exp.date1": "oct 2024 – Actualidad",
    "exp.role1": "Líder de Nube y Ciberseguridad",
    "exp.role1.b1": "Dirección de estrategia cloud, DevSecOps y ciberseguridad para plataformas críticas del sector salud.",
    "exp.role1.b2": "Arquitecturas multicloud seguras (AWS, Azure, DigitalOcean) optimizadas en costo y disponibilidad.",
    "exp.role1.b3": "Gobierno de IaC (Terraform, CloudFormation) en entornos validados y auditables.",
    "exp.role1.b4": "Auditorías ISO 27001 e HIPAA superadas <strong>sin hallazgos críticos</strong>.",
    "exp.date2": "may 2023 – oct 2024",
    "exp.role2": "Líder de Infraestructura y Seguridad de la Información",
    "exp.role2.b1": "Transformación a modelo cloud-first y DevSecOps.",
    "exp.role2.b2": "Hardening, gestión de vulnerabilidades y respuesta a incidentes en producción.",
    "exp.role2.b3": "Estandarización de sistemas Linux y Windows con alta disponibilidad.",
    "exp.date3": "dic 2023 – jul 2025",
    "exp.role3": "Cloud Engineer / Consultor de Seguridad",
    "exp.role3.b1": "Entornos cloud para plataformas de imágenes médicas.",
    "exp.role3.b2": "Liderazgo técnico en la certificación ISO/IEC 27001:2022.",
    "exp.role3.b3": "CI/CD con Kubernetes y Jenkins: <strong>−40% costos</strong> y <strong>−40% fallos</strong> en producción.",
    "exp.date4": "jul 2022 – may 2023",
    "exp.role4": "Ingeniero de Soporte / DevOps",
    "exp.role4.b1": "Administración avanzada de Linux y Windows en entornos clínicos.",
    "exp.role4.b2": "Automatización con Bash, Ansible y pipelines CI/CD.",
    "exp.date5": "sep 2019 – jul 2021",
    "exp.role5": "Soporte Técnico IT",
    "exp.role5.b1": "Soporte IT con gestión de incidentes vía ITSM Aranda y SQL básico.",
    "exp.date6": "nov 2016 – feb 2019",
    "exp.role6": "Técnico en Sistemas — Redes &amp; Telecomunicaciones",
    "exp.role6.b1": "Redes en entornos Oil &amp; Gas: Cisco, Radwin, Cambium, Ubiquiti.",

    "edu.title": "Formación académica",
    "edu.y1": "2026 – Actualmente",
    "edu.d1": "Maestría en Seguridad de la Información",
    "edu.d2": "Especialización en Seguridad de la Información",
    "edu.d2p": "Los Libertadores · <em>Mención de honor: Análisis de amenazas en entornos clínicos</em>",
    "edu.d3": "Ingeniería de Sistemas",
    "edu.d4": "Tecnólogo en Gestión de Redes de Datos",

    "certs.title": "Certificaciones",
    "certs.wip": "En proceso 🚀",

    "contact.title": "Contacto",
    "contact.lead": "¿Buscas liderazgo en cloud y seguridad para entornos críticos? Conectemos.",
    "contact.linkedin": "Conectar en LinkedIn",
    "contact.github": "Ver mi GitHub",
    "contact.note": "🔒 Por privacidad no se publican teléfono ni correo personal en este sitio.",

    "footer.built": "Diseñado &amp; construido con HTML · CSS · JS",

    "typed": [
      "Cloud & Cybersecurity Leader",
      "DevSecOps · SRE · Healthcare IT",
      "ISO 27001 · HIPAA · FDA 21 CFR Part 11",
      "Multicloud: AWS · Azure · DigitalOcean · Oracle",
    ],
  },

  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.certs": "Certifications",
    "nav.contact": "Contact",

    "hero.eyebrow": "👋 Hi, I'm",
    "hero.desc": "Technical leader in <strong>Cloud, DevSecOps &amp; Cybersecurity</strong> for critical, regulated healthcare environments. Over <strong>7 years</strong> designing secure, scalable and auditable multicloud platforms.",
    "hero.cta1": "Contact me",
    "hero.cta2": "View experience",

    "stats.incidents": "Security incidents",
    "stats.resolution": "Resolution time",
    "stats.costs": "Infrastructure costs",
    "stats.findings": "Critical findings (ISO/HIPAA)",

    "about.title": "About me",
    "about.p1": "I'm a <strong>Systems Engineer</strong> with a Specialization in Information Security (honorable mention), currently pursuing a <strong>Master's in Information Security</strong>.",
    "about.p2": "My career has grown progressively: from Technical Support to <strong>strategic leadership</strong> of cloud and cybersecurity, managing multicloud platforms (AWS, Azure, DigitalOcean, Oracle) with <strong>DevSecOps</strong>, <strong>SRE</strong> and end-to-end observability practices.",
    "about.p3": "I specialize in highly regulated environments — <strong>ISO 27001, HIPAA, NIST, FDA 21 CFR Part 11, GxP/GAMP 5</strong> — where security, traceability and compliance are not optional.",
    "about.fact1": "📍 Bogotá, Colombia",
    "about.fact2": "🗣️ Spanish (native) · English (B2 → C1)",
    "about.fact3": "🎯 Focused on measurable results and risk reduction",
    "about.years": "years",
    "about.audits": "critical findings",

    "skills.title": "Skills &amp; Stack",
    "skills.cat1": "☁️ Cloud &amp; Platform",
    "skills.cat2": "🔁 DevSecOps &amp; Automation",
    "skills.cat3": "🛡️ Cybersecurity &amp; Compliance",
    "skills.cat4": "📊 Observability &amp; Systems",
    "skills.ha": "High availability",
    "skills.cost": "Cost optimization",
    "skills.linux": "Linux (expert)",
    "skills.level": "Proficiency level",
    "skills.bar1": "Cloud (AWS/Azure)",
    "skills.bar2": "Cybersecurity &amp; Compliance",
    "skills.bar3": "DevSecOps / CI-CD",
    "skills.bar4": "Kubernetes &amp; Containers",
    "skills.bar5": "Linux &amp; Automation",

    "exp.title": "Professional experience",
    "exp.date1": "Oct 2024 – Present",
    "exp.role1": "Cloud &amp; Cybersecurity Leader",
    "exp.role1.b1": "Led cloud, DevSecOps and cybersecurity strategy for critical healthcare platforms.",
    "exp.role1.b2": "Secure multicloud architectures (AWS, Azure, DigitalOcean) optimized for cost and availability.",
    "exp.role1.b3": "IaC governance (Terraform, CloudFormation) in validated, auditable environments.",
    "exp.role1.b4": "Passed ISO 27001 and HIPAA audits with <strong>zero critical findings</strong>.",
    "exp.date2": "May 2023 – Oct 2024",
    "exp.role2": "Infrastructure &amp; Information Security Leader",
    "exp.role2.b1": "Transformation to a cloud-first and DevSecOps model.",
    "exp.role2.b2": "Hardening, vulnerability management and incident response in production.",
    "exp.role2.b3": "Standardized Linux and Windows systems with high availability.",
    "exp.date3": "Dec 2023 – Jul 2025",
    "exp.role3": "Cloud Engineer / Security Consultant",
    "exp.role3.b1": "Cloud environments for medical imaging platforms.",
    "exp.role3.b2": "Technical lead for the ISO/IEC 27001:2022 certification.",
    "exp.role3.b3": "CI/CD with Kubernetes and Jenkins: <strong>−40% costs</strong> and <strong>−40% failures</strong> in production.",
    "exp.date4": "Jul 2022 – May 2023",
    "exp.role4": "Support / DevOps Engineer",
    "exp.role4.b1": "Advanced Linux and Windows administration in clinical environments.",
    "exp.role4.b2": "Automation with Bash, Ansible and CI/CD pipelines.",
    "exp.date5": "Sep 2019 – Jul 2021",
    "exp.role5": "IT Technical Support",
    "exp.role5.b1": "IT support with incident management via ITSM Aranda and basic SQL.",
    "exp.date6": "Nov 2016 – Feb 2019",
    "exp.role6": "Systems Technician — Networks &amp; Telecom",
    "exp.role6.b1": "Networking in Oil &amp; Gas environments: Cisco, Radwin, Cambium, Ubiquiti.",

    "edu.title": "Education",
    "edu.y1": "2026 – Present",
    "edu.d1": "Master's in Information Security",
    "edu.d2": "Specialization in Information Security",
    "edu.d2p": "Los Libertadores · <em>Honorable mention: Threat analysis in clinical environments</em>",
    "edu.d3": "Systems Engineering",
    "edu.d4": "Technologist in Data Network Management",

    "certs.title": "Certifications",
    "certs.wip": "In progress 🚀",

    "contact.title": "Contact",
    "contact.lead": "Looking for cloud and security leadership for critical environments? Let's connect.",
    "contact.linkedin": "Connect on LinkedIn",
    "contact.github": "View my GitHub",
    "contact.note": "🔒 For privacy, no phone or personal email is published on this site.",

    "footer.built": "Designed &amp; built with HTML · CSS · JS",

    "typed": [
      "Cloud & Cybersecurity Leader",
      "DevSecOps · SRE · Healthcare IT",
      "ISO 27001 · HIPAA · FDA 21 CFR Part 11",
      "Multicloud: AWS · Azure · DigitalOcean · Oracle",
    ],
  },
};

let currentLang = "es";
let typedTimer = null;

/* ---------- apply a language ---------- */
function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  // language switch UI
  document.querySelectorAll(".lang-switch__opt").forEach(o =>
    o.classList.toggle("active", o.dataset.lang === lang)
  );
  const sw = document.getElementById("langSwitch");
  if (sw) sw.setAttribute("data-active", lang);

  localStorage.setItem("lang", lang);

  // restart typing with (same) phrases so it stays in sync
  restartTyping();
}

/* ---------- typing effect ---------- */
function restartTyping() {
  const typedEl = document.getElementById("typed");
  if (!typedEl) return;
  if (typedTimer) clearTimeout(typedTimer);

  const phrases = I18N[currentLang].typed;
  let pi = 0, ci = 0, deleting = false;

  function type() {
    const word = phrases[pi];
    typedEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    let delay = deleting ? 45 : 85;
    if (!deleting && ci === word.length + 1) { deleting = true; delay = 1600; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
    typedTimer = setTimeout(type, delay);
  }
  type();
}

/* ---------- detect preferred language ---------- */
function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "es" || saved === "en") return saved;
  const nav = (navigator.language || "es").toLowerCase();
  return nav.startsWith("en") ? "en" : "es";
}

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- language: modal on first visit ---------- */
  const langModal = document.getElementById("langModal");
  const hasChosen = localStorage.getItem("lang");

  // apply best-guess language immediately (no flash of wrong content)
  applyLang(detectLang());

  if (!hasChosen) {
    langModal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  langModal.querySelectorAll("[data-choose]").forEach(btn =>
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.choose);
      langModal.hidden = true;
      document.body.style.overflow = "";
      // El modal bloqueaba el scroll y el IntersectionObserver podía no
      // disparar los .reveal del hero. Al cerrar, revelamos lo visible.
      if (window.__revealNow) window.__revealNow();
    })
  );

  /* ---------- language switch (toggle) ---------- */
  document.getElementById("langSwitch").addEventListener("click", () => {
    applyLang(currentLang === "es" ? "en" : "es");
  });

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
  if (localStorage.getItem("theme") === "light") {
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

  /* ---------- count up ---------- */
  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const target = +el.dataset.target;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const start = performance.now(), dur = 1200;
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- reveal a single element (runs its side effects) ---------- */
  function activateReveal(el) {
    el.classList.add("in");
    if (el.matches?.(".stat-card")) {
      const n = el.querySelector(".stat-card__num[data-target]");
      if (n) countUp(n);
    }
    if (el.matches?.(".bar")) {
      const i = el.querySelector("i");
      if (i) i.style.width = (el.dataset.level || 0) + "%";
    }
  }

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        activateReveal(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* ---------- fail-safe: reveal everything currently in the viewport ---------- */
  // El IntersectionObserver puede no disparar mientras el modal bloquea el scroll.
  // Esta función revela de inmediato lo que ya está visible. La exponemos para
  // llamarla al cerrar el modal de idioma.
  window.__revealNow = function () {
    document.querySelectorAll(".reveal:not(.in)").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        activateReveal(el);
        io.unobserve(el);
      }
    });
  };
  // Ejecuta una pasada inicial por si el observer tarda o el modal ya está cerrado.
  requestAnimationFrame(() => window.__revealNow());

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
