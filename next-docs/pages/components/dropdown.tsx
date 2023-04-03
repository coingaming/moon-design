import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/dropdown/Default';
import InsetMultiSelect from '../../public/examples/dropdown/InsetMultiSelect';
import InsetSelect from '../../public/examples/dropdown/InsetSelect';
import InsetSelectStates from '../../public/examples/dropdown/InsetSelectStates';
import MultiSelect from '../../public/examples/dropdown/MultiSelect';
import OptionsVariants from '../../public/examples/dropdown/OptionsVariants';
import Select from '../../public/examples/dropdown/Select';
import SelectStates from '../../public/examples/dropdown/SelectStates';
import TriggerElements from '../../public/examples/dropdown/TriggerElements';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('dropdown');
  const { name, text, image } = getComponent('Dropdown');
  return (
    <>
      <ComponentPageDescription title={name} image={image} isInProgress>
        <p>{text}</p>
        <p>
          An option that's been selected can represent a corresponding value in
          forms or be used to filter/sort content.
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
        {`<Dropdown>
  <Dropdown.Trigger>...</Dropdown.Trigger>
  <Dropdown.Options>
    <Dropdown.Option>...</Dropdown.Option>
  </Dropdown.Options>
  <Dropdown.Hint>...</Dropdown.Hint>
</Dropdown>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Trigger elements"
        preview={<TriggerElements />}
        code={examples ? examples.TriggerElements : 'Loading'}
      />
      <Preview
        title="Example layouts for options"
        preview={<OptionsVariants />}
        code={examples ? examples.OptionsVariants : 'Loading'}
      />
      <ComponentAnatomy>
        {`<Dropdown>
  <Dropdown.Select>...</Dropdown.Select>
  <Dropdown.Options>
    <Dropdown.Option>...</Dropdown.Option>
  </Dropdown.Options>
  <Dropdown.Hint>...</Dropdown.Hint>
</Dropdown>`}
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
        {`<Dropdown>
  <Dropdown.InsetSelect>...</Dropdown.InsetSelect>
  <Dropdown.Options>
    <Dropdown.Option>...</Dropdown.Option>
  </Dropdown.Options>
  <Dropdown.Hint>...</Dropdown.Hint>
</Dropdown>`}
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
        {`<Dropdown>
  <Dropdown.MultiSelect>...</Dropdown.MultiSelect>
  <Dropdown.Options>
    <Dropdown.Option>...</Dropdown.Option>
  </Dropdown.Options>
  <Dropdown.Hint>...</Dropdown.Hint>
</Dropdown>`}
      </ComponentAnatomy>
      <Preview
        title="MultiSelect"
        preview={<MultiSelect />}
        code={examples ? examples.MultiSelect : 'Loading'}
      />

      <ComponentAnatomy>
        {`<Dropdown>
  <Dropdown.InsetMultiSelect>...</Dropdown.InsetMultiSelect>
  <Dropdown.Options>
    <Dropdown.Option>...</Dropdown.Option>
  </Dropdown.Options>
  <Dropdown.Hint>...</Dropdown.Hint>
</Dropdown>`}
      </ComponentAnatomy>
      <Preview
        title="MultiSelect with inner label"
        preview={<InsetMultiSelect />}
        code={examples ? examples.InsetMultiSelect : 'Loading'}
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
            description: 'Set placement for dropdown',
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
        title="Dropdown.Select | Dropdown.InsetSelect"
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
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for custom styles (only for button).',
          },
        ]}
      />

      <PropsTable
        title="Dropdown.MultiSelect | Dropdown.InsetMultiSelect"
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
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for custom styles (only for button).',
          },
          {
            name: 'counter',
            type: 'Number',
            required: false,
            default: '0',
            description: 'Number of selected options',
          },
        ]}
      />
    </>
  );
};

export default Example;
