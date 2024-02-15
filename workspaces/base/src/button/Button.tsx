import React from 'react';
import type ButtonProps from './private/types/ButtonProps';
import type ButtonVariants from './private/types/ButtonVariants';
import AnimationContent from './private/utils/buttonAnimations/AnimationContent';
import getButtonSize from './private/utils/buttonSizes/getButtonSize';
import ButtonComponent from './styles/ButtonComponent';
import Hover from './styles/Hover';
import IconLeft from './styles/IconLeft';
import IconRight from './styles/IconRight';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

export type Props<C extends React.ElementType> = React.PropsWithChildren<
  ButtonProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>;

const Button = <C extends React.ElementType = 'button'>({
  children,
  variant = 'fill',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  animation,
  as,
  className,
  ...rest
}: Props<C>) => {
  const hasAnimationContent =
    animation === 'progress' || animation === 'success';
  if (!children) {
    return (
      <span className="relative cursor-pointer [&_.hover]:hover:bg-heles">
        <ButtonComponent
          size={size}
          variant={variant as ButtonVariants}
          iconLeft={iconLeft}
          iconRight={iconRight}
          fullWidth={fullWidth}
          disabled={disabled}
          animation={animation}
          as={as}
          customClassName={className}
          {...rest}
        />
        <Hover
          className={mergeClassnames(
            'z-5',
            getButtonSize({
              size,
              iconLeft,
              iconRight,
              fullWidth,
            })
          )}
        />
      </span>
    );
  }
  return (
    <ButtonComponent
      size={size}
      variant={variant as ButtonVariants}
      iconLeft={iconLeft}
      iconRight={iconRight}
      fullWidth={fullWidth}
      disabled={disabled}
      animation={animation}
      as={as}
      customClassName={className}
      {...rest}
    >
      {hasAnimationContent ? (
        <AnimationContent
          iconLeft={iconLeft}
          children={children}
          iconRight={iconRight}
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
        </>
      )}
      <Hover />
    </ButtonComponent>
  );
};

export default Button;
