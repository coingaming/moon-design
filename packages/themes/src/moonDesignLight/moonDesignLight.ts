import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: 'hsl(236, 48%, 6%)',
    100: '#080917',  // hsl(236, 48%, 6%)
    80: 'hsl(236, 48%, 16%)',
  },
  hit: {
      120: '#e8e8e8',
      100: '#f0f0f0',
      80: '#F7F7F7',
  },
  beerus: {
    100: '#31373F',
  },
  goku: {
    100: '#FFFFFF',
    80: '#F1F2F3',
    40: '#E0E3E6',
    10: '#CED4D9',
  },
  gohan: {
    100: '#F7F7F7',
    80: '#F0F0F0',
    40: '#E0E0E0',
    10: '#D1D1D1',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#080917',
  },
  trunks: {
    100: '#8697A2',
  },
};

const moonDesignLight: Theme = {
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
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorScheme: 'light',
};

export default moonDesignLight;
