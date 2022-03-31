import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#7946d8',
    100: '#875dd5',
    80: '#9573d4',
  },
  hit: {
    120: '#a2b0b9',
    100: '#abb7bf',
    80: '#b5bec5',
  },
  beerus: {
    100: '#e2e6e9',
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
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#010913',
  },
  trunks: {
    100: '#8697a2',
  },
};

const colorNew = {
  piccolo: '#875dd5',
  hit: '#abb7bf',
  beerus: '#e2e6e9',
  goku: '#f3f5f6',
  gohan: '#ffffff',
  bulma: '#010913',
  trunks: '#8697a2',
  goten: '#ffffff',
  popo: '#000000',
};

const missionsToolLight: Theme = {
  ...sharedTokens,
  brand: 'MissionsTool',
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
    small: 2,
    default: 4,
    largest: 8,
  },
  newTokens: {
    ...sharedTokens.newTokens,
    borderRadius: {
      ...sharedTokens.newTokens.borderRadius,
      interactive: sharedTokens.newTokens.borderRadius.medium,
    },
  },
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default missionsToolLight;
