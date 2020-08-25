import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import addMonths from 'date-fns/addMonths';
import addWeeks from 'date-fns/addWeeks';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import subHours from 'date-fns/subHours';
import addMinutes from 'date-fns/addMinutes';

type WeekStartType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;

export const getDatesFromRange = (
  range: string,
  weekStartsOn: WeekStartType = 1,
  now = new Date()
) => {
  const lastWeek = subWeeks(now, 1);
  const nextWeek = addWeeks(now, 1);
  const lastMonth = subMonths(now, 1);
  const nextMonth = addMonths(now, 1);
  const today = now;
  const yesterday = subDays(now, 1);
  const tommorow = addDays(now, 1);
  const offset = now.getTimezoneOffset();

  switch (range) {
    case 'tommorow':
      return [startOfDay(tommorow), endOfDay(tommorow)];
    case 'nextWeek':
      return [
        startOfWeek(nextWeek, { weekStartsOn }),
        endOfWeek(nextWeek, { weekStartsOn }),
      ];
    case 'nextMonth':
      return [startOfMonth(nextMonth), endOfMonth(nextMonth)];
    case 'last24hours':
      return [addMinutes(subHours(now, 24), offset), addMinutes(now, offset)];
    case 'today':
      return [startOfDay(today), endOfDay(today)];
    case 'yesterday':
      return [startOfDay(yesterday), endOfDay(yesterday)];
    case 'thisWeek':
      return [
        startOfWeek(now, { weekStartsOn }),
        endOfWeek(now, { weekStartsOn }),
      ];
    case 'lastWeek':
      return [
        startOfWeek(lastWeek, { weekStartsOn }),
        endOfWeek(lastWeek, { weekStartsOn }),
      ];
    case 'thisMonth':
      return [startOfMonth(now), endOfMonth(now)];
    case 'lastMonth':
      return [startOfMonth(lastMonth), endOfMonth(lastMonth)];
    default:
      return [startOfDay(today), endOfDay(today)];
  }
};
