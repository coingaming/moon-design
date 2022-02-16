import React, { useState, useEffect } from 'react';
import { setMonth as setFnsMonth, setYear as setFsnYear } from 'date-fns';
import addMonths from 'date-fns/addMonths';
import endOfDay from 'date-fns/endOfDay';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isSameDay from 'date-fns/isSameDay';
import isValid from 'date-fns/isValid';
import startOfDay from 'date-fns/startOfDay';
import subMonths from 'date-fns/subMonths';
import { getMonthDays } from '../../../private/helper/getMonthDays';
import { getWeekDayLabels } from '../../../private/helper/getWeekDayLabels';
import { getDatesFromRange } from '../helpers/getDatesFromRange';
import { getPlaceholder } from '../helpers/getPlaceholder';
import type { DatesRange } from '../helpers/getDatesFromRange';
import type RangeConfig from '../types/RangeConfig';
import type RangeTranslations from '../types/RangeTranslations';

type useRangeCalendarProps = {
  startDate?: Date;
  endDate?: Date;
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
  startDate: initialStartDate,
  endDate: initialEndDate,
  onDateChange,
  config,
  range,
  translations,
  hasClickedOutside,
  setIsOpen,
  setPlaceholder,
}: useRangeCalendarProps) => {
  const [isCustom, setCustom] = useState<boolean>(false);
  const [datesState, setDatesState] = useState<DatepickerState>({
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

  useEffect(() => {
    if (hasClickedOutside) {
      onDateChange({
        startDate: datesState.startDate,
        endDate: datesState.endDate,
        range: datesState.range,
      });
      typeof setPlaceholder === 'function' &&
        setPlaceholder(
          getPlaceholder({
            startDate: datesState.startDate,
            endDate: datesState.endDate,
            range: datesState.range,
            config,
            translations,
          })
        );
      typeof setIsOpen === 'function' && setIsOpen(false);
    }
  });

  const apply = () => {
    console.log('apply');
    onDateChange({
      startDate: datesState.startDate,
      endDate: datesState.endDate,
      range: datesState.range,
    });
    typeof setPlaceholder === 'function' &&
      setPlaceholder(
        getPlaceholder({
          startDate: datesState.startDate,
          endDate: datesState.endDate,
          range: datesState.range,
          config,
          translations,
        })
      );
    typeof setIsOpen === 'function' && setIsOpen(false);
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

  const selectAndApply = (newRange: DatesRange) => {
    const { startDate, endDate } = getDatesFromRange({
      range: newRange,
      fallbackStartDate: datesState.startDate,
      fallbackEndDate: datesState.endDate,
      config,
    });
    typeof onDateChange === 'function' &&
      onDateChange({
        startDate: startDate,
        endDate: endDate,
        range: newRange,
      });
    typeof setPlaceholder === 'function' &&
      setPlaceholder(
        getPlaceholder({
          startDate: startDate,
          endDate: endDate,
          range: newRange,
          config,
          translations,
        })
      );
    typeof setIsOpen === 'function' && setIsOpen(false);
  };

  const amountOfMonth = config?.withOneMonth ? 1 : 2;
  const nextMonth = () => {
    setDatesState({
      ...datesState,
      cursorDate: addMonths(datesState.cursorDate, amountOfMonth),
    });
  };

  const prevMonth = () => {
    setDatesState({
      ...datesState,
      cursorDate: subMonths(datesState.cursorDate, amountOfMonth),
    });
  };

  const setMonth = (month: number) => {
    setDatesState({
      ...datesState,
      cursorDate: setFnsMonth(datesState.cursorDate, month),
    });
  };

  const setYear = (year: number) => {
    setDatesState({
      ...datesState,
      cursorDate: setFsnYear(datesState.cursorDate, year),
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
    setMonth,
    setYear,
    isCustom,
    setCustom,
    selectAndApply,
  };
};

export default useRangeCalendar;
