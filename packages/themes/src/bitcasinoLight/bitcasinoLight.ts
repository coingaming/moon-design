import bitcasinoDark from '../bitcasinoDark/bitcasinoDark';
import componentsTokens from '../sharedTokens/componentsTokens';
import { Theme } from '../sharedTokens/sharedTokens';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  hit: {
    120: '#d9e3e8',
    100: '#E9E9E9',
    80: '#edf1f3',
  },
  goku: {
    100: '#FFFFFF',
    80: '#eaeef0',
    40: '#d8e0e3',
    10: '#c5d2d8',
  },
  gohan: {
    100: '#F9F7F6',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  beerus: {
    100: '#E0E0E0',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#7E7572',
  },
};

const colorNew = {
  piccolo: '#F2590D',
  hit: '#E9E9E9',
  beerus: '#E0E0E0',
  goku: '#FFFFFF',
  gohan: '#F9F7F6',
  bulma: '#000000',
  trunks: '#7E7572',
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
