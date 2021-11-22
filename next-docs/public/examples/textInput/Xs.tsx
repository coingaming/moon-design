import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 mb-4 items-end">
      <TextInput
        type="text"
        inputSize="xsmall"
        label="Label text"
        placeholder="Placeholder"
      />

      <TextInput type="text" inputSize="xsmall" placeholder="Placeholder" />
    </div>

    <div className="flex gap-4 mb-4 items-end">
      <TextInput
        type="text"
        inputSize="xsmall"
        label="Label text"
        placeholder="Placeholder"
        hintText="Informative message holder"
      />

      <TextInput
        type="text"
        placeholder="Placeholder"
        inputSize="xsmall"
        hintText="Informative message holder"
      />
    </div>

    <div className="flex gap-4 mb-4 items-end">
      <TextInput
        type="text"
        inputSize="xsmall"
        label="Disabled"
        placeholder="Placeholder"
        hintText="Informative message holder"
        disabled
      />

      <TextInput
        type="text"
        label="Error"
        placeholder="Placeholder"
        inputSize="xsmall"
        hintText="Informative message holder"
        isError
      />
    </div>
  </div>
);

export default Example;
