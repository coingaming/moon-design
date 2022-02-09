import componentsTokens from '../sharedTokens/componentsTokens';
import { Theme } from '../sharedTokens/sharedTokens';
import sportsbetDark from '../sportsbetDark/sportsbetDark';
import supportiveColors from '../v2/colors/supportiveColors';

const lightColors = {
  piccolo: {
    120: '#02c054',
    100: '#0ccf61',
    80: '#18dc6d',
  },
  hit: {
    120: '#d6d8db',
    100: '#dfe0e2',
    80: '#e7e8e9',
  },
  beerus: {
    100: '#e6e6e6',
  },
  goku: {
    100: '#ffffff',
    80: '#f1f2f3',
    40: '#e0e3e6',
    10: '#ced4d9',
  },
  gohan: {
    100: '#f7f7f7',
    80: '#f0f0f0',
    40: '#e0e0e0',
    10: '#d1d1d1',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#1a212a',
  },
  trunks: {
    100: '#607680',
  },
  whis: {
    100: '#1da1f2',
    10: '#19a9e2',
  },
};

const colorNew = {
  piccolo: '#0ccf61',
  hit: '#dfe0e2',
  beerus: '#e6e6e6',
  goku: '#ffffff',
  gohan: '#f7f7f7',
  bulma: '#1a212a',
  trunks: '#607680',
  goten: '#ffffff',
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
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default sportsbetLight;
