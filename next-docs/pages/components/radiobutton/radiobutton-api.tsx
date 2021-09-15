// @ts-nocheck
import React from 'react';

import {
  RadioButtonLabel,
  RadioButtonInput,
  ListItem,
} from '@heathmont/moon-core';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

const Example = () => {
  return (
    <div className="flex flex-col">
      <h4 className="mb-2">Please select your age:</h4>
      <div className="mb-2">
        <RadioButtonLabel id="age1">
          <ListItem
            backgroundColor="goku.100"
            elementRight={
              <RadioButtonInput name="age" ariaLabel="0 - 30" id="age1" />
            }
          >
            0 - 30
          </ListItem>
        </RadioButtonLabel>
      </div>
      <div className="mb-2">
        <RadioButtonLabel id="age2">
          <ListItem
            backgroundColor="goku.100"
            elementRight={
              <RadioButtonInput name="age" ariaLabel="0 - 30" id="age2" />
            }
          >
            31 - 60
          </ListItem>
        </RadioButtonLabel>
      </div>
      <div className="mb-2">
        <RadioButtonLabel id="age3">
          <ListItem
            backgroundColor="goku.100"
            elementRight={
              <RadioButtonInput name="age" ariaLabel="61 - 100" id="age3" />
            }
          >
            31 - 60
          </ListItem>
        </RadioButtonLabel>
      </div>
    </div>
  );
};

export default function RadioButtonPage() {
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
          preview={<Example />}
          code={`import { RadioButtonLabel, RadioButtonInput, ListItem  } from '@heathmont/moon-core';

<RadioButtonLabel id="age1">
  <ListItem backgroundColor="goku.100" elementRight={<RadioButtonInput name="age" ariaLabel="0 - 30" id="age1" />}>
    0 - 30
  </ListItem>
</RadioButtonLabel>

<RadioButtonLabel id="age2">
  <ListItem backgroundColor="goku.100" elementRight={<RadioButtonInput name="age" ariaLabel="31 - 60" id="age2" />}>
    31 - 60
  </ListItem>
</RadioButtonLabel>

<RadioButtonLabel id="age3">
  <ListItem backgroundColor="goku.100" elementRight={<RadioButtonInput name="age" ariaLabel="0 - 30" id="age3" />}>
    0 - 30
  </ListItem>
</RadioButtonLabel>
`}
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
