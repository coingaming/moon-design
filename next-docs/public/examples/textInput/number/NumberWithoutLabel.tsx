import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="medium"
        placeholder="medium e.g. 1234"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="large"
        placeholder="large e.g. 1234"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="xlarge"
        placeholder="xlarge e.g. 1234"
      />
    </div>
  </div>
);

export default Example;
