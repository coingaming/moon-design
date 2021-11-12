// @ts-nocheck
import React from 'react';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

import Default from '../../../public/examples/radiobutton/radiobutton-api/Default';

import useExamples from '../../../utils/useExamples';

export default function RadioButtonPage() {
  const examples = useExamples('RadioButtonApi');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">RadioButton API</h1>
        <p className="text-lg mt-4">
          RadioButton API consists of two components RadioButtonLabel and
          RadioButtonInput. You can use it together with other components to
          present different view of Radio Button. Just need to remember that
          RadioButtonLabel and RadioButtonInput should have the same id prop.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="List Item with Radio button"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for RadioButtonLabel component</h2>
        <Table
          data={[
            {
              name: 'id',
              type: 'string',
              required: false,
              default: '-',
              description: `Unique element's identifier (the same id as for RadioButtonInput)`,
            },
          ]}
        />
      </section>
      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for RadioButtonInput component</h2>
        <Table
          data={[
            {
              name: 'id',
              type: 'string',
              required: false,
              default: '-',
              description: `Unique element's identifier (the same id as for RadioButtonLabel)`,
            },
            {
              name: 'label',
              type: 'JSX.Element | string',
              required: false,
              default: '-',
              description: 'Represent a caption for an item',
            },
            {
              name: 'name',
              type: 'string',
              required: false,
              default: '-',
              description: 'Represent name for an item',
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
      </section>
    </>
  );
}
