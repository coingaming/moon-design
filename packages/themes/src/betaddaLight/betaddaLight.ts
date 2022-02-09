import betaddaDark from '../betaddaDark/betaddaDark';
import componentsTokens from '../sharedTokens/componentsTokens';
import { Theme } from '../sharedTokens/sharedTokens';
import supportiveColors from '../v2/colors/supportiveColors';

const lightColors = {
  piccolo: {
    120: '#e68a2e',
    100: '#ff9933',
    80: '#ffa347',
  },
  hit: {
    120: '#19930e',
    100: '#1ca30f',
    80: '#33ac27',
  },
  beerus: {
    100: '#e4e6e9',
  },
  goku: {
    100: '#ffffff',
    80: '#f1f2f3',
    40: '#e0e3e6',
    10: '#ced4d9',
  },
  gohan: {
    100: '#f2f3f7',
    80: '#e8e9ed',
    40: '#dfe0e3',
    10: '#d5d6d9',
  },
  goten: {
    100: '#ffffff',
  },
  bulma: {
    100: '#1a212a',
  },
  trunks: {
    100: '#63717b',
  },
  whis: {
    100: '#1da1f2',
    10: '#19a9e2',
  },
};

const colorNew = {
  piccolo: '#ff9933',
  hit: '#1ca30f',
  beerus: '#e4e6e9',
  goku: '#ffffff',
  gohan: '#f2f3f7',
  bulma: '#1a212a',
  trunks: '#63717b',
  goten: '#ffffff',
  popo: '#000000',
};

const betaddaLight: Theme = {
  ...betaddaDark,
  color: {
    ...betaddaDark.color,
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

export default betaddaLight;
