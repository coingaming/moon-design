import { CSSObject } from 'styled-components';
import { rem } from '@heathmont/sportsbet-utils';
import { Theme } from '@heathmont/sportsbet-themes';

/**
 * 1. Prevent automatic zooming of fonts on some mobile devices.
 * 2. Consistent font display behavior on OSX.
 */
export const page = ({ color, base, fontFamily }: Theme): CSSObject => ({
  html: {
    backgroundColor: color.background,
    fontSize: base.space,
    lineHeight: base.lineHeight / base.space,
    fontFamily,
    color: color.text,
    minHeight: '100%',
    textSizeAdjust: '100%' /* [1] */,
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale' /* [2] */,
    WebkitFontSmoothing: 'antialiased' /* [2] */,
  },
  body: {
    fontSize: rem(base.fontSize, base.space),
  },
});
