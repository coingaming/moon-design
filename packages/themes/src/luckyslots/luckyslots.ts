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
    120: '#4345B5',
    100: '#5456E2',
    80: '#7678E8',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#3133C4',
    80: '#2528B6',
    40: '#111397',
    10: '#020473',
  },
  gohan: {
    100: '#2A0D68',
    80: '#351579',
    40: '#4D2B97',
    10: '#6745B0',
  },
  beerus: {
    100: '#353B50',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#DBE2F5',
  },
};

const luckyslots: Theme = {
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
  colorScheme: 'dark',
};

export default luckyslots;
