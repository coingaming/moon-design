import { PaletteColors } from './types';

/* Sportsbet-specific Palette
  =========================================== */

/**
 * Primary Colors
 */
const piccolo: PaletteColors = {
  100: '#0CD664',
  80: '#24DA74',
  60: '#3DDE83',
  40: '#55E292',
  20: '#85EAB2',
};

/**
 * Secondary Colors
 */
const hit: PaletteColors = {
  100: '#010812',
  80: '#1A212A',
  60: '#343941',
  40: '#4D5259',
  20: '#808388',
};

/**
 * Background Colors
 */
const goku: PaletteColors = {
  100: '#1F262F',
  80: '#353C44',
  60: '#4C5159',
  40: '#62676D',
  20: '#8F9297',
};

/**
 * Background Secondary Colors
 */
const gohan: PaletteColors = {
  100: '#31373F',
  80: '#3D434B',
  60: '#5A5F65',
  40: '#6F7379',
  20: '#989B9F',
};

/**
 * Text Colors
 */
const bulma: PaletteColors = {
  100: '#FFF',
  80: '#F3F5F6',
  60: '#EDEFF1',
  40: '#E7EAEC',
  20: '#DBE0E3',
};

/**
 * Text Secondary Colors
 */
const trunks: PaletteColors = {
  100: '#8697A2',
  80: '#92A1AB',
  60: '#9EACB5',
  40: '#AAB6BE',
  20: '#C2CBD0',
};

/* Common Palette
  =========================================== */

/**
 * Warning Colors
 */
const krillin: PaletteColors = {
  100: '#FFAB00',
  80: '#FFB319',
  60: '#FFBC33',
  40: '#FFC44C',
  20: '#FFD580',
};

/**
 * Error Colors
 */
const chichi: PaletteColors = {
  100: '#FF4E64',
  80: '#FF6074',
  60: '#FF7183',
  40: '#FF8392',
  20: '#FFA7B2',
};

/**
 * Success Colors
 */
const roshi: PaletteColors = {
  100: '#FF5111',
  80: '#FF6229',
  60: '#FF7441',
  40: '#FF8558',
  20: '#FFA888',
};

/**
 * Action Colors
 */
const vegeta: PaletteColors = {
  100: '#118BFF',
  80: '#2997FF',
  60: '#41A2FF',
  40: '#58AEFF',
  20: '#88C5FF',
};

/* Complimentary Palette
  =========================================== */

/**
 * Reds
 */
const dodoria: PaletteColors = {
  100: '#D33030',
  80: '#D74545',
  60: '#DC5959',
  40: '#E06E6E',
  20: '#E99797',
};

/**
 * Blues
 */
const whis: PaletteColors = {
  100: '#0F75BD',
  80: '#2783C4',
  60: '#3F91CA',
  40: '#579ED1',
  20: '#87BADE',
};

/**
 * Greens
 */
const cell: PaletteColors = {
  100: '#0AB758',
  80: '#22BE69',
  60: '#3BC579',
  40: '#53CD8A',
  20: '#84DBAB',
};

/**
 * Purples
 */
const frieza: PaletteColors = {
  100: '#9182DE',
  80: '#9C8EE1',
  60: '#A79BE5',
  40: '#B2A7E8',
  20: '#C8C0EF',
};

/**
 * Light-browns
 */
const raditz: PaletteColors = {
  100: '#B3804A',
  80: '#BB8D5C',
  60: '#C2996E',
  40: '#CAA680',
  20: '#D9BFA4',
};

/**
 * Dark-browns
 */
const nappa: PaletteColors = {
  100: '#725550',
  80: '#806661',
  60: '#8E7773',
  40: '#9C8884',
  20: '#B8AAA7',
};

/* Sportsbet Full Palette
  =========================================== */

export type Palette = {
  piccolo: PaletteColors;
  hit: PaletteColors;
  goku: PaletteColors;
  gohan: PaletteColors;
  bulma: PaletteColors;
  trunks: PaletteColors;
  krillin: PaletteColors;
  chichi: PaletteColors;
  roshi: PaletteColors;
  vegeta: PaletteColors;
  dodoria: PaletteColors;
  whis: PaletteColors;
  cell: PaletteColors;
  frieza: PaletteColors;
  raditz: PaletteColors;
  nappa: PaletteColors;
};

export const palette: Palette = {
  piccolo,
  hit,
  goku,
  gohan,
  bulma,
  trunks,
  krillin,
  chichi,
  roshi,
  vegeta,
  dodoria,
  whis,
  cell,
  frieza,
  raditz,
  nappa,
};
