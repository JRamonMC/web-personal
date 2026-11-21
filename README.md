# Web personal de José Ramón

Web estática hecha con [Astro](https://astro.build).

## Comandos

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Nombre, email, enlaces | `src/consts.ts` |
| Textos de la home (Now, impacto, IA, principios, trayectoria) | `src/pages/index.astro` (arrays al principio del archivo) |
| Recetas | `src/content/recipes/*.md` (un archivo por receta) |
| Libros y artículos | `src/content/reading.json` |
| Colores y tipografía | `src/styles/global.css` |

Para añadir una receta, copia un `.md` de `src/content/recipes/`, cambia el nombre del archivo y el contenido. `featured: true` la muestra en la home.

## Publicar

Con el workflow de `.github/workflows/deploy.yml`, cada push a `main` publica en GitHub Pages. En el repo: Settings → Pages → Source: **GitHub Actions**.
El dominio joseramonmcm.com se mantiene con `public/CNAME`.
