// Reparto aproximado del tiempo por año (cada año suma 100). Ajusta a tu gusto.
// Los nombres de las bandas y las notas de cada año se traducen en src/i18n/home.ts.
export const BAND_KEYS = ['code', 'data', 'platform', 'teach', 'people'] as const;
export type BandKey = (typeof BAND_KEYS)[number];

export const BAND_COLORS: Record<BandKey, string> = {
  code: '#eef0ff',
  data: '#9fe0ff',
  platform: '#8f99ff',
  teach: '#7fd1a8',
  people: '#e2ee4a',
};

export type Year = { y: number } & Record<BandKey, number>;

export const YEARS: Year[] = [
  { y: 2018, code: 100, data: 0, platform: 0, teach: 0, people: 0 },
  { y: 2019, code: 92, data: 8, platform: 0, teach: 0, people: 0 },
  { y: 2020, code: 90, data: 10, platform: 0, teach: 0, people: 0 },
  { y: 2021, code: 82, data: 18, platform: 0, teach: 0, people: 0 },
  { y: 2022, code: 75, data: 20, platform: 5, teach: 0, people: 0 },
  { y: 2023, code: 40, data: 5, platform: 40, teach: 0, people: 15 },
  { y: 2024, code: 15, data: 5, platform: 20, teach: 12, people: 48 },
  { y: 2025, code: 10, data: 8, platform: 12, teach: 10, people: 60 },
  { y: 2026, code: 30, data: 20, platform: 5, teach: 8, people: 37 },
];
