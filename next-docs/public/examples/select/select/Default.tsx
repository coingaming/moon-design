import React from 'react';

// import { Select } from '@heathmont/moon-components';
import { Select } from '@heathmont/moon-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Example = () => (
  <div className="w-52 h-96">
    <Select options={options} label="Inbox address" isSearchable isClearable />
  </div>

  // <Select>
  //   <option value="">Select an option</option>
  //   <option value="never-gonna">Never gonna</option>
  //   <option value="give-you-up">give you up</option>
  //   <option value="let-you-down">let you down</option>
  // </Select>
);

export default Example;
