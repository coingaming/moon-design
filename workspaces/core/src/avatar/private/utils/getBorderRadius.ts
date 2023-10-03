import type SizeProps from '../types/SizeProps';

const getWrapperSize = (size?: SizeProps, isRounded?: boolean) => {
  if (isRounded) {
    return 'rounded-full';
  }
  if (size === 'xs') {
    return 'rounded-moon-i-xs';
  }
  if (size === '2xl') {
    return 'rounded-moon-i-md';
  }
  return 'rounded-moon-i-sm';
};

export default getWrapperSize;
