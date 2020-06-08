import { CSSObject } from 'styled-components';
import { rem } from '@heathmont/moon-utils';

type ButtonSizes = keyof ButtonSizeStyles;

type ButtonSizeStyles = {
  xsmall: CSSObject;
  small: CSSObject;
  medium: CSSObject;
  large: CSSObject;
};

/**
 * buttonSize
 *
 * Styles that extend `buttonBase` to change the button's cosmetic appearance.
 * Accessed via `buttonSize(key)(theme)`.
 */
const buttonSize = (key: ButtonSizes) => () => {
  const themedStyles: ButtonSizeStyles = {
    xsmall: {
      fontSize: rem(12),
      lineHeight: rem(16),
      padding: `${rem(8)} ${rem(16)}`,
    },
    small: {
      fontSize: rem(14),
      lineHeight: rem(16),
      padding: `${rem(12)} ${rem(20)}`,
    },
    medium: {
      fontSize: rem(16),
      lineHeight: 1.5,
      padding: `${rem(12)} ${rem(24)}`,
    },
    large: {
      fontSize: rem(18),
      lineHeight: 1.33,
      padding: `${rem(16)} ${rem(32)}`,
    },
  };

  return themedStyles[key];
};

export { buttonSize, ButtonSizes };
