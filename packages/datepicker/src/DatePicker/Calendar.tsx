import React from 'react';
import { enGB } from 'date-fns/locale';
import { Translations, Config } from './DatePicker';
import useCalendar from './private/hooks/useCalendar';
import { Picker } from './private/picker/Picker';

export interface CalendarProps {
  date?: Date;
  onDateChange: ({ date }: { date?: Date }) => void;
  config?: Config;
  hasClickedOutside?: boolean;
  setIsOpen?: any;
  setPlaceholder?: any;
  translations?: Translations;
}

const Calendar: React.FC<CalendarProps> = ({
  date: initialDate,
  onDateChange,
  config,
  translations,
  hasClickedOutside,
  setIsOpen,
  setPlaceholder,
}) => {
  const {
    datesState,
    currentMonth,
    nextMonth,
    prevMonth,
    setMonth,
    setYear,
    selectDay,
    reset,
    labels,
  } = useCalendar({
    initialDate,
    onDateChange,
    config,
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
      currentMonth={currentMonth}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
      setMonth={setMonth}
      setYear={setYear}
      onDateChange={onDateChange}
      reset={reset}
    />
  );
};

Calendar.defaultProps = {
  translations: {
    placeholder: 'Select Dates',
    apply: 'Apply',
    reset: 'Reset',
  },
  config: {
    format: 'yyyy-MM-dd\'T\'HH:mm',
    monthLabelFormat: 'MMMM',
    yearLabelFormat: 'yyyy',
    weekStartsOn: 1,
    withHoursAndMinutes: false,
    onlyFuture: false,
    without24AndToday: false,
    locale: enGB,
  },
};

export default Calendar;
