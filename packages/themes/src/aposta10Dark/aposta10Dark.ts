import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import avertaStd from '../sharedTokens/avertaStd';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#2E9468',
    100: '#39A275',
    80: '#46AF81',
  },
  hit: {
    120: '#565e6c',
    100: '#636b79',
    80: '#6f7785',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#070A0D',
    80: '#11161D',
    40: '#262F3B',
    10: '#3D4957',
  },
  gohan: {
    100: '#272C35',
    80: '#323843',
    40: '#4A515E',
    10: '#636B79',
  },
  beerus: {
    100: '#4E535A',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#C8D0D5',
  },
};

const aposta10Dark: Theme = {
  ...sharedTokens,
  brand: 'Aposta10',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorScheme: 'dark',
};

export default aposta10Dark;
