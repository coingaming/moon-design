import { Color } from './color';
import { ColorScheme } from './color-scheme';
import { Base } from './base';
import { Brand } from './brand';
import { Border, BorderWidth, BorderStyle } from './border';
import { Breakpoint } from './breakpoint';
import { Space } from './space';
import { Radius } from './radius';
import { FontFace, FontFamily, FontWeight } from './font';
import { transitionDuration } from './transition';

export type Theme = {
  brand: Brand;
  colorScheme: ColorScheme;
  base: Base;
  border: Border;
  borderWidth: BorderWidth;
  borderStyle: BorderStyle;
  breakpoint: Breakpoint;
  color: Color;
  fontFace?: FontFace;
  fontFamily: FontFamily;
  fontWeight: FontWeight;
  radius: Radius;
  space: Space;
  transitionDuration: transitionDuration;
};
