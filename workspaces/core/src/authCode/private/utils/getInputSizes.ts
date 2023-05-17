import { AuthCodeTextSizes } from "../types/AuthCodeTypes";

const getInputSizes = (size: AuthCodeTextSizes) => {
  return {
    sm: 'leading-8 text-sm',
    md: 'leading-10 text-base',
    lg: 'leading-[3rem] text-lg',
    xl: 'leading-[3.5rem] text-xl',
  }[size] || 'leading-10 text-base';
};

export default getInputSizes;
