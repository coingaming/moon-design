import type AccordionSizes from '../type/AccordionSizes';

const setFont = (size?: AccordionSizes) => {
  switch (size) {
    case 'xl':
      return `text-moon-16`;
    case 'sm':
      return `text-moon-12`;
    default:
      return `text-moon-14`;
  }
};

export default setFont;
