import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#e5e5e5',
    100: '#ffffff',
    80: '#e5e5e5',
  },
  hit: {
    120: '#292929',
    100: '#0b0b0b',
    80: '#292929',
  },
  beerus: {
    100: '#1f1f1f',
  },
  goku: {
    100: '#000000',
    80: '#000000',
    40: '#000000',
    10: '#000000',
  },
  gohan: {
    100: '#0b0b0b',
    80: '#0b0b0b',
    40: '#0b0b0b',
    10: '#0b0b0b',
  },
  goten: {
    100: '#000000',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#999ca0',
  },
};

const colorNew = {
  piccolo: '#4e46b4',
  hit: '#0b0b0b',
  beerus: '#1f1f1f',
  goku: '#0b0b0b',
  gohan: '#1f1f1f',
  bulma: '#ffffff',
  trunks: '#999ca0',
  goten: '#ffffff',
  popo: '#000000',
};

const moonDesignDark: Theme = {
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
    ...colorNew,
    ...supportiveColors,
  },
  newTokens: {
    ...sharedTokens.newTokens,
    borderRadius: {
      ...sharedTokens.newTokens.borderRadius,
      interactive: sharedTokens.newTokens.borderRadius.medium,
    },
  },
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default moonDesignDark;
