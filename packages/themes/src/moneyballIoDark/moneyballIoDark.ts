import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#FF1E00',
    100: '#FF1E00',
    80: '#FF4B33',
  },
  hit: {
    120: '#1F1F1F',
    100: '#272727',
    80: '#383838',
  },
  beerus: {
    100: '#303030',
  },
  goku: {
    100: '#141414',
    80: '#303030',
    40: '#272727',
    10: '#1D1D1D',
  },
  gohan: {
    100: '#272727',
    80: '#414141',
    40: '#383838',
    10: '#303030',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#858585',
  },
  whis: {
    100: '#0083FF',
    60: '#148DFF',
    10: '#1F92FF',
  },
  frieza: {
    100: '#5C33CF',
    60: '#734DDE',
    10: '#9271EF',
  },
};

const colorNew = {
  piccolo: '#FF1E00',
  hit: '#272727',
  beerus: '#303030',
  goku: '#141414',
  gohan: '#272727',
  bulma: '#FFFFFF',
  trunks: '#858585',
  goten: '#FFFFFF',
  popo: '#000000',
};

const moneyballIoDark: Theme = {
  ...sharedTokens,
  brand: 'Moneyball.io',
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

export default moneyballIoDark;
