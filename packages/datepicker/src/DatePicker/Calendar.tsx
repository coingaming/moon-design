import React from 'react';

import { Picker } from './private/Picker';
import useCalendar from './private/hooks/useCalendar';
import { Translations, Config } from './DatePicker';

export interface CalendarProps {
  date?: Date;
  onDateChange: ({ date }: { date?: Date }) => any;
  config?: Config;
  isOpenByDefault?: boolean;
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
      onDateChange={onDateChange}
      reset={reset}
    />
  );
};

export default Calendar;
