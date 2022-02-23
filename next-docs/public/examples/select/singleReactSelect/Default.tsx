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

export const Example = () => (
  <div className="pb-40 flex items-end flex-wrap" data-test="yo">
    <Select
      id="test-moon-select"
      options={options}
      label="Large"
      placeholderSlot="Choose an option"
    />
  </div>
);

export default Example;
