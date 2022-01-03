import { useTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import type { ButtonProps } from '../../Button';

const buttonVariants = ({ variant }: ButtonProps) => {
  const { newTokens, color } = useTheme();
  if (variant === 'primary') {
    return newTokens.button.primary;
  }
  if (variant === 'secondary') {
    return newTokens.button.secondary;
  }
  if (variant === 'tertiary') {
    return newTokens.button.tertiary;
  }
  if (variant === 'ghost') {
    return {
      background: 'none',
      color: color.trunks[100],
      '&:hover': {
        color: color.bulma[100],
      },
    };
  }
  return null;
};

export default buttonVariants;
