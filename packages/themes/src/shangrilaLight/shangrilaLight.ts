import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#977135',
    100: '#a57f40',
    80: '#b38b4d',
  },
  hit: {
    120: '#bbb9b9',
    100: '#c2c2c2',
    80: '#c9c9c9',
  },
  beerus: {
    100: '#83837c',
  },
  goku: {
    100: '#f2eee8',
    80: '#ede7de',
    40: '#e5d9c7',
    10: '#e0ccae',
  },
  gohan: {
    100: '#f6f6f4',
    80: '#efefeb',
    40: '#e2e2da',
    10: '#d5d5c8',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#33332e',
  },
  trunks: {
    100: '#83837c',
  },
};

const colorNew = {
  piccolo: '#a57f40',
  hit: '#c2c2c2',
  beerus: '#83837c',
  goku: '#f2eee8',
  gohan: '#f6f6f4',
  bulma: '#33332e',
  trunks: '#83837c',
  goten: '#ffffff',
  popo: '#000000',
};

const shangrilaLight: Theme = {
  ...sharedTokens(colorNew),
  brand: 'ShangriLa.io',
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
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  colorScheme: 'light',
};

export default shangrilaLight;
