import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="medium"
        label="medium"
        placeholder="Placeholder"
        hintText="Error message"
        showPasswordText="Show"
        isError
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="large"
        label="large"
        placeholder="Placeholder"
        hintText="Error message"
        showPasswordText="Show"
        isError
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="xlarge"
        label="xlarge"
        placeholder="Placeholder"
        hintText="Error message"
        showPasswordText="Show"
        isError
      />
    </div>
  </div>
);

export default Example;
