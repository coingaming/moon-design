import type ButtonAnimations from './ButtonAnimations';
import type ButtonSizes from './ButtonSizes';
import type ButtonVariants from './ButtonVariants';

type ButtonSettingsProps = {
  children?: React.ReactNode;
  size?: ButtonSizes;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  animation?: ButtonAnimations;
  disabled?: boolean;
  variant?: ButtonVariants;
  fullWidth?: boolean;
};

export default ButtonSettingsProps;
