import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/combobox/Default';
import InsetMultiSelect from '../../public/examples/combobox/InsetMultiSelect';
import InsetSelect from '../../public/examples/combobox/InsetSelect';
import InsetSelectStates from '../../public/examples/combobox/InsetSelectStates';
import MultiSelect from '../../public/examples/combobox/MultiSelect';
import Select from '../../public/examples/combobox/Select';
import SelectStates from '../../public/examples/combobox/SelectStates';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('combobox');
  const { name, text, image } = getComponent('Combobox');
  return (
    <>
      <ComponentPageDescription title={name} image={image} isRtlSupport>
        <p>{text}</p>
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
        {`<Combobox>
  <Combobox.Trigger>...</Combobox.Trigger>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
      </ComponentAnatomy>

      <Preview
        title="Default / Nullable"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <ComponentAnatomy>
        {`<Combobox>
  <Combobox.Select>...</Combobox.Select>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
      </ComponentAnatomy>

      <Preview
        title="Select"
        preview={<Select />}
        code={examples ? examples.Select : 'Loading'}
      />

      <Preview
        title="Different states for Select"
        preview={<SelectStates />}
        code={examples ? examples.SelectStates : 'Loading'}
      />

      <ComponentAnatomy>
        {`<Combobox>
  <Combobox.InsetSelect>...</Combobox.InsetSelect>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
      </ComponentAnatomy>

      <Preview
        title="Select with inner label"
        preview={<InsetSelect />}
        code={examples ? examples.InsetSelect : 'Loading'}
      />

      <Preview
        title="Different states for Select with inner label"
        preview={<InsetSelectStates />}
        code={examples ? examples.InsetSelectStates : 'Loading'}
      />

      <ComponentAnatomy>
        {`<Combobox>
  <Combobox.MultiSelect>...</Combobox.MultiSelect>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
      </ComponentAnatomy>

      <Preview
        title="MultiSelect"
        preview={<MultiSelect />}
        code={examples ? examples.MultiSelect : 'Loading'}
      />

      <ComponentAnatomy>
        {`<Combobox>
  <Combobox.InsetMultiSelect>...</Combobox.InsetMultiSelect>
  <Combobox.Options>
    <Combobox.Option>...</Combobox.Option>
  </Combobox.Options>
  <Combobox.Hint>...</Combobox.Hint>
</Combobox>`}
      </ComponentAnatomy>

      <Preview
        title="MultiSelect with inner label"
        preview={<InsetMultiSelect />}
        code={examples ? examples.InsetMultiSelect : 'Loading'}
      />

      <PropsTable
        title="Combobox"
        data={[
          {
            name: 'value',
            type: 'unknown',
            required: true,
            default: '-',
            description: 'The selected value.',
          },
          {
            name: 'onChange',
            type: '(value: unknown) => void',
            required: true,
            default: '-',
            description: 'The function to call when a new option is selected.',
          },
          {
            name: 'onQueryChange',
            type: '(value: string) => void',
            required: true,
            default: '-',
            description:
              'The function to call when the filter query is changing.',
          },
          {
            name: 'onClear',
            type: '() => void',
            required: false,
            default: '-',
            description:
              'The function to call when the selected options at MultiSelect Combobox type are being cleared.',
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
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
          {
            name: 'position',
            type: 'top-start | top-end | bottom-start | bottom-end | right-start | right-end | left-start| left-end | top | bottom | right| left',
            required: false,
            default: 'bottom',
            description: 'Set placement for combobox',
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
          {
            name: 'multiple',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether multiple options can be selected or not.',
          },
          {
            name: 'nullable',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether the selected value can be cleared or not.',
          },
        ]}
      />

      <PropsTable
        title="Combobox.Trigger"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
        ]}
      />

      <PropsTable
        title="Combobox.Input | Combobox.InsetInput"
        data={[
          {
            name: 'onChange',
            type: '(value: unknown) => void',
            required: true,
            default: '-',
            description: 'The function to call when a new option is selected.',
          },
          {
            name: 'onQueryChange',
            type: '(value: string) => void',
            required: true,
            default: '-',
            description:
              'The function to call when the query filter is changing.',
          },
          {
            name: 'displayValue',
            type: '(value: unknown) => string',
            required: false,
            default: '-',
            description: 'The value of the selected option to display.',
          },
          {
            name: 'label',
            type: 'string | undefined',
            required: false,
            default: '-',
            description: 'Inset label title (for InsetInput)',
          },
          {
            name: 'placeholder',
            type: 'string | undefined',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'type',
            type: 'text | string | number | date | time | date-time-local | undefined',
            required: false,
            default: 'text',
            description: 'Type of the input field',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
        ]}
      />

      <PropsTable
        title="Combobox.Button"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
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
        title="Combobox.Options"
        data={[
          {
            name: 'menuWidth',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind class for custom options container width.',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
        ]}
      />

      <PropsTable
        title="Combobox.Option"
        data={[
          {
            name: 'value',
            type: 'unknown',
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
        title="Combobox.Transition"
        data={[
          {
            name: 'onQueryChange',
            type: '(value: string) => void',
            required: true,
            default: '-',
            description:
              'The same function that is set in the Combobox component.',
          },
        ]}
      />

      <PropsTable
        title="Combobox.Select | Combobox.InsetSelect"
        data={[
          {
            name: 'onChange',
            type: '(value: unknown) => void',
            required: true,
            default: '-',
            description: 'The function to call when a new option is selected.',
          },
          {
            name: 'onQueryChange',
            type: '(value: string) => void',
            required: true,
            default: '-',
            description:
              'The function to call when the query filter is changing.',
          },
          {
            name: 'displayValue',
            type: '(value: unknown) => string',
            required: false,
            default: '-',
            description: 'The value of the selected option to display.',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Label title | Inset label title',
          },
          {
            name: 'placeholder',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
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
        title="Combobox.MultiSelect | Combobox.InsetMultiSelect"
        data={[
          {
            name: 'onChange',
            type: '(value: unknown) => void',
            required: true,
            default: '-',
            description: 'The function to call when a new option is selected.',
          },
          {
            name: 'onQueryChange',
            type: '(value: string) => void',
            required: true,
            default: '-',
            description:
              'The function to call when the query filter is changing.',
          },
          {
            name: 'displayValue',
            type: '(value: unknown) => string',
            required: false,
            default: '-',
            description: 'The value of the selected option to display.',
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Label title | Inset label title',
          },
          {
            name: 'placeholder',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
          {
            name: 'counter',
            type: 'Number',
            required: false,
            default: '0',
            description: 'Number of selected options',
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
        title="Combobox.Counter"
        data={[
          {
            name: 'counter',
            type: 'Number',
            required: true,
            default: '-',
            description: 'Number of selected options',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
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
        title="Combobox.Hint"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
        ]}
      />
    </>
  );
};

export default Example;
