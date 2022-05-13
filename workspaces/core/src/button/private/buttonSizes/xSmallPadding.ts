import type { ButtonProps } from '../../Button';

const xSmallPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'p-1 pr-2';
  }
  if (icon === 'right' || iconRight) {
    return 'p-1 pl-2';
  }
  if (icon === 'only' || iconOnly) {
    return 'p-1';
  }
  return 'py-1 px-2';
};

export default xSmallPadding;
