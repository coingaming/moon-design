import React from 'react';
import { Select } from '@heathmont/moon-select';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
];

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="flex-flex-col">
      <Select
        options={options}
        label="Large"
        placeholderSlot="Choose an option"
        isMulti
        hintSlot="Informative message holder"
      />
    </div>
    <div className="flex-flex-col">
      <Select
        options={options}
        label="Single xLarge"
        size="xLarge"
        placeholderSlot="Choose an option"
        isMulti
        hintSlot="Informative message holder"
      />
    </div>
  </div>
);

export default Example;
