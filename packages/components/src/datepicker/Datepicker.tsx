import * as React from 'react';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import endOfDay from 'date-fns/endOfDay';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isSameDay from 'date-fns/isSameDay';
import startOfDay from 'date-fns/startOfDay';

import { getMonthDays } from './private/helpers/getMonthDays';
import { Picker } from './private/Picker';
import { getWeekDayLabels } from './private/helpers/getWeekDayLabels';
import { getDatesFromRange } from './private/helpers/getDatesFromRange';

type Range =
  | 'reset'
  | 'tommorow'
  | 'nextWeek'
  | 'nextMonth'
  | 'last24hours'
  | 'today'
  | 'yesterday'
  | 'thisWeek'
  | 'lastWeek'
  | 'thisMonth'
  | 'lastMonth';

type DatepickerState = {
  startDate?: Date;
  endDate?: Date;
  range: Range;
  hoveredDate?: Date;
  cursorDate: Date; // just to navigate between months
};

interface DatepickerProps {
  weekStartsOn: any;
}

const Datepicker: React.FC<DatepickerProps> = ({ weekStartsOn }) => {
  const currentDate = new Date();

  const [dates, setDates] = React.useState<DatepickerState>({
    startDate: undefined,
    endDate: undefined,
    range: 'reset',
    hoveredDate: undefined,
    cursorDate: currentDate,
  });

  const selectDay = (selectedDate: Date) => {
    if (
      dates.startDate &&
      !dates.endDate &&
      (isSameDay(dates.startDate, selectedDate) ||
        isAfter(selectedDate, dates.startDate))
    ) {
      const newEndDate = endOfDay(selectedDate);
      setDates({
        ...dates,
        hoveredDate: undefined,
        endDate: newEndDate,
      });
    } else {
      const newStartDate = startOfDay(selectedDate);
      setDates({
        ...dates,
        hoveredDate: undefined,
        startDate: newStartDate,
      });
    }
  };

  // TODO - onClickOutsideHandler

  const hoverDay = (hoveredDate: Date) => {
    if (
      dates.startDate &&
      !dates.endDate &&
      !isSameDay(hoveredDate, dates.startDate) &&
      isAfter(hoveredDate, dates.startDate)
    ) {
      setDates({
        ...dates,
        hoveredDate,
      });
    }
  };

  const selectRange = (range: Range) => {
    const [newStartDate, newEndDate] = getDatesFromRange(range);
    setDates({
      ...dates,
      startDate: newStartDate,
      endDate: newEndDate,
      hoveredDate: undefined,
      range,
    });
  };

  const nextMonth = () => {
    setDates({
      ...dates,
      cursorDate: addMonths(dates.cursorDate, 2),
    });
  };

  const prevMonth = () => {
    setDates({
      ...dates,
      cursorDate: subMonths(dates.cursorDate, 2),
    });
  };

  const firstMonth = getMonthDays({ date: dates.cursorDate, weekStartsOn });

  const nextMonthCurrentDate = addMonths(dates.cursorDate, 1);
  const secondMonth = getMonthDays({
    date: nextMonthCurrentDate,
    weekStartsOn,
  });

  const firstMonthLabel = format(dates.cursorDate, 'MMMM');
  const firstMonthYearLabel = format(dates.cursorDate, 'yyyy');
  const secondMonthLabel = format(nextMonthCurrentDate, 'MMMM');
  const secondMonthYearLabel = format(nextMonthCurrentDate, 'yyyy');

  const weekDayLabels = getWeekDayLabels({ weekStartsOn });

  return (
    <Picker
      weekDayLabels={weekDayLabels}
      firstMonthLabel={firstMonthLabel}
      firstMonthYearLabel={firstMonthYearLabel}
      secondMonthLabel={secondMonthLabel}
      secondMonthYearLabel={secondMonthYearLabel}
      onDayClick={selectDay}
      firstMonth={firstMonth}
      secondMonth={secondMonth}
      cursorDate={dates.cursorDate}
      startDate={dates.startDate}
      endDate={dates.endDate}
      hoveredDate={dates.hoveredDate}
      onDayMouseEnter={hoverDay}
      selectRange={selectRange}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
    />
  );
};

export default Datepicker;
