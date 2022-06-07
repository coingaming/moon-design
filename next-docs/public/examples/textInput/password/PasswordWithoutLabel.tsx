import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="password"
      inputSize="medium"
      placeholder="medium"
      showPasswordText="Show"
    />
    <TextInput
      type="password"
      inputSize="large"
      placeholder="large"
      showPasswordText="Show"
    />
    <TextInput
      type="password"
      inputSize="xlarge"
      placeholder="xlarge"
      showPasswordText="Show"
    />
  </div>
);

export default Example;
