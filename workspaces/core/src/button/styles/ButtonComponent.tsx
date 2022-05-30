import React from 'react';
import classNames from '../../private/utils/classnames';
import errorAnimation from '../private/buttonAnimations/errorAnimation';
import buttonSizes from '../private/buttonSizes/buttonSizes';
import buttonCommonStyles from '../private/buttonStyles/buttonCommonStyles';
import buttonVariants from '../private/buttonStyles/buttonVariants';
import type ButtonProps from '../private/types/ButtonProps';

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
        animation === 'pulse' && 'anim-pulse animate-[pulse2_1.5s_infinite]',
        animation === 'error' && errorAnimation(),
        fullWidth && !iconOnly ? 'w-full' : ''
      )}
      {...rest}
    />
  );
};

export default ButtonComponent;
