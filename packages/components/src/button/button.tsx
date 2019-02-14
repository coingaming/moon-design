/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { rem } from 'polished';
import { border, typography } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

import { buttonDisabled } from './mixins';
import { buttonModifiers, ButtonModifiers } from './modifiers';
import { buttonMockStateClass, ButtonMockState } from './states';

type ButtonProps = {
  href?: string;
  modifier: ButtonModifiers;
  disabled?: boolean;
  mockState?: ButtonMockState;
  fullWidth?: boolean;
  spaced?: boolean;
};

/**
 * Styles
 */
const button = css([
  {
    padding: `${spacing('small')} ${spacing('medium')}`,
    display: 'inline-block',
    verticalAlign: 'middle',
    fontFamily: 'inherit', // Prevents links rendering as system fonts.
    fontSize: rem(14),
    fontWeight: typography.fontWeight.semibold,
    lineHeight: rem(18),
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderStyle: border.style,
    borderWidth: border.width,
    borderColor: 'transparent',
    borderRadius: border.radius.small,
  },
  buttonDisabled('solid'),
]);

const buttonSpaced = css({
  marginBottom: spacing(),
  '&:not(:last-child)': { marginRight: spacing() },
});

/**
 * Component
 */
const Button: React.FC<ButtonProps> = props => {
  const ButtonElement = !props.href ? 'button' : 'a';

  /**
   * The idea solution would be something like:
   *   return <ButtonElement/>
   * Unfortunately, TypeScript doesn't like this.
   * Issue: https://github.com/Microsoft/TypeScript/issues/28768
   *
   * Instead we use Emotion's `jsx` factory to render the React component,
   * making use of the `css` prop.
   */
  return jsx(ButtonElement, {
    css: [
      button,
      props.spaced && buttonSpaced,
      props.modifier && buttonModifiers[props.modifier],
      props.fullWidth && { width: '100%' },
    ],
    className: props.mockState && buttonMockStateClass(props.mockState),
    ...props,
  });
};

Button.defaultProps = {
  modifier: 'primary',
};

export { Button, ButtonProps };
