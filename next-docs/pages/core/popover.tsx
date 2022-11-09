import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/popoverTW/Default';
import Position from '../../public/examples/popoverTW/Position';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('popoverTW');
  return (
    <>
      <ComponentPageDescription title="Dropdown">
        <p>
          Dropdowns is a custom select component that allows users to make
          single or multiple selections (Multi select not supported currently).
        </p>
        <p>
          An option that’s been selected can represent a corresponding value in
          forms or be used to filter/sort content.containers as Popovers,
          Sidebars, Drawers, Dialogs etc.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <Preview
        title="Position"
        preview={<Position />}
        code={examples ? examples.Position : 'Loading'}
      />

      <PropsTable
        title="Dropdown"
        data={[
          {
            name: 'value',
            type: 'T',
            required: true,
            default: '-',
            description: 'The selected value.',
          },
          {
            name: 'onChange',
            type: '(value: T) => void',
            required: true,
            default: '-',
            description: 'The function to call when a new option is selected.',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Set valid/non-valid',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Set disabled/non-disabled',
          },
          {
            name: 'size',
            type: 'sm | md | lg | xl | string',
            required: false,
            default: 'md',
            description: 'Size',
          },
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'open',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether or not the Listbox is open.',
          },
        ]}
      />

      <PropsTable
        title="Dropdown.Options"
        data={[
          {
            name: 'menuWidth',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind class for custom options container width.',
          },
        ]}
      />

      <PropsTable
        title="Dropdown.Option"
        data={[
          {
            name: 'value',
            type: 'T',
            required: false,
            default: '-',
            description: 'The option value.',
          },
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'active',
            type: 'boolean',
            required: false,
            default: '-',
            description:
              'Whether or not the option is the active/focused option.',
          },
          {
            name: 'selected',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether or not the option is the selected option.',
          },
        ]}
      />

      <PropsTable
        title="Dropdown.Select"
        data={[
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Label title',
          },
          {
            name: 'placeholder',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
        ]}
      />
    </>
  );
};

export default Example;
