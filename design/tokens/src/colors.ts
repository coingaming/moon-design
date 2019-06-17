import {
  BaseColors,
  bulma,
  cell,
  chichi,
  dodoria,
  frieza,
  gohan,
  goku,
  hit,
  krillin,
  nappa,
  piccolo,
  raditz,
  trunks,
  vegeta,
  whis,
} from './coreColors';

const primaryColors: { brand: string; text: string; neutral: BaseColors } = {
  brand: piccolo[100],
  text: bulma[100],
  neutral: {
    10: bulma[100],
    20: trunks[100],
    30: goku[80],
    40: goku[40],
    50: goku[80],
    60: gohan[100],
    70: gohan[100],
    90: hit[80],
  },
};

type GenericStates = 'success' | 'error' | 'warning' | 'info';

const stateColors: { [key in GenericStates]: string } = {
  success: piccolo[100],
  error: chichi[100],
  warning: krillin[100],
  info: vegeta[100],
};

type ButtonTypes = 'primary' | 'highlight' | 'secondary' | 'optional';
type ButtonStates = 'default' | 'hover' | 'active' | 'focus' | 'disabled';

const buttonColors: {
  [key in ButtonTypes]: { [key in ButtonStates]: string }
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

const sportsColors: { [key: string]: string } = {
  rugby: krillin[100],
  horseRacing: cell[100],
  americanFootBall: krillin[100],
  footBall: dodoria[100],
  ski: vegeta[100],
  badminton: vegeta[100],
  golf: raditz[100],
  snooker: raditz[100],
  baseBall: nappa[100],
  handBall: frieza[100],
  basketBall: raditz[100],
  iceHockey: vegeta[100],
  special: cell[100],
  biathlon: vegeta[100],
  mma: krillin[100],
  squash: krillin[100],
  boxing: dodoria[100],
  motorSports: dodoria[100],
  tableTennis: whis[100],
  cricket: krillin[100],
  politics: cell[100],
  tennis: raditz[100],
  cycling: krillin[100],
  pool: raditz[100],
  volleyBall: whis[100],
  darts: dodoria[100],
  popular: frieza[100],
  waterPolo: whis[100],
  eSports: frieza[100],
  sinuca: raditz[100],
};

// deprecated

type Colors = {
  brand: string;
  highlight: string;
  secondary: string;
  optional: string;
  text: string;
  error: string;
  warning: string;
  alternate: {
    brand: {
      [key: number]: string;
    };
    highlight: {
      [key: number]: string;
    };
    secondary: {
      [key: number]: string;
    };
    optional: {
      [key: number]: string;
    };
  };
  neutral: {
    [key: number]: string;
  };
};

const colors: Colors = {
  brand: piccolo[100],
  highlight: '#19A9E2',
  secondary: gohan[100],
  optional: hit[80],
  text: bulma[100],
  error: chichi[100],
  warning: krillin[100],
  alternate: {
    brand: {
      10: '#00E865',
      20: '#05BF56',
    },
    highlight: {
      10: '#1798CB',
      20: '#1590C0',
    },
    secondary: {
      10: '#414852',
      20: '#292F37',
    },
    optional: {
      10: '#292F36',
      20: '#262B34',
      30: '#323843',
    },
  },
  neutral: {
    10: bulma[100],
    20: trunks[100],
    30: goku[80],
    40: goku[40],
    50: goku[80],
    60: gohan[100],
    70: gohan[100],
    90: hit[80],
  },
};

export {
  Colors,
  colors,
  sportsColors,
  buttonColors,
  primaryColors,
  stateColors,
};
