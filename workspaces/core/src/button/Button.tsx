import React, { useState } from 'react';
import classNames from '../private/utils/classnames';
import AnimationContent from './private/buttonAnimations/AnimationContent';
import ButtonComponent from './styles/ButtonComponent';
import type ButtonProps from './private/types/ButtonProps';
import type ButtonVariants from './private/types/ButtonVariants';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconSize = 24,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
  disabled,
  animation,
  ...rest
}) => {
  const [isHover, setIsHover] = useState(false);
  const hasAnimationContent =
    animation === 'progress' || animation === 'success';
  const setIconSize = size === 'xs' ? 16 : iconSize;
  return (
    <ButtonComponent
      size={size}
      variant={variant as ButtonVariants}
      icon={icon}
      iconSize={setIconSize}
      iconLeft={iconLeft}
      iconRight={iconRight}
      iconOnly={iconOnly}
      fullWidth={fullWidth}
      disabled={disabled}
      animation={animation}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...rest}
    >
      {hasAnimationContent ? (
        <AnimationContent
          iconLeft={iconLeft}
          children={children}
          iconRight={iconRight}
          iconOnly={iconOnly}
          animation={animation}
          variant={variant}
        />
      ) : (
        <>
          {iconLeft}
          {children}
          {iconRight}
          {iconOnly}
        </>
      )}
      <div
        className={classNames(
          'z-[-1] absolute inset-0 pointer-events-none transition-[background-color_0.2s_ease-in-out]',
          isHover && 'bg-bulma/[.07]'
        )}
      />
    </ButtonComponent>
  );
};

export default Button;
