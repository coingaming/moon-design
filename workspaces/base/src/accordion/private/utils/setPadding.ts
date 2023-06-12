import type AccordionSizes from '../type/AccordionSizes';

const setPadding = (size?: AccordionSizes) => {
  switch (size) {
    case 'xl':
      return '[&_summary_h3]:p-4';
    case 'lg':
      return '[&_summary_h3]:p-3';
    case 'sm':
      return '[&_summary_h3]:p-2';
    default:
      return '[&_summary_h3]:py-2 [&_summary_h3]:ps-3 [&_summary_h3]:pe-2';
  }
};

export default setPadding;
