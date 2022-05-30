import type ButtonProps from '../types/ButtonProps';

const smPadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'p-1 pr-3';
  }
  if (icon === 'right' || iconRight) {
    return 'p-1 pl-3';
  }
  if (icon === 'only' || iconOnly) {
    return 'p-1';
  }
  return 'py-1 px-3';
};

export default smPadding;
