import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: 'hsl(236, 48%, 6%)',
    100: '#080917', // hsl(236, 48%, 6%)
    80: 'hsl(236, 48%, 16%)',
  },
  hit: {
    120: '#353C44',
    100: '#4C5159',
    80: '#62676D',
  },
  beerus: {
    100: '#31373F',
  },
  goku: {
    100: '#f0f0f0',
    80: '#353C44',
    40: '#4C5159',
    10: '#62676D',
  },
  gohan: {
    100: '#080917',
    80: '#31373F',
    40: '#5F646A',
    10: '#8C9095',
  },
  goten: {
    100: '#fff',
  },
  bulma: {
    100: '#fff',
  },
  trunks: {
    100: '#8697A2',
  },
};

const moonDesignDark: Theme = {
  ...sharedTokens,
  brand: 'MoonDesign',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  boxShadow,
  color: {
    text: color.gohan[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorScheme: 'dark',
};

export default moonDesignDark;
