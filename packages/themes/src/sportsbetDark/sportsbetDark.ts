import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#02c054',
    100: '#0ccf61',
    80: '#18dc6d',
  },
  hit: {
    120: '#2d3139',
    100: '#393e47',
    80: '#454a54',
  },
  beerus: {
    100: '#31373f',
  },
  goku: {
    100: '#232a33',
    80: '#353c44',
    40: '#4c5159',
    10: '#62676d',
  },
  gohan: {
    100: '#1a212a',
    80: '#31373f',
    40: '#5f646a',
    10: '#8c9095',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#8697a2',
  },
  whis: {
    100: '#1da1f2',
    10: '#19a9e2',
  },
};

const colorNew = {
  piccolo: '#0ccf61',
  hit: '#393e47',
  beerus: '#31373f',
  goku: '#232a33',
  gohan: '#1a212a',
  bulma: '#ffffff',
  trunks: '#8697a2',
  goten: '#ffffff',
  popo: '#000000',
};

const sportsbetDark: Theme = {
  ...sharedTokens,
  brand: 'Sportsbet.io',
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
  colorScheme: 'dark',
};

export default sportsbetDark;
