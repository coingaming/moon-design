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
  brand: '#0cd664',
  highlight: '#19A9E2',
  secondary: '#31373F',
  optional: '#010812',
  text: '#fff',
  error: '#ff4e64',
  warning: '#FFD600',
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
    10: '#fff',
    20: '#8697a2',
    30: '#586a74',
    40: '#415662',
    50: '#304854',
    60: '#31373F',
    65: '#212730',
    70: '#1A212A',
    75: '#0E141E',
    80: '#010812',
    90: '#010812',
    100: '#000',
  },
};

export { Colors, colors };
