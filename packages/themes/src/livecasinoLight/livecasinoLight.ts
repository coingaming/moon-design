import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#cf0232',
    100: '#de0d3e',
    80: '#e61e4d',
  },
  hit: {
    120: '#a0a2ab',
    100: '#a9aab1',
    80: '#b2b3b8',
  },
  beerus: {
    100: '#e5e9f0',
  },
  goku: {
    100: '#f0f6ff',
    80: '#e0ecff',
    40: '#c2d9ff',
    10: '#a3c6ff',
  },
  gohan: {
    100: '#ffffff',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#0f161f',
  },
  trunks: {
    100: '#8697a2',
  },
};

const colorNew = {
  piccolo: '#de0d3e',
  hit: '#a9aab1',
  beerus: '#e5e9f0',
  goku: '#f0f6ff',
  gohan: '#ffffff',
  bulma: '#0f161f',
  trunks: '#8697a2',
  goten: '#ffffff',
  popo: '#000000',
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
  radius: {
    small: 4,
    default: 8,
    largest: 8,
  },
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  colorScheme: 'light',
};

export default livecasinoLight;
