import type AccordionSizes from '../type/AccordionSizes';

const getSize = (size?: AccordionSizes) => {
  switch (size) {
    case 'xl':
      return '[&_summary_svg]:text-moon-24 [&_summary]:p-4 [&_.content-outside]:mt-4 text-moon-16';
    case 'lg':
      return '[&_summary_svg]:text-moon-24 [&_summary]:p-3 [&_.content-outside]:mt-3 text-moon-14';
    case 'sm':
      return '[&_summary_svg]:text-moon-16 [&_summary]:p-2 [&_.content-outside]:mt-2 text-moon-12';
    case 'md':
    default:
      return '[&_summary_svg]:text-moon-24 [&_summary]:p-2 [&_.content-outside]:mt-2 [&_summary]:ps-3 text-moon-14';
  }
};

export default getSize;
