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
import OptionsVariants from '../../public/examples/combobox/OptionsVariants';
import Select from '../../public/examples/combobox/Select';
import SelectStates from '../../public/examples/combobox/SelectStates';
import TriggerElements from '../../public/examples/combobox/TriggerElements';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('combobox');
  const { name, text, image } = getComponent('Combobox');
  return (
    <>
      <ComponentPageDescription  title={name} image={image} isRtlSupport isInDevelopment>
        <p>
          Comboboxes are the foundation of accessible autocompletes and command
          palettes for your app, complete with robust support for keyboard
          navigation. You are completely in charge of how you filter the
          results, whether it be with a fuzzy search library client-side or by
          making server-side requests to an API. In these examples we will keep
          the logic simple for demo purposes.
        </p>
        <p>
          {text}
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
{/*
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
  */}
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
            description: 'Whether the selected option can be cleared or not.',
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
        title="Combobox.Select | Combobox.InsetSelect"
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
        title="Combobox.MultiSelect | Combobox.InsetMultiSelect"
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
