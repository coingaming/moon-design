import type ButtonProps from '../types/ButtonProps';

const lgPadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'py-3 ps-3 pe-4';
  }
  if (icon === 'right' || iconRight) {
    return 'py-3 ps-4 pe-3';
  }
  if (icon === 'only' || iconOnly) {
    return 'p-3';
  }
  return 'py-3 px-4';
};

export default lgPadding;
