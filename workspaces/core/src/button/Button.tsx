import React, { useState } from 'react';
import Size from '../private/enums/Size';
import classNames from '../private/utils/classnames';
import AnimationContent from './private/buttonAnimations/AnimationContent';
import ButtonComponent from './styles/ButtonComponent';

type ButtonSizes = Size.XS | Size.SM | Size.MD | Size.LG | Size.XL;
type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'ghost';
type ButtonIcons = 'left' | 'right' | 'only';
type ButtonAnimations = 'progress' | 'success' | 'error' | 'pulse';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: ButtonIcons;
  animation?: ButtonAnimations;
  iconSize?: number;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  iconOnly?: JSX.Element | boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = Size.MD,
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
  const setIconSize = size === Size.XS ? 16 : iconSize;
  return (
    <ButtonComponent
      size={size as ButtonSizes}
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
