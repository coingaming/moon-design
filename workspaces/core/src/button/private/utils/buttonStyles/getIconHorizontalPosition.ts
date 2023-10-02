import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

type Props = { iconElement?: JSX.Element } & ButtonSettingsProps;

const getIconHorizontalPosition = ({
  iconRight,
  iconLeft,
  size,
}: Pick<Props, 'iconRight' | 'iconLeft' | 'size'>): string => {
  if (iconRight) {
    switch (size) {
      case 'xs':
      case 'sm':
        return 'end-1';
      case 'lg':
        return 'end-3';
      case 'xl':
        return 'end-4';
      default:
        return 'end-2';
    }
  }
  if (iconLeft) {
    switch (size) {
      case 'xs':
      case 'sm':
        return 'start-1';
      case 'lg':
        return 'start-3';
      case 'xl':
        return 'start-4';
      default:
        return 'start-2';
    }
  }
  return '';
};

export default getIconHorizontalPosition;
