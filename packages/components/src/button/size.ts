import { rem } from '@heathmont/moon-utils';
import { CSSObject } from 'styled-components';

import { ButtonVariants } from './variants';

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
const buttonSize = (key: ButtonSizes) => (variant?: ButtonVariants) => {
  const themedStyles: ButtonSizeStyles = {
    xsmall: {
      fontSize: rem(12),
      lineHeight: rem(16),
      height: variant === 'default' ? '' : rem(32),
      padding: variant === 'default' ? 0 : `0 ${rem(16)}`,
    },
    small: {
      fontSize: rem(14),
      lineHeight: rem(20),
      height: variant === 'default' ? '' : rem(40),
      padding: variant === 'default' ? 0 : `0 ${rem(20)}`,
    },
    medium: {
      fontSize: rem(16),
      lineHeight: rem(24),
      height: variant === 'default' ? '' : rem(48),
      padding: variant === 'default' ? 0 : `0 ${rem(24)}`,
    },
    large: {
      fontSize: rem(18),
      lineHeight: rem(24),
      height: variant === 'default' ? '' : rem(56),
      padding: variant === 'default' ? 0 : `0 ${rem(32)}`,
    },
  };

  return themedStyles[key];
};

export type { ButtonSizes };
export { buttonSize };

export default { buttonSize };
