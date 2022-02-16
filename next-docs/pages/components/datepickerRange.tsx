// @ts-nocheck
import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Default from '../../public/examples/datePicker/Default';
import RangeCalendar from '../../public/examples/datePicker/RangeCalendar';
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
