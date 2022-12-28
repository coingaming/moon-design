import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Customization from '../../public/examples/textareaTW/Customization';
import Default from '../../public/examples/textareaTW/Default';
import Disabled from '../../public/examples/textareaTW/Disabled';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('textareaTW');
  return (
    <>
      <ComponentPageDescription title="Textarea" isInProgress isRtlSupport>
        <p>A form control for editing multi-line text.</p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <PropsTable
        title="Textarea props"
        data={[
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Disables textarea',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

export default Example;
