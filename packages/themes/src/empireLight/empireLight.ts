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
    100: '#F0EEF5',
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
    100: '#FFFFFF',
  },
  bulma: {
    100: '#15064F',
  },
  trunks: {
    100: '#5C5671',
  },
};

const colorNew = {
  piccolo: '#FF25A8',
  hit: '#B8A6FF',
  beerus: '#E5E4EA',
  goku: '#F0EEF5',
  gohan: '#ffffff',
  bulma: '#15064F',
  trunks: '#5C5671',
  goten: '#FFFFFF',
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
