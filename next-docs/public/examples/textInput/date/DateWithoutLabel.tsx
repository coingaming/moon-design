import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput type="date" inputSize="medium" placeholder="medium" />
    <TextInput type="date" inputSize="large" placeholder="large" />
    <TextInput type="date" inputSize="xlarge" placeholder="xlarge" />
  </div>
);

export default Example;
