import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/select/select/Default';
import Label from '../../../public/examples/select/select/Label';
import Rtl from '../../../public/examples/select/select/Rtl';
import useExamples from '../../../utils/useExamples';

export default function PageSelect() {
  const examples = useExamples('select/select');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Select</h1>
        <p className="text-lg mt-4">
          By default, Select stretches to full width on small devices.
        </p>
        <p className="text-lg mt-4">
          For Select inputs that need to remain full width on all devices, use
          the fullWidth prop.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Examples"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="RTL"
          preview={<Rtl />}
          code={examples ? examples.Rtl : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="with label"
          preview={<Label />}
          code={examples ? examples.Label : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'size',
            type: 'large | xLarge',
            required: false,
            default: 'large',
            description: `The option's value.`,
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: `Label title`,
          },
          {
            name: 'placeholderSlot',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'headerSlot',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Header element slot.',
          },
          {
            name: 'footerSlot',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Footer element slot.',
          },
          {
            name: 'menuWidth',
            type: 'number',
            required: false,
            default: '_',
            description: 'Options container width',
          },
          {
            name: 'leftSlot',
            type: 'JSX.Element',
            required: false,
            default: '_',
            description: 'Left content for selected option',
          },
          {
            name: 'leftSlot',
            type: 'JSX.Element',
            required: false,
            default: '_',
            description: 'Inform message under select',
          },
          {
            name: 'amountOfVisibleItems',
            type: 'number',
            required: false,
            default: '_',
            description:
              'Set amount of visible options in multi select, all other will be hide under counter',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Set valid/not valid select',
          },
          {
            name: 'isDisabled',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Is the select disabled',
          },
          {
            name: 'isMulti',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Support multiple selected options',
          },
          {
            name: 'isSearchable',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Whether to enable search functionality',
          },
          {
            name: 'closeMenuOnSelect',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Close the select menu when the user selects an option',
          },
        ]}
      />
    </>
  );
}
