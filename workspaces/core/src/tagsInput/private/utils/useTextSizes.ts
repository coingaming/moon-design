import Size from "../types/Size";

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

export default getTextSizes;
