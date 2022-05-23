import type ButtonProps from '../types/ButtonProps';

const buttonVariants = ({ variant }: ButtonProps) => {
  if (variant === 'primary') {
    return 'btn-primary';
  }
  if (variant === 'secondary') {
    return 'btn-secondary';
  }
  if (variant === 'tertiary') {
    return 'btn-tertiary';
  }
  if (variant === 'ghost') {
    return 'text-trunks bg-transparent hover:text-bulma';
  }
  return '';
};

export default buttonVariants;
