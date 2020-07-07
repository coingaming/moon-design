import { CSSObject } from 'styled-components';
import { Theme } from '@heathmont/moon-themes';

import { buttonActive, buttonHover } from './states';

type ButtonVariants = keyof ButtonVariantStyles;

type ButtonVariantStyles = {
  primary: CSSObject;
  secondary: CSSObject;
  tertiary: CSSObject;
  highlight: CSSObject;
  optional: CSSObject; // TODO remove
};

/**
 * Styles that extend `buttonBase` to change the button's cosmetic appearance.
 * Accessed via `buttonVariant(key)(theme)`.
 *
 * For usage guidelines, see the README.
 */
const buttonVariant = (key: ButtonVariants) => ({ color }: Theme) => {
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
      backgroundColor: color.gohan[100],
      ...buttonHover({
        backgroundColor: color.gohan[80],
      }),
      ...buttonActive({
        backgroundColor: color.gohan[100],
        outline: 'none',
      }),
    },
    tertiary: {
      color: color.bulma[100],
      backgroundColor: 'inherit',
      border: `1px solid ${color.piccolo[100]}`,
      ...buttonHover({
        color: color.goten[100],
        backgroundColor: color.piccolo[100],
      }),
      ...buttonActive({
        color: color.goten[100],
        backgroundColor: color.piccolo[100],
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
    // TODO remove
    optional: {
      color: color.trunks[100],
      backgroundColor: color.gohan[80],
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
export const buttonShadow = (color: string) => ({
  space,
}: Theme): CSSObject => ({
  outline: 'none',
  boxShadow: `0 0 ${space.default}px ${color}`,
});

export { buttonVariant, ButtonVariants };
