import React from 'react';
import LabelContainer from './styles/LabelContainer';
import type LabelProps from './private/types/LabelProps';

const Label: React.FC<LabelProps> = ({
  children,
  color = 'text-gohan',
  backgroundColor = 'bg-bulma',
  iconLeft,
  iconRight,
  size = 'xs',
  isUppercase = true,
}) => (
  <LabelContainer
    backgroundColor={backgroundColor}
    color={color}
    size={size}
    isUppercase={isUppercase}
    iconLeft={iconLeft}
    iconRight={iconRight}
  >
    {iconLeft && iconLeft}
    {children}
    {iconRight && iconRight}
  </LabelContainer>
);

export default Label;
