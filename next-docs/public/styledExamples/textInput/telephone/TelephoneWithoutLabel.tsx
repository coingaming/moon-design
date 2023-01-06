import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput type="tel" inputSize="medium" placeholder="medium" />
    <TextInput type="tel" inputSize="large" placeholder="large" />
    <TextInput type="tel" inputSize="xlarge" placeholder="xlarge" />
  </div>
);

export default Example;
