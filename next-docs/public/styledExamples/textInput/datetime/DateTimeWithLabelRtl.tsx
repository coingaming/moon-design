import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="datetime-local"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
      dir={'rtl'}
    />
    <TextInput
      type="datetime-local"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
      dir={'rtl'}
    />
    <TextInput
      type="datetime-local"
      inputSize="xlarge"
      label="xlarge"
      placeholder="Placeholder"
      dir={'rtl'}
    />
  </div>
);

export default Example;
