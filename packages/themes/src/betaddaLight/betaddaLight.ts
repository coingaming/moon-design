import { Theme } from '../sharedTokens/sharedTokens';
import betaddaDark from '../betaddaDark/betaddaDark';

const lightColors = {
  piccolo: {
    120: '#E68A2E',
    100: '#FF9933',
    80: '#FFA347',
  },
  hit: {
    120: '#19930E',
    100: '#1CA30F',
    80: '#33AC27',
  },
  beerus: {
    100: '#E4E6E9',
  },
  goku: {
    100: '#FFFFFF',
    80: '#F1F2F3',
    40: '#E0E3E6',
    10: '#CED4D9',
  },
  gohan: {
    100: '#F2F3F7',
    80: '#E8E9ED',
    40: '#DFE0E3',
    10: '#D5D6D9',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#1A212A',
  },
  trunks: {
    100: '#63717B',
  },
  whis: {
    100: '#1DA1F2',
    10: '#19A9E2',
  },
};

const betaddaLight: Theme = {
  ...betaddaDark,
  color: {
    ...betaddaDark.color,
    text: lightColors.bulma[100],
    background: lightColors.goku[100],
    ...lightColors,
  },
  colorScheme: 'light',
};

export default betaddaLight;
