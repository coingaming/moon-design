import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="email"
      inputSize="md"
      label="Medium (Default: md)"
      placeholder="e.g. jake.weary@sportsbet.io"
    />
    <TextInput
      type="email"
      inputSize="lg"
      label="Large (lg)"
      placeholder="e.g. jake.weary@sportsbet.io"
    />
    <TextInput
      type="email"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="e.g. jake.weary@sportsbet.io"
    />
  </div>
);

export default Example;
