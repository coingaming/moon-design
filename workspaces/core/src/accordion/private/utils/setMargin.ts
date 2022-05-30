import AccordionSizes from '../types/AccordionSizes';

const setMargin = (size?: AccordionSizes) => {
  switch (size) {
    case 'xl':
      return 'mt-4';
    case 'lg':
      return 'mt-3';
    default:
      return 'mt-2';
  }
};

export default setMargin;
