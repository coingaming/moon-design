import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="email"
        inputSize="medium"
        label="medium"
        placeholder="e.g. jake.weary@sportsbet.io"
        hintText="Error message"
        isError
      />
    </div>
    <div className="m-4">
      <TextInput
        type="email"
        inputSize="large"
        label="large"
        placeholder="e.g. jake.weary@sportsbet.io"
        hintText="Error message"
        isError
      />
    </div>
    <div className="m-4">
      <TextInput
        type="email"
        inputSize="xlarge"
        label="xlarge"
        placeholder="e.g. jake.weary@sportsbet.io"
        hintText="Error message"
        isError
      />
    </div>
  </div>
);

export default Example;
