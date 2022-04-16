import React from 'react';
import { Button } from '@heathmont/moon-core';
import { enGB } from 'date-fns/locale';
import styled from 'styled-components';
import useClickOutside from '../hooks/useClickOutside';
import { getPlaceholder } from './private/helpers/getPlaceholder';
import RangeCalendar, { DateRangePickerProps } from './RangeCalendar';

const Wrapper = styled.div({
  position: 'relative',
  display: 'inline-block',
});

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  isOpenByDefault,
  startDate,
  endDate,
  range,
  onDateChange,
  config,
  translations,
  isRtl,
}) => {
  const [ref, hasClickedOutside] = useClickOutside();
  const [isOpen, setIsOpen] = React.useState(isOpenByDefault);
  const [placeholder, setPlaceholder] = React.useState(
    getPlaceholder({
      startDate,
      endDate,
      range,
      config,
      translations,
    })
  );
  return (
    <div>
      <Wrapper ref={ref}>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
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
            hasClickedOutside={hasClickedOutside}
            setIsOpen={setIsOpen}
            setPlaceholder={setPlaceholder}
            isRtl={isRtl}
          />
        )}
      </Wrapper>
    </div>
  );
};

DateRangePicker.defaultProps = {
  range: '',
  isOpenByDefault: false,
  translations: {
    placeholder: 'Select Dates',
    apply: 'Apply',
    reset: 'Reset',
    cancel: 'Cancel',
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
    custom: 'Custom',
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
  },
};

export default DateRangePicker;
