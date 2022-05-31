// @ts-nocheck
import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import PropsTable from '../../../components/PropsTable';
import Checked from '../../../public/examples/radiobutton/radiobutton/Checked';
import Default from '../../../public/examples/radiobutton/radiobutton/Default';
import Disabled from '../../../public/examples/radiobutton/radiobutton/Disabled';
import NoLabel from '../../../public/examples/radiobutton/radiobutton/NoLabel';
import useExamples from '../../../utils/useExamples';

export default function RadioButtonPage() {
  const examples = useExamples('radiobutton/radiobutton');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">RadioButton</h1>
        <p className="text-lg mt-4">
          Radio buttons are used to represent a group or category of choices
          whereby users can only select one option - the main difference from
          checkboxes that allow users to select multiple options.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="RadioButton"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* No label */}
      <section className="mt-8">
        <Preview
          title="No label"
          preview={<NoLabel />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      {/* Checked */}
      <section className="mt-8">
        <Preview
          title="Checked"
          preview={<Checked />}
          code={examples ? examples.Checked : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props for RadioButton component"
        data={[
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: `Unique element's identifier`,
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Represent a caption for an item',
          },
          {
            name: 'ariaLabel',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Defines a string value that labels the current element',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'A Boolean indicating whether or not this radio button is desabled',
          },
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'A Boolean indicating whether or not this radio button is the default-selected item in the group',
          },
          {
            name: 'onClick',
            type: '-',
            required: false,
            default: '-',
            description: 'Event handler',
          },
        ]}
      />
    </>
  );
}
