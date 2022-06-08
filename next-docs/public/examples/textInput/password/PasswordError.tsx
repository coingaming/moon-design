import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="password"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
      hintText="Error message"
      showPasswordText="Show"
      isError
    />
    <TextInput
      type="password"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
      hintText="Error message"
      showPasswordText="Show"
      isError
    />
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
);

export default Example;
