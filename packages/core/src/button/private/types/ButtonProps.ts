import type ButtonAnimationsProps from './ButtonAnimationsProps';
import type ButtonIconsProps from './ButtonIconsProps';
import type ButtonSizesProps from './ButtonSizesProps';
import type ButtonVariantsProps from './ButtonVariantsProps';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantsProps;
  size?: ButtonSizesProps;
  icon?: ButtonIconsProps;
  animation?: ButtonAnimationsProps;
  iconSize?: number;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  iconOnly?: JSX.Element | boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default ButtonProps;
