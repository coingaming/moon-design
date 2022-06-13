import moneyballIoDark from '../moneyballIoDark/moneyballIoDark';
import componentsTokens from '../sharedTokens/componentsTokens';
import { Theme } from '../sharedTokens/sharedTokens';
import supportiveColors from '../v2/colors/supportiveColors';

const lightColors = {
  piccolo: {
    120: '#FF1E00',
    100: '#FF1E00',
    80: '#FF4B33',
  },
  hit: {
    120: '#D9D9D9',
    100: '#F7F7F7',
    80: '#EDEDED',
  },
  beerus: {
    100: '#E6E6E6',
  },
  goku: {
    100: '#F7F7F7',
    80: '#E0E0E0',
    40: '#E3E3E3',
    10: '#EDEDED',
  },
  gohan: {
    100: '#FFFFFF',
    80: '#E0E0E0',
    40: '#EBEBEB',
    10: '#F5F5F5',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#818181',
  },
  whis: {
    100: '#0083FF',
    60: '#148DFF',
    10: '#1F92FF',
  },
  frieza: {
    100: '#5C33CF',
    60: '#734DDE',
    10: '#9271EF',
  },
};

const colorNew = {
  piccolo: '#FF1E00',
  hit: '#F7F7F7',
  beerus: '#E6E6E6',
  goku: '#F7F7F7',
  gohan: '#FFFFFF',
  bulma: '#000000',
  trunks: '#818181',
  goten: '#FFFFFF',
  popo: '#000000',
};

const moneyballIoLight: Theme = {
  ...moneyballIoDark,
  color: {
    ...moneyballIoDark.color,
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

export default moneyballIoLight;
