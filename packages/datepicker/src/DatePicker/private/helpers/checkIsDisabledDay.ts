import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import { DisabledDaysRange } from '../../DatePicker';

export const checkIsDisabledDay = (
  day: Date,
  disabledDays?: Date | Date[] | DisabledDaysRange
) => {
  if (!disabledDays) {
    return false;
  }
  if (typeof disabledDays === 'object') {
    const disabledRange = disabledDays as DisabledDaysRange;
    if (disabledRange.from && disabledRange.to) {
      if (isBefore(disabledRange.from, disabledRange.to)) {
        return isWithinInterval(day, {
          start: disabledRange.from,
          end: disabledRange.to,
        });
      }
      return (
        isAfter(day, disabledRange.from) || isBefore(day, disabledRange.to || 0)
      );
    }
    if (disabledRange.from) {
      return isAfter(day, disabledRange.from);
    }
    if (disabledRange.to) {
      return isBefore(day, disabledRange.to || 0);
    }
  }
  if (Array.isArray(disabledDays)) {
    return disabledDays.some((d) => isSameDay(d, day));
  }
  const currentDay = disabledDays as Date;
  return isSameDay(currentDay, day);
};
