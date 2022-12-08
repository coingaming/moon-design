import React, { useState } from 'react';
import mergeClassnames from '../utils/mergeClassnames';
import AnimationContent from './private/buttonAnimations/AnimationContent';
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
        />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
      <span
        className={mergeClassnames(
          'z-[-1] block absolute inset-0 pointer-events-none transition-[background-color_0.2s_ease-in-out]',
          isHover && 'bg-bulma/[.07]'
        )}
      />
    </IconButtonComponent>
  );
};

export default IconButton;
