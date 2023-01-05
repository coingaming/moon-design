import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getXsPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-2';
  }
  if (icon === 'left' || iconLeft) {
    return 'ps-1 pe-2';
  }
  if (icon === 'right' || iconRight) {
    return 'ps-2 pe-1';
  }
  if (icon === 'only' || iconOnly) {
    return 'px-1';
  }
  return 'px-2';
};

export default getXsPadding;
