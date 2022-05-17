import avertaStd from '../sharedTokens/avertaStd';
import componentsTokens from '../sharedTokens/componentsTokens';
import sharedTokens, { rem, Theme } from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';
import supportiveColors from '../v2/colors/supportiveColors';

/*
  This theme is a legacy and would be removed soon
  Use luckySlotsDark and luckslotsLight
*/

const color = {
  piccolo: {
    120: '#e00038',
    100: '#fa003e',
    80: '#f32055',
  },
  hit: {
    120: '#4345b5',
    100: '#5456e2',
    80: '#7678e8',
  },
  goten: {
    100: '#ffffff',
  },
  goku: {
    100: '#3133c4',
    80: '#2528b6',
    40: '#111397',
    10: '#020473',
  },
  gohan: {
    100: '#2a0d68',
    80: '#351579',
    40: '#4d2b97',
    10: '#6745b0',
  },
  beerus: {
    100: '#353b50',
  },
  bulma: {
    100: '#ffffff',
  },
  trunks: {
    100: '#dbe2f5',
  },
};

const colorNew = {
  piccolo: '#fa003e',
  hit: '#5456e2',
  beerus: '#353b50',
  goku: '#3133c4',
  gohan: '#2a0d68',
  bulma: '#ffffff',
  trunks: '#dbe2f5',
  goten: '#ffffff',
  popo: '#000000',
};

const luckyslots: Theme = {
  ...sharedTokens,
  brand: 'LuckySlots',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
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
      interactive: {
        xsmall: rem(9999),
        small: rem(9999),
        medium: rem(9999),
      },
    },
  },
  ...componentsTokens(colorNew),
  colorScheme: 'dark',
};

export default luckyslots;
