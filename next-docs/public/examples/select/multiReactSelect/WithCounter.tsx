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
  <div className="pb-40 flex items-end flex-wrap ">
    <div className="w-80 mr-4 ml-4 mb-8">
      <Select
        options={options}
        label="Large"
        placeholderSlot="Choose an option"
        isMulti
        amountOfVisibleItems={2}
      />
    </div>
    <div className="w-80 mr-4 ml-4 mb-8">
      <Select
        options={options}
        label="xLarge"
        size="xLarge"
        placeholderSlot="Choose an option"
        isMulti
        amountOfVisibleItems={2}
      />
    </div>
  </div>
);

export default Example;
