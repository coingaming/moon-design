import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import LabelContainer from './styles/LabelContainer';

export type LabelProps = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: 'twoxsmall' | 'xsmall';
  isUppercase?: boolean;
  children?: React.ReactNode;
};

export type IconProps = {
  size: LabelProps['size'];
};

const IconRightWrapper = styled.span<IconProps>(({ size }) => ({
  marginInlineStart: rem(4),
  '& svg': {
    fontSize: size === 'twoxsmall' ? rem(12) : rem(16),
  },
}));

const IconLeftWrapper = styled.span<IconProps>(({ size }) => ({
  marginInlineEnd: rem(4),
  '& svg': {
    fontSize: size === 'twoxsmall' ? rem(12) : rem(16),
  },
}));

const Label: React.FC<LabelProps> = ({
  children,
  color,
  backgroundColor,
  iconLeft,
  iconRight,
  size,
  isUppercase = true,
}) => (
  <LabelContainer
    backgroundColor={backgroundColor}
    color={color}
    size={size}
    isUppercase={isUppercase}
    iconLeft={!!iconLeft}
    iconRight={!!iconRight}
  >
    {iconLeft && <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>}
    {children}
    {iconRight && <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>}
  </LabelContainer>
);

export default Label;
