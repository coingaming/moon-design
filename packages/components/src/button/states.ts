export type ButtonMockState = 'active' | 'focus';

/**
 * buttonMockStateClass
 *
 * Generates a SMACSS-style state class, intended to be added alongside
 * traditional CSS `:state` selectors. This allows us to mock the appearance of
 * a button's state for documentation / purely stylistic purposes.
 */
export const buttonMockStateClass = (state: ButtonMockState) =>
  ({
    active: 'is-active',
    focus: 'has-focus'
  }[state]);

/**
 * buttonActive
 *
 * Wraps styles with the appropriate "active"-style selectors.
 */
export const buttonActive = (styles: object) => ({
  [`
    &.${buttonMockStateClass('active')},
    &.${buttonMockStateClass('focus')},
    &:hover,
    &:active,
    &:focus
  `]: {
    '&:not([disabled])': {
      ...styles
    }
  }
});

/**
 * buttonFocus
 *
 * Wraps styles with the appropriate "focus"-style selectors.
 */
export const buttonFocus = (styles: object) => ({
  [`
    &.${buttonMockStateClass('focus')},
    &:focus
  `]: {
    ...styles
  }
});
