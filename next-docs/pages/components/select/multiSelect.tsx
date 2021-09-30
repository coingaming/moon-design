import React from 'react';

import { MultiSelect } from '@heathmont/moon-multiselect';
import {
  RadioButtonLabel,
  ListItem,
  RadioButtonInput,
} from '@heathmont/moon-core';

const items = [
  'Neptunium',
  'Plutonium',
  'Americium',
  'Curium',
  'Berkelium',
  'Californium',
  'Einsteinium',
  'Fermium',
  'Mendelevium',
  'Nobelium',
  'Lawrencium',
  'Rutherfordium',
  'Dubnium',
  'Seaborgium',
  'Bohrium',
  'Hassium',
  'Meitnerium',
  'Darmstadtium',
  'Roentgenium',
  'Copernicium',
  'Nihonium',
  'Flerovium',
  'Moscovium',
  'Livermorium',
  'Tennessine',
  'Oganesson',
];

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: (
      <RadioButtonLabel id="Option1">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 1"
              id="Option1"
            />
          }
        >
          Option 1
        </ListItem>
      </RadioButtonLabel>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: (
      <RadioButtonLabel id="Option2">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 2"
              id="Option2"
            />
          }
        >
          Option 2
        </ListItem>
      </RadioButtonLabel>
    ),
  },
];

export default function PageMultiSelect() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">multiselect</h1>
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
        <MultiSelect items={options} label={<span>Choose some elements:</span>} />
      </section>
    </>
  );
}
