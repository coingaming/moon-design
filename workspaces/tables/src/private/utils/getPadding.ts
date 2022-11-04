import type RowSizes from '../types/RowSizes';

const getPadding = (rowSize: RowSizes) => {
  switch (rowSize) {
    case '2xs':
      return 'px-2 py-0';
    case 'xs':
      return 'px-2 py-1';
    case 'sm':
      return 'px-3 py-1';
    case 'lg':
      return 'px-3 py-3';
    case 'xl':
      return 'px-3 py-4';
    case '2xl':
      return 'px-3 py-5';
    case 'md':
    default:
      return 'px-3 py-2';
  }
};

export default getPadding;
