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
    100: '#272D36',
    80: '#141519',
  },
  beerus: {
    100: '#E2E6E9',
  },
  goku: {
    120: '#D6DDE0',
    100: '#F3F5F6',
    80: '#E9EDEF',
  },
  gohan: {
    120: '#C8E4FF',
    100: '#FFFFFF',
    80: '#F9FAFA',
  },
  goten: {
    120: '#00E593',
    100: '#04FFA5',
    80: '#00C5A2',
  },
  bulma: {
    120: '#4D5259',
    100: '#141519',
    80: '#272D36',
  },
  trunks: {
    120: '#AAB6BE',
    100: '#8697A2',
    80: '#9EACB5',
  },
};

const commsLight: Theme = {
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
  colorScheme: 'light',
};

export default commsLight;
