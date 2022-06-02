import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around items-end w-full gap-2">
    <TextInput
      type="password"
      inputSize="md"
      label="Medium (Default: md)"
      placeholder="Password"
      showPasswordText="Show"
    />
    <TextInput
      type="password"
      inputSize="lg"
      label="Large (lg)"
      placeholder="Password"
      showPasswordText="Show"
    />
    <TextInput
      type="password"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Password"
      showPasswordText="Show"
    />
  </div>
);

export default Example;
