import { CSSObject } from 'styled-components';

// TODO configure this url in the app itself
const cdnUrl = 'https://sportsbet.io/sportsbet-io/files';
const fontDirPath = `${cdnUrl}/fonts/averta-std`;
const fontFilePath = {
  regular: `${fontDirPath}/regular`,
  semibold: `${fontDirPath}/semibold`,
};

const fontFamily = 'Averta Std';
const fontStack = `${fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`;
const fontStyle = 'normal';
const fontDisplay = 'swap';
const fontWeight = {
  normal: 400,
  semibold: 500,
};
const unicodeRange = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';

const fontFace: CSSObject[] = [
  {
    '@font-face': {
      fontFamily,
      fontStyle,
      fontDisplay,
      unicodeRange,
      fontWeight: fontWeight.normal,
      src: `local("AvertaStd-Regular"), local("Averta Std Regular"), url(${fontFilePath.regular}.woff2) format("woff2")`,
    },
  },
  {
    '@font-face': {
      fontFamily,
      fontStyle,
      fontDisplay,
      unicodeRange,
      fontWeight: fontWeight.semibold,
      src: `local("AvertaStd-Semibold"), local("Averta Std Semibold"), url(${fontFilePath.semibold}.woff2) format("woff2")`,
    },
  },
];

export const avertaStd = {
  fontDirPath,
  fontFilePath,
  fontFamily,
  fontStack,
  fontStyle,
  fontWeight,
  fontFace,
  unicodeRange,
};

export default avertaStd;
