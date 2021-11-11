import React from 'react';

import { ListItem, SingleSelect, RadioButton } from '@heathmont/moon-core';

const optionsRadioBtn = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: ({ isSelected }: { isSelected: boolean }) => (
      <ListItem
        elementRight={
          <RadioButton
            name="options"
            ariaLabel="Option 1"
            id="Option1"
            checked={isSelected}
            onChange={() => console.log('test')}
          />
        }
      >
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: ({ isSelected }: { isSelected: boolean }) => (
      <ListItem
        elementRight={
          <RadioButton
            name="options"
            ariaLabel="Option 2"
            id="Option2"
            checked={isSelected}
            onChange={() => console.log('test')}
          />
        }
      >
        Option 2
      </ListItem>
    ),
  },
];

const Example = () => (
  <div className="flex flex-col">
    <div className="flex justify-around items-center w-96">
      <SingleSelect options={optionsRadioBtn} variant="primary" />
    </div>
  </div>
);

export default Example;
