import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around items-end w-full gap-2">
    <TextInput
      type="url"
      inputSize="md"
      label="Medium (Default: md)"
      placeholder="e.g. https://sportsbet.io"
    />
    <TextInput
      type="url"
      inputSize="lg"
      label="Large (lg)"
      placeholder="e.g. https://sportsbet.io"
    />
    <TextInput
      type="url"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="e.g. https://sportsbet.io"
    />
  </div>
);

export default Example;
