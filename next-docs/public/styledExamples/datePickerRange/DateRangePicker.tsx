// @ts-nocheck
import React from 'react';
import { DateRangePicker } from '@heathmont/moon-datepicker';
import { rem } from '@heathmont/moon-utils';

const Example = () => {
  const [initialStartDate, setStartDate] = React.useState(
    new Date('September 17, 2020 03:24:00')
  );
  const [initialEndDate, setEndDate] = React.useState(
    new Date('September 27, 2020 03:24:00')
  );

  return (
    <div style={{ height: rem(400), width: '100%' }}>
      <DateRangePicker
        isOpenByDefault={true}
        startDate={initialStartDate}
        endDate={initialEndDate}
        onDateChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        config={{
          weekStartsOn: 1,
          withHoursAndMinutes: true,
        }}
      />
    </div>
  );
};

export default Example;
