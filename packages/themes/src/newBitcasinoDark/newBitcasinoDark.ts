import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  hit: {
    120: '#000000',
    100: '#000000',
    80: '#000000',
  },
  goku: {
    100: '#101010',
    80: '#101010',
    40: '#101010',
    10: '#101010',
  },
  gohan: {
    100: '#1E1E1E',
    80: '#1E1E1E',
    40: '#1E1E1E',
    10: '#1E1E1E',
  },
  beerus: {
    100: '#343434',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#858585',
  },
};

const colorNew = {
  piccolo: '#D63741',
  hit: '#000000',
  beerus: '#343434',
  goku: '#101010',
  gohan: '#1E1E1E',
  bulma: '#FFFFFF',
  trunks: '#858585',
  goten: '#FFFFFF',
  popo: '#000000',
};

const newBitcasinoDark: Theme = {
  ...sharedTokens,
  brand: 'Bitcasino.io',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  boxShadow,
  radius: {
    small: 4,
    default: 8,
    largest: 8,
  },
  color: {
    ...supportColors,
    text: color.bulma[100],
    background: color.goku[100],
    piccolo: {
      120: '#D63741',
      100: '#D63741',
      80: '#D63741',
    },
    goten: {
      100: '#FFFFFF',
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

export default newBitcasinoDark;
