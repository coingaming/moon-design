import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/form/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('form');
  return (
    <>
      <ComponentPageDescription title="Form" isInProgress>
        <p>This is a Form wrapper component.</p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Form>
  <Form.Item>...</Form.Item>
</Form>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <PropsTable
        title="Form"
        data={[
          {
            name: 'size',
            type: 'sm | md | lg',
            required: false,
            default: '-',
            description: 'Size',
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

      <PropsTable
        title="Form.Item"
        data={[
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Set disabled/non-disabled',
          },
          {
            name: 'error',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Set valid/non-valid',
          },
          {
            name: 'size',
            type: 'sm | md | lg',
            required: false,
            default: '-',
            description: 'Size',
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
