import type { Lang } from './index';

// Textos de la home en los tres idiomas.
// Los campos *Html admiten etiquetas (<strong>, <em>); son textos propios, no de usuarios.
// Los porcentajes del gráfico están en src/data/career.ts (no se traducen).

type Item = { k: string; v: string };
type Stat = { stat: string; label: string; text: string };
type Step = { step: string; who: string; whoKey: 'human' | 'agent' | 'team'; text: string };
type Title = { title: string; text: string };
type Row = { org: string; role: string; years: string };
type Note = { title: string; kind: string };

export type HomeCopy = {
  statusAt: string;
  h1Before: string;
  h1Flow: string;
  h1After: string;
  leadHtml: string;
  now: Item[]; // el 4.º (Reading) se completa con el libro actual
  nowReadingFallback: string;
  nowReading: (title: string, author: string) => string;
  flow: {
    kicker: string;
    h2: string;
    note: string;
    aria: string;
    bands: Record<'code' | 'data' | 'platform' | 'teach' | 'people', string>;
    yearNotes: Record<number, string>;
    pick: string;
    legendHint: string;
  };
  impact: { kicker: string; h2: string; lead: string; items: Stat[] };
  ai: { kicker: string; h2Html: string; paragraphs: string[]; pipeline: Step[] };
  manual: { kicker: string; h2: string; lead: string; items: Title[] };
  experience: {
    kicker: string;
    h2: string;
    jobs: Row[];
    teachTag: string;
    teachHtml: string;
    educationH: string;
    education: Row[];
    writingH: string;
    inDraft: string;
    notes: Note[];
  };
  off: {
    kicker: string;
    h2: string;
    lead: string;
    kitchen: string;
    allRecipes: string;
    shelf: string;
    readingList: string;
    shelfAria: string;
  };
};

const jobsYears = ['2026 — now', '2024 — now', '2023 — 2025', '2023', '2021 — 2023', '2020 — 2021', '2019 — 2020', '2018 — 2019'];
const jobsOrgs = ['Letmino AI', 'UOC', 'Fresco', 'Fresco', 'Galp Solar', 'KiKi', 'RobinBrick', 'Gentrack'];
const rows = (roles: string[], years = jobsYears, orgs = jobsOrgs): Row[] =>
  roles.map((role, i) => ({ org: orgs[i], role, years: years[i] }));
const nowYearsEs = jobsYears.map((y) => y.replace('now', 'hoy'));
const eduOrgs = ['University College Dublin', 'UOC', 'Universidad de Murcia'];
const eduYears = ['2025', '2022', '2018'];

