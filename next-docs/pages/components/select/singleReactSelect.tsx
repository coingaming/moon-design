import React from 'react';

import WithLabel from '../../../public/examples/select/singleReactSelect/WithLabel';
import Options from '../../../public/examples/select/singleReactSelect/Options';

import Preview from '../../../components/codePreview/Preview';

import useExamples from '../../../utils/useExamples';

export default function PageSelect() {
  const examples = useExamples('select/select');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Select</h1>
        <p className="text-lg mt-4">
          This Single Select based on react-select library.
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
          title="With Label"
          preview={<WithLabel />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/*Options*/}
      <section className="mt-8">
        <Preview
          title="List options"
          preview={<Options />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>
    </>
  );
}
