import { palette, BaseColor } from './palette';

const { bulma, gohan, goku, hit, piccolo, trunks, chichi, krillin } = palette;

const colors: {
  brand: string;
  error: string;
  warning: string;
  neutral: BaseColor;
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  palette: any;
} = {
  palette,
  brand: piccolo[100],
  error: chichi[100],
  warning: krillin[100],
  neutral: {
    // TODO will be refactored
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

export { colors };
