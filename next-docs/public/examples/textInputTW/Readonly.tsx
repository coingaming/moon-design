import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around items-end w-full gap-2">
    <TextInput
      type="text"
      inputSize="md"
      value="Read only text"
      label="Medium (Default: md)"
      placeholder="Placeholder"
      hintText="Error message"
      readOnly
    />
    <TextInput
      type="text"
      inputSize="lg"
      value="Read only text"
      label="Large (lg)"
      placeholder="Placeholder"
      hintText="Error message"
      readOnly
    />
    <TextInput
      type="text"
      inputSize="xl"
      value="Read only text"
      label="Xlarge (xl)"
      placeholder="Placeholder"
      hintText="Error message"
      readOnly
    />
  </div>
);

export default Example;
