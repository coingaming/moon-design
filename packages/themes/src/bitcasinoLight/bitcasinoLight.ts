import bitcasinoDark from '../bitcasinoDark/bitcasinoDark';
import componentsTokens from '../sharedTokens/componentsTokens';
import { Theme } from '../sharedTokens/sharedTokens';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  hit: {
    120: '#d9e3e8',
    100: '#e3eaed',
    80: '#edf1f3',
  },
  goku: {
    100: '#f3f5f6',
    80: '#eaeef0',
    40: '#d8e0e3',
    10: '#c5d2d8',
  },
  gohan: {
    100: '#ffffff',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  beerus: {
    100: '#eaeef0',
  },
  bulma: {
    100: '#0f161f',
  },
  trunks: {
    100: '#8697a2',
  },
};

const colorNew = {
  piccolo: '#ff4f0f',
  hit: '#e3eaed',
  beerus: '#eaeef0',
  goku: '#f3f5f6',
  gohan: '#ffffff',
  bulma: '#0f161f',
  trunks: '#8697a2',
  goten: '#ffffff',
  popo: '#000000',
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
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default bitcasinoLight;
