import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#cf0232',
    100: '#de0d3e',
    80: '#e61e4d',
  },
  hit: {
    120: '#5b5d71',
    100: '#67697e',
    80: '#74768b',
  },
  beerus: {
    100: '#323548',
  },
  goku: {
    100: '#00070f',
    80: '#021327',
    40: '#0c2c4f',
    10: '#1d4572',
  },
  gohan: {
    100: '#191d33',
    80: '#232843',
    40: '#3a405f',
    10: '#52587a',
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
};

const colorNew = {
  piccolo: '#de0d3e',
  hit: '#67697e',
  beerus: '#323548',
  goku: '#00070f',
  gohan: '#191d33',
  bulma: '#ffffff',
  trunks: '#8697a2',
  goten: '#FFFFFF',
  popo: '#000000',
};

const livecasinoDark: Theme = {
  ...sharedTokens,
  brand: 'Livecasino.io',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  boxShadow,
  radius: {
    small: 4,
    default: 8,
    largest: 8,
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
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default livecasinoDark;
