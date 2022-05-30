import Size from '../../../private/enums/Size';
import type SizeProps from '../types/SizeProps';

const setWrapperSize = (size?: SizeProps) => {
  if (size === 'xs') {
    return 'h-6 w-6 text-moon-10 tracking-[0.03125rem] moon-i-xs';
  }
  if (size === 'sm') {
    return 'h-8 w-8 text-moon-12 moon-i-sm';
  }
  if (size === 'md') {
    return 'h-10 w-10 text-moon-14 moon-i-sm';
  }
  if (size === 'lg') {
    return 'h-12 w-12 text-moon-16 moon-i-sm';
  }
  if (size === 'xl') {
    return 'h-14 w-14 text-moon-16 moon-i-sm';
  }
  return 'h-16 w-16 text-moon-20 moon-i-md';
};

export default setWrapperSize;
