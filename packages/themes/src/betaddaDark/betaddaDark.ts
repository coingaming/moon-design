import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#e68a2e',
    100: '#ff9933',
    80: '#ffa347',
  },
  hit: {
    120: '#19930e',
    100: '#1ca30f',
    80: '#33ac27',
  },
  beerus: {
    100: '#40464f',
  },
  goku: {
    100: '#272e37',
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
    100: '#97a2ae',
  },
  whis: {
    100: '#1da1f2',
    10: '#19a9e2',
  },
};

const colorNew = {
  piccolo: '#ff9933',
  hit: '#1ca30f',
  beerus: '#40464f',
  goku: '#272e37',
  gohan: '#1a212a',
  bulma: '#ffffff',
  trunks: '#97a2ae',
  goten: '#ffffff',
  popo: '#000000',
};

const betaddaDark: Theme = {
  ...sharedTokens,
  brand: 'Betadda',
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
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default betaddaDark;
