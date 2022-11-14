import type LabelProps from '../types/LabelProps';

const setHeight = ({ size }: LabelProps) => {
  return size === '2xs' ? 'h-4' : 'h-6';
};

export default setHeight;
