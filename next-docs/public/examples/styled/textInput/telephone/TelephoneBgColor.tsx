import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="tel"
      inputSize="medium"
      label="medium"
      placeholder="e.g. +372 123 4567"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
    <TextInput
      type="tel"
      inputSize="large"
      label="large"
      placeholder="e.g. +372 123 4567"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
    <TextInput
      type="tel"
      inputSize="xlarge"
      label="xlarge"
      placeholder="e.g. +372 123 4567"
      hintText="Informative message holder"
      backgroundColor="goku"
    />
  </div>
);

export default Example;
