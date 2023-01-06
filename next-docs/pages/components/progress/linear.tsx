import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/styledExamples/progress/linear/Default';
import useExamples from '../../../utils/useExamples';

export default function PageProgressLinear() {
  const examples = useExamples('progress/linear', 'styled');

  return (
    <>
      <ComponentPageDescription title="Linear">
        <DeprecationWarning href="/core/progress" name="Progress" />
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
