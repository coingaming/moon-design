import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/form/Default';
import WithInsetInput from '../../public/examples/form/WithInsetInput';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('form');
  const { name, text, image } = getComponent('Form');
  return (
    <>
      <ComponentPageDescription title={name} image={image}>
        <p>{text}</p>
        <p>
          You can set the size prop for Form and this size will be applied to
          all children's components.
        </p>
        <p>
          You can set disabled and error props prop for Form.Item and this props
          will be applied to all children's.
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Form>
  <Form.Item>...</Form.Item>
</Form>`}
      </ComponentAnatomy>
      <Preview
        title="Form example"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Form example with InsetInput"
        preview={<WithInsetInput />}
        code={examples ? examples.WithInsetInput : 'Loading'}
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
