import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

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
  colorScheme: 'dark',
  space: {
    ...sharedTokens.space,
    medium: sharedTokens.base.space * 1.25,
    large: sharedTokens.base.space * 1.5,
  },
};

export default hub88;
