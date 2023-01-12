import React from 'react';
import getAnimation from '../../button/private/utils/buttonAnimations/getAnimation';
import getIconSize from '../../button/private/utils/buttonSizes/getIconSize';
import getButtonCommonStyles from '../../button/private/utils/buttonStyles/getButtonCommonStyles';
import getButtonVariants from '../../button/private/utils/buttonStyles/getButtonVariants';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import getButtonSize from '../private/utils/buttonSizes/getButtonSize';
import type IconButtonProps from '../private/types/IconButtonProps';

const IconButtonComponent = <C extends React.ElementType>({
  variant,
  size,
  icon,
  disabled,
  animation,
  as,
  customClassName,
  ...rest
}: IconButtonProps<C>) => {
  const Component = as || 'button';
  return (
    <Component
      className={mergeClassnames(
        getButtonSize(size),
        getButtonCommonStyles(disabled),
        getButtonVariants(variant),
        animation === 'pulse' && getAnimation('pulse'),
        animation === 'error' && getAnimation('error'),
        getIconSize(size),
        customClassName
      )}
      {...((!as || as === 'button') && { type: 'button' })}
      {...(disabled && { disabled })}
      {...rest}
    />
  );
};

export default IconButtonComponent;
