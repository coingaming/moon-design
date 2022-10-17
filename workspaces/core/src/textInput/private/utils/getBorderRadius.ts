const getBorderRadius = (size?: string) => {
  switch (size) {
    case 'xl':
    case 'lg':
      return 'rounded-moon-i-sm';
    default:
      return 'rounded-moon-i-xs';
  }
};

export default getBorderRadius;
