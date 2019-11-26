import { avertaStd } from '@heathmont/sportsbet-fonts';

const greens = {
  100: '#0CD664',
  80: '#50E190',
  60: '#66E59E',
  40: '#85EAB2',
  20: '#9EEFC1',
  10: '#B6F3D0',
};

export const sportsbet = {
  color: {
    piccolo: greens,
    popo: greens,
    dende: {
      100: '#DBE0E3',
      80: '#DFE3E6',
      60: '#E2E6E9',
      40: '#E6E9EB',
      20: '#E9ECEE',
      10: '#EDEFF1',
    },
    trunks: {
      100: '#8697A2',
      80: '#92A1AB',
      60: '#98A7B0',
      40: '#9EACB5',
      20: '#A4B1B9',
      10: '#AAB6BE',
    },
  },
  font: {
    fontFace: avertaStd.fontFace,
    fontFamily: avertaStd.fontStack,
    fontWeight: avertaStd.fontWeight,
  },
};
