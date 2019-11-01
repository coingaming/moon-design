import { CSSObject } from 'styled-components';
import { base, colors, typography } from '@heathmont/sportsbet-tokens';
import { rem } from '@heathmont/sportsbet-utils';

/**
 * 1. Prevent automatic zooming of fonts on some mobile devices.
 * 2. Consistent font display behavior on OSX.
 */
export const page: CSSObject = {
  html: {
    backgroundColor: colors.background,
    fontSize: rem(base.spacing),
    lineHeight: base.lineHeight / base.spacing,
    fontFamily: typography.fontFamily,
    color: colors.text,
    minHeight: '100%',
    textSizeAdjust: '100%' /* [1] */,
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale' /* [2] */,
    WebkitFontSmoothing: 'antialiased' /* [2] */,
  },
  body: {
    fontSize: rem(base.fontSize),
  },
};
