import React from 'react';
import { enGB } from 'date-fns/locale';
import useRangeCalendar from './private/hooks/useRangeCalendar';
import { Picker } from './private/picker/Picker';
import type { DatesRange } from './private/helpers/getDatesFromRange';
import type RangeConfig from './private/types/RangeConfig';
import type RangeTranslations from './private/types/RangeTranslations';

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

const RangeCalendar: React.FC<DateRangePickerProps> = (props) => {
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
    setMonth,
    setYear,
    isCustom,
    setCustom,
    selectAndApply,
  } = useRangeCalendar({
    ...props,
  });

  return (
    <Picker
      datesState={datesState}
      labels={labels}
      translations={props?.translations}
      config={props?.config}
      onDayClick={selectDay}
      firstMonth={firstMonth}
      secondMonth={secondMonth}
      onDayMouseEnter={hoverDay}
      selectRange={selectRange}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      onDateChange={props?.onDateChange}
      apply={apply}
      reset={reset}
      setMonth={setMonth}
      setYear={setYear}
      isCustom={isCustom}
      setCustom={setCustom}
      selectAndApply={selectAndApply}
    />
  );
};

RangeCalendar.defaultProps = {
  range: '',
  isOpenByDefault: false,
  translations: {
    placeholder: 'Select Dates',
    apply: 'Apply',
    reset: 'Reset',
    cansel: 'Cansel',
    labelStartDate: 'Start date & time',
    labelEndDate: 'End date & time',
    lastMonth: 'Last month',
    lastWeek: 'Last week',
    last24hours: 'Last 24 hours',
    yesterday: 'Yesterday',
    today: 'Today',
    tomorrow: 'Tomorrow',
    thisWeek: 'This week',
    nextWeek: 'Next week',
    thisMonth: 'This month',
    nextMonth: 'Next month',
  },
  config: {
    format: "yyyy-MM-dd'T'HH:mm",
    monthLabelFormat: 'MMMM',
    yearLabelFormat: 'yyyy',
    weekStartsOn: 1,
    onlyFuture: false,
    without24AndToday: false,
    locale: enGB,
    withHoursAndMinutes: true,
    hideInputs: false,
    withPeriodList: false,
    withOneMonth: false,
    withFooter: {
      isApplyBtn: true,
      isCanselBtn: true,
      isClearBtn: true,
    },
  },
};

export default RangeCalendar;
