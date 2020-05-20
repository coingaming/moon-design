import * as React from 'react';
import styled from 'styled-components';
import { disabled, rem } from '@heathmont/sportsbet-utils';
import { IconSuccess } from '@heathmont/sportsbet-assets';
import { useTheme } from '@heathmont/sportsbet-themes';

import Loader from '../loader/Loader';

import { buttonVariant, ButtonVariants } from './variants';
import { buttonSize, ButtonSizes } from './size';
import {
  buttonMockStateClass,
  ButtonMockState,
  buttonHover,
  buttonActive,
} from './states';
import { oopsAnimation } from './animation';

/* eslint-disable @typescript-eslint/no-explicit-any */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant: ButtonVariants;
  size?: ButtonSizes;
  mockState?: ButtonMockState;
  fullWidth?: boolean;
  uppercase?: boolean;
  round?: boolean; // deprecacted
  progress?: boolean;
  oops?: boolean;
  success?: boolean;
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
    theme: { border, fontWeight, opacity, radius },
    fullWidth,
    uppercase,
  }) => ({
    width: fullWidth ? '100%' : undefined,
    fontFamily: 'inherit', // Prevents links rendering as system fonts.
    fontWeight: fontWeight.semibold,
    textDecoration: 'none',
    textTransform: uppercase ? 'uppercase' : undefined,
    cursor: 'pointer',
    border,
    borderColor: 'transparent',
    borderRadius: rem(radius.largest),
    ...disabled(opacity.disabled),
  }),
  ({ variant, theme }) => variant && buttonVariant(variant)(theme),
  ({ size, theme }) => size && buttonSize(size)(theme),
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

const IconLeftWrapper = styled.span<any>(({ size }) => [
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
]);

const IconRightWrapper = styled.span<any>(({ size }) => [
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
      {...props}
    >
      {iconLeft && <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>}
      {content}
      {iconRight && (
        <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>
      )}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'small',
};

export { ButtonProps };

export default Button;
