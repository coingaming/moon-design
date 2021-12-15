import React from 'react';
import { Select } from '@heathmont/moon-select';
import { ListItem } from '@heathmont/moon-core';

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
  <div className="flex items-end flex-wrap pb-36">
    <div className="w-80 mr-4 ml-4 mb-8">
      <Select
        options={options}
        label="Single md"
        placeholderSlot="Choose an option"
      />
    </div>
    <div className="w-80 mr-4 ml-4 mb-8">
      <Select
        options={options}
        label="Single lg"
        size="xLarge"
        placeholderSlot="Choose an option"
      />
    </div>
  </div>
);

export default Example;
