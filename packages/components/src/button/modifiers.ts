import { CSSObject } from 'styled-components';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

import { buttonActive, buttonHover } from './states';

type ButtonModifiers = 'primary' | 'highlight' | 'secondary' | 'optional';

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
    backgroundColor: colors.palette.piccolo[60],
  }),
  ...buttonActive({
    backgroundColor: colors.palette.piccolo[60],
  }),
};

const highlight = {
  color: colors.neutral[10],
  backgroundColor: colors.palette.vegeta[100],
  ...buttonHover({
    backgroundColor: colors.palette.vegeta[60],
  }),
  ...buttonActive({
    backgroundColor: colors.palette.vegeta[60],
  }),
};

const secondary: CSSObject = {
  color: colors.neutral[20],
  backgroundColor: colors.neutral[70],
  ...buttonHover({
    color: colors.neutral[10],
  }),
  ...buttonActive({
    color: colors.neutral[10],
  }),
};

const optional: CSSObject = {
  color: colors.neutral[20],
  backgroundColor: colors.neutral[90],
  border: `${border.width}px solid ${colors.neutral[70]}`,
  ...buttonHover({
    color: colors.neutral[10],
  }),
  ...buttonActive({
    color: colors.neutral[10],
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
  optional,
};

export { buttonModifiers, ButtonModifiers };
