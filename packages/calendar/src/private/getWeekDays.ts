import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';

export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface WeekStartType {
  weekStartsOn?: WeekStartsOn;
  cursorDate: Date;
}

export const getWeekDays = ({ cursorDate, weekStartsOn = 1 }: WeekStartType) =>
  eachDayOfInterval({
    start: startOfWeek(cursorDate, { weekStartsOn }),
    end: endOfWeek(cursorDate, { weekStartsOn }),
  });
