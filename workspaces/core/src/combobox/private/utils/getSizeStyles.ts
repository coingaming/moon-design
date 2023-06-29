import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import { Size } from '../types/size';

const getSizeStyles = (size?: string, innerLabel?: boolean) => {
  const isLabel = innerLabel !== undefined && innerLabel;

  return mergeClassnames(
    size === 'sm' && 'py-1.5 px-2 rounded-moon-i-xs',
    (size === 'sm' || isLabel) && 'py-2 px-3 rounded-moon-i-xs gap-x-3',
    size === 'lg' && 'py-3 px-3 rounded-moon-i-sm',
    (size === 'xl' || isLabel) && 'py-3 px-4 rounded-moon-i-sm gap-x-4'
  );
};

const getTextSizes = (size: Size = 'md') => {
  return (
    {
      sm: 'text-moon-14 leading-4',
      md: 'text-moon-16 leading-5',
      lg: 'text-moon-18 leading-5',
      xl: 'text-moon-20 leading-5',
    }[size] || 'text-moon-16 leading-5'
  );
};

export { getSizeStyles, getTextSizes };
