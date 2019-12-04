import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { disabled, rem } from '@heathmont/sportsbet-utils';
import { IconSuccess, IconWarning } from '@heathmont/sportsbet-assets';
import { useTheme } from '@heathmont/sportsbet-themes';

import { Loader } from '../loader/loader';

import { buttonModifier, ButtonModifiers } from './modifiers';
import { buttonSize, ButtonSizes } from './size';
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
 * Animation
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

/**
 * Component
 */
const StyledButton = styled.button<ButtonProps>(
  ({
    theme: { base, border, fontWeight, opacity, radius, space },
    fullWidth,
    uppercase,
  }) => ({
    padding: `${rem(space.small)} ${rem(space.medium)}`,
    display: 'inline-block',
    verticalAlign: 'middle',
    width: fullWidth ? '100%' : undefined,
    fontFamily: 'inherit', // Prevents links rendering as system fonts.
    fontSize: rem(base.fontSize),
    fontWeight: fontWeight.semibold,
    lineHeight: rem(18),
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: uppercase ? 'uppercase' : undefined,
    cursor: 'pointer',
    border,
    borderColor: 'transparent',
    borderRadius: rem(radius.largest),
    ...disabled(opacity.disabled),
  }),
  ({ modifier, theme }) => modifier && buttonModifier(modifier)(theme),
  ({ size, theme }) => size && buttonSize(size)(theme),
  ({ oops, theme: { color } }) =>
    oops && [
      animation,
      {
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: rem(1000),
        color: color.bulma[100],
        backgroundColor: color.chiChi[100],
        ...buttonHover({
          backgroundColor: color.chiChi[100],
        }),
        ...buttonActive({
          backgroundColor: color.chiChi[100],
        }),
      },
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
  const { color, space } = useTheme();

  let content = children;

  if (progress) {
    content = (
      <div css={{ position: 'relative' }}>
        <div css={{ visibility: 'hidden' }}>{children}</div>
        <div
          css={{
            position: 'absolute',
            left: `calc(50% - ${rem(space.small)})`,
            top: 0,
            height: rem(space.default),
          }}
        >
          <Loader color={color.bulma[100]} />
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
            left: `calc(50% - ${rem(space.small)})`,
            top: 0,
            height: rem(space.default),
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
            left: `calc(50% - ${rem(space.small)})`,
            top: 0,
            height: rem(space.default),
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
  size: 'small',
};

export { Button, ButtonProps };
