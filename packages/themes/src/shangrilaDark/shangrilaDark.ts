import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#977135',
    100: '#a57f40',
    80: '#b38b4d',
  },
  hit: {
    120: '#313030',
    100: '#3d3d3d',
    80: '#4a4a4a',
  },
  beerus: {
    100: '#83837c',
  },
  goku: {
    100: '#3d3d3d',
    80: '#4a4a4a',
    40: '#636363',
    10: '#7d7d7d',
  },
  gohan: {
    100: '#575757',
    80: '#636363',
    40: '#7d7d7d',
    10: '#969696',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#c9c9c0',
  },
};

const colorNew = {
  piccolo: '#a57f40',
  hit: '#3d3d3d',
  beerus: '#83837c',
  goku: '#3d3d3d',
  gohan: '#575757',
  bulma: '#ffffff',
  trunks: '#c9c9c0',
  goten: '#ffffff',
  popo: '#000000',
};

const shangrilaDark: Theme = {
  ...sharedTokens,
  brand: 'ShangriLa.io',
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
  colorScheme: 'dark',
};

export default shangrilaDark;
