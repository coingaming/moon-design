import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  hit: {
    120: '#c2c7cd',
    100: '#c2c7cd',
    80: '#c2c7cd',
  },
  goku: {
    100: '#f7f7f7',
    80: '#f7f7f7',
    40: '#f7f7f7',
    10: '#f7f7f7',
  },
  gohan: {
    100: '#ffffff',
    80: '#ffffff',
    40: '#ffffff',
    10: '#ffffff',
  },
  beerus: {
    100: '#ebebeb',
  },
  bulma: {
    100: '#000000',
  },
  trunks: {
    100: '#707070',
  },
};

const supportiveColors = {
  krillin: {
    100: '#ff9519',
    60: '#ffc075',
    10: '#fff5e8',
  },
  chiChi: {
    100: '#ff4e64',
    60: '#ff7687',
    10: '#ff96a3',
  },
  roshi: {
    100: '#4ad15f',
    60: '#64dc77',
    10: '#7ff291',
  },
  dodoria: {
    100: '#cb442d',
    60: '#db4e4e',
    10: '#fde9e5',
  },
  cell: {
    100: '#1f8067',
    60: '#28b090',
    10: '#e0f1ed',
  },
  raditz: {
    100: '#c09805',
    60: '#ddaf06',
    10: '#feedaf',
  },
  whis: {
    100: '#3448f0',
    60: '#4373b5',
    10: '#e4effe',
  },
  frieza: {
    100: '#5c33cf',
    60: '#6e67be',
    10: '#eeecf8',
  },
  nappa: {
    100: '#725550',
    60: '#856a66',
    10: '#a18681',
  },
};

const colorNew = {
  piccolo: '#000000',
  hit: '#c2c7cd',
  beerus: '#ebebeb',
  goku: '#f7f7f7',
  gohan: '#ffffff',
  bulma: '#000000',
  trunks: '#707070',
  goten: '#ffffff',
  popo: '#000000',
};

const tradeartLight: Theme = {
  ...sharedTokens,
  brand: 'Tradeart',
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
    largest: 12,
  },
  color: {
    ...supportColors,
    text: color.bulma[100],
    background: color.goku[100],
    piccolo: {
      120: '#000000',
      100: '#000000',
      80: '#000000',
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
  colorScheme: 'light',
};

export default tradeartLight;
