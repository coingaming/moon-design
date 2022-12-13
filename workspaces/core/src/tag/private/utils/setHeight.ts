import type TagProps from '../types/TagProps';

const setHeight = ({ size }: TagProps) => {
  return size === '2xs' ? 'h-4' : 'h-6';
};

export default setHeight;
