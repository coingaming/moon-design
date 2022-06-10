import type AccordionSizes from '../types/AccordionSizes';

const setPadding = (isContentInside?: boolean, size?: AccordionSizes) => {
  if (isContentInside) {
    switch (size) {
      case 'xl':
        return 'p-4';
      case 'lg':
        return 'p-3';
      case 'sm':
        return 'py-1 ps-3 pe-1';
      default:
        return 'py-2 ps-3 pe-2';
    }
  }
  return '';
};

export default setPadding;
