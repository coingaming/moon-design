import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="search"
        inputSize="xsmall"
        label="xsmall"
        placeholder="e.g. EPL"
        hintText="Error message"
        isError
      />
    </div>
    <div className="m-4">
      <TextInput
        type="search"
        inputSize="small"
        label="small"
        placeholder="e.g. EPL"
        hintText="Error message"
        isError
      />
    </div>
    <div className="m-4">
      <TextInput
        type="search"
        inputSize="medium"
        label="medium"
        placeholder="e.g. EPL"
        hintText="Error message"
        isError
      />
    </div>
  </div>
);

export default Example;
