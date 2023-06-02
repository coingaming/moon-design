import type SizeProps from '../types/SizeProps';

const setStatusSize = (size?: SizeProps) => {
  if (size === 'xs') {
    return '[&_.status]:w-2 [&_.status]:h-2 [&_.status]:border';
  }
  if (size === 'sm' || size === 'md') {
    return '[&_.status]:w-3 [&_.status]:h-3 [&_.status]:border-2';
  }
  return '[&_.status]:w-4 [&_.status]:h-4 [&_.status]:border-2';
};

export default setStatusSize;
