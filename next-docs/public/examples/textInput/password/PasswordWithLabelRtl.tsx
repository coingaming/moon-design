import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="medium"
        label="medium"
        placeholder="Placeholder"
        showPasswordText="Show"
        dir={'rtl'}
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="large"
        label="large"
        placeholder="Placeholder"
        showPasswordText="Show"
        dir={'rtl'}
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="xlarge"
        label="xlarge"
        placeholder="Placeholder"
        showPasswordText="Show"
        dir={'rtl'}
      />
    </div>
  </div>
);

export default Example;
