type Colors = {
  brand: string;
  highlight: string;
  text: string;
  error: string;
  alternate: {
    brand: string;
    highlight: string;
  };
  neutral: {
    [key: number]: string;
  };
};

const colors: Colors = {
  brand: '#0cd664',
  highlight: '#00e865',
  text: '#ffffff',
  error: '#ff4e64',
  alternate: {
    brand: '#19a9e2',
    highlight: '#00b7ff',
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
