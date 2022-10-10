import type { ButtonSettingsProps } from '../types/ButtonProps';

const smPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonSettingsProps) => {
  if (icon === 'left' || iconLeft) {
    return 'p-1 pe-3';
  }
  if (icon === 'right' || iconRight) {
    return 'p-1 ps-3';
  }
  if (icon === 'only' || iconOnly) {
    return 'p-1';
  }
  return 'py-1 px-3';
};

export default smPadding;
