import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#0045F5',
    100: '#1757FF',
    80: '#477BFF',
  },
  hit: {
    120: '#9EACB5',
    100: '#AAB6BE',
    80: '#C5CDD3',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#F3F5F6',
    80: '#E9EDEF',
    40: '#FFFFFF',
    10: '#FFFFFF',
  },
  gohan: {
    100: '#F8FAFF',
    80: '#F8FAFF',
    40: '#F8FAFF',
    10: '#F8FAFF',
  },
  beerus: {
    100: '#E2E6E9',
  },
  bulma: {
    100: '#010812',
  },
  trunks: {
    100: '#8697A2',
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
};

export default hub88;
