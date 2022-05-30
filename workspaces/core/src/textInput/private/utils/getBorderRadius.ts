const getBorderRadius = (size?: string) => {
  switch (size) {
    case 'xl':
      return 'rounded-moon-i-md';
    case 'lg':
      return 'rounded-moon-i-sm';
    default:
      return 'rounded-moon-i-sm';
  }
};

export default getBorderRadius;
