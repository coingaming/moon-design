import { Theme } from '../types/theme';
import bitcasinoDark from '../bitcasinoDark/bitcasinoDark';

const color = {
  hit: {
    120: '#E3EAED',
    100: '#EBF0F2',
    80: '#F6F8F9',
  },
  goku: {
    100: '#F3F5F6',
    80: '#EAEEF0',
    40: '#D8E0E3',
    10: '#C5D2D8',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#F7F7F7',
    40: '#E8E8E8',
    20: '#E0E0E0',
  },
  beerus: {
    100: '#EAEEF0',
  },
  bulma: {
    100: '#0F161F',
  },
  trunks: {
    100: '#8697A2',
  },
};

const { color: bitcasinoDarkColors } = bitcasinoDark;

const bitcasinoLight: Theme = {
  ...bitcasinoDark,
  color: {
    ...bitcasinoDarkColors,
    text: color.bulma[100],
    background: color.goku[100],
    ...color,
  },
  colorScheme: 'light',
};

export default bitcasinoLight;
