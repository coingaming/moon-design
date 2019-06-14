type BaseColors = { [key: number]: string };

const piccolo: BaseColors = {
  100: '#0CD664',
  80: '#24DA74',
  60: '#3DDE83',
  40: '#55E292',
  20: '#85EAB2',
};

const bulma: BaseColors = {
  100: '#fff',
  80: '#F3F5F6',
  60: '#EDEFF1',
  40: '#E7EAEC',
  20: '#DBE0E3',
};

const trunks: BaseColors = {
  100: '#8697A2',
  80: '#92A1AB',
  60: '#9EACB5',
  40: '#AAB6BE',
  20: '#C2CBD0',
};

const gohan: BaseColors = {
  100: '#31373F',
  80: '#3D434B',
  60: '#5A5F65',
  40: '#6F7379',
  20: '#989B9F',
};

const goku: BaseColors = {
  100: '#1F262F',
  80: '#353C44',
  60: '#4C5159',
  40: '#62676D',
  20: '#8F9297',
};

const roshi: BaseColors = {
  100: '#FF5111',
  80: '#FF6229',
  60: '#FF7441',
  40: '#FF8558',
  20: '#FFA888',
};

const whis: BaseColors = {
  100: '#0F75BD',
  80: '#2783C4',
  60: '#3F91CA',
  40: '#579ED1',
  20: '#87BADE',
};

const vegeta: BaseColors = {
  100: '#118BFF',
  80: '#2997FF',
  60: '#41A2FF',
  40: '#58AEFF',
  20: '#88C5FF',
};

const frieza: BaseColors = {
  100: '#9182DE',
  80: '#9C8EE1',
  60: '#A79BE5',
  40: '#B2A7E8',
  20: '#C8C0EF',
};

const krillin: BaseColors = {
  100: '#FFD600',
  80: '#FFDE33',
  60: '#FFE666',
  40: '#FFEF99',
  20: '#FFF7CC',
};

const cell: BaseColors = {
  100: '#0AB758',
  80: '#22BE69',
  60: '#3BC579',
  40: '#53CD8A',
  20: '#84DBAB',
};
const dodoria: BaseColors = {
  100: '#D33030',
  80: '#D74545',
  60: '#DC5959',
  40: '#E06E6E',
  20: '#E99797',
};
const raditz: BaseColors = {
  100: '#B3804A',
  80: '#BB8D5C',
  60: '#C2996E',
  40: '#CAA680',
  20: '#D9BFA4',
};

const nappa: BaseColors = {
  100: '#725550',
  80: '#806661',
  60: '#8E7773',
  40: '#9C8884',
  20: '#B8AAA7',
};
const chichi: BaseColors = {
  100: '#FF4E64',
  80: '#FF6074',
  60: '#FF7183',
  40: '#FF8392',
  20: '#FFA7B2',
};

const hit: BaseColors = {
  100: '#010812',
  80: '#1A212A',
  60: '#343941',
  40: '#4D5259',
  20: '#808388',
};

const primaryColors: { brand: string; neutral: BaseColors } = {
  brand: piccolo[100],
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
