import { AuthCodeTextSizes } from '../types/AuthCodeTypes';

const getInputSizes = (size: AuthCodeTextSizes) => {
  return (
    {
      sm: 'text-moon-14',
      md: 'text-moon-16',
      lg: 'text-moon-18',
      xl: 'text-moon-20',
    }[size] || 'text-moon-16'
  );
};

export default getInputSizes;
