import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around items-end w-full gap-2">
    <TextInput
      type="tel"
      inputSize="md"
      label="Medium (Default: md)"
      placeholder="e.g. +372 123 4567"
    />
    <TextInput
      type="tel"
      inputSize="lg"
      label="Large (lg)"
      placeholder="e.g. +372 123 4567"
    />
    <TextInput
      type="tel"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="e.g. +372 123 4567"
    />
  </div>
);

export default Example;
