type Colors = {
  brand: string;
  highlight: string;
  secondary: string;
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
  };
  neutral: {
    [key: number]: string;
  };
};

const colors: Colors = {
  brand: '#0cd664',
  highlight: '#19A9E2',
  secondary: '#1A212A',
  text: '#ffffff',
  error: '#ff4e64',
  warning: '#FFD600',
  alternate: {
    brand: {
      10: '#0BC15A',
      20: '#0AAB50',
    },
    highlight: {
      10: '#1798CB',
      20: '#1590C0',
    },
    secondary: {
      10: '#798892',
      20: '#72808A',
    },
  },
  neutral: {
    10: '#fff',
    20: '#8697a2',
    30: '#586a74',
    40: '#415662',
    50: '#304854',
    60: '#31373F',
    70: '#1A212A',
    80: '#010812',
    90: '#010812',
    100: '#000',
  },
};

export { Colors, colors };
