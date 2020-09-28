import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

interface WeekStartType {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  cursorDate: Date;
}

export const getWeekDays = ({ cursorDate, weekStartsOn = 1 }: WeekStartType) =>
  eachDayOfInterval({
    start: startOfWeek(cursorDate, { weekStartsOn }),
    end: endOfWeek(cursorDate, { weekStartsOn }),
  });
