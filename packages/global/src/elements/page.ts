import { css } from '@emotion/core';
import { rem } from 'polished';
import { base, colors, typography } from '@heathmont/sportsbet-tokens';

/**
 * 1. Prevent automatic zooming of fonts on some mobile devices.
 * 2. Consistent font display behavior on OSX.
 */
export const page = css({
  html: {
    backgroundColor: colors.neutral[80],
    fontSize: rem(base.fontSize),
    lineHeight: base.lineHeight / base.fontSize,
    fontFamily: typography.fontFamily,
    color: colors.text,
    minHeight: '100%',
    textSizeAdjust: '100%' /* [1] */,
    fontDisplay: 'swap',
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale' /* [2] */,
    WebkitFontSmoothing: 'antialiased' /* [2] */,
  },
});
