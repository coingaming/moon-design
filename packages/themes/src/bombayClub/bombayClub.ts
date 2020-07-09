import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#CDA770',
    100: '#CDAE7E',
    80: '#CEB48D',
  },
  hit: {
    120: '#2D2824',
    100: '#3B3530',
    80: '#48423C',
  },
  goten: {
    100: '#090E15',
  },
  goku: {
    100: '#0B0D0E',
    80: '#17191C',
    60: '#23262A',
    40: '#2F3337',
    10: '#484C51',
  },
  gohan: {
    100: '#2D2925',
    80: '#3A3631',
    60: '#48423D',
    40: '#554F4A',
    20: '#615C56',
  },
  beerus: {
    100: '#443F3C',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#9A8565',
    60: '#AA9C88',
    20: '#BCB4A9',
  },
};

const bombayClub: Theme = {
  ...sharedTokens,
  brand: 'BombayClub',
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorScheme: 'dark',
};

export default bombayClub;
