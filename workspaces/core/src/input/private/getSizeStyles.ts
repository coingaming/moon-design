const getSizeStyles = (size?: string) => {
  switch (size) {
    case 'xl':
      return 'h-14 leading-[3.5rem] rounded-moon-i-sm hover:rounded-moon-i-sm focus:rounded-moon-i-sm invalid:rounded-moon-i-sm';
    case 'lg':
      return 'h-12 leading-[3rem] rounded-moon-i-sm hover:rounded-moon-i-sm focus:rounded-moon-i-sm invalid:rounded-moon-i-sm';
    case 'sm':
      return 'h-8 leading-8 rounded-moon-i-xs hover:rounded-moon-i-xs focus:rounded-moon-i-xs invalid:rounded-moon-i-xs';
    default:
      return 'h-10 leading-10 rounded-moon-i-xs hover:rounded-moon-i-xs focus:rounded-moon-i-xs invalid:rounded-moon-i-xs';
  }
};

export default getSizeStyles;
