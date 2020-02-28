import { Theme } from '../types/theme';

import sportsbetShared from './sportsbetShared';

const lights = {
  100: '#F7F7F7',
  80: '#F7F7F7',
  60: '#F0F0F0',
  40: '#EBEBEB',
  20: '#E6E6E6',
  10: '#E0E0E0',
};

const color = {
  piccolo: {
    100: '#15CA4F',
    80: '#26E865',
    60: '#52ED83',
    40: '#7DF1A2',
    20: '#A8F6C1',
    10: '#D4FAE0',
  },
  hit: lights,
  goku: {
    100: '#FFFFFF',
    80: '#F3F5F6',
    60: '#EDEFF1',
    40: '#E7EAEC',
    20: '#DBE0E3',
    10: '#CFD5DA',
  },
  gohan: lights,
  beerus: {
    100: '#E6E6E6',
    80: '#E4E4E4',
    60: '#E1E1E1',
    40: '#DFDFDF',
    20: '#DDDDDD',
    10: '#DADADA',
  },
  bulma: {
    100: '#1A212A',
    80: '#31373F',
    60: '#484D55',
    40: '#5F646A',
    20: '#767A7F',
    10: '#8C9095',
  },
};

const { color: sharedColor, ...sharedTheme } = sportsbetShared;

const sportsbetLight: Theme = {
  ...sharedTheme,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...color,
    ...sharedColor,
  },
  colorScheme: 'light',
};

export default sportsbetLight;
