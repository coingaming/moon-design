import { useTheme } from '@heathmont/moon-themes';
import type { ButtonProps } from '../../Button';

const buttonVariants = ({ variant }: ButtonProps) => {
  const { newTokens, colorNew } = useTheme();
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
      color: colorNew.trunks,
      '&:hover': {
        color: colorNew.bulma,
      },
    };
  }
  return null;
};

export default buttonVariants;
