import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <p>Text input medium size should always be with label</p>
    <TextInput
      type="text"
      inputSize="medium"
      label="Label text"
      placeholder="Placeholder"
    />

    <TextInput
      type="text"
      inputSize="medium"
      label="Label text"
      placeholder="Placeholder"
      hintText="Informative message holder"
    />

    <div className="flex gap-4 mb-4 items-end">
      <TextInput
        type="text"
        inputSize="medium"
        label="Disabled"
        placeholder="Placeholder"
        hintText="Informative message holder"
        disabled
      />

      <TextInput
        type="text"
        label="Error"
        placeholder="Placeholder"
        inputSize="medium"
        hintText="Informative message holder"
        isError
      />
    </div>
  </div>
);

export default Example;
