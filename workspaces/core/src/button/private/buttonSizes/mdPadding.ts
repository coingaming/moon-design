import type ButtonProps from '../types/ButtonProps';

const mdPadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'pt-2 pb-2 ps-2 pe-4';
  }
  if (icon === 'right' || iconRight) {
    return 'pt-2 pb-2 ps-4 pe-2';
  }
  if (icon === 'only' || iconOnly) {
    return 'py-2 ps-2 pe-2';
  }
  return 'py-2 ps-4 pe-4';
};

export default mdPadding;
