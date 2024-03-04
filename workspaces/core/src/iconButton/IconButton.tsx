import React from 'react';
import type IconButtonProps from './private/types/IconButtonProps';
import AnimationContent from './private/utils/AnimationContent';
import getAriaLabel from './private/utils/getAriaLabel';
import IconButtonComponent from './styles/IconButtonComponent';
import Hover from '../button/styles/Hover';

type Props<C extends React.ElementType> = React.PropsWithChildren<
  IconButtonProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof IconButtonProps<C>>;

const IconButton = <C extends React.ElementType = 'button'>({
  children,
  variant = 'fill',
  size = 'md',
  icon,
  disabled,
  animation,
  as,
  className,
  ['aria-label']: ariaLabel,
  ...rest
}: Props<C>) => {
  const hasAnimationContent =
    animation === 'progress' || animation === 'success';
  return (
    <IconButtonComponent
      size={size}
      variant={variant}
      icon={icon}
      disabled={disabled}
      animation={animation}
      as={as}
      className={className}
      aria-label={getAriaLabel({ ariaLabel, animation })}
      {...rest}
    >
      {hasAnimationContent ? (
        <AnimationContent
          icon={icon}
          children={children}
          animation={animation}
          size={size}
          variant={variant}
        />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
      <Hover />
    </IconButtonComponent>
  );
};

export default IconButton;
