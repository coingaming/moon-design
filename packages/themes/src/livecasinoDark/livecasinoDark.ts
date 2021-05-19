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
    120: '#E5E9F0',
    100: '#FFFFFF',
    80: '#F2F7FF',
  },
  beerus: {
    100: '#E5E9F0',
  },
  goku: {
    100: '#F2F7FF',
    80: '#EAEEF0',
    40: '#D8E0E3',
    10: '#C5D2D8',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#F7F7F7',
    40: '#E8E8E8',
    10: '#D9D9D9',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#0F161F',
  },
  trunks: {
    100: '#8697A2',
  },
};

const livecasinoDark: Theme = {
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
  colorScheme: 'dark',
};

export default livecasinoDark;
