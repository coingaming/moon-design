import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#1C40BB',
    100: '#284DCD',
    80: '#365AD8',
  },
  hit: {
    120: '#FFFFFF',
    100: '#F6F6F6',
    80: '#FBFBFB',
  },
  beerus: {
    100: '#E6E6E6',
  },
  goku: {
    100: '#F7F7F7',
    80: '#F9F9F9',
    40: '#FCFCFC',
    10: '#FFFFFF',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#FBFBFB',
    40: '#F9F9F9',
    10: '#F6F6F6',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#8697A2',
  },
};

const moneyballLight: Theme = {
  ...sharedTokens,
  brand: 'Moneyball',
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

export default moneyballLight;
