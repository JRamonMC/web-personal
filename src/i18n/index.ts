// Idiomas de la web. Inglés es el idioma por defecto y vive en la raíz (/),
// el resto bajo su prefijo (/es/, /mur/).
export const LANGS = ['en', 'es', 'mur'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

// Valor de <html lang>. El murciano no tiene código propio: es español.
export const HTML_LANG: Record<Lang, string> = { en: 'en', es: 'es', mur: 'es' };

// Nombre de cada idioma en su propio idioma (para el selector).
export const LANG_NAME: Record<Lang, string> = { en: 'English', es: 'Español', mur: 'Murcianico' };

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Parámetro de ruta para getStaticPaths en las páginas `[...lang]`. */
export const langPaths = () =>
  LANGS.map((lang) => ({ params: { lang: lang === DEFAULT_LANG ? undefined : lang }, props: { lang } }));

/** Ruta interna (ej. '/recipes/') en el idioma dado, con BASE_URL. */
export function localize(lang: Lang, path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${lang === DEFAULT_LANG ? '' : `/${lang}`}${p}`;
}

/** La misma página en otro idioma: quita el prefijo actual y pone el nuevo. */
export function swapLang(pathname: string, to: Lang): string {
  let p = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  const first = p.split('/')[1];
  if ((LANGS as readonly string[]).includes(first) && first !== DEFAULT_LANG) p = p.slice(first.length + 1) || '/';
  return localize(to, p);
}
