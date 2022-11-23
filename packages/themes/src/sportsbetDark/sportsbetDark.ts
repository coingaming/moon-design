import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#49B356',
    100: '#49B356',
    80: '#62BE6D',
  },
  hit: {
    120: '#4C515A',
    100: '#4C515A',
    80: '#4C515A',
  },
  beerus: {
    100: '#FFFFFF1F',
  },
  goku: {
    100: '#2C323A',
    80: '#2C323A',
    40: '#2C323A',
    10: '#2C323A',
  },
  gohan: {
    100: '#1A212A',
    80: '#1A212A',
    40: '#1A212A',
    10: '#1A212A',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#8D9DA8',
  },
  ghost: {
    100: '#49B35652',
  },
  popo: {
    100: '#000000',
  },
  whis: {
    100: '#1da1f2',
    10: '#19a9e2',
  },
};

const colorNew = {
  piccolo: '#49B356',
  hit: '#4C515A',
  beerus: '#FFFFFF1F',
  goku: '#2C323A',
  gohan: '#1A212A',
  bulma: '#FFFFFF',
  trunks: '#8D9DA8',
  goten: '#FFFFFF',
  ghost: '#49B35652',
  popo: '#000000',
  whis: '#1da1f2',
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
