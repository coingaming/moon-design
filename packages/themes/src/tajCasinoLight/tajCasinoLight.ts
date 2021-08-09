import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#d78b2d',
    100: '#d49649',
    80: '#d3a164',
  },
  hit: {
    120: '#f7f7f7',
    100: '#ffffff',
    80: '#ffffff',
  },
  beerus: {
    100: '#f0f0f0',
  },
  goku: {
    100: '#ffffff',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  gohan: {
    100: '#f3f3f2',
    80: '#e7e7e4',
    40: '#d0d0c8',
    10: '#b9b9ac',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#939aae',
  },
};

const tajCasinoLight: Theme = {
  ...sharedTokens,
  brand: 'Tajcasino',
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
  radius: {
    small: 4,
    default: 8,
    largest: 8,
  },
  colorScheme: 'light',
};

export default tajCasinoLight;
