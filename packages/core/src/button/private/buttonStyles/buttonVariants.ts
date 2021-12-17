import { useTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import type { ButtonProps } from '../../Button';

const buttonVariants = ({ variant }: ButtonProps) => {
  const { color } = useTheme();
  if (variant === 'fill') {
    return {
      backgroundColor: color.piccolo[100],
      color: color.goten[100],
    };
  }
  if (variant === 'stroke') {
    return {
      backgroundColor: 'transparent',
      color: color.bulma[100],
      boxShadow: `inset 0 0 0 ${rem(1)} ${color.trunks[100]}`,
    };
  }
  if (variant === 'fillSecondary') {
    return {
      backgroundColor: color.hit[100],
      color: color.goten[100],
    };
  }
  if (variant === 'ghost') {
    return {
      backgroundColor: 'transparent',
      color: color.trunks[100],
    };
  }
  return null;
};

export default buttonVariants;
