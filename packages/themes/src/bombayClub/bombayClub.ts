import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

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
    40: '#2F3337',
    10: '#484C51',
  },
  gohan: {
    100: '#2D2925',
    80: '#3A3631',
    40: '#554F4A',
    10: '#6e6863',
  },
  beerus: {
    100: '#443F3C',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#9A8565',
  },
};

const colorNew = {
  piccolo: '#CDAE7E',
  hit: '#3B3530',
  beerus: '#443F3C',
  goku: '#0B0D0E',
  gohan: '#2D2925',
  bulma: '#FFFFFF',
  trunks: '#9A8565',
  goten: '#090E15',
  popo: '#000000',
};

const bombayClub: Theme = {
  ...sharedTokens(colorNew),
  radius: {
    small: 4,
    default: 8,
    largest: 8,
  },
  brand: 'BombayClub',
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
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  colorScheme: 'dark',
};

export default bombayClub;
