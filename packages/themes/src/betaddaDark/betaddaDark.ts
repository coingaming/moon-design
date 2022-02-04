import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#E68A2E',
    100: '#FF9933',
    80: '#FFA347',
  },
  hit: {
    120: '#19930E',
    100: '#1CA30F',
    80: '#33AC27',
  },
  beerus: {
    100: '#40464F',
  },
  goku: {
    100: '#272E37',
    80: '#353C44',
    40: '#4C5159',
    10: '#62676D',
  },
  gohan: {
    100: '#1A212A',
    80: '#31373F',
    40: '#5F646A',
    10: '#8C9095',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#97A2AE',
  },
  whis: {
    100: '#1DA1F2',
    10: '#19A9E2',
  },
};

const colorNew = {
  piccolo: '#FF9933',
  hit: '#1CA30F',
  beerus: '#40464F',
  goku: '#272E37',
  gohan: '#1A212A',
  bulma: '#FFFFFF',
  trunks: '#97A2AE',
  goten: '#FFFFFF',
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
