type Colors = {
  brand: string;
  highlight: string;
  secondary: string;
  text: string;
  error: string;
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
  secondary: '#8697A2',
  text: '#ffffff',
  error: '#ff4e64',
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
    60: '#1a3442',
    70: '#142c37',
    80: '#12242e',
    90: '#0b1c25',
    100: '#000',
  },
};

export { Colors, colors };
