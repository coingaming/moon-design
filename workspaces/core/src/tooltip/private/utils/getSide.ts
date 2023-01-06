import type ContentProps from '../types/ContentProps';
import type Side from '../types/Side';

const getSide = (position: ContentProps['position']): Side => {
  switch (position) {
    case 'top-start':
      return 'top';
    case 'top-end':
      return 'top';
    case 'bottom-start':
      return 'bottom';
    case 'bottom-center':
      return 'bottom';
    case 'bottom-end':
      return 'bottom';
    case 'left':
      return 'left';
    case 'right':
      return 'right';
    default:
      return 'top';
  }
};

export default getSide;
