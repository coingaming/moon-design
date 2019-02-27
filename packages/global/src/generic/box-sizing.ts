import { css } from '@emotion/core';

export const boxSizing = css({
  html: {
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
});
