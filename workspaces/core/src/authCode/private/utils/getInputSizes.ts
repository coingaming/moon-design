import { AuthCodeTextSizes } from "../types/AuthCodeTypes";

const getInputSizes = (size: AuthCodeTextSizes) => {
  return {
    sm: 'h-14 w-[2.875rem] leading-8 text-sm rounded-xl',
    md: 'h-14 w-[2.875rem] leading-10 text-base rounded-xl',
    lg: 'h-14 w-[2.875rem] leading-[3rem] text-lg rounded-xl',
    xl: 'h-14 w-[2.875rem] leading-[3.5rem] text-xl rounded-xl',
  }[size] || 'h-14 w-[2.875rem] leading-10 text-base rounded-xl';
};

export default getInputSizes;
