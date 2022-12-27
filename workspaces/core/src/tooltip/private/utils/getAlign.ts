import type Align from '../types/Align';
import type ContentProps from '../types/ContentProps';

const getAlign = (position: ContentProps['position']): Align => {
  switch (position) {
    case 'top-start':
      return 'start';
    case 'top-end':
      return 'end';
    case 'bottom-start':
      return 'start';
    case 'bottom-center':
      return 'center';
    case 'bottom-end':
      return 'end';
    case 'left':
      return undefined;
    case 'right':
      return undefined;
    default:
      return 'center';
  }
};

export default getAlign;
