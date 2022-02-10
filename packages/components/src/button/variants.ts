import { Theme } from '@heathmont/moon-themes';
import { CSSObject } from 'styled-components';

import { buttonActive, buttonHover } from './states';

type ButtonVariants = keyof ButtonVariantStyles;

type ButtonVariantStyles = {
  primary: CSSObject;
  secondary: CSSObject;
  tertiary: CSSObject;
  highlight: CSSObject;
  default: CSSObject;
};

/**
 * Styles that extend `buttonBase` to change the button's cosmetic appearance.
 * Accessed via `buttonVariant(key)(theme)`.
 *
 * For usage guidelines, see the README.
 */
const buttonVariant =
  (key: ButtonVariants) =>
  ({ color }: Theme) => {
    const themedStyles: ButtonVariantStyles = {
      primary: {
        color: color.goten[100],
        backgroundColor: color.piccolo[100],
        ...buttonHover({
          backgroundColor: color.piccolo[80],
        }),
        ...buttonActive({
          backgroundColor: color.piccolo[120],
          outline: 'none',
        }),
      },
      secondary: {
        color: color.bulma[100],
        backgroundColor: color.hit[100],
        ...buttonHover({
          backgroundColor: color.hit[80],
        }),
        ...buttonActive({
          backgroundColor: color.hit[120],
          outline: 'none',
        }),
      },
      tertiary: {
        color: color.bulma[100],
        backgroundColor: 'transparent',
        border: `1px solid ${color.bulma[100]}`,
        ...buttonHover({
          backgroundColor: color.hit[80],
        }),
        ...buttonActive({
          backgroundColor: color.hit[120],
          outline: 'none',
        }),
      },
      highlight: {
        color: color.goten[100],
        backgroundColor: color.whis[100],
        ...buttonHover({
          opacity: 0.9,
        }),
        ...buttonActive({
          opacity: 0.8,
          outline: 'none',
        }),
      },
      default: {
        color: color.bulma[100],
        background: 'none',
        ...buttonHover({
          color: color.bulma[100],
        }),
        ...buttonActive({
          color: color.bulma[100],
          outline: 'none',
        }),
      },
    };

    return themedStyles[key];
  };

/**
 * buttonShadow
 *
 * Removes user-agent `:focus` styles and generates a box-shadow using the
 * color provided.
 */
export const buttonShadow =
  (color: string) =>
  ({ space }: Theme): CSSObject => ({
    outline: 'none',
    boxShadow: `0 0 ${space.default}px ${color}`,
  });

export type { ButtonVariants };
export { buttonVariant };

export default { buttonVariant };
