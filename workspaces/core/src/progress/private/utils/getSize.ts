import type Sizes from '../types/Sizes';

const getLinearSize = (size: Sizes) => {
  switch (size) {
    case '6xs':
      return 'h-0.5';
    case '5xs':
      return 'h-1';
    case '4xs':
      return 'h-2';
    case '3xs':
      return 'h-3';
    case '2xs':
    default:
      return 'h-4';
  }
};

export default getLinearSize;
