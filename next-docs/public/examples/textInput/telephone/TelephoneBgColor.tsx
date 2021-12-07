import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="tel"
        inputSize="xsmall"
        label="xsmall"
        placeholder="e.g. +372 123 4567"
        hintText="Informative message holder"
        backgroundColor="goku.10"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="tel"
        inputSize="small"
        label="small"
        placeholder="e.g. +372 123 4567"
        hintText="Informative message holder"
        backgroundColor="goku.10"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="tel"
        inputSize="medium"
        label="medium"
        placeholder="e.g. +372 123 4567"
        hintText="Informative message holder"
        backgroundColor="goku.10"
      />
    </div>
  </div>
);

export default Example;
