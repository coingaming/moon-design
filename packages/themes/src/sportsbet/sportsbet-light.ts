import { shared } from '../shared/shared';
import { Theme } from '../types/theme';

import { sportsbet } from './private/sportsbet';

const darks = {
  100: '#1A212A',
  80: '#31373F',
  60: '#484D55',
  40: '#5F646A',
  20: '#767A7F',
  10: '#8C9095',
};

const lights = {
  100: '#F7F7F7',
  80: '#F7F7F7',
  60: '#F0F0F0',
  40: '#EBEBEB',
  20: '#E6E6E6',
  10: '#E0E0E0',
};

const color = {
  hit: lights,
  goku: {
    100: '#FFFFFF',
    80: '#F3F5F6',
    60: '#EDEFF1',
    40: '#E7EAEC',
    20: '#DBE0E3',
    10: '#CFD5DA',
  },
  gohan: lights,
  beerus: {
    100: '#E6E6E6',
    80: '#E4E4E4',
    60: '#E1E1E1',
    40: '#DFDFDF',
    20: '#DDDDDD',
    10: '#DADADA',
  },
  goten: darks,
  bulma: darks,
};

const {
  base,
  border,
  borderStyle,
  borderWidth,
  breakpoint,
  radius,
  space,
  transitionDuration,
} = shared;

export const sportsbetLight: Theme = {
  base,
  border,
  borderStyle,
  borderWidth,
  brand: 'Sportsbet.io',
  breakpoint,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...color,
    ...sportsbet.color,
    ...shared.color,
  },
  colorScheme: 'light',
  ...sportsbet.font,
  radius,
  space,
  transitionDuration,
};
