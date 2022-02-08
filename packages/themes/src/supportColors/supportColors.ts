import { CSSObject } from 'styled-components';

export type ColorValue = CSSObject['color'];

export interface MainColors {
  piccolo: ColorValue; // Accent color
  hit: ColorValue; // Secondary accent color
  beerus: ColorValue; // Border, line color
  goku: ColorValue; // Background color
  gohan: ColorValue; // Secondary background color
  bulma: ColorValue; // Text, icons color
  trunks: ColorValue; // Secondary text, icons color
  goten: ColorValue; // Force white
  popo: ColorValue; // Force black
}

interface SupportingColor {
  100?: ColorValue;
  10?: ColorValue;
}

interface SingletonColor {
  100: ColorValue;
}

export interface ColorShared {
  krillin: SupportingColor; // Warning colors
  chiChi: SupportingColor; // Error colors
  roshi: SupportingColor; // Success colors
  dodoria: SupportingColor;
  cell: SupportingColor;
  raditz: SupportingColor;
  whis: SupportingColor;
  frieza: SupportingColor;
  nappa: SupportingColor;
  popo: SingletonColor; // Black color
}

const supportColors: ColorShared = {
  // Warning colors
  krillin: {
    100: '#ffb319',
    10: '#ffe4ad',
  },
  // Error colors
  chiChi: {
    100: '#ff4e64',
    10: '#ffa7b2',
  },
  // Success colors
  roshi: {
    100: '#0cd664',
    10: '#b6f3d0',
  },
  dodoria: {
    100: '#d33030',
    10: '#e99797',
  },
  cell: {
    100: '#0ab758',
    10: '#84dbab',
  },
  raditz: {
    100: '#b3804a',
    10: '#d9bfa4',
  },
  whis: {
    100: '#0f75bd',
    10: '#87bade',
  },
  frieza: {
    100: '#5c33cf',
    10: '#b6a3e9',
  },
  nappa: {
    100: '#725550',
    10: '#b8aaa7',
  },
  popo: {
    100: '#000',
  },
};

export default supportColors;
