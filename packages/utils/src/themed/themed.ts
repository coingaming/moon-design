import has from 'lodash.has';
import get from 'lodash.get';
import { Theme } from '@heathmont/moon-themes';

import rem from '../rem/rem';

const themed = (key: keyof Theme, value: string | number | undefined) => (
  theme: Theme,
) => {
  const path = `${key}.${value}`;
  if (has(theme, path)) {
    const themedValue = get(theme, path);
    return ['space', 'radius'].includes(key) ? rem(themedValue) : themedValue;
  }
  return value;
};

export default themed;
