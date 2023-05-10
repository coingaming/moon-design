import type RowSizes from '../types/RowSizes';

const getFontSize = (rowSize: RowSizes) => {
  switch (rowSize) {
    case 'xs':
      return 'text-moon-12';
    default:
      return 'text-moon-14';
  }
};

export default getFontSize;
