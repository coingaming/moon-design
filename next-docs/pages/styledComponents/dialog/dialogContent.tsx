import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/styledExamples/dialog/dialogContent/Default';
import useExamples from '../../../utils/useExamples';

export default function PageDialogContent() {
  const examples = useExamples('dialog/dialogContent', 'styled');

  return (
    <>
      <ComponentPageDescription title="Dialog Content" isDeprecated>
        <DeprecationWarning href="/components/modal" name="Modal" />
      </ComponentPageDescription>
      <Preview
        title="Default example"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: '',
            type: 'twoxsmall | xsmall',
            required: false,
            default: 'xsmall',
            description: 'Size for label',
          },
          {
            name: 'position',
            type: 'TOP | CENTER',
            required: false,
            default: '-',
            description: ' ',
          },
          {
            name: 'maxWidth',
            type: 'string',
            required: false,
            default: '-',
            description: ' ',
          },
        ]}
      />
    </>
  );
}
