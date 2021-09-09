import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#0A85FF',
    100: '#339AFF',
    80: '#5CADFF',
  },
  hit: {
    120: '#5711A7',
    100: '#6613C6',
    80: '#5711A7',
  },
  beerus: {
    100: '#C5D2D8',
  },
  goku: {
    100: '#FFFFFF',
    80: '#F5F5F5',
    40: '#EBEBEB',
    10: '#E0E0E0',
  },
  gohan: {
    100: '#F3F5F6',
    80: '#E8ECED',
    40: '#DDE3E4',
    10: '#D2D9DB',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#7A7A81',
  },
};

const btcxe: Theme = {
  ...sharedTokens,
  brand: 'BTCXE',
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

export default btcxe;
