import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#E00038',
    100: '#FA003E',
    80: '#F32055',
  },
  hit: {
    120: '#51516C',
    100: '#696987',
    80: '#7F7F9E',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#232432',
    80: '#303245',
    40: '#3B3D51',
    10: '#4A4C65',
  },
  gohan: {
    100: '#3A3A50',
    80: '#4A5167',
    40: '#555E75',
    10: '#646D86',
  },
  beerus: {
    100: '##525260, 100%',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#DBE2F5',
  },
};

const luckyslotsDark: Theme = {
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
    frieza: {
      100: '#262FB7',
      10: '#5159C5',
    },
    ...color,
  },
  colorScheme: 'dark',
};

export default luckyslotsDark;
