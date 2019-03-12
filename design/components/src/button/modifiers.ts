import { CSSObject } from '@emotion/core';
import { colors, typography } from '@heathmont/sportsbet-tokens';
import { buttonShadow, buttonDisabled } from './mixins';
import { buttonActive, buttonFocus } from './states';

type ButtonModifiers = 'primary' | 'secondary' | 'optional' | 'alternate';

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
  ...buttonActive({
    backgroundColor: colors.highlight,
  }),
  ...buttonFocus({
    ...buttonShadow(colors.brand),
  }),
};

const secondary: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: 'transparent',
  borderColor: colors.brand,
  ...buttonActive({
    color: colors.highlight,
    backgroundColor: 'transparent',
    borderColor: colors.highlight,
  }),
  ...buttonFocus({
    ...buttonShadow(colors.brand),
  }),
  ...buttonDisabled('border'),
};

const optional: CSSObject = {
  textTransform: 'capitalize',
  fontWeight: typography.fontWeight.normal,
  backgroundColor: 'transparent',
  borderColor: colors.neutral[20],
  color: colors.neutral[20],
  ...buttonActive({
    color: colors.highlight,
    backgroundColor: 'transparent',
    borderColor: colors.highlight,
  }),
  ...buttonFocus({
    ...buttonShadow(colors.brand),
  }),
  ...buttonDisabled('border'),
};

const alternate: CSSObject = {
  color: colors.neutral[10],
  backgroundColor: colors.alternate.brand,
  ...buttonActive({
    backgroundColor: colors.alternate.highlight,
  }),
  ...buttonFocus({
    ...buttonShadow(colors.alternate.brand),
  }),
};

const buttonModifiers = {
  primary,
  secondary,
  optional,
  alternate,
};

export { buttonModifiers, ButtonModifiers };
