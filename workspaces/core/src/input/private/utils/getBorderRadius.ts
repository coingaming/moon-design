import type InputProps from '../types/InputProps';

const getBorderRadius = (size?: InputProps['size'] | 'xl'): string => {
  switch (size) {
    case 'xl':
    case 'lg':
      return 'rounded-moon-i-sm';
    default:
      return 'rounded-moon-i-xs';
  }
};

export default getBorderRadius;
