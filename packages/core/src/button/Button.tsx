import React from 'react';
import Size from '../private/enums/Size';
import ButtonComponent from './styles/ButtonComponent';

export type ButtonSizes = Size.SMALL | Size.MEDIUM | Size.LARGE | Size.XLARGE;
export type ButtonVariants = 'fill' | 'stroke' | 'fillSecondary' | 'ghost';
export type ButtonIcons = 'left' | 'right' | 'only';

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
  variant = 'fill',
  size = Size.MEDIUM,
  icon,
  iconSize = 24,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
  disabled,
}) => (
  <ButtonComponent
    size={size}
    variant={variant}
    icon={icon}
    iconSize={iconSize}
    iconLeft={iconLeft}
    iconRight={iconRight}
    iconOnly={iconOnly}
    fullWidth={fullWidth}
    disabled={disabled}
  >
    {iconLeft}
    {children}
    {iconRight}
    {iconOnly}
  </ButtonComponent>
);

export default Button;
