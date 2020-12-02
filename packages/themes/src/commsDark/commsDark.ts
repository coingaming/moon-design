import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#AFD5FF',
    100: '#2896FE',
    80: '#138BFF',
  },
  hit: {
    120: '#4D5259',
    100: '#FFFFFF',
    80: '#F9FAFA',
  },
  beerus: {
    100: '#4D5259',
  },
  goku: {
    120: '#4D5259',
    100: '#141519',
    80: '#000000',
  },
  gohan: {
    120: '#1D2229',
    100: '#272D36',
    80: '#4D5259',
  },
  goten: {
    120: '#00EF99',
    100: '#FF4E64',
    80: '#885ED5',
    60: '#FFF15C',
    40: '#573496',
  },
  bulma: {
    120: '#D6DDE0',
    100: '#FFFFFF',
    80: '#E9EDEF',
  },
  trunks: {
    120: '#AAB6BE',
    100: '#8697A2',
    80: '#9EACB5',
  },
};

const commsDark: Theme = {
  ...sharedTokens,
  brand: 'Comms',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  boxShadow,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  radius: {
    small: 2,
    default: 4,
    largest: 8,
  },
  colorScheme: 'dark',
};

export default commsDark;
