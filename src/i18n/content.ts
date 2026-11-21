import { getCollection } from 'astro:content';
import type { Lang } from './index';

// Recetas: src/content/recipes/<idioma>/<slug>.md, con el mismo slug en cada idioma.
export async function recipesFor(lang: Lang) {
  return (await getCollection('recipes', (r) => r.id.startsWith(`${lang}/`)))
    .map((r) => ({ ...r, slug: r.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}
