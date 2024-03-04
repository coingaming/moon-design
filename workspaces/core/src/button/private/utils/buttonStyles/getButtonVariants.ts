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
          !disabled && 'hover-supported:hover:bg-chichi-10'
        )
      : mergeClassnames(
          'text-bulma bg-transparent ring-inset ring-1 ring-trunks',
          !disabled &&
            'hover-supported:hover:ring-bulma hover-supported:[&>.hover]:hover:bg-heles'
        );
  }
  if (variant === 'tertiary') {
    return animation === 'error' ? 'text-goten bg-chichi' : 'text-goten bg-hit';
  }
  if (variant === 'ghost') {
    return animation === 'error'
      ? mergeClassnames(
          'text-chichi bg-transparent',
          !disabled && 'hover-supported:hover:bg-chichi-10'
        )
      : mergeClassnames(
          'text-trunks bg-transparent',
          !disabled &&
            'hover-supported:hover:text-bulma hover-supported:[&>.hover]:hover:bg-jiren'
        );
  }
  return animation === 'error'
    ? 'text-goten bg-chichi'
    : 'text-goten bg-piccolo hover-supported:[&>.hover]:hover:bg-heles';
};

export default getButtonVariants;
