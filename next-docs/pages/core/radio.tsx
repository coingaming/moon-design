import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import AsFormItem from '../../public/examples/radio/AsFormItem';
import Customization from '../../public/examples/radio/Customization';
import Default from '../../public/examples/radio/Default';
import Disabled from '../../public/examples/radio/Disabled';
import Uncontrolled from '../../public/examples/radio/Uncontrolled';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('radio');
  return (
    <>
      <ComponentPageDescription
        title="Radio"
        isInProgress
        isAriaSupport
        isRtlSupport
      >
        <p>
          Radio buttons are used to represent a group of choices whereby users
          can only select one option.
        </p>
        <p>
          The main difference between the radio button and the checkbox is,
          users are allowed to select single options whereas in the checkbox you
          can have multiple options.
        </p>
        <p>
          Based on{' '}
          <a
            href="https://headlessui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Headless UI
          </a>
          .
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Radio>
  <Radio.Option>
    <Radio.Indicator />
    ...
  </Radio.Option>
</Radio>`}
      </ComponentAnatomy>
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
        title="As form item"
        preview={<AsFormItem />}
        code={examples ? examples.AsFormItem : 'Loading'}
      />
      <Preview
        title="Uncontrolled"
        preview={<Uncontrolled />}
        code={examples ? examples.Uncontrolled : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <PropsTable
        title="Radio props"
        data={[
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children of Radio',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'defaultValue',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Default value of uncontrolled Radio',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Disabled state of Radio',
          },
          {
            name: 'name',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Name of Radio when using inside a form',
          },
          {
            name: 'setValue',
            type: 'any',
            required: false,
            default: '-',
            description: 'Set value of Radio',
          },
          {
            name: 'value',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Value of Radio',
          },
        ]}
      />
      <PropsTable
        title="Radio.Option props"
        data={[
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children of Radio.Option',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Disabled state of Radio',
          },
          {
            name: 'value',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Value of Radio',
          },
        ]}
      />
      <PropsTable
        title="Radio.Indicator props"
        data={[
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
