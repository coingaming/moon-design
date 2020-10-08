import polishedRem from 'polished/lib/helpers/rem';
import { sharedTokens } from '@heathmont/moon-themes';

const rem = (value: string | number, baseFontSize: string | number = 16) => {
  return polishedRem(value, baseFontSize || sharedTokens.base.fontSize);
};

export default rem;
