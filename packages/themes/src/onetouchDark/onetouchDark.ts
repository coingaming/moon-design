import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#02c054',
    100: '#0ccf61',
    80: '#18dc6d',
  },
  hit: {
    120: '#2d3139',
    100: '#393e47',
    80: '#454a54',
  },
  beerus: {
    100: '#31373f',
  },
  goku: {
    100: '#232a33',
    80: '#353c44',
    40: '#4c5159',
    10: '#62676d',
  },
  gohan: {
    100: '#1F1E2C',
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
    100: '#8781A0',
  },
};

const colorNew = {
  piccolo: '#FFD02B',
  hit: '#FF0000',
  beerus: '#605B79',
  goku: '#1F1E2C',
  gohan: '#1F1E2C',
  bulma: '#ffffff',
  trunks: '#8781A0',
  goten: '#000000',
  popo: '#FFFFFF'
};

const sportsbetDark: Theme = {
  ...sharedTokens,
  brand: 'Onetouch',
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
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default sportsbetDark;
