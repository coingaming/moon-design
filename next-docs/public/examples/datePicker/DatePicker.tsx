// @ts-nocheck
import React from 'react';

import { DatePicker } from '@heathmont/moon-datepicker';
import { rem } from '@heathmont/moon-utils';

const Example = () => {
  const [initialDate, setDate] = React.useState(new Date('September 17, 2020'));

  return (
    <div style={{ height: rem(400), width: '100%' }}>
      <DatePicker
        isOpenByDefault={true}
        date={initialDate}
        onDateChange={({ date }) => {
          setDate(date);
        }}
        config={{
          weekStartsOn: 1,
          format: 'dd MMM, yyyy',
        }}
      />
    </div>
  );
};

export default Example;
