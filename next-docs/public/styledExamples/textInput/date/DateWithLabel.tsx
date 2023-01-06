import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="date"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
    />
    <TextInput
      type="date"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
    />
    <TextInput
      type="date"
      inputSize="xlarge"
      label="xlarge"
      placeholder="Placeholder"
    />
  </div>
);

export default Example;
