import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="password"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
      hintText="Informative message holder"
      showPasswordText="Show"
    />
    <TextInput
      type="password"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
      hintText="Informative message holder"
      showPasswordText="Show"
    />
    <TextInput
      type="password"
      inputSize="xlarge"
      label="xlarge"
      placeholder="Placeholder"
      hintText="Informative message holder"
      showPasswordText="Show"
    />
  </div>
);

export default Example;
