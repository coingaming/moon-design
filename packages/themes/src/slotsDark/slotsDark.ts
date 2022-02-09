import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#1a7dff',
    100: '#2e89ff',
    80: '#4c95f6',
  },
  hit: {
    120: '#7c8192',
    100: '#898d9a',
    80: '#9598a3',
  },
  goten: {
    100: '#ffffff',
  },
  goku: {
    100: '#141414',
    80: '#212121',
    40: '#3b3b3b',
    10: '#545454',
  },
  gohan: {
    100: '#242424',
    80: '#303030',
    40: '#4a4a4a',
    10: '#636363',
  },
  beerus: {
    100: '#333333',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#9e9e9e',
  },
};

const colorNew = {
  piccolo: '#2e89ff',
  hit: '#898d9a',
  beerus: '#333333',
  goku: '#141414',
  gohan: '#242424',
  bulma: '#ffffff',
  trunks: '#9e9e9e',
  goten: '#ffffff',
  popo: '#000000',
};

const slotsDark: Theme = {
  ...sharedTokens,
  brand: 'Slots.io',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
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
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default slotsDark;
