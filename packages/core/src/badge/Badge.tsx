import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

import Container from './styles/Container';

export interface BadgeProps {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: 'small';
}

const IconRightWrapper = styled.span<BadgeProps>(
  ({ theme: { newTokens } }) => ({
    marginLeft: newTokens.space.xsmall,
  })
);

const IconLeftWrapper = styled.span<BadgeProps>(({ theme: { newTokens } }) => ({
  marginRight: newTokens.space.xsmall,
}));

const Badge: React.FC<BadgeProps> = ({
  children,
  color,
  backgroundColor,
  iconLeft,
  iconRight,
  size,
}) => (
  <Container
    backgroundColor={backgroundColor}
    color={color}
    iconLeft={iconLeft}
    iconRight={iconRight}
    size={size}
  >
    {iconLeft && <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>}
    {children}
    {iconRight && <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>}
  </Container>
);

/*
default
color - goten
backgroundColor - piccolo.100
*/

export default Badge;
