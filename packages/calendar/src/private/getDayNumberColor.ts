import { ColorNames } from '@heathmont/moon-themes';
import isSameMonth from 'date-fns/isSameMonth';
import isToday from 'date-fns/isToday';

export const getDayNumberColor = (
  cursorDate: Date,
  dayDate: Date
): ColorNames => {
  if (isToday(dayDate)) {
    return 'piccolo.100';
  }
  if (isSameMonth(cursorDate, dayDate)) {
    return 'bulma.100';
  }
  return 'trunks.100';
};
