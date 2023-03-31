import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/styledExamples/progress/circular/Default';
import Rtl from '../../../public/styledExamples/progress/circular/Rtl';
import useExamples from '../../../utils/useExamples';

export default function PageProgressLinear() {
  const examples = useExamples('progress/circular', 'styled');
  return (
    <>
      <ComponentPageDescription title="Circular" isDeprecated>
        <DeprecationWarning
          href="/components/circularProgress"
          name="CircularProgress"
        />
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
