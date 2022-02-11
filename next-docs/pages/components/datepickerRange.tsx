// @ts-nocheck
import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Default from '../../public/examples/datePicker/Default';
import DefaultRtl from '../../public/examples/datePicker/DefaultRtl';
import useExamples from '../../utils/useExamples';

export default function PageDatepicker() {
  const examples = useExamples('datePicker');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Datepicker Range</h1>
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

      {/* Rtl */}
      <section className="mt-8">
        <Preview
          title="Datepicker RTL"
          preview={<DefaultRtl />}
          code={examples ? examples.DefaultRtl : 'Loading'}
        />
      </section>
    </>
  );
}
