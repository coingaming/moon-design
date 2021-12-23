import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="medium"
        label="medium"
        placeholder="e.g. 1234"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="large"
        label="large"
        placeholder="e.g. 1234"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="xlarge"
        label="xlarge"
        placeholder="e.g. 1234"
        hintText="Informative message holder"
      />
    </div>
  </div>
);

export default Example;
