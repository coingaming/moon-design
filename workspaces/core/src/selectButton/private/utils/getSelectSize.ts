const getSelectSize = (size?: 'sm' | 'md' | 'lg' | string) => {
  switch (size) {
    case 'lg':
      return 'h-12 p-3 rounded-moon-i-sm';
    case 'sm':
      return 'h-8 py-1 px-2 rounded-moon-i-xs';
    case 'md':
    default:
      return 'h-10 py-2 px-3 rounded-moon-i-sm';
  }
};

export default getSelectSize;
