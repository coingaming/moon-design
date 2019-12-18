import { Theme } from '../types/theme';

import { sportsbetShared } from './sportsbet-shared';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    100: '#0CD664',
    80: '#50E190',
    60: '#66E59E',
    40: '#85EAB2',
    20: '#9EEFC1',
    10: '#B6F3D0',
  },
  hit: {
    100: '#1A212A',
    80: '#31373F',
    60: '#484D55',
    40: '#5F646A',
    20: '#767A7F',
    10: '#8C9095',
  },
  goku: {
    100: '#232A33',
    80: '#353C44',
    60: '#41474E',
    40: '#4C5159',
    20: '#575C63',
    10: '#62676D',
  },
  gohan: {
    100: '#1A212A',
    80: '#31373F',
    60: '#484D55',
    40: '#5F646A',
    20: '#767A7F',
    10: '#8C9095',
  },
  beerus: {
    100: '#31373F',
    80: '#2C333A',
    60: '#373D45',
    40: '#42484F',
    20: '#4D5359',
    10: '#585E64',
  },
  bulma: {
    100: '#FFFFFF',
    80: '#F3F5F6',
    60: '#EDEFF1',
    40: '#E7EAEC',
    20: '#DBE0E3',
    10: '#CFD5DA',
  },
};

const {
  /* Keys we don't need */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  boxShadow: sharedBoxShadow,
  // Keys we do need
  color: sharedColor,
  ...sharedTheme
} = sportsbetShared;

export const sportsbetDark: Theme = {
  ...sharedTheme,
  boxShadow,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...color,
    ...sharedColor,
  },
  colorScheme: 'dark',
};
