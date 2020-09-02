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
    100: '#F3F5F6',
    80: '#EDEFF1',
    40: '#E7EAEC',
    10: '#DBE0E3',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#E7EAEC',
    40: '#CFD5DA',
    10: '#C9D0D5',
  },
  beerus: {
    100: '#DBE0E3',
  },
  bulma: {
    100: '#010812',
  },
  trunks: {
    100: '#8697A2',
  },
};

const aposta10Dark: Theme = {
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
  colorScheme: 'dark',
};

export default aposta10Dark;
