import polishedRem from 'polished/lib/helpers/rem';
import { shared } from '@heathmont/moon-themes';

const rem = (value: string | number, baseFontSize: string | number = 16) => {
  return polishedRem(value, baseFontSize || shared.base.fontSize);
};

export default rem;
