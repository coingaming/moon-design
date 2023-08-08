import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

type Props = { iconElement?: JSX.Element } & ButtonSettingsProps;

const getIconHorizontalPosition = ({
  iconRight,
  iconLeft,
  size,
}: Props): string => {
  if (iconRight) {
    switch (size) {
      case 'xs':
      case 'sm':
        return 'ltr:right-1 rtl:left-1';
      case 'lg':
        return 'ltr:right-3 rtl:left-3';
      case 'xl':
        return 'ltr:right-4 rtl:left-4';
      default:
        return 'ltr:right-2 rtl:left-2';
    }
  }
  if (iconLeft) {
    switch (size) {
      case 'xs':
      case 'sm':
        return 'ltr:left-1 rtl:right-1';
      case 'lg':
        return 'ltr:left-3 rtl:right-3';
      case 'xl':
        return 'ltr:left-4 rtl:right-4';
      default:
        return 'ltr:left-2 rtl:right-2';
    }
  }
  return '';
};

export default getIconHorizontalPosition;
