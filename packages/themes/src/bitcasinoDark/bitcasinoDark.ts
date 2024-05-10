import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  hit: {
    120: '#4B4C4E',
    100: '#4B4C4E',
    80: '#4B4C4E',
  },
  goku: {
    100: '#1F2328',
    80: '#1F2328',
    40: '#1F2328',
    10: '#1F2328',
  },
  gohan: {
    100: '#272B30',
    80: '#272B30',
    40: '#272B30',
    10: '#272B30',
  },
  beerus: {
    100: '#3A3D42',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#7E7572',
  },
};

const colorNew = {
  piccolo: '#F2590D',
  hit: '#4B4C4E',
  beerus: '#3A3D42',
  goku: '#1F2328',
  gohan: '#272B30',
  bulma: '#ffffff',
  trunks: '#7E7572',
  goten: '#ffffff',
  popo: '#000000',
};

const bitcasinoDark: Theme = {
  ...sharedTokens,
  brand: 'Bitcasino.io',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  boxShadow,
  radius: {
    small: 4,
    default: 8,
    largest: 8,
  },
  color: {
    ...supportColors,
    text: color.bulma[100],
    background: color.goku[100],
    piccolo: {
      120: '#F2590D',
      100: '#F2590D',
      80: '#F2590D',
    },
    goten: {
      100: '#ffffff',
    },
    ...color,
  },
  colorNew: {
    ...colorNew,
    ...supportiveColors,
  },
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default bitcasinoDark;
