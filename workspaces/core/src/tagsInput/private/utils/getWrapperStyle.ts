import type Size from '../types/Size';

const getWrapperStyle = (size: Size) =>
  ({
    sm: 'rounded-moon-i-xs px-2 py-1',
    md: 'rounded-moon-i-sm px-3 py-2',
    lg: 'rounded-moon-i-sm px-3 py-3',
  }[size] || 'rounded-moon-i-sm px-3 py-2');

export default getWrapperStyle;
