import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/styledExamples/progress/linear/Default';
import useStyledExamples from '../../../utils/useStyledExamples';

export default function PageProgressLinear() {
  const examples = useStyledExamples('progress/linear');
  return (
    <>
      <ComponentPageDescription title="Linear" isDeprecated>
        <DeprecationWarning href="/components/progress" name="Progress" />
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
