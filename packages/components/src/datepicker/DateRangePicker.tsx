import React from 'react';
import { enGB } from 'date-fns/locale';

import { DateRangePickerProps } from './types/props';
import RangeCalendar from './RangeCalendar';
import { getPlaceholder } from './private/helpers/getPlaceholder';

import { Button } from '..';

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  range,
  onDateChange,
  config,
  translations,
}) => {
  // const [ref, hasClickedOutside] = useClickOutside();
  const [isOpen, setIsOpen] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState(
    getPlaceholder({ startDate, endDate, range, config, translations })
  );
  return (
    <>
      <Button variant="tertiary" onClick={() => setIsOpen(true)}>
        {placeholder}
      </Button>
      {isOpen && (
        <RangeCalendar
          startDate={startDate}
          endDate={endDate}
          range={range}
          config={config}
          onDateChange={onDateChange}
          translations={translations}
          // hasClickedOutside={hasClickedOutside}
          setIsOpen={setIsOpen}
          setPlaceholder={setPlaceholder}
        />
      )}
    </>
  );
};

DateRangePicker.defaultProps = {
  range: '',
  translations: {
    placeholder: 'Select Dates',
    apply: 'Apply',
    reset: 'Reset',
    lastMonth: 'Last month',
    lastWeek: 'Last week',
    last24hours: 'Last 24 hours',
    yesterday: 'Yesterday',
    today: 'Today',
    tommorow: 'Tommorow',
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
    withHoursAndMinutes: true,
    onlyFuture: false,
    without24AndToday: false,
    locale: enGB,
  },
};

export default DateRangePicker;
