import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#141519',
    100: '#272d36',
    80: '#4d5259',
  },
  hit: {
    120: '#d6dde0',
    100: '#f3f5f6',
    80: '#e9edef',
  },
  beerus: {
    100: '#e2e6e9',
  },
  goku: {
    120: '#d6dde0',
    100: '#f3f5f6',
    80: '#e9edef',
    10: '#f9fafa',
  },
  gohan: {
    100: '#ffffff',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#272d36',
  },
  trunks: {
    100: '#8697a2',
  },
};

const colorNew = {
  piccolo: '#272d36',
  hit: '#f3f5f6',
  beerus: '#e2e6e9',
  goku: '#f3f5f6',
  gohan: '#ffffff',
  bulma: '#272d36',
  trunks: '#8697a2',
  goten: '#ffffff',
  popo: '#000000',
};

const commsLight: Theme = {
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
      interactive: {
        xsmall: rem(9999),
        small: rem(9999),
        medium: rem(9999),
      },
    },
  },
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default commsLight;
