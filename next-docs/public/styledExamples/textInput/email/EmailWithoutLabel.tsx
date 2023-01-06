import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput type="email" inputSize="medium" placeholder="medium" />
    <TextInput type="email" inputSize="large" placeholder="large" />
    <TextInput type="email" inputSize="xlarge" placeholder="xlarge" />
  </div>
);

export default Example;
