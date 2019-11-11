import * as React from 'react';
import styled, { css, CSSObject, keyframes } from 'styled-components';
import { border, typography, base, colors } from '@heathmont/sportsbet-tokens';
import { disabled, spacing, rem } from '@heathmont/sportsbet-utils';
import { IconSuccess, IconWarning } from '@heathmont/sportsbet-icons';

import { Loader } from '../loader/loader';

import { buttonModifiers, ButtonModifiers } from './modifiers';
import { buttonSizes, ButtonSizes } from './size';
import {
  buttonMockStateClass,
  ButtonMockState,
  buttonHover,
  buttonActive,
} from './states';

/* eslint-disable @typescript-eslint/no-explicit-any */
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
  oops?: boolean;
  success?: boolean;
  as?: any;
  to?: any;
  // Manually added these because NavLinkProps extending causes TS errors
  activeClassName?: string;
  activeStyle?: any;
  exact?: boolean;
  strict?: boolean;
  isActive?: any;
  location?: any;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Styles
 */
const buttonStyles: CSSObject = {
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

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const animation = css`
  animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

const StyledButton = styled.button<ButtonProps>(
  ({ modifier, uppercase, fullWidth, size, oops }) => [
    buttonStyles,
    modifier && buttonModifiers[modifier],
    size ? buttonSizes[size] : buttonSizes.small,
    uppercase && { textTransform: 'uppercase' },
    fullWidth && { width: '100%' },
    oops && [
      animation,
      {
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: rem(1000),
        color: colors.neutral[10],
        backgroundColor: colors.error,
        ...buttonHover({
          backgroundColor: colors.error,
        }),
        ...buttonActive({
          backgroundColor: colors.error,
        }),
      },
    ],
  ]
);

const Button: React.FC<ButtonProps> = ({
  children,
  mockState,
  progress,
  oops,
  success,
  ...props
}) => {
  let content = children;
  if (progress) {
    content = (
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
    );
  }
  if (success) {
    content = (
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
          <IconSuccess />
        </div>
      </div>
    );
  }
  if (oops) {
    content = (
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
          <IconWarning />
        </div>
      </div>
    );
  }
  return (
    <StyledButton
      oops={oops}
      className={mockState && buttonMockStateClass(mockState)}
      {...props}
    >
      {content}
    </StyledButton>
  );
};

Button.defaultProps = {
  modifier: 'primary',
};

export { Button, ButtonProps, buttonStyles };
