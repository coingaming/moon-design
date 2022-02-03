import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="number"
        value="1234"
        inputSize="medium"
        label="medium"
        hintText="Informative message holder"
        readOnly
      />
    </div>
    <div className="m-4">
      <TextInput
        type="number"
        value="1234"
        inputSize="large"
        label="large"
        hintText="Informative message holder"
        readOnly
      />
    </div>
    <div className="m-4">
      <TextInput
        type="number"
        value="1234"
        inputSize="xlarge"
        label="xlarge"
        hintText="Informative message holder"
        readOnly
      />
    </div>
  </div>
);

export default Example;
