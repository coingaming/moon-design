import { Theme } from '../types/theme';
import bitcasinoShared from '../bitcasinoShared/bitcasinoShared';

const color = {
  piccolo: {
    120: '#054CFF',
    100: '#1A5BFF',
    80: '#336BFA',
  },
  hit: {
    120: '#D6DDE0',
    100: '#E0E5E7',
    80: '#E8ECED',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#F3F5F6',
    80: '#E9EDEF',
    60: '#E0E5E7',
    40: '#D6DDE0',
    20: '#CCD5D9',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#FDFDFD',
    60: '#F3F5F6',
    40: '#E9EDEF',
    10: '#D6DDE0',
  },
  beerus: {
    100: '#DBE0E3',
  },
  bulma: {
    100: '#03060D',
  },
  trunks: {
    100: '#8697A2',
    60: '#98A7B0',
    20: '#A4B1B9',
  },
};

const { color: sharedColor, ...sharedTheme } = bitcasinoShared;

const slotsLight: Theme = {
  ...sharedTheme,
  brand: 'Slots.io',
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...sharedColor,
    ...color,
  },
  colorScheme: 'light',
};

export default slotsLight;
