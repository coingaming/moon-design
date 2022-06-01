import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around items-end w-full gap-2">
    <TextInput
      type="text"
      inputSize="md"
      label="Medium (Default: md)"
      placeholder="Placeholder"
      hintText="Informative message holder"
      backgroundColor="bg-goku"
    />
    <TextInput
      type="text"
      inputSize="lg"
      label="Large (lg)"
      placeholder="Placeholder"
      hintText="Informative message holder"
      backgroundColor="bg-goku"
    />
    <TextInput
      type="text"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Placeholder"
      hintText="Informative message holder"
      backgroundColor="bg-goku"
    />
  </div>
);

export default Example;