const en: HomeCopy = {
  statusAt: 'Engineering Manager at',
  h1Before: 'I help engineering teams stay in ',
  h1Flow: 'flow',
  h1After: ', and ship with AI agents.',
  leadHtml:
    'I’m José Ramón. I lead an 11-person team at <strong>Letmino AI</strong>, teach design patterns at <strong>UOC</strong>, and before that worked as an engineer in London, renewable energy and an IoT connected kitchen. I still remember how it feels to be pulled out of deep work, so I lead to protect it.',
  now: [
    { k: 'Leading', v: 'An 11-person team at Letmino AI: backend, frontend and QA.' },
    { k: 'Building', v: 'A Software Factory to develop projects.' },
    { k: 'Teaching', v: 'Software Design Patterns at UOC, since 2024.' },
    { k: 'Reading', v: '' },
  ],
  nowReadingFallback: 'Something good about teams.',
  nowReading: (t, a) => `${t}, by ${a}.`,
  flow: {
    kicker: 'Cumulative flow, 2018 — 2026',
    h2: 'Where my time went.',
    note: 'I measure teams with flow metrics, so here’s my own career as one. Tap a year or a band.',
    aria: 'Stacked area chart: from mostly writing software in 2018 to leading people, teaching, AI work and writing software again in 2026.',
    bands: { code: 'Writing software', data: 'Data & AI', platform: 'Platform & reliability', teach: 'Teaching', people: 'Leading people' },
    yearNotes: { 2018: 'London', 2019: 'AI for retail', 2021: 'Galp', 2022: 'MSc', 2023: 'Fresco', 2024: 'UOC', 2026: 'Letmino AI' },
    pick: 'Pick a year',
    legendHint: 'Highlight',
  },
  impact: {
    kicker: 'Impact',
    h2: 'Results, not rituals.',
    lead: 'A few things I’m proud of. The numbers matter less than what they changed for the people doing the work.',
    items: [
      { stat: '5×', label: 'faster cycle time', text: 'Reworked how work flows through the team at Letmino AI, using cycle time, throughput and predictability to decide what to change next. Still improving.' },
      { stat: '11', label: 'people, one team', text: 'Backend, frontend and QA working as one unit. I own every person’s career progression, from 1:1s to growth plans.' },
      { stat: '3', label: 'teams at once', text: 'At Fresco I led KitchenOS, Foundations (Platform, SRE, DevEx) and Firmware, across software and hardware.' },
      { stat: 'Jr→P', label: 'career framework', text: 'Defined and rolled out Fresco’s engineering career paths, from Junior to Principal, so people knew what “next level” actually meant.' },
    ],
  },
  ai: {
    kicker: 'AI-native engineering',
    h2Html: 'Building <em>with</em> agents, not just using them.',
    paragraphs: [
      'My way of staying close to the code today is designing how the team builds with AI, and AI has also brought me back to writing software myself. The model is only one piece. What really makes the difference is everything around it, like the context we give it, the conventions we agree on and the guardrails that keep it safe. My MSc in Data Science keeps me honest about evaluation.',
      'I like to learn as much as I can, but with AI everything changes every day. That’s why I keep an eye on the fundamentals. Architecture matters more than ever.',
    ],
    pipeline: [
      { step: 'Ticket', who: 'Human', whoKey: 'human', text: 'Well-scoped work, written so an agent can pick it up.' },
      { step: 'Draft', who: 'Agent', whoKey: 'agent', text: 'Agents take it from ticket to pull request inside our conventions.' },
      { step: 'First review', who: 'Agent', whoKey: 'agent', text: 'An AI pass catches the nits so people review design and risk.' },
      { step: 'Decide', who: 'Human', whoKey: 'human', text: 'Engineers choose what goes in and what ships. Always.' },
      { step: 'Measure', who: 'Team', whoKey: 'team', text: 'If cycle time and quality don’t move, it’s a toy.' },
    ],
  },
  manual: {
    kicker: 'Working with me',
    h2: 'A short user manual.',
    lead: 'Many managers write a README so their team doesn’t have to guess. This is mine, in six lines.',
    items: [
      { title: 'Protect the zone', text: 'Fewer interruptions, clearer priorities, async by default. Deep work is the scarcest thing an engineering team has.' },
      { title: '1:1s are for growth', text: 'Not status updates. Every person has a direction and we talk about it often.' },
      { title: 'Learn from incidents', text: 'Blameless postmortems as a standard, so the same problem doesn’t surprise us twice.' },
      { title: 'Write decisions down', text: 'Architecture Decision Records and solution design documents keep the “why” around after the people in the meeting have moved on. I love a good document.' },
      { title: 'Kindness includes clarity', text: 'Clear expectations, direct feedback, and structured plans when performance needs them.' },
      { title: 'Processes serve people', text: 'If a ritual doesn’t help the team ship or grow, we drop it.' },
    ],
  },
  experience: {
    kicker: 'Experience',
    h2: 'From backend to building teams.',
    jobs: rows([
      'Engineering Manager',
      'Collaborator Professor, Design Patterns',
      'Engineering Manager · KitchenOS, Foundations, Firmware',
      'Platform Engineer · Platform, SRE & DevEx',
      'Software Engineer · Kotlin, CQRS, AWS',
      'Software Engineer · React Native app in 20 countries',
      'Software Engineer · AI for physical retail',
      'Software Engineer · London',
    ]),
    teachTag: 'Teaching',
    teachHtml:
      'Since 2024 I teach <strong>Analysis and Design with Patterns</strong> at the Universitat Oberta de Catalunya. Explaining a pattern to someone who has never needed it is the best test of whether I really get it.',
    educationH: 'Education',
    education: rows(['Diploma in Leadership and Management', 'MSc in Data Science', 'Degree in Software Engineering'], eduYears, ['University College Dublin', 'UOC', 'University of Murcia']),
    writingH: 'Writing, soon',
    inDraft: 'in draft',
    notes: [
      { title: 'What actually moved our cycle time', kind: 'Field notes' },
      { title: 'Postmortems people want to attend', kind: 'Essay' },
      { title: 'Agentic development for an EM', kind: 'Deep dive' },
    ],
  },
  off: {
    kicker: 'Off the clock',
    h2: 'Cooking, running, and the perfect coffee.',
    lead: 'Cooking is the other place I find the zone. Same loop as work: try, taste, adjust.',
    kitchen: 'From my kitchen',
    allRecipes: 'All recipes →',
    shelf: 'On the shelf',
    readingList: 'Reading list →',
    shelfAria: 'Go to reading list',
  },
};

