const getLabelSize = (size?: string) => {
  switch (size) {
    case 'sm':
      return 'text-moon-14';
    default:
      return 'text-moon-16';
  }
};

export default getLabelSize;
