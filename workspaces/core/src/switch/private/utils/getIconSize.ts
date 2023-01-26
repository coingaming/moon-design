import type Size from '../types/Size';

const getIconSize = (size?: Size) => {
  switch (size) {
    case '2xs':
      return 'text-moon-12';
    case 'xs':
      return 'text-moon-16';
    case 'sm':
    default:
      return 'text-moon-24';
  }
};

export default getIconSize;
