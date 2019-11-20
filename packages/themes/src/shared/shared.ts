import { ColorShared } from '../types/color';
import { Theme } from '../types/theme';
import { Omit } from '../types/utils';

import { color } from './private/color';

/**
 * Shared Theme Base
 *
 * `shared` is not a theme itself, more a core set of values used as a
 * foundational layer for each theme.
 *
 * As colors change per brand, we're only interested in typing the shared color
 * palettes here.
 */
type OmitBrand = Omit<Theme, 'brand'>;
type OmitColorScheme = Omit<OmitBrand, 'colorScheme'>;

type Shared = Omit<OmitColorScheme, 'color'> & {
  color: ColorShared;
};

const base = {
  fontSize: 14,
  lineHeight: 20,
  space: 16,
};

const borderStyle = 'solid';
const borderWidth = 1;
const border = `${borderWidth}px ${borderStyle}`;

const breakpoint = {
  small: 500,
  medium: 800,
  large: 1080,
  xlarge: 1200,
};

const fontFace = undefined;

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

const fontWeight = {
  normal: 400,
  semibold: 600,
  bold: 700,
};

const radius = {
  small: base.space * 0.25,
  default: base.space * 0.5,
  largest: 100,
};

const space = {
  xsmall: base.space * 0.25,
  small: base.space * 0.5,
  default: base.space,
  medium: base.space * 1.5,
  large: base.space * 2,
  xlarge: base.space * 2.5,
};

const transitionDuration = {
  slow: 0.4,
  default: 0.2,
};

export const shared: Shared = {
  base,
  borderStyle,
  borderWidth,
  border,
  breakpoint,
  color,
  fontFace,
  fontFamily,
  fontWeight,
  radius,
  space,
  transitionDuration,
};
