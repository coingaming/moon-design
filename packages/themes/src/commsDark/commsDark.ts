import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#d6dde0',
    100: '#ffffff',
    80: '#e9edef',
  },
  hit: {
    120: '#1d2229',
    100: '#272d36',
    80: '#4d5259',
  },
  beerus: {
    100: '#4d5259',
  },
  goku: {
    120: '#1d2229',
    100: '#141519',
    80: '#8697a2',
    10: '#000000',
  },
  gohan: {
    100: '#272d36',
  },
  goten: {
    100: '#000000',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#8697a2',
  },
};

const colorNew = {
  piccolo: '#ffffff',
  hit: '#272d36',
  beerus: '#4d5259',
  goku: '#141519',
  gohan: '#272d36',
  bulma: '#ffffff',
  trunks: '#8697a2',
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
  newTokens: {
    ...sharedTokens.newTokens,
    borderRadius: {
      ...sharedTokens.newTokens.borderRadius,
      interactive: sharedTokens.newTokens.borderRadius.twoxlarge,
    },
  },
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default commsDark;
