import LabelProps from '../private/types/LabelProps';

const setFontSize = ({ size, isUppercase }: LabelProps) => {
  if (isUppercase) {
    return size === '2xs' ? 'text-[0.563]' : 'text-[0.625]';
  }
  return size === '2xs' ? 'text-[0.625]' : 'text-[0.75]';
};

export default setFontSize;
