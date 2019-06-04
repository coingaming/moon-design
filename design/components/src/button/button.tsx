/** @jsx jsx */
import * as React from 'react';
import { CSSObject, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import rem from 'polished/lib/helpers/rem';
import { border, typography, base, colors } from '@heathmont/sportsbet-tokens';
import { spacing, disabled } from '@heathmont/sportsbet-utils';

import { buttonModifiers, ButtonModifiers } from './modifiers';
import { buttonSizes, ButtonSizes } from './size';
import { buttonMockStateClass, ButtonMockState } from './states';
import { Loader } from '../loader/loader';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  modifier: ButtonModifiers;
  size?: ButtonSizes;
  mockState?: ButtonMockState;
  fullWidth?: boolean;
  uppercase?: boolean;
  outline?: boolean; // deprecacted
  round?: boolean; // deprecacted
  progress?: boolean;
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
  borderRadius: border.radius.largest,
  ...disabled(),
};

/**
 * Component
 */
const StyledButton: React.FC<ButtonProps> = styled('button', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'as',
})(({ modifier, uppercase, fullWidth, size, progress }) => [
  button,
  modifier && buttonModifiers[modifier],
  size ? buttonSizes[size] : buttonSizes['medium'],
  uppercase && { textTransform: 'uppercase' },
  fullWidth && { width: '100%' },
]);

const Button: React.FC<ButtonProps> = ({
  children,
  mockState,
  progress,
  ...props
}) => {
  return (
    <StyledButton
      progress={progress}
      className={mockState && buttonMockStateClass(mockState)}
      {...props}
    >
      {progress ? (
        <div css={{ position: 'relative' }}>
          <div css={{ visibility: 'hidden' }}>{children}</div>
          <div
            css={{
              position: 'absolute',
              left: `calc(50% - ${spacing('small')})`,
              top: 0,
              height: spacing(),
            }}
          >
            <Loader color={colors.neutral[10]} />
          </div>
        </div>
      ) : (
        children
      )}
    </StyledButton>
  );
};

Button.defaultProps = {
  modifier: 'primary',
};

export { Button, ButtonProps };
