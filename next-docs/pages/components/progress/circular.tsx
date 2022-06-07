import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/progress/circular/Default';
import Rtl from '../../../public/examples/progress/circular/Rtl';
import useExamples from '../../../utils/useExamples';

export default function PageProgressLinear() {
  const examples = useExamples('progress/circular');
  return (
    <>
      <ComponentPageDescription title="Circular">
        <p>
          A progress indicator is a visual representation of a user’s progress
          through a set of steps, guiding toward the completion of a specified
          process.
        </p>
        <p>Use this when the process has a known duration.</p>
        <p>
          Circular progress indicators display progress by animating an
          indicator along an invisible circular track in a clockwise direction.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Examples"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Rtl"
        preview={<Rtl />}
        code={examples ? examples.Rtl : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'value',
            type: 'number',
            required: true,
            default: '-',
            description: 'Progress value',
          },
          {
            name: 'fontSize',
            type: 'string',
            required: false,
            default: '-',
            description: 'Circular progress size',
          },
          {
            name: 'strokeWidth',
            type: 'number',
            required: false,
            default: '12',
            description: 'Circular progress stroke width',
          },
        ]}
      />
    </>
  );
}
