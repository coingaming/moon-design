import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#2F8862',
    100: '#39A275',
    80: '#58C596',
  },
  hit: {
    120: '#EDEFF1',
    100: '#FFFFFF',
    80: '#F3F5F6',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#010812',
    80: '#1A212A',
    40: '#272D36',
    10: '#2E3540',
  },
  gohan: {
    100: '#272D36',
    80: '#2E3540',
    40: '#4A525E',
    10: '#636B79',
  },
  beerus: {
    100: '#4D5259',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#C9D0D5',
  },
};

const hub88: Theme = {
  ...sharedTokens,
  brand: 'Aposta10',
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
  colorScheme: 'light',
};

export default hub88;
