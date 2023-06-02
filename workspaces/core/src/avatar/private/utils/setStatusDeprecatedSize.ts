import type SizeProps from '../types/SizeProps';

const setStatusDeprecatedSize = (size?: SizeProps) => {
  if (size === 'xs') {
    return 'w-2 h-2 border';
  }
  if (size === 'sm' || size === 'md') {
    return 'w-3 h-3 border-2';
  }
  return 'w-4 h-4 border-2';
};

export default setStatusDeprecatedSize;
