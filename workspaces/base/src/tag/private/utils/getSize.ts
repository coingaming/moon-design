import type TagProps from '../types/TagProps';

const setSpacing = ({ size, iconRight, iconLeft }: TagProps) => {
  if (size === '2xs') {
    if (iconLeft && !iconRight) {
      return 'py-0 ps-0.5 pe-2 h-4';
    }
    if (!iconLeft && iconRight) {
      return 'py-0 ps-2 pe-0.5 h-4';
    }
    if (iconLeft && iconRight) {
      return 'py-0 px-0.5 h-4';
    }
    return 'py-0 px-2 h-4';
  }
  if (iconLeft && !iconRight) {
    return 'py-1 ps-1 pe-2 h-6';
  }
  if (!iconLeft && iconRight) {
    return 'py-1 ps-2 pe-1 h-6';
  }
  if (iconLeft && iconRight) {
    return 'p-1 h-6';
  }
  return 'py-1 px-2 h-6';
};

export default setSpacing;
