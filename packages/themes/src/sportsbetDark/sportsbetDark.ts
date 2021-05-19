import { avertaStd } from '@heathmont/moon-fonts';

import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow = '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#02C054',
    100: '#0CCF61',
    80: '#18DC6D',
  },
  hit: {
    120: '#2D3139',
    100: '#393E47',
    80: '#454A54',
  },
  beerus: {
    100: '#31373F',
  },
  goku: {
    100: '#232A33',
    80: '#353C44',
    40: '#4C5159',
    10: '#62676D',
  },
  gohan: {
    100: '#1A212A',
    80: '#31373F',
    40: '#5F646A',
    10: '#8C9095',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#8697A2',
  },
};

const sportsbetDark: Theme = {
  ...sharedTokens,
  brand: 'Sportsbet.io',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  boxShadow,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorScheme: 'dark',
};

export default sportsbetDark;
