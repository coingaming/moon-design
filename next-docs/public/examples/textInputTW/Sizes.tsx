import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around items-end w-full gap-2">
    <TextInput
      type="text"
      inputSize="md"
      label="Medium (Default: md)"
      placeholder="Placeholder"
    />
    <TextInput
      type="text"
      inputSize="lg"
      label="Large (lg)"
      placeholder="Placeholder"
    />
    <TextInput
      type="text"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Placeholder"
    />
  </div>
);

export default Example;
