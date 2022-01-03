import React, { useState } from 'react';
import Hover from '../hover/Hover';
import Size from '../private/enums/Size';
import ButtonComponent from './styles/ButtonComponent';

type ButtonSizes = Size.SMALL | Size.MEDIUM | Size.LARGE | Size.XLARGE;
type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'ghost';
type ButtonIcons = 'left' | 'right' | 'only';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  icon?: ButtonIcons;
  iconSize?: number;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  iconOnly?: JSX.Element;
  disabled?: boolean;
  fullWidth?: boolean;
}

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
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <ButtonComponent
      size={size as ButtonSizes}
      variant={variant as ButtonVariants}
      icon={icon}
      iconSize={iconSize}
      iconLeft={iconLeft}
      iconRight={iconRight}
      iconOnly={iconOnly}
      fullWidth={fullWidth}
      disabled={disabled}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {iconLeft}
      {children}
      {iconRight}
      {iconOnly}
      <Hover isHover={isHover} />
    </ButtonComponent>
  );
};

export default Button;
