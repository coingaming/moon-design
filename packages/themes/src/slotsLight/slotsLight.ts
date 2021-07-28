import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#1a7dff',
    100: '#2e89ff',
    80: '#4c95f6',
  },
  hit: {
    120: '#b7bac3',
    100: '#c0c2c9',
    80: '#c8cad0',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#F3F5F6',
    80: '#EAEEF0',
    40: '#D8E0E3',
    10: '#C4D2D9',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  beerus: {
    100: '#E7E7E7',
  },
  bulma: {
    100: '#03060C',
  },
  trunks: {
    100: '#A6A6A6',
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
