import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#054cff',
    100: '#1a5bff',
    80: '#386ef5',
  },
  hit: {
    120: '#a4afb6',
    100: '#abb7bf',
    80: '#b5bec5',
  },
  goten: {
    100: '#ffffff',
  },
  goku: {
    100: '#f3f5f6',
    80: '#eaeef0',
    40: '#d8e0e3',
    10: '#c4d2d9',
  },
  gohan: {
    100: '#ffffff',
    80: '#f6f7f8',
    40: '#e4e8ec',
    10: '#d1d9e0',
  },
  beerus: {
    100: '#e2e6e9',
  },
  bulma: {
    100: '#010913',
  },
  trunks: {
    100: '#8697a2',
  },
};

const colorNew = {
  piccolo: '#1a5bff',
  hit: '#abb7bf',
  beerus: '#e2e6e9',
  goku: '#f3f5f6',
  gohan: '#ffffff',
  bulma: '#010913',
  trunks: '#8697a2',
  goten: '#ffffff',
  popo: '#000000',
};

const hub88: Theme = {
  ...sharedTokens,
  brand: 'Hub88',
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
  colorScheme: 'dark',
  ...componentsTokens(colorNew),
  space: {
    ...sharedTokens.space,
    medium: sharedTokens.base.space * 1.25,
    large: sharedTokens.base.space * 1.5,
  },
};

export default hub88;
