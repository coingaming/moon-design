import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="time"
        value="Text"
        inputSize="xsmall"
        label="xsmall"
        hintText="Informative message holder"
        disabled
      />
    </div>
    <div className="m-4">
      <TextInput
        type="time"
        value="Text"
        inputSize="small"
        label="small"
        hintText="Informative message holder"
        disabled
      />
    </div>
    <div className="m-4">
      <TextInput
        type="time"
        value="Text"
        inputSize="medium"
        label="medium"
        hintText="Informative message holder"
        disabled
      />
    </div>
  </div>
);

export default Example;