const es: HomeCopy = {
  statusAt: 'Engineering Manager en',
  h1Before: 'Ayudo a los equipos de ingeniería a mantener el ',
  h1Flow: 'flow',
  h1After: ' y a entregar con agentes de IA.',
  leadHtml:
    'Soy José Ramón. Lidero un equipo de 11 personas en <strong>Letmino AI</strong>, enseño patrones de diseño en la <strong>UOC</strong> y antes trabajé como ingeniero en Londres, en energía renovable y en una cocina conectada IoT. Aún recuerdo lo que se siente cuando te sacan del trabajo profundo, así que lidero para protegerlo.',
  now: [
    { k: 'Lidero', v: 'Un equipo de 11 personas en Letmino AI: backend, frontend y QA.' },
    { k: 'Construyo', v: 'Una Software Factory para desarrollar proyectos.' },
    { k: 'Enseño', v: 'Patrones de Diseño de Software en la UOC, desde 2024.' },
    { k: 'Leo', v: '' },
  ],
  nowReadingFallback: 'Algo bueno sobre equipos.',
  nowReading: (t, a) => `${t}, de ${a}.`,
  flow: {
    kicker: 'Flujo acumulado, 2018 — 2026',
    h2: 'En qué se me fue el tiempo.',
    note: 'Mido a los equipos con métricas de flujo, así que aquí va mi carrera como una de ellas. Toca un año o una banda.',
    aria: 'Gráfico de áreas apiladas: de casi todo programar en 2018 a liderar personas, enseñar, trabajar con IA y volver a programar en 2026.',
    bands: { code: 'Programar', data: 'Datos e IA', platform: 'Plataforma y fiabilidad', teach: 'Docencia', people: 'Liderar personas' },
    yearNotes: { 2018: 'Londres', 2019: 'IA para retail', 2021: 'Galp', 2022: 'Máster', 2023: 'Fresco', 2024: 'UOC', 2026: 'Letmino AI' },
    pick: 'Elige un año',
    legendHint: 'Resaltar',
  },
  impact: {
    kicker: 'Impacto',
    h2: 'Resultados, no rituales.',
    lead: 'Algunas cosas de las que estoy orgulloso. Los números importan menos que lo que cambiaron para quienes hacen el trabajo.',
    items: [
      { stat: '5×', label: 'cycle time más rápido', text: 'Rediseñé cómo fluye el trabajo en el equipo de Letmino AI, usando cycle time, throughput y predictibilidad para decidir qué cambiar después. Seguimos mejorando.' },
      { stat: '11', label: 'personas, un equipo', text: 'Backend, frontend y QA trabajando como una sola unidad. Me encargo de la carrera de cada persona, de los 1:1 a los planes de crecimiento.' },
      { stat: '3', label: 'equipos a la vez', text: 'En Fresco lideré KitchenOS, Foundations (Platform, SRE, DevEx) y Firmware, entre software y hardware.' },
      { stat: 'Jr→P', label: 'carrera profesional', text: 'Definí e implanté las carreras de ingeniería de Fresco, de Junior a Principal, para que todos supieran qué significaba de verdad “el siguiente nivel”.' },
    ],
  },
  ai: {
    kicker: 'Ingeniería nativa en IA',
    h2Html: 'Construir <em>con</em> agentes, no solo usarlos.',
    paragraphs: [
      'Hoy mi forma de seguir cerca del código es diseñar cómo construye el equipo con IA, y la IA también me ha devuelto a programar. El modelo es solo una pieza. Lo que de verdad marca la diferencia es todo lo que lo rodea, como el contexto que le damos, las convenciones que acordamos y los límites que lo mantienen seguro. Mi máster en Ciencia de Datos me ayuda a ser honesto con la evaluación.',
      'Me gusta aprender todo lo que puedo, pero con la IA todo cambia cada día. Por eso no pierdo de vista los fundamentos. La arquitectura importa más que nunca.',
    ],
    pipeline: [
      { step: 'Ticket', who: 'Persona', whoKey: 'human', text: 'Trabajo bien acotado, escrito para que un agente pueda cogerlo.' },
      { step: 'Borrador', who: 'Agente', whoKey: 'agent', text: 'Los agentes lo llevan del ticket a la pull request dentro de nuestras convenciones.' },
      { step: 'Primera revisión', who: 'Agente', whoKey: 'agent', text: 'Una pasada de IA caza los detalles para que las personas revisen diseño y riesgo.' },
      { step: 'Decidir', who: 'Persona', whoKey: 'human', text: 'Los ingenieros eligen qué entra y qué se publica. Siempre.' },
      { step: 'Medir', who: 'Equipo', whoKey: 'team', text: 'Si el cycle time y la calidad no se mueven, es un juguete.' },
    ],
  },
  manual: {
    kicker: 'Trabajar conmigo',
    h2: 'Un pequeño manual de uso.',
    lead: 'Muchos managers escriben un README para que su equipo no tenga que adivinar. Este es el mío, en seis líneas.',
    items: [
      { title: 'Proteger la concentración', text: 'Menos interrupciones, prioridades más claras, asíncrono por defecto. El trabajo profundo es lo más escaso que tiene un equipo de ingeniería.' },
      { title: 'Los 1:1 son para crecer', text: 'No para dar el parte. Cada persona tiene una dirección y hablamos de ella a menudo.' },
      { title: 'Aprender de los incidentes', text: 'Postmortems sin culpables como norma, para que el mismo problema no nos sorprenda dos veces.' },
      { title: 'Dejar las decisiones por escrito', text: 'Los Architecture Decision Records y los documentos de diseño de soluciones guardan el “porqué” cuando la gente de la reunión ya no está. Me encantan los buenos documentos.' },
      { title: 'La amabilidad incluye claridad', text: 'Expectativas claras, feedback directo y planes estructurados cuando el rendimiento lo necesita.' },
      { title: 'Los procesos están al servicio de las personas', text: 'Si un ritual no ayuda al equipo a entregar o a crecer, lo quitamos.' },
    ],
  },
  experience: {
    kicker: 'Experiencia',
    h2: 'Del backend a construir equipos.',
    jobs: rows(
      [
        'Engineering Manager',
        'Profesor colaborador, Patrones de Diseño',
        'Engineering Manager · KitchenOS, Foundations, Firmware',
        'Platform Engineer · Platform, SRE y DevEx',
        'Ingeniero de software · Kotlin, CQRS, AWS',
        'Ingeniero de software · App React Native en 20 países',
        'Ingeniero de software · IA para tiendas físicas',
        'Ingeniero de software · Londres',
      ],
      nowYearsEs,
    ),
    teachTag: 'Docencia',
    teachHtml:
      'Desde 2024 enseño <strong>Análisis y Diseño con Patrones</strong> en la Universitat Oberta de Catalunya. Explicar un patrón a alguien que nunca lo ha necesitado es la mejor prueba de si de verdad lo entiendo.',
    educationH: 'Formación',
    education: rows(['Diploma en Liderazgo y Gestión', 'Máster en Ciencia de Datos', 'Grado en Ingeniería del Software'], eduYears, eduOrgs),
    writingH: 'Escribiendo',
    inDraft: 'en borrador',
    notes: [
      { title: 'Lo que de verdad movió nuestro cycle time', kind: 'Notas de campo' },
      { title: 'Postmortems a los que la gente quiere ir', kind: 'Ensayo' },
      { title: 'Desarrollo agéntico para un EM', kind: 'A fondo' },
    ],
  },
  off: {
    kicker: 'Fuera del trabajo',
    h2: 'Cocinar, correr y el café perfecto.',
    lead: 'Cocinar es el otro sitio donde encuentro la concentración. El mismo bucle que en el trabajo: probar, saborear, ajustar.',
    kitchen: 'Desde mi cocina',
    allRecipes: 'Todas las recetas →',
    shelf: 'En la estantería',
    readingList: 'Lecturas →',
    shelfAria: 'Ir a las lecturas',
  },
};

