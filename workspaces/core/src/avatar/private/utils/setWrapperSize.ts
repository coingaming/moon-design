import type SizeProps from '../types/SizeProps';

const setWrapperSize = (size?: SizeProps) => {
  if (size === 'xs') {
    return 'h-6 w-6 text-moon-10-caption';
  }
  if (size === 'sm') {
    return 'h-8 w-8 text-moon-12';
  }
  if (size === 'md') {
    return 'h-10 w-10 text-moon-14';
  }
  if (size === 'lg') {
    return 'h-12 w-12 text-moon-16';
  }
  if (size === 'xl') {
    return 'h-14 w-14 text-moon-16';
  }
  return 'h-16 w-16 text-moon-20';
};

export default setWrapperSize;
