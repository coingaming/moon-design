import React from 'react';
import TagContainer from './styles/TagContainer';
import type TagProps from './private/types/TagProps';

const Tag: React.FC<TagProps> = ({
  children,
  color = 'text-gohan',
  bgColor = 'bg-bulma',
  iconLeft,
  iconRight,
  size = 'xs',
  isUppercase = true,
}) => (
  <TagContainer
    bgColor={bgColor}
    color={color}
    size={size}
    isUppercase={isUppercase}
    iconLeft={iconLeft}
    iconRight={iconRight}
  >
    {iconLeft && iconLeft}
    {children}
    {iconRight && iconRight}
  </TagContainer>
);

export default Tag;
