import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div
    dir="rtl"
    className="flex flex-col lg:flex-row justify-around items-end w-full gap-2"
  >
    <TextInput
      type="text"
      label="Medium (Default: md)"
      placeholder="Placeholder"
      dir={'rtl'}
    />
    <TextInput
      type="text"
      inputSize="lg"
      label="Large (lg)"
      placeholder="Placeholder"
      dir={'rtl'}
    />
    <TextInput
      type="text"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Placeholder"
      dir={'rtl'}
    />
  </div>
);

export default Example;
