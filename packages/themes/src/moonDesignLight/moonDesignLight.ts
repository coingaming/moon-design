import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: 'rgba(78, 70, 180, 0.9)',
    100: '#4e46b4',
    80: 'rgba(78, 70, 180, 0.9)',
  },
  hit: {
    120: '#e5e5e5',
    100: '#f5f5f5',
    80: '#e5e5e5',
  },
  beerus: {
    100: '#ebebeb',
  },
  goku: {
    100: '#f5f5f5',
    80: '#f5f5f5',
    40: '#f5f5f5',
    10: '#f5f5f5',
  },
  gohan: {
    100: '#ffffff',
    80: '#ffffff',
    40: '#ffffff',
    10: '#ffffff',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#999ca0',
  },
};

const colorsNew = {
  piccolo: '#4e46b4',
  hit: '#40a69f',
  beerus: '#ebebeb',
  goku: '#f5f5f5',
  gohan: '#ffffff',
  bulma: '#000000',
  trunks: '#999ca0',
  goten: '#ffffff',
  popo: '#000000',
};

const moonDesignLight: Theme = {
  ...sharedTokens,
  brand: 'MoonDesign',
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
    ...colorsNew,
    ...supportiveColors,
  },
  newTokens: {
    ...sharedTokens.newTokens,
    borderRadius: {
      ...sharedTokens.newTokens.borderRadius,
      interactive: sharedTokens.newTokens.borderRadius.medium,
    },
  },
  ...componentsTokens(colorsNew),
  colorScheme: 'light',
};

export default moonDesignLight;
