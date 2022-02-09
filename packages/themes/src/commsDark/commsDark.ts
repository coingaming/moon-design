import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#D6DDE0',
    100: '#FFFFFF',
    80: '#E9EDEF',
  },
  hit: {
    120: '#1D2229',
    100: '#272D36',
    80: '#4D5259',
  },
  beerus: {
    100: '#4D5259',
  },
  goku: {
    120: '#1D2229',
    100: '#141519',
    80: '#8697A2',
    10: '#000000',
  },
  gohan: {
    100: '#272D36',
  },
  goten: {
    100: '#000000',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#8697A2',
  },
};

const colorNew = {
  piccolo: '#FFFFFF',
  hit: '#272D36',
  beerus: '#4D5259',
  goku: '#141519',
  gohan: '#272D36',
  bulma: '#FFFFFF',
  trunks: '#8697A2',
  goten: '#000000',
  popo: '#000000',
};

const commsDark: Theme = {
  ...sharedTokens,
  brand: 'Comms',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  boxShadow,
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
  radius: {
    small: 8,
    default: 16,
    largest: 24,
  },
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default commsDark;
