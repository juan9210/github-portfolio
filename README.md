<!-- ===================== BANNER ANIMADO ===================== -->
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:005571,50:0072C6,100:00B4D8&height=200&section=header&text=github-portfolio&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Portafolio%20web%20biling%C3%BCe%20%C2%B7%20Cloud%20%26%20Security&descAlignY=58&descSize=18" alt="banner" />
</div>

<!-- ===================== TYPING EFFECT ===================== -->
<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=00B4D8&center=true&vCenter=true&width=750&lines=Portafolio+personal+de+Juan+Carlos+C%C3%A1rdenas;Biling%C3%BCe+ES+%2F+EN+%C2%B7+dark+%2F+light;HTML+%C2%B7+CSS+%C2%B7+JavaScript+%C2%B7+sin+frameworks;Publicado+con+GitHub+Pages" alt="Typing SVG" />
</div>

<!-- ===================== BADGES ===================== -->
<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?logo=githubpages&logoColor=white" />
  <img src="https://img.shields.io/badge/i18n-ES%20%7C%20EN-00B4D8" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</div>

<!-- ===================== SITIO EN VIVO ===================== -->
<div align="center">
  <br/>
  <a href="https://juan9210.github.io/github-portfolio/">
    <img src="https://img.shields.io/badge/🌐%20Ver%20portafolio%20en%20vivo-00B4D8?style=for-the-badge" alt="Live site" />
  </a>
</div>

---

## `$ cat about.md`

Portafolio web personal de **Juan Carlos Cárdenas** — Cloud & Security Leader · DevSecOps · SRE.
Sitio **bilingüe (ES / EN)**, con tema claro/oscuro, animaciones y diseño responsive.
Construido con **HTML, CSS y JavaScript puro** (sin frameworks ni dependencias) y publicado con **GitHub Pages**.

> 🌍 **Bilingüe:** detecta el idioma del navegador y ofrece un selector **ES / EN** en la
> barra de navegación. La primera visita permite elegir idioma y la preferencia se recuerda.
> *· The website auto-detects the browser language and offers an ES/EN switch.*

---

## `$ ls -la features/`

```text
drwxr-xr-x  i18n          Bilingüe ES/EN con detección automática y selector persistente
drwxr-xr-x  theme         Modo claro / oscuro con preferencia guardada
drwxr-xr-x  responsive    Diseño adaptable (desktop · tablet · móvil)
drwxr-xr-x  animations    Efecto typing, reveal on scroll, contadores y barras
drwxr-xr-x  seo           Open Graph · Twitter Cards · JSON-LD (schema.org/Person)
drwxr-xr-x  a11y          Roles ARIA, prefers-reduced-motion y navegación por teclado
drwxr-xr-x  ci-cd         Deploy automático a GitHub Pages (GitHub Actions)
```

---

## `$ cat tech-stack.yaml`

```yaml
frontend:    [HTML5, CSS3, JavaScript (vanilla)]
fuentes:     [Inter, Fira Code]
hosting:     GitHub Pages
ci_cd:       GitHub Actions (.github/workflows/deploy-pages.yml)
assets:      SVG (favicon), sin dependencias externas de JS
seo:         [Open Graph, Twitter Cards, JSON-LD]
status:      ready  ·  environment: production
```

---

## `$ tree .`

```text
github-portfolio/
├─ index.html          # Estructura y contenido (con atributos data-i18n)
├─ index.css           # Estilos, tema claro/oscuro, responsive
├─ index.js            # i18n, tema, animaciones e interacciones
├─ assets/
│  ├─ favicon.svg      # Icono del sitio
│  ├─ profile.jpg      # (opcional) tu foto — si falta, se muestran iniciales
│  └─ og-image.png     # (opcional) imagen 1200x630 para compartir
├─ .github/workflows/
│  └─ deploy-pages.yml # Deploy automático a GitHub Pages
├─ PROFILE_README.md   # README de perfil (va en el repo juan9210/juan9210)
├─ SETUP.md            # Guía de configuración
└─ README.md           # Este archivo
```

---

## `$ ./run --local`

No requiere build ni dependencias. Para verlo en local:

```bash
# Opción 1: abre el archivo directamente
xdg-open index.html        # Linux
open index.html            # macOS

# Opción 2: sirve con un servidor estático (recomendado para probar i18n)
python3 -m http.server 8080
# luego abre http://localhost:8080
```

---

## `$ ./deploy --github-pages`

El despliegue es automático con GitHub Actions en cada push a `main`.
Solo necesitas activarlo una vez:

1. **Settings → Pages → Source:** selecciona **GitHub Actions**.
2. Haz push a `main` — el workflow `deploy-pages.yml` publica el sitio.
3. Disponible en: `https://juan9210.github.io/github-portfolio/`

> 💡 Para personalizar: sube tu foto a `assets/profile.jpg` (cuadrada, ≥400px)
> y una imagen `assets/og-image.png` (1200×630) para la vista previa al compartir.

---

## `$ connect --socials`

<div align="center">

  <a href="https://www.linkedin.com/in/juan-carlos-cardenas-539b7b216/">
    <img src="https://img.shields.io/badge/LinkedIn-Conectemos-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge" alt="LinkedIn" />
  </a>&nbsp;
  <a href="https://github.com/juan9210">
    <img src="https://img.shields.io/badge/GitHub-@juan9210-181717?logo=github&logoColor=white&style=for-the-badge" alt="GitHub" />
  </a>&nbsp;
  <a href="https://juan9210.github.io/github-portfolio/">
    <img src="https://img.shields.io/badge/Portfolio-En%20vivo-00B4D8?logo=readthedocs&logoColor=white&style=for-the-badge" alt="Portfolio" />
  </a>

</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00B4D8,50:0072C6,100:005571&height=120&section=footer" alt="footer" />
  <br/>
  <sub>© 2026 Juan Carlos Cárdenas Padilla · Licencia MIT · Hecho con ☕ desde Bogotá, Colombia</sub>
</div>
