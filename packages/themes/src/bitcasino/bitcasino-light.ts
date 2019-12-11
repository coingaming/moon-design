import { Theme } from '../types/theme';

import { bitcasinoShared } from './bitcasino-shared';

const color = {
  dende: {
    100: '#DBE0E3',
    80: '#DFE3E6',
    60: '#E2E6E9',
    40: '#E6E9EB',
    20: '#E9ECEE',
    10: '#EDEFF1',
  },
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
    80: '#F9FAFA',
    60: '#EFF1F2',
    40: '#E9ECEE',
    20: '#E2E6E9',
    10: '#DDE1E4',
  },
  beerus: {
    100: '#E6E6E6',
    80: '#E4E4E4',
    60: '#E1E1E1',
    40: '#DFDFDF',
    20: '#DDDDDD',
    10: '#DADADA',
  },
  bulma: {
    100: '#1A212A',
    80: '#1A212A',
    60: '#272D36',
    40: '#343941',
    20: '#40464D',
    10: '#4D5259',
  },
  trunks: {
    100: '#8697A2',
    80: '#8899A4',
    60: '#92A1AB',
    40: '#98A7B0',
    20: '#9EACB5',
    10: '#A7B4BE',
  },
};

const { color: sharedColor, ...sharedTheme } = bitcasinoShared;

export const bitcasinoLight: Theme = {
  ...sharedTheme,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...color,
    ...sharedColor,
  },
  colorScheme: 'light',
};
