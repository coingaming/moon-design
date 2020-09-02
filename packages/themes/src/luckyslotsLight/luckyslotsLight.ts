import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#0048FF',
    100: '#1A5BFF',
    80: '#3D71F5',
  },
  hit: {
    120: '#b7bac3',
    100: '#c0c2c9',
    80: '#c8cad0',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#F3F5F6',
    80: '#EAEEF0',
    40: '#D8E0E3',
    10: '#C4D2D9',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  beerus: {
    100: '#E7E7E7',
  },
  bulma: {
    100: '#03060C',
  },
  trunks: {
    100: '#A6A6A6',
  },
};

const luckyslotsLight: Theme = {
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
  colorScheme: 'light',
};

export default luckyslotsLight;
