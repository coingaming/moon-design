import React from 'react';

import { MultiSelect } from '@heathmont/moon-select';
import {
  RadioButtonLabel,
  ListItem,
  RadioButtonInput,
  Footer,
} from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

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
  {
    value: 'Option 3',
    label: 'Option 3',
    element: (
      <RadioButtonLabel id="Option3">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 3"
              id="Option3"
            />
          }
        >
          Option 3
        </ListItem>
      </RadioButtonLabel>
    ),
  },
  {
    value: 'Option 4',
    label: 'Option 4',
    element: (
      <RadioButtonLabel id="Option4">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 4"
              id="Option4"
            />
          }
        >
          Option 4
        </ListItem>
      </RadioButtonLabel>
    ),
  },
  {
    value: 'Option 5',
    label: 'Option 5',
    element: (
      <RadioButtonLabel id="Option5">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 5"
              id="Option5"
            />
          }
        >
          Option 5
        </ListItem>
      </RadioButtonLabel>
    ),
  },
  {
    value: 'Option 6',
    label: 'Option 6',
    element: (
      <RadioButtonLabel id="Option6">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 6"
              id="Option6"
            />
          }
        >
          Option 6
        </ListItem>
      </RadioButtonLabel>
    ),
  },
  {
    value: 'Option 7',
    label: 'Option 7',
    element: (
      <RadioButtonLabel id="Option2">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 7"
              id="Option7"
            />
          }
        >
          Option 7
        </ListItem>
      </RadioButtonLabel>
    ),
  },
  {
    value: 'Option 8',
    label: 'Option 8',
    element: (
      <RadioButtonLabel id="Option8">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 8"
              id="Option8"
            />
          }
        >
          Option 8
        </ListItem>
      </RadioButtonLabel>
    ),
  },
];

export default function PageMultiSelect() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">MultiSelect</h1>
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
        <MultiSelect
          items={options}
          label={<span>Choose some elements:</span>}
          search={<div className="p-4">Search component</div>}
          footer={
            <Footer
              primButton={
                <Button fullWidth variant="secondary" size="xsmall">
                  Button
                </Button>
              }
              secButton={
                <Button fullWidth variant="tertiary" size="xsmall">
                  Button
                </Button>
              }
              tertButton={
                <Button fullWidth variant="tertiary" size="xsmall">
                  Button
                </Button>
              }
              isDivider
              size="small"
            />
          }
          initialSelectedItems={[]}
          initialIsExpanded={false}
        />
      </section>
    </>
  );
}
