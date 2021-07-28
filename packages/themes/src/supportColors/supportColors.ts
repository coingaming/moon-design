import { CSSObject } from 'styled-components';

export type ColorValue = CSSObject['color'];

interface SupportingColor {
  100?: ColorValue;
  10?: ColorValue;
};

interface SingletonColor {
  100: ColorValue;
};

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
};

const supportColors: ColorShared = {
  // Warning colors
  krillin: {
    100: '#FFB319',
    10: '#FFE4AD',
  },
  // Error colors
  chiChi: {
    100: '#FF4E64',
    10: '#FFA7B2',
  },
  // Success colors
  roshi: {
    100: '#0CD664',
    10: '#B6F3D0',
  },
  dodoria: {
    100: '#D33030',
    10: '#E99797',
  },
  cell: {
    100: '#0AB758',
    10: '#84DBAB',
  },
  raditz: {
    100: '#B3804A',
    10: '#D9BFA4',
  },
  whis: {
    100: '#0F75BD',
    10: '#87BADE',
  },
  frieza: {
    100: '#5C33CF',
    10: '#B6A3E9',
  },
  nappa: {
    100: '#725550',
    10: '#B8AAA7',
  },
  popo: {
    100: '#000',
  },
};

export default supportColors;
