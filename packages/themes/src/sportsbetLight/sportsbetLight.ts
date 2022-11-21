import componentsTokens from '../sharedTokens/componentsTokens';
import { Theme } from '../sharedTokens/sharedTokens';
import sportsbetDark from '../sportsbetDark/sportsbetDark';
import supportiveColors from '../v2/colors/supportiveColors';

const lightColors = {
  piccolo: {
    120: '#49B356',
    100: '#49B356',
    80: '#62BE6D',
  },
  hit: {
    120: '#F7F7F7',
    100: '#F7F7F7',
    80: '#F7F7F7',
  },
  beerus: {
    100: '#E0E3E5',
  },
  goku: {
    100: '#F4F5F6',
    80: '#F4F5F6',
    40: '#F4F5F6',
    10: '#F4F5F6',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#FFFFFF',
    40: '#FFFFFF',
    10: '#FFFFFF',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#63717B',
  },
  ghost: {
    100: '#49B35652',
  },
  popo: {
    100: '#000000',
  },
  whis: {
    100: '#1da1f2',
    10: '#19a9e2',
  },
};

const colorNew = {
  piccolo: '#49B356',
  hit: '#F7F7F7',
  beerus: '#E0E3E5',
  goku: '#F4F5F6',
  gohan: '#FFFFFF',
  bulma: '#000000',
  trunks: '#63717B',
  goten: '#FFFFFF',
  ghost: '#49B35652',
  popo: '#000000',
  whis: '#1da1f2',
};

const sportsbetLight: Theme = {
  ...sportsbetDark,
  color: {
    ...sportsbetDark.color,
    text: lightColors.bulma[100],
    background: lightColors.goku[100],
    ...lightColors,
  },
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  ...componentsTokens(colorNew),
  colorScheme: 'light',
};

export default sportsbetLight;
