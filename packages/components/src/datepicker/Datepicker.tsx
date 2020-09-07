import * as React from 'react';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import endOfDay from 'date-fns/endOfDay';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isSameDay from 'date-fns/isSameDay';
import startOfDay from 'date-fns/startOfDay';
import isValid from 'date-fns/isValid';

import { getMonthDays } from './private/helpers/getMonthDays';
import { Picker } from './private/Picker';
import { getWeekDayLabels } from './private/helpers/getWeekDayLabels';
import { getDatesFromRange } from './private/helpers/getDatesFromRange';
import { DatesRange } from './types/datesRange';
import { DateRangePickerProps } from './types/props';

type DatepickerState = {
  startDate?: Date;
  endDate?: Date;
  range?: DatesRange;
  hoveredDate?: Date;
  cursorDate: Date; // just to navigate between months
};

const Datepicker: React.FC<DateRangePickerProps> = ({
  startDate: initialStartDate,
  endDate: initialEndDate,
  onDateChange,
  config,
  range,
}) => {
  const [dates, setDates] = React.useState<DatepickerState>({
    startDate: initialStartDate,
    endDate: initialEndDate,
    range,
    hoveredDate: undefined,
    cursorDate: new Date(),
    ...getDatesFromRange({
      range,
      config,
      fallbackStartDate: initialStartDate,
      fallbackEndDate: initialEndDate,
    }),
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
    } else if (dates.startDate && dates.endDate) {
      const newStartDate = startOfDay(selectedDate);
      setDates({
        ...dates,
        hoveredDate: undefined,
        startDate: newStartDate,
        endDate: undefined,
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

  const setStartDate = (startDate: Date) => {
    if (isValid(startDate) && startDate) {
      setDates({
        ...dates,
        startDate,
      });
    }
  };

  const setEndDate = (endDate: Date) => {
    if (isValid(endDate) && endDate) {
      setDates({
        ...dates,
        endDate,
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

  const selectRange = (newRange: DatesRange) => {
    const { startDate, endDate } = getDatesFromRange({
      range: newRange,
      fallbackStartDate: dates.startDate,
      fallbackEndDate: dates.endDate,
      config,
    });
    setDates({
      ...dates,
      startDate,
      endDate,
      hoveredDate: undefined,
      range: newRange,
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

  const firstMonth = getMonthDays({
    date: dates.cursorDate,
    weekStartsOn: config.weekStartsOn,
  });

  const nextMonthCurrentDate = addMonths(dates.cursorDate, 1);
  const secondMonth = getMonthDays({
    date: nextMonthCurrentDate,
    weekStartsOn: config.weekStartsOn,
  });

  const firstMonthLabel = format(dates.cursorDate, 'MMMM');
  const firstMonthYearLabel = format(dates.cursorDate, 'yyyy');
  const secondMonthLabel = format(nextMonthCurrentDate, 'MMMM');
  const secondMonthYearLabel = format(nextMonthCurrentDate, 'yyyy');

  const weekDayLabels = getWeekDayLabels(config);

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
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      onDateChange={onDateChange}
      range={dates.range}
    />
  );
};

export default Datepicker;
