import { base } from '@heathmont/sportsbet-tokens';
import polishedRem from 'polished/lib/helpers/rem';

/**
 * @TODO: Once use of polished rem has been dropped, `base` will be set to the
 * base.fontSize token instead of base.spacing
 */
export const rem = (
  value: string | number,
  baseValue: string | number = base.spacing
) => polishedRem(value, baseValue);
