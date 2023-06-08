import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import getAnimation from '../private/utils/buttonAnimations/getAnimation';
import getButtonSize from '../private/utils/buttonSizes/getButtonSize';
import getButtonCommonStyles from '../private/utils/buttonStyles/getButtonCommonStyles';
import getButtonVariants from '../private/utils/buttonStyles/getButtonVariants';
import type ButtonProps from '../private/types/ButtonProps';

const ButtonComponent = <C extends React.ElementType>({
  variant,
  size,
  icon, // deprecated
  iconLeft,
  iconRight,
  iconOnly, // deprecated
  fullWidth,
  disabled,
  animation,
  as,
  customClassName,
  ...rest
}: ButtonProps<C>) => {
  const Component = as || 'button';
  return (
    <Component
      className={mergeClassnames(
        getButtonSize({
          size,
          icon,
          iconLeft,
          iconRight,
          iconOnly,
          fullWidth,
        }),
        getButtonCommonStyles(disabled),
        getButtonVariants({ variant, disabled }),
        animation === 'pulse' && getAnimation('pulse'),
        animation === 'error' && getAnimation('error'),
        fullWidth && !iconOnly && 'w-full',
        customClassName
      )}
      {...((!as || as === 'button') && { type: 'button' })}
      {...(disabled && { disabled })}
      {...rest}
    />
  );
};

export default ButtonComponent;
