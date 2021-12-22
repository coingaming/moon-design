import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="email"
        value="jake.weary@sportsbet.io"
        inputSize="medium"
        label="medium"
        hintText="Informative message holder"
        readOnly
      />
    </div>
    <div className="m-4">
      <TextInput
        type="email"
        value="jake.weary@sportsbet.io"
        inputSize="large"
        label="large"
        hintText="Informative message holder"
        readOnly
      />
    </div>
    <div className="m-4">
      <TextInput
        type="email"
        value="jake.weary@sportsbet.io"
        inputSize="xlarge"
        label="xlarge"
        hintText="Informative message holder"
        readOnly
      />
    </div>
  </div>
);

export default Example;
