import { CSSObject } from 'styled-components';

type ButtonMockState = 'active' | 'focus' | 'hover';

/**
 * buttonMockStateClass
 *
 * Generates a SMACSS-style state class, intended to be added alongside
 * traditional CSS `:state` selectors. This allows us to mock the appearance of
 * a button's state for documentation / purely stylistic purposes.
 */
const buttonMockStateClass = (state: ButtonMockState) =>
({
  active: 'is-active',
  focus: 'has-focus',
  hover: 'is-hover',
}[state]);

/**
 * buttonActive
 *
 * Wraps styles with the appropriate "active"-style selectors.
 */
const buttonHover = (styles: CSSObject): CSSObject => ({
  [`
    &.${buttonMockStateClass('hover')},
    &:hover
  `]: {
    '&:not([disabled])': {
      ...styles,
    },
  },
});

/**
 * buttonFocus
 *
 * Wraps styles with the appropriate "focus"-style selectors.
 */
const buttonActive = (styles: CSSObject): CSSObject => ({
  [`
    &.${buttonMockStateClass('active')},
    &.${buttonMockStateClass('focus')},
    &:active,
    &:focus
  `]: {
    ...styles,
  },
});

export type { ButtonMockState };

export { buttonMockStateClass, buttonHover, buttonActive };

export default {
  buttonMockStateClass,
  buttonHover,
  buttonActive,
};
