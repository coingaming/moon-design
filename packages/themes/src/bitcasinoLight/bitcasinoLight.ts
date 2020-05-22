import { Theme } from '../types/theme';
import bitcasinoShared from '../bitcasinoShared/bitcasinoShared';

const color = {
  goku: {
    100: '#F3F5F6',
    80: '#EAEEF0',
    60: '#E1E7EA',
    40: '#D8E0E3',
    10: '#C5D2D8',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#F7F7F7',
    60: '#F0F0F0',
    40: '#E8E8E8',
    20: '#E0E0E0',
  },
  beerus: {
    100: '#D7DCDF',
  },
  bulma: {
    100: '#0F161F',
  },
  trunks: {
    100: '#8697A2',
    60: '#9FAAB2',
    20: '#B7BEC3',
  },
};

const { color: sharedColor, ...sharedTheme } = bitcasinoShared;

const bitcasinoLight: Theme = {
  ...sharedTheme,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...color,
    ...sharedColor,
  },
  colorScheme: 'light',
};

export default bitcasinoLight;
