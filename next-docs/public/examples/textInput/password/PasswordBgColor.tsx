import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="xsmall"
        label="xsmall"
        placeholder="Placeholder"
        hintText="Informative message holder"
        showPasswordText="Show"
        backgroundColor="goku.10"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="small"
        label="small"
        placeholder="Placeholder"
        hintText="Informative message holder"
        showPasswordText="Show"
        backgroundColor="goku.10"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="password"
        inputSize="medium"
        label="medium"
        placeholder="Placeholder"
        hintText="Informative message holder"
        showPasswordText="Show"
        backgroundColor="goku.10"
      />
    </div>
  </div>
);

export default Example;
