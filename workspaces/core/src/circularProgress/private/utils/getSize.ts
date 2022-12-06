import type Sizes from '../types/Sizes';

const getCircularSize = (size: Sizes) => {
  switch (size) {
    case '2xs':
      return '1rem';
    case 'xs':
      return '1.5rem';
    case 'sm':
      return '2rem';
    case 'lg':
      return '3rem';
    case 'md':
    default:
      return '2.5rem';
  }
};

export default getCircularSize;
