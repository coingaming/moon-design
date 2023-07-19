import type AccordionSizes from '../type/AccordionSizes';

const setMargin = (size?: AccordionSizes) => {
  switch (size) {
    case 'xl':
      return '[&_.content-out]:mt-4';
    case 'lg':
      return '[&_.content-out]:mt-3';
    default:
      return '[&_.content-out]:mt-2';
  }
};

export default setMargin;
