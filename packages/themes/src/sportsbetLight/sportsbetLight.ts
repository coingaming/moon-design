import { Theme } from '../types/theme';
import sportsbetDark from '../sportsbetDark/sportsbetDark';

const color = {
  piccolo: {
    120: '#02C556',
    100: '#0CD463',
    80: '#19E170',
  },
  hit: {
    120: '#F7F7F7',
    100: '#F7F7F7',
    80: '#F7F7F7',
  },
  beerus: {
    100: '#E6E6E6',
  },
  goku: {
    100: '#FFFFFF',
    80: '#F3F5F6',
    40: '#E7EAEC',
    10: '#CFD5DA',
  },
  gohan: {
    100: '#F7F7F7',
    80: '#F7F7F7',
    40: '#EBEBEB',
    10: '#E0E0E0',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#1A212A',
  },
  trunks: {
    100: '#8697A2',
  },
};

const sportsbetLight: Theme = {
  ...sportsbetDark,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...sportsbetDark.color,
    ...color,
  },
  colorScheme: 'light',
};

export default sportsbetLight;
