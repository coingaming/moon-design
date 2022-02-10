import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#e6b400',
    100: '#ffc800',
    80: '#f9ca1f',
  },
  hit: {
    120: '#e6e6e6',
    100: '#ffffff',
    80: '#ffffff',
  },
  beerus: {
    100: '#f0f0f0',
  },
  goku: {
    100: '#f3f3f2',
    80: '#e7e7e4',
    40: '#d0d0c8',
    10: '#b9b9ac',
  },
  gohan: {
    100: '#ffffff',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  goten: {
    100: '#000000',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#828282',
  },
};

const colorNew = {
  piccolo: '#ffc800',
  hit: '#ffffff',
  beerus: '#f0f0f0',
  goku: '#f3f3f2',
  gohan: '#ffffff',
  bulma: '#000000',
  trunks: '#828282',
  goten: '#000000',
  popo: '#000000',
};

const empireLight: Theme = {
  ...sharedTokens,
  brand: 'Empire.io',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  radius: {
    small: 4,
    default: 8,
    largest: 8,
  },
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default empireLight;
