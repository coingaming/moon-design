import { Theme } from '../types/theme';
import sportsbetShared from '../sportsbetShared/sportsbetShared';
import sharedColor from '../shared/private/color';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#02C556',
    100: '#0CD463',
    80: '#19E170',
  },
  hit: {
    120: '#11161D',
    100: '#1A212A',
    80: '#242D38',
  },
  beerus: {
    100: '#31373F',
  },
  goku: {
    100: '#232A33',
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
    100: '#8697A2',
  },
};

const sportsbetDark: Theme = {
  ...sportsbetShared,
  boxShadow,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...sharedColor,
    ...color,
  },
  colorScheme: 'dark',
};

export default sportsbetDark;
