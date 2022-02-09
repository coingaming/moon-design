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
    120: '#51516c',
    100: '#696987',
    80: '#7f7f9e',
  },
  goten: {
    100: '#ffffff',
  },
  goku: {
    100: '#232432',
    80: '#303245',
    40: '#3b3d51',
    10: '#4a4c65',
  },
  gohan: {
    100: '#3a3a50',
    80: '#4a5167',
    40: '#555e75',
    10: '#646d86',
  },
  beerus: {
    100: '#525260',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#dbe2f5',
  },
};

const colorNew = {
  piccolo: '#fa003e',
  hit: '#696987',
  beerus: '#525260',
  goku: '#232432',
  gohan: '#3a3a50',
  bulma: '#ffffff',
  trunks: '#dbe2f5',
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
  colorScheme: 'dark',
};

export default luckyslotsDark;
