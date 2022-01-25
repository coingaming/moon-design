import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import startOfMonth from 'date-fns/startOfMonth';

interface getMonthDaysArgs {
  date: Date;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export const getMonthDays = ({ date, weekStartsOn }: getMonthDaysArgs) => {
  const firstDay = startOfMonth(date);
  const lastDay = lastDayOfMonth(date);
  return eachDayOfInterval({
    start: startOfWeek(firstDay, { weekStartsOn }),
    end: endOfWeek(lastDay, { weekStartsOn }),
  });
};
