import bitcasinoLight from '../bitcasinoLight/bitcasinoLight';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const colors = {
  piccolo: {
    100: 'rgba(255, 79, 15, 1)',
  },
  hit: {
    100: 'rgba(32, 32, 32, 1)',
  },
  goten: {
    100: 'rgba(255, 255, 255, 1)',
  },
  goku: {
    100: 'rgba(0, 0, 0, 1)',
  },
  gohan: {
    100: 'rgba(19, 19, 19, 1)',
  },
  beerus: {
    100: 'background: rgba(255, 255, 255, 0.08)',
  },
  bulma: {
    100: 'rgba(255, 255, 255, 1)',
  },
  trunks: {
    100: 'rgba(122, 122, 122, 1)',
  },
};

const colorNew = {
  piccolo: '#FF4F0F',
  hit: '#202020',
  beerus: colors.beerus[100],
  goku: colors.goku[100],
  gohan: '#0C0C0C',
  bulma: '#ffffff',
  trunks: '#7A7A7A',
  goten: '#ffffff',
  popo: '#000000',
};

const { hover: bombayClubHover } = bitcasinoLight;

const bombayClub: Theme = {
  ...sharedTokens,
  brand: 'BombayClub',
  color: {
    text: colors.bulma[100],
    background: colors.goku[100],
    ...supportColors,
    ...colors,
  },
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
  hover: {
    ...bombayClubHover,
    primary: colors.beerus[100],
  },
};

export default bombayClub;
