import type ButtonAnimations from './ButtonAnimations';
import type ButtonIcons from './ButtonIcons';
import type ButtonVariants from './ButtonVariants';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: ButtonIcons;
  animation?: ButtonAnimations;
  iconSize?: number;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  iconOnly?: JSX.Element | boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default ButtonProps;
