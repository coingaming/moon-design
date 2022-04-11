import type { ButtonProps } from '../../Button';

const xLargePadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'p-4 pr-6';
  }
  if (icon === 'right' || iconRight) {
    return 'p-4 pl-6';
  }
  if (icon === 'only' || iconOnly) {
    return 'p-4';
  }
  return 'py-4 px-6';
};

export default xLargePadding;
