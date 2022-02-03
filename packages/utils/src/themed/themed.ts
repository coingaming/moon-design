import get from 'lodash.get';
import has from 'lodash.has';
import rem from '../rem/rem';

const themed =
  (key: any, value: string | number | undefined) => (theme: any) => {
    const path = `${String(key)}.${value}`;
    if (has(theme, path)) {
      const themedValue = get(theme, path);
      return ['space', 'radius'].includes(String(key))
        ? rem(themedValue)
        : themedValue;
    }
    return value;
  };

export default themed;
