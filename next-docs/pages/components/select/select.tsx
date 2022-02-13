import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import Default from '../../../public/examples/select/select/Default';
import Label from '../../../public/examples/select/select/Label';
import Rtl from '../../../public/examples/select/select/Rtl';
import useExamples from '../../../utils/useExamples';

export default function PageSelect() {
  const examples = useExamples('select/select');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Select</h1>
        <p className="text-lg mt-4">
          By default, Select stretches to full width on small devices.
        </p>
        <p className="text-lg mt-4">
          For Select inputs that need to remain full width on all devices, use
          the fullWidth prop.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Examples"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="RTL"
          preview={<Rtl />}
          code={examples ? examples.Rtl : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="with label"
          preview={<Label />}
          code={examples ? examples.Label : 'Loading'}
        />
      </section>
    </>
  );
}
