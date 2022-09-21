import React, { useState } from 'react';
import classNames from '../private/utils/classnames';
import AnimationContent from './private/buttonAnimations/AnimationContent';
import ButtonComponent from './styles/ButtonComponent';
import type ButtonProps from './private/types/ButtonProps';
import type ButtonVariants from './private/types/ButtonVariants';

const Button = <C extends React.ElementType>({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconSize = size === 'xs' ? 16 : 24,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
  disabled,
  animation,
  as,
  ...rest
}: ButtonProps<C>) => {
  const [isHover, setIsHover] = useState(false);
  const hasAnimationContent =
    animation === 'progress' || animation === 'success';
  return (
    <ButtonComponent
      size={size}
      variant={variant as ButtonVariants}
      icon={icon}
      iconSize={iconSize}
      iconLeft={iconLeft}
      iconRight={iconRight}
      iconOnly={iconOnly}
      fullWidth={fullWidth}
      disabled={disabled}
      animation={animation}
      as={as}
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
      <span
        className={classNames(
          'z-[-1] block absolute inset-0 pointer-events-none transition-[background-color_0.2s_ease-in-out]',
          isHover && 'bg-bulma/[.07]'
        )}
      />
    </ButtonComponent>
  );
};

export default Button;
