import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4">
      <TextInput
        type="url"
        inputSize="medium"
        label="medium"
        placeholder="e.g. https://sportsbet.io"
        hintText="Informative message holder"
        backgroundColor="goku"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="url"
        inputSize="large"
        label="large"
        placeholder="e.g. https://sportsbet.io"
        hintText="Informative message holder"
        backgroundColor="goku"
      />
    </div>
    <div className="m-4">
      <TextInput
        type="url"
        inputSize="xlarge"
        label="xlarge"
        placeholder="e.g. https://sportsbet.io"
        hintText="Informative message holder"
        backgroundColor="goku"
      />
    </div>
  </div>
);

export default Example;
