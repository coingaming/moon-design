// @ts-nocheck
import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Default from '../../public/examples/datePicker/Default';
import RangeCalendar from '../../public/examples/datePicker/RangeCalendar';
import RangeCalendarOneMonth from '../../public/examples/datePicker/RangeCalendarOneMonth';
import RangeCalendarWithChip from '../../public/examples/datePicker/RangeCalendarWithChip';
import RangeCalendarWithFooter from '../../public/examples/datePicker/RangeCalendarWithFooter';
import RangeCalendarWithPeriod from '../../public/examples/datePicker/RangeCalendarWithPeriod';

import useExamples from '../../utils/useExamples';

export default function PageDatepicker() {
  const examples = useExamples('datePicker');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Datepicker Range</h1>
        {/* <p className="text-lg mt-4">Datepicker.</p> */}
      </section>

      {/* RangeCalendar */}
      <section className="mt-8">
        <Preview
          title="RangeCalendar"
          preview={<RangeCalendar />}
          code={examples ? examples.RangeCalendar : 'Loading'}
        />
      </section>

      {/* RangeCalendarWithPeriod */}
      <section className="mt-8">
        <Preview
          title="Range Calendar with predefined period list"
          preview={<RangeCalendarWithPeriod />}
          code={examples ? examples.RangeCalendarWithPeriod : 'Loading'}
        />
      </section>

      {/* RangeCalendarWithChip */}
      <section className="mt-8">
        <Preview
          title="Range Calendar without input"
          preview={<RangeCalendarWithChip />}
          code={examples ? examples.RangeCalendarWithChip : 'Loading'}
        />
      </section>

      {/* RangeCalendarOneMonth */}
      <section className="mt-8">
        <Preview
          title="Range Calendar one month"
          preview={<RangeCalendarOneMonth />}
          code={examples ? examples.RangeCalendarOneMonth : 'Loading'}
        />
      </section>

      {/* RangeCalendarWithFooter */}
      <section className="mt-8">
        <Preview
          title="Range Calendar with footer"
          preview={<RangeCalendarWithFooter />}
          code={examples ? examples.RangeCalendarWithFooter : 'Loading'}
        />
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Datepicker"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>
    </>
  );
}
