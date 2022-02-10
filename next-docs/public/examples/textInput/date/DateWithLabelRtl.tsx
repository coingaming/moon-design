import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4 w-52">
      <TextInput
        type="date"
        inputSize="medium"
        label="medium"
        placeholder="Placeholder"
        dir={'rtl'}
      />
    </div>
    <div className="m-4 w-52">
      <TextInput
        type="date"
        inputSize="large"
        label="large"
        placeholder="Placeholder"
        dir={'rtl'}
      />
    </div>
    <div className="m-4 w-52">
      <TextInput
        type="date"
        inputSize="xlarge"
        label="xlarge"
        placeholder="Placeholder"
        dir={'rtl'}
      />
    </div>
  </div>
);

export default Example;
