import * as React from 'react';
import styled from 'styled-components';

import { getDatesFromRange } from './private/helpers/getDatesFromRange';
import { DateRangePickerProps } from './types/props';
import Datepicker from './Datepicker';

import { Button } from '..';

const DatepickerWrapper = styled.div({
  // position: 'relative',
});

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate: initialStartDate,
  endDate: initialEndDate,
  range,
  onDateChange,
  config,
  translations,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDialog = () => setIsOpen(!isOpen);

  const { startDate, endDate } = getDatesFromRange({
    range,
    config,
    fallbackStartDate: initialStartDate,
    fallbackEndDate: initialEndDate,
  });

  return (
    <>
      <Button variant="tertiary" onClick={toggleDialog}>
        {translations.selectDates}
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
          />
        </DatepickerWrapper>
      )}
    </>
  );
};

DateRangePicker.defaultProps = {
  range: 'reset',
  translations: {
    apply: 'Apply',
    selectDates: 'Select Dates',
  },
};

export default DateRangePicker;
