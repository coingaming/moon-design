import React from 'react';
import '@reach/dialog/styles.css';
import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/dialog/dialog/Default';
import DialogHeader from '../../../public/examples/dialog/dialog/DialogHeader';
import DialogHeader2 from '../../../public/examples/dialog/dialog/DialogHeader2';
import NoBackground from '../../../public/examples/dialog/dialog/NoBackground';
import NoClose from '../../../public/examples/dialog/dialog/NoClose';
import useExamples from '../../../utils/useExamples';

export default function PageDialog() {
  const examples = useExamples('dialog/dialog');
  return (
    <>
      <ComponentPageDescription title="Dialog">
        <DeprecationWarning href="/core/modal" name="Modal" />
      </ComponentPageDescription>
      <Preview
        title="Variant new"
        preview={<DialogHeader2 />}
        code={examples ? examples.DialogHeader2 : 'Loading'}
      />
      <Preview
        title="Default example"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Example with separate header"
        preview={<DialogHeader />}
        code={examples ? examples.DialogHeader : 'Loading'}
      />
      <Preview
        title="Example without close button"
        preview={<NoClose />}
        code={examples ? examples.NoClose : 'Loading'}
      />
      <Preview
        title="Example with background color"
        preview={<NoBackground />}
        code={examples ? examples.NoBackground : 'Loading'}
      />
      <PropsTable
        title="Props for Dialog Footer component"
        data={[
          {
            name: 'disableScrollLock',
            type: 'boolean',
            required: 'false',
            default: '-',
            description: '',
          },
          {
            name: 'heading',
            type: 'JSX.Element',
            required: 'false',
            default: '-',
            description: ' ',
          },
          {
            name: 'hideCloseButton',
            type: 'boolean',
            required: 'false',
            default: '-',
            description: ' ',
          },
          {
            name: 'variant',
            type: 'default | new',
            required: 'false',
            default: 'false',
            description: ' ',
          },
          {
            name: 'position',
            type: 'TOP | CENTER',
            required: 'false',
            default: '-',
            description: ' ',
          },
          {
            name: 'maxWidth',
            type: 'string',
            required: 'false',
            default: '-',
            description: ' ',
          },
        ]}
      />
    </>
  );
}
