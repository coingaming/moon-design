import React from 'react';
import classNames from '../../private/utils/classnames';
import errorAnimation from '../private/buttonAnimations/errorAnimation';
import pulseAnimation from '../private/buttonAnimations/pulseAnimation';
import buttonSizes from '../private/buttonSizes/buttonSizes';
import buttonCommonStyles from '../private/buttonStyles/buttonCommonStyles';
import buttonVariants from '../private/buttonStyles/buttonVariants';
import type { ButtonProps } from '../Button';

const ButtonComponent: React.FC<ButtonProps> = ({
  variant,
  size,
  icon,
  iconSize,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
  disabled,
  animation,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        buttonSizes({ size, icon, iconLeft, iconRight, iconOnly }),
        buttonCommonStyles({ iconSize, disabled }),
        buttonVariants({ variant }),
        animation === 'pulse' && 'animate-pulse',
        // animation === 'pulse' && pulseAnimation,
        animation === 'error' && errorAnimation(),
        fullWidth && !iconOnly ? 'w-full' : ''
      )}
      {...rest}
    />
  );
};

export default ButtonComponent;
