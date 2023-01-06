import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="password"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
      showPasswordText="Show"
      dir={'rtl'}
    />
    <TextInput
      type="password"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
      showPasswordText="Show"
      dir={'rtl'}
    />
    <TextInput
      type="password"
      inputSize="xlarge"
      label="xlarge"
      placeholder="Placeholder"
      showPasswordText="Show"
      dir={'rtl'}
    />
  </div>
);

export default Example;
