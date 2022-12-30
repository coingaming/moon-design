import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getXlPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-6';
  }
  if (icon === 'left' || iconLeft) {
    return 'ps-4 pe-6';
  }
  if (icon === 'right' || iconRight) {
    return 'ps-6 pe-4';
  }
  if (icon === 'only' || iconOnly) {
    return 'px-4';
  }
  return 'px-6';
};

export default getXlPadding;
