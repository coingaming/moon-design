import { Theme } from '../sharedTokens/sharedTokens';
import sportsbetDark from '../sportsbetDark/sportsbetDark';
import supportiveColors from '../v2/colors/supportiveColors';

const lightColors = {
  piccolo: {
    120: '#02C054',
    100: '#0CCF61',
    80: '#18DC6D',
  },
  hit: {
    120: '#D6D8DB',
    100: '#DFE0E2',
    80: '#E7E8E9',
  },
  beerus: {
    100: '#E6E6E6',
  },
  goku: {
    100: '#FFFFFF',
    80: '#F1F2F3',
    40: '#E0E3E6',
    10: '#CED4D9',
  },
  gohan: {
    100: '#F7F7F7',
    80: '#F0F0F0',
    40: '#E0E0E0',
    10: '#D1D1D1',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#1A212A',
  },
  trunks: {
    100: '#607680',
  },
  whis: {
    100: '#1DA1F2',
    10: '#19A9E2',
  },
};

const colorNew = {
  piccolo: '#0CCF61',
  hit: '#DFE0E2',
  beerus: '#E6E6E6',
  goku: '#FFFFFF',
  gohan: '#F7F7F7',
  bulma: '#1A212A',
  trunks: '#607680',
  goten: '#FFFFFF',
  popo: '#000000',
};

const sportsbetLight: Theme = {
  ...sportsbetDark,
  color: {
    ...sportsbetDark.color,
    text: lightColors.bulma[100],
    background: lightColors.goku[100],
    ...lightColors,
  },
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  colorScheme: 'light',
};

export default sportsbetLight;
