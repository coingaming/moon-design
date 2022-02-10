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

const supportiveColors: SupportiveColors = {
  krillin: {
    100: '#ffb319',
    60: '#ffc652',
    10: '#ffd98d',
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
    100: '#d33030',
    60: '#db4e4e',
    10: '#f06767',
  },
  cell: {
    100: '#95f1d5',
    60: '#a2fadf',
    10: '#bfffec',
  },
  raditz: {
    100: '#b3804a',
    60: '#c1915d',
    10: '#d6a979',
  },
  whis: {
    100: '#3448f0',
    60: '#6777f8',
    10: '#8490f9',
  },
  frieza: {
    100: '#5c33cf',
    60: '#734dde',
    10: '#9271ef',
  },
  nappa: {
    100: '#725550',
    60: '#856a66',
    10: '#a18681',
  },
};

export default supportiveColors;
