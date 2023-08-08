import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getSmPadding = ({
  iconLeft,
  iconRight,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-3';
  }
  if (iconLeft) {
    return 'ps-1 pe-3';
  }
  if (iconRight) {
    return 'ps-3 pe-1';
  }
  return 'px-3';
};

export default getSmPadding;
