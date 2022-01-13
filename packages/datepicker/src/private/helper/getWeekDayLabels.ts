import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';

interface WeekStartType {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  locale?: Locale;
}

export const getWeekDayLabels = ({ weekStartsOn = 1, locale }: WeekStartType) =>
  eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn }),
    end: endOfWeek(new Date(), { weekStartsOn }),
  }).map((day) => format(day, 'EEEEE', { locale }));
