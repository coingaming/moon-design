import bitcasinoDark from '../bitcasinoDark/bitcasinoDark';
import componentsTokens from '../sharedTokens/componentsTokens';
import { Theme } from '../sharedTokens/sharedTokens';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  hit: {
    120: '#D9E3E8',
    100: '#E3EAED',
    80: '#EDF1F3',
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
    10: '#D9D9D9',
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

const colorNew = {
  piccolo: '#FF4F0F',
  hit: '#E3EAED',
  beerus: '#EAEEF0',
  goku: '#F3F5F6',
  gohan: '#FFFFFF',
  bulma: '#0F161F',
  trunks: '#8697A2',
  goten: '#FFFFFF',
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
