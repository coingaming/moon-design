import { useTheme } from '@heathmont/moon-themes';
import type ButtonProps from '../../private/types/ButtonProps';

const buttonVariants = ({ variant }: ButtonProps) => {
  const theme = useTheme();
  if (variant === 'primary') {
    return theme.button.primary;
  }
  if (variant === 'secondary') {
    return theme.button.secondary;
  }
  if (variant === 'tertiary') {
    return theme.button.tertiary;
  }
  if (variant === 'ghost') {
    return {
      background: 'none',
      color: theme.colorNew.trunks,
      '&:hover': {
        color: theme.colorNew.bulma,
      },
    };
  }
  return null;
};

export default buttonVariants;
