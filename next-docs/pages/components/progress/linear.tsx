import React from 'react';

import Preview from '../../../components/codePreview/Preview';

import Default from '../../../public/examples/progress/linear/Default';

import useExamples from '../../../utils/useExamples';

export default function PageProgressLinear() {
  const examples = useExamples('progress/linear');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Progress Linear</h1>
        <p className="text-lg mt-4">
          A progress indicator is a visual representation of a user’s progress
          through a set of steps, guiding toward the completion of a specified
          process.
        </p>

        <p className="text-lg mt-4">
          Use this when the process has a known duration.
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
    </>
  );
}
