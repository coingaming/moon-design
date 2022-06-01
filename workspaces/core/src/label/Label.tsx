import React from 'react';
import classNames from '../private/utils/classnames';
import LabelContainer from './styles/LabelContainer';
import type LabelProps from './private/types/LabelProps';

const Label: React.FC<LabelProps> = ({
  children,
  color = 'text-gohan',
  backgroundColor = 'bg-bulma',
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
    iconLeft={iconLeft}
    iconRight={iconRight}
  >
    {iconLeft && (
      <span
        className={classNames(
          'me-1',
          size === '2xs' ? 'text-[0.75rem]' : 'text-[1rem]'
        )}
      >
        {iconLeft}
      </span>
    )}
    {children}
    {iconRight && (
      <span
        className={classNames(
          'ms-1',
          size === '2xs' ? 'text-[0.75rem]' : 'text-[1rem]'
        )}
      >
        {iconRight}
      </span>
    )}
  </LabelContainer>
);

export default Label;
