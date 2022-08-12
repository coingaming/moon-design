const getSizeStyles = (size?: string) => {
  switch (size) {
    case 'xl':
      return 'h-14 leading-[3.5rem] rounded-moon-i-md';
    case 'lg':
      return 'h-12 leading-[3rem] rounded-moon-i-sm';
    default:
      return 'h-10 leading-10 rounded-moon-i-sm';
  }
};

export default getSizeStyles;
