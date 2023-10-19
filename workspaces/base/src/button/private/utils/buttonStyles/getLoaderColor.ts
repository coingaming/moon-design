import type ButtonVariants from '../../types/ButtonVariants';

const getLoaderColor = (variant?: ButtonVariants): string => {
  switch (variant) {
    case 'secondary':
    case 'outline':
      return 'border-bulma';
    case 'ghost':
      return 'border-trunks';
    default:
      return 'border-goten';
  }
};

export default getLoaderColor;
