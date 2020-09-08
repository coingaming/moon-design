import * as React from 'react';
import styled from 'styled-components';

import { DateRangePickerProps } from './types/props';
import Datepicker from './Datepicker';
import { getPlaceholder } from './private/helpers/getPlaceholder';

import { Button } from '..';

const DatepickerWrapper = styled.div({
  // position: 'relative',
});

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
        <DatepickerWrapper>
          <Datepicker
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
        </DatepickerWrapper>
      )}
    </>
  );
};

DateRangePicker.defaultProps = {
  range: '',
  translations: {
    to: 'To',
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
  },
};

export default DateRangePicker;
