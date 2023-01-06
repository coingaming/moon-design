import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="time"
      value="Text"
      inputSize="medium"
      label="medium"
      hintText="Informative message holder"
      disabled
    />
    <TextInput
      type="time"
      value="Text"
      inputSize="large"
      label="large"
      hintText="Informative message holder"
      disabled
    />
    <TextInput
      type="time"
      value="Text"
      inputSize="xlarge"
      label="xlarge"
      hintText="Informative message holder"
      disabled
    />
  </div>
);

export default Example;
