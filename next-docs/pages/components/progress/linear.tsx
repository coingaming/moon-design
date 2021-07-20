import React from 'react';

import { ProgressLinear } from '@heathmont/moon-components';
import Preview from '../../../components/codePreview/Preview';

const ExampleProgressLinear = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <ProgressLinear
        value={30}
        text={<span>Progress</span>}
        backgroundColor="hit.100"
      />
      <ProgressLinear
        value={30}
        text={<span>Progress</span>}
        backgroundColor="hit.100"
        height={5}
      />
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
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Examples"
          preview={<ExampleProgressLinear />}
          code={`import { ProgressLinear } from '@heathmont/moon-components';

<ProgressLinear
  value={30}
  text={<span>Progress</span>}
  backgroundColor="hit.100"
/>
<ProgressLinear
  value={30}
  text={<span>Progress</span>}
  backgroundColor="hit.100"
  height={5}
/>
`}
        />
      </section>
    </>
  );
}
