import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#2e9468',
    100: '#39a275',
    80: '#46af81',
  },
  hit: {
    120: '#565e6c',
    100: '#636b79',
    80: '#6f7785',
  },
  goten: {
    100: '#ffffff',
  },
  goku: {
    100: '#070a0d',
    80: '#11161d',
    40: '#262f3b',
    10: '#3d4957',
  },
  gohan: {
    100: '#272c35',
    80: '#323843',
    40: '#4a515e',
    10: '#636b79',
  },
  beerus: {
    100: '#4e535a',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#c8d0d5',
  },
};

const colorNew = {
  piccolo: '#39a275',
  hit: '#636b79',
  beerus: '#4e535a',
  goku: '#070a0d',
  gohan: '#272c35',
  bulma: '#ffffff',
  trunks: '#c8d0d5',
  goten: '#ffffff',
  popo: '#000000',
};

const aposta10Dark: Theme = {
  ...sharedTokens,
  brand: 'Aposta10',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
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
  colorScheme: 'dark',
  ...componentsTokens(colorNew),
};

export default aposta10Dark;
