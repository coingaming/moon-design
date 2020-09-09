import React from 'react';
import styled from 'styled-components';
import { disabled, rem } from '@heathmont/moon-utils';
import { useTheme } from '@heathmont/moon-themes';

import Loader from '../loader/Loader';
import IconSuccess from '../private/icons/IconSuccess';

import { buttonVariant, ButtonVariants } from './variants';
import { buttonSize, ButtonSizes } from './size';
import {
  buttonMockStateClass,
  ButtonMockState,
  buttonHover,
  buttonActive,
} from './states';
import { oopsAnimation } from './oopsAnimation';
import { pulseAnimation } from './pulseAnimation';

/* eslint-disable @typescript-eslint/no-explicit-any */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  mockState?: ButtonMockState;
  fullWidth?: boolean;
  progress?: boolean;
  oops?: boolean;
  success?: boolean;
  pulse?: boolean;
  // Manually added these because NavLinkProps extending causes TS errors
  to?: any;
  as?: any;
  activeClassName?: string;
  activeStyle?: any;
  exact?: boolean;
  strict?: boolean;
  isActive?: any;
  location?: any;
  // Icons
  iconLeft?: any;
  iconRight?: any;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Component
 */
const StyledButton = styled.button<ButtonProps>(
  ({
    theme: { border, fontWeight, opacity, radius, transitionDuration },
    fullWidth,
  }) => ({
    display: 'inline-grid',
    alignItems: 'center',
    justifyContent: 'center',
    gridAutoFlow: 'column',
    width: fullWidth ? '100%' : undefined,
    minHeight: rem(24),
    fontFamily: 'inherit', // Prevents links rendering as system fonts.
    fontWeight: fontWeight.semibold,
    textDecoration: 'none',
    cursor: 'pointer',
    border,
    borderColor: 'transparent',
    borderRadius: rem(radius.largest),
    transition: `background-color ${transitionDuration.default}s`,
    ...disabled(opacity.disabled),
  }),
  ({ fullWidth }) => fullWidth && { position: 'relative' },
  ({ variant, theme }) => variant && buttonVariant(variant)(theme),
  ({ size, variant }) => size && buttonSize(size)(variant),
  ({ oops, theme: { color } }) =>
    oops && [
      oopsAnimation,
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
    ],
  ({ pulse, theme: { color } }) =>
    pulse && [
      pulseAnimation,
      {
        boxShadow: `0 0 0 0 ${color.piccolo[100]}`,
      },
    ],
  ({ iconLeft, size }) => [
    iconLeft && size === 'xsmall' && { paddingLeft: rem(8) },
    iconLeft && size === 'small' && { paddingLeft: rem(12) },
    iconLeft && size === 'medium' && { paddingLeft: rem(16) },
    iconLeft && size === 'large' && { paddingLeft: rem(16) },
  ],
  ({ iconRight, size }) => [
    iconRight && size === 'xsmall' && { paddingRight: rem(8) },
    iconRight && size === 'small' && { paddingRight: rem(12) },
    iconRight && size === 'medium' && { paddingRight: rem(16) },
    iconRight && size === 'large' && { paddingRight: rem(16) },
  ]
);

const IconLeftWrapper = styled.span<any>(({ size, fullWidth }) => [
  {
    marginRight: rem(8),
  },
  size === 'xsmall' && {
    fontSize: rem(16),
    lineHeight: 1,
  },
  size === 'small' && {
    fontSize: rem(16),
    lineHeight: 1,
  },
  size === 'medium' && {
    fontSize: rem(20),
    lineHeight: 1,
  },
  size === 'large' && {
    fontSize: rem(24),
    lineHeight: 1,
  },
  fullWidth &&
    size === 'xsmall' && {
      position: 'absolute',
      left: rem(8),
      top: rem(6),
    },
  fullWidth &&
    size === 'small' && {
      position: 'absolute',
      left: rem(12),
      top: rem(10),
    },
  fullWidth &&
    size === 'medium' && {
      position: 'absolute',
      left: rem(16),
      top: rem(11),
    },
  fullWidth &&
    size === 'large' && {
      position: 'absolute',
      left: rem(16),
      top: rem(12),
    },
]);

const IconRightWrapper = styled.span<any>(({ size, fullWidth }) => [
  {
    marginLeft: rem(8),
  },
  size === 'xsmall' && {
    fontSize: rem(16),
  },
  size === 'small' && {
    fontSize: rem(16),
  },
  size === 'medium' && {
    fontSize: rem(20),
    lineHeight: 1,
  },
  size === 'large' && {
    fontSize: rem(24),
    lineHeight: 1,
  },
  fullWidth &&
    size === 'xsmall' && {
      position: 'absolute',
      right: rem(8),
      top: rem(6),
    },
  fullWidth &&
    size === 'small' && {
      position: 'absolute',
      right: rem(12),
      top: rem(10),
    },
  fullWidth &&
    size === 'medium' && {
      position: 'absolute',
      right: rem(16),
      top: rem(11),
    },
  fullWidth &&
    size === 'large' && {
      position: 'absolute',
      right: rem(16),
      top: rem(12),
    },
]);

const Button: React.FC<ButtonProps> = ({
  children,
  mockState,
  progress,
  oops,
  success,
  iconLeft,
  iconRight,
  size,
  fullWidth,
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
  return (
    <StyledButton
      oops={oops}
      className={mockState && buttonMockStateClass(mockState)}
      size={size}
      iconLeft={iconLeft}
      iconRight={iconRight}
      fullWidth={fullWidth}
      {...props}
    >
      {iconLeft && (
        <IconLeftWrapper size={size} fullWidth={fullWidth}>
          {iconLeft}
        </IconLeftWrapper>
      )}
      {content}
      {iconRight && (
        <IconRightWrapper size={size} fullWidth={fullWidth}>
          {iconRight}
        </IconRightWrapper>
      )}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: 'default',
  size: 'small',
};

export { ButtonProps };

export default Button;
