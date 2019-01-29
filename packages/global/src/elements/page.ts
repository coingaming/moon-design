import { css } from '@emotion/core';
import { rem } from 'polished';
import { base, colors } from '@heathmont/sportsbet-tokens';

const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

export const page = css`
  /**
   * 1. Prevent automatic zooming of fonts on some mobile devices.
   * 2. Consistent font display behavior on OSX.
   */
  html {
    background-color: ${colors.neutral[80]};
    font-size: ${rem(base.fontSize)};
    line-height: ${base.lineHeight / base.fontSize};
    font-family: ${base.fontFace}, ${systemFontStack};
    color: ${colors.text};
    min-height: 100%;
    text-size-adjust: 100%; /* [1] */
    -moz-osx-font-smoothing: grayscale; /* [2] */
    -webkit-font-smoothing: antialiased; /* [2] */
  }
`;
