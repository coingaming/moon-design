import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getSmPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-3';
  }
  if (icon === 'left' || iconLeft) {
    return 'ps-1 pe-3';
  }
  if (icon === 'right' || iconRight) {
    return 'ps-3 pe-1';
  }
  if (icon === 'only' || iconOnly) {
    return 'px-1';
  }
  return 'px-3';
};

export default getSmPadding;
