import type { IconButtonSettingsProps } from '../types/IconButtonProps';

const buttonVariants = ({ variant }: IconButtonSettingsProps) => {
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
