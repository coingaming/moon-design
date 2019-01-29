import { css } from '@emotion/core';

export const boxSizing = css`
  /**
   * Set the global 'box-sizing' state to 'border-box'.
   */
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
