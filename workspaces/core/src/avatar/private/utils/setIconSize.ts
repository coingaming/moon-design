import type SizeProps from '../types/SizeProps';

const setIconSize = (size?: SizeProps) => {
  if (size === 'xs') {
    return 'text-moon-16';
  }
  if (size === '2xl') {
    return 'text-moon-32';
  }
  return 'text-moon-24';
};

export default setIconSize;
