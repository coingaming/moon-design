import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#1a7dff',
    100: '#2e89ff',
    80: '#4c95f6',
  },
  hit: {
    120: '#b7bac3',
    100: '#c0c2c9',
    80: '#c8cad0',
  },
  goten: {
    100: '#ffffff',
  },
  goku: {
    100: '#f3f5f6',
    80: '#eaeef0',
    40: '#d8e0e3',
    10: '#c4d2d9',
  },
  gohan: {
    100: '#ffffff',
    80: '#f7f7f7',
    40: '#e8e8e8',
    10: '#d9d9d9',
  },
  beerus: {
    100: '#e7e7e7',
  },
  bulma: {
    100: '#03060c',
  },
  trunks: {
    100: '#a6a6a6',
  },
};

const colorNew = {
  piccolo: '#2e89ff',
  hit: '#c0c2c9',
  beerus: '#e7e7e7',
  goku: '#f3f5f6',
  gohan: '#ffffff',
  bulma: '#03060c',
  trunks: '#a6a6a6',
  goten: '#ffffff',
  popo: '#000000',
};

const slotsLight: Theme = {
  ...sharedTokens,
  brand: 'Slots.io',
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

export default slotsLight;
