import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getXsPadding = ({
  iconLeft,
  iconRight,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (fullWidth) {
    return 'px-2';
  }
  if (iconLeft) {
    return 'ps-1 pe-2';
  }
  if (iconRight) {
    return 'ps-2 pe-1';
  }
  return 'px-2';
};

export default getXsPadding;
