/** @jsx jsx */
import * as React from 'react';
import { CSSObject, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import rem from 'polished/lib/helpers/rem';
import { border, typography, base } from '@heathmont/sportsbet-tokens';
import { spacing, disabled } from '@heathmont/sportsbet-utils';

import { buttonModifiers, ButtonModifiers } from './modifiers';
import { outlineModifiers } from './outline';
import { buttonMockStateClass, ButtonMockState } from './states';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  href?: string;
  modifier: ButtonModifiers;
  disabled?: boolean;
  mockState?: ButtonMockState;
  fullWidth?: boolean;
  uppercase?: boolean;
  outline?: boolean;
  round?: boolean;
  onClick?: () => void;
  as?: 'button' | 'a';
};

/**
 * Styles
 */
const button: CSSObject = {
  padding: `${spacing('small')} ${spacing('medium')}`,
  display: 'inline-block',
  verticalAlign: 'middle',
  fontFamily: 'inherit', // Prevents links rendering as system fonts.
  fontSize: base.fontSize,
  fontWeight: typography.fontWeight.semibold,
  lineHeight: rem(18),
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: 'transparent',
  borderRadius: border.radius.small,
  ...disabled(),
};

/**
 * Component
 */
const StyledButton: React.FC<ButtonProps> = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'as',
})(({ modifier, outline, uppercase, round, fullWidth }) => [
  button,
  modifier && buttonModifiers[modifier],
  outline && outlineModifiers[modifier],
  uppercase && { textTransform: 'uppercase' },
  round && { borderRadius: rem(100) },
  fullWidth && { width: '100%' },
]);

const Button: React.FC<ButtonProps> = ({ children, mockState, ...props }) => {
  return (
    <StyledButton
      className={mockState && buttonMockStateClass(mockState)}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  modifier: 'primary',
};

export { Button, ButtonProps };
