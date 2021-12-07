import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="time"
        inputSize="xsmall"
        label="xsmall"
        placeholder="Placeholder"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="time"
        inputSize="small"
        label="small"
        placeholder="Placeholder"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="time"
        inputSize="medium"
        label="medium"
        placeholder="Placeholder"
        hintText="Informative message holder"
      />
    </div>
  </div>
);

export default Example;
