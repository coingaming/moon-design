import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getLgPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-4';
  }
  if (icon === 'left' || iconLeft) {
    return 'ps-3 pe-4';
  }
  if (icon === 'right' || iconRight) {
    return 'ps-4 pe-3';
  }
  if (icon === 'only' || iconOnly) {
    return 'px-3';
  }
  return 'px-4';
};

export default getLgPadding;
