import type ButtonSizes from '../../types/ButtonSizes';

const getIconSize = (size?: ButtonSizes): string => {
  if (size === 'xs') {
    return 'text-moon-16';
  }
  return 'text-moon-24';
};

export default getIconSize;
