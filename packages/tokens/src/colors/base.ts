import { palette, Palette } from './private/palette';
import { Color, NeutralColors } from './private/types';

const { bulma, gohan, goku, hit, piccolo, trunks, chichi, krillin } = palette;

const colors: {
  background: Color;
  border: Color;
  brand: Color;
  error: Color;
  neutral: NeutralColors;
  palette: Palette;
  text: Color;
  warning: Color;
} = {
  background: goku[100],
  brand: piccolo[100],
  border: gohan[100],
  error: chichi[100],
  palette,
  neutral: {
    // @TODO will be refactored
    10: bulma[100],
    20: trunks[100],
    30: goku[80],
    40: goku[40],
    50: goku[80],
    60: gohan[100],
    70: gohan[100],
    90: hit[80],
  },
  text: bulma[100],
  warning: krillin[40],
};

export { colors };
