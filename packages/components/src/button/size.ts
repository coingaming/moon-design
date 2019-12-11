import { CSSObject } from 'styled-components';
import { rem } from '@heathmont/sportsbet-utils';
import { Theme } from '@heathmont/sportsbet-themes';

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
const buttonSize = (key: ButtonSizes) => ({ space }: Theme) => {
  const themedStyles: ButtonSizeStyles = {
    xsmall: {
      fontSize: rem(12),
      lineHeight: rem(15),
      padding: `${rem(space.xsmall)} ${rem(space.medium)}`,
    },
    small: {
      fontSize: rem(14),
      lineHeight: rem(17),
      padding: `${rem(space.small)} ${rem(space.large)}`,
    },
    medium: {
      fontSize: rem(16),
      lineHeight: rem(17),
      padding: `${rem(12)} ${rem(space.xlarge)}`,
    },
    large: {
      fontSize: rem(16),
      lineHeight: rem(17),
      padding: `${rem(space.default)} ${rem(72)}`,
    },
  };

  return themedStyles[key];
};

export { buttonSize, ButtonSizes };
