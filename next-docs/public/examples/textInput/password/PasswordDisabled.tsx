import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="medium"
        label="medium"
        hintText="Informative message holder"
        showPasswordText="Show"
        disabled
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="large"
        label="large"
        hintText="Informative message holder"
        showPasswordText="Show"
        disabled
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="xlarge"
        label="xlarge"
        hintText="Informative message holder"
        showPasswordText="Show"
        disabled
      />
    </div>
  </div>
);

export default Example;
