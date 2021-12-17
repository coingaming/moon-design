import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="xsmall"
        label="xsmall"
        placeholder="e.g. 1234"
        hintText="Informative message holder"
        backgroundColor="goku.10"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="small"
        label="small"
        placeholder="e.g. 1234"
        hintText="Informative message holder"
        backgroundColor="goku.10"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="number"
        inputSize="medium"
        label="medium"
        placeholder="e.g. 1234"
        hintText="Informative message holder"
        backgroundColor="goku.10"
      />
    </div>
  </div>
);

export default Example;
