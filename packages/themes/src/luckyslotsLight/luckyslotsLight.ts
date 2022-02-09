import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#e00038',
    100: '#fa003e',
    80: '#f32055',
  },
  hit: {
    120: '#c5d0e7',
    100: '#d6e0f4',
    80: '#ecf2ff',
  },
  goten: {
    100: '#ffffff',
  },
  goku: {
    100: '#f6f9ff',
    80: '#e9effc',
    40: '#dde6f5',
    10: '#d0dcf1',
  },
  gohan: {
    100: '#ffffff',
    80: '#f7f8fb',
    40: '#f1f5fc',
    10: '#e3eaf6',
  },
  beerus: {
    100: '#e4e9f4',
  },
  bulma: {
    100: '#111042',
  },
  trunks: {
    100: '#8693a2',
  },
};

const colorNew = {
  piccolo: '#fa003e',
  hit: '#d6e0f4',
  beerus: '#e4e9f4',
  goku: '#f6f9ff',
  gohan: '#ffffff',
  bulma: '#111042',
  trunks: '#8693a2',
  goten: '#ffffff',
  popo: '#000000',
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
      100: '#262fb7',
      10: '#5159c5',
    },
    ...color,
  },
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default luckyslotsDark;
