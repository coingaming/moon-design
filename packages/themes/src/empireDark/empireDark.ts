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
    100: '#654ACE',
  },
  goku: {
    100: '#15064F',
    80: '#15064F',
    40: '#15064F',
    10: '#15064F',
  },
  gohan: {
    100: '#4828C5',
    80: '#15064F',
    40: '#4828C5',
    10: '#4828C5',
  },
  bulma: {
    100: '#ffffff',
  },
  goten: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#C8BEEE',
  },
};

const colorNew = {
  piccolo: '#FF25A8',
  hit: '#B8A6FF',
  beerus: '#654ACE',
  goku: '#15064F',
  gohan: '#4828C5',
  bulma: '#ffffff',
  trunks: '#C8BEEE',
  goten: '#FFFFFF',
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
