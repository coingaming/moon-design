import { Theme } from '../types/theme';

import { bitcasinoShared } from './bitcasino-shared';

const {
  /* Keys we don't need */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  boxShadow: sharedBoxShadow,
  // Keys we do need
  color: sharedColor,
  ...sharedTheme
} = bitcasinoShared;

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  goku: {
    100: '#23033E',
    80: '#36184F',
    60: '#402359',
    40: '#4F3565',
    20: '#5A426E',
    10: '#654F78',
  },
  gohan: {
    100: '#3D0D66',
    80: '#502575',
    60: '#572B7C',
    40: '#6B438B',
    20: '#7C5D96',
    10: '#8C70A3',
  },
  /**
   * @TODO Check with Egert
   */
  beerus: {
    100: '#31373F',
    80: '#2C333A',
    60: '#373D45',
    40: '#42484F',
    20: '#4D5359',
    10: '#585E64',
  },
  bulma: sharedColor.goten,
  trunks: {
    100: '#A18EB3',
    80: '#9782AA',
    60: '#836999',
    40: '#6E5088',
    20: '#542D76',
    10: '#421766',
  },
};

export const bitcasinoPurple: Theme = {
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
