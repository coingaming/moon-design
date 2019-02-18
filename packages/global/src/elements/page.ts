import { css } from '@emotion/core';
import { rem } from 'polished';
import { base, colors, typography } from '@heathmont/sportsbet-tokens';

export const page = css`
  /**
   * 1. Prevent automatic zooming of fonts on some mobile devices.
   * 2. Consistent font display behavior on OSX.
   */
  html {
    background-color: ${colors.neutral[80]};
    font-size: ${rem(base.fontSize)};
    line-height: ${base.lineHeight / base.fontSize};
    font-family: ${typography.fontFamily};
    color: ${colors.text};
    min-height: 100%;
    text-size-adjust: 100%; /* [1] */
    font-display: swap;
    -moz-osx-font-smoothing: grayscale; /* [2] */
    -webkit-font-smoothing: antialiased; /* [2] */
    text-rendering: optimizeLegibility;
  }
`;
