import type TagProps from '../types/TagProps';

const setFontSize = ({ size, isUppercase }: TagProps) => {
  if (isUppercase) {
    return size === '2xs'
      ? 'text-moon-9-caption uppercase font-medium'
      : 'text-moon-10-caption uppercase font-medium';
  }
  return size === '2xs' ? 'text-moon-10' : 'text-moon-12';
};

export default setFontSize;
