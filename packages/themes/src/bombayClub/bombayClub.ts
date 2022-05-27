import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const color = {
  piccolo: {
    120: '#cda770',
    100: '#cdae7e',
    80: '#ceb48d',
  },
  hit: {
    120: '#2d2824',
    100: '#3b3530',
    80: '#48423c',
  },
  goten: {
    100: '#090e15',
  },
  goku: {
    100: '#0b0d0e',
    80: '#17191c',
    40: '#2f3337',
    10: '#484c51',
  },
  gohan: {
    100: '#2d2925',
    80: '#3a3631',
    40: '#554f4a',
    10: '#6e6863',
  },
  beerus: {
    100: '#443f3c',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#9a8565',
  },
};

const colorNew = {
  piccolo: '#cdae7e',
  hit: '#3b3530',
  beerus: '#443f3c',
  goku: '#0b0d0e',
  gohan: '#2d2925',
  bulma: '#ffffff',
  trunks: '#9a8565',
  goten: '#090e15',
  popo: '#000000',
};

const bombayClub: Theme = {
  ...sharedTokens,
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
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default bombayClub;
