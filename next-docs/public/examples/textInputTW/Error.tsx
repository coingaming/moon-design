import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="text"
      inputSize="md"
      label="Medium (Default: md)"
      placeholder="Placeholder"
      hintText="Error message"
      isError
    />
    <TextInput
      type="text"
      inputSize="lg"
      label="Large (lg)"
      placeholder="Placeholder"
      hintText="Error message"
      isError
    />
    <TextInput
      type="text"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Placeholder"
      hintText="Error message"
      isError
    />
  </div>
);

export default Example;
