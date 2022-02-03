import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#141519',
    100: '#272D36',
    80: '#4D5259',
  },
  hit: {
    120: '#D6DDE0',
    100: '#F3F5F6',
    80: '#E9EDEF',
  },
  beerus: {
    100: '#E2E6E9',
  },
  goku: {
    120: '#D6DDE0',
    100: '#F3F5F6',
    80: '#E9EDEF',
    10: '#F9FAFA',
  },
  gohan: {
    100: '#FFFFFF',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#272D36',
  },
  trunks: {
    100: '#8697A2',
  },
};

const colorNew = {
  piccolo: '#272D36',
  hit: '#F3F5F6',
  beerus: '#E2E6E9',
  goku: '#F3F5F6',
  gohan: '#FFFFFF',
  bulma: '#272D36',
  trunks: '#8697A2',
  goten: '#FFFFFF',
  popo: '#000000',
};

const commsLight: Theme = {
  ...sharedTokens(colorNew),
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
  colorScheme: 'light',
};

export default commsLight;
