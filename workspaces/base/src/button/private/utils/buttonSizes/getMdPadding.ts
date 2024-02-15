import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getMdPadding = ({
  iconLeft,
  iconRight,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-4';
  }
  if (iconLeft) {
    return 'ps-2 pe-4';
  }
  if (iconRight) {
    return 'ps-4 pe-2';
  }
  return 'px-4';
};

export default getMdPadding;
