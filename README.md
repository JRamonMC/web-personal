# Web personal de José Ramón

Web estática hecha con [Astro](https://astro.build).

## Comandos

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Idiomas

Inglés en `/` (por defecto), español en `/es/` y murciano en `/mur/`. Las banderas de la cabecera llevan a la misma página en otro idioma.

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Nombre, empresa, email, enlaces | `src/consts.ts` |
| Textos de la home en los 3 idiomas | `src/i18n/home.ts` |
| Menú, pie, cargo, ubicación y textos de lecturas/recetas | `src/i18n/ui.ts` |
| Porcentajes del gráfico de carrera | `src/data/career.ts` |
| Recetas | `src/content/recipes/<en\|es\|mur>/*.md` (mismo nombre de archivo en cada idioma) |
| Libros y artículos (nota en cada idioma) | `src/content/reading.json` |
| Colores y tipografía | `src/styles/global.css` |

Para añadir una receta, crea el `.md` en las tres carpetas con el mismo nombre de archivo. `featured: true` la muestra en la home.

## Publicar

Con el workflow de `.github/workflows/deploy.yml`, cada push a `main` publica en GitHub Pages. En el repo: Settings → Pages → Source: **GitHub Actions**.
El dominio joseramonmcm.com se mantiene con `public/CNAME`.
