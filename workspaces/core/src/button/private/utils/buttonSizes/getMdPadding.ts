import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getMdPadding = ({
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
    return 'ps-2 pe-4';
  }
  if (icon === 'right' || iconRight) {
    return 'ps-4 pe-2';
  }
  if (icon === 'only' || iconOnly) {
    return 'px-2';
  }
  return 'px-4';
};

export default getMdPadding;
