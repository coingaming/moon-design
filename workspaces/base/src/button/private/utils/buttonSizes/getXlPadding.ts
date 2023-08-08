import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getXlPadding = ({
  iconLeft,
  iconRight,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-6';
  }
  if (iconLeft) {
    return 'ps-4 pe-6';
  }
  if (iconRight) {
    return 'ps-6 pe-4';
  }
  return 'px-6';
};

export default getXlPadding;
