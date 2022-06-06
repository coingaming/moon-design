import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="time"
      inputSize="md"
      label="Medium (Default: md)"
      placeholder="Placeholder"
    />
    <TextInput
      type="time"
      inputSize="lg"
      label="Large (lg)"
      placeholder="Placeholder"
    />
    <TextInput
      type="time"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Placeholder"
    />
  </div>
);

export default Example;
