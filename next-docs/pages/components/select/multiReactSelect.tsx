import React from 'react';

import WithLabel from '../../../public/examples/select/multiReactSelect/WithLabel';

import Preview from '../../../components/codePreview/Preview';

import useExamples from '../../../utils/useExamples';

export default function PageSelect() {
  const examples = useExamples('select/select');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Select</h1>
        <p className="text-lg mt-4">
          This Multi Select based on react-select library.
        </p>
        <p className="text-lg mt-4">
          By default, Select stretches to full width on small devices.
        </p>
        <p className="text-lg mt-4">
          For Select inputs that need to remain full width on all devices, use
          the fullWidth prop.
        </p>
      </section>

      {/* WithLabel */}
      <section className="mt-8">
        <Preview
          title="With label"
          preview={<WithLabel />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>
    </>
  );
}
