import React from 'react';

import { RadioButton } from '@heathmont/moon-core';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

const Example = () => {
  return (
    <div className="flex flex-col">
      <h4 className="mb-2">Please select your age:</h4>
      <div className="mb-2 ml-2">
        <RadioButton name="age" label="0 - 30" ariaLabel="0 - 30" id="age1" />
      </div>
      <div className="mb-2 ml-2">
        <RadioButton name="age" label="31 - 60" ariaLabel="31 - 60" id="age2" />
      </div>
      <div className="mb-2 ml-2">
        <RadioButton
          name="age"
          label="61 - 100"
          ariaLabel="61 - 100"
          id="age3"
        />
      </div>
    </div>
  );
};

const ExampleDisabled = () => {
  return <RadioButton disabled label="Disabled radio button" />;
};

const ExampleChecked = () => {
  return <RadioButton checked label="Checked radio button" readOnly />;
};

export default function RadioButtonPage() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">RadioButton</h1>
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
          preview={<Example />}
          code={`import { RadioButton } from '@heathmont/moon-core';

<RadioButton name="age" label="0 - 30" ariaLabel="0 - 30" id="age1" />
<RadioButton name="age" label="31 - 60" ariaLabel="31 - 60" id="age2" />
<RadioButton name="age" label="61 - 100" ariaLabel="61 - 100" id="age3" />
`}
        />
      </section>

      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<ExampleDisabled />}
          code={`import { RadioButton } from '@heathmont/moon-core';

<RadioButton disabled label="Disabled radio button" />
`}
        />
      </section>

      {/* Checked */}
      <section className="mt-8">
        <Preview
          title="Checked"
          preview={<ExampleChecked />}
          code={`import { RadioButton } from '@heathmont/moon-core';

<RadioButton checked label="Checked radio button" readOnly />
`}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for RadioButton component</h2>
        <Table
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
      </section>
    </>
  );
}
