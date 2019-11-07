import { CSSObject } from 'styled-components';

export const boxSizing: CSSObject = {
  html: {
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
};
