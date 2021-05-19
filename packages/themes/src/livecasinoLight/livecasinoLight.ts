import { avertaStd } from '@heathmont/moon-fonts';

import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow = '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#CF0232',
    100: '#DE0D3E',
    80: '#E61E4D',
  },
  hit: {
    120: '#101637',
    100: '#090D25',
    80: '#192048',
  },
  beerus: {
    100: '#272A3E',
  },
  goku: {
    100: '#00060E',
    80: '#0F151C',
    40: '#1F242B',
    10: '#292E35',
  },
  gohan: {
    100: '#090D24',
    80: '#181C31',
    40: '#272A3E',
    10: '#303447',
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

const livecasinoLight: Theme = {
  ...sharedTokens,
  brand: 'Livecasino.io',
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

export default livecasinoLight;
