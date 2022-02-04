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
    120: '#151414',
    100: '#1c1c1c',
    80: '#242424',
  },
  beerus: {
    100: '#141414',
  },
  goku: {
    100: '#141414',
    80: '#1c1c1c',
    40: '#2b2b2b',
    10: '#3b3b3b',
  },
  gohan: {
    100: '#000000',
    80: '#080808',
    40: '#171717',
    10: '#262626',
  },
  bulma: {
    100: '#ffffff',
  },
  goten: {
    100: '#000000',
  },
  trunks: {
    100: '#828282',
  },
};

const colorNew = {
  piccolo: '#ffc800',
  hit: '#1c1c1c',
  beerus: '#141414',
  goku: '#141414',
  gohan: '#000000',
  bulma: '#ffffff',
  trunks: '#828282',
  goten: '#000000',
  popo: '#000000',
};

const empireDark: Theme = {
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
  colorScheme: 'dark',
};

export default empireDark;
