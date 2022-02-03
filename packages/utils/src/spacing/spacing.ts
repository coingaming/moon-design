import { useTheme } from '@heathmont/moon-themes';
import rem from '../rem/rem';

const spacing = (size: any = 'default', unit?: string) => {
  const { space } = useTheme();

  if (size === 0) {
    return 0;
  }

  return unit === 'px' ? `${space[size]}px` : rem(space[size]) || 0;
};

export default spacing;
