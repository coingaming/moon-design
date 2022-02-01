import avertaStd from '../sharedTokens/avertaStd';
import buttonVariantTokens from '../sharedTokens/buttonVariantTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import mainColors from '../v2/colors/mainColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  piccolo: {
    120: 'rgba(78, 70, 180, 0.9)',
    100: '#4E46B4',
    80: 'rgba(78, 70, 180, 0.9)',
  },
  hit: {
    120: '#E5E5E5',
    100: '#F5F5F5',
    80: '#E5E5E5',
  },
  beerus: {
    100: '#EBEBEB',
  },
  goku: {
    100: '#F5F5F5',
    80: '#F5F5F5',
    40: '#F5F5F5',
    10: '#F5F5F5',
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
    100: '#999CA0',
  },
};

const colorNew = {
  piccolo: '#4E46B4',
  hit: '#0B0B0B',
  beerus: '#1F1F1F',
  goku: '#0B0B0B',
  gohan: '#1F1F1F',
  bulma: '#FFFFFF',
  trunks: '#999CA0',
  goten: '#FFFFFF',
  popo: '#000000',
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
  colorNew: {
    ...mainColors,
    ...supportiveColors,
  },
  button: {
    primary: {
      color: mainColors.goten,
      backgroundColor: mainColors.piccolo,
    },
    secondary: {
      color: mainColors.goten,
      backgroundColor: mainColors.hit,
    },
    tertiary: {
      color: mainColors.bulma,
      background: 'none',
      boxShadow: `inset 0 0 0 1px ${mainColors.trunks}`,
      '&:hover': {
        boxShadow: `inset 0 0 0 1px ${mainColors.bulma}`,
      },
    },
  },
  colorScheme: 'light',
};

export default moonDesignLight;
