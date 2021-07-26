// @ts-nocheck
import React from 'react';

import { DateRangePicker } from '@heathmont/moon-components';

import Preview from '../../components/codePreview/Preview';

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
    </>
  );
};

export default function PageDatepicker() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Datepicker</h1>
        {/* <p className="text-lg mt-4">Datepicker.</p> */}
      </section>

      {/* Default */}
      <section className="mt-8">
      <Preview
          title="Datepicker"
          preview={<div className="h-96 w-full"><Example /></div>}
          code={`import { Datepicker } from '@heathmont/moon-components';

const [initialStartDate, setStartDate] = React.useState(
  new Date('September 17, 2020 03:24:00')
);

const [initialEndDate, setEndDate] = React.useState(
  new Date('September 27, 2020 03:24:00')
);


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

`}
        />
      </section>
    </>
  );
}
