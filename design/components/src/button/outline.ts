import { CSSObject } from '@emotion/core';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { buttonActive, buttonHover } from './states';

/**
 * buttonModifiers
 *
 * Styles that extend `buttonBase` to change the button's cosmetic appearance.
 * Accessed via `buttonModifiers[key]`.
 *
 * For usage guidelines, see the README.
 */
const primary: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: 'transparent',
  border: `${border.width}px solid ${colors.brand}`,
  ...buttonHover({
    backgroundColor: colors.brand,
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.brand[10],
    border: `${border.width}px solid ${colors.alternate.brand[10]}`,
  }),
};

const highlight = {
  color: colors.neutral[10],
  backgroundColor: 'transparent',
  border: `${border.width}px solid ${colors.highlight}`,
  ...buttonHover({
    backgroundColor: colors.highlight,
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.highlight[10],
    border: `${border.width}px solid ${colors.alternate.highlight[10]}`,
  }),
};

const secondary: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: 'transparent',
  border: `${border.width}px solid ${colors.secondary}`,
  ...buttonHover({
    backgroundColor: colors.secondary,
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.secondary[10],
    border: `${border.width}px solid ${colors.alternate.secondary[10]}`,
  }),
};

const optional: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: 'transparent',
  border: `${border.width}px solid ${colors.secondary}`,
  ...buttonHover({
    backgroundColor: colors.secondary,
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.secondary[10],
    border: `${border.width}px solid ${colors.alternate.secondary[10]}`,
  }),
};

const outlineModifiers = {
  primary,
  highlight,
  secondary,
  optional,
};

export { outlineModifiers };