// Murciano: el español de arriba con acento de la huerta.
const mur: HomeCopy = {
  ...es,
  h1Before: 'Acho, ayudo a los equipos de ingeniería a mantener el ',
  h1After: ' y a sacar faena con agentes de IA.',
  leadHtml:
    'Soy José Ramón, pijo. Llevo un equipo de 11 personas en <strong>Letmino AI</strong>, enseño patrones de diseño en la <strong>UOC</strong> y antes curré de ingeniero en Londres, en energía renovable y en una cocina conectada IoT. Aún me acuerdo de lo que es que te saquen del trabajo profundo, así que lidero pa’ protegerlo.',
  now: [
    { k: 'Lidero', v: 'Un equipo de 11 personas en Letmino AI: backend, frontend y QA.' },
    { k: 'Construyo', v: 'Una Software Factory pa’ sacar proyectos.' },
    { k: 'Enseño', v: 'Patrones de Diseño de Software en la UOC, desde 2024.' },
    { k: 'Leo', v: '' },
  ],
  nowReadingFallback: 'Algo güeno sobre equipos.',
  flow: {
    ...es.flow,
    h2: '¿Ande se me fue el tiempo?',
    note: 'Mido a los equipos con métricas de flujo, así que aquí va mi carrera como una de ellas. Toca un año o una banda, acho.',
    yearNotes: { ...es.flow.yearNotes, 2018: 'Londres, ná menos' },
  },
  impact: {
    ...es.impact,
    h2: 'Resultaos, no rituales.',
    lead: 'Cosicas de las que estoy orgulloso. Los números importan menos que lo que cambiaron pa’ la gente que hace la faena.',
  },
  ai: {
    ...es.ai,
    kicker: 'Ingeniería con IA, zagal',
    paragraphs: [
      'Hoy mi forma de seguir cerca del código es diseñar cómo construye el equipo con IA, y la IA también me ha devuelto a programar. El modelo es solo una pieza. Lo que de verdad marca la diferencia es to’ lo que lo rodea, como el contexto que le damos, las convenciones que acordamos y los límites que lo mantienen seguro. Mi máster en Ciencia de Datos me ayuda a ser honesto con la evaluación.',
      'Me gusta aprender to’ lo que puedo, pero con la IA to’ cambia cada día. Por eso no pierdo de vista los fundamentos. La arquitectura importa más que nunca, pijo.',
    ],
  },
  manual: {
    ...es.manual,
    h2: 'Un manualico de uso.',
    lead: 'Muchos managers escriben un README pa’ que su equipo no tenga que adivinar. Este es el mío, en seis líneas.',
  },
  experience: {
    ...es.experience,
    h2: 'Del backend a montar equipos.',
  },
  off: {
    ...es.off,
    kicker: 'Fuera de la faena',
    h2: 'Guisar, correr y un buen asiático.',
    lead: 'Guisar es el otro sitio donde me concentro. El mismo bucle que en la faena: probar, catar, apañar.',
    kitchen: 'De mi cocina',
    shelf: 'En la estantería, acho',
  },
};

export const HOME = { en, es, mur } satisfies Record<Lang, HomeCopy>;
