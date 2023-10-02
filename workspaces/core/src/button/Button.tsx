import React, { useState } from 'react';
import type ButtonProps from './private/types/ButtonProps';
import AnimationContent from './private/utils/buttonAnimations/AnimationContent';
import ButtonComponent from './styles/ButtonComponent';
import Hover from './styles/Hover';
import IconLeft from './styles/IconLeft';
import IconRight from './styles/IconRight';

export type Props<C extends React.ElementType> = React.PropsWithChildren<
  ButtonProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>;

const Button = <C extends React.ElementType = 'button'>({
  children,
  variant = 'fill',
  size = 'md',
  icon, // deprecated
  iconLeft, // not boolean anymore
  iconRight, // not boolean anymore
  iconOnly, // deprecated
  fullWidth,
  disabled,
  animation,
  as,
  className,
  ...rest
}: Props<C>) => {
  const [isHover, setIsHover] = useState(false);
  const hasAnimationContent =
    animation === 'progress' || animation === 'success';
  return (
    <ButtonComponent
      size={size}
      variant={variant}
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
      customClassName={className}
      {...rest}
    >
      {hasAnimationContent ? (
        <AnimationContent
          iconLeft={iconLeft}
          children={children}
          iconRight={iconRight}
          iconOnly={iconOnly}
          animation={animation}
          size={size}
          fullWidth={fullWidth}
          variant={variant}
        />
      ) : (
        <>
          {iconLeft && (
            <IconLeft fullWidth={fullWidth} iconLeft={iconLeft} size={size} />
          )}
          {children}
          {iconRight && (
            <IconRight
              fullWidth={fullWidth}
              iconRight={iconRight}
              size={size}
            />
          )}
          {iconOnly}
        </>
      )}
      <Hover isHover={isHover} variant={variant} />
    </ButtonComponent>
  );
};

export default Button;
