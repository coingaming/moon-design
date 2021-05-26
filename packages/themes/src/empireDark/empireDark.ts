import { avertaStd } from '@heathmont/moon-fonts';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#e6b400',
    100: '#ffc800',
    80: '#f4c725',
  },
  hit: {
    120: '#e6e6e6',
    100: '#ffffff',
    80: '#ffffff',
  },
  beerus: {
    100: '#141414',
  },
  goku: {
    100: '#000000',
    80: '#080808',
    40: '#171717',
    10: '#262626',
  },
  gohan: {
    100: '#141414',
    80: '#1c1c1c',
    40: '#2b2b2b',
    10: '#3b3b3b',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#828282',
  },
};

const empireDark: Theme = {
  ...sharedTokens,
  brand: 'Empire.io',
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
  colorScheme: 'dark',
};

export default empireDark;
