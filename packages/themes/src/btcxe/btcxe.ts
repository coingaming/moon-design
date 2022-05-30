import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#0a85ff',
    100: '#339aff',
    80: '#5cadff',
  },
  hit: {
    120: '#5711a7',
    100: '#6613c6',
    80: '#5711a7',
  },
  beerus: {
    100: '#c5d2d8',
  },
  goku: {
    100: '#ffffff',
    80: '#f5f5f5',
    40: '#ebebeb',
    10: '#e0e0e0',
  },
  gohan: {
    100: '#f3f5f6',
    80: '#e8eced',
    40: '#dde3e4',
    10: '#d2d9db',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#7a7a81',
  },
};

const colorNew = {
  piccolo: '#339aff',
  hit: '#6613c6',
  beerus: '#c5d2d8',
  goku: '#ffffff',
  gohan: '#f3f5f6',
  bulma: '#000000',
  trunks: '#7a7a81',
  goten: '#ffffff',
  popo: '#000000',
};

const btcxe: Theme = {
  ...sharedTokens,
  brand: 'BTCXE',
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

export default btcxe;
