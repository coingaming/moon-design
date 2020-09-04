import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#E00038',
    100: '#FA003E',
    80: '#F32055',
  },
  hit: {
    120: '#E6EBF9',
    100: '#FFFFFF',
    80: '#F3F5FC',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#3133C4',
    80: '#2528B6',
    40: '#111397',
    10: '#020473',
  },
  gohan: {
    100: '#2A0D68',
    80: '#351579',
    40: '#4D2B97',
    10: '#6745B0',
  },
  beerus: {
    100: '#353B50',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#DBE2F5',
  },
};

const luckyslots: Theme = {
  ...sharedTokens,
  brand: 'LuckySlots',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorScheme: 'dark',
};

export default luckyslots;
