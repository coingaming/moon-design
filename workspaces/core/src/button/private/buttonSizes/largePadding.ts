import type { ButtonProps } from '../../Button';

const largePadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'p-3 pr-4';
  }
  if (icon === 'right' || iconRight) {
    return 'p-3 pl-4';
  }
  if (icon === 'only' || iconOnly) {
    return 'p-3';
  }
  return 'py-3 px-4';
};

export default largePadding;
