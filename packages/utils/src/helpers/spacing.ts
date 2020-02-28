import { useTheme, SpaceProps } from '@heathmont/sportsbet-themes';

import rem from './rem';

export type SpacingSize = SpaceProps | 0;
export type SpacingUnit = string;

const spacing = (size: SpacingSize = 'default', unit?: SpacingUnit) => {
  const { space } = useTheme();

  if (size === 0) {
    return 0;
  }

  return unit === 'px' ? `${space[size]}px` : rem(space[size]) || 0;
};

export default { spacing };
