import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getLgPadding = ({
  iconLeft,
  iconRight,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-4';
  }
  if (iconLeft) {
    return 'ps-3 pe-4';
  }
  if (iconRight) {
    return 'ps-4 pe-3';
  }
  return 'px-4';
};

export default getLgPadding;
