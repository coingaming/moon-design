import type ButtonProps from '../types/ButtonProps';

const xsPadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'p-1 pe-2';
  }
  if (icon === 'right' || iconRight) {
    return 'p-1 ps-2';
  }
  if (icon === 'only' || iconOnly) {
    return 'p-1';
  }
  return 'py-1 px-2';
};

export default xsPadding;
