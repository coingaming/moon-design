import { CSSObject } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { buttonActive, buttonHover, buttonDisabled } from './states';
import { spacing } from '@heathmont/sportsbet-utils';

type ButtonModifiers = 'primary' | 'highlight' | 'secondary';

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
  backgroundColor: colors.brand,
  ...buttonHover({
    backgroundColor: colors.alternate.brand[10],
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.brand[20],
  }),
};

const highlight = {
  color: colors.neutral[10],
  backgroundColor: colors.highlight,
  ...buttonHover({
    backgroundColor: colors.alternate.highlight[10],
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.highlight[20],
  }),
};

const secondary: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.secondary,
  ...buttonHover({
    backgroundColor: colors.alternate.secondary[10],
  }),
  ...buttonActive({
    backgroundColor: colors.alternate.secondary[20],
  }),
};

/**
 * buttonShadow
 *
 * Removes user-agent `:focus` styles and generates a box-shadow using the
 * color provided.
 */
export const buttonShadow: (color: string) => CSSObject = color => ({
  outline: 'none',
  boxShadow: `0 0 ${spacing('default', 'px')} ${color}`,
});

const buttonModifiers = {
  primary,
  highlight,
  secondary,
};

export { buttonModifiers, ButtonModifiers };
