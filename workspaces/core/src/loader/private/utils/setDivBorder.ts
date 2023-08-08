import type LoaderSize from '../types/LoaderSize';

const setDivBorder = (size?: LoaderSize) => {
  switch (size) {
    case '2xs':
    case 'xs':
    case 'sm':
      return 'border-2';
    default:
      return 'border-4';
  }
};

export default setDivBorder;
