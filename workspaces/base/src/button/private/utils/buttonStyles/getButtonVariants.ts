import mergeClassnames from '../../../../mergeClassnames/mergeClassnames';
import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getButtonVariants = ({
  variant,
  disabled,
  animation,
}: Pick<ButtonSettingsProps, 'variant' | 'disabled' | 'animation'>): string => {
  if (variant === 'secondary' || variant === 'outline') {
    return animation === 'error'
      ? mergeClassnames(
          'text-chichi bg-transparent ring-inset ring-1 ring-chichi',
          !disabled && 'hover:bg-chichi-10'
        )
      : mergeClassnames(
          'text-bulma bg-transparent ring-inset ring-1 ring-trunks',
          !disabled && 'hover:ring-bulma'
        );
  }
  if (variant === 'tertiary') {
    return animation === 'error' ? 'text-goten bg-chichi' : 'text-goten bg-hit';
  }
  if (variant === 'ghost') {
    return animation === 'error'
      ? mergeClassnames(
          'text-chichi bg-transparent',
          !disabled && 'hover:bg-chichi-10'
        )
      : mergeClassnames(
          'text-trunks bg-transparent',
          !disabled && 'hover:text-bulma'
        );
  }
  return animation === 'error'
    ? 'text-goten bg-chichi'
    : 'text-goten bg-piccolo';
};

export default getButtonVariants;
