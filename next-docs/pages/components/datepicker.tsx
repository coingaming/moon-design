// @ts-nocheck
import React from 'react';

import DatePicker from '../../public/examples/datePicker/DatePicker';
import DateRangePicker from '../../public/examples/datePicker/DateRangePicker';
import Default from '../../public/examples/datePicker/Default';
import Preview from '../../components/codePreview/Preview';
import useExamples from '../../utils/useExamples';

export default function PageDatepicker() {
  const examples = useExamples('datePicker');

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
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* DateRangePicker */}
      <section className="mt-8">
        <Preview
          title="DateRangePicker"
          preview={<DateRangePicker />}
          code={examples ? examples.DateRangePicker : 'Loading'}
        />
      </section>

      {/* DatePicker */}
      <section className="mt-8">
        <Preview
          title="Datepicker"
          preview={<DatePicker />}
          code={examples ? examples.DatePicker : 'Loading'}
        />
      </section>
    </>
  );
}
