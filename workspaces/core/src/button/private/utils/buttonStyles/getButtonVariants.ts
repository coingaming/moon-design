import mergeClassnames from '../../../../mergeClassnames/mergeClassnames';
import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getButtonVariants = ({
  variant,
  disabled,
}: Pick<ButtonSettingsProps, 'variant' | 'disabled'>): string => {
  if (variant === 'secondary' || variant === 'outline') {
    return 'text-bulma bg-transparent ring-inset ring-1 ring-trunks hover:ring-bulma';
  }
  if (variant === 'tertiary') {
    return 'text-goten bg-hit';
  }
  if (variant === 'ghost') {
    return mergeClassnames(
      'text-trunks bg-transparent',
      !disabled && 'hover:text-bulma'
    );
  }
  if (variant === 'primary' || variant === 'fill') {
    return 'text-goten bg-piccolo';
  }
  return '';
};

export default getButtonVariants;
