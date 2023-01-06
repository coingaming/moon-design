import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="url"
      inputSize="medium"
      label="medium"
      placeholder="e.g. https://sportsbet.io"
      dir={'rtl'}
    />
    <TextInput
      type="url"
      inputSize="large"
      label="large"
      placeholder="e.g. https://sportsbet.io"
      dir={'rtl'}
    />
    <TextInput
      type="url"
      inputSize="xlarge"
      label="xlarge"
      placeholder="e.g. https://sportsbet.io"
      dir={'rtl'}
    />
  </div>
);

export default Example;
