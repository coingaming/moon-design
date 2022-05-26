import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#1c40bb',
    100: '#284dcd',
    80: '#365ad8',
  },
  hit: {
    120: '#ffffff',
    100: '#f6f6f6',
    80: '#fbfbfb',
  },
  beerus: {
    100: '#e6e6e6',
  },
  goku: {
    100: '#f7f7f7',
    80: '#f9f9f9',
    40: '#fcfcfc',
    10: '#ffffff',
  },
  gohan: {
    100: '#ffffff',
    80: '#fbfbfb',
    40: '#f9f9f9',
    10: '#f6f6f6',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#8697a2',
  },
};

const colorNew = {
  piccolo: '#284dcd',
  hit: '#f6f6f6',
  beerus: '#e6e6e6',
  goku: '#f7f7f7',
  gohan: '#ffffff',
  bulma: '#000000',
  trunks: '#8697a2',
  goten: '#ffffff',
  popo: '#000000',
};

const moneyballLight: Theme = {
  ...sharedTokens,
  brand: 'Moneyball',
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

export default moneyballLight;
