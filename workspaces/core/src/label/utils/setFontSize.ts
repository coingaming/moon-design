import LabelProps from '../private/types/LabelProps';

const setFontSize = ({ size, isUppercase }: LabelProps) => {
  if (isUppercase) {
    return size === '2xs' ? 'text-[0.563rem]' : 'text-[0.625rem]';
  }
  return size === '2xs' ? 'text-[0.625rem]' : 'text-[0.75rem]';
};

export default setFontSize;
