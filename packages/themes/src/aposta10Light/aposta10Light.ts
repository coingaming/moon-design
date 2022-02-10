import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#2e9468',
    100: '#39a275',
    80: '#46af81',
  },
  hit: {
    120: '#f0f0f0',
    100: '#ffffff',
    80: '#f7f7f7',
  },
  goten: {
    100: '#ffffff',
  },
  goku: {
    100: '#f4f5f6',
    80: '#ebeeef',
    40: '#dadfe2',
    10: '#c8d0d5',
  },
  gohan: {
    100: '#ffffff',
    80: '#f7f7f8',
    40: '#e6e8eb',
    10: '#d4d9de',
  },
  beerus: {
    100: '#dadfe2',
  },
  bulma: {
    100: '#010913',
  },
  trunks: {
    100: '#8697a2',
  },
};

const colorNew = {
  piccolo: '#39a275',
  hit: '#ffffff',
  beerus: '#dadfe2',
  goku: '#f4f5f6',
  gohan: '#ffffff',
  bulma: '#010913',
  trunks: '#8697a2',
  goten: '#ffffff',
  popo: '#000000',
};

const hub88: Theme = {
  ...sharedTokens,
  brand: 'Aposta10',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
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
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default hub88;
