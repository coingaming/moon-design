import mergeClassnames from '../../../../mergeClassnames/mergeClassnames';
import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getButtonVariants = ({
  variant,
  disabled,
}: ButtonSettingsProps): string => {
  if (variant === 'secondary') {
    return 'btn-secondary';
  }
  if (variant === 'tertiary') {
    return 'btn-tertiary';
  }
  if (variant === 'ghost') {
    return mergeClassnames(
      'text-trunks bg-transparent',
      !disabled && 'hover:text-bulma'
    );
  }
  return 'btn-primary';
};

export default getButtonVariants;
