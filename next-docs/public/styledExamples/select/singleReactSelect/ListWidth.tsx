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
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <Select
      options={options}
      label="Large"
      placeholderSlot="Choose an option"
      menuWidth={150}
    />
    <Select
      options={options}
      label="xLarge"
      size="xLarge"
      placeholderSlot="Choose an option"
      menuWidth={150}
    />
  </div>
);

export default Example;
