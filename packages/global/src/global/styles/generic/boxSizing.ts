import { CSSObject } from 'styled-components';

const boxSizing: CSSObject = {
  html: {
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
};

export default boxSizing;
