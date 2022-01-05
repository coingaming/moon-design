import React from 'react';
import { Select } from '@heathmont/moon-select';

const options = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
];

const Example = () => (
  <div className="pb-40 flex items-end flex-wrap ">
    <div className="w-80 mr-4 ml-4 mb-8">
      <Select
        options={options}
        label="Large"
        placeholderSlot="Choose an option"
        menuWidth={150}
      />
    </div>
    <div className="w-80 mr-4 ml-4 mb-8">
      <Select
        options={options}
        label="xLarge"
        size="xLarge"
        placeholderSlot="Choose an option"
        menuWidth={150}
      />
    </div>
  </div>
);

export default Example;
