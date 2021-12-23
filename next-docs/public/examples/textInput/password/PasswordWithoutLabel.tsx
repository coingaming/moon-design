import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="medium"
        placeholder="medium"
        showPasswordText="Show"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="large"
        placeholder="large"
        showPasswordText="Show"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="xlarge"
        placeholder="xlarge"
        showPasswordText="Show"
      />
    </div>
  </div>
);

export default Example;
