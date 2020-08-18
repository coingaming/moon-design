import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#054CFF',
    100: '#1A5BFF',
    80: '#336BFA',
  },
  hit: {
    120: '#D6DDE0',
    100: '#E0E5E7',
    80: '#E8ECED',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#F3F5F6',
    80: '#E9EDEF',
    40: '#D6DDE0',
    10: '#CCD5D9',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  beerus: {
    100: '#DBE0E3',
  },
  bulma: {
    100: '#03060D',
  },
  trunks: {
    100: '#8697A2',
  },
};

const slotsLight: Theme = {
  ...sharedTokens,
  brand: 'Slots.io',
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

export default slotsLight;
