import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4 w-52">
      <TextInput
        type="datetime-local"
        inputSize="medium"
        placeholder="medium"
      />
    </div>
    <div className="m-4 w-52">
      <TextInput type="datetime-local" inputSize="large" placeholder="large" />
    </div>
    <div className="m-4 w-52">
      <TextInput
        type="datetime-local"
        inputSize="xlarge"
        placeholder="xlarge"
      />
    </div>
  </div>
);

export default Example;
