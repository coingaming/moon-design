import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="time"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
      hintText="Informative message holder"
    />
    <TextInput
      type="time"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
      hintText="Informative message holder"
    />
    <TextInput
      type="time"
      inputSize="xlarge"
      label="xlarge"
      placeholder="Placeholder"
      hintText="Informative message holder"
    />
  </div>
);

export default Example;
