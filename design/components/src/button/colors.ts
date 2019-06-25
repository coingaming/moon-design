import { colors } from '@heathmont/sportsbet-tokens';

const { piccolo, goku, vegeta, gohan, hit, chichi, krillin } = colors.palette;

type ButtonTypes = 'primary' | 'highlight' | 'secondary' | 'optional';
type ButtonStates = 'default' | 'hover' | 'active' | 'focus' | 'disabled';

export const buttonColors: {
  [key in ButtonTypes]: { [key in ButtonStates]: string };
} = {
  primary: {
    default: piccolo[100],
    hover: piccolo[60],
    active: piccolo[100],
    focus: piccolo[100],
    disabled: goku[100],
  },
  highlight: {
    default: vegeta[100],
    hover: vegeta[60],
    active: vegeta[100],
    focus: vegeta[100],
    disabled: goku[100],
  },
  secondary: {
    default: gohan[100],
    hover: gohan[60],
    active: gohan[100],
    focus: gohan[100],
    disabled: goku[100],
  },
  optional: {
    default: hit[100],
    hover: hit[100],
    active: hit[100],
    focus: hit[100],
    disabled: goku[100],
  },
};

type GenericStates = 'success' | 'error' | 'warning' | 'info';

const stateColors: { [key in GenericStates]: string } = {
  success: piccolo[100],
  error: chichi[100],
  warning: krillin[100],
  info: vegeta[100],
};
