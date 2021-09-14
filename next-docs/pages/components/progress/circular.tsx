import React from 'react';

import { ProgressCircular } from '@heathmont/moon-components';
import Preview from '../../../components/codePreview/Preview';

const ExampleProgressLinear = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <ProgressCircular value={30} fontSize="5rem" strokeWidth={12} />
      <ProgressCircular value={40} fontSize="8rem" strokeWidth={12} />
      <ProgressCircular value={60} fontSize="5rem" strokeWidth={2} />
    </div>
  );
};

export default function PageProgressLinear() {
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
          preview={<ExampleProgressLinear />}
          code={`import { ProgressCircular } from '@heathmont/moon-components';

<ProgressCircular value={30} fontSize="5rem" strokeWidth={12} />
<ProgressCircular value={40} fontSize="8rem" strokeWidth={12} />
<ProgressCircular value={60} fontSize="5rem" strokeWidth={2} />
`}
        />
      </section>
    </>
  );
}
