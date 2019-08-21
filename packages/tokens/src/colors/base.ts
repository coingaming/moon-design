import { palette, BaseColor } from './palette';

const { bulma, gohan, goku, hit, piccolo, trunks, chichi, krillin } = palette;

const colors: {
  background: string;
  border: string;
  brand: string;
  error: string;
  neutral: BaseColor;
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  palette: any;
  text: string;
  warning: string;
} = {
  background: goku[100],
  brand: piccolo[100],
  border: gohan[100],
  error: chichi[100],
  palette,
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
  text: bulma[100],
  warning: krillin[40],
};

export { colors };
