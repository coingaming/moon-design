import { base } from './base';

const systemFontStack: string =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

type FontWeight = {
  normal: number;
  semibold: number;
  bold: number;
};

const fontWeight: FontWeight = {
  normal: 600,
  semibold: 600,
  bold: 700,
};

const fontFamily: string = `${base.fontFace}, ${systemFontStack}`;

const typography = {
  fontFamily,
  fontWeight,
};

export { FontWeight, typography };
