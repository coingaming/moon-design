import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput type="search" label="Medium (md)" placeholder="e.g. EPL" />
    <TextInput
      type="search"
      inputSize="lg"
      label="Large (lg)"
      placeholder="e.g. EPL"
    />
    <TextInput
      type="search"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="e.g. EPL"
    />
  </div>
);

export default Example;
