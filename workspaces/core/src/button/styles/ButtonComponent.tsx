import React from 'react';
import mergeClassnames from '../../utils/mergeClassnames';
import errorAnimation from '../private/buttonAnimations/errorAnimation';
import buttonSizes from '../private/buttonSizes/buttonSizes';
import buttonCommonStyles from '../private/buttonStyles/buttonCommonStyles';
import buttonVariants from '../private/buttonStyles/buttonVariants';
import type ButtonProps from '../private/types/ButtonProps';

const ButtonComponent = <C extends React.ElementType>({
  variant,
  size,
  icon,
  iconLeft,
  iconRight,
  iconOnly,
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
        buttonSizes({ size, icon, iconLeft, iconRight, iconOnly }),
        buttonCommonStyles({ disabled }),
        buttonVariants({ variant }),
        animation === 'pulse' && 'anim-pulse animate-[pulse2_1.5s_infinite]',
        animation === 'error' && errorAnimation(),
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
