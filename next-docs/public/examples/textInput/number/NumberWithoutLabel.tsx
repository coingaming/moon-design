import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="number"
      inputSize="medium"
      placeholder="medium e.g. 1234"
    />
    <TextInput type="number" inputSize="large" placeholder="large e.g. 1234" />
    <TextInput
      type="number"
      inputSize="xlarge"
      placeholder="xlarge e.g. 1234"
    />
  </div>
);

export default Example;
