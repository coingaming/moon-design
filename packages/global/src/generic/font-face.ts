import { css } from '@emotion/core';
import { base, typography } from '@heathmont/sportsbet-tokens';
import { fontUrls } from '@heathmont/sportsbet-assets';

/**
 * Define all custom `@font-face` declarations.
 */
export const fontFace = css`
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.normal};
    src: local('AvertaStd-Regular'), local('Averta Std Regular'),
      url(${fontUrls.AvertaStd.regular}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.semibold};
    src: local('AvertaStd-Semibold'), local('Averta Std Semibold'),
      url(${fontUrls.AvertaStd.semibold}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.bold};
    src: local('AvertaStd-Bold'), local('Averta Std Bold'),
      url(${fontUrls.AvertaStd.bold}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;
