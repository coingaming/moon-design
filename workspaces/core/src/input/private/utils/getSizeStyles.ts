import type InputProps from '../types/InputProps';

const getSizeStyles = (size?: InputProps['size']): string => {
  switch (size) {
    case 'lg':
      return 'h-12 leading-[3rem] rounded-moon-i-sm input-lg-dt-shared';
    case 'sm':
      return 'h-8 leading-8 rounded-moon-i-xs input-dt-shared';
    default:
      return 'h-10 leading-10 rounded-moon-i-sm input-dt-shared';
  }
};

export default getSizeStyles;
