import { CSSObject } from 'styled-components';
import { Theme } from '@heathmont/sportsbet-themes';

import { buttonActive, buttonHover } from './states';

type ButtonModifiers = keyof ButtonModifierStyles;

type ButtonModifierStyles = {
  primary: CSSObject;
  secondary: CSSObject;
  highlight: CSSObject;
  optional: CSSObject;
};

/**
 * buttonModifier
 *
 * Styles that extend `buttonBase` to change the button's cosmetic appearance.
 * Accessed via `buttonModifiers(key)(theme)`.
 *
 * For usage guidelines, see the README.
 */
const buttonModifier = (key: ButtonModifiers) => ({ color }: Theme) => {
  const themedStyles: ButtonModifierStyles = {
    primary: {
      color: color.goten[100],
      backgroundColor: color.piccolo[100],
      ...buttonHover({
        backgroundColor: color.piccolo[60],
      }),
      ...buttonActive({
        backgroundColor: color.piccolo[60],
      }),
    },
    secondary: {
      color: color.trunks[20],
      backgroundColor: color.gohan[100],
      ...buttonHover({
        color: color.bulma[100],
      }),
      ...buttonActive({
        color: color.bulma[100],
      }),
    },
    highlight: {
      color: color.goten[100],
      backgroundColor: color.whis[100],
      ...buttonHover({
        backgroundColor: color.whis[60],
      }),
      ...buttonActive({
        backgroundColor: color.whis[60],
      }),
    },
    optional: {
      color: color.trunks[100],
      backgroundColor: color.gohan[80],
      ...buttonHover({
        color: color.bulma[100],
      }),
      ...buttonActive({
        color: color.bulma[100],
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

export { buttonModifier, ButtonModifiers };
