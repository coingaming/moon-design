import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="tel"
        inputSize="medium"
        label="medium"
        placeholder="e.g. +372 123 4567"
        dir={'rtl'}
      />
    </div>
    <div className="m-4">
      <TextInput
        type="tel"
        inputSize="large"
        label="large"
        placeholder="e.g. +372 123 4567"
        dir={'rtl'}
      />
    </div>
    <div className="m-4">
      <TextInput
        type="tel"
        inputSize="xlarge"
        label="xlarge"
        placeholder="e.g. +372 123 4567"
        dir={'rtl'}
      />
    </div>
  </div>
);

export default Example;
