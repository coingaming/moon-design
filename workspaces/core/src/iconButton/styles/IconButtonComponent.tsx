import React from 'react';
import classNames from '../../private/utils/classnames';
import errorAnimation from '../private/buttonAnimations/errorAnimation';
import buttonSizes from '../private/buttonSizes/buttonSizes';
import buttonCommonStyles from '../private/buttonStyles/buttonCommonStyles';
import buttonVariants from '../private/buttonStyles/buttonVariants';
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
      className={classNames(
        buttonSizes({ size }),
        buttonCommonStyles({ disabled }),
        buttonVariants({ variant }),
        animation === 'pulse' && 'anim-pulse animate-[pulse2_1.5s_infinite]',
        animation === 'error' && errorAnimation(),
        customClassName
      )}
      {...((!as || as === 'button') && { type: 'button' })}
      {...(disabled && { disabled })}
      {...rest}
    />
  );
};

export default IconButtonComponent;
