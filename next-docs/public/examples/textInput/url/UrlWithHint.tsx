import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="url"
        inputSize="xsmall"
        label="xsmall"
        placeholder="e.g. https://sportsbet.io"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="url"
        inputSize="small"
        label="small"
        placeholder="e.g. https://sportsbet.io"
        hintText="Informative message holder"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="url"
        inputSize="medium"
        label="medium"
        placeholder="e.g. https://sportsbet.io"
        hintText="Informative message holder"
      />
    </div>
  </div>
);

export default Example;
