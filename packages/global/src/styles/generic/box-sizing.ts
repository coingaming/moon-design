import { CSSObject } from '@emotion/core';

export const boxSizing: CSSObject = {
  html: {
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
};
