import React from 'react';

import { Picker } from './private/Picker';
import type { DatesRange } from './private/helpers/getDatesFromRange';
import useRangeCalendar from './private/hooks/useRangeCalendar';

export type DatepickerState = {
  startDate?: Date;
  endDate?: Date;
  range?: DatesRange;
  hoveredDate?: Date;
  cursorDate: Date; // just to navigate between months
};

export type RangeWeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;

export interface RangeTranslations {
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

export interface RangeConfig {
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

export interface DateRangePickerProps {
  isOpenByDefault?: boolean;
  format?: string;
  startDate?: Date;
  endDate?: Date;
  range?: DatesRange;
  hasClickedOutside?: boolean;
  setIsOpen?: any;
  setPlaceholder?: any;
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
  translations?: RangeTranslations;
}

const RangeCalendar: React.FC<DateRangePickerProps> = ({
  startDate: initialStartDate,
  endDate: initialEndDate,
  onDateChange,
  config,
  range,
  translations,
  hasClickedOutside,
  setIsOpen,
  setPlaceholder,
}) => {
  const {
    datesState,
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
  } = useRangeCalendar({
    initialStartDate,
    initialEndDate,
    onDateChange,
    config,
    range,
    translations,
    hasClickedOutside,
    setIsOpen,
    setPlaceholder,
  });

  return (
    <Picker
      datesState={datesState}
      labels={labels}
      translations={translations}
      config={config}
      onDayClick={selectDay}
      firstMonth={firstMonth}
      secondMonth={secondMonth}
      onDayMouseEnter={hoverDay}
      selectRange={selectRange}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      onDateChange={onDateChange}
      apply={apply}
      reset={reset}
    />
  );
};

export default RangeCalendar;
