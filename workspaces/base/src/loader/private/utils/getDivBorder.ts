import type LoaderSize from '../types/LoaderSize';

const getDivBorder = (size?: LoaderSize) => {
  switch (size) {
    case '2xs':
    case 'xs':
    case 'sm':
      return 'border-2 border-solid';
    default:
      return 'border-4 border-solid';
  }
};

export default getDivBorder;
