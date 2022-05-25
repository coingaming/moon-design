import type ButtonProps from '../types/ButtonProps';

const buttonVariants = ({ variant }: ButtonProps) => {
  if (variant === 'secondary') {
    return 'btn-secondary';
  }
  if (variant === 'tertiary') {
    return 'btn-tertiary';
  }
  if (variant === 'ghost') {
    return 'text-trunks bg-transparent hover:text-bulma';
  }
  return 'btn-primary';
};

export default buttonVariants;
