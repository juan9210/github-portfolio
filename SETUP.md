# 🛠️ Guía de configuración del portafolio

Este repositorio contiene dos README:

| Archivo | Dónde va | Para qué sirve |
| --- | --- | --- |
| `README.md` | Este repo (`juan9210/github-portfolio`) | Portafolio detallado que enlazas en tu CV o LinkedIn |
| `PROFILE_README.md` | Repo especial `juan9210/juan9210` | Se muestra en tu **página de perfil** (github.com/juan9210) |

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

## 3. Personalización pendiente (TODO)

- 🔗 Reemplaza `TU-USUARIO-LINKEDIN` con tu URL real de LinkedIn en `README.md` y `PROFILE_README.md`.
- 🎨 Los temas de los widgets usan `tokyonight`. Puedes cambiarlo por: `radical`, `dracula`, `gruvbox`, `merko`, etc.
- 📊 Las estadísticas se llenan cuando el repo `juan9210` es público y tienes actividad pública.

---

## 🔒 Nota de privacidad

Este repositorio es **público**. Por seguridad **no** se incluyó el teléfono ni el correo
personal. El contacto se maneja vía LinkedIn. Si deseas ofrecer un correo, usa uno
dedicado para contacto profesional, no el personal.
