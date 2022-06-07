import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="text"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
      hintText="Informative message holder"
      backgroundColor="goku"
      dir={'rtl'}
    />
    <TextInput
      type="text"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
      hintText="Informative message holder"
      backgroundColor="goku"
      dir={'rtl'}
    />
    <TextInput
      type="text"
      inputSize="xlarge"
      label="xlarge"
      placeholder="Placeholder"
      hintText="Informative message holder"
      backgroundColor="goku"
      dir={'rtl'}
    />
  </div>
);

export default Example;
