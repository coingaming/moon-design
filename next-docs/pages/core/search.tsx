import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/search/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('select');
  return (
    <>
      <ComponentPageDescription title="Search" isInProgress>
        <p>
          Search
        </p>
        <p>

        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />


      <PropsTable
        title="Select props"
        data={[
          {
            name: 'formatOptionLabel',
            type: '(data) => JSX.Element | string',
            required: false,
            default: '-',
            description:
              'Function to customize the list options (like rendering an element as JSX)',
          },
          {
            name: 'hintText',
            type: 'JSX.Element | string',
            required: false,
            default: '_',
            description: 'Inform message under select',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Set disabled/non-disabled select',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Set valid/non-valid select',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: `Label title`,
          },
          {
            name: 'menuWidth',
            type: 'string',
            required: false,
            default: '_',
            description: 'Tailwind class for custom options container width',
          },
          {
            name: 'onChange',
            type: '(value) => void',
            required: false,
            default: '-',
            description: 'onChange event handler',
          },
          {
            name: 'options',
            type: '{ id: number, label: string, value: string | number }[]',
            required: true,
            default: '-',
            description: `List of options`,
          },
          {
            name: 'placeholder',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'size',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'md',
            description: `Size of select`,
          },
          {
            name: 'value',
            type: '{ id: number, label: string, value: string | number }',
            required: false,
            default: '-',
            description: 'Controled value',
          },
        ]}
      />
    </>
  );
};

export default Example;
