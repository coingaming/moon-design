import React, { useState } from 'react';
import Hover from '../button/styles/Hover';
import AnimationContent from './private/utils/buttonAnimations/AnimationContent';
import IconButtonComponent from './styles/IconButtonComponent';
import type ButtonVariants from '../button/private/types/ButtonVariants';
import type IconButtonProps from './private/types/IconButtonProps';

type Props<C extends React.ElementType> = React.PropsWithChildren<
  IconButtonProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof IconButtonProps<C>>;

const IconButton = <C extends React.ElementType = 'button'>({
  children,
  variant = 'primary',
  size = 'md',
  icon,
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
    <IconButtonComponent
      size={size}
      variant={variant as ButtonVariants}
      icon={icon}
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
          icon={icon}
          children={children}
          animation={animation}
          size={size}
        />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
      <Hover isHover={isHover} />
    </IconButtonComponent>
  );
};

export default IconButton;
