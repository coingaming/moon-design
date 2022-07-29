import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#EB229B',
    100: '#FF25A8',
    80: '#FF51B9',
  },
  hit: {
    120: '#A999EB',
    100: '#B8A6FF',
    80: '#DAD4F3',
  },
  beerus: {
    100: '#E5E4EA',
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
    100: '#5C5671',
  },
};

const colorNew = {
  piccolo: '#FF25A8',
  hit: '#B8A6FF',
  beerus: '#E5E4EA',
  goku: '#141414',
  gohan: '#000000',
  bulma: '#ffffff',
  trunks: '#5C5671',
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
