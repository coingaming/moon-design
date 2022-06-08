import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput type="text" inputSize="medium" placeholder="medium" />
    <TextInput type="text" inputSize="large" placeholder="large" />
    <TextInput type="text" inputSize="xlarge" placeholder="xlarge" />
  </div>
);

export default Example;
