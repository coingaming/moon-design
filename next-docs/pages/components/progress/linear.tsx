import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/progress/linear/Default';
import useExamples from '../../../utils/useExamples';

export default function PageProgressLinear() {
  const examples = useExamples('progress/linear');

  return (
    <>
      <ComponentPageDescription title="Linear">
        <p>
          A progress indicator is a visual representation of a user's progress
          through a set of steps, guiding toward the completion of a specified
          process.
        </p>
        <p>Use this when the process has a known duration.</p>
      </ComponentPageDescription>
      <Preview
        title="Examples"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'value',
            type: 'number',
            required: false,
            default: '-',
            description: 'Progress value',
          },
          {
            name: 'text',
            type: 'string',
            required: false,
            default: '-',
            description: 'Text to display',
          },
          {
            name: 'backgroundColor',
            type: 'ColorProps',
            required: false,
            default: '-',
            description: 'Linear progress background color',
          },
          {
            name: 'height',
            type: 'number',
            required: false,
            default: '-',
            description: 'Linear progress height',
          },
        ]}
      />
    </>
  );
}
