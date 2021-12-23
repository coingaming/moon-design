import { CSSObject } from 'styled-components';

type ColorValue = CSSObject['color'];

interface SupportiveColorValues {
  100: ColorValue;
  60: ColorValue;
  10: ColorValue;
}

export interface SupportiveColors {
  krillin: SupportiveColorValues; // Warning colors
  chiChi: SupportiveColorValues; // Error colors
  roshi: SupportiveColorValues; // Success colors
  dodoria: SupportiveColorValues;
  cell: SupportiveColorValues;
  raditz: SupportiveColorValues;
  whis: SupportiveColorValues;
  frieza: SupportiveColorValues;
  nappa: SupportiveColorValues;
}

const supportiveColors_v2: SupportiveColors = {
  krillin: {
    100: '#FFB319',
    60: '#FFC652',
    10: '#FFD98D',
  },
  chiChi: {
    100: '#FF4E64',
    60: '#FF7687',
    10: '#FF96A3',
  },
  roshi: {
    100: '#4AD15F',
    60: '#64DC77',
    10: '#7FF291',
  },
  dodoria: {
    100: '#D33030',
    60: '#DB4E4E',
    10: '#F06767',
  },
  cell: {
    100: '#95F1D5',
    60: '#A2FADF',
    10: '#BFFFEC',
  },
  raditz: {
    100: '#B3804A',
    60: '#C1915D',
    10: '#D6A979',
  },
  whis: {
    100: '#3448F0',
    60: '#6777F8',
    10: '#8490F9',
  },
  frieza: {
    100: '#5C33CF',
    60: '#734DDE',
    10: '#9271EF',
  },
  nappa: {
    100: '#725550',
    60: '#856A66',
    10: '#A18681',
  },
};

export default supportiveColors_v2;
