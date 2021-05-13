import React from 'react';
import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

export type BadgeProps = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: 'small';
};

const StyledBadge = styled.span<BadgeProps>(
  ({ theme: { fontWeight, radius } }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: fontWeight.semibold,
    textTransform: 'uppercase',
    borderRadius: rem(radius.largest),
    letterSpacing: rem(1), // TODO
  }),
  ({ size }) => ({
    padding: size === 'small' ? `0 ${rem(4)}` : `0 ${rem(8)}`,
    fontSize: size === 'small' ? rem(8) : rem(10),
    lineHeight: size === 'small' ? rem(12) : rem(16),
  }),
  /* If a color or backgroundColor is set, override the modifier styles. */
  ({ color, backgroundColor, theme }) => ({
    color: color ? themed('color', color)(theme) : theme.color.goten[100],
    backgroundColor: themed('color', backgroundColor)(theme),
  })
);

StyledBadge.defaultProps = {
  color: 'goten.100',
  backgroundColor: 'piccolo.100',
};

const IconRightWrapper = styled.span<BadgeProps>`
  margin-left: ${rem(8)};
`;

const IconLeftWrapper = styled.span<BadgeProps>`
  margin-right: ${rem(8)};
`;

const Badge: React.FC<BadgeProps> = ({
  children,
  color,
  backgroundColor,
  iconLeft,
  iconRight,
  size,
}) => {
  return (
    <StyledBadge
      backgroundColor={backgroundColor}
      color={color}
      iconLeft={iconLeft}
      iconRight={iconRight}
      size={size}
    >
      {iconLeft && <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>}
      {children}
      {iconRight && (
        <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>
      )}
    </StyledBadge>
  );
};

/*
default
color - goten
backgroundColor - piccolo.100
*/

export default Badge;
