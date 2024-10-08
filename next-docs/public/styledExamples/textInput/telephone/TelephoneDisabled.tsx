import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="tel"
      value="+372 123 4567"
      inputSize="medium"
      label="medium"
      hintText="Informative message holder"
      disabled
    />
    <TextInput
      type="tel"
      value="+372 123 4567"
      inputSize="large"
      label="large"
      hintText="Informative message holder"
      disabled
    />
    <TextInput
      type="tel"
      value="+372 123 4567"
      inputSize="xlarge"
      label="xlarge"
      hintText="Informative message holder"
      disabled
    />
  </div>
);

export default Example;
