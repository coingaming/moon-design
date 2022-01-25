import React from 'react';
import format from 'date-fns/format';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import endOfDay from 'date-fns/endOfDay';
import isAfter from 'date-fns/isAfter';
import isSameDay from 'date-fns/isSameDay';
import startOfDay from 'date-fns/startOfDay';
import isValid from 'date-fns/isValid';
import { getDatesFromRange } from '../helpers/getDatesFromRange';
import { getPlaceholder } from '../helpers/getPlaceholder';
import type { DatesRange } from '../helpers/getDatesFromRange';
import { getMonthDays } from '../../../private/helper/getMonthDays';
import { getWeekDayLabels } from '../../../private/helper/getWeekDayLabels';

type RangeWeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;

interface RangeConfig {
  format?: string;
  monthLabelFormat?: string;
  yearLabelFormat?: string;
  weekStartsOn?: RangeWeekStartsOn;
  withHoursAndMinutes?: boolean;
  onlyFuture?: boolean;
  without24AndToday?: boolean;
  locale?: any;
  ranges?: DatesRange[];
}

interface RangeTranslations {
  placeholder: any;
  apply: any;
  reset: any;
  lastMonth: any;
  lastWeek: any;
  last24hours: any;
  yesterday: any;
  today: any;
  tomorrow: any;
  thisWeek: any;
  nextWeek: any;
  thisMonth: any;
  nextMonth: any;
}
type useRangeCalendarProps = {
  initialStartDate?: Date;
  initialEndDate?: Date;
  onDateChange: ({
    startDate,
    endDate,
    range,
  }: {
    startDate?: Date;
    endDate?: Date;
    range?: DatesRange;
  }) => any;
  config?: RangeConfig;
  range?: DatesRange;
  translations?: RangeTranslations;
  hasClickedOutside?: boolean;
  setIsOpen?: any;
  setPlaceholder?: any;
};

type DatepickerState = {
  startDate?: Date;
  endDate?: Date;
  range?: DatesRange;
  hoveredDate?: Date;
  cursorDate: Date; // just to navigate between months
};

const useRangeCalendar = ({
  initialStartDate,
  initialEndDate,
  onDateChange,
  config,
  range,
  translations,
  hasClickedOutside,
  setIsOpen,
  setPlaceholder,
}: useRangeCalendarProps) => {
  const [datesState, setDatesState] = React.useState<DatepickerState>({
    startDate: initialStartDate,
    endDate: initialEndDate,
    range,
    hoveredDate: undefined,
    cursorDate: initialStartDate ? new Date(initialStartDate) : new Date(),
    // get "startDate" and "endDate" if "range" is defined
    ...getDatesFromRange({
      range,
      config,
      fallbackStartDate: initialStartDate,
      fallbackEndDate: initialEndDate,
    }),
  });

  React.useEffect(() => {
    if (hasClickedOutside) {
      onDateChange({
        startDate: datesState.startDate,
        endDate: datesState.endDate,
        range: datesState.range,
      });
      setPlaceholder(
        getPlaceholder({
          startDate: datesState.startDate,
          endDate: datesState.endDate,
          range: datesState.range,
          config,
          translations,
        })
      );
      setIsOpen(false);
    }
  });

  const apply = () => {
    onDateChange({
      startDate: datesState.startDate,
      endDate: datesState.endDate,
      range: datesState.range,
    });
    setPlaceholder(
      getPlaceholder({
        startDate: datesState.startDate,
        endDate: datesState.endDate,
        range: datesState.range,
        config,
        translations,
      })
    );
    setIsOpen(false);
  };

  const selectDay = (selectedDate: Date) => {
    if (
      datesState.startDate &&
      !datesState.endDate &&
      (isSameDay(datesState.startDate, selectedDate) ||
        isAfter(selectedDate, datesState.startDate))
    ) {
      const newEndDate = endOfDay(selectedDate);
      setDatesState({
        ...datesState,
        hoveredDate: undefined,
        endDate: newEndDate,
        range: '',
      });
    } else if (datesState.startDate && datesState.endDate) {
      const newStartDate = startOfDay(selectedDate);
      setDatesState({
        ...datesState,
        hoveredDate: undefined,
        startDate: newStartDate,
        endDate: undefined,
        range: '',
      });
    } else {
      const newStartDate = startOfDay(selectedDate);
      setDatesState({
        ...datesState,
        hoveredDate: undefined,
        startDate: newStartDate,
        range: '',
      });
    }
  };

  const setStartDate = (startDate: Date) => {
    if (isValid(startDate) && startDate) {
      setDatesState({
        ...datesState,
        startDate,
        range: '',
      });
    }
  };

  const setEndDate = (endDate: Date) => {
    if (isValid(endDate) && endDate) {
      setDatesState({
        ...datesState,
        endDate,
        range: '',
      });
    }
  };

  const reset = () => {
    setDatesState({
      startDate: undefined,
      endDate: undefined,
      range: '',
      hoveredDate: undefined,
      cursorDate: new Date(),
    });
  };

  // TODO - onClickOutsideHandler

  const hoverDay = (hoveredDate: Date) => {
    if (
      datesState.startDate &&
      !datesState.endDate &&
      !isSameDay(hoveredDate, datesState.startDate) &&
      isAfter(hoveredDate, datesState.startDate)
    ) {
      setDatesState({
        ...datesState,
        hoveredDate,
      });
    }
  };

  const selectRange = (newRange: DatesRange) => {
    const { startDate, endDate } = getDatesFromRange({
      range: newRange,
      fallbackStartDate: datesState.startDate,
      fallbackEndDate: datesState.endDate,
      config,
    });
    setDatesState({
      ...datesState,
      startDate,
      endDate,
      hoveredDate: undefined,
      range: newRange,
      cursorDate: startDate || datesState.cursorDate,
    });
  };

  const nextMonth = () => {
    setDatesState({
      ...datesState,
      cursorDate: addMonths(datesState.cursorDate, 2),
    });
  };

  const prevMonth = () => {
    setDatesState({
      ...datesState,
      cursorDate: subMonths(datesState.cursorDate, 2),
    });
  };

  const firstMonth = getMonthDays({
    date: datesState.cursorDate,
    weekStartsOn: config && config.weekStartsOn,
  });

  const nextMonthCurrentDate = addMonths(datesState.cursorDate, 1);
  const secondMonth = getMonthDays({
    date: nextMonthCurrentDate,
    weekStartsOn: config && config.weekStartsOn,
  });

  const labels = {
    firstMonthLabel: format(
      datesState.cursorDate,
      (config && config.monthLabelFormat) || 'MMMM',
      config
    ),
    firstMonthYearLabel: format(
      datesState.cursorDate,
      (config && config.yearLabelFormat) || 'yyyy',
      config
    ),
    secondMonthLabel: format(
      nextMonthCurrentDate,
      (config && config.monthLabelFormat) || 'MMMM',
      config
    ),
    secondMonthYearLabel: format(
      nextMonthCurrentDate,
      (config && config.yearLabelFormat) || 'yyyy',
      config
    ),
    weekDayLabels: config && getWeekDayLabels(config),
  };

  return {
    datesState,
    nextMonthCurrentDate,
    selectDay,
    firstMonth,
    secondMonth,
    hoverDay,
    selectRange,
    nextMonth,
    prevMonth,
    setStartDate,
    setEndDate,
    apply,
    reset,
    labels,
  };
};

export default useRangeCalendar;
