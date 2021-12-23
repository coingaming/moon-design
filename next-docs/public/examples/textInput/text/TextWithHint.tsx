import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="text"
        inputSize="medium"
        label="medium"
        placeholder="Placeholder"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="text"
        inputSize="large"
        label="large"
        placeholder="Placeholder"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="text"
        inputSize="xlarge"
        label="xlarge"
        placeholder="Placeholder"
        hintText="Informative message holder"
      />
    </div>
  </div>
);

export default Example;
