import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="text"
      value="Read only text"
      label="Medium (md)"
      placeholder="Placeholder"
      hintText="Informative message holder"
      readOnly
    />
    <TextInput
      type="text"
      inputSize="lg"
      value="Read only text"
      label="Large (lg)"
      placeholder="Placeholder"
      hintText="Informative message holder"
      readOnly
    />
    <TextInput
      type="text"
      inputSize="xl"
      value="Read only text"
      label="Xlarge (xl)"
      placeholder="Placeholder"
      hintText="Informative message holder"
      readOnly
    />
  </div>
);

export default Example;
