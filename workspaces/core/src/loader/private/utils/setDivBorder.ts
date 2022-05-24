import type LoaderSize from '../types/LoaderSize';

const setDivBorder = (size?: LoaderSize) => {
  switch (size) {
    case '2xs':
    case 'xs':
    case 'sm':
      return 'border-2 border-solid';
    case 'md':
    case 'lg':
      return 'border-4 border-solid';
    default:
      return;
  }
};

export default setDivBorder;
