import React from 'react';

import Preview from '../../../components/codePreview/Preview';

import Default from '../../../public/examples/progress/circular/Default';

import useExamples from '../../../utils/useExamples';

export default function PageProgressLinear() {
  const examples = useExamples('progress/circular');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Progress Circular</h1>
        <p className="text-lg mt-4">
          A progress indicator is a visual representation of a user’s progress
          through a set of steps, guiding toward the completion of a specified
          process.
        </p>

        <p className="text-lg mt-4">
          Use this when the process has a known duration.
        </p>
        <p className="text-lg mt-4">
          Circular progress indicators display progress by animating an
          indicator along an invisible circular track in a clockwise direction.
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
