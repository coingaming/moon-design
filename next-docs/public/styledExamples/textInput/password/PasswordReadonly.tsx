import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="password"
      inputSize="medium"
      label="medium"
      hintText="Informative message holder"
      showPasswordText="Show"
      readOnly
    />
    <TextInput
      type="password"
      inputSize="large"
      label="large"
      hintText="Informative message holder"
      showPasswordText="Show"
      readOnly
    />
    <TextInput
      type="password"
      inputSize="xlarge"
      label="xlarge"
      hintText="Informative message holder"
      showPasswordText="Show"
      readOnly
    />
  </div>
);

export default Example;
