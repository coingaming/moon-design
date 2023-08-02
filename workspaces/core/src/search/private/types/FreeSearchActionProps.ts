import type ButtonProps from './ButtonProps';
import type LinkProps from './LinkProps';

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, 'index'> {
  index?: number;
  label?: string | React.ReactNode;
  className?: string;
}

export default FreeSearchActionProps;
