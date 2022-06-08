import type SizeProps from '../types/SizeProps';

const setIconSize = (size?: SizeProps) => {
  if (size === 'xs') {
    return 'text-[1rem]';
  }
  if (size === '2xl') {
    return 'text-[2rem]';
  }
  return 'text-[1.5rem]';
};

export default setIconSize;
