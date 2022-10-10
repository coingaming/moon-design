import React, { useState } from 'react';
import classNames from '../private/utils/classnames';
import AnimationContent from './private/buttonAnimations/AnimationContent';
import ButtonComponent from './styles/ButtonComponent';
import type ButtonProps from './private/types/ButtonProps';
import type ButtonVariants from './private/types/ButtonVariants';

export type Props<C extends React.ElementType> = React.PropsWithChildren<
  ButtonProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>;

const Button = <C extends React.ElementType = 'button'>({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
  disabled,
  animation,
  as,
  ...rest
}: Props<C>) => {
  const [isHover, setIsHover] = useState(false);
  const hasAnimationContent =
    animation === 'progress' || animation === 'success';
  return (
    <ButtonComponent
      size={size}
      variant={variant as ButtonVariants}
      icon={icon}
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
