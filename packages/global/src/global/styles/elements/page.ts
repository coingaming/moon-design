import { rem } from '@heathmont/moon-utils';

/**
 * 1. Prevent automatic zooming of fonts on some mobile devices.
 * 2. Consistent font display behavior on OSX.
 */
const page = ({ colorNew, base, fontFamily, fontSize }: any) => ({
  html: {
    backgroundColor: colorNew.goku,
    fontSize: base.fontSize,
    lineHeight: base.lineHeight / base.fontSize,
    fontFamily,
    color: colorNew.bulma,
    minHeight: '100%',
    textSizeAdjust: '100%' /* [1] */,
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale' /* [2] */,
    WebkitFontSmoothing: 'antialiased' /* [2] */,
  },
  body: {
    fontSize: rem(fontSize.body, base.fontSize),
  },
});

export default page;
