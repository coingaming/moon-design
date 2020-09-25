import isFirstDayOfMonth from 'date-fns/isFirstDayOfMonth';
import isSameMonth from 'date-fns/isSameMonth';
import format from 'date-fns/format';

export const getDayNumberLabel = (cursorDate: Date, date: Date) => {
  if (isSameMonth(cursorDate, date) && isFirstDayOfMonth(date)) {
    return format(date, 'MMM d');
  }
  return date.getDate();
};
