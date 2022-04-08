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
  textTransform?:  "capitalize" | "lowercase" | "uppercase";
};

const IconRightWrapper = styled.span({
  marginInlineStart: rem(4),
});

const IconLeftWrapper = styled.span({
  marginInlineEnd: rem(4),
});

const Label: React.FC<LabelProps> = ({
  children,
  color,
  backgroundColor,
  iconLeft,
  iconRight,
  size,
  textTransform,
}) => (
  <LabelContainer backgroundColor={backgroundColor} color={color} size={size} textTransform={textTransform}>
    {iconLeft && <IconLeftWrapper>{iconLeft}</IconLeftWrapper>}
    {children}
    {iconRight && <IconRightWrapper>{iconRight}</IconRightWrapper>}
  </LabelContainer>
);

export default Label;
