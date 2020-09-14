import * as React from 'react';
import { enGB } from 'date-fns/locale';

import DateRangePicker from './DateRangePicker';

const Example = () => {
  const [initialStartDate, setStartDate] = React.useState(
    new Date('September 17, 2020 03:24:00')
  );
  const [initialEndDate, setEndDate] = React.useState(
    new Date('September 27, 2020 03:24:00')
  );

  return (
    <>
      <DateRangePicker
        startDate={initialStartDate}
        endDate={initialEndDate}
        onDateChange={({ startDate, endDate }: any) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        config={{
          weekStartsOn: 1,
          withHoursAndMinutes: true,
          locale: enGB,
        }}
      />
    </>
  );
};

export default Example;
