import React from 'react';
import { Calendar, useClickOutside } from '@heathmont/moon-datepicker';
import { rem } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-core';

const Example = () => {
  const [initialDate, setDate] = React.useState(new Date('September 17, 2020'));
  const [isOpen, setIsOpen] = React.useState(true);
  const [ref, hasClickedOutside] = useClickOutside();

  return (
    <div
      style={{ height: rem(400), width: '100%', position: 'relative' }}
      test-id="wrapper"
      onClick={() => {}}
    >
      <div style={{ position: 'relative', display: 'inline-block' }} ref={ref}>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          {initialDate
            ? // tslint:disable-next-line
              (initialDate as Date)?.toLocaleDateString('en-GB')
            : 'Select a day...'}
        </Button>
        {isOpen && (
          <Calendar
            date={initialDate}
            onDateChange={({ date }) => {
              date && setDate(date as any);
              setIsOpen(!isOpen);
            }}
            config={{
              weekStartsOn: 1,
              disabledDays: new Date('September 23, 2020'),
            }}
            hasClickedOutside={hasClickedOutside}
          />
        )}
      </div>
    </div>
  );
};

export default Example;
