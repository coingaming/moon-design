import ButtonAnimations from './ButtonAnimations';
import type ButtonIcons from './ButtonIcons';
import type ButtonSizes from './ButtonSizes';
import type ButtonVariants from './ButtonVariants';

type ButtonSettingsProps = {
  icon?: ButtonIcons;
  children?: React.ReactNode;
  size?: ButtonSizes;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  iconOnly?: JSX.Element | boolean;
  animation?: ButtonAnimations;
  disabled?: boolean;
  variant?: ButtonVariants;
  fullWidth?: boolean;
};

export default ButtonSettingsProps;
