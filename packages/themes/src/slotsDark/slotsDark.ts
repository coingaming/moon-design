import avertaStd from '../sharedTokens/avertaStd';
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
    120: '#7C8192',
    100: '#898D9A',
    80: '#9598A3',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#141414',
    80: '#212121',
    40: '#3B3B3B',
    10: '#545454',
  },
  gohan: {
    100: '#242424',
    80: '#303030',
    40: '#4A4A4A',
    10: '#636363',
  },
  beerus: {
    100: '#333333',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#9E9E9E',
  },
};

const colorNew = {
  piccolo: '#2e89ff',
  hit: '#898D9A',
  beerus: '#333333',
  goku: '#141414',
  gohan: '#242424',
  bulma: '#FFFFFF',
  trunks: '#9E9E9E',
  goten: '#FFFFFF',
  popo: '#000000',
};

const slotsDark: Theme = {
  ...sharedTokens(colorNew),
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
  colorScheme: 'dark',
};

export default slotsDark;
