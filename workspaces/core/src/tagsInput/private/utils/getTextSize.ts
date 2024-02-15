import Size from '../types/Size';

const getTextSize = (size: Size) =>
  ({
    sm: 'text-moon-14',
    md: 'text-moon-16',
    lg: 'text-moon-16',
  }[size] || 'text-moon-16');

export default getTextSize;
