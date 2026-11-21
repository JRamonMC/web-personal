import type { Lang } from './index';

// Textos compartidos: cabecera, pie y páginas de lecturas y recetas.
// El tipo obliga a que los tres idiomas tengan las mismas claves.
type Ui = {
  role: string;
  location: string;
  description: string;
  nav: { work: string; manual: string; reading: string; recipes: string };
  skip: string;
  home: string;
  clock: string;
  clockLabel: string;
  theme: string;
  switchTo: string;
  footKicker: string;
  footCta: string;
  footWho: (role: string, company: string, location: string) => string;
  signoff: string;
  serves: (n: number) => string;
  reading: {
    title: string;
    description: string;
    kicker: string;
    h2: string;
    lead: string;
    now: string;
    books: string;
    articles: string;
  };
  recipes: {
    title: string;
    description: string;
    kicker: string;
    h2: string;
    lead: string;
    back: string;
  };
};

export const UI = {
  en: {
    role: 'Engineering Manager',
    location: 'Murcia, Spain',
    description:
      'Engineering Manager leading teams that build with AI agents. Flow, people and engineering practices, from Murcia, working remotely.',
    nav: { work: 'Work', manual: 'Working with me', reading: 'Reading', recipes: 'Recipes' },
    skip: 'Skip to content',
    home: 'Home',
    clock: 'Murcia (Spain)',
    clockLabel: 'Local time in Murcia',
    theme: 'Toggle dark mode',
    switchTo: 'Read in',
    footKicker: 'Open to interesting conversations',
    footCta: 'Let’s talk',
    footWho: (role, company, location) => `${role} at ${company}. Based in ${location}, working remotely.`,
    signoff: 'Made in Murcia, between lemons and pull requests.',
    serves: (n) => `serves ${n}`,
    reading: {
      title: 'Reading',
      description: 'Books and articles that shaped how I lead.',
      kicker: 'Off the clock · Reading',
      h2: 'Books and articles that stuck.',
      lead: 'Not a list of everything I’ve read. Just the ones I still think about, with a line on why.',
      now: 'Reading now',
      books: 'Books',
      articles: 'Articles',
    },
    recipes: {
      title: 'Recipes',
      description: 'Things I like to cook.',
      kicker: 'Off the clock · Recipes',
      h2: 'From my kitchen.',
      lead: 'Cooking is where I switch off from work and still get to iterate. Most of these started as something from home in Murcia and got tweaked over many weekends.',
      back: '← All recipes',
    },
  },
  es: {
    role: 'Engineering Manager',
    location: 'Murcia, España',
    description:
      'Engineering Manager al frente de equipos que construyen con agentes de IA. Flujo, personas y buenas prácticas de ingeniería, desde Murcia y en remoto.',
    nav: { work: 'Trabajo', manual: 'Trabajar conmigo', reading: 'Lecturas', recipes: 'Recetas' },
    skip: 'Ir al contenido',
    home: 'Inicio',
    clock: 'Murcia (España)',
    clockLabel: 'Hora local en Murcia',
    theme: 'Cambiar modo oscuro',
    switchTo: 'Leer en',
    footKicker: 'Abierto a conversaciones interesantes',
    footCta: 'Hablemos',
    footWho: (role, company, location) => `${role} en ${company}. Vivo en ${location} y trabajo en remoto.`,
    signoff: 'Hecho en Murcia, entre limones y pull requests.',
    serves: (n) => `${n} raciones`,
    reading: {
      title: 'Lecturas',
      description: 'Libros y artículos que han marcado mi forma de liderar.',
      kicker: 'Fuera del trabajo · Lecturas',
      h2: 'Libros y artículos que se quedaron.',
      lead: 'No es todo lo que he leído. Solo lo que todavía me ronda la cabeza, con una línea sobre por qué.',
      now: 'Leyendo ahora',
      books: 'Libros',
      articles: 'Artículos',
    },
    recipes: {
      title: 'Recetas',
      description: 'Cosas que me gusta cocinar.',
      kicker: 'Fuera del trabajo · Recetas',
      h2: 'Desde mi cocina.',
      lead: 'Cocinar es donde desconecto del trabajo y aun así sigo iterando. Casi todas empezaron como algo de casa, en Murcia, y las he ido retocando muchos fines de semana.',
      back: '← Todas las recetas',
    },
  },
  mur: {
    role: 'Engineering Manager',
    location: 'Murcia, España',
    description:
      'Engineering Manager al frente de equipos que construyen con agentes de IA. Flujo, personas y buena ingeniería, desde Murcia, acho, y en remoto.',
    nav: { work: 'Faena', manual: 'Currar conmigo', reading: 'Lecturas', recipes: 'Recetas' },
    skip: 'Ir al contenido',
    home: 'Inicio',
    clock: 'Murcia (España)',
    clockLabel: 'Hora local en Murcia',
    theme: 'Cambiar modo oscuro',
    switchTo: 'Leer en',
    footKicker: 'Siempre con ganas de una buena charraeta',
    footCta: '¿Hablamos, acho?',
    footWho: (role, company, location) => `${role} en ${company}. Vivo en ${location} y curro en remoto.`,
    signoff: 'Hecho en Murcia, entre limones y pull requests, pijo.',
    serves: (n) => `pa’ ${n}`,
    reading: {
      title: 'Lecturas',
      description: 'Libros y artículos que me han marcao como líder.',
      kicker: 'Fuera de la faena · Lecturas',
      h2: 'Libros y artículos que se quedaron, acho.',
      lead: 'No es to’ lo que he leído. Solo lo que todavía me ronda la cabeza, con una línea de por qué.',
      now: 'Leyendo ahora',
      books: 'Libros',
      articles: 'Artículos',
    },
    recipes: {
      title: 'Recetas',
      description: 'Lo que me gusta guisar.',
      kicker: 'Fuera de la faena · Recetas',
      h2: 'De mi cocina, zagal.',
      lead: 'Guisar es donde desconecto de la faena y aun así sigo iterando. Casi todas salen de casa, de Murcia, y las he ido apañando muchos fines de semana.',
      back: '← Todas las recetas',
    },
  },
} satisfies Record<Lang, Ui>;

export const ui = (lang: Lang): Ui => UI[lang];
