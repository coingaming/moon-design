import { CSSObject } from 'styled-components';

export type FontFace = CSSObject | CSSObject[] | undefined;

export type FontFamily = string;

export type FontWeight = {
  normal: number;
  semibold: number;
  bold: number;
};
