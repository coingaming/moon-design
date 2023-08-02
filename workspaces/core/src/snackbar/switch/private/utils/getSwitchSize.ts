import type Size from '../types/Size';

const getSwitchSize = (size?: Size) => {
  switch (size) {
    case '2xs':
      return 'w-7 h-4 p-0.5';
    case 'xs':
      return 'w-11 h-6 p-1';
    case 'sm':
    default:
      return 'w-[3.75rem] h-8 p-1';
  }
};

export default getSwitchSize;
