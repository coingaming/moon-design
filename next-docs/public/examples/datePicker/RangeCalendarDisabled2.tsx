import React from 'react';
import { RangeCalendar, useClickOutside } from '@heathmont/moon-datepicker';
import { rem } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-components';

const Example = () => {
  const [initialStartDate, setStartDate] = React.useState(
    new Date('September 17, 2020 03:24:00')
  );
  const [initialEndDate, setEndDate] = React.useState(
    new Date('September 27, 2020 03:24:00')
  );

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{ height: rem(600), width: '100%', position: 'relative' }}
      test-id="wrapper"
      onClick={() => {}}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button variant="tertiary" onClick={() => setIsOpen(true)}>
          {initialStartDate &&
            (initialStartDate as any)?.toLocaleDateString('en-GB')}
          {` - `}
          {initialEndDate &&
            (initialEndDate as any)?.toLocaleDateString('en-GB')}
        </Button>
        {isOpen && (
          <RangeCalendar
            startDate={initialStartDate}
            endDate={initialEndDate}
            onDateChange={({ startDate, endDate }) => {
              setStartDate(startDate as Date);
              setEndDate(endDate as Date);
            }}
            setIsOpen={setIsOpen}
            config={{
              weekStartsOn: 1,
              withHoursAndMinutes: true,
              disabledDays: [
                new Date('September 16, 2020'),
                new Date('September 23, 2020'),
                new Date('September 25, 2020'),
              ],
              withFooter: true,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Example;
