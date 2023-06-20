import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import { Size } from '../types/size';

const getSizeStyles = (size?: string, innerLabel?: boolean) => {
  const isLabel = innerLabel !== undefined && innerLabel;

  return mergeClassnames(
    size === 'sm' && 'py-1.5 px-2 rounded',
    (size === 'sm' || isLabel) && 'py-2 px-3 rounded-md gap-x-3',
    size === 'lg' && 'py-3 px-3',
    (size === 'xl' || isLabel) && 'py-3 px-4 rounded-xl gap-x-4'
  );
};

const getTextSizes = (size: Size = 'md') => {
  return (
    {
      sm: 'text-moon-14',
      md: 'text-moon-16',
      lg: 'text-moon-18',
      xl: 'text-moon-20',
    }[size] || 'text-moon-16'
  );
};

export { getSizeStyles, getTextSizes };
