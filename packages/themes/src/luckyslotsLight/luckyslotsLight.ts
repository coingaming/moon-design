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
    120: '#C5D0E7',
    100: '#D6E0F4',
    80: '#ECF2FF',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#F6F9FF',
    80: '#E9EFFC',
    40: '#DDE6F5',
    10: '#D0DCF1',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#F7F8FB',
    40: '#F1F5FC',
    10: '#E3EAF6',
  },
  beerus: {
    100: '#E4E9F4',
  },
  bulma: {
    100: '#111042',
  },
  trunks: {
    100: '#8693A2',
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
  colorScheme: 'light',
};

export default luckyslotsDark;
