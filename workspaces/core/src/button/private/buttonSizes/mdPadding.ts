import type ButtonProps from '../types/ButtonProps';

const mdPadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'py-2 ps-2 pe-4';
  }
  if (icon === 'right' || iconRight) {
    return 'py-2 ps-4 pe-2';
  }
  if (icon === 'only' || iconOnly) {
    return 'p-2';
  }
  return 'py-2 px-4';
};

export default mdPadding;
