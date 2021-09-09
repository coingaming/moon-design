import avertaStd from '../sharedTokens/avertaStd';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: '#E5E5E5',
    100: '#FFFFFF',
    80: '#E5E5E5',
  },
  hit: {
    120: '#292929',
    100: '#0B0B0B',
    80: '#292929',
  },
  beerus: {
    100: '#1F1F1F',
  },
  goku: {
    100: '#000000',
    80: '#000000',
    40: '#000000',
    10: '#000000',
  },
  gohan: {
    100: '#0B0B0B',
    80: '#0B0B0B',
    40: '#0B0B0B',
    10: '#0B0B0B',
  },
  goten: {
    100: '#000000',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#999CA0',
  },
};

const moonDesignDark: Theme = {
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
  colorScheme: 'dark',
};

export default moonDesignDark;
