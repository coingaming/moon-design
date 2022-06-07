import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="email"
      inputSize="medium"
      label="medium"
      placeholder="e.g. jake.weary@sportsbet.io"
    />
    <TextInput
      type="email"
      inputSize="large"
      label="large"
      placeholder="e.g. jake.weary@sportsbet.io"
    />
    <TextInput
      type="email"
      inputSize="xlarge"
      label="xlarge"
      placeholder="e.g. jake.weary@sportsbet.io"
    />
  </div>
);

export default Example;
