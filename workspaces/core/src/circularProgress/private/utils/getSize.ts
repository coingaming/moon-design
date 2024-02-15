import type Sizes from '../types/Sizes';

const getSize = (size?: Sizes) => {
  switch (size) {
    case '2xs':
      return 'w-4 h-4';
    case 'xs':
      return 'w-6 h-6';
    case 'sm':
      return 'w-8 h-8';
    case 'lg':
      return 'w-12 h-12';
    case 'md':
    default:
      return 'w-10 h-10';
  }
};

export default getSize;
