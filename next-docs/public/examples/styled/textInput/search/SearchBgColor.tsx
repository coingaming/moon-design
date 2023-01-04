import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="search"
      inputSize="medium"
      label="medium"
      placeholder="e.g. EPL"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
    <TextInput
      type="search"
      inputSize="large"
      label="large"
      placeholder="e.g. EPL"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
    <TextInput
      type="search"
      inputSize="xlarge"
      label="xlarge"
      placeholder="e.g. EPL"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
  </div>
);

export default Example;
