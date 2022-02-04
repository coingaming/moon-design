import { useTheme } from '@heathmont/moon-themes';
import type { ButtonProps } from '../../Button';

const buttonVariants = ({ variant }: ButtonProps) => {
  const { componentsTokens, colorNew } = useTheme();
  if (variant === 'primary') {
    return componentsTokens.button.primary;
  }
  if (variant === 'secondary') {
    return componentsTokens.button.secondary;
  }
  if (variant === 'tertiary') {
    return componentsTokens.button.tertiary;
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
