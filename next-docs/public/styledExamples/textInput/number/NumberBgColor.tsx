import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="number"
      inputSize="medium"
      label="medium"
      placeholder="e.g. 1234"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
    <TextInput
      type="number"
      inputSize="large"
      label="large"
      placeholder="e.g. 1234"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
    <TextInput
      type="number"
      inputSize="xlarge"
      label="xlarge"
      placeholder="e.g. 1234"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
  </div>
);

export default Example;
