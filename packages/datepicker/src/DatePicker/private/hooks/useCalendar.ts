import React from 'react';
import { setMonth as setFnsMonth, setYear as setFsnYear } from 'date-fns';
import addMonths from 'date-fns/addMonths';
import format from 'date-fns/format';
import startOfDay from 'date-fns/startOfDay';
import subMonths from 'date-fns/subMonths';
import { getMonthDays } from '../../../private/helper/getMonthDays';
import { getWeekDayLabels } from '../../../private/helper/getWeekDayLabels';
import { Config, Translations } from '../../DatePicker';
import getPlaceholder from '../helpers/getPlacegolder';

type useCalendarProps = {
  initialDate?: Date;
  onDateChange: ({ date }: { date?: Date }) => any;
  config?: Config;
  translations?: Translations;
  hasClickedOutside?: boolean;
  setIsOpen?: any;
  setPlaceholder?: any;
};

type DatepickerState = {
  currentDate?: Date;
  cursorDate: Date; // just to navigate between months
};

const useCalendar = ({
  initialDate,
  onDateChange,
  config,
  translations,
  hasClickedOutside,
  setIsOpen,
  setPlaceholder,
}: useCalendarProps) => {
  const [datesState, setDatesState] = React.useState<DatepickerState>({
    currentDate: initialDate,
    cursorDate: initialDate ? new Date(initialDate) : new Date(),
  });

  React.useEffect(() => {
    if (hasClickedOutside) {
      console.log('datesState.currentDate', datesState.currentDate);
      onDateChange({
        date: datesState.currentDate,
      });

      typeof setPlaceholder === 'function' &&
        setPlaceholder(
          getPlaceholder({
            date: datesState.currentDate,
            config,
            translations,
          })
        );
      typeof setPlaceholder === 'function' && setIsOpen(false);
    }
  });

  const selectDay = (selectedDate: Date) => {
    const newStartDate = startOfDay(selectedDate);
    console.log('newStartDate', newStartDate);
    setDatesState({
      ...datesState,
      currentDate: newStartDate,
    });
    onDateChange({
      date: newStartDate,
    });
    typeof setPlaceholder === 'function' &&
      setPlaceholder(
        getPlaceholder({
          date: newStartDate,
          config,
          translations,
        })
      );
    typeof setPlaceholder === 'function' && setIsOpen(false);
  };

  const reset = () => {
    setDatesState({
      currentDate: undefined,
      cursorDate: new Date(),
    });
  };

  //navigate to next month
  const nextMonth = () => {
    setDatesState({
      ...datesState,
      cursorDate: addMonths(datesState.cursorDate, 1),
    });
  };

  //navigate to previous month
  const prevMonth = () => {
    setDatesState({
      ...datesState,
      cursorDate: subMonths(datesState.cursorDate, 1),
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

  const currentMonth = getMonthDays({
    date: datesState.cursorDate,
    weekStartsOn: config && config.weekStartsOn,
  });

  const labels = {
    monthLabel: format(
      datesState.cursorDate,
      (config && config.monthLabelFormat) || 'MMMM',
      config
    ),
    monthYearLabel: format(
      datesState.cursorDate,
      (config && config.yearLabelFormat) || 'yyyy',
      config
    ),
    weekDayLabels: config && getWeekDayLabels(config),
  };

  return {
    datesState,
    currentMonth,
    nextMonth,
    prevMonth,
    setMonth,
    setYear,
    selectDay,
    reset,
    labels,
  };
};

export default useCalendar;
