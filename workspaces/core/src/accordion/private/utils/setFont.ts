import AccordionSizes from '../types/AccordionSizes';

const setFont = (size?: AccordionSizes) => {
  switch (size) {
    case 'xl':
      return `text-moon-16`;
    default:
      return `text-moon-14`;
  }
};

export default setFont;
