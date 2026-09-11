# 🛠️ Guía de configuración del portafolio

Este repositorio contiene **un sitio web** y dos README:

| Archivo | Dónde va | Para qué sirve |
| --- | --- | --- |
| `index.html` / `index.css` / `index.js` | Este repo | **Sitio web** de portafolio (GitHub Pages) |
| `README.md` | Este repo (`juan9210/github-portfolio`) | Portafolio detallado que enlazas en tu CV o LinkedIn |
| `PROFILE_README.md` | Repo especial `juan9210/juan9210` | Se muestra en tu **página de perfil** (github.com/juan9210) |

---

## 0. Publicar el SITIO WEB con GitHub Pages 🌐

1. Ve al repo en GitHub: **Settings → Pages**.
2. En **Source**, elige **Deploy from a branch**.
3. Branch: `main` · Folder: `/ (root)` · guarda.
4. Espera 1–2 minutos. Tu sitio quedará en:
   **https://juan9210.github.io/github-portfolio/**

Para verlo en local antes de publicar, abre `index.html` en el navegador,
o levanta un servidor simple:

```bash
# Python
python3 -m http.server 8080
# luego abre http://localhost:8080
```

### 🌐 Sitio bilingüe (ES / EN)

El sitio es **bilingüe** y funciona así:

- **Detección automática:** usa el idioma del navegador del visitante en la primera visita.
- **Modal de bienvenida:** la primera vez pregunta si prefiere Español o English.
- **Selector ES/EN:** un interruptor en la barra de navegación cambia el idioma al instante (sin recargar).
- **Memoria:** guarda la preferencia en el navegador (localStorage).

Los textos viven en el diccionario `I18N` dentro de `index.js`. Para editar un texto,
busca su clave (por ejemplo `hero.desc`) y edítala en `es` y en `en`.

---

## 1. Publicar el README de tu perfil

1. Crea un repositorio **público** llamado exactamente `juan9210`.
2. Agrega un archivo `README.md`.
3. Copia el contenido de `PROFILE_README.md` (todo lo que está debajo del bloque de comentarios inicial).
4. Haz commit. Aparecerá en tu perfil automáticamente.

---

## 2. Activar la animación "Snake" 🐍

El `PROFILE_README.md` referencia una animación de serpiente que recorre tu grid de contribuciones.
Para generarla necesitas un **GitHub Action** en el repo `juan9210/juan9210`:

Crea el archivo `.github/workflows/snake.yml` con este contenido:

```yaml
name: Generate Snake

on:
  schedule:
    - cron: "0 0 * * *"   # cada día
  workflow_dispatch:       # ejecución manual
  push:
    branches:
      - main

jobs:
  generate:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Generate snake
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      - name: Push to output branch
        uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Después de que el workflow corra una vez, la animación quedará disponible en la rama `output`
y se mostrará en tu perfil. Si aún no la has activado, simplemente elimina el bloque de la
serpiente del `PROFILE_README.md`.

---

## 4. Subir tu FOTO de perfil 📸

El sitio tiene una sección de foto en el hero. Para poner la tuya:

1. Guarda tu imagen en `assets/` con el nombre exacto **`profile.jpg`**
   (recomendado: **cuadrada**, mínimo **400×400 px**, `.jpg` o `.png`).
2. Súbela al repo:
   ```bash
   git add assets/profile.jpg && git commit -m "Add profile photo" && git push
   ```
3. Listo — la foto aparece automáticamente con un anillo animado.
   Mientras no exista, se muestra un avatar con tus iniciales **JC**.

> Si tu archivo es `.png`, cambia también el `src` en `index.html`
> (`assets/profile.jpg` → `assets/profile.png`).

---

## 5. Personalización pendiente (TODO)

- ✅ URL de LinkedIn ya configurada en todos los archivos.
- 🎨 Los temas de los widgets usan `tokyonight`. Puedes cambiarlo por: `radical`, `dracula`, `gruvbox`, `merko`, etc.
- 📊 Las estadísticas se llenan cuando el repo `juan9210` es público y tienes actividad pública.

---

## 🔒 Nota de privacidad

Este repositorio es **público**. Por seguridad **no** se incluyó el teléfono ni el correo
personal. El contacto se maneja vía LinkedIn. Si deseas ofrecer un correo, usa uno
dedicado para contacto profesional, no el personal.
