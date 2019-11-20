import { shared } from '../shared/shared';
import { Theme } from '../types/theme';

import { sportsbet } from './private/sportsbet';

const color = {
  goku: {
    100: '#F3F5F6',
    80: '#EDEFF1',
    60: '#E7EAEC',
    40: '#DBE0E3',
    20: '#CFD5DA',
    10: '#C9D0D5',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#F3F5F6',
    60: '#EDEFF1',
    40: '#E7EAEC',
    20: '#DBE0E3',
    10: '#CFD5DA',
  },
  bulma: {
    100: '#010812',
    80: '#1A212A',
    60: '#272D36',
    40: '#343941',
    20: '#40464D',
    10: '#4D5259',
  },
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
