import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  hit: {
    120: '#572385',
    100: '#642e94',
    80: '#7139a2',
  },
  goku: {
    100: '#24033f',
    80: '#320854',
    40: '#4c1a75',
    10: '#65348d',
  },
  gohan: {
    100: '#3e0d68',
    80: '#4b1679',
    40: '#642e94',
    10: '#7e48ad',
  },
  beerus: {
    100: '#521b81',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#a18eb4',
  },
};

const colorNew = {
  piccolo: '#ff4f0f',
  hit: '#642e94',
  beerus: '#521b81',
  goku: '#24033f',
  gohan: '#3e0d68',
  bulma: '#ffffff',
  trunks: '#a18eb4',
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
      120: '#f54100',
      100: '#ff4f0f',
      80: '#fa642e',
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
  newTokens: {
    ...sharedTokens.newTokens,
    borderRadius: {
      ...sharedTokens.newTokens.borderRadius,
      interactive: sharedTokens.newTokens.borderRadius.medium,
    },
  },
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default bitcasinoDark;
