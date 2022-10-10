import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="text"
      label="Medium (md)"
      placeholder="Placeholder"
      hintText="Informative message holder"
      bgColor="bg-beerus"
    />
    <TextInput
      type="text"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Placeholder"
      hintText="Informative message holder"
      bgColor="bg-beerus"
    />
  </div>
);

export default Example;
