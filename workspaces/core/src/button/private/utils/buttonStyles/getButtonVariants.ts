import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getButtonVariants = (variant: ButtonSettingsProps['variant']): string => {
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

export default getButtonVariants;
