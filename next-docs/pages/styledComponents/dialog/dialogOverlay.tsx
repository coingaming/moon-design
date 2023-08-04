import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/styledExamples/dialog/dialogOverlay/Default';
import useStyledExamples from '../../../utils/useStyledExamples';

export default function PageDialogOverlay() {
  const examples = useStyledExamples('dialog/dialogOverlay');
  return (
    <>
      <ComponentPageDescription title="Dialog Overlay" isDeprecated>
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
            name: 'isOpen',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Is dialog open',
          },
          {
            name: 'onDismiss',
            type: 'function',
            required: false,
            default: '-',
            description: 'Function that triggers on dismissing dialog',
          },
        ]}
      />
    </>
  );
}
