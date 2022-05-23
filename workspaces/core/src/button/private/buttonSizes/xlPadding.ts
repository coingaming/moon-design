import type ButtonProps from '../types/ButtonProps';

const xlPadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'py-4 ps-4 pe-6';
  }
  if (icon === 'right' || iconRight) {
    return 'py-4 ps-6 pe-4';
  }
  if (icon === 'only' || iconOnly) {
    return 'py-4 ps-4 pe-4';
  }
  return 'py-4 ps-6 pe-6';
};

export default xlPadding;
