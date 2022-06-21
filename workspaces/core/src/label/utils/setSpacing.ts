import LabelProps from '../private/types/LabelProps';

const setSpacing = ({ size, iconRight, iconLeft }: LabelProps) => {
  if (size === '2xs') {
    if (iconLeft && !iconRight) {
      return 'py-0 ps-0.5 pe-2';
    }
    if (!iconLeft && iconRight) {
      return 'py-0 ps-2 pe-0.5';
    }
    if (iconLeft && iconRight) {
      return 'py-0 px-0.5';
    }
    return 'py-0 px-2';
  }
  if (iconLeft && !iconRight) {
    return 'py-1 ps-1 pe-2';
  }
  if (!iconLeft && iconRight) {
    return 'py-1 ps-2 pe-1';
  }
  if (iconLeft && iconRight) {
    return 'p-1';
  }
  return 'py-1 px-2';
};

export default setSpacing;
