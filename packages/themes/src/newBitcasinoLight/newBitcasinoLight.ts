import bitcasinoDark from '../bitcasinoDark/bitcasinoDark';
import componentsTokens from '../sharedTokens/componentsTokens';
import { Theme } from '../sharedTokens/sharedTokens';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  hit: {
    120: '#FFFFFF',
    100: '#FFFFFF',
    80: '#FFFFFF',
  },
  goku: {
    100: '#FFFFFF',
    80: '#FFFFFF',
    40: '#FFFFFF',
    10: '#FFFFFF',
  },
  gohan: {
    100: '#F2F2F2',
    80: '#F2F2F2',
    40: '#F2F2F2',
    10: '#F2F2F2',
  },
  beerus: {
    100: '#E8E8E8',
  },
  bulma: {
    100: '#1B1414',
  },
  trunks: {
    100: '#858585',
  },
};

const colorNew = {
  piccolo: '#D63741',
  hit: '#FFFFFF',
  beerus: '#E8E8E8',
  goku: '#FFFFFF',
  gohan: '#F2F2F2',
  bulma: '#1B1414',
  trunks: '#858585',
  goten: '#FFFFFF',
  popo: '#000000',
};

const { color: bitcasinoDarkColors } = bitcasinoDark;

const newBitcasinoLight: Theme = {
  ...bitcasinoDark,
  color: {
    ...bitcasinoDarkColors,
    text: color.bulma[100],
    background: color.goku[100],
    piccolo: {
      120: '#D63741',
      100: '#D63741',
      80: '#D63741',
    },
    ...color,
  },
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default newBitcasinoLight;
