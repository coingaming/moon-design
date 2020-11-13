import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#02C556',
    100: '#080917',
    80: '#19E170',
  },
  hit: {
    120: '#11161D',
    100: '#FFFFFF',
    80: '#242D38',
  },
  beerus: {
    100: '#31373F',
  },
  goku: {
    100: '#FFFFFF',
    80: '#FFFFFF',
    40: '#FFFFFF',
    10: '#FFFFFF',
  },
  gohan: {
    100: '#080917',
    80: '#080917',
    40: '#080917',
    10: '#080917',
  },
  goten: {
    100: '#FFFFFF',
  },
  bulma: {
    100: '#080917',
  },
  trunks: {
    100: '#8697A2',
  },
};

const moonDesignLight: Theme = {
  ...sharedTokens,
  brand: 'MoonDesign',
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
  colorScheme: 'light',
};

export default moonDesignLight;
