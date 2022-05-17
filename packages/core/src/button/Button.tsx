import React, { useState } from 'react';
import Hover from '../hover/Hover';
import Size from '../private/enums/Size';
import AnimationContent from './styles/buttonAnimations/AnimationContent';
import ButtonComponent from './styles/ButtonComponent';
import type ButtonProps from './private/types/ButtonProps';
import type ButtonSizesProps from './private/types/ButtonSizesProps';
import type ButtonVariantsProps from './private/types/ButtonVariantsProps';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = Size.MEDIUM,
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
  const isAnimationContent =
    animation === 'progress' || animation === 'success';
  const setIconSize = size === Size.XSMALL ? 16 : iconSize;
  return (
    <ButtonComponent
      size={size as ButtonSizesProps}
      variant={variant as ButtonVariantsProps}
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
      {isAnimationContent ? (
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
      <Hover isHover={isHover} />
    </ButtonComponent>
  );
};

export default Button;
