import React from 'react';
import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around items-end w-full gap-2">
    <TextInput type="text" inputSize="md" placeholder="Placeholder" />
    <TextInput type="text" inputSize="lg" placeholder="Placeholder" />
    <TextInput type="text" inputSize="xl" placeholder="Placeholder" />
  </div>
);

export default Example;
