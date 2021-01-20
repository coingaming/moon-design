import { Color } from './color';
import { ColorScheme } from './colorScheme';
import { Base } from './base';
import { Brand } from './brand';
import { Border, BorderWidth, BorderStyle } from './border';
import { BoxShadow } from './boxShadow';
import { Breakpoint } from './breakpoint';
import { FontFace, FontFamily, FontSize, FontWeight } from './font';
import { MaxWidth } from './maxWidth';
import { Opacity } from './opacity';
import { Radius } from './radius';
import { Space } from './space';
import { TransitionDuration, Transition } from './transition';
import { ZIndex } from './zIndex';

export type Theme = {
  brand: Brand;
  colorScheme: ColorScheme;
  base: Base;
  border: Border;
  borderWidth: BorderWidth;
  borderStyle: BorderStyle;
  boxShadow: BoxShadow;
  breakpoint: Breakpoint;
  color: Color;
  fontFace?: FontFace;
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  maxWidth: MaxWidth;
  opacity: Opacity;
  radius: Radius;
  space: Space;
  transitionDuration: TransitionDuration;
  transition: Transition;
  zIndex: ZIndex;
};

export default Theme;
