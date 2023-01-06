import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getButtonVariants = ({ variant }: ButtonSettingsProps): string => {
  if (variant === 'secondary') {
    return 'btn-secondary focus:ring-bulma/[.2]';
  }
  if (variant === 'tertiary') {
    return 'btn-tertiary focus:ring-piccolo/[.2]';
  }
  if (variant === 'ghost') {
    return 'text-trunks bg-transparent hover:text-bulma focus:ring-bulma/[.2]';
  }
  return 'btn-primary focus:ring-piccolo/[.2]';
};

export default getButtonVariants;
